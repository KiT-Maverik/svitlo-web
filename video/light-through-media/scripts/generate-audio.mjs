import {mkdirSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, '..', 'public', 'soundtrack.wav');
const sampleRate=22050;
const seconds=38;
const total=seconds*sampleRate;
const bytes=44+total*2;
const buf=Buffer.alloc(bytes);
buf.write('RIFF',0);
buf.writeUInt32LE(bytes-8,4);
buf.write('WAVE',8);
buf.write('fmt ',12);
buf.writeUInt32LE(16,16);
buf.writeUInt16LE(1,20);
buf.writeUInt16LE(1,22);
buf.writeUInt32LE(sampleRate,24);
buf.writeUInt32LE(sampleRate*2,28);
buf.writeUInt16LE(2,32);
buf.writeUInt16LE(16,34);
buf.write('data',36);
buf.writeUInt32LE(total*2,40);

const TAU=Math.PI*2;
const chordSets=[
  [146.83,174.61,220],
  [146.83,196,233.08],
  [130.81,164.81,196],
  [146.83,174.61,220],
  [164.81,196,246.94],
  [146.83,174.61,220],
];
const changes=[0,6,13,20,26,32];
const cues=[0,5,13,16.65,20.3,24,32,34.5];
let noiseState=0x3A29BD7;
const noise=()=>{noiseState=(Math.imul(noiseState,1664525)+1013904223)>>>0;return noiseState/2147483648-1;};
const envelope=(age,length)=>{
 if(age<0||age>length)return 0;
 return Math.min(1,age/.07)*Math.pow(1-age/length,1.7);
};
for(let i=0;i<total;i++){
 const t=i/sampleRate;
 let section=0;for(let j=1;j<changes.length;j++)if(t>=changes[j])section=j;
 const freqs=chordSets[section];
 let pad=0;
 for(let k=0;k<freqs.length;k++){
   const hz=freqs[k];
   const wobble=1+0.0012*Math.sin(TAU*.16*t+k);
   pad += Math.sin(TAU*hz*wobble*t+k*.9)*.08;
   pad += Math.sin(TAU*(hz/2)*t+k)*.045;
   pad += Math.sin(TAU*hz*2*t+k)*.011;
 }
 const air=(Math.sin(TAU*35*t)*.028 +Math.sin(TAU*45*t)*.023);
 let bell=0, swoosh=0;
 for(let c=0;c<cues.length;c++){
   const dt=t-cues[c];
   if(dt>=0&&dt<2.4){
      const env=envelope(dt,2.4);
      bell+=env*(.10*Math.sin(TAU*(440+60*c)*dt)+.05*Math.sin(TAU*(880+120*c)*dt)) * Math.exp(-dt*.8);
   }
   const pre=t-(cues[c]-.33);
   if(pre>=0&&pre<.65){
      swoosh+=noise()*.14*Math.sin(Math.PI*pre/.65)**2;
   }
 }
 const throb=.74+.26*Math.sin(TAU*(.40+.02*section)*t)**2;
 const fadeIn=Math.min(1,t/1.7),fadeOut=Math.min(1,(seconds-t)/2.6);
 const value=(pad*throb+air+bell+swoosh)*Math.max(0,fadeIn*fadeOut);
 const pcm=Math.round(Math.max(-1,Math.min(1,value))*32767);
 buf.writeInt16LE(pcm,44+i*2);
}
mkdirSync(dirname(out),{recursive:true});
writeFileSync(out,buf);
console.log('Generated',out, '('+(bytes/1024/1024).toFixed(2)+' MiB)');
