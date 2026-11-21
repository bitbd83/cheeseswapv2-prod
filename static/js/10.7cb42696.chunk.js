(this["webpackJsonp@cheeseswapv2/interface-v2"]=this["webpackJsonp@cheeseswapv2/interface-v2"]||[]).push([[10],{1337:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{priceImpact:t}=e;return a.default.createElement(i.ErrorText,{fontWeight:700,fontSize:14,severity:(0,o.warningSeverity)(t)},t?t.lessThan(l.ONE_BIPS)?"<0.01%":t.toFixed(2)+"%":"-")};var a=n(r(0)),l=r(58),o=r(256),i=r(376)},1572:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{symbol:t="BINANCE:BNBUSDT",height:r}=e;const n=(0,a.useRef)(null),l=(0,a.useRef)("tradingview_chart_"+Math.random().toString(36).slice(2)),i=(0,a.useRef)(null);(0,a.useEffect)(()=>{if("undefined"===typeof window)return;const e=()=>{window.TradingView&&n.current&&(i.current=new window.TradingView.widget({autosize:!0,symbol:t,interval:"15",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#1c1c1c",enable_publishing:!1,hide_top_toolbar:!1,hide_side_toolbar:!1,allow_symbol_change:!0,save_image:!1,container_id:l.current,studies:["Volume@tv-basicstudies"],disabled_features:["use_localstorage_for_settings","header_saveload","header_screenshot"],enabled_features:["hide_left_toolbar_by_default"],overrides:{"mainSeriesProperties.candleStyle.upColor":"#26a69a","mainSeriesProperties.candleStyle.downColor":"#ef5350","mainSeriesProperties.candleStyle.borderUpColor":"#26a69a","mainSeriesProperties.candleStyle.borderDownColor":"#ef5350","mainSeriesProperties.candleStyle.wickUpColor":"#26a69a","mainSeriesProperties.candleStyle.wickDownColor":"#ef5350"}}))};if(window.TradingView)return e(),()=>{var e;null===(e=i.current)||void 0===e||e.remove(),i.current=null};const r="tradingview-widget-script";let a=document.getElementById(r);return a?a.addEventListener("load",e):(a=document.createElement("script"),a.id=r,a.src="https://s3.tradingview.com/tv.js",a.async=!0,a.onload=e,document.head.appendChild(a)),()=>{var t,r;null===(t=i.current)||void 0===t||t.remove(),i.current=null,null===(r=a)||void 0===r||r.removeEventListener("load",e)}},[t]),(0,a.useEffect)(()=>{var e;null!==(e=i.current)&&void 0!==e&&e.resize&&i.current.resize()},[r]);const u=r?Math.max(r-32,280):void 0;return a.default.createElement(o,{chartHeight:r},a.default.createElement("div",{id:l.current,ref:n,style:{height:u?u+"px":"100%",flex:1}}))};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(0));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}const o=n(r(14)).default.div`
  width: 100%;
  height: ${e=>{let{chartHeight:t}=e;return t?t+"px":"100%"}};
  min-height: ${e=>{let{chartHeight:t}=e;return t?t+"px":"420px"}};
  max-height: ${e=>{let{chartHeight:t}=e;return t?t+"px":"none"}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 0 0 1px ${e=>{let{theme:t}=e;return t.colors.primary6}};
  border-radius: 24px;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.12),
      0 0 0 1px ${e=>{let{theme:t}=e;return t.colors.primary5}};
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    height: auto;
    min-height: 360px;
    max-height: none;
  `}}
`},1573:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{id:t,value:r,onChange:n}=e;const{chainId:f}=(0,i.useActiveWeb3React)(),p=(0,a.useContext)(l.ThemeContext),{address:y,loading:E,name:v}=(0,o.default)(r),b=(0,a.useCallback)(e=>{const t=e.target.value.replace(/\s+/g,"");n(t)},[n]),T=Boolean(r.length>0&&!E&&!y);return a.default.createElement(m,{id:t},a.default.createElement(h,{error:T},a.default.createElement(g,null,a.default.createElement(c.AutoColumn,{gap:"md"},a.default.createElement(d.RowBetween,null,a.default.createElement(u.TYPE.Black,{color:p.colors.text2,fontWeight:700,fontSize:14},"Recipient"),y&&f&&a.default.createElement(u.ExternalLink,{href:(0,s.getBscscanLink)(f,null!==v&&void 0!==v?v:y,"address"),style:{fontSize:"14px"}},"(View on bscscan)")),a.default.createElement(w,{className:"recipient-address-input",type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address or ENS name",error:T,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:b,value:r})))))};var a=p(r(0)),l=p(r(14)),o=n(r(385)),i=r(22),u=r(34),c=r(47),d=r(28),s=r(38);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}const m=l.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  position: relative;
  border-radius: 1.25rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  z-index: 1;
  width: 100%;
`,h=l.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 2px solid ${e=>{let{error:t,theme:r}=e;return t?r.colors.red1:r.colors.bg2}};
  transition: border-color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}},
    color 500ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
`,g=l.default.div`
  flex: 1;
  padding: 1rem;
`,w=l.default.input`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;14
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  transition: color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  color: ${e=>{let{error:t,theme:r}=e;return t?r.colors.red1:r.colors.primary1}};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  width: 100%;
  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
  }
`},1574:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){var t,r,n,d,s,f;let{trade:p,originalTrade:m,onAcceptChanges:h,allowedSlippage:g,onConfirm:w,onDismiss:y,recipient:E,swapErrorMessage:v,isOpen:b,attemptingTxn:T,txHash:x}=e;const P=(0,l.useMemo)(()=>{return Boolean(p&&m&&(t=m,(e=p).tradeType!==t.tradeType||!(0,a.currencyEquals)(e.inputAmount.currency,t.inputAmount.currency)||!e.inputAmount.equalTo(t.inputAmount)||!(0,a.currencyEquals)(e.outputAmount.currency,t.outputAmount.currency)||!e.outputAmount.equalTo(t.outputAmount)));var e,t},[m,p]),C=(0,l.useCallback)(()=>p?l.default.createElement(u.default,{trade:p,allowedSlippage:g,recipient:E,showAcceptChanges:P,onAcceptChanges:h}):null,[g,h,E,P,p]),A=(0,l.useCallback)(()=>p?l.default.createElement(i.default,{onConfirm:w,trade:p,disabledConfirm:P,swapErrorMessage:v,allowedSlippage:g}):null,[g,w,P,v,p]),S=`Swapping ${null===p||void 0===p||null===(t=p.inputAmount)||void 0===t?void 0:t.toSignificant(6)} ${null===p||void 0===p||null===(r=p.inputAmount)||void 0===r||null===(n=r.currency)||void 0===n?void 0:n.symbol} for ${null===p||void 0===p||null===(d=p.outputAmount)||void 0===d?void 0:d.toSignificant(6)} ${null===p||void 0===p||null===(s=p.outputAmount)||void 0===s||null===(f=s.currency)||void 0===f?void 0:f.symbol}`,k=(0,l.useCallback)(()=>v?l.default.createElement(o.TransactionErrorContent,{onDismiss:y,message:v}):l.default.createElement(o.ConfirmationModalContent,{title:"Confirm Swap",onDismiss:y,topContent:C,bottomContent:A}),[y,A,C,v]),O=(0,l.useMemo)(()=>{if(!p)return;const e=p.inputAmount.currency;if(e===a.ETHER)return p.outputAmount.currency;if(e instanceof Object&&"address"in e){var t,r;const n=null===(t=e.address)||void 0===t?void 0:t.toLowerCase(),a=null===c.USDT||void 0===c.USDT||null===(r=c.USDT.address)||void 0===r?void 0:r.toLowerCase();if(n&&a&&n===a)return p.outputAmount.currency}return p.inputAmount.currency},[p]);return l.default.createElement(o.default,{isOpen:b,onDismiss:y,attemptingTxn:T,hash:x,content:k,pendingText:S,currencyToAdd:O})};var a=r(24),l=s(r(0)),o=s(r(381)),i=n(r(1575)),u=n(r(1576)),c=r(58);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}},1575:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){var t,r,n,y;let{trade:E,onConfirm:v,allowedSlippage:b,swapErrorMessage:T,disabledConfirm:x}=e;const[P,C]=(0,l.useState)(!1),A=(0,l.useContext)(u.ThemeContext),S=(0,l.useMemo)(()=>(0,s.computeSlippageAdjustedAmounts)(E,b),[b,E]),{priceImpactWithoutFee:k,realizedLPFee:O}=(0,l.useMemo)(()=>(0,s.computeTradePriceBreakdown)(E),[E]),I=(0,s.warningSeverity)(k);return l.default.createElement(l.default.Fragment,null,l.default.createElement(p.AutoColumn,{gap:"0px"},l.default.createElement(h.RowBetween,{align:"center"},l.default.createElement(i.Text,{fontWeight:600,fontSize:14,color:A.colors.text2},"Price"),l.default.createElement(i.Text,{fontWeight:700,fontSize:14,color:A.colors.text1,style:{justifyContent:"center",alignItems:"center",display:"flex",textAlign:"right",paddingLeft:"10px"}},(0,s.formatExecutionPrice)(E,P),l.default.createElement(w.StyledBalanceMaxMini,{onClick:()=>C(!P)},l.default.createElement(o.Repeat,{size:16})))),l.default.createElement(h.RowBetween,null,l.default.createElement(h.RowFixed,null,l.default.createElement(d.TYPE.Black,{fontSize:14,fontWeight:600,color:A.colors.text2},E.tradeType===a.TradeType.EXACT_INPUT?"Minimum received":"Maximum sold"),l.default.createElement(m.default,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."})),l.default.createElement(h.RowFixed,null,l.default.createElement(d.TYPE.Black,{fontSize:14},E.tradeType===a.TradeType.EXACT_INPUT?null!==(t=null===(r=S[c.Field.OUTPUT])||void 0===r?void 0:r.toSignificant(6))&&void 0!==t?t:"-":null!==(n=null===(y=S[c.Field.INPUT])||void 0===y?void 0:y.toSignificant(6))&&void 0!==n?n:"-"),l.default.createElement(d.TYPE.Black,{fontSize:14,marginLeft:"4px"},E.tradeType===a.TradeType.EXACT_INPUT?E.outputAmount.currency.symbol:E.inputAmount.currency.symbol))),l.default.createElement(h.RowBetween,null,l.default.createElement(h.RowFixed,null,l.default.createElement(d.TYPE.Black,{color:A.colors.text2,fontSize:14,fontWeight:600},"Price Impact"),l.default.createElement(m.default,{text:"The difference between the market price and your price due to trade size."})),l.default.createElement(g.default,{priceImpact:k})),l.default.createElement(h.RowBetween,null,l.default.createElement(h.RowFixed,null,l.default.createElement(d.TYPE.Black,{fontSize:14,fontWeight:600,color:A.colors.text2},"Liquidity Provider Fee"),l.default.createElement(m.default,{text:"For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the CheeseSwap treasury."})),l.default.createElement(d.TYPE.Black,{fontSize:14},O?(null===O||void 0===O?void 0:O.toSignificant(6))+" "+E.inputAmount.currency.symbol:"-"))),l.default.createElement(h.AutoRow,null,l.default.createElement(f.ButtonError,{onClick:v,disabled:x,error:I>3,style:{margin:"10px 0 0 0",padding:"11.2px 16px",fontSize:"12.8px"},id:"confirm-swap-or-send"},l.default.createElement(i.Text,{fontSize:14,fontWeight:700},I>3?"Swap Anyway":"Confirm Swap")),T?l.default.createElement(w.SwapCallbackError,{error:T}):null))};var a=r(24),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),o=r(35),i=r(40),u=r(14),c=r(151),d=r(34),s=r(256),f=r(72),p=r(47),m=n(r(128)),h=r(28),g=n(r(1337)),w=r(376);function y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}},1576:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){var t,r;let{trade:n,allowedSlippage:y,recipient:E,showAcceptChanges:v,onAcceptChanges:b}=e;const T=(0,l.useMemo)(()=>(0,p.computeSlippageAdjustedAmounts)(n,y),[n,y]),{priceImpactWithoutFee:x}=(0,l.useMemo)(()=>(0,p.computeTradePriceBreakdown)(n),[n]),P=(0,p.warningSeverity)(x),C=(0,l.useContext)(u.ThemeContext);return l.default.createElement(m.AutoColumn,{gap:"md",style:{marginTop:"20px"}},l.default.createElement(g.RowBetween,{align:"flex-end"},l.default.createElement(g.RowFixed,{gap:"0px"},l.default.createElement(h.default,{currency:n.inputAmount.currency,size:"24px",style:{marginRight:"12px"}}),l.default.createElement(w.TruncatedText,{fontSize:24,fontWeight:700,color:v&&n.tradeType===a.TradeType.EXACT_OUTPUT?C.colors.primary1:""},n.inputAmount.toSignificant(6))),l.default.createElement(g.RowFixed,{gap:"0px"},l.default.createElement(i.Text,{fontSize:24,fontWeight:700,style:{marginLeft:"10px"}},n.inputAmount.currency.symbol))),l.default.createElement(g.RowFixed,null,l.default.createElement(o.ArrowDown,{size:"16",color:C.colors.text2,style:{marginLeft:"4px",minWidth:"16px"}})),l.default.createElement(g.RowBetween,{align:"flex-end"},l.default.createElement(g.RowFixed,{gap:"10px"},l.default.createElement(h.default,{currency:n.outputAmount.currency,size:"24px",style:{marginRight:"12px"}}),l.default.createElement(w.TruncatedText,{fontSize:24,fontWeight:700,color:P>2?C.colors.red1:v&&n.tradeType===a.TradeType.EXACT_INPUT?C.colors.primary1:""},n.outputAmount.toSignificant(6))),l.default.createElement(g.RowFixed,{gap:"0px"},l.default.createElement(i.Text,{fontSize:24,fontWeight:700,style:{marginLeft:"10px"}},n.outputAmount.currency.symbol))),v?l.default.createElement(w.SwapShowAcceptChanges,{justify:"flex-start",gap:"0px"},l.default.createElement(g.RowBetween,null,l.default.createElement(g.RowFixed,null,l.default.createElement(o.AlertTriangle,{size:20,style:{marginRight:"8px",minWidth:24}}),l.default.createElement(d.TYPE.Main,{color:C.colors.primary1}," Price Updated")),l.default.createElement(s.ButtonPrimary,{style:{padding:".5rem",width:"fit-content",fontSize:"0.825rem",borderRadius:"12px"},onClick:b},"Accept"))):null,l.default.createElement(m.AutoColumn,{justify:"flex-start",gap:"sm",style:{padding:"12px 0 0 0px"}},n.tradeType===a.TradeType.EXACT_INPUT?l.default.createElement(d.TYPE.Italic,{textAlign:"left",style:{width:"100%"}},"Output is estimated. You will receive at least ",l.default.createElement("b",null,null===(t=T[c.Field.OUTPUT])||void 0===t?void 0:t.toSignificant(6)," ",n.outputAmount.currency.symbol)," or the transaction will revert."):l.default.createElement(d.TYPE.Italic,{textAlign:"left",style:{width:"100%"}},"Input is estimated. You will sell at most ",l.default.createElement("b",null,null===(r=T[c.Field.INPUT])||void 0===r?void 0:r.toSignificant(6)," ",n.inputAmount.currency.symbol)," or the transaction will revert.")),null!==E?l.default.createElement(m.AutoColumn,{justify:"flex-start",gap:"sm",style:{padding:"12px 0 0 0px"}},l.default.createElement(d.TYPE.Main,null,"Output will be sent to"," ",l.default.createElement("b",{title:E},(0,f.isAddress)(E)?(0,f.shortenAddress)(E):E))):null)};var a=r(24),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),o=r(35),i=r(40),u=r(14),c=r(151),d=r(34),s=r(72),f=r(38),p=r(256),m=r(47),h=n(r(104)),g=r(28),w=r(376);function y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}},1577:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{trade:t,...r}=e;return a.default.createElement(d,{show:Boolean(t)},a.default.createElement(o.AdvancedSwapDetails,Object.assign({},r,{trade:t})))};var a=n(r(0)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(14)),o=r(1578);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const u=l.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,c=l.keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,d=l.default.div`
  padding-top: calc(16px + 2rem);
  padding-bottom: 24px;
  margin-top: -2rem;
  width: 100%;
  max-width: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  background: transparent;
  border-top: none;
  box-shadow: none;
  z-index: -1;
  pointer-events: ${e=>{let{show:t}=e;return t?"auto":"none"}};

  opacity: ${e=>{let{show:t}=e;return t?1:0}};
  animation: ${e=>{let{show:t}=e;return t?u:c}} 400ms ease-in-out;
  transition: opacity 400ms ease-in-out;
`},1578:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.AdvancedSwapDetails=function(e){let{trade:t}=e;const r=(0,l.useContext)(o.ThemeContext),[n]=(0,u.useUserSlippageTolerance)(),a=Boolean(t&&t.route.path.length>2);return l.default.createElement(s.AutoColumn,{gap:"md"},t&&l.default.createElement(l.default.Fragment,null,l.default.createElement(v,{trade:t,allowedSlippage:n}),a&&l.default.createElement(l.default.Fragment,null,l.default.createElement(h.SectionBreak,null),l.default.createElement(s.AutoColumn,{style:{padding:"0 24px"}},l.default.createElement(p.RowFixed,null,l.default.createElement(c.TYPE.Black,{fontSize:14,fontWeight:600,color:r.colors.text2},"Route"),l.default.createElement(f.default,{text:"Routing through these tokens resulted in the best price for your trade."})),l.default.createElement(g.default,{trade:t}))),l.default.createElement(s.AutoColumn,{style:{padding:"0 24px"}},l.default.createElement(E,{href:"https://info.cheeseswap.app/#/pair/"+t.route.pairs[0].liquidityToken.address,target:"_blank"},"View Pair Analytics V2 \u2197"))))};var a=r(24),l=y(r(0)),o=y(r(14)),i=r(151),u=r(90),c=r(34),d=r(256),s=r(47),f=n(r(128)),p=r(28),m=n(r(1337)),h=r(376),g=n(r(1579));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}const E=(0,o.default)(c.ExternalLink)`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border-radius: 14px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.01em;
  background: linear-gradient(135deg, #5f6fff 0%, #4b5aff 100%);
  color: #f8f9ff;
  text-decoration: none;
  box-shadow: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: linear-gradient(135deg, #6a78ff 0%, #5765ff 100%);
  }
`;function v(e){var t,r,n,u;let{trade:h,allowedSlippage:g}=e;const w=(0,l.useContext)(o.ThemeContext),{priceImpactWithoutFee:y,realizedLPFee:E}=(0,d.computeTradePriceBreakdown)(h),v=h.tradeType===a.TradeType.EXACT_INPUT,b=(0,d.computeSlippageAdjustedAmounts)(h,g);return l.default.createElement(l.default.Fragment,null,l.default.createElement(s.AutoColumn,{style:{padding:"0 24px"}},l.default.createElement(p.RowBetween,null,l.default.createElement(p.RowFixed,null,l.default.createElement(c.TYPE.Black,{fontSize:14,fontWeight:600,color:w.colors.text2},v?"Minimum received":"Maximum sold"),l.default.createElement(f.default,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."})),l.default.createElement(p.RowFixed,null,l.default.createElement(c.TYPE.Black,{color:w.colors.text1,fontSize:14},v?null!==(t=`${null===(r=b[i.Field.OUTPUT])||void 0===r?void 0:r.toSignificant(4)} ${h.outputAmount.currency.symbol}`)&&void 0!==t?t:"-":null!==(n=`${null===(u=b[i.Field.INPUT])||void 0===u?void 0:u.toSignificant(4)} ${h.inputAmount.currency.symbol}`)&&void 0!==n?n:"-"))),l.default.createElement(p.RowBetween,null,l.default.createElement(p.RowFixed,null,l.default.createElement(c.TYPE.Black,{fontSize:14,fontWeight:600,color:w.colors.text2},"Price Impact"),l.default.createElement(f.default,{text:"The difference between the market price and estimated price due to trade size."})),l.default.createElement(m.default,{priceImpact:y})),l.default.createElement(p.RowBetween,null,l.default.createElement(p.RowFixed,null,l.default.createElement(c.TYPE.Black,{fontSize:14,fontWeight:600,color:w.colors.text2},"Liquidity Provider Fee"),l.default.createElement(f.default,{text:"For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the CheeseSwap treasury."})),l.default.createElement(c.TYPE.Black,{fontSize:14,color:w.colors.text1},E?`${E.toSignificant(6)} ${h.inputAmount.currency.symbol}`:"-"))))}},1579:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),l=r(35),o=r(40),i=r(14),u=r(34),c=n(r(104));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var s=(0,a.memo)((function(e){let{trade:t}=e;const r=(0,a.useContext)(i.ThemeContext);return a.default.createElement(o.Flex,{px:"1rem",py:"0.5rem",my:"0.5rem",style:{border:"1px solid "+r.colors.bg3,borderRadius:"1rem"},flexWrap:"wrap",width:"100%",justifyContent:"space-evenly",alignItems:"center"},t.route.path.map((e,t,n)=>{const i=t===n.length-1;return a.default.createElement(a.Fragment,{key:t},a.default.createElement(o.Flex,{my:"0.5rem",alignItems:"center",style:{flexShrink:0}},a.default.createElement(c.default,{currency:e,size:"1.5rem"}),a.default.createElement(u.TYPE.Black,{fontSize:14,color:r.colors.text1,ml:"0.5rem"},e.symbol)),i?null:a.default.createElement(l.ChevronRight,{color:r.colors.text2}))}))}));t.default=s},1580:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){if(!e.lessThan(n.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN))return"confirm"===window.prompt(`This swap has a price impact of at least ${n.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(0)}%. Please type the word "confirm" to continue with this swap.`);if(!e.lessThan(n.ALLOWED_PRICE_IMPACT_HIGH))return window.confirm(`This swap has a price impact of at least ${n.ALLOWED_PRICE_IMPACT_HIGH.toFixed(0)}%. Please confirm that you would like to continue with this swap.`);return!0};var n=r(58)},1581:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{isOpen:t,tokens:r,onConfirm:n}=e;const[a,o]=(0,l.useState)(!1),i=(0,l.useCallback)(()=>o(e=>!e),[]),u=(0,l.useCallback)(()=>null,[]);return l.default.createElement(f.default,{isOpen:t,onDismiss:u,maxHeight:90},l.default.createElement(E,{className:"token-warning-container"},l.default.createElement(m.AutoColumn,{gap:"lg"},l.default.createElement(p.AutoRow,{gap:"6px"},l.default.createElement(v,null),l.default.createElement(c.TYPE.Main,{color:"#e82020"},"Token imported")),l.default.createElement(c.TYPE.Body,{color:"#e82020"},"Anyone can create an BEP20 token on BSC with ",l.default.createElement("em",null,"any")," name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."),l.default.createElement(c.TYPE.Body,{color:"#e82020"},"This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens."),l.default.createElement(c.TYPE.Body,{color:"#e82020"},"If you purchase an arbitrary token, ",l.default.createElement("strong",null,"you may be unable to sell it back.")),r.map(e=>l.default.createElement(b,{key:e.address,token:e})),l.default.createElement(p.RowBetween,null,l.default.createElement("div",null,l.default.createElement("label",{style:{cursor:"pointer",userSelect:"none"}},l.default.createElement("input",{type:"checkbox",className:"understand-checkbox",checked:a,onChange:i})," ","I understand")),l.default.createElement(g.ButtonError,{disabled:!a,error:!0,width:"140px",padding:"0.5rem 1rem",className:"token-dismiss-button",style:{borderRadius:"10px"},onClick:()=>{n()}},l.default.createElement(c.TYPE.Body,{color:"white"},"Continue"))))))};var a=r(75),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),o=n(r(14)),i=r(22),u=r(113),c=r(34),d=r(38),s=n(r(104)),f=n(r(154)),p=r(28),m=r(47),h=r(35),g=r(72);function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}const y=o.default.div`
  background: ${e=>{let{theme:t}=e;return(0,a.transparentize)(.6,t.colors.bg3)}};
  padding: 0.75rem;
  border-radius: 20px;
`,E=o.default.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(255 217 245);
  border: 2px solid #c9499a;
  border-radius: 20px;
  overflow: auto;
`,v=(0,o.default)(h.AlertTriangle)`
  stroke: ${e=>{let{theme:t}=e;return t.colors.red2}};
`;function b(e){var t,r,n,a;let{token:o}=e;const{chainId:f}=(0,i.useActiveWeb3React)(),h=null!==(t=null===o||void 0===o||null===(r=o.symbol)||void 0===r?void 0:r.toLowerCase())&&void 0!==t?t:"",g=null!==(n=null===o||void 0===o||null===(a=o.name)||void 0===a?void 0:a.toLowerCase())&&void 0!==n?n:"",w=(0,u.useAllTokens)(),E=(0,l.useMemo)(()=>!(!o||!f)&&Object.keys(w).some(e=>{var t,r;const n=w[e];return!n.equals(o)&&((null===(t=n.symbol)||void 0===t?void 0:t.toLowerCase())===h||(null===(r=n.name)||void 0===r?void 0:r.toLowerCase())===g)}),[o,f,w,h,g]);return o?l.default.createElement(y,{error:E},l.default.createElement(p.AutoRow,{gap:"6px"},l.default.createElement(m.AutoColumn,{gap:"24px"},l.default.createElement(s.default,{currency:o,size:"16px"}),l.default.createElement("div",null," ")),l.default.createElement(m.AutoColumn,{gap:"10px",justify:"flex-start"},l.default.createElement(c.TYPE.Main,null,o&&o.name&&o.symbol&&o.name!==o.symbol?`${o.name} (${o.symbol})`:o.name||o.symbol," "),f&&l.default.createElement(c.ExternalLink,{style:{fontWeight:600},href:(0,d.getBscscanLink)(f,o.address,"token")},l.default.createElement(c.TYPE.Blue,{title:o.address},(0,d.shortenAddress)(o.address)," (View on BscScan)"))))):null}},1582:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(e){let{steps:t}=e;return a.default.createElement(c,{justify:"center"},a.default.createElement(d,null,t.map((e,r)=>a.default.createElement(f,{key:r},a.default.createElement(s,{confirmed:e,disabled:!t[r-1]&&0!==r},e?"\u2713":r+1),a.default.createElement(p,{prevConfirmed:e}))),a.default.createElement(s,{disabled:!t[t.length-1]},t.length+1)))};var a=n(r(0)),l=n(r(14)),o=r(28),i=r(47),u=r(75);const c=(0,l.default)(i.AutoColumn)`
  margin-top: 1.25rem;
`,d=(0,l.default)(o.RowBetween)`
  width: 50%;
`,s=l.default.div`
  min-width: 20px;
  min-height: 20px;
  background-color: ${e=>{let{theme:t,confirmed:r,disabled:n}=e;return n?t.colors.bg4:r?t.colors.green1:t.colors.primary1}};
  border-radius: 50%;
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
  font-size: 12px;
`,f=l.default.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
`,p=l.default.div`
  width: 100%;
  height: 2px;
  background-color: ;
  background: linear-gradient(
    90deg,
    ${e=>{let{theme:t,prevConfirmed:r}=e;return(0,u.transparentize)(.5,r?t.colors.green1:t.colors.primary1)}} 0%,
    ${e=>{let{theme:t,prevConfirmed:r}=e;return r?t.colors.primary1:t.colors.bg4}} 80%
  );
  opacity: 0.6;
`},1583:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.SwapCallbackState=void 0,t.useSwapCallback=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.INITIAL_ALLOWED_SLIPPAGE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.DEFAULT_DEADLINE_FROM_NOW,n=arguments.length>3?arguments[3]:void 0;const{account:a,chainId:m,library:h}=(0,d.useActiveWeb3React)(),g=p(e,t,r,n),w=(0,i.useTransactionAdder)(),{address:y}=(0,s.default)(n),E=null===n?a:y;return(0,l.useMemo)(()=>e&&h&&a&&m?E?{state:f.VALID,callback:async function(){const t=await Promise.all(g.map(e=>{const{parameters:{methodName:t,args:r,value:n},contract:a}=e,l=!n||(0,c.default)(n)?{}:{value:n};return a.estimateGas[t](...r,l).then(t=>({call:e,gasEstimate:t})).catch(n=>(console.debug("Gas estimate failed, trying eth_call to extract error",e),a.callStatic[t](...r,l).then(t=>(console.debug("Unexpected successful call after failed estimate gas",e,n,t),{call:e,error:new Error("Unexpected issue with estimating the gas. Please try again.")})).catch(t=>{let r;switch(console.debug("Call threw error",e,t),t.reason){case"CheeseSwapRouter: INSUFFICIENT_OUTPUT_AMOUNT":case"CheeseSwapRouter: EXCESSIVE_INPUT_AMOUNT":r="This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";break;default:r=`The transaction cannot succeed due to error: ${t.reason}. This is probably an issue with one of the tokens you are swapping.`}return{call:e,error:new Error(r)}})))})),r=t.find((e,t,r)=>"gasEstimate"in e&&(t===r.length-1||"gasEstimate"in r[t+1]));if(!r){const e=t.filter(e=>"error"in e);if(e.length>0)throw e[e.length-1].error;throw new Error("Unexpected error. Please contact support: none of the calls threw an error")}const{call:{contract:l,parameters:{methodName:o,args:i,value:d}},gasEstimate:s}=r;return l[o](...i,{gasLimit:(0,u.calculateGasMargin)(s),...d&&!(0,c.default)(d)?{value:d,from:a}:{from:a}}).then(t=>{const r=e.inputAmount.currency.symbol,l=e.outputAmount.currency.symbol,o=`Swap ${e.inputAmount.toSignificant(3)} ${r} for ${e.outputAmount.toSignificant(3)} ${l}`,i=E===a?o:`${o} to ${n&&(0,u.isAddress)(n)?(0,u.shortenAddress)(n):n}`;return w(t,{summary:i}),t.hash}).catch(e=>{throw 4001===(null===e||void 0===e?void 0:e.code)?new Error("Transaction rejected."):(console.error("Swap failed",e,o,i,d),new Error("Swap failed: "+e.message))})},error:null}:null!==n?{state:f.INVALID,callback:null,error:"Invalid recipient"}:{state:f.LOADING,callback:null,error:null}:{state:f.INVALID,callback:null,error:"Missing dependencies"},[e,h,a,m,E,n,g,w])};var a=r(24),l=r(0),o=r(58),i=r(150),u=r(38),c=n(r(194)),d=r(22),s=n(r(385));let f;function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.INITIAL_ALLOWED_SLIPPAGE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.DEFAULT_DEADLINE_FROM_NOW,n=arguments.length>3?arguments[3]:void 0;const{account:i,chainId:c,library:f}=(0,d.useActiveWeb3React)(),{address:p}=(0,s.default)(n),m=null===n?i:p;return(0,l.useMemo)(()=>{if(!e||!m||!f||!i||!c)return[];const n=(0,u.getRouterContract)(c,f,i);if(!n)return[];const l=[];return l.push(a.Router.swapCallParameters(e,{feeOnTransfer:!1,allowedSlippage:new a.Percent(a.JSBI.BigInt(t),o.BIPS_BASE),recipient:m,ttl:r})),e.tradeType===a.TradeType.EXACT_INPUT&&l.push(a.Router.swapCallParameters(e,{feeOnTransfer:!0,allowedSlippage:new a.Percent(a.JSBI.BigInt(t),o.BIPS_BASE),recipient:m,ttl:r})),l.map(e=>({parameters:e,contract:n}))},[i,t,c,r,f,m,e])}t.SwapCallbackState=f,function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.VALID=2]="VALID"}(f||(t.SwapCallbackState=f={}))},1584:function(e,t,r){"use strict";t.__esModule=!0,t.WrapType=void 0,t.default=function(e,t,r){const{chainId:f,account:p}=(0,u.useActiveWeb3React)(),m=(0,c.useWETHContract)(),h=(0,i.useCurrencyBalance)(null!==p&&void 0!==p?p:void 0,e),g=(0,a.useMemo)(()=>(0,l.tryParseAmount)(r,e),[e,r]),w=(0,o.useTransactionAdder)();return(0,a.useMemo)(()=>{if(!m||!f||!e||!t)return s;const r=g&&h&&!h.lessThan(g);return e===n.ETHER&&(0,n.currencyEquals)(n.WETH[f],t)?{wrapType:d.WRAP,execute:r&&g?async()=>{try{const e=await m.deposit({value:"0x"+g.raw.toString(16)});w(e,{summary:`Wrap ${g.toSignificant(6)} BNB to WBNB`})}catch(e){console.error("Could not deposit",e)}}:void 0,inputError:r?void 0:"Insufficient BNB balance"}:(0,n.currencyEquals)(n.WETH[f],e)&&t===n.ETHER?{wrapType:d.UNWRAP,execute:r&&g?async()=>{try{const e=await m.withdraw("0x"+g.raw.toString(16));w(e,{summary:`Unwrap ${g.toSignificant(6)} WBNB to BNB`})}catch(e){console.error("Could not withdraw",e)}}:void 0,inputError:r?void 0:"Insufficient WBNB balance"}:s},[m,f,e,t,g,h,w])};var n=r(24),a=r(0),l=r(380),o=r(150),i=r(105),u=r(22),c=r(73);let d;t.WrapType=d,function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.WRAP=1]="WRAP",e[e.UNWRAP=2]="UNWRAP"}(d||(t.WrapType=d={}));const s={wrapType:d.NOT_APPLICABLE}},831:function(e,t,r){"use strict";var n=r(7);t.__esModule=!0,t.default=function(){var e,t,r,n,L,$,q;const X=(0,U.useDefaultsFromURLSearch)(),[J,Z]=[(0,A.useCurrency)(null===X||void 0===X?void 0:X.inputCurrencyId),(0,A.useCurrency)(null===X||void 0===X?void 0:X.outputCurrencyId)],[K,Q]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(!1),re=(0,l.useRef)(null),[ne,ae]=(0,l.useState)(null),le=(0,l.useMemo)(()=>{var e,t;return null!==(e=null===(t=[J,Z])||void 0===t?void 0:t.filter(e=>e instanceof a.Token))&&void 0!==e?e:[]},[J,Z]),oe=(0,l.useCallback)(()=>{Q(!0)},[]),{account:ie}=(0,C.useActiveWeb3React)(),ue=(0,l.useContext)(c.ThemeContext),ce=(0,M.useWalletModalToggle)(),[de]=(0,W.useExpertModeManager)(),[se]=(0,W.useUserDeadline)(),[fe]=(0,W.useUserSlippageTolerance)(),{independentField:pe,typedValue:me,recipient:he}=(0,U.useSwapState)(),{v2Trade:ge,currencyBalances:we,parsedAmount:ye,currencies:Ee,inputError:ve}=(0,U.useDerivedSwapInfo)(),{wrapType:be,execute:Te,inputError:xe}=(0,I.default)(Ee[_.Field.INPUT],Ee[_.Field.OUTPUT],me),Pe=be!==I.WrapType.NOT_APPLICABLE,{address:Ce}=(0,k.default)(he),Ae=Pe?void 0:ge,Se=Pe?{[_.Field.INPUT]:ye,[_.Field.OUTPUT]:ye}:{[_.Field.INPUT]:pe===_.Field.INPUT?ye:null===Ae||void 0===Ae?void 0:Ae.inputAmount,[_.Field.OUTPUT]:pe===_.Field.OUTPUT?ye:null===Ae||void 0===Ae?void 0:Ae.outputAmount},{onSwitchTokens:ke,onCurrencySelection:Oe,onUserInput:Ie,onChangeRecipient:Me}=(0,U.useSwapActionHandlers)(),_e=!ve,Ue=pe===_.Field.INPUT?_.Field.OUTPUT:_.Field.INPUT;(0,l.useEffect)(()=>{const e=re.current;if(!e)return;const t=()=>ae(e.offsetHeight);if(t(),"undefined"!==typeof window){const r=window.ResizeObserver;if(r){const n=new r(()=>t());return n.observe(e),()=>n.disconnect()}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}},[ee]);const We=ee&&ne?ne:void 0,Be=(0,l.useCallback)(e=>{Ie(_.Field.INPUT,e)},[Ie]),Fe=(0,l.useCallback)(e=>{Ie(_.Field.OUTPUT,e)},[Ie]),[{showConfirm:Ne,tradeToConfirm:Re,swapErrorMessage:je,attemptingTxn:De,txHash:Le},$e]=(0,l.useState)({showConfirm:!1,tradeToConfirm:void 0,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),ze={[pe]:me,[Ue]:Pe?null!==(e=null===(t=Se[pe])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"":null!==(r=null===(n=Se[Ue])||void 0===n?void 0:n.toSignificant(6))&&void 0!==r?r:""},He=null===Ae||void 0===Ae?void 0:Ae.route,Ye=Boolean(Ee[_.Field.INPUT]&&Ee[_.Field.OUTPUT]&&(null===(L=Se[pe])||void 0===L?void 0:L.greaterThan(a.JSBI.BigInt(0)))),Ve=!He,[Ge,qe]=(0,S.useApproveCallbackFromTrade)(Ae,fe),[Xe,Je]=(0,l.useState)(!1);(0,l.useEffect)(()=>{Ge===S.ApprovalState.PENDING&&Je(!0)},[Ge,Xe]);const Ze=(0,F.maxAmountSpend)(we[_.Field.INPUT]),Ke=Boolean(Ze&&(null===($=Se[_.Field.INPUT])||void 0===$?void 0:$.equalTo(Ze))),{callback:Qe,error:et}=(0,O.useSwapCallback)(Ae,fe,se,he),{priceImpactWithoutFee:tt}=(0,N.computeTradePriceBreakdown)(Ae),rt=(0,l.useCallback)(()=>{tt&&!(0,v.default)(tt)||Qe&&($e({attemptingTxn:!0,tradeToConfirm:Re,showConfirm:Ne,swapErrorMessage:void 0,txHash:void 0}),Qe().then(e=>{var t,r,n,a;$e({attemptingTxn:!1,tradeToConfirm:Re,showConfirm:Ne,swapErrorMessage:void 0,txHash:e}),i.default.event({category:"Swap",action:null===he?"Swap w/o Send":(null!==Ce&&void 0!==Ce?Ce:he)===ie?"Swap w/o Send + recipient":"Swap w/ Send",label:[null===Ae||void 0===Ae||null===(t=Ae.inputAmount)||void 0===t||null===(r=t.currency)||void 0===r?void 0:r.symbol,null===Ae||void 0===Ae||null===(n=Ae.outputAmount)||void 0===n||null===(a=n.currency)||void 0===a?void 0:a.symbol,"V2"].join("/")})}).catch(e=>{$e({attemptingTxn:!1,tradeToConfirm:Re,showConfirm:Ne,swapErrorMessage:e.message,txHash:void 0})}))},[Re,ie,tt,he,Ce,Ne,Qe,Ae]),nt=(0,N.warningSeverity)(tt),at=!ve&&(Ge===S.ApprovalState.NOT_APPROVED||Ge===S.ApprovalState.PENDING||Xe&&Ge===S.ApprovalState.APPROVED)&&!(nt>3&&!de),lt=(0,l.useCallback)(()=>{$e({showConfirm:!1,tradeToConfirm:Re,attemptingTxn:De,swapErrorMessage:je,txHash:Le}),Le&&Ie(_.Field.INPUT,"")},[De,Ie,je,Re,Le]),ot=(0,l.useCallback)(()=>{$e({tradeToConfirm:Ae,swapErrorMessage:je,txHash:Le,attemptingTxn:De,showConfirm:Ne})},[De,Ne,je,Ae,Le]),it=(0,l.useCallback)(e=>{Je(!1),Oe(_.Field.INPUT,e);const t=[P.USDT,P.USDC,P.DAI,P.CHS,P.PIZZA];e instanceof a.Token&&t.some(t=>t.address.toLowerCase()===e.address.toLowerCase())&&!Ee[_.Field.OUTPUT]&&Oe(_.Field.OUTPUT,a.ETHER)},[Oe,Ee]),ut=(0,l.useCallback)(()=>{Ze&&Ie(_.Field.INPUT,Ze.toExact())},[Ze,Ie]),ct=(0,l.useCallback)(e=>{Oe(_.Field.OUTPUT,e);const t=[P.USDT,P.USDC,P.DAI,P.CHS,P.PIZZA];e instanceof a.Token&&t.some(t=>t.address.toLowerCase()===e.address.toLowerCase())&&!Ee[_.Field.INPUT]&&Oe(_.Field.INPUT,a.ETHER)},[Oe,Ee]);return l.default.createElement(l.default.Fragment,null,l.default.createElement(T.default,{isOpen:le.length>0&&!K,tokens:le,onConfirm:oe}),l.default.createElement(z,{showChart:ee},ee&&l.default.createElement(Y,{isVisible:ee,targetHeight:We},l.default.createElement(d.default,{symbol:"BINANCE:BNBUSDT",height:We})),l.default.createElement(H,{ref:re},l.default.createElement(R.default,null,l.default.createElement(G,null,l.default.createElement(w.SwapPoolTabs,{active:"swap"}),l.default.createElement(V,{active:ee,onClick:()=>te(!ee),title:ee?"Hide Chart":"Show Chart"},l.default.createElement(o.TrendingUp,null),l.default.createElement("span",null,ee?"Hide Chart":"Chart"))),l.default.createElement(b.Wrapper,{id:"swap-page"},l.default.createElement(h.default,{isOpen:Ne,trade:Ae,originalTrade:Re,onAcceptChanges:ot,attemptingTxn:De,txHash:Le,recipient:he,allowedSlippage:fe,onConfirm:rt,swapErrorMessage:je,onDismiss:lt}),l.default.createElement(m.AutoColumn,{gap:"md"},l.default.createElement(g.default,{label:pe===_.Field.OUTPUT&&!Pe&&Ae?"Sell (estimated)":(0,D.TranslateString)(76,"Sell"),value:ze[_.Field.INPUT],showMaxButton:!Ke,currency:Ee[_.Field.INPUT],onUserInput:Be,onMax:ut,onCurrencySelect:it,otherCurrency:Ee[_.Field.OUTPUT],id:"swap-currency-input"}),l.default.createElement(m.AutoColumn,{justify:"space-between"},l.default.createElement(y.AutoRow,{justify:de?"space-between":"center",style:{padding:"0 1rem"}},l.default.createElement(b.ArrowWrapper,{clickable:!0},l.default.createElement(o.ArrowDown,{size:"16",onClick:()=>{Je(!1),ke()},color:Ee[_.Field.INPUT]&&Ee[_.Field.OUTPUT]?ue.colors.primary1:ue.colors.text2})),null===he&&!Pe&&de?l.default.createElement(B.LinkStyledButton,{id:"add-recipient-button",onClick:()=>Me("")},"+ Add a send (optional)"):null)),l.default.createElement(g.default,{value:ze[_.Field.OUTPUT],onUserInput:Fe,label:pe===_.Field.INPUT&&!Pe&&Ae?"Buy (estimated)":(0,D.TranslateString)(80,"Buy"),showMaxButton:!1,currency:Ee[_.Field.OUTPUT],onCurrencySelect:ct,otherCurrency:Ee[_.Field.INPUT],id:"swap-currency-output"}),null===he||Pe?null:l.default.createElement(l.default.Fragment,null,l.default.createElement(y.AutoRow,{justify:"space-between",style:{padding:"0 1.5rem"}},l.default.createElement(b.ArrowWrapper,{clickable:!1},l.default.createElement(o.ArrowDown,{size:"16",color:"#7C8CFF"})),l.default.createElement(B.LinkStyledButton,{id:"remove-recipient-button",onClick:()=>Me(null)},"- Remove send")),l.default.createElement(s.default,{id:"recipient",value:he,onChange:Me}))),l.default.createElement(b.BottomGrouping,null,ie?Pe?l.default.createElement(f.ButtonPrimary,{disabled:Boolean(xe),onClick:Te},null!==xe&&void 0!==xe?xe:be===I.WrapType.WRAP?"Wrap":be===I.WrapType.UNWRAP?"Unwrap":null):Ve&&Ye?l.default.createElement(p.GreyCard,{style:{textAlign:"center"}},l.default.createElement(B.TYPE.Main,{mb:"4px"},"Insufficient liquidity for this trade.")):at?l.default.createElement(y.RowBetween,null,l.default.createElement(f.ButtonConfirmed,{onClick:qe,disabled:Ge!==S.ApprovalState.NOT_APPROVED||Xe,width:"48%",altDisabledStyle:Ge===S.ApprovalState.PENDING,confirmed:Ge===S.ApprovalState.APPROVED},Ge===S.ApprovalState.PENDING?l.default.createElement(y.AutoRow,{gap:"6px",justify:"center"},"Approving ",l.default.createElement(j.default,{stroke:"white"})):Xe&&Ge===S.ApprovalState.APPROVED?"Approved":"Approve "+(null===(q=Ee[_.Field.INPUT])||void 0===q?void 0:q.symbol)),l.default.createElement(f.ButtonError,{onClick:()=>{de?rt():$e({tradeToConfirm:Ae,attemptingTxn:!1,swapErrorMessage:void 0,showConfirm:!0,txHash:void 0})},width:"48%",id:"swap-button",disabled:!_e||Ge!==S.ApprovalState.APPROVED||nt>3&&!de,error:_e&&nt>2},l.default.createElement(u.Text,{fontSize:16,fontWeight:700},nt>3&&!de?"Price Impact High":"Swap"+(nt>2?" Anyway":"")))):l.default.createElement(f.ButtonError,{onClick:()=>{de?rt():$e({tradeToConfirm:Ae,attemptingTxn:!1,swapErrorMessage:void 0,showConfirm:!0,txHash:void 0})},id:"swap-button",disabled:!_e||nt>3&&!de||!!et,error:_e&&nt>2&&!et},l.default.createElement(u.Text,{fontSize:20,fontWeight:700},ve||(nt>3&&!de?"Price Impact Too High":"Swap"+(nt>2?" Anyway":"")))):l.default.createElement(f.ButtonLight,{onClick:ce},l.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"}},l.default.createElement("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),l.default.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),l.default.createElement("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})),"Connect Wallet"),at&&l.default.createElement(x.default,{steps:[Ge===S.ApprovalState.APPROVED]}),de&&je?l.default.createElement(b.SwapCallbackError,{error:je}):null))),l.default.createElement(E.default,{trade:Ae}))))};var a=r(24),l=$(r(0)),o=r(35),i=n(r(74)),u=r(40),c=$(r(14)),d=n(r(1572)),s=n(r(1573)),f=r(72),p=r(192),m=r(47),h=n(r(1574)),g=n(r(383)),w=r(377),y=r(28),E=n(r(1577)),v=n(r(1580)),b=r(376),T=n(r(1581)),x=n(r(1582)),P=r(58),C=r(22),A=r(113),S=r(384),k=n(r(392)),O=r(1583),I=$(r(1584)),M=r(68),_=r(151),U=r(380),W=r(90),B=r(34),F=r(393),N=r(256),R=n(r(378)),j=n(r(155)),D=r(152);function L(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(L=function(e){return e?r:t})(e)}function $(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=L(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}const z=c.default.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.85rem;
  width: 100%;
  max-width: ${e=>{let{showChart:t}=e;return t?"1120px":"480px"}};
  margin: 0 auto;
  justify-content: ${e=>{let{showChart:t}=e;return t?"flex-start":"center"}};
  transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    flex-direction: column;
    max-width: 100%;
  `}}
`,H=c.default.div`
  width: 100%;
  max-width: 480px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    max-width: 100%;
  `}}
`,Y=c.default.div`
  flex: 1;
  min-width: 0;
  display: flex;
  height: ${e=>{let{targetHeight:t}=e;return t?Math.round(.85*Number(t))+"px":"85%"}};
  min-height: ${e=>{let{targetHeight:t}=e;return t?Math.round(.85*Number(t))+"px":"357px"}};
  max-height: ${e=>{let{targetHeight:t}=e;return t?Math.round(.85*Number(t))+"px":"none"}};
  opacity: ${e=>{let{isVisible:t}=e;return t?1:0}};
  transform: translateX(${e=>{let{isVisible:t}=e;return t?"0":"-17px"}});
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    height: auto;
    min-height: 357px;
    max-height: none;
  `}}
`,V=c.default.button`
  background: ${e=>{let{theme:t,active:r}=e;return r?t.colors.bg3:"transparent"}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  color: ${e=>{let{theme:t,active:r}=e;return r?t.colors.primary1:t.colors.text1}};
  cursor: pointer;
  padding: 0.425rem 0.64rem;
  display: flex;
  align-items: center;
  gap: 0.425rem;
  border-radius: 10px;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 12px;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
  
  svg {
    width: 15px;
    height: 15px;
  }
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 0.425rem;
    span {
      display: none;
    }
  `}}
`,G=c.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  gap: 0.85rem;
`}}]);