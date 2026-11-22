import{r as u,j as e,q as et,a0 as tt,f as Le,z as nt,a1 as it,a2 as te,a3 as t,a4 as st,J as Ue,a5 as M,a6 as B,a7 as Se,a8 as ot,a9 as at,aa as Ye,M as rt,ab as lt,ac as dt,ad as ct,ae as ut,af as ht,ag as xt,ah as K,ai as $,Y as W,A as pt,aj as mt,ak as gt,al as Ct,am as ft,o as F,v as ve,R as T,T as m,an as Rt,N as Et,ao as Z,U as de,ap as ye,aq as Q,O as ee,x as Ne,y as z,ar as ce,V as _e,as as It,at as Tt,au as L,D as bt,av as wt,X as jt,aw as ke,ax as Ut,w as St,ay as Yt,B as vt,az as yt,aA as De,aB as Nt,aC as _t}from"./index-_vjmckJg.js";const kt=et.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:s})=>s}px;
    width: ${({size:s})=>s}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:s})=>s.colors.bg1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:s})=>s}px;
    width: ${({size:s})=>s}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:s})=>s.colors.bg1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:s})=>s}px;
    width: ${({size:s})=>s}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:s})=>s.colors.bg1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:s})=>s.colors.bg5}, ${({theme:s})=>s.colors.bg3});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:s})=>s.colors.bg5}, ${({theme:s})=>s.colors.bg3});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:s})=>s.colors.bg5};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:s})=>s.colors.bg5};
  }
  &::-ms-fill-upper {
    background: ${({theme:s})=>s.colors.bg3};
  }
