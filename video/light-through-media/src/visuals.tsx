import type {CSSProperties, ReactNode} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {C, clamp, degrees, roundedSpeed, smoothstep} from './constants';

export const hash = (n: number): number => {
  const x = Math.sin(n * 127.1 + 27.17) * 43758.5453;
  return x - Math.floor(x);
};

export const reveal = (frame: number, at = 0, duration = 30): number =>
  smoothstep((frame - at) / duration);

export const blend = (frame: number, duration: number, fadeIn = 18, fadeOut = 18): number =>
  Math.min(reveal(frame, 0, fadeIn), 1 - reveal(frame, duration - fadeOut, fadeOut));

export function Backdrop({accent = C.cyan, intensity = 1}: {accent?: string; intensity?: number}) {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const stars = Array.from({length: 100}, (_, i) => ({
    x: hash(i * 7 + 2) * width,
    y: hash(i * 7 + 8) * height,
    radius: 0.8 + hash(i * 4 + 1) * 1.9,
    opacity: .13 + hash(i * 4 + 9) * .45,
    shift: hash(i * 3 + 17) * Math.PI * 2,
  }));
  return (
    <div style={{position:'absolute', inset:0, overflow:'hidden', background:C.bg}}>
      <div style={{position:'absolute',inset:-200,background:`radial-gradient(ellipse at ${33 + Math.sin(frame/160)*6}% ${44 + Math.cos(frame/120)*4}%, ${accent}25 0%, transparent 46%), radial-gradient(ellipse at 83% 15%, #3547b44b, transparent 51%), linear-gradient(137deg,#030818 0%,#07132f 50%,#020815 100%)`,opacity:intensity}}/>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(#7299bf10 1px, transparent 1px),linear-gradient(90deg,#7299bf10 1px, transparent 1px)',backgroundSize:'94px 94px',maskImage:'linear-gradient(to bottom,transparent 1%,black 42%,black 77%,transparent 100%)',transform:`translate3d(${-frame*.09}px,${frame*.06}px,0)`}}/>
      {stars.map((star,i)=>(
        <div key={i} style={{position:'absolute',left:star.x,top:star.y,width:star.radius*2,height:star.radius*2,borderRadius:'50%',background:i%7===0?C.gold:'#d5efff',opacity:star.opacity*(.65+.35*Math.sin(frame/36+star.shift)),boxShadow:i%9===0?'0 0 17px 2px #8fe8ff90':undefined,transform:`translateY(${Math.sin(frame/100+star.shift)*11}px)`}}/>
      ))}
      <div style={{position:'absolute',inset:0,boxShadow:'inset 0 0 240px 80px #010310aa',pointerEvents:'none'}}/>
    </div>
  );
}

export function PageChrome({chapter,accent=C.cyan}:{chapter:string;accent?:string}) {
  const frame = useCurrentFrame();
  const {width,height,durationInFrames}=useVideoConfig();
  const portrait = height > width;
  const inset = portrait ? 62 : 96;
  const progress = (frame / durationInFrames) * 100;
  return (
    <div style={{position:'absolute',inset, zIndex:50,pointerEvents:'none',fontFamily:'Arial, sans-serif'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:30,color:C.ink}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:32,height:32,border:`2px solid ${accent}`,transform:'rotate(45deg)',boxShadow:`0 0 25px ${accent}80`,display:'grid',placeItems:'center'}}>
            <div style={{width:10,height:10,background:accent,borderRadius:4}}/>
          </div>
          <div style={{fontSize:22,fontWeight:900,letterSpacing:6}}>СВІТЛО</div>
        </div>
        <div style={{textAlign:'right',color:C.muted,fontSize:portrait?15:19,letterSpacing:4,fontWeight:700}}>НАУКА У РУСІ <span style={{color:accent}}> / </span> {chapter}</div>
      </div>
      <div style={{position:'absolute',bottom:0,left:0,right:0}}>
        <div style={{display:'flex',justifyContent:'space-between',color:C.muted,fontSize:portrait?16:17,letterSpacing:3,marginBottom:17}}>
          <span>ОПТИКА / 001</span>
          <span>{Math.floor(frame/30).toString().padStart(2,'0')} : {Math.floor(durationInFrames/30).toString().padStart(2,'0')}</span>
        </div>
        <div style={{height:2,background:'#ffffff22',position:'relative'}}>
          <div style={{width:`${progress}%`,height:'100%',background:accent,boxShadow:`0 0 14px ${accent}`}}/>
        </div>
      </div>
    </div>
  );
}

export function UpperLabel({children,accent=C.cyan}: {children:ReactNode;accent?:string}) {
  return <div style={{fontFamily:'Arial, sans-serif',display:'flex',alignItems:'center',gap:18,fontSize:19,letterSpacing:5,fontWeight:800,color:accent,textTransform:'uppercase'}}>
    <div style={{height:2,width:45,background:accent,boxShadow:`0 0 19px ${accent}`}}/>
    {children}
  </div>;
}

