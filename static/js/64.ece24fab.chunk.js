(this["webpackJsonp@cheeseswapv2/interface-v2"]=this["webpackJsonp@cheeseswapv2/interface-v2"]||[]).push([[64],{1568:function(e,t,r){"use strict";t.__esModule=!0,t.getTransactionsClient=function(){0;o||(o=new n.ApolloClient({link:new n.HttpLink({uri:a}),cache:new n.InMemoryCache,defaultOptions:l}));return o};var n=r(1532);let o=null;const a="https://gateway.thegraph.com/api/e74f872faa2b79699e978d00e61b412b/subgraphs/id/5xa2cK1KdB4enwsv27k8dqzuecbwDJnSfrHkoJA9RrHF",l={watchQuery:{fetchPolicy:"cache-and-network",errorPolicy:"ignore"},query:{fetchPolicy:"network-only",errorPolicy:"all"}}},827:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(){const e=(0,c.useAllTransactions)(),{chainId:t}=(0,u.useActiveWeb3React)(),r=null!==t&&void 0!==t?t:m.SUPPORTED_CHAIN_ID,[n,a]=(0,o.useState)(()=>q(r)),[l,s]=(0,o.useState)(!1),[f,h]=(0,o.useState)(0),g=(0,o.useMemo)(()=>(0,p.getTransactionsClient)(),[]);(0,o.useEffect)(()=>{a(q(r))},[r]),(0,o.useEffect)(()=>{if(!g)return void s(!1);let e=!1;const t=async()=>{s(!0);try{var t;const{data:n}=await g.query({query:j,variables:{first:100}});if(e)return;const o=(null!==(t=null===n||void 0===n?void 0:n.swaps)&&void 0!==t?t:[]).map(U).filter(e=>Boolean(e));a(e=>function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){const n=e[r],o=t[r];if(!o)return!1;if(n.rowKey!==o.rowKey||n.hash!==o.hash||n.fromAmount!==o.fromAmount||n.fromSymbol!==o.fromSymbol||n.toAmount!==o.toAmount||n.toSymbol!==o.toSymbol||n.timestamp!==o.timestamp)return!1}return!0}(e,o)?e:(function(e,t){if("undefined"===typeof window)return;try{const r={chainId:e,rows:t,updatedAt:Date.now()};window.localStorage.setItem("cheeseswap:transactions:routerRows:v1",JSON.stringify(r))}catch(r){console.warn("Failed to persist router cache",r)}}(r,o),o))}catch(n){e||console.error("Unable to load swaps from subgraph",n)}finally{e||s(!1)}};t();const n=setInterval(t,3e4);return()=>{e=!0,clearInterval(n)}},[g,r]);const v=(0,o.useMemo)(()=>Object.values(null!==e&&void 0!==e?e:{}).filter(e=>{var t;return null===(t=e.summary)||void 0===t?void 0:t.toLowerCase().startsWith("swap ")}).sort((e,t)=>t.addedTime-e.addedTime).slice(0,100).map(e=>{const{inputAmount:t,inputSymbol:r,outputAmount:n,outputSymbol:o}=function(e){if(!e)return{};const t=e.match(/Swap\s([\d.,]+)\s([^\s]+)\sfor\s([\d.,]+)\s([^\s]+)/i);return t?{inputAmount:t[1],inputSymbol:t[2],outputAmount:t[3],outputSymbol:t[4]}:{}}(e.summary);return{rowKey:"local-"+e.hash,hash:e.hash,fromAmount:null!==t&&void 0!==t?t:"\u2014",fromSymbol:null!==r&&void 0!==r?r:"Unknown",fromLogoSrcs:C(r),toAmount:null!==n&&void 0!==n?n:"\u2014",toSymbol:null!==o&&void 0!==o?o:"Unknown",toLogoSrcs:C(o),timestamp:e.addedTime,status:B(e)}}),[e]),E=n.length?n:v,K=n.length>0,F=E.length?Math.ceil(E.length/20):0,H=E.slice(20*f,20*f+20),J=E.length>20&&F>0;(0,o.useEffect)(()=>{h(0)},[K]),(0,o.useEffect)(()=>{F||0===f?F&&f>=F&&h(F-1):h(0)},[F,f]);const W=()=>h(e=>Math.max(e-1,0)),Q=()=>h(e=>Math.min(e+1,Math.max(F-1,0))),G=e=>o.default.createElement(_,{style:e},o.default.createElement(M,{onClick:W,disabled:0===f},"Previous"),o.default.createElement(D,null,"Page ",f+1," / ",F),o.default.createElement(M,{onClick:Q,disabled:f+1>=F},"Next"));return o.default.createElement(y,null,o.default.createElement(w,null,o.default.createElement(b,null,"Transactions"),o.default.createElement(x,{"aria-label":"Live feed indicator"})),o.default.createElement(k,null,J&&G({marginTop:0,marginBottom:"0.75rem"}),o.default.createElement(S,null,o.default.createElement("div",null,"From"),o.default.createElement("div",null,"To"),o.default.createElement("div",null,"Tx Hash"),o.default.createElement("div",null,"Time Stamp"),o.default.createElement("div",null,"Status")),0===E.length?o.default.createElement(P,null,l?"Loading recent swaps from router\u2026":"No recent swap transactions yet."):H.map(e=>{const r=null!==t&&void 0!==t?t:m.SUPPORTED_CHAIN_ID,n=e.hash?(0,d.getBscscanLink)(r,e.hash,"transaction"):void 0,a=e.fromTokenAddress?(0,d.getBscscanLink)(r,e.fromTokenAddress,"token"):void 0,l=e.toTokenAddress?(0,d.getBscscanLink)(r,e.toTokenAddress,"token"):void 0;return o.default.createElement($,{key:e.rowKey},o.default.createElement(A,null,a?o.default.createElement(L,{href:a,target:"_blank",rel:"noopener noreferrer"},o.default.createElement(i.default,{size:"44px",srcs:e.fromLogoSrcs,alt:e.fromSymbol+" logo"})):o.default.createElement(i.default,{size:"44px",srcs:e.fromLogoSrcs,alt:e.fromSymbol+" logo"}),o.default.createElement(T,null,o.default.createElement("strong",null,e.fromAmount),o.default.createElement("span",null,e.fromSymbol))),o.default.createElement(A,null,l?o.default.createElement(L,{href:l,target:"_blank",rel:"noopener noreferrer"},o.default.createElement(i.default,{size:"44px",srcs:e.toLogoSrcs,alt:e.toSymbol+" logo"})):o.default.createElement(i.default,{size:"44px",srcs:e.toLogoSrcs,alt:e.toSymbol+" logo"}),o.default.createElement(T,null,o.default.createElement("strong",null,e.toAmount),o.default.createElement("span",null,e.toSymbol))),n?o.default.createElement(I,{href:n,target:"_blank",rel:"noopener noreferrer"},R(e.hash)," \u2197"):o.default.createElement("span",null,R(e.hash)),o.default.createElement("span",null,function(e){if(!e||Number.isNaN(e))return"\u2014";try{return new Date(e).toLocaleString(void 0,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch(t){return"\u2014"}}(e.timestamp)),o.default.createElement(O,{variant:e.status},e.status))}),J&&G()),o.default.createElement(N,null,o.default.createElement("span",null,K?"Showing last tracked transactions by GraphQL API. To view more details & depth data visit":"GraphQL feed temporarily unavailable. Displaying your latest wallet swaps instead."),o.default.createElement(z,{href:"https://info.cheeseswap.app",target:"_blank",rel:"noopener noreferrer"},"Analytics V2 \u2197")))};var o=g(r(0)),a=g(r(14)),l=r(1532),i=n(r(390)),s=r(34),u=r(22),c=r(150),d=r(38),m=r(58),f=r(104),p=r(1568);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}const y=a.default.div`
  width: min(98vw, 1260px);
  max-width: 1260px;
  padding: 2rem 1.25rem 3.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 auto;
`,b=a.default.h1`
  margin: 0;
  font-size: 1.75rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
`,w=a.default.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,v=a.keyframes`
  0% {
    opacity: 0.3;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.9);
  }
`,x=a.default.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>{let{theme:t}=e;return t.colors.green1||"#2ecc71"}};
  box-shadow: 0 0 6px rgba(46, 204, 113, 0.7);
  animation: ${v} 1.4s ease-in-out infinite;
`,k=a.default.div`
  width: 100%;
  border-radius: 28px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
  padding: 2rem;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,E=a.default.div`
  display: grid;
  grid-template-columns: minmax(260px, 1.35fr) minmax(260px, 1.35fr) minmax(200px, 0.9fr) minmax(220px, 0.9fr) minmax(140px, 0.6fr);
  gap: 1.2rem;
  align-items: center;
  min-width: 1080px;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    min-width: 880px;
  `}};
