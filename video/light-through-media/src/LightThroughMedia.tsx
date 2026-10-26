import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {C, DURATION, SCENES, clamp, type FilmProps} from './constants';
import {Backdrop, PageChrome} from './visuals';
import {Opening, Introduction, Materials, Comparison, Ending} from './scenes';

function Film({accent,title,subtitle,showPhysics,sound}: FilmProps){
  const frame=useCurrentFrame();
  const activeAccent = frame < SCENES.opening.duration ? accent
    : frame < SCENES.introduction.start + SCENES.introduction.duration ? C.gold
    : frame < SCENES.materials.start+SCENES.materials.duration ? C.cobalt
    : frame < SCENES.comparison.start+SCENES.comparison.duration ? accent : C.violet;
  const chapter = frame < SCENES.opening.duration ? 'ПРОЛОГ'
    : frame < SCENES.introduction.start + SCENES.introduction.duration ? 'ВАКУУМ'
    : frame < SCENES.materials.start+SCENES.materials.duration ? 'ЗАЛОМЛЕННЯ'
    : frame < SCENES.comparison.start + SCENES.comparison.duration ? 'ШВИДКІСТЬ' : 'ФІНАЛ';
  const flashes=[SCENES.introduction.start, SCENES.materials.start, SCENES.comparison.start, SCENES.ending.start];
  const wash=Math.max(0,...flashes.map(start => clamp(1-Math.abs(frame-start)/9)))*.22;
  return <AbsoluteFill style={{backgroundColor:C.bg,overflow:'hidden'}}>
    <Backdrop accent={activeAccent} />
    <Sequence from={SCENES.opening.start} durationInFrames={SCENES.opening.duration}>
      <Opening accent={accent} title={title} subtitle={subtitle} showPhysics={showPhysics} sound={sound}/>
    </Sequence>
    <Sequence from={SCENES.introduction.start} durationInFrames={SCENES.introduction.duration}>
      <Introduction accent={accent} title={title} subtitle={subtitle} showPhysics={showPhysics} sound={sound}/>
    </Sequence>
    <Sequence from={SCENES.materials.start} durationInFrames={SCENES.materials.duration}>
      <Materials accent={accent} title={title} subtitle={subtitle} showPhysics={showPhysics} sound={sound}/>
    </Sequence>
    <Sequence from={SCENES.comparison.start} durationInFrames={SCENES.comparison.duration}>
      <Comparison accent={accent} title={title} subtitle={subtitle} showPhysics={showPhysics} sound={sound}/>
    </Sequence>
    <Sequence from={SCENES.ending.start} durationInFrames={SCENES.ending.duration}>
      <Ending accent={accent} title={title} subtitle={subtitle} showPhysics={showPhysics} sound={sound}/>
    </Sequence>
    <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 50% 48%,#d2f9ff,transparent 85%)`,opacity:wash,mixBlendMode:'screen',pointerEvents:'none'}}/>
    <PageChrome chapter={chapter} accent={activeAccent}/>
    {sound && <Audio src={staticFile('soundtrack.wav')} volume={f => {
      const fadeIn=interpolate(f,[0,40],[0,.8],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
      const fadeOut=interpolate(f,[DURATION-75,DURATION-1],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
      return Math.max(0,Math.min(fadeIn,fadeOut));
    }} />}
  </AbsoluteFill>;
}

export const LightThroughMedia = (props:FilmProps)=><Film {...props}/>;