export function LargeType({children,style}: {children:ReactNode;style?:CSSProperties}) {
  return <div style={{fontFamily:'Arial, sans-serif',fontSize:99,fontWeight:900,letterSpacing:-4,lineHeight:1.04,color:C.ink,textShadow:'0 14px 50px #02071baa',...style}}>{children}</div>;
}

export function FlickerLine({from,to,frame,color=C.cyan}:{from:number;to:number;frame:number;color?:string}) {
  const alpha = reveal(frame,from,to);
  return <div style={{height:2,width:`${alpha*100}%`,background:`linear-gradient(to right,transparent,${color},transparent)`,boxShadow:`0 0 26px ${color}`}}/>;
}

export function Prism({accent=C.cyan,scale=1}:{accent?:string;scale?:number}) {
  const frame=useCurrentFrame();
  const rotate = -4+Math.sin(frame/90)*5;
  const shimmer = .4 + .6*Math.sin(frame/30);
  return (
    <svg viewBox="0 0 680 660" style={{width:'100%',height:'100%',overflow:'visible',filter:'drop-shadow(0 18px 42px #010713e0)',transform:`perspective(1200px) rotateY(${rotate}deg) scale(${scale})`}} role="img" aria-label="Художня візуалізація скляної призми, що розкладає світло">
      <defs>
        <linearGradient id="prismFace" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d4ffff" stopOpacity=".75"/><stop offset=".35" stopColor="#729ffb" stopOpacity=".14"/><stop offset="1" stopColor="#dc85fa" stopOpacity=".36"/></linearGradient>
        <linearGradient id="prismEdge"><stop stopColor={accent}/><stop offset=".6" stopColor="#efffff"/><stop offset="1" stopColor="#c289ff"/></linearGradient>
        <filter id="prismBlur"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>
      <g opacity=".4" filter="url(#prismBlur)">
        <path d="M-10 362 L251 340" stroke={accent} strokeWidth="26"/>
        {['#ff779c','#ffc56c','#e8fa86','#72f6ce','#6eb8ff','#d39aff'].map((c,i)=><path key={i} d={`M375 ${345+i*5} L680 ${260+i*39}`} stroke={c} strokeWidth="9"/>)}
      </g>
      <path d="M-10 362 L250 340" stroke={C.ink} strokeWidth="3" opacity=".8"/>
      <path d="M-10 362 L250 340" stroke={accent} strokeWidth="14" opacity=".9" filter="url(#prismBlur)"/>
      <path d="M256 354 L370 92 L510 415 Z" fill="url(#prismFace)" stroke="url(#prismEdge)" strokeWidth="4"/>
      <path d="M370 92 L410 118 L549 446 L510 415 Z" fill="#9bcaff" fillOpacity=".18" stroke="#a3eaff" strokeWidth="2"/>
      <path d="M256 354 L293 378 L549 446 L510 415 Z" fill="#3b61ab" fillOpacity=".33" stroke="#c4f1ff" strokeWidth="2"/>
      <path d="M256 354 L370 92 L510 415" fill="none" stroke="#fff" strokeOpacity={.3+shimmer*.5} strokeWidth="5"/>
      {['#ff779c','#ffc56c','#e8fa86','#72f6ce','#6eb8ff','#d39aff'].map((c,i)=>(
        <path key={i} d={`M401 ${342+i*3} L680 ${270+i*39}`} fill="none" stroke={c} strokeWidth="4" opacity=".86"/>
      ))}
      <circle cx="378" cy="335" r="104" fill={accent} fillOpacity=".08" filter="url(#prismBlur)"/>
    </svg>
  );
}