`,S=(0,a.default)(E)`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  margin-bottom: 0.75rem;
  padding: 0.5rem 0.25rem;
  border-radius: 16px;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.colors.bg2}} 0%, ${e=>{let{theme:t}=e;return t.colors.bg3}} 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
`,$=(0,a.default)(E)`
  padding: 1rem 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  font-size: 0.95rem;
`,A=a.default.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,L=(0,a.default)(s.ExternalLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`,T=a.default.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  gap: 0.15rem;

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.text1}};
    font-size: 1rem;
  }

  span {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
    font-size: 0.85rem;
  }
`,I=(0,a.default)(s.ExternalLink)`
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
`,O=a.default.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: capitalize;
  color: ${e=>{let{variant:t,theme:r}=e;return"success"===t||"failed"===t?r.colors.white:r.colors.text1}};
  background: ${e=>{let{variant:t,theme:r}=e;switch(t){case"success":return r.colors.primary1;case"failed":return r.colors.red1;default:return r.colors.bg3}}};
`,P=a.default.div`
  padding: 2rem 0;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  font-size: 1rem;
`,N=a.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  font-size: 0.85rem;
  margin-top: 12px;
`,z=(0,a.default)(s.ExternalLink)`
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,_=a.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.75rem;
  width: 100%;
`,M=a.default.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
`,D=a.default.span`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  min-width: 110px;
  text-align: center;
`,j=l.gql`
  query TransactionSwaps($first: Int!) {
    swaps(first: $first, orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        timestamp
      }
      amount0In
      amount0Out
      amount1In
      amount1Out
      pair {
        id
        token0 {
          id
          symbol
          decimals
        }
        token1 {
          id
          symbol
          decimals
        }
      }
    }
  }
`;function C(e,t){const r=[];return t&&r.push((0,f.getTokenLogoURL)(t)),e&&r.push(`/images/coins/${e.toUpperCase()}.png`,`/images/coins/${e.toLowerCase()}.png`),r.push("/images/coins/token.png"),r}function K(e){const t=Number(null!==e&&void 0!==e?e:"0");return Number.isFinite(t)&&0!==t?t>=1?t.toLocaleString(void 0,{maximumFractionDigits:4}):t.toPrecision(4):"0"}function B(e){return e.receipt?e.receipt.status?"success":"failed":"pending"}function R(e){return`${e.slice(0,6)}...${e.slice(-4)}`}function U(e){var t,r,n,o,a;const l=e.pair;if(null===l||void 0===l||!l.token0||null===l||void 0===l||!l.token1)return null;const i=Number(null!==(t=e.amount0In)&&void 0!==t?t:"0"),s=Number(null!==(r=e.amount0Out)&&void 0!==r?r:"0"),u=i>0?l.token0:l.token1,c=s>0?l.token0:l.token1,d=i>0?e.amount0In:e.amount1In,m=s>0?e.amount0Out:e.amount1Out;if(!u||!c||!Number(null!==d&&void 0!==d?d:"0")&&!Number(null!==m&&void 0!==m?m:"0"))return null;const f=u.symbol||u.id.slice(0,6),p=c.symbol||c.id.slice(0,6),h=null!==(n=e.transaction)&&void 0!==n&&n.timestamp?1e3*Number(e.transaction.timestamp):void 0,g=null!==(o=null===(a=e.transaction)||void 0===a?void 0:a.id)&&void 0!==o?o:e.id;return{rowKey:e.id,hash:g,fromAmount:K(d),fromSymbol:f,fromLogoSrcs:C(f,u.id),fromTokenAddress:u.id,toAmount:K(m),toSymbol:p,toLogoSrcs:C(p,c.id),toTokenAddress:c.id,timestamp:h,status:"success"}}function q(e){if("undefined"===typeof window)return[];try{const t=window.localStorage.getItem("cheeseswap:transactions:routerRows:v1");if(!t)return[];const r=JSON.parse(t);return r&&r.chainId===e&&Array.isArray(r.rows)?r.rows.map((e,t)=>{var r,n;return{...e,rowKey:null!==(r=e.rowKey)&&void 0!==r?r:`${e.hash}-${null!==(n=e.timestamp)&&void 0!==n?n:0}-${t}`}}):[]}catch(t){return console.warn("Failed to read router cache",t),[]}}}}]);