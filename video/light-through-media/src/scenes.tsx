import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, MEDIA, SCENES, clamp, roundedSpeed, smoothstep, type FilmProps} from './constants';
import {FlickerLine, LargeType, OpticalDiagram, Prism, SheenPanel, UpperLabel, blend, hash, reveal} from './visuals';

const shell: CSSProperties = {position:'absolute',inset:0,fontFamily:'Arial, sans-serif',color:C.ink,overflow:'hidden'};
function In({children,frame,at=0,shift=50,delay=30,style={}}:{children:ReactNode;frame:number;at?:number;shift?:number;delay?:number;style?:CSSProperties}){
  const vis=reveal(frame,at,delay);
  return <div style={{opacity:vis,transform:`translate3d(0,${(1-vis)*shift}px,0)`,...style}}>{children}</div>;
}

export const Opening=({title,subtitle,accent}:FilmProps) => {
  const frame=useCurrentFrame();
  const {width,height,fps}=useVideoConfig();
  const portrait=height>width;
  const enter=spring({frame:frame-7,fps,config:{damping:16,stiffness:70,mass:1}});
  const goodbye=1-reveal(frame,SCENES.opening.duration-26,26);
  return <AbsoluteFill style={{...shell,opacity:goodbye}}>
    <div style={{position:'absolute',left:portrait?54:100,top:portrait?280:195,width:portrait?'90%':'62%',zIndex:10}}>
      <In frame={frame} at={6}><UpperLabel accent={accent}>ФІЗИКА, ЯКУ МОЖНА ПОБАЧИТИ</UpperLabel></In>
      <div style={{marginTop:portrait?55:43,overflow:'hidden'}}>
        <div style={{transform:`translateY(${(1-enter)*155}px)`,opacity:enter}}>
          <LargeType style={{fontSize:portrait?90:116,letterSpacing:portrait?-3:-5,maxWidth:portrait?900:1100}}>
            {title}
          </LargeType>
        </div>
      </div>
      <In frame={frame} at={36} style={{marginTop:34}}>
        <div style={{fontSize:portrait?35:37,fontWeight:400,color:C.muted,letterSpacing:1.8}}>{subtitle}</div>
      </In>
      <In frame={frame} at={52} style={{marginTop:46,maxWidth:portrait?720:590}}>
        <FlickerLine frame={frame} from={50} to={95} color={accent}/>
        <div style={{marginTop:26,color:C.muted,fontSize:18,letterSpacing:4}}>ПОДОРОЖ КРІЗЬ ПОВІТРЯ, ВОДУ І СКЛО</div>
      </In>
    </div>
    <div style={{position:'absolute',width:portrait?860:830,height:portrait?830:830,right:portrait?70:-50,top:portrait?730:65,transform:`scale(${.94+.06*enter+frame*.00003})`,opacity:.45+.55*enter}}>
      <Prism accent={accent}/>
    </div>
    <div style={{position:'absolute',top:portrait?640:42,right:portrait?150:310,width:portrait?520:560,height:portrait?520:560,borderRadius:'50%',border:`1px solid ${accent}35`,transform:`rotate(${frame/9}deg) scale(${.8+enter*.2})`,boxShadow:`0 0 100px ${accent}11`}}>
      {[.64,.82,1.2].map((s,i)=><div key={i} style={{position:'absolute',inset:0,border:`1px dashed ${i===1?C.gold:accent}50`,borderRadius:'50%',transform:`scale(${s}) rotate(${frame/(i+3)}deg)`}}/>)}
    </div>
    <div style={{position:'absolute',left:portrait?60:104,bottom:portrait?250:165,opacity:reveal(frame,80,25),color:C.gold,fontSize:21,fontWeight:700,letterSpacing:4}}>ЗМІНИ СЕРЕДОВИЩЕ — ЗМІНИ ШВИДКІСТЬ</div>
  </AbsoluteFill>;
};

