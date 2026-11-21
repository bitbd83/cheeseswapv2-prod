(this["webpackJsonp@cheeseswapv2/interface-v2"]=this["webpackJsonp@cheeseswapv2/interface-v2"]||[]).push([[67],{828:function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const e=(0,l.useContext)(r.ThemeContext),{account:t}=(0,g.useActiveWeb3React)(),n=(0,E.useTrackedTokenPairs)(),a=(0,l.useMemo)(()=>n.map(e=>({liquidityToken:(0,E.toV2LiquidityToken)(e),tokens:e})),[n]),b=(0,l.useMemo)(()=>a.map(e=>e.liquidityToken),[a]),[P,W]=(0,c.useTokenBalancesWithLoadingIndicator)(null!==t&&void 0!==t?t:void 0,b),q=(0,l.useMemo)(()=>a.filter(e=>{var t;let{liquidityToken:n}=e;return null===(t=P[n.address])||void 0===t?void 0:t.greaterThan("0")}),[a,P]),L=(0,x.usePairs)(q.map(e=>{let{tokens:t}=e;return t})),M=W||(null===L||void 0===L?void 0:L.length)<q.length||(null===L||void 0===L?void 0:L.some(e=>!e)),A=L.map(e=>{let[,t]=e;return t}).filter(e=>Boolean(e));return l.default.createElement(l.default.Fragment,null,l.default.createElement(j,{showChart:!1},l.default.createElement(C,null,l.default.createElement(v.default,null,l.default.createElement(o.SwapPoolTabs,{active:"pool"}),l.default.createElement(y.AutoColumn,{gap:"lg",justify:"center",style:{marginTop:"1.5rem"}},l.default.createElement(h.ButtonPrimary,{id:"join-pool-button",as:i.Link,style:{padding:10},to:"/add/ETH"},l.default.createElement(f.Text,{fontWeight:700,fontSize:16},l.default.createElement(T.default,{translationId:100},"Add Liquidity"))),l.default.createElement(y.AutoColumn,{gap:"12px",style:{width:"100%"}},l.default.createElement(p.RowBetween,{padding:"0 8px"},l.default.createElement(f.Text,{color:e.colors.text1,fontWeight:700},l.default.createElement(T.default,{translationId:102},"Your Liquidity")),l.default.createElement(d.default,{text:(0,k.TranslateString)(130,"When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.")})),t?M?l.default.createElement(m.LightCard,{padding:"40px"},l.default.createElement(s.TYPE.Body,{color:e.colors.text3,textAlign:"center"},l.default.createElement(w.Dots,null,"Loading"))):(null===A||void 0===A?void 0:A.length)>0?l.default.createElement(l.default.Fragment,null,A.map(e=>l.default.createElement(u.default,{key:e.liquidityToken.address,pair:e}))):l.default.createElement(m.LightCard,{padding:"40px"},l.default.createElement(s.TYPE.Body,{color:e.colors.text3,textAlign:"center"},l.default.createElement(T.default,{translationId:104},"We are sorry. No liquidity found."))):l.default.createElement(m.LightCard,{padding:"40px"},l.default.createElement(s.TYPE.Body,{color:e.colors.text3,textAlign:"center"},"Connect to a wallet to view your liquidity.")),l.default.createElement("div",null,l.default.createElement(f.Text,{textAlign:"center",fontSize:16,style:{padding:".5rem 0 .5rem 0"}},(0,k.TranslateString)(106,"Don't see a pool you joined?")," ",l.default.createElement(s.StyledInternalLink,{id:"import-pool-link",to:"/find"},(0,k.TranslateString)(108,"Import it."))))))))))};var l=P(n(0)),r=P(n(14)),i=n(76),o=n(377),d=a(n(128)),u=a(n(379)),c=n(105),s=n(34),f=n(40),m=n(192),p=n(28),h=n(72),y=n(47),g=n(22),x=n(193),E=n(90),v=a(n(378)),w=n(376),T=a(n(129)),k=n(152);function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}const j=r.default.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.85rem;
  width: 100%;
  max-width: ${e=>{let{showChart:t}=e;return t?"1120px":"460px"}};
  margin: 0 auto;
  justify-content: ${e=>{let{showChart:t}=e;return t?"flex-start":"center"}};
  transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    flex-direction: column;
    max-width: 100%;
  `}}
`,C=r.default.div`
  width: 100%;
  max-width: 460px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    max-width: 100%;
  `}}
`}}]);