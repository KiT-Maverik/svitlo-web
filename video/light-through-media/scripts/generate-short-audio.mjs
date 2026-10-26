import {mkdirSync, writeFileSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const destination=join(dirname(fileURLToPath(import.meta.url)),'..','public','short-soundtrack.wav');
const SAMPLE_RATE=22050;
const SECONDS=25;
const size=SECONDS*SAMPLE_RATE;
const wav=Buffer.alloc(44+size*2);
wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVE',8);
wav.write('fmt ',12);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);
wav.writeUInt16LE(1,22);wav.writeUInt32LE(1,24);wav.writeUInt32LE(SAMPLE_RATE,24);
wav.writeUInt32LE(SAMPLE_RATE*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);
wav.write('data',36);wav.writeUInt32LE(size*2,40);

const TAU=2*Math.PI;
const bpm=122;
const beat=60/bpm;
const song=[
  {root:146.83,notes:[293.66,369.99,440.00]},
  {root:123.47,notes:[246.94,293.66,369.99]},
  {root:98.00,notes:[196.00,246.94,293.66]},
  {root:110.00,notes:[220.00,277.18,329.63]},
  {root:146.83,notes:[293.66,369.99,440.00]},
];
let noiseSeed=0xC0FFEE;
const rand=()=>{noiseSeed=(Math.imul(1664525,noiseSeed)+1013904223)>>>0;return noiseSeed/2147483648-1;};
const env=(time, length, attack=.006)=>time<0||time>=length?0:Math.min(1,time/attack)*Math.pow(1-time/length,2);
const transitionCues=[0,4,9,15,20];
for(let i=0;i<size;i++){
  const t=i/SAMPLE_RATE;
  const sixteenth=t/(beat/4);
  const eighth=Math.floor(t/(beat/2));
  const step=Math.floor(t/beat);
  const bar=Math.floor(t/(beat*4));
  const chord=song[Math.min(song.length-1,Math.floor(t/5))];
  const beatPhase=t%beat;
  const kick=env(beatPhase,.28)*Math.sin(TAU*(62-23*(beatPhase/.28))*beatPhase)*.28;
  const clapPhase=(t-beat)%(2*beat);
  const clap=(clapPhase>=0?env(clapPhase,.12):0)*rand()*.11;
  const hatPhase=t%(beat/2);
  const hat=env(hatPhase,.06)*rand()*(eighth%2===0?.045:.026);
  const bassPhase=t%(beat*2);
  const bass=.12*Math.sin(TAU*(chord.root/2)*t)*env(bassPhase,beat*1.78,.015);
  const arp=chord.notes[Math.floor(sixteenth)%3];
  const arpPhase=t%(beat/4);
  const pluck=env(arpPhase,beat/3,.009)*(
    .045*Math.sin(TAU*arp*t)+.012*Math.sin(TAU*arp*2*t));
  const pad=chord.notes.reduce((s,n,j)=>s+Math.sin(TAU*n*t+j*.8)*.018,0);
  let hits=0;
  for(let j=0;j<transitionCues.length;j++){
    const age=t-transitionCues[j];
    hits+=env(age,.55)*Math.sin(TAU*(610+j*42)*age)*.1;
    const pre=t-(transitionCues[j]-.20);
    if(pre>0&&pre<.20)hits+=rand()*.08*(pre/.20);
  }
  const swell=1+Math.min(1,t/12)*.10;
  const fade=Math.min(1,t/.32,(SECONDS-t)/.76);
  const sample=Math.max(-.96,Math.min(.96,(kick+clap+hat+bass+pluck+pad+hits)*swell*Math.max(0,fade)));
  wav.writeInt16LE(Math.round(sample*32767),44+i*2);
}
mkdirSync(dirname(destination),{recursive:true});
writeFileSync(destination,wav);
console.log('Generated local 25-second ad soundtrack:',destination);
