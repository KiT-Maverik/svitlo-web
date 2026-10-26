import {Audio} from '@remotion/media';
import {AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {AD_DURATION, CUTS, PALETTE as P, clamp, type AdProps} from './ad.constants';
import {Background, Chrome} from './ad.visuals';
import {Hook, Discover, Equation, Method, Finale} from './ad.scenes';

export function FractionsAdShort({brand,hook,cta,accent,sound}: AdProps) {
 const frame=useCurrentFrame();
 const chapter=frame<CUTS.discover.from?'ПРОБЛЕМА':
   frame<CUTS.equation.from?'ПОЯСНЕННЯ':
   frame<CUTS.method.from?'МАТЕМАТИКА':
   frame<CUTS.cta.from?'ПРАКТИКА':'СВІТЛО';
 const cuePoints=[CUTS.discover.from,CUTS.equation.from,CUTS.method.from,CUTS.cta.from];
 const flash=Math.max(0,...cuePoints.map(cue=>clamp(1-Math.abs(frame-cue)/10)));
 const exit=interpolate(frame,[AD_DURATION-19,AD_DURATION],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{background:P.dark,overflow:'hidden',opacity:exit}}>
    <Background accent={accent}/>
    <Sequence from={CUTS.hook.from} durationInFrames={CUTS.hook.duration}>
      <Hook hook={hook} accent={accent}/>
    </Sequence>
    <Sequence from={CUTS.discover.from} durationInFrames={CUTS.discover.duration}>
      <Discover accent={accent}/>
    </Sequence>
    <Sequence from={CUTS.equation.from} durationInFrames={CUTS.equation.duration}>
      <Equation accent={accent}/>
    </Sequence>
    <Sequence from={CUTS.method.from} durationInFrames={CUTS.method.duration}>
      <Method accent={accent}/>
    </Sequence>
    <Sequence from={CUTS.cta.from} durationInFrames={CUTS.cta.duration}>
      <Finale brand={brand} cta={cta} accent={accent}/>
    </Sequence>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 55% 47%,#f6f4ff,transparent 80%)',opacity:flash*.37,mixBlendMode:'screen',pointerEvents:'none'}}/>
    <Chrome brand={brand} section={chapter} accent={accent}/>
    {sound&&<Audio src={staticFile('short-soundtrack.wav')} volume={f=>{
      const fadeIn=interpolate(f,[0,12],[0,.85],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
      const fadeOut=interpolate(f,[AD_DURATION-35,AD_DURATION-1],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
      return Math.max(0,Math.min(fadeIn,fadeOut));
    }}/>}
 </AbsoluteFill>;
}