export function OpticalDiagram({n,accent=C.cyan,frame,showPhysics=true,compact=false}:{n:number;accent?:string;frame:number;showPhysics?:boolean;compact?:boolean}) {
  const theta1 = Math.atan(.3);
  const theta2 = Math.asin(Math.sin(theta1)/n);
  const inY = 330;
  const outY = inY+530*Math.tan(theta2);
  const finalY=outY+270*.3;
  const d = `M 90 144 L 710 ${inY} L 1240 ${outY} L 1510 ${finalY}`;
  const travel = clamp((frame-22)/155);
  const circleTravel = (frame * .018)%1;
  const pulseX = circleTravel<.47 ? 90+(circleTravel/.47)*620 : circleTravel<.83 ? 710+((circleTravel-.47)/.36)*530 : 1240+((circleTravel-.83)/.17)*270;
  const pulseY = pulseX<710 ? 144+(pulseX-90)*.3 : pulseX<1240?inY+(pulseX-710)*Math.tan(theta2):outY+(pulseX-1240)*.3;
  return <svg viewBox="0 0 1600 680" role="img" aria-label={`Схема заломлення світла: показник заломлення ${n}`} style={{width:'100%',height:'100%',overflow:'visible'}}>
    <defs>
      <linearGradient id="mediumGlass" x1="0" x2="1" y1="0" y2="1"><stop stopColor={accent} stopOpacity=".29"/><stop offset=".5" stopColor="#c3eeff" stopOpacity=".07"/><stop offset="1" stopColor={accent} stopOpacity=".22"/></linearGradient>
      <linearGradient id="incidentGlow" x1="0" x2="1"><stop stopColor="#ffedab" stopOpacity="0"/><stop offset=".6" stopColor="#fff0a1"/><stop offset="1" stopColor={accent}/></linearGradient>
      <filter id="beamGlow"><feGaussianBlur stdDeviation="13"/></filter>
      <filter id="sparkGlow"><feGaussianBlur stdDeviation="6"/></filter>
      <clipPath id="slabClip"><rect x="710" y="60" width="530" height="540" rx="19"/></clipPath>
    </defs>
    <g opacity=".43">
      {Array.from({length:11},(_,i)=><path key={i} d={`M ${80+i*148} 85 V 600`} stroke="#a2bbda" strokeWidth="1" strokeDasharray="4 18" opacity=".28"/>)}
      {[148,330,514].map(y=><path key={y} d={`M 80 ${y} H 1520`} stroke="#b2d0ff" strokeWidth="1" strokeDasharray="4 18" opacity=".24"/>)}
    </g>
    <rect x="710" y="60" width="530" height="540" rx="19" fill="url(#mediumGlass)" stroke={accent} strokeWidth="1.6" strokeOpacity=".72"/>
    <path d="M712 61 V600 M1238 61 V600" stroke={C.ink} strokeWidth="2" opacity=".38"/>
    <g clipPath="url(#slabClip)" opacity=".3">
      {Array.from({length:14},(_,i)=><path key={i} d={`M${710+i*52+Math.sin(frame/46+i)*23} 30 l-290 620`} stroke={accent} strokeWidth={i%4===0?5:1} opacity={i%3===0?.34:.13}/>)}
      {Array.from({length:6},(_,i)=><ellipse key={i} cx={760+i*95} cy={295+Math.sin(i+frame/29)*85} rx="17" ry="155" fill={accent} opacity=".065"/>)}
    </g>
    <path d="M710 45 V615" stroke={C.ink} strokeDasharray="8 15" opacity=".3"/>
    <path d="M610 330 H 810" stroke={C.ink} strokeWidth="2" strokeDasharray="6 7" opacity=".5"/>
    {showPhysics&&<g fill={C.muted} fontSize={compact?29:27} fontFamily="Arial, sans-serif" letterSpacing="2">
      <text x="110" y="110">n₁ = 1.000</text>
      <text x="824" y="120" fill={accent}>n₂ = {n.toFixed(n===1.000293?6:3)}</text>
      <text x="641" y="386">θ₁</text>
      <text x="754" y="382" fill={accent}>θ₂ = {degrees(theta2).toFixed(1)}°</text>
    </g>}
    <path d={d} stroke={accent} strokeWidth="36" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity=".6" filter="url(#beamGlow)" pathLength={100} strokeDasharray="100" strokeDashoffset={100*(1-travel)}/>
    <path d={d} stroke="url(#incidentGlow)" strokeWidth="8" fill="none" strokeLinejoin="round" strokeLinecap="round" pathLength={100} strokeDasharray="100" strokeDashoffset={100*(1-travel)}/>
    <path d={d} stroke="#ffffff" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity=".85" pathLength={100} strokeDasharray="100" strokeDashoffset={100*(1-travel)}/>
    {travel>.7&&<g>
      <circle cx={pulseX} cy={pulseY} r="35" fill={accent} opacity=".8" filter="url(#sparkGlow)"/>
      <circle cx={pulseX} cy={pulseY} r="10" fill="#ffffff"/>
      <circle cx={pulseX} cy={pulseY} r="28" stroke={C.ink} strokeWidth="2" opacity=".65" fill="none"/>
    </g>}
    <circle cx="710" cy="330" r={32+8*Math.sin(frame/15)} fill="none" stroke={accent} strokeWidth="2" opacity={.3+.15*Math.sin(frame/22)}/>
    <circle cx="1240" cy={outY} r="8" fill="#f0faff" />
    <text x="805" y="570" fill={C.muted} fontFamily="Arial, sans-serif" fontSize="20" letterSpacing="4">МЕЖА СЕРЕДОВИЩ</text>
  </svg>;
}

export function SheenPanel({children,accent=C.cyan,style={}}:{children:ReactNode;accent?:string;style?:CSSProperties}) {
  return <div style={{padding:'30px 38px',border:`1px solid ${accent}50`,background:'linear-gradient(135deg,#17294cba,#050e29a8)',boxShadow:`inset 0 1px #fff3,0 24px 100px #0007,0 0 40px ${accent}10`,backdropFilter:'blur(20px)',borderRadius:22,...style}}>{children}</div>;
}
