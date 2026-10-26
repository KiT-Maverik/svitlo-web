import type {CSSProperties} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {PALETTE as P, type AdProps} from './ad.constants';
import {BigFraction, Capsule, Celebration, easeIn, font, FractionBar, FractionDisc, MathOperator, PopCard, pop, Scribble, SlideText, Sparkle} from './ad.visuals';

const root:CSSProperties={position:'absolute',inset:0,color:P.cream,fontFamily:font};
const heading:CSSProperties={fontFamily:font,fontWeight:900,lineHeight:.99,letterSpacing:-6};
const smallLabel:CSSProperties={fontSize:27,color:P.muted,fontWeight:800,letterSpacing:4};
const center:CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'};
const panelTitle:CSSProperties={color:P.cream,fontSize:32,fontWeight:900,letterSpacing:2};

export function Hook({hook,accent}:Pick<AdProps,'hook'|'accent'>) {
 const frame=useCurrentFrame();
 const pivot=hook.lastIndexOf('ДРОБИ');
 const first=pivot>0?hook.slice(0,pivot).trim():hook;
 const last=pivot>0?hook.slice(pivot):'';
 const motion=pop(frame,12);
 return <AbsoluteFill style={root}>
  <div style={{position:'absolute',left:-180,top:460,width:690,height:690,borderRadius:'50%',border:'2px solid #ffffff11',transform:'rotate('+(frame*2)+'deg)'}}>
   <div style={{position:'absolute',inset:90,borderRadius:'50%',border:'3px dashed #ff73a477',transform:'rotate('+(-frame*4)+'deg)'}}/>
  </div>
  <div style={{position:'absolute',right:-130,top:1120,fontSize:410,fontWeight:900,color:'#8f7aff18',transform:'rotate('+(13-frame*.25)+'deg)'}}>½</div>
  <div style={{position:'absolute',left:76,right:76,top:350,zIndex:2}}>
   <SlideText frame={frame} at={2}>
     <Capsule color={P.pink} rotate={-5}>МАЄМО ПИТАННЯ</Capsule>
   </SlideText>
   <SlideText frame={frame} at={12} style={{marginTop:75}}>
    <div style={{...heading,fontSize:86,lineHeight:1.07,textTransform:'uppercase'}}>{first}</div>
   </SlideText>
   {last&&<SlideText frame={frame} at={28} style={{marginTop:32}}>
    <div style={{...heading,fontSize:164,color:accent,textShadow:'0 0 90px '+accent+'55'}}>{last}</div>
   </SlideText>}
   <div style={{position:'absolute',top:last?365:480,left:60,transform:'rotate(-4deg)',opacity:easeIn(frame,40)}}>
    <Scribble frame={frame-40} color={P.pink}/>
   </div>
  </div>
  <PopCard frame={frame} delay={51} angle={-3} style={{position:'absolute',top:1080,left:105,right:105,background:'linear-gradient(135deg,#372260,#21124beb)',borderColor:'#ffffff69',padding:'32px 40px'}}>
    <div style={{fontSize:30,fontWeight:800,letterSpacing:3,color:P.muted}}>КОЛИ ПРИКЛАД ВИГЛЯДАЄ ТАК…</div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:34,padding:'35px 0 20px'}}>
      <BigFraction a={1} b={2} color={P.aqua} size={118}/>
      <MathOperator symbol="+"/>
      <BigFraction a={1} b={4} color={P.pink} size={118}/>
      <MathOperator symbol="="/>
      <span style={{fontSize:148,fontWeight:900,color:P.lime}}>?</span>
    </div>
  </PopCard>
  <div style={{position:'absolute',top:1532,left:110,right:110,textAlign:'center',transform:'scale('+(.8+motion*.2)+')',opacity:easeIn(frame,77)}}>
    <span style={{color:P.cream,fontSize:34,fontWeight:800}}>Можна пояснити </span>
    <span style={{color:accent,fontSize:34,fontWeight:900}}>інакше.</span>
  </div>
  <Sparkle x={900} y={700} size={82} color={P.pink}/>
  <Sparkle x={115} y={916} size={52} color={accent}/>
 </AbsoluteFill>;
}