export const Introduction=({accent,showPhysics}:FilmProps) => {
  const frame=useCurrentFrame();
  const {width,height,fps}=useVideoConfig();
  const portrait=height>width;
  const count=interpolate(frame,[22,180],[0,299792],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const float=spring({frame:frame-16,fps,config:{damping:17,stiffness:90}});
  const vanish=1-reveal(frame,SCENES.introduction.duration-22,22);
  return <AbsoluteFill style={{...shell,opacity:vanish}}>
    <div style={{position:'absolute',top:portrait?265:147,left:portrait?74:120,right:portrait?74:120}}>
      <In frame={frame}><UpperLabel accent={C.gold}>РОЗДІЛ 01 / СВІТЛО У ВАКУУМІ</UpperLabel></In>
      <In frame={frame} at={15}>
        <LargeType style={{fontSize:portrait?76:87,marginTop:32}}>Найшвидший шлях.</LargeType>
      </In>
      <In frame={frame} at={33}>
        <div style={{color:C.muted,fontSize:portrait?28:27,marginTop:23,letterSpacing:1}}>У вакуумі світлу нічого не заважає поширюватися.</div>
      </In>
    </div>
    <div style={{position:'absolute',top:portrait?700:340,left:portrait?-55:60,width:portrait?1190:1800,height:portrait?530:625,opacity:.25+.75*float}}>
      <OpticalDiagram n={1} frame={frame} accent={C.gold} showPhysics={showPhysics} compact={portrait}/>
    </div>
    <SheenPanel accent={C.gold} style={{position:'absolute',right:portrait?70:134,bottom:portrait?365:165,width:portrait?795:550,transform:`translateY(${(1-float)*100}px)`,opacity:float}}>
      <div style={{fontSize:20,color:C.gold,letterSpacing:4}}>ШВИДКІСТЬ СВІТЛА</div>
      <div style={{fontSize:portrait?85:72,fontWeight:900,letterSpacing:-3,marginTop:10}}>{Math.round(count).toLocaleString('uk-UA')}</div>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:21,color:C.muted,letterSpacing:2}}>
        <span>км / с</span><span>c ≈ 299 792 км/с</span>
      </div>
    </SheenPanel>
    <div style={{position:'absolute',left:portrait?90:133,bottom:portrait?265:198,fontSize:19,letterSpacing:3,color:C.muted}}>АНІМАЦІЯ СИЛЬНО СПОВІЛЬНЕНА ДЛЯ НАОЧНОСТІ</div>
  </AbsoluteFill>;
};

const MATERIALS=MEDIA.slice(1);
const SLICES=[110,110,110] as const;

const MaterialCard=({material,accent,showPhysics,index}: {material:typeof MATERIALS[number];accent:string;showPhysics:boolean;index:number})=>{
  const frame=useCurrentFrame();
  const {width,height,fps}=useVideoConfig();
  const portrait=height>width;
  const enter=spring({frame:frame-4,fps,config:{damping:17,stiffness:90}});
  const alpha=blend(frame,SLICES[index],13,14);
  const rayFrame=frame+38;
  return <AbsoluteFill style={{...shell,opacity:alpha}}>
    <div style={{position:'absolute',left:portrait?74:130,top:portrait?245:130}}>
      <UpperLabel accent={material.color}>РОЗДІЛ 02 / РІЗНІ СЕРЕДОВИЩА</UpperLabel>
      <div style={{marginTop:36,transform:`translateY(${(1-enter)*90}px)`,opacity:enter}}>
        <LargeType style={{fontSize:portrait?116:116}}>{material.name}</LargeType>
        <div style={{marginTop:16,fontSize:portrait?30:26,color:C.muted}}>{material.detail}</div>
      </div>
    </div>
    <div style={{position:'absolute',top:portrait?760:320,left:portrait?-65:30,width:portrait?1200:1820,height:portrait?520:630}}>
      <OpticalDiagram n={material.n} accent={material.color} frame={rayFrame} showPhysics={showPhysics} compact={portrait}/>
    </div>
    <SheenPanel accent={material.color} style={{position:'absolute',right:portrait?88:132,bottom:portrait?390:175,width:portrait?790:610,opacity:enter,transform:`translateY(${(1-enter)*45}px)`}}>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:20}}>
        <span style={{color:material.color,fontSize:23,fontWeight:800,letterSpacing:3}}>ПОКАЗНИК ЗАЛОМЛЕННЯ</span>
        <span style={{fontSize:37,fontWeight:800}}>n ≈ {material.n.toFixed(material.n===1.000293?6:3)}</span>
      </div>
      <div style={{height:1,background:'#ffffff24',margin:'20px 0'}}/>
      <div style={{fontSize:17,color:C.muted,letterSpacing:4,marginBottom:7}}>ШВИДКІСТЬ</div>
      <div style={{fontSize:portrait?73:64,fontWeight:900,letterSpacing:-1}}>{roundedSpeed(material.n)} <span style={{fontSize:25,color:C.muted,fontWeight:400}}>км/с</span></div>
    </SheenPanel>
    <div style={{position:'absolute',left:portrait?89:137,bottom:portrait?284:188,fontSize:portrait?20:19,color:C.muted,letterSpacing:2}}>
      ПАРАМЕТРИ МОДЕЛІ НАБЛИЖЕНІ · ВИДИМЕ СВІТЛО
    </div>
  </AbsoluteFill>;
};

