import type {CSSProperties, ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame} from 'remotion';
import {PALETTE as P, clamp, smooth} from './ad.constants';

export const font = 'Arial, Helvetica, sans-serif';
export const easeIn = (f:number,from=0,duration=15):number=>smooth((f-from)/duration);
export const pop = (f:number,from=0):number=>spring({frame:f-from,fps:30,config:{damping:13,stiffness:145,mass:.7}});
const hash=(seed:number):number=>{const s=Math.sin(seed*143.91+12.9)*43758.17;return s-Math.floor(s)};

export function Background({accent=P.lime}: {accent?:string}) {
  const frame=useCurrentFrame();
  return <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 75% 10%,#3f2c8d 0%,transparent 52%), radial-gradient(ellipse at 20% 84%,#281f7f 0%,transparent 46%),linear-gradient(155deg,#0b0921,#17113a 55%,#090819)',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:-280,opacity:.55,background:'radial-gradient(circle at 18% 40%,#fc699929,transparent 32%),radial-gradient(circle at 78% 70%,#55e2f63b,transparent 35%)',transform:'translate3d('+Math.sin(frame/57)*55+'px,'+Math.cos(frame/62)*70+'px,0)'}} />
    <div style={{position:'absolute',inset:0,opacity:.13,backgroundImage:'linear-gradient(#b1a7df 1px,transparent 1px),linear-gradient(90deg,#b1a7df 1px,transparent 1px)',backgroundSize:'92px 92px',maskImage:'radial-gradient(ellipse at center,black 15%,transparent 80%)'}}/>
    {Array.from({length:46},(_,i)=>{
      const px=hash(i*17+2)*1080;
      const py=hash(i*23+9)*1920;
      const radius=3+hash(i*7+1)*7;
      const drift=Math.sin(frame/35+i)*16;
      return <div key={i} style={{position:'absolute',left:px,top:py,width:radius,height:radius,borderRadius:'50%',background:i%4===0?accent:'#cdb9ff',opacity:.07+hash(i+8)*.22,transform:'translateY('+drift+'px)',boxShadow:i%7===0?'0 0 24px '+accent:undefined}}/>;
    })}
    <div style={{position:'absolute',inset:0,boxShadow:'inset 0 0 210px 60px #060315a6',pointerEvents:'none'}}/>
  </div>;
}