export function Discover({accent}:Pick<AdProps,'accent'>) {
 const frame=useCurrentFrame();
 return <AbsoluteFill style={root}>
  <div style={{position:'absolute',left:75,right:75,top:345,...center}}>
   <SlideText frame={frame} at={2}><Capsule color={accent} rotate={-4}>А ЯКЩО ПРОСТО ПОКАЗАТИ?</Capsule></SlideText>
   <SlideText frame={frame} at={17} style={{marginTop:67}}>
    <div style={{...heading,fontSize:102}}>ДРОБИ МОЖНА</div>
    <div style={{...heading,fontSize:107,color:P.aqua,marginTop:12}}>ПОБАЧИТИ.</div>
   </SlideText>
  </div>
  <div style={{position:'absolute',left:80,right:80,top:790,display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div style={{position:'relative'}}>
      <div style={{position:'absolute',width:630,height:630,border:'3px solid #ffffff22',borderRadius:'50%',left:-48,top:-45,boxShadow:'0 0 130px #7453fb40'}}/>
      <FractionDisc top={2} diameter={540} color={P.aqua} delay={31}/>
    </div>
    <SlideText frame={frame} at={67} style={{marginTop:70}}>
      <div style={{fontSize:70,fontWeight:900,color:P.cream,letterSpacing:-3}}>½ = ²⁄₄</div>
      <div style={{fontSize:33,color:P.muted,marginTop:20,maxWidth:810,textAlign:'center',lineHeight:1.35}}>Половина — це дві з чотирьох однакових частин.</div>
    </SlideText>
  </div>
  <Sparkle x={160} y={850} size={80} color={P.lime}/>
  <Sparkle x={850} y={1150} size={56} color={P.pink}/>
 </AbsoluteFill>;
}

export function Equation({accent}:Pick<AdProps,'accent'>) {
 const frame=useCurrentFrame();
 return <AbsoluteFill style={root}>
  <div style={{position:'absolute',top:300,left:72,right:72,...center}}>
    <SlideText frame={frame} at={3}><Capsule color={P.pink} rotate={-3}>ЗБИРАЄМО РАЗОМ</Capsule></SlideText>
    <SlideText frame={frame} at={16} style={{marginTop:58}}>
      <div style={{...heading,fontSize:105}}>І РАПТОМ</div><div style={{...heading,fontSize:116,color:accent}}>УСЕ ЯСНО.</div>
    </SlideText>
  </div>
  <div style={{position:'absolute',top:665,left:85,right:85,display:'flex',justifyContent:'space-between',gap:24}}>
    <PopCard frame={frame} delay={31} style={{width:400,padding:'26px 25px',textAlign:'center'}}>
      <div style={{...smallLabel,fontSize:19,marginBottom:26}}>ПОЛОВИНА</div>
      <FractionBar frame={frame} filled={2} delay={41} color={P.aqua} height={115}/>
      <div style={{fontSize:75,fontWeight:900,color:P.aqua,marginTop:20}}>½</div>
    </PopCard>
    <PopCard frame={frame} delay={43} style={{width:400,padding:'26px 25px',textAlign:'center'}}>
      <div style={{...smallLabel,fontSize:19,marginBottom:26}}>ЧВЕРТЬ</div>
      <FractionBar frame={frame} filled={1} delay={53} color={P.pink} height={115}/>
      <div style={{fontSize:75,fontWeight:900,color:P.pink,marginTop:20}}>¼</div>
    </PopCard>
    <span style={{position:'absolute',left:'50%',top:84,transform:'translateX(-50%)',color:P.cream,fontSize:69,fontWeight:900,textShadow:'0 10px 25px #000'}}>+</span>
  </div>
  <SlideText frame={frame} at={70} style={{position:'absolute',left:83,right:83,top:1070}}>
    <div style={{fontSize:35,fontWeight:900,color:P.muted,letterSpacing:4,marginBottom:26,textAlign:'center'}}>РАЗОМ ОТРИМУЄМО</div>
    <FractionBar frame={frame} filled={3} delay={70} color={accent} height={135}/>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:32,marginTop:50}}>
      <div style={{fontSize:138,fontWeight:900,letterSpacing:-8,color:P.cream}}>½ + ¼</div>
      <div style={{fontSize:108,fontWeight:900,color:accent}}>=</div>
      <div style={{fontSize:158,fontWeight:900,color:accent,textShadow:'0 0 40px '+accent+'55'}}>¾</div>
    </div>
  </SlideText>
  <SlideText frame={frame} at={110} style={{position:'absolute',top:1570,left:88,right:88,textAlign:'center'}}>
    <div style={{fontSize:35,fontWeight:800,color:P.cream}}>Без зазубрювання. Через розуміння.</div>
  </SlideText>
  <Sparkle x={901} y={1050} size={53} color={accent}/>
  <Celebration frame={frame} at={100} amount={44}/>
 </AbsoluteFill>;
}

const questionOptions=[
 {answer:'¼',right:false},
 {answer:'¾',right:true},
 {answer:'½',right:false},
] as const;