export const Materials=({accent,showPhysics}:FilmProps)=>{
  return <AbsoluteFill style={shell}>
    {MATERIALS.map((material,index)=>(
      <Sequence key={material.name} from={index*110} durationInFrames={110}>
        <MaterialCard material={material} index={index} accent={accent} showPhysics={showPhysics}/>
      </Sequence>
    ))}
  </AbsoluteFill>;
};

function Track({m,index,frame,portrait}:{m:typeof MEDIA[number];index:number;frame:number;portrait:boolean}){
  const appearance=reveal(frame,14+index*10,22);
  const t=clamp((frame-43)/155);
  const position=smoothstep(t) / m.n;
  const opacity=(1-reveal(frame,SCENES.comparison.duration-21,21))*appearance;
  return <div style={{opacity,transform:`translateY(${(1-appearance)*34}px)`,marginBottom:portrait?52:28}}>
    <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',fontFamily:'Arial, sans-serif',color:C.ink,gap:30,marginBottom:17}}>
      <span style={{fontSize:portrait?28:27,fontWeight:900,letterSpacing:4,color:m.color}}>{m.name}</span>
      <span style={{fontSize:portrait?24:25,fontWeight:800,letterSpacing:1}}>{roundedSpeed(m.n)} <span style={{color:C.muted,fontWeight:400,fontSize:19}}>км/с</span></span>
    </div>
    <div style={{height:portrait?16:14,borderRadius:20,background:'#ffffff12',border:'1px solid #ffffff16',position:'relative',boxShadow:'inset 0 3px 10px #0005'}}>
      <div style={{width:`${position*100}%`,height:'100%',borderRadius:20,background:`linear-gradient(90deg,${m.color}12,${m.color})`,boxShadow:`0 0 22px ${m.color}88`}}/>
      <div style={{position:'absolute',left:`${position*100}%`,top:'50%',width:27,height:27,borderRadius:'50%',background:C.ink,boxShadow:`0 0 18px 6px ${m.color}, 0 0 50px 15px ${m.color}44`,transform:'translate(-50%,-50%)'}}/>
    </div>
  </div>;
}