export function Chrome({brand,accent=P.lime,section}:{brand:string;accent?:string;section:string}) {
 const frame=useCurrentFrame();
 return <div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:90,fontFamily:font}}>
   <div style={{position:'absolute',top:83,left:79,right:79,display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
    <div style={{display:'flex',alignItems:'center',gap:16}}>
      <div style={{position:'relative',width:42,height:42,transform:'rotate(45deg)',border:'3px solid '+accent,borderRadius:9,boxShadow:'0 0 30px '+accent+'85'}}>
        <div style={{position:'absolute',left:11,top:11,width:14,height:14,background:accent,borderRadius:5}}/>
      </div>
      <span style={{color:P.cream,fontSize:33,fontWeight:900,letterSpacing:5}}>{brand}</span>
    </div>
    <span style={{fontSize:20,color:P.muted,fontWeight:800,letterSpacing:3}}>{section}</span>
   </div>
   <div style={{position:'absolute',left:79,right:79,bottom:94,display:'flex',alignItems:'center',gap:14}}>
     {Array.from({length:5},(_,i)=><div key={i} style={{flex:1,height:6,borderRadius:8,background:frame>=i*150?accent:'#9c8fcb40',opacity:frame>=i*150?1:.6,boxShadow:frame>=i*150?'0 0 15px '+accent+'55':undefined}}/>)}
   </div>
 </div>;
}

export function SlideText({children,frame,at=0,y=58,style={}}:{children:ReactNode;frame:number;at?:number;y?:number;style?:CSSProperties}) {
  const x=easeIn(frame,at,16);
  return <div style={{opacity:x,transform:'translateY('+((1-x)*y)+'px)',...style}}>{children}</div>;
}

export function Capsule({children,color=P.lime,rotate=0,style={}}:{children:ReactNode;color?:string;rotate?:number;style?:CSSProperties}) {
  return <div style={{display:'inline-flex',padding:'18px 32px',alignItems:'center',justifyContent:'center',borderRadius:99,background:color,color:P.dark,fontFamily:font,fontWeight:900,letterSpacing:2,fontSize:27,transform:'rotate('+rotate+'deg)',boxShadow:'0 15px 45px #05041e88, 0 0 50px '+color+'3f',...style}}>{children}</div>;
}

export function Sparkle({x,y,size=58,color=P.lime,spin=0}:{x:number;y:number;size?:number;color?:string;spin?:number}) {
 const frame=useCurrentFrame();
 return <svg width={size} height={size} viewBox="0 0 100 100" style={{position:'absolute',left:x,top:y,overflow:'visible',transform:'rotate('+(spin+frame*.5)+'deg) scale('+(1+Math.sin(frame/18+x)*.1)+')',filter:'drop-shadow(0px 0px 17px '+color+'a0)'}}>
   <path d="M50 0 Q56 44 100 50 Q56 56 50 100 Q44 56 0 50 Q44 44 50 0 Z" fill={color}/>
 </svg>;
}

const xy=(degree:number,radius:number)=>({x:250+Math.cos((degree*Math.PI)/180)*radius,y:250+Math.sin((degree*Math.PI)/180)*radius});
const sector=(index:number,radius:number)=>{
 const a=xy(-90+index*90,radius),b=xy(-90+(index+1)*90,radius);
 return 'M 250 250 L '+a.x+' '+a.y+' A '+radius+' '+radius+' 0 0 1 '+b.x+' '+b.y+' Z';
};

export function FractionDisc({top,bottom=4,color=P.lime,diameter=350,delay=0,caption,glow=true}:{top:number;bottom?:4;color?:string;diameter?:number;delay?:number;caption?:string;glow?:boolean}) {
 const frame=useCurrentFrame();
 const enter=pop(frame,delay);
 const alpha=easeIn(frame,delay,14);
 const radius=204;
 return <div style={{position:'relative',width:diameter,height:diameter,transform:'scale('+(.75+Math.max(0,enter)*.25)+')',opacity:alpha,display:'grid',placeItems:'center',filter:glow?'drop-shadow(0px 19px 38px '+color+'27)':undefined}}>
   <svg viewBox="0 0 500 500" style={{height:'100%',width:'100%',overflow:'visible',transform:'rotate('+Math.sin(frame/60)*2+'deg)'}}>
     <defs>
       <radialGradient id={'shine-'+top+'-'+color.replace('#','')} cx="32%" cy="23%" r="85%">
         <stop stopColor="#ffffff" stopOpacity=".32"/>
         <stop offset=".65" stopColor="#ffffff" stopOpacity=".02"/>
         <stop offset="1" stopColor="#050216" stopOpacity=".22"/>
       </radialGradient>
     </defs>
     <circle cx="250" cy="250" r={radius+14} fill="#140f39" stroke="#ffffff3e" strokeWidth="4"/>
     {Array.from({length:bottom},(_,i)=>(
       <g key={i}>
         <path d={sector(i,radius)} fill="#f5edff15" stroke="#fff1" strokeWidth="3"/>
         {i<top&&<path d={sector(i,radius)} fill={color} opacity={easeIn(frame,delay+8+i*6,10)} stroke="#080720" strokeWidth="6"/>}
         {i<top&&<path d={sector(i,radius)} fill={'url(#shine-'+top+'-'+color.replace('#','')+')'} stroke="none" opacity={easeIn(frame,delay+8+i*6,10)}/>}
       </g>
     ))}
     <circle cx="250" cy="250" r="9" fill={P.cream}/>
     <circle cx="250" cy="250" r={radius} stroke="#ffffff80" strokeWidth="4" fill="none"/>
   </svg>
   {caption&&<div style={{position:'absolute',bottom:-32,width:'100%',textAlign:'center',fontSize:25,fontWeight:900,letterSpacing:3,color:P.cream}}>{caption}</div>}
 </div>;
}

export function BigFraction({a,b=4,color=P.cream,size=112}:{a:number;b?:number;color?:string;size?:number}) {
 return <div style={{display:'inline-flex',flexDirection:'column',alignItems:'center',lineHeight:.92,color,fontFamily:font,fontSize:size,fontWeight:900,letterSpacing:-6,minWidth:size*.75}}>
   <span>{a}</span><div style={{width:'100%',height:7,background:color,borderRadius:7,margin:'9px 0 12px'}}/><span>{b}</span>
 </div>;
}

export function MathOperator({symbol,color=P.cream}:{symbol:string;color?:string}) {
 return <div style={{color,fontSize:94,fontFamily:font,fontWeight:900,textShadow:'0 14px 40px #0008'}}>{symbol}</div>;
}

export function FractionBar({filled,total=4,color=P.lime,frame,delay=0,height=89}:{filled:number;total?:number;color?:string;frame:number;delay?:number;height?:number}) {
 return <div style={{display:'flex',height,gap:5,padding:6,background:'#ffffff18',border:'2px solid #fff5',borderRadius:22,boxShadow:'0 22px 50px #02011475'}}>
   {Array.from({length:total},(_,i)=><div key={i} style={{flex:1,borderRadius:i===0?'14px 5px 5px 14px':i===total-1?'5px 14px 14px 5px':'5px',background:i<filled?color:'#ffffff0e',opacity:i<filled?easeIn(frame,delay+i*7,9):1,transform:i<filled?'scaleY('+(Math.max(.05,easeIn(frame,delay+i*7,9)))+')':undefined,boxShadow:i<filled?'0 0 24px '+color+'33':undefined}}/>)}
 </div>;
}

export function PopCard({children,frame,delay=0,angle=0,style={}}:{children:ReactNode;frame:number;delay?:number;angle?:number;style?:CSSProperties}) {
 const value=pop(frame,delay);
 return <div style={{position:'relative',border:'1px solid #ffffff4b',background:'linear-gradient(155deg,#30265dc9,#171035e0)',boxShadow:'0 27px 85px #070418bd,inset 0 2px 0 #fff2',borderRadius:40,padding:'40px 34px',opacity:easeIn(frame,delay,12),transform:'translateY('+((1-value)*115)+'px) rotate('+((1-value)*12+angle)+'deg)',backdropFilter:'blur(18px)',...style}}>{children}</div>;
}

export function Scribble({frame,color=P.pink}:{frame:number;color?:string}) {
 const dash=interpolate(frame,[3,24],[410,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <svg width="650" height="120" viewBox="0 0 650 120" style={{overflow:'visible'}}>
  <path d="M22 55 Q150 9 315 63 Q457 113 627 36" stroke={color} fill="none" strokeWidth="11" strokeLinecap="round" strokeDasharray="410" strokeDashoffset={dash} style={{filter:'drop-shadow(0 0 15px '+color+')'}}/>
 </svg>;
}

export function Celebration({frame,at=0,amount=80}:{frame:number;at?:number;amount?:number}) {
 const phase=frame-at;
 if(phase<0)return null;
 return <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden'}}>
  {Array.from({length:amount},(_,i)=>{
    const ang=(hash(i*4+1)*.9+.05)*Math.PI*2;
    const velocity=4+hash(i*9+2)*9;
    const startX=540+(hash(i*8)-.5)*90;
    const startY=940+(hash(i*11)-.5)*110;
    const travel=Math.max(0,phase);
    const x=startX+Math.cos(ang)*travel*velocity;
    const y=startY+Math.sin(ang)*travel*velocity+travel*travel*.075;
    const size=9+hash(i*3)*18;
    const opacity=clamp((95-travel)/40);
    const color=[P.lime,P.pink,P.aqua,P.lilac,P.cream][i%5];
    return <div key={i} style={{position:'absolute',left:x,top:y,width:size,height:size*(i%4===0?1.9:.55),background:color,borderRadius:i%2?8:2,opacity,transform:'rotate('+(travel*(3+i%6))+'deg)',boxShadow:'0 0 14px '+color+'55'}}/>;
  })}
 </div>;
}