export function Method({accent}:Pick<AdProps,'accent'>) {
 const frame=useCurrentFrame();
 const selection=easeIn(frame,93,13);
 return <AbsoluteFill style={root}>
   <div style={{position:'absolute',top:294,left:77,right:77,...center}}>
     <SlideText frame={frame}><Capsule color={P.aqua} rotate={-3}>НЕ ПРОСТО ДИВИСЯ</Capsule></SlideText>
     <SlideText frame={frame} at={15} style={{marginTop:56}}>
       <div style={{...heading,fontSize:113}}>СПРОБУЙ</div>
       <div style={{...heading,fontSize:112,color:accent,marginTop:6}}>САМ!</div>
     </SlideText>
   </div>
   <PopCard frame={frame} delay={28} style={{position:'absolute',top:650,left:90,right:90,padding:'45px 42px'}}>
     <div style={{fontSize:28,letterSpacing:4,color:P.muted,fontWeight:800,marginBottom:16}}>МІНІЗАВДАННЯ / 01</div>
     <div style={{fontSize:41,fontWeight:900,lineHeight:1.2}}>Яку частину кола зафарбовано?</div>
     <div style={{display:'flex',justifyContent:'center',marginTop:16,marginBottom:26}}>
       <FractionDisc top={3} color={P.pink} diameter={300} delay={35} glow={false}/>
     </div>
     <div style={{display:'flex',gap:20}}>
       {questionOptions.map((item,i)=>{
         const selected=item.right&&selection>.15;
         const highlight=selected?accent:'#ffffff12';
         return <div key={item.answer} style={{flex:1,height:112,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:23,border:'3px solid '+(selected?accent:'#ffffff25'),background:selected?'#d9f96a29':'#ffffff0c',boxShadow:selected?'0 0 31px '+accent+'44':undefined,transform:selected?'scale('+(.97+selection*.03)+')':undefined,opacity:easeIn(frame,56+i*7,12)}}>
           <span style={{fontSize:62,fontWeight:900,color:selected?accent:P.cream}}>{item.answer}</span>
           {selected&&<span style={{fontSize:38,color:accent,marginLeft:14}}>✓</span>}
         </div>;
       })}
     </div>
     <div style={{height:37,fontSize:28,fontWeight:900,textAlign:'center',color:accent,marginTop:17,opacity:selection}}>Чудово! Три з чотирьох.</div>
   </PopCard>
   <SlideText frame={frame} at={70} style={{position:'absolute',top:1570,left:80,right:80,textAlign:'center'}}>
     <div style={{display:'flex',justifyContent:'center',gap:16}}>
       {['АНІМАЦІЇ','ПРАКТИКА','ЗВОРОТНИЙ ЗВ’ЯЗОК'].map((title,i)=><div key={title} style={{fontSize:i===2?18:20,border:'1px solid #ffffff4d',padding:'16px 18px',borderRadius:50,fontWeight:900,color:i===1?accent:P.cream,letterSpacing:.8,background:'#ffffff14'}}>{title}</div>)}
     </div>
   </SlideText>
   <Sparkle x={114} y={780} size={52} color={P.aqua}/>
 </AbsoluteFill>;
}

export function Finale({accent,brand,cta}:Pick<AdProps,'accent'|'brand'|'cta'>) {
 const frame=useCurrentFrame();
 const value=pop(frame,12);
 return <AbsoluteFill style={root}>
   <div style={{position:'absolute',width:1000,height:1000,left:40,top:435,borderRadius:'50%',border:'2px solid '+accent+'65',boxShadow:'inset 0 0 120px '+accent+'1b,0 0 140px '+accent+'1e',transform:'scale('+(.65+.35*value)+') rotate('+(frame*.4)+'deg)'}}>
    <div style={{position:'absolute',inset:100,border:'2px dashed '+P.pink+'a0',borderRadius:'50%',transform:'rotate('+(-frame*.95)+'deg)'}}/>
    <div style={{position:'absolute',inset:200,border:'2px solid '+P.aqua+'80',borderRadius:'50%'}}/>
   </div>
   <div style={{position:'absolute',top:395,left:74,right:74,...center}}>
     <SlideText frame={frame} at={2}><Capsule color={P.pink} rotate={-5}>ОСЬ ТАК НАВЧАТИСЯ ЦІКАВІШЕ</Capsule></SlideText>
     <SlideText frame={frame} at={19} style={{marginTop:79}}>
       <div style={{...heading,fontSize:115}}>МЕНШЕ</div>
       <div style={{...heading,fontSize:116,color:P.pink}}>«НЕ РОЗУМІЮ»</div>
     </SlideText>
     <SlideText frame={frame} at={34} style={{marginTop:50}}>
       <div style={{...heading,fontSize:110}}>БІЛЬШЕ</div>
       <div style={{...heading,fontSize:145,color:accent}}>«А, ЯСНО!»</div>
     </SlideText>
     <SlideText frame={frame} at={54} style={{marginTop:95}}>
       <div style={{fontSize:46,color:P.cream,fontWeight:900,letterSpacing:5}}>{brand}</div>
       <div style={{fontSize:32,color:P.muted,marginTop:24}}>Побачити. Спробувати. Зрозуміти.</div>
     </SlideText>
     <SlideText frame={frame} at={83} style={{marginTop:76}}>
      <div style={{background:accent,borderRadius:30,padding:'39px 50px',boxShadow:'0 20px 90px '+accent+'4a',transform:'rotate(-2deg)'}}>
       <div style={{fontSize:49,fontWeight:900,color:P.dark,letterSpacing:0}}>{cta}</div>
      </div>
      <div style={{fontSize:25,color:P.muted,marginTop:35}}>ІНТЕРАКТИВНІ УРОКИ ДЛЯ ДОПИТЛИВИХ</div>
     </SlideText>
   </div>
   <Sparkle x={78} y={792} size={81} color={P.aqua}/>
   <Sparkle x={900} y={1323} size={105} color={P.pink}/>
   <Celebration frame={frame} at={80} amount={70}/>
 </AbsoluteFill>;
}