export const Comparison=({accent}:FilmProps)=>{
  const frame=useCurrentFrame();
  const {width,height}=useVideoConfig();
  const portrait=height>width;
  const opacity=blend(frame,SCENES.comparison.duration,15,16);
  return <AbsoluteFill style={{...shell,opacity}}>
    <div style={{position:'absolute',top:portrait?260:144,left:portrait?75:130,right:portrait?75:130}}>
      <In frame={frame}><UpperLabel accent={accent}>РОЗДІЛ 03 / ПОРІВНЯННЯ</UpperLabel></In>
      <In frame={frame} at={10}><LargeType style={{fontSize:portrait?83:100,marginTop:32}}>Хто швидше?</LargeType></In>
      <In frame={frame} at={25}>
        <div style={{fontSize:portrait?29:28,color:C.muted,marginTop:24}}>Однакова відстань. Один момент часу. Різна швидкість.</div>
      </In>
    </div>
    <SheenPanel style={{position:'absolute',top:portrait?670:367,left:portrait?70:120,right:portrait?70:120,padding:portrait?'65px 48px':'50px 70px',background:'linear-gradient(130deg,#10213dbb,#070f28de)'}} accent={accent}>
      {MEDIA.map((m,i)=><Track key={m.name} m={m} frame={frame} index={i} portrait={portrait}/>)}
      <div style={{display:'flex',justifyContent:'space-between',color:C.muted,fontSize:portrait?17:20,letterSpacing:3,marginTop:portrait?58:35}}>
        <span>0</span><span>ВІДСТАНЬ УМОВНА · ШВИДКОСТІ ПРОПОРЦІЙНІ c/n</span><span>L</span>
      </div>
    </SheenPanel>
    <In frame={frame} at={115} style={{position:'absolute',bottom:portrait?270:155,left:portrait?78:130}}>
      <div style={{color:C.gold,fontSize:portrait?28:25,letterSpacing:2}}>Більший показник заломлення → менша швидкість.</div>
    </In>
  </AbsoluteFill>;
};

export const Ending=({accent,subtitle}:FilmProps)=>{
  const frame=useCurrentFrame();
  const {width,height,fps}=useVideoConfig();
  const portrait=height>width;
  const enter=spring({frame:frame-7,fps,config:{damping:17,stiffness:65}});
  const fade=1-reveal(frame,SCENES.ending.duration-26,26);
  return <AbsoluteFill style={{...shell,opacity:fade}}>
    <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 52% 49%,${accent}26,transparent 57%)`}}/>
    <div style={{position:'absolute',left:'50%',top:portrait?580:110,width:portrait?900:760,height:portrait?900:760,transform:`translateX(-50%) rotate(${frame/9}deg)`}}>
      {[1,.8,.59].map((ratio,i)=><div key={i} style={{position:'absolute',inset:0,borderRadius:'50%',border:`1px solid ${i%2?C.gold:accent}`,opacity:.26,transform:`scale(${ratio})`}}/>)}
      {Array.from({length:32},(_,i)=>{
        const angle=hash(i)*Math.PI*2;
        const r=120+hash(i*2)*280;
        return <div key={i} style={{position:'absolute',left:`calc(50% + ${Math.cos(angle)*r}px)`,top:`calc(50% + ${Math.sin(angle)*r}px)`,height:4+hash(i*4)*7,width:4+hash(i*4)*7,borderRadius:'50%',background:i%2?C.gold:accent,boxShadow:`0 0 19px ${accent}`}}/>;
      })}
    </div>
    <div style={{position:'absolute',left:portrait?80:0,right:portrait?80:0,top:portrait?500:195,textAlign:'center',transform:`scale(${.88+.12*enter})`,opacity:enter}}>
      <div style={{fontSize:portrait?24:21,letterSpacing:7,color:accent,fontWeight:900}}>ЗАПАМ'ЯТАЙ ГОЛОВНЕ</div>
      <div style={{fontSize:portrait?153:196,fontWeight:900,letterSpacing:-7,marginTop:portrait?80:45,textShadow:`0 0 92px ${accent}65`}}>v = c / n</div>
      <div style={{color:C.muted,fontSize:portrait?31:30,maxWidth:portrait?850:1200,margin:'20px auto 0',lineHeight:1.4}}>Світло змінює швидкість у різних середовищах, а на їх межі може змінювати напрям.</div>
      <div style={{height:1,width:portrait?580:600,background:`linear-gradient(90deg,transparent,${accent},transparent)`,margin:'66px auto 40px'}}/>
      <div style={{fontSize:portrait?47:42,fontWeight:900,letterSpacing:12}}>СВІТЛО</div>
      <div style={{fontSize:portrait?25:23,color:C.muted,marginTop:16}}>{subtitle}</div>
    </div>
  </AbsoluteFill>;
};