`;function Dt({value:s,onChange:h,min:x=0,step:i=1,max:n=100,size:r=28}){const o=u.useCallback(I=>{h(parseInt(I.target.value))},[h]);return e.jsx(kt,{size:r,type:"range",value:s,style:{width:"90%",marginLeft:15,marginRight:15,padding:"15px 0"},onChange:o,"aria-labelledby":"input slider",step:i,min:x,max:n})}function Lt(s,h,x=100){const[i,n]=u.useState(()=>s),r=u.useRef(),o=u.useCallback(I=>{n(I),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{h(I),r.current=void 0},x)},[x,h]);return u.useEffect(()=>{r.current&&(clearTimeout(r.current),r.current=void 0),n(s)},[s]),[i,o]}function Pe(){return tt(s=>s.burn)}function Pt(s,h){var V;const{account:x,chainId:i}=Le(),{independentField:n,typedValue:r}=Pe(),[,o]=nt(s,h),I=it(x??void 0,[o==null?void 0:o.liquidityToken]),d=I==null?void 0:I[((V=o==null?void 0:o.liquidityToken)==null?void 0:V.address)??""],[g,C]=[te(s,i),te(h,i)],H={[t.CURRENCY_A]:g,[t.CURRENCY_B]:C,[t.LIQUIDITY]:o==null?void 0:o.liquidityToken},b=st(o==null?void 0:o.liquidityToken),v=o&&b&&d&&g&&Ue.greaterThanOrEqual(b.raw,d.raw)?new M(g,o.getLiquidityValue(g,b,d,!1).raw):void 0,c=o&&b&&d&&C&&Ue.greaterThanOrEqual(b.raw,d.raw)?new M(C,o.getLiquidityValue(C,b,d,!1).raw):void 0,l={[t.CURRENCY_A]:v,[t.CURRENCY_B]:c};let f=new B("0","100");if(n===t.LIQUIDITY_PERCENT)f=new B(r,"100");else if(n===t.LIQUIDITY){if(o!=null&&o.liquidityToken){const w=Se(r,o.liquidityToken);w&&d&&!w.greaterThan(d)&&(f=new B(w.raw,d.raw))}}else if(H[n]){const w=Se(r,H[n]),U=l[n];w&&U&&!w.greaterThan(U)&&(f=new B(w.raw,U.raw))}const y={[t.LIQUIDITY_PERCENT]:f,[t.LIQUIDITY]:d&&f&&f.greaterThan("0")?new M(d.token,f.multiply(d.raw).quotient):void 0,[t.CURRENCY_A]:g&&f&&f.greaterThan("0")&&v?new M(g,f.multiply(v.raw).quotient):void 0,[t.CURRENCY_B]:C&&f&&f.greaterThan("0")&&c?new M(C,f.multiply(c.raw).quotient):void 0};let N;return x||(N="Connect Wallet"),(!y[t.LIQUIDITY]||!y[t.CURRENCY_A]||!y[t.CURRENCY_B])&&(N=N??"Enter an amount"),{pair:o,parsedAmounts:y,error:N}}function qt(){const s=ot();return{onUserInput:u.useCallback((x,i)=>{s(at({field:x,typedValue:i}))},[s])}}function $t({history:s,match:{params:{currencyIdA:h,currencyIdB:x}}}){var ge,Ce,fe,Re,Ee,Ie,Te;const[i,n]=[Ye(h)??void 0,Ye(x)??void 0],{account:r,chainId:o,library:I}=Le(),[d,g]=u.useMemo(()=>[te(i,o),te(n,o)],[i,n,o]),C=u.useContext(rt),H=lt(),{independentField:b,typedValue:v}=Pe(),{pair:c,parsedAmounts:l,error:f}=Pt(i??void 0,n??void 0),{onUserInput:y}=qt(),N=!f,[V,w]=u.useState(!1),[U,qe]=u.useState(!1),[Ae,ne]=u.useState(!1),[G,ue]=u.useState(""),[he]=dt(),[ie]=ct(),P={[t.LIQUIDITY_PERCENT]:l[t.LIQUIDITY_PERCENT].equalTo("0")?"0":l[t.LIQUIDITY_PERCENT].lessThan(new B("1","100"))?"<1":l[t.LIQUIDITY_PERCENT].toFixed(0),[t.LIQUIDITY]:b===t.LIQUIDITY?v:((ge=l[t.LIQUIDITY])==null?void 0:ge.toSignificant(6))??"",[t.CURRENCY_A]:b===t.CURRENCY_A?v:((Ce=l[t.CURRENCY_A])==null?void 0:Ce.toSignificant(6))??"",[t.CURRENCY_B]:b===t.CURRENCY_B?v:((fe=l[t.CURRENCY_B])==null?void 0:fe.toSignificant(6))??""},se=(Re=l[t.LIQUIDITY_PERCENT])==null?void 0:Re.equalTo(new B("1")),xe=ut((Ee=c==null?void 0:c.liquidityToken)==null?void 0:Ee.address),[E,oe]=u.useState(null),[_,$e]=ht(l[t.LIQUIDITY],ke);async function We(){if(!xe||!c||!I)throw new Error("missing dependencies");const a=l[t.LIQUIDITY];if(!a)throw new Error("missing liquidity amount");const S=await xe.nonces(r),O=Math.ceil(Date.now()/1e3)+he,j=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],k={name:"CheeseSwap LPs",version:"1",chainId:o,verifyingContract:c.liquidityToken.address},Y=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],J={owner:r,spender:ke,value:a.raw.toString(),nonce:"0x"+BigInt(S).toString(16),deadline:O},X=JSON.stringify({types:{EIP712Domain:j,Permit:Y},domain:k,primaryType:"Permit",message:J});I.send("eth_signTypedData_v4",[r,X]).then(R=>Ut.from(R)).then(R=>{oe({v:R.v,r:R.r,s:R.s,deadline:O})}).catch(R=>{(R==null?void 0:R.code)!==4001&&$e()})}const p=u.useCallback((a,S)=>(oe(null),y(a,S)),[y]),Qe=u.useCallback(a=>p(t.LIQUIDITY,a),[p]),ze=u.useCallback(a=>p(t.CURRENCY_A,a),[p]),Be=u.useCallback(a=>p(t.CURRENCY_B,a),[p]),Oe=xt();async function Me(){if(!o||!I||!r)throw new Error("missing dependencies");const{[t.CURRENCY_A]:a,[t.CURRENCY_B]:S}=l;if(!a||!S)throw new Error("missing currency amounts");const O=yt(o,I,r),j={[t.CURRENCY_A]:De(a,ie)[0],[t.CURRENCY_B]:De(S,ie)[0]};if(!i||!n)throw new Error("missing tokens");const k=l[t.LIQUIDITY];if(!k)throw new Error("missing liquidity amount");const Y=n===z,J=i===z||Y,X=Math.ceil(Date.now()/1e3)+he;if(!d||!g)throw new Error("could not wrap");let R,D;if(_===L.APPROVED)J?(R=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],D=[Y?d.address:g.address,k.raw.toString(),j[Y?t.CURRENCY_A:t.CURRENCY_B].toString(),j[Y?t.CURRENCY_B:t.CURRENCY_A].toString(),r,X]):(R=["removeLiquidity"],D=[d.address,g.address,k.raw.toString(),j[t.CURRENCY_A].toString(),j[t.CURRENCY_B].toString(),r,X]);else if(E!==null)J?(R=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],D=[Y?d.address:g.address,k.raw.toString(),j[Y?t.CURRENCY_A:t.CURRENCY_B].toString(),j[Y?t.CURRENCY_B:t.CURRENCY_A].toString(),r,E.deadline,!1,E.v,E.r,E.s]):(R=["removeLiquidityWithPermit"],D=[d.address,g.address,k.raw.toString(),j[t.CURRENCY_A].toString(),j[t.CURRENCY_B].toString(),r,E.deadline,!1,E.v,E.r,E.s]);else throw new Error("Attempting to confirm without approval or a signature. Please contact support.");const be=await Promise.all(R.map((q,le)=>O.getFunction(q).estimateGas(...D).then(Nt).catch(A=>{console.error("estimateGas failed",le,q,D,A)}))),re=be.findIndex(q=>typeof q=="bigint");if(re===-1)console.error("This transaction would fail. Please contact support.");else{const q=R[re],le=be[re];ne(!0),await O[q](...D,{gasLimit:le}).then(A=>{var we,je;ne(!1),Oe(A,{summary:"Remove "+((we=l[t.CURRENCY_A])==null?void 0:we.toSignificant(3))+" "+(i==null?void 0:i.symbol)+" and "+((je=l[t.CURRENCY_B])==null?void 0:je.toSignificant(3))+" "+(n==null?void 0:n.symbol)}),ue(A.hash),_t.event({category:"Liquidity",action:"Remove",label:[i==null?void 0:i.symbol,n==null?void 0:n.symbol].join("/")})}).catch(A=>{ne(!1),console.error(A)})}}function Fe(){var a,S;return e.jsxs(F,{gap:"md",style:{marginTop:"20px"},children:[e.jsxs(T,{align:"flex-end",children:[e.jsx(m,{fontSize:24,fontWeight:700,children:(a=l[t.CURRENCY_A])==null?void 0:a.toSignificant(6)}),e.jsxs(Q,{gap:"4px",children:[e.jsx(ee,{currency:i,size:"24px"}),e.jsx(m,{fontSize:24,fontWeight:700,style:{marginLeft:"10px"},children:i==null?void 0:i.symbol})]})]}),e.jsx(Q,{children:e.jsx(_e,{size:"16",color:C.colors.text1})}),e.jsxs(T,{align:"flex-end",children:[e.jsx(m,{fontSize:24,fontWeight:700,children:(S=l[t.CURRENCY_B])==null?void 0:S.toSignificant(6)}),e.jsxs(Q,{gap:"4px",children:[e.jsx(ee,{currency:n,size:"24px"}),e.jsx(m,{fontSize:24,fontWeight:700,style:{marginLeft:"10px"},children:n==null?void 0:n.symbol})]})]}),e.jsx(St.Italic,{fontSize:12,color:C.colors.text2,textAlign:"left",padding:"12px 0 0 0",children:`Output is estimated. If the price changes by more than ${ie/100}% your transaction will revert.`})]})}function He(){var a;return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsxs(m,{color:C.colors.text2,fontWeight:700,fontSize:16,children:["Cheese-LP"+(i==null?void 0:i.symbol)+"/"+(n==null?void 0:n.symbol)," Burned"]}),e.jsxs(Q,{children:[e.jsx(Yt,{currency0:i,currency1:n,margin:!0}),e.jsx(m,{fontWeight:700,fontSize:16,children:(a=l[t.LIQUIDITY])==null?void 0:a.toSignificant(6)})]})]}),c&&e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(m,{color:C.colors.text2,fontWeight:700,fontSize:16,children:"Price"}),e.jsxs(m,{fontWeight:700,fontSize:16,color:C.colors.text1,children:["1 ",i==null?void 0:i.symbol," = ",d?c.priceOf(d).toSignificant(6):"-"," ",n==null?void 0:n.symbol]})]}),e.jsxs(T,{children:[e.jsx("div",{}),e.jsxs(m,{fontWeight:700,fontSize:16,color:C.colors.text1,children:["1 ",n==null?void 0:n.symbol," = ",g?c.priceOf(g).toSignificant(6):"-"," ",i==null?void 0:i.symbol]})]})]}),e.jsx(vt,{disabled:!(_===L.APPROVED||E!==null),onClick:Me,children:e.jsx(m,{fontWeight:700,fontSize:20,children:"Confirm"})})]})}const Ve=`Removing ${(Ie=l[t.CURRENCY_A])==null?void 0:Ie.toSignificant(6)} ${i==null?void 0:i.symbol} and ${(Te=l[t.CURRENCY_B])==null?void 0:Te.toSignificant(6)} ${n==null?void 0:n.symbol}`,Ge=u.useCallback(a=>{p(t.LIQUIDITY_PERCENT,a.toString())},[p]),pe=i===z||n===z,ae=!!(o&&(i&&K($[o],i)||n&&K($[o],n))),Je=u.useCallback(a=>{x&&W(a)===x?s.push(`/remove/${W(a)}/${h}`):s.push(`/remove/${W(a)}/${x}`)},[h,x,s]),Xe=u.useCallback(a=>{h&&W(a)===h?s.push(`/remove/${x}/${W(a)}`):s.push(`/remove/${h}/${W(a)}`)},[h,x,s]),me=u.useCallback(()=>{w(!1),oe(null),G&&p(t.LIQUIDITY_PERCENT,"0"),ue("")},[p,G]),[Ke,Ze]=Lt(Number.parseInt(l[t.LIQUIDITY_PERCENT].toFixed(0)),Ge);return e.jsxs(e.Fragment,{children:[e.jsxs(pt,{children:[e.jsx(mt,{adding:!0}),e.jsxs(gt,{children:[e.jsx(Ct,{isOpen:V,onDismiss:me,attemptingTxn:Ae,hash:G||"",content:()=>e.jsx(ft,{title:"You will receive",onDismiss:me,topContent:Fe,bottomContent:He}),pendingText:Ve}),e.jsxs(F,{gap:"md",children:[e.jsx(ve,{children:e.jsxs(F,{gap:"20px",children:[e.jsxs(T,{children:[e.jsx(m,{fontWeight:700,children:"Amount"}),e.jsx(Rt,{fontWeight:700,onClick:()=>{qe(!U)},children:U?"Simple":"Detailed"})]}),e.jsx(Et,{style:{alignItems:"flex-end"},children:e.jsxs(m,{fontSize:72,fontWeight:700,children:[P[t.LIQUIDITY_PERCENT],"%"]})}),!U&&e.jsxs(e.Fragment,{children:[e.jsx(Dt,{value:Ke,onChange:Ze}),e.jsxs(T,{children:[e.jsx(Z,{onClick:()=>p(t.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),e.jsx(Z,{onClick:()=>p(t.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),e.jsx(Z,{onClick:()=>p(t.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),e.jsx(Z,{onClick:()=>p(t.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!U&&e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx(ye,{size:"16",color:C.colors.text4})}),e.jsx(ve,{children:e.jsxs(F,{gap:"10px",children:[e.jsxs(T,{children:[e.jsx(m,{fontSize:24,fontWeight:700,children:P[t.CURRENCY_A]||"-"}),e.jsxs(Q,{children:[e.jsx(ee,{currency:i,style:{marginRight:"12px"}}),e.jsx(m,{fontSize:24,fontWeight:700,id:"remove-liquidity-tokena-symbol",children:i==null?void 0:i.symbol})]})]}),e.jsxs(T,{children:[e.jsx(m,{fontSize:24,fontWeight:700,children:P[t.CURRENCY_B]||"-"}),e.jsxs(Q,{children:[e.jsx(ee,{currency:n,style:{marginRight:"12px"}}),e.jsx(m,{fontSize:24,fontWeight:700,id:"remove-liquidity-tokenb-symbol",children:n==null?void 0:n.symbol})]})]}),o&&(ae||pe)?e.jsx(T,{style:{justifyContent:"flex-end"},children:pe?e.jsx(Ne,{to:`/remove/${i===z?$[o].address:h}/${n===z?$[o].address:x}`,children:"Receive WBNB"}):ae?e.jsx(Ne,{to:`/remove/${i&&K(i,$[o])?"ETH":h}/${n&&K(n,$[o])?"ETH":x}`,children:"Receive BNB"}):null}):null]})})]}),U&&e.jsxs(e.Fragment,{children:[e.jsx(ce,{value:P[t.LIQUIDITY],onUserInput:Qe,onMax:()=>{p(t.LIQUIDITY_PERCENT,"100")},showMaxButton:!se,disableCurrencySelect:!0,currency:c==null?void 0:c.liquidityToken,pair:c,id:"liquidity-amount"}),e.jsx(de,{children:e.jsx(ye,{size:"16",color:C.colors.text4})}),e.jsx(ce,{hideBalance:!0,value:P[t.CURRENCY_A],onUserInput:ze,onMax:()=>p(t.LIQUIDITY_PERCENT,"100"),showMaxButton:!se,currency:i,label:"Output",onCurrencySelect:Je,id:"remove-liquidity-tokena"}),e.jsx(de,{children:e.jsx(_e,{size:"16",color:C.colors.text2})}),e.jsx(ce,{hideBalance:!0,value:P[t.CURRENCY_B],onUserInput:Be,onMax:()=>p(t.LIQUIDITY_PERCENT,"100"),showMaxButton:!se,currency:n,label:"Output",onCurrencySelect:Xe,id:"remove-liquidity-tokenb"})]}),c&&e.jsxs("div",{style:{padding:"10px 20px"},children:[e.jsxs(T,{children:["Price:",e.jsxs("div",{children:["1 ",i==null?void 0:i.symbol," = ",d?c.priceOf(d).toSignificant(6):"-"," ",n==null?void 0:n.symbol]})]}),e.jsxs(T,{children:[e.jsx("div",{}),e.jsxs("div",{children:["1 ",n==null?void 0:n.symbol," = ",g?c.priceOf(g).toSignificant(6):"-"," ",i==null?void 0:i.symbol]})]})]}),e.jsx("div",{style:{position:"relative"},children:r?e.jsxs(T,{children:[e.jsx(Tt,{onClick:We,confirmed:_===L.APPROVED||E!==null,disabled:_!==L.NOT_APPROVED||E!==null,mr:"0.5rem",fontWeight:700,fontSize:16,children:_===L.PENDING?e.jsx(bt,{children:"Approving"}):_===L.APPROVED||E!==null?"Approved":"Approve"}),e.jsx(wt,{onClick:()=>{w(!0)},disabled:!N||E===null&&_!==L.APPROVED,error:!N&&!!l[t.CURRENCY_A]&&!!l[t.CURRENCY_B],children:e.jsx(m,{fontSize:16,fontWeight:700,children:f||"Remove"})})]}):e.jsx(It,{onClick:H,children:"Connect Wallet"})})]})]})]}),c?e.jsx(F,{style:{minWidth:"27rem",marginTop:"1rem"},children:e.jsx(jt,{showUnwrapped:ae,pair:c})}):null]})}export{$t as default};
