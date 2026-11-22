import{r as a,M as w,f as q,k as B,t as L,l as A,m as W,j as e,A as b,n as C,o as j,B as I,L as P,T as r,p as d,R as v,Q as M,s as l,v as c,w as x,D as S,F as z,x as E,q as y}from"./index-NoqJLJW8.js";const F=y.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.85rem;
  width: 100%;
  max-width: ${({showChart:i})=>i?"1120px":"460px"};
  margin: 0 auto;
  justify-content: ${({showChart:i})=>i?"flex-start":"center"};
  transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({theme:i})=>i.mediaWidth.upToMedium`
    flex-direction: column;
    max-width: 100%;
  `}
`,R=y.div`
  width: 100%;
  max-width: 460px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({theme:i})=>i.mediaWidth.upToMedium`
    max-width: 100%;
  `}
`;function D(){const i=a.useContext(w),{account:h}=q(),u=B(),o=a.useMemo(()=>u.map(t=>({liquidityToken:L(t),tokens:t})),[u]),T=a.useMemo(()=>o.map(t=>t.liquidityToken),[o]),[p,f]=A(h??void 0,T),m=a.useMemo(()=>o.filter(({liquidityToken:t})=>{var g;return(g=p[t.address])==null?void 0:g.greaterThan("0")}),[o,p]),n=W(m.map(({tokens:t})=>t)),k=f||(n==null?void 0:n.length)<m.length||(n==null?void 0:n.some(t=>!t)),s=n.map(([,t])=>t).filter(t=>!!t);return e.jsx(e.Fragment,{children:e.jsx(F,{showChart:!1,children:e.jsx(R,{children:e.jsxs(b,{children:[e.jsx(C,{active:"pool"}),e.jsxs(j,{gap:"lg",justify:"center",style:{marginTop:"1.5rem"},children:[e.jsx(I,{id:"join-pool-button",as:P,style:{padding:10},to:"/add/ETH",children:e.jsx(r,{fontWeight:700,fontSize:16,children:e.jsx(d,{translationId:100,children:"Add Liquidity"})})}),e.jsxs(j,{gap:"12px",style:{width:"100%"},children:[e.jsxs(v,{padding:"0 8px",children:[e.jsx(r,{color:i.colors.text1,fontWeight:700,children:e.jsx(d,{translationId:102,children:"Your Liquidity"})}),e.jsx(M,{text:l(130,"When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.")})]}),h?k?e.jsx(c,{padding:"40px",children:e.jsx(x.Body,{color:i.colors.text3,textAlign:"center",children:e.jsx(S,{children:"Loading"})})}):(s==null?void 0:s.length)>0?e.jsx(e.Fragment,{children:s.map(t=>e.jsx(z,{pair:t},t.liquidityToken.address))}):e.jsx(c,{padding:"40px",children:e.jsx(x.Body,{color:i.colors.text3,textAlign:"center",children:e.jsx(d,{translationId:104,children:"We are sorry. No liquidity found."})})}):e.jsx(c,{padding:"40px",children:e.jsx(x.Body,{color:i.colors.text3,textAlign:"center",children:"Connect to a wallet to view your liquidity."})}),e.jsx("div",{children:e.jsxs(r,{textAlign:"center",fontSize:16,style:{padding:".5rem 0 .5rem 0"},children:[l(106,"Don't see a pool you joined?")," ",e.jsx(E,{id:"import-pool-link",to:"/find",children:l(108,"Import it.")})]})})]})]})]})})})})}export{D as default};
