(this["webpackJsonp@cheeseswapv2/interface-v2"]=this["webpackJsonp@cheeseswapv2/interface-v2"]||[]).push([[2],Array(22).concat([function(e,t,n){"use strict";t.__esModule=!0,t.useActiveWeb3React=function(){const e=(0,r.useWeb3)(),t=e.provider||(0,o.getNetworkLibrary)(),n=null!==e.chainId?e.chainId:o.CHAIN_ID;return{library:t,provider:t,account:e.account,chainId:n,active:e.isConnected,connector:null,activate:e.connect,deactivate:e.disconnect,error:e.error?new Error(e.error):void 0}},t.useEagerConnect=function(){const{isConnected:e}=(0,r.useWeb3)(),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{const e=setTimeout(()=>{n(!0)},600);return()=>clearTimeout(e)},[]),(0,a.useEffect)(()=>{e&&n(!0)},[e]),t},t.useInactiveListener=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,a.useEffect)(()=>{},[e])};var a=n(0),r=n(134);t.useWeb3=r.useWeb3;var o=n(138)},,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=t.RowFlat=t.RowFixed=t.RowBetween=t.AutoRow=void 0;var r=a(n(14)),o=n(223);const i=(0,r.default)(o.Box)`
  width: 100%;
  display: flex;
  padding: 0.5;
  align-items: ${e=>{let{align:t}=e;return t||"center"}};
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`,l=(0,r.default)(i)`
  justify-content: space-between;
`;t.RowBetween=l;const s=r.default.div`
  display: flex;
  align-items: flex-end;
`;t.RowFlat=s;const c=(0,r.default)(i)`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:t}=e;return t&&"-"+t}};
  justify-content: ${e=>{let{justify:t}=e;return t&&t}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`;t.AutoRow=c;const d=(0,r.default)(i)`
  width: fit-content;
  margin: ${e=>{let{gap:t}=e;return t&&"-"+t}};
`;t.RowFixed=d;var u=i;t.default=u},,,,,,function(e,t,n){"use strict";t.__esModule=!0;var a=n(607);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var r=n(608);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var o=n(609);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}))},,,,function(e,t,n){"use strict";t.__esModule=!0,t.basisPointsToPercent=function(e){return new i.Percent(i.JSBI.BigInt(e),i.JSBI.BigInt(1e4))},t.calculateGasMargin=function(e){return e.mul(a.ethers.BigNumber.from(1e4).add(a.ethers.BigNumber.from(1e3))).div(a.ethers.BigNumber.from(1e4))},t.calculateSlippageAmount=function(e,t){if(t<0||t>1e4)throw Error("Unexpected slippage value: "+t);return[i.JSBI.divide(i.JSBI.multiply(e.raw,i.JSBI.BigInt(1e4-t)),i.JSBI.BigInt(1e4)),i.JSBI.divide(i.JSBI.multiply(e.raw,i.JSBI.BigInt(1e4+t)),i.JSBI.BigInt(1e4))]},t.escapeRegExp=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},t.getBscscanLink=function(e,t,n){const a=`https://${s[e]||s[i.ChainId.MAINNET]}bscscan.com`;switch(n){case"transaction":return`${a}/tx/${t}`;case"token":return`${a}/token/${t}`;case"address":default:return`${a}/address/${t}`}},t.getContract=u,t.getProviderOrSigner=d,t.getRouterContract=function(e,t,n){return u(o.ROUTER_ADDRESS,r.abi,t,n)},t.getSigner=c,t.isAddress=l,t.isTokenOnList=function(e,t){var n;return t===i.ETHER||Boolean(t instanceof i.Token&&(null===(n=e[t.chainId])||void 0===n?void 0:n[t.address]))},t.shortenAddress=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const n=l(e);if(!n)throw Error(`Invalid 'address' parameter '${e}'.`);return`${n.substring(0,t+2)}...${n.substring(42-t)}`};var a=n(55),r=n(595),o=n(58),i=n(24);function l(e){try{return a.ethers.utils.getAddress(e)}catch{return!1}}const s={56:"",97:"testnet."};function c(e,t){return e.getSigner(t).connectUnchecked()}function d(e,t){return t?c(e,t):e}function u(e,t,n,r){if(!l(e)||e===a.ethers.constants.AddressZero)throw Error(`Invalid 'address' parameter '${e}'.`);return new a.Contract(e,t,d(n,r))}},,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=t.ColumnCenter=t.AutoColumn=void 0;var r=a(n(14));const o=r.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,i=(0,r.default)(o)`
  width: 100%;
  align-items: center;
`;t.ColumnCenter=i;const l=r.default.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${e=>{let{gap:t}=e;return("sm"===t?"8px":"md"===t&&"12px")||"lg"===t&&"24px"||t}};
  justify-items: ${e=>{let{justify:t}=e;return t&&t}};
`;t.AutoColumn=l;var s=o;t.default=s},,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.ZERO_ADDRESS=t.WBNB=t.USDT=t.USDC=t.SUPPORTED_WALLETS=t.SUPPORTED_CHAIN_ID=t.SUGGESTED_BASES=t.ROUTER_ADDRESS=t.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN=t.PIZZA=t.PINNED_PAIRS=t.ONE_BIPS=t.NetworkContextName=t.MIN_ETH=t.INITIAL_ALLOWED_SLIPPAGE=t.FACTORY_ADDRESS=t.DEFAULT_DEADLINE_FROM_NOW=t.DAI=t.CUSTOM_BASES=t.CHS=t.CHAIN_ID_HEX=t.CHAIN_ID=t.BLOCKED_PRICE_IMPACT_NON_EXPERT=t.BIPS_BASE=t.BASES_TO_TRACK_LIQUIDITY_FOR=t.BASES_TO_CHECK_TRADES_AGAINST=t.ALLOWED_PRICE_IMPACT_MEDIUM=t.ALLOWED_PRICE_IMPACT_LOW=t.ALLOWED_PRICE_IMPACT_HIGH=void 0;var a=n(24),r=n(60);t.ROUTER_ADDRESS="0x3047799262d8D2EF41eD2a222205968bC9B0d895";t.FACTORY_ADDRESS="0xdd53b4765211489b4c74e26abf61b321ab0c9b53";t.ZERO_ADDRESS="0x0000000000000000000000000000000000000000";const o=a.ChainId.MAINNET;t.SUPPORTED_CHAIN_ID=o;t.CHAIN_ID=56;t.CHAIN_ID_HEX="0x38";const i=new a.Token(a.ChainId.MAINNET,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB");t.WBNB=i;const l=new a.Token(a.ChainId.MAINNET,"0xaDD8A06fd58761A5047426e160B2B88AD3B9D464",18,"CHS","Cheesemaker.farm");t.CHS=l;const s=new a.Token(a.ChainId.MAINNET,"0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB",18,"PIZZA","PizzaSwap");t.PIZZA=s;const c=new a.Token(a.ChainId.MAINNET,"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",18,"DAI","Dai Token");t.DAI=c;const d=new a.Token(a.ChainId.MAINNET,"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",18,"USDC","Binance-Peg USD Coin");t.USDC=d;const u=new a.Token(a.ChainId.MAINNET,"0x55d398326f99059fF775485246999027B3197955",18,"USDT","Tether USD");t.USDT=u;const p={[a.ChainId.MAINNET]:[a.WETH[a.ChainId.MAINNET]],[a.ChainId.BSCTESTNET]:[]},m={...p,[a.ChainId.MAINNET]:[...p[a.ChainId.MAINNET],c,d,u]};t.BASES_TO_CHECK_TRADES_AGAINST=m;const f={[a.ChainId.MAINNET]:{[u.address]:[c,a.WETH[a.ChainId.MAINNET]]}};t.CUSTOM_BASES=f;const A={...p,[a.ChainId.MAINNET]:[u,d,c,l,s]};t.SUGGESTED_BASES=A;const h={...p,[a.ChainId.MAINNET]:[...p[a.ChainId.MAINNET],c,d,u,l]};t.BASES_TO_TRACK_LIQUIDITY_FOR=h;const b={[a.ChainId.MAINNET]:[[new a.Token(a.ChainId.MAINNET,"0xaDD8A06fd58761A5047426e160B2B88AD3B9D464",18,"CHS","Cheesemaker.farm"),new a.Token(a.ChainId.MAINNET,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB")],[l,i]]};t.PINNED_PAIRS=b;const g={METAMASK:{name:"MetaMask",iconName:"metamask.png",description:"Easy-to-use browser extension.",href:null,color:"#E8831D",walletType:"METAMASK",checkInstalled:()=>(0,r.isWalletInstalled)("METAMASK")},TRUST_WALLET:{name:"Trust Wallet",iconName:"trustWallet.png",description:"Best Crypto Wallet for Web3, NFTs and DeFi.",href:null,color:"#0828dfff",walletType:"TRUST_WALLET",checkInstalled:()=>(0,r.isWalletInstalled)("TRUST_WALLET")},OKX_WALLET:{name:"OKX Wallet",iconName:"okxWallet.png",description:"OKX Wallet is a secure crypto wallet.",href:null,color:"#080a16ff",walletType:"OKX_WALLET",checkInstalled:()=>(0,r.isWalletInstalled)("OKX_WALLET")},FANTOM_WALLET:{name:"Fantom Wallet",iconName:"fantomWallet.png",description:"Fantom browser extension wallet.",href:null,color:"#1969FF",walletType:"FANTOM_WALLET",checkInstalled:()=>(0,r.isWalletInstalled)("FANTOM_WALLET")},WALLET_CONNECT:{name:"WalletConnect",iconName:"walletConnectIcon.svg",description:"Connect to Trust Wallet, Rainbow Wallet and more...",href:null,color:"#4196FC",walletType:"WALLETCONNECT",checkInstalled:()=>!0},COINBASE_WALLET:{name:"Coinbase Wallet",iconName:"coinbaseWalletIcon.svg",description:"Use Coinbase Wallet app on mobile device",href:null,color:"#315CF5",walletType:"COINBASE",checkInstalled:()=>!0}};t.SUPPORTED_WALLETS=g;t.NetworkContextName="NETWORK";t.INITIAL_ALLOWED_SLIPPAGE=50;t.DEFAULT_DEADLINE_FROM_NOW=1200;const y=new a.Percent(a.JSBI.BigInt(1),a.JSBI.BigInt(1e4));t.ONE_BIPS=y;const E=a.JSBI.BigInt(1e4);t.BIPS_BASE=E;const v=new a.Percent(a.JSBI.BigInt(100),E);t.ALLOWED_PRICE_IMPACT_LOW=v;const w=new a.Percent(a.JSBI.BigInt(300),E);t.ALLOWED_PRICE_IMPACT_MEDIUM=w;const C=new a.Percent(a.JSBI.BigInt(500),E);t.ALLOWED_PRICE_IMPACT_HIGH=C;const x=new a.Percent(a.JSBI.BigInt(1e3),E);t.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN=x;const B=new a.Percent(a.JSBI.BigInt(1500),E);t.BLOCKED_PRICE_IMPACT_NON_EXPERT=B;const k=a.JSBI.exponentiate(a.JSBI.BigInt(10),a.JSBI.BigInt(16));t.MIN_ETH=k},,function(e,t,n){"use strict";t.__esModule=!0,t.SUPPORTED_WALLETS=void 0,t.detectInstalledWallets=function(){const e="undefined"!==typeof window?window.ethereum:void 0,t="undefined"!==typeof navigator&&/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),n=[];for(const o of Object.keys(a)){var r;let i=!1;switch(o){case"INJECTED":i=!!e;break;case"METAMASK":i=!(null===e||void 0===e||!e.isMetaMask||null!==e&&void 0!==e&&e.isTrust||null!==e&&void 0!==e&&e.isFTM||null!==e&&void 0!==e&&e.isTokenPocket||null!==e&&void 0!==e&&e.isBinance||null!==e&&void 0!==e&&e.isOKXWallet);break;case"BINANCE":i=!!(null!==e&&void 0!==e&&e.isBinance||window.BinanceChain);break;case"TRUST_WALLET":i=!!(null!==e&&void 0!==e&&e.isTrust||null!==e&&void 0!==e&&e.isTrustWallet||window.trustwallet||t&&e&&void 0===e.isMetaMask&&void 0===e.isTrust&&void 0===e.isTokenPocket&&void 0===e.isBinance&&void 0===e.isOKXWallet);break;case"OKX_WALLET":i=!!(window.okxwallet||null!==e&&void 0!==e&&e.isOKXWallet);break;case"FANTOM_WALLET":i=!!(window.ftmwallet||null!==e&&void 0!==e&&e.isFTM);break;case"WALLETCONNECT":case"COINBASE":i=!0}n.push({type:o,name:(null===(r=a[o])||void 0===r?void 0:r.name)||o,installed:i})}return n},t.ensureBSCMainnet=async function(e){const t={chainId:"0x38",chainName:"BNB Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/","https://bsc-dataseed2.binance.org/","https://bsc-dataseed3.binance.org/","https://bsc-dataseed1.bnbchain.org/","https://bsc-dataseed.defibit.io/","https://bsc-dataseed.ninicoin.io"],blockExplorerUrls:["https://bscscan.com"]};let n;e&&e.send?n=await e.send("eth_chainId",[])||(await e.getNetwork()).chainId:e&&e.request&&(n=await e.request({method:"eth_chainId"}));"string"===typeof n&&(n=n.startsWith("0x")?parseInt(n,16):parseInt(n,10));if(56!==n){const n=e.request?e:e.provider&&e.provider.request?e.provider:e;try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]})}catch(a){const e=a.code||a.data&&a.data.originalError&&a.data.originalError.code;if(4902!==e&&-32601!==e&&4200!==e)throw a;await n.request({method:"wallet_addEthereumChain",params:[t]})}}},t.getWalletProvider=function(e){if("undefined"===typeof window)return null;switch(e){case"METAMASK":return window.ethereum&&window.ethereum.isMetaMask?window.ethereum:null;case"TRUST_WALLET":return window.ethereum&&window.ethereum.isTrust?window.ethereum:null;case"OKX_WALLET":return window.okxwallet?window.okxwallet:window.ethereum&&window.ethereum.isOkxWallet?window.ethereum:null;case"FANTOM_WALLET":return window.ftmwallet?window.ftmwallet:window.ethereum&&window.ethereum.isFantom?window.ethereum:null;case"BINANCE":return window.BinanceChain?window.BinanceChain:window.ethereum&&window.ethereum.isBinanceChain?window.ethereum:null;case"INJECTED":return window.ethereum?window.ethereum:null;default:return null}},t.isWalletInstalled=function(e){const t="undefined"!==typeof window?window.ethereum:void 0,n="undefined"!==typeof navigator&&/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);switch(e){case"INJECTED":return!!t;case"METAMASK":return!(null===t||void 0===t||!t.isMetaMask||null!==t&&void 0!==t&&t.isTrust||null!==t&&void 0!==t&&t.isFTM||null!==t&&void 0!==t&&t.isTokenPocket||null!==t&&void 0!==t&&t.isBinance||null!==t&&void 0!==t&&t.isOKXWallet);case"BINANCE":return!!(null!==t&&void 0!==t&&t.isBinance||window.BinanceChain);case"TRUST_WALLET":return!!(null!==t&&void 0!==t&&t.isTrust||null!==t&&void 0!==t&&t.isTrustWallet||window.trustwallet||n&&t&&void 0===t.isMetaMask&&void 0===t.isTrust&&void 0===t.isTokenPocket&&void 0===t.isBinance&&void 0===t.isOKXWallet);case"OKX_WALLET":return!!(window.okxwallet||null!==t&&void 0!==t&&t.isOKXWallet);case"FANTOM_WALLET":return!!(window.ftmwallet||null!==t&&void 0!==t&&t.isFTM);case"WALLETCONNECT":case"COINBASE":return!0;default:return!1}},t.setupWalletListeners=function(e,t,n,a){if(!e||"function"!==typeof e.on)return()=>{};t&&e.on("accountsChanged",t);n&&e.on("chainChanged",n);a&&e.on("disconnect",a);return()=>{t&&e.removeListener("accountsChanged",t),n&&e.removeListener("chainChanged",n),a&&e.removeListener("disconnect",a)}};const a={INJECTED:{type:"INJECTED",name:"Injected",iconName:"injected.png",description:"Any browser-injected wallet",color:"#666",connectorId:"injected",primary:!0,mobile:!0},METAMASK:{type:"METAMASK",name:"MetaMask",iconName:"metamask.png",description:"MetaMask browser extension and mobile app",color:"#f6851b",connectorId:"metamask",primary:!0,mobile:!0},BINANCE:{type:"BINANCE",name:"Binance Wallet",iconName:"binance.svg",description:"Binance Chain Wallet extension",color:"#f3ba2f",connectorId:"binance",mobile:!0},TRUST_WALLET:{type:"TRUST_WALLET",name:"Trust Wallet",iconName:"trustWallet.png",description:"Trust Wallet browser and app",color:"#3375bb",connectorId:"trustwallet",mobile:!0},OKX_WALLET:{type:"OKX_WALLET",name:"OKX Wallet",iconName:"okxWallet.png",description:"OKX Wallet extension and app",color:"#000",connectorId:"okxwallet",mobile:!0},FANTOM_WALLET:{type:"FANTOM_WALLET",name:"Fantom Wallet",iconName:"fantomWallet.png",description:"Fantom Wallet extension",color:"#1969ff",connectorId:"fantomwallet"},WALLETCONNECT:{type:"WALLETCONNECT",name:"WalletConnect",iconName:"walletConnectIcon.svg",description:"WalletConnect QR and mobile",color:"#4196fc",connectorId:"walletconnect",mobile:!0},COINBASE:{type:"COINBASE",name:"Coinbase Wallet",iconName:"coinbaseWalletIcon.svg",description:"Coinbase Wallet app",color:"#1652f0",connectorId:"coinbasewallet",mobile:!0}};t.SUPPORTED_WALLETS=a},,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.useActivePopups=function(){const e=(0,i.useSelector)(e=>e.application.popupList);return(0,a.useMemo)(()=>e.filter(e=>e.show),[e])},t.useAddPopup=function(){const e=(0,i.useDispatch)();return(0,a.useCallback)((t,n)=>{e((0,o.addPopup)({content:t,key:n}))},[e])},t.useBlockNumber=function(){const{chainId:e}=(0,r.useActiveWeb3React)();return(0,i.useSelector)(t=>t.application.blockNumber[null!==e&&void 0!==e?e:-1])},t.useRemovePopup=function(){const e=(0,i.useDispatch)();return(0,a.useCallback)(t=>{e((0,o.removePopup)({key:t}))},[e])},t.useSettingsMenuOpen=function(){return(0,i.useSelector)(e=>e.application.settingsMenuOpen)},t.useToggleSettingsMenu=function(){const e=(0,i.useDispatch)();return(0,a.useCallback)(()=>e((0,o.toggleSettingsMenu)()),[e])},t.useWalletModalOpen=function(){return(0,i.useSelector)(e=>e.application.walletModalOpen)},t.useWalletModalToggle=function(){const e=(0,i.useDispatch)();return(0,a.useCallback)(()=>e((0,o.toggleWalletModal)()),[e])};var a=n(0),r=n(22),o=n(171),i=n(39)},,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.ButtonConfirmed=function(e){let{confirmed:t,altDisabledStyle:n,...a}=e;return t?r.default.createElement(y,a):r.default.createElement(u,Object.assign({},a,{altDisabledStyle:n}))},t.ButtonDropdown=function(e){let{disabled:t=!1,children:n,...a}=e;return r.default.createElement(u,Object.assign({},a,{disabled:t}),r.default.createElement(l.RowBetween,null,r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},n),r.default.createElement(s.ChevronDown,{size:24})))},t.ButtonDropdownLight=function(e){let{disabled:t=!1,children:n,...a}=e;return r.default.createElement(h,Object.assign({},a,{disabled:t}),r.default.createElement(l.RowBetween,null,r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},n),r.default.createElement(s.ChevronDown,{size:24})))},t.ButtonEmpty=void 0,t.ButtonError=function(e){let{error:t,...n}=e;return t?r.default.createElement(E,n):r.default.createElement(u,n)},t.ButtonPrimary=t.ButtonPink=t.ButtonOutlined=t.ButtonLight=t.ButtonGray=void 0,t.ButtonRadio=function(e){let{active:t,...n}=e;return t?r.default.createElement(u,n):r.default.createElement(g,n)},t.ButtonWhite=t.ButtonSecondary=void 0;var r=a(n(0)),o=a(n(14)),i=n(75),l=n(28),s=n(35),c=n(223);const d=(0,o.default)(c.Button)`
  padding: ${e=>{let{padding:t}=e;return t||"14px 20px"}};
  width: ${e=>{let{width:t}=e;return t||"100%"}};
  font-weight: 600;
  text-align: center;
  border-radius: ${e=>{let{borderRadius:t}=e;return t||"12px"}};
  outline: none;
  border: 2px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  letter-spacing: 0.02em;
  
  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  > * {
    user-select: none;
  }
`,u=(0,o.default)(d)`
  background: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  color: #111111;
  box-shadow: none !important;
  
  &:hover:not(:disabled) {
    box-shadow: none !important;
    background: ${e=>{let{theme:t}=e;return(0,i.lighten)(.05,t.colors.primary1)}};
  }
  
  &:focus {
    box-shadow: none !important;
  }
  
  &:active:not(:disabled) {
    box-shadow: none !important;
  }
  
  &:disabled {
    background: ${e=>{let{theme:t,altDisabledStyle:n}=e;return n?`linear-gradient(135deg, ${t.colors.primary1} 0%, ${t.colors.primary2} 100%)`:t.colors.bg3}};
    color: ${e=>{let{theme:t,altDisabledStyle:n}=e;return n?"white":t.colors.text3}};
    box-shadow: none !important;
    border: 2px solid transparent;
    opacity: ${e=>{let{altDisabledStyle:t}=e;return t?"0.5":"0.6"}};
  }
`;t.ButtonPrimary=u;const p=(0,o.default)(d)`
  background: ${e=>{let{theme:t}=e;return t.colors.primary6}};
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  pointer-events: auto;
  user-select: none;
  
  &:hover:not(:disabled) {
    background: ${e=>{let{theme:t}=e;return t.colors.primary5}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary3}};
  }
  
  &:focus {
    box-shadow: none !important;
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
  
  &:active:not(:disabled) {
    background: ${e=>{let{theme:t}=e;return(0,i.darken)(.02,t.colors.primary5)}};
  }
  
  &:disabled {
    opacity: 0.4;
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
    cursor: not-allowed;
  }
`;t.ButtonLight=p;const m=(0,o.default)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  font-size: 14px;
  font-weight: 700;
  &:focus {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&(0,i.darken)(.05,t.colors.bg2)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&(0,i.darken)(.05,t.colors.bg2)}};
  }
  &:active {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&(0,i.darken)(.1,t.colors.bg2)}};
  }
`;t.ButtonGray=m;const f=(0,o.default)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary5}};
  color: ${e=>{let{theme:t}=e;return t.colors.primaryText1}};
  font-size: 14px;
  border-radius: 8px;
  padding: ${e=>{let{padding:t}=e;return t||"10px"}};

  &:focus {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary4}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary4}};
  }
  &:active {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary4}};
  }
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary5}};
    opacity: 50%;
    cursor: auto;
  }
`;t.ButtonSecondary=f;const A=(0,o.default)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  color: white;

  &:focus {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.05,t.colors.primary1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.05,t.colors.primary1)}};
  }
  &:active {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.1,t.colors.primary1)}};
  }
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    opacity: 50%;
    cursor: auto;
  }
`;t.ButtonPink=A;const h=(0,o.default)(d)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  backdrop-filter: blur(10px);

  &:hover:not(:disabled) {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary6}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary2}};
  }
  
  &:focus {
    box-shadow: 0 0 0 3px ${e=>{let{theme:t}=e;return t.colors.primary6}};
  }
  
  &:active:not(:disabled) {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary5}};
  }
  
  &:disabled {
    opacity: 0.4;
    border-color: ${e=>{let{theme:t}=e;return t.colors.bg4}};
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
  }
`;t.ButtonOutlined=h;const b=(0,o.default)(d)`
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.advancedBG}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.advancedBG}};
  }
  &:active {
    background-color: ${e=>{let{theme:t}=e;return t.colors.advancedBG}};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;t.ButtonEmpty=b;const g=(0,o.default)(d)`
  border: 2px solid #edeef2;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${(0,i.darken)(.05,"#edeef2")};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${(0,i.darken)(.1,"#edeef2")};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${(0,i.darken)(.1,"#edeef2")};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;t.ButtonWhite=g;const y=(0,o.default)(d)`
  background-color: ${e=>{let{theme:t}=e;return(0,i.lighten)(.5,t.colors.green1)}};
  color: ${e=>{let{theme:t}=e;return t.colors.green1}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.green1}};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`,E=(0,o.default)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.red1}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.red1}};

  &:focus {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.05,t.colors.red1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.05,t.colors.red1)}};
  }
  &:active {
    box-shadow: none !important;
    background-color: ${e=>{let{theme:t}=e;return(0,i.darken)(.1,t.colors.red1)}};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${e=>{let{theme:t}=e;return t.colors.red1}};
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.red1}};
  }
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.useBytes32TokenContract=function(e,t){return b(e,c.ERC20_BYTES32_ABI,t)},t.useENSRegistrarContract=function(e){const{chainId:t}=(0,h.useActiveWeb3React)();if(t)switch(t){case r.ChainId.MAINNET:case r.ChainId.BSCTESTNET:}return b(void 0,l.default,e)},t.useENSResolverContract=function(e,t){return b(e,s.default,t)},t.useMulticallContract=function(){const{chainId:e}=(0,h.useActiveWeb3React)();return b(e&&f.MULTICALL_NETWORKS[e],f.MULTICALL_ABI,!1)},t.usePairContract=function(e,t){return b(e,o.abi,t)},t.useSocksController=function(){const{chainId:e}=(0,h.useActiveWeb3React)();return b(e===r.ChainId.MAINNET?"0x65770b5283117639760beA3F867b69b3697a91dd":void 0,p.default,!1)},t.useTokenContract=function(e,t){return b(e,d.default,t)},t.useV2MigratorContract=function(){return b(u.MIGRATOR_ADDRESS,u.MIGRATOR_ABI,!0)},t.useWETHContract=function(e){const{chainId:t}=(0,h.useActiveWeb3React)();return b(t?r.WETH[t].address:void 0,m.default,e)};var r=n(24),o=n(180),i=n(0),l=a(n(596)),s=a(n(597)),c=n(307),d=a(n(308)),u=n(598),p=a(n(600)),m=a(n(601)),f=n(602),A=n(38),h=n(22);function b(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const{library:a,account:r}=(0,h.useActiveWeb3React)();return(0,i.useMemo)(()=>{if(!e||!t||!a)return null;try{return(0,A.getContract)(e,t,a,n&&r?r:void 0)}catch(o){return console.error("Failed to get contract",o),null}},[e,t,a,n,r])}},,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.BaseWalletConnector=void 0;var r=a(n(91));t.BaseWalletConnector=class{constructor(e){(0,r.default)(this,"provider",null),(0,r.default)(this,"walletName",void 0),this.walletName=e}getProvider(){return this.provider}getName(){return this.walletName}setupListeners(e,t,n,a){e&&e.on&&(t&&e.on("accountsChanged",t),n&&e.on("chainChanged",n),a&&e.on("disconnect",a))}removeListeners(e){e&&e.removeAllListeners&&(e.removeAllListeners("accountsChanged"),e.removeAllListeners("chainChanged"),e.removeAllListeners("disconnect"))}}},,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.toV2LiquidityToken=function(e){let[t,n]=e;return new r.Token(t.chainId,r.Pair.getAddress(t,n),18,"Cheese-LP","CheeseSwap LPs")},t.useAddUserToken=function(){const e=(0,l.useDispatch)();return(0,i.useCallback)(t=>{e((0,u.addSerializedToken)({serializedToken:p(t)}))},[e])},t.useAudioModeManager=function(){const e=(0,l.useDispatch)(),t=(0,l.useSelector)(e=>e.user.audioPlay),n=(0,i.useCallback)(()=>{e(t?(0,u.muteAudio)():(0,u.unmuteAudio)())},[t,e]);return e((0,u.updateUserDarkMode)({userDarkMode:!1})),[t,n]},t.useDarkModeManager=function(){const e=(0,l.useDispatch)(),t=f(),n=(0,i.useCallback)(()=>{e((0,u.updateMatchesDarkMode)({matchesDarkMode:!t}))},[t,e]);return[t,n]},t.useExpertModeManager=function(){const e=(0,l.useDispatch)(),t=A(),n=(0,i.useCallback)(()=>{e((0,u.updateUserExpertMode)({userExpertMode:!t}))},[t,e]);return[t,n]},t.useIsDarkMode=f,t.useIsExpertMode=A,t.usePairAdder=function(){const e=(0,l.useDispatch)();return(0,i.useCallback)(t=>{e((0,u.addSerializedPair)({serializedPair:h(t)}))},[e])},t.useRemoveUserAddedToken=function(){const e=(0,l.useDispatch)();return(0,i.useCallback)((t,n)=>{e((0,u.removeSerializedToken)({chainId:t,address:n}))},[e])},t.useTrackedTokenPairs=function(){const{chainId:e}=(0,c.useActiveWeb3React)(),t=(0,d.useAllTokens)(),n=(0,i.useMemo)(()=>{var t;return e&&null!==(t=s.PINNED_PAIRS[e])&&void 0!==t?t:[]},[e]),a=(0,i.useMemo)(()=>e?(0,o.default)(Object.keys(t),n=>{var a;const r=t[n];return(null!==(a=s.BASES_TO_TRACK_LIQUIDITY_FOR[e])&&void 0!==a?a:[]).map(e=>e.address===r.address?null:[e,r]).filter(e=>null!==e)}):[],[t,e]),r=(0,l.useSelector)(e=>{let{user:{pairs:t}}=e;return t}),u=(0,i.useMemo)(()=>{if(!e||!r)return[];const t=r[e];return t?Object.keys(t).map(e=>[m(t[e].token0),m(t[e].token1)]):[]},[r,e]),p=(0,i.useMemo)(()=>u.concat(a).concat(n),[a,n,u]);return(0,i.useMemo)(()=>{const e=p.reduce((e,t)=>{let[n,a]=t;const r=n.sortsBefore(a),o=r?`${n.address}:${a.address}`:`${a.address}:${n.address}`;return e[o]||(e[o]=r?[n,a]:[a,n]),e},{});return Object.keys(e).map(t=>e[t])},[p])},t.useUserAddedTokens=function(){const{chainId:e}=(0,c.useActiveWeb3React)(),t=(0,l.useSelector)(e=>{let{user:{tokens:t}}=e;return t});return(0,i.useMemo)(()=>{var n;return e?Object.values(null!==(n=t[e])&&void 0!==n?n:{}).map(m):[]},[t,e])},t.useUserDeadline=function(){const e=(0,l.useDispatch)(),t=(0,l.useSelector)(e=>e.user.userDeadline),n=(0,i.useCallback)(t=>{e((0,u.updateUserDeadline)({userDeadline:t}))},[e]);return[t,n]},t.useUserSlippageTolerance=function(){const e=(0,l.useDispatch)(),t=(0,l.useSelector)(e=>e.user.userSlippageTolerance),n=(0,i.useCallback)(t=>{e((0,u.updateUserSlippageTolerance)({userSlippageTolerance:t}))},[e]);return[t,n]};var r=n(24),o=a(n(310)),i=n(0),l=n(39),s=n(58),c=n(22),d=n(113),u=n(221);function p(e){return{chainId:e.chainId,address:e.address,decimals:e.decimals,symbol:e.symbol,name:e.name}}function m(e){return new r.Token(e.chainId,e.address,e.decimals,e.symbol,e.name)}function f(){const{matchesDarkMode:e}=(0,l.useSelector)(e=>{let{user:{matchesDarkMode:t}}=e;return{matchesDarkMode:t}},l.shallowEqual);return e}function A(){return(0,l.useSelector)(e=>e.user.userExpertMode)}function h(e){return{token0:p(e.token0),token1:p(e.token1)}}},,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.NEVER_RELOAD=void 0,t.useMultipleContractSingleData=function(e,t,n,r,o){const l=(0,a.useMemo)(()=>t.getFunction(n),[t,n]),s=(0,a.useMemo)(()=>l&&c(r)?t.encodeFunctionData(l,r):void 0,[r,t,l]),d=p((0,a.useMemo)(()=>l&&e&&e.length>0&&s?e.map(e=>e&&s?{address:e,callData:s}:void 0):[],[e,s,l]),o),u=(0,i.useBlockNumber)();return(0,a.useMemo)(()=>d.map(e=>A(e,t,l,u)),[l,d,t,u])},t.useSingleCallResult=function(e,t,n,r){const o=(0,a.useMemo)(()=>{var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)},[e,t]),l=p((0,a.useMemo)(()=>e&&o&&c(n)?[{address:e.address,callData:e.interface.encodeFunctionData(o,n)}]:[],[e,o,n]),r)[0],s=(0,i.useBlockNumber)();return(0,a.useMemo)(()=>A(l,null===e||void 0===e?void 0:e.interface,o,s),[l,e,o,s])},t.useSingleContractMultipleData=function(e,t,n,r){const o=(0,a.useMemo)(()=>{var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)},[e,t]),l=p((0,a.useMemo)(()=>e&&o&&n&&n.length>0?n.map(t=>({address:e.address,callData:e.interface.encodeFunctionData(o,t)})):[],[n,e,o]),r),s=(0,i.useBlockNumber)();return(0,a.useMemo)(()=>l.map(t=>A(t,null===e||void 0===e?void 0:e.interface,o,s)),[o,e,l,s])};var a=n(0),r=n(39),o=n(22),i=n(68),l=n(220);function s(e){return-1!==["string","number"].indexOf(typeof e)}function c(e){return void 0===e||Array.isArray(e)&&e.every(e=>s(e)||Array.isArray(e)&&e.every(s))}const d={valid:!1,blockNumber:void 0,data:void 0},u={blocksPerFetch:1/0};function p(e,t){const{chainId:n}=(0,o.useActiveWeb3React)(),i=(0,r.useSelector)(e=>e.multicall.callResults),s=(0,r.useDispatch)(),c=(0,a.useMemo)(()=>{var t,n,a;return JSON.stringify(null!==(t=null===e||void 0===e||null===(n=e.filter(e=>Boolean(e)))||void 0===n||null===(a=n.map(l.toCallKey))||void 0===a?void 0:a.sort())&&void 0!==t?t:[])},[e]);return(0,a.useEffect)(()=>{const e=JSON.parse(c);if(!n||0===e.length)return;const a=e.map(e=>(0,l.parseCallKey)(e));return s((0,l.addMulticallListeners)({chainId:n,calls:a,options:t})),()=>{s((0,l.removeMulticallListeners)({chainId:n,calls:a,options:t}))}},[n,s,t,c]),(0,a.useMemo)(()=>e.map(e=>{var t;if(!n||!e)return d;const a=null===(t=i[n])||void 0===t?void 0:t[(0,l.toCallKey)(e)];let r;return null!==a&&void 0!==a&&a.data&&"0x"!==(null===a||void 0===a?void 0:a.data)&&(r=a.data),{valid:!0,data:r,blockNumber:null===a||void 0===a?void 0:a.blockNumber}}),[i,e,n])}t.NEVER_RELOAD=u;const m={valid:!1,result:void 0,loading:!1,syncing:!1,error:!1},f={valid:!0,result:void 0,loading:!0,syncing:!0,error:!1};function A(e,t,n,a){if(!e)return m;const{valid:r,data:o,blockNumber:i}=e;if(!r)return m;if(r&&!i)return f;if(!t||!n||!a)return f;const l=o&&o.length>2,s=(null!==i&&void 0!==i?i:0)<a;let c=void 0;if(l&&o)try{c=t.decodeFunctionResult(n,o)}catch(d){return console.debug("Result data parsing failed",n,o),{valid:!0,loading:!1,error:!0,syncing:s,result:c}}return{valid:!0,loading:!1,syncing:s,result:c,error:!l}}},,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n;let{currency:a,size:i="24px",style:l}=e;const u=(0,c.default)(a instanceof d.WrappedTokenInfo?a.logoURI:void 0),m=(0,o.useMemo)(()=>u.map(h),[u]),f=(0,o.useMemo)(()=>a===r.ETHER?[]:a instanceof r.Token?a instanceof d.WrappedTokenInfo?[b(a.address),...m]:[b(a.address)]:[],[a,m]);if(a===r.ETHER)return o.default.createElement(g,{src:s.default,size:i,style:l});return null!==a&&void 0!==a&&a.symbol?o.default.createElement(p.default,{size:i,srcs:f,alt:(null!==(t=null===a||void 0===a?void 0:a.symbol)&&void 0!==t?t:"token")+" logo",style:l}):o.default.createElement(y,{size:i,srcs:f,alt:(null!==(n=null===a||void 0===a?void 0:a.symbol)&&void 0!==n?n:"token")+" logo",style:l})},t.getTokenLogoURL=void 0;var r=n(24),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),i=a(n(14)),l=n(86),s=a(n(324)),c=a(n(328)),d=n(119),u=a(n(237)),p=a(n(390));function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}const f="https://raw.githubusercontent.com/trustwallet/assets",A="https://raw.githubusercontent.com/cheeseswapbsc/assets",h=e=>e&&e.startsWith(f)?e.replace(f,A):e,b=e=>`${A}/master/blockchains/smartchain/assets/${(e=>{try{return(0,l.getAddress)(e)}catch(t){return e}})(e)}/logo.png`;t.getTokenLogoURL=b;const g=i.default.img`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`,y=(0,i.default)(u.default)`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.useAllTokenBalances=function(){const{account:e}=(0,s.useActiveWeb3React)(),t=(0,l.useAllTokens)(),n=(0,o.useMemo)(()=>Object.values(null!==t&&void 0!==t?t:{}),[t]),a=f(null!==e&&void 0!==e?e:void 0,n);return null!==a&&void 0!==a?a:{}},t.useCurrencyBalance=function(e,t){return A(e,[t])[0]},t.useCurrencyBalances=A,t.useETHBalances=p,t.useTokenBalance=function(e,t){const n=f(e,[t]);return t?n[t.address]:void 0},t.useTokenBalances=f,t.useTokenBalancesWithLoadingIndicator=m;var r=n(24),o=n(0),i=a(n(307)),l=n(113),s=n(22),c=n(73),d=n(38),u=n(96);function p(e){const t=(0,c.useMulticallContract)(),n=(0,o.useMemo)(()=>e?e.map(d.isAddress).filter(e=>!1!==e).sort():[],[e]),a=(0,u.useSingleContractMultipleData)(t,"getEthBalance",n.map(e=>[e]));return(0,o.useMemo)(()=>n.reduce((e,t,n)=>{var o,i;const l=null===a||void 0===a||null===(o=a[n])||void 0===o||null===(i=o.result)||void 0===i?void 0:i[0];return l&&(e[t]=r.CurrencyAmount.ether(r.JSBI.BigInt(l.toString()))),e},{}),[n,a])}function m(e,t){const n=(0,o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.filter(e=>!1!==(0,d.isAddress)(null===e||void 0===e?void 0:e.address)))&&void 0!==e?e:[]},[t]),a=(0,o.useMemo)(()=>n.map(e=>e.address),[n]),l=(0,u.useMultipleContractSingleData)(a,i.default,"balanceOf",[e]),s=(0,o.useMemo)(()=>l.some(e=>e.loading),[l]);return[(0,o.useMemo)(()=>e&&n.length>0?n.reduce((e,t,n)=>{var a,o;const i=null===l||void 0===l||null===(a=l[n])||void 0===a||null===(o=a.result)||void 0===o?void 0:o[0],s=i?r.JSBI.BigInt(i.toString()):void 0;return s&&(e[t.address]=new r.TokenAmount(t,s)),e},{}):{},[e,n,l]),s]}function f(e,t){return m(e,t)[0]}function A(e,t){const n=(0,o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.filter(e=>e instanceof r.Token))&&void 0!==e?e:[]},[t]),a=f(e,n),i=p((0,o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.some(e=>e===r.ETHER))&&void 0!==e&&e},[t])?[e]:[]);return(0,o.useMemo)(()=>{var n;return null!==(n=null===t||void 0===t?void 0:t.map(t=>{if(e&&t)return t instanceof r.Token?a[t.address]:t===r.ETHER?i[e]:void 0}))&&void 0!==n?n:[]},[e,t,i,a])}},,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.useAllTokens=p,t.useCurrency=function(e){const t="ETH"===(null===e||void 0===e?void 0:e.toUpperCase()),n=A(t?void 0:e);return t?r.ETHER:n},t.useIsUserAddedToken=function(e){return!!(0,s.useUserAddedTokens)().find(t=>(0,r.currencyEquals)(e,t))},t.useToken=A;var a=n(248),r=n(24),o=n(0),i=n(119),l=n(96),s=n(90),c=n(38),d=n(22),u=n(73);function p(){const{chainId:e}=(0,d.useActiveWeb3React)(),t=(0,s.useUserAddedTokens)(),n=(0,i.useSelectedTokenList)();return(0,o.useMemo)(()=>e?t.reduce((e,t)=>(e[t.address]=t,e),{...n[e]}):{},[e,t,n])}const m=/^0x[a-fA-F0-9]{64}$/;function f(e,t,n){return e&&e.length>0?e:t&&m.test(t)?(0,a.parseBytes32String)(t):n}function A(e){const{chainId:t}=(0,d.useActiveWeb3React)(),n=p(),a=(0,c.isAddress)(e),i=(0,u.useTokenContract)(a||void 0,!1),s=(0,u.useBytes32TokenContract)(a||void 0,!1),m=a?n[a]:void 0,A=(0,l.useSingleCallResult)(m?void 0:i,"name",void 0,l.NEVER_RELOAD),h=(0,l.useSingleCallResult)(m?void 0:s,"name",void 0,l.NEVER_RELOAD),b=(0,l.useSingleCallResult)(m?void 0:i,"symbol",void 0,l.NEVER_RELOAD),g=(0,l.useSingleCallResult)(m?void 0:s,"symbol",void 0,l.NEVER_RELOAD),y=(0,l.useSingleCallResult)(m?void 0:i,"decimals",void 0,l.NEVER_RELOAD);return(0,o.useMemo)(()=>{if(m)return m;if(t&&a){if(y.loading||b.loading||A.loading)return null;var e,n,o,i;if(y.result)return new r.Token(t,a,y.result[0],f(null===(e=b.result)||void 0===e?void 0:e[0],null===(n=g.result)||void 0===n?void 0:n[0],"UNKNOWN"),f(null===(o=A.result)||void 0===o?void 0:o[0],null===(i=h.result)||void 0===i?void 0:i[0],"Unknown Token"))}},[a,t,y.loading,y.result,b.loading,b.result,g.result,m,A.loading,A.result,h.result])}},function(e,t,n){"use strict";t.__esModule=!0,t.unwrappedToken=function(e){return e.equals(a.WETH[e.chainId])?a.ETHER:e},t.wrappedCurrency=r,t.wrappedCurrencyAmount=function(e,t){const n=e&&t?r(e.currency,t):void 0;return n&&e?new a.TokenAmount(n,e.raw):void 0};var a=n(24);function r(e,t){return t&&e===a.ETHER?a.WETH[t]:e instanceof a.Token?e:void 0}},,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.WrappedTokenInfo=void 0,t.listToTokenMap=u,t.useAllLists=function(){const e=(0,l.useSelector)(e=>e.lists.byUrl);return(0,i.useMemo)(()=>Object.keys(e).map(t=>e[t].current).filter(e=>Boolean(e)),[e])},t.useSelectedListInfo=function(){var e,t;const n=m(),a=(0,l.useSelector)(e=>e.lists.byUrl),r=n?a[n]:void 0;return{current:null!==(e=null===r||void 0===r?void 0:r.current)&&void 0!==e?e:null,pending:null!==(t=null===r||void 0===r?void 0:r.pendingUpdate)&&void 0!==t?t:null,loading:null!==(null===r||void 0===r?void 0:r.loadingRequestId)}},t.useSelectedListUrl=m,t.useSelectedTokenList=function(){return p(m())},t.useTokenList=p;var r=a(n(91)),o=n(24),i=n(0),l=n(39);class s extends o.Token{constructor(e,t){super(e.chainId,e.address,e.decimals,e.symbol,e.name),(0,r.default)(this,"tokenInfo",void 0),(0,r.default)(this,"tags",void 0),this.tokenInfo=e,this.tags=t}get logoURI(){return this.tokenInfo.logoURI}}t.WrappedTokenInfo=s;const c={[o.ChainId.MAINNET]:{},[o.ChainId.BSCTESTNET]:{}},d="undefined"!==typeof WeakMap?new WeakMap:null;function u(e){const t=null===d||void 0===d?void 0:d.get(e);if(t)return t;const n=e.tokens.reduce((t,n)=>{var a,r,o;const i=null!==(a=null===(r=n.tags)||void 0===r||null===(o=r.map(t=>{var n;if(null!==(n=e.tags)&&void 0!==n&&n[t])return{...e.tags[t],id:t}}))||void 0===o?void 0:o.filter(e=>Boolean(e)))&&void 0!==a?a:[],l=new s(n,i);if(void 0!==t[l.chainId][l.address])throw Error("Duplicate tokens.");return{...t,[l.chainId]:{...t[l.chainId],[l.address]:l}}},{...c});return null===d||void 0===d||d.set(e,n),n}function p(e){const t=(0,l.useSelector)(e=>e.lists.byUrl);return(0,i.useMemo)(()=>{var n;if(!e)return c;const a=null===(n=t[e])||void 0===n?void 0:n.current;if(!a)return c;try{return u(a)}catch(r){return console.error("Could not show token list due to error",r),c}},[t,e])}function m(){return(0,l.useSelector)(e=>e.lists.selectedListUrl)}},,function(e,t,n){var a={"./arrow-down-blue.svg":648,"./arrow-down-grey.svg":649,"./arrow-right-white.png":650,"./arrow-right.svg":651,"./binance-logo.png":324,"./binance.svg":315,"./blue-loader.svg":325,"./cheeseswap-logo.png":196,"./cheeseswap-logo.svg":652,"./cheeseswap.png":653,"./circle-grey.svg":654,"./circle.svg":655,"./coinbaseWalletIcon.svg":225,"./dropdown-blue.svg":656,"./dropdown.svg":657,"./dropup-blue.svg":658,"./ethereum-logo.png":659,"./fantomWallet.png":229,"./injected.png":660,"./injected.svg":661,"./link.svg":662,"./magnifying-glass.svg":663,"./menu.svg":664,"./metamask.png":172,"./okxWallet.png":228,"./plus-blue.svg":665,"./plus-grey.svg":666,"./question-mark.svg":667,"./question.svg":668,"./spinner.svg":669,"./trustWallet.png":227,"./walletConnectIcon.svg":226,"./wbnb.png":670,"./x.svg":671};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=121},,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{text:t}=e;const[n,a]=(0,r.useState)(!1),i=(0,r.useCallback)(()=>a(!0),[a]),s=(0,r.useCallback)(()=>a(!1),[a]);return r.default.createElement("span",{style:{marginLeft:4}},r.default.createElement(l.default,{text:t,show:n},r.default.createElement(c,{onClick:i,onMouseEnter:i,onMouseLeave:s},r.default.createElement(o.HelpCircle,{size:16}))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=n(35),i=a(n(14)),l=a(n(311));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}const c=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  background: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};

  :hover,
  :focus {
    opacity: 0.7;
  }
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(0)),o=n(152);var i=e=>{let{translationId:t,children:n}=e;return r.default.createElement(r.default.Fragment,null,(0,o.TranslateString)(t,n))};t.default=i},,,,,function(e,t,n){"use strict";t.__esModule=!0,t.Web3Context=void 0,t.Web3Provider=function(e){let{children:t}=e;const[n,u]=(0,a.useState)(h),[b,g]=(0,a.useState)(()=>i.eip6963Store.getProviders()),[y,E]=(0,a.useState)(null),[v,w]=(0,a.useState)(!1),C=(0,a.useRef)(n);C.current=n,(0,a.useEffect)(()=>{const e=i.eip6963Store.subscribe(g);return i.eip6963Store.requestProviders(),e},[]);const x=(0,a.useCallback)(async(e,t,n)=>{const a=e.getSigner(),r=await a.getAddress(),o=await e.getNetwork();u({provider:e,signer:a,account:r,chainId:o.chainId,walletType:t,walletMeta:n}),A({version:2,walletType:t,rdns:n.rdns})},[]),B=(0,a.useCallback)(async(e,t)=>{w(!0),E(null);try{let n,a,r=t;if(!r&&"WALLETCONNECT"!==e){const t=m[e]||[];for(const e of t)if(i.eip6963Store.getProvider(e)){r=e;break}if(!r&&"INJECTED"===e){const e=i.eip6963Store.getProviders();1===e.length&&(r=e[0].info.rdns)}}if(r&&i.eip6963Store.getProvider(r)){n=await l.eip6963Connector.connect(r);const o=i.eip6963Store.getProvider(r);a={name:o?o.info.name:"Browser Wallet",icon:o?o.info.icon:null,rdns:r},e=t?f(r):e}else{const t=(0,o.walletTypeToConnectorId)(e);n=await c.ConnectorFactory.connect(t),a={name:c.ConnectorFactory.getConnector(t).getName(),icon:null,rdns:null}}await x(n,e,a),console.log("[Web3Provider] Connected:",a.name)}catch(n){throw console.error("[Web3Provider] Error connecting to wallet:",n),E(n.message||"Failed to connect wallet"),n}finally{w(!1)}},[x]),k=(0,a.useCallback)(async()=>{const{walletType:e,walletMeta:t}=C.current;try{t&&t.rdns?await l.eip6963Connector.disconnect():e&&await(0,o.disconnectWallet)(e)}catch(n){console.error("[Web3Provider] Error disconnecting wallet:",n)}A(null),u(h),E(null),console.log("[Web3Provider] Disconnected from wallet")},[]),T=(0,a.useCallback)(async()=>{const{provider:e}=C.current;if(e)try{await(0,d.ensureBSCMainnet)(e.provider||e)}catch(t){console.error("[Web3Provider] Failed to switch network:",t),E(t.message||"Failed to switch network")}},[]);(0,a.useEffect)(()=>{let e=!1;return async function(){const t=function(){try{const e=localStorage.getItem("cheeseswap:wallet");if(e){const t=JSON.parse(e);if(t&&t.walletType)return{version:2,walletType:t.walletType,rdns:t.rdns||null}}const t=localStorage.getItem("selectedWallet");if(t){localStorage.removeItem("selectedWallet");const e={version:2,walletType:t,rdns:null};return localStorage.setItem("cheeseswap:wallet",JSON.stringify(e)),e}}catch(e){console.warn("[Web3Provider] Failed to read persisted connection:",e)}return null}();if(t&&!C.current.account)try{if("WALLETCONNECT"===t.walletType){const t=await s.walletConnectConnector.eagerConnect();return void(t&&!e&&await x(t,"WALLETCONNECT",{name:"WalletConnect",icon:null,rdns:null}))}let n=t.rdns;if(!n){const e=m[t.walletType]||[];for(const t of e)if(await i.eip6963Store.waitForProvider(t,500)){n=t;break}}if(n){const a=await l.eip6963Connector.eagerConnect(n);if(a&&!e){const e=i.eip6963Store.getProvider(n);await x(a,t.walletType,{name:e?e.info.name:"Browser Wallet",icon:e?e.info.icon:null,rdns:n})}return}const a="undefined"!==typeof window?window.ethereum:void 0;if(a&&"function"===typeof a.request){const n=await a.request({method:"eth_accounts"});if(n&&n.length>0&&!e){const e=new r.ethers.providers.Web3Provider(a,"any");await x(e,t.walletType,{name:"Browser Wallet",icon:null,rdns:null})}}}catch(n){console.warn("[Web3Provider] Eager reconnect failed:",n)}}(),()=>{e=!0}},[x]),(0,a.useEffect)(()=>{if(!n.provider)return;const e=n.provider.provider;return(0,o.setupWalletListeners)(e,e=>{if(0===e.length)k();else if(e[0]!==C.current.account){const t=C.current.provider;u(n=>({...n,account:e[0],signer:t?t.getSigner():n.signer}))}},e=>{const t="string"===typeof e?parseInt(e,16):Number(e);Number.isNaN(t)||u(e=>({...e,chainId:t}))},()=>{k()})},[n.provider,k]);const D=(0,a.useCallback)(()=>E(null),[]),I={...n,connect:B,disconnect:k,switchNetwork:T,isConnected:!!n.account,isWrongNetwork:null!==n.chainId&&n.chainId!==o.CHAIN_ID,discoveredWallets:b,error:y,clearError:D,isConnecting:v};return a.default.createElement(p.Provider,{value:I},t)},t.rdnsToWalletType=f,t.useWeb3=function(){const e=(0,a.useContext)(p);if(!e)throw new Error("useWeb3 must be used within Web3Provider");return e};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=n(55),o=n(138),i=n(199),l=n(277),s=n(200),c=n(276),d=n(60);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}const p=(0,a.createContext)(void 0);t.Web3Context=p;const m={METAMASK:["io.metamask","io.metamask.flask"],TRUST_WALLET:["com.trustwallet.app"],OKX_WALLET:["com.okex.wallet"],BINANCE:["com.binance.wallet"],COINBASE:["com.coinbase.wallet"]};function f(e){const t=e.toLowerCase();return t.startsWith("io.metamask")?"METAMASK":"com.trustwallet.app"===t?"TRUST_WALLET":"com.okex.wallet"===t?"OKX_WALLET":"com.binance.wallet"===t?"BINANCE":"com.coinbase.wallet"===t?"COINBASE":"INJECTED"}function A(e){try{e?localStorage.setItem("cheeseswap:wallet",JSON.stringify(e)):(localStorage.removeItem("cheeseswap:wallet"),localStorage.removeItem("selectedWallet"))}catch(t){console.warn("[Web3Provider] Failed to persist connection:",t)}}const h={account:null,provider:null,signer:null,chainId:null,walletType:null,walletMeta:null}},,,,function(e,t,n){"use strict";t.__esModule=!0;var a={CHAIN_ID:!0,CHAIN_ID_HEX:!0,NETWORK_NAME:!0,getNetworkProvider:!0,connectWallet:!0,autoConnectWallet:!0,disconnectWallet:!0,getAvailableWallets:!0,getNetworkLibrary:!0,walletTypeToConnectorId:!0,ConnectorFactory:!0};t.NETWORK_NAME=t.CHAIN_ID_HEX=t.CHAIN_ID=void 0,t.autoConnectWallet=async function(){return await o.ConnectorFactory.autoConnect()},t.connectWallet=async function(e){let t;t=e===e.toUpperCase()?p(e):e;return await o.ConnectorFactory.connect(t)},t.disconnectWallet=async function(e){if(!e)return;let t;t=e===e.toUpperCase()?p(e):e;await o.ConnectorFactory.disconnect(t)},t.getAvailableWallets=function(){return o.ConnectorFactory.getAvailableConnectors()},t.getNetworkLibrary=function(){u||(u=d());return u},t.getNetworkProvider=d,t.walletTypeToConnectorId=p;var r=n(55),o=n(276);t.ConnectorFactory=o.ConnectorFactory;var i=n(60);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===i[e]||(t[e]=i[e]))}));var l=n(158);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===l[e]||(t[e]=l[e]))}));var s=n(199);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===s[e]||(t[e]=s[e]))}));t.CHAIN_ID=56;t.CHAIN_ID_HEX="0x38";t.NETWORK_NAME="BSC Mainnet";const c=["REACT_APP_NETWORK_URL_1","REACT_APP_NETWORK_URL_2","REACT_APP_NETWORK_URL_3","REACT_APP_NETWORK_URL_4","REACT_APP_NETWORK_URL_5","REACT_APP_NETWORK_URL_6","REACT_APP_NETWORK_URL_7","REACT_APP_NETWORK_URL_8","REACT_APP_NETWORK_URL_9","REACT_APP_NETWORK_URL_10","REACT_APP_NETWORK_URL_11","REACT_APP_NETWORK_URL_12","REACT_APP_NETWORK_URL_13"].map(e=>Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAIN_ID:"56",REACT_APP_NETWORK_URL_1:"https://bsc-dataseed1.binance.org/",REACT_APP_NETWORK_URL_2:"https://bsc-dataseed2.binance.org/",REACT_APP_NETWORK_URL_3:"https://bsc-dataseed3.binance.org/",REACT_APP_NETWORK_URL_4:"https://bsc-dataseed1.bnbchain.org/",REACT_APP_NETWORK_URL_5:"https://bsc-dataseed.defibit.io/",REACT_APP_NETWORK_URL_6:"https://bsc-dataseed.ninicoin.io",REACT_APP_GOOGLE_ANALYTICS_ID:"UA-187991504-1",REACT_APP_PUBLIC_URL:"https://cheeseswap.app",REACT_APP_NODE_ENV:"production",REACT_APP_NETWORK_URL_7:"https://bsc-dataseed.ninicoin.io",REACT_APP_NETWORK_URL_8:"https://0.48.club/",REACT_APP_NETWORK_URL_9:"https://bsc-dataseed2.ninicoin.io/",REACT_APP_NETWORK_URL_10:"https://public-bsc-mainnet.fastnode.io/",REACT_APP_NETWORK_URL_11:"https://bsc.drpc.org/",REACT_APP_NETWORK_URL_12:"https://bsc.blockrazor.xyz/",REACT_APP_NETWORK_URL_13:"https://bsc.meowrpc.com",REACT_APP_TRANSACTIONS_SUBGRAPH_URL:"https://gateway.thegraph.com/api/e74f872faa2b79699e978d00e61b412b/subgraphs/id/5xa2cK1KdB4enwsv27k8dqzuecbwDJnSfrHkoJA9RrHF",REACT_APP_NETWORK_WSS_URL_1:"wss://bsc-mainnet.infura.io/ws/v3/5360ec7f835141b0bfa74eb029b61425",REACT_APP_WALLETCONNECT_PROJECT_ID:"61fa5b56203c18d546fb4e0e64bd73eb",REACT_APP_BUILD_VERSION:"v2.4.0"})[e]).filter(e=>"string"===typeof e);if(0===c.length)throw new Error("At least one RPC URL must be defined in environment variables");function d(){const e=c.map((e,t)=>({provider:new r.ethers.providers.JsonRpcProvider(e,{name:"BSC Mainnet",chainId:56}),priority:t,stallTimeout:500,weight:1}));return new r.ethers.providers.FallbackProvider(e)}let u=null;function p(e){switch(e){case"INJECTED":default:return"injected";case"METAMASK":return"metamask";case"TRUST_WALLET":return"trustwallet";case"OKX_WALLET":return"okxwallet";case"FANTOM_WALLET":return"fantomwallet";case"WALLETCONNECT":return"walletconnect";case"COINBASE":return"coinbasewallet"}}},,,,function(e,t,n){"use strict";t.__esModule=!0,t.selectList=t.removeList=t.rejectVersionUpdate=t.fetchTokenList=t.addList=t.acceptListUpdate=void 0;var a=n(36);const r={pending:(0,a.createAction)("lists/fetchTokenList/pending"),fulfilled:(0,a.createAction)("lists/fetchTokenList/fulfilled"),rejected:(0,a.createAction)("lists/fetchTokenList/rejected")};t.fetchTokenList=r;const o=(0,a.createAction)("lists/acceptListUpdate");t.acceptListUpdate=o;const i=(0,a.createAction)("lists/addList");t.addList=i;const l=(0,a.createAction)("lists/removeList");t.removeList=l;const s=(0,a.createAction)("lists/selectList");t.selectList=s;const c=(0,a.createAction)("lists/rejectVersionUpdate");t.rejectVersionUpdate=c},function(e,t,n){"use strict";t.__esModule=!0,t.typeInput=t.resetMintState=t.Field=void 0;var a=n(36);let r;t.Field=r,function(e){e.CURRENCY_A="CURRENCY_A",e.CURRENCY_B="CURRENCY_B"}(r||(t.Field=r={}));const o=(0,a.createAction)("mint/typeInputMint");t.typeInput=o;const i=(0,a.createAction)("mint/resetMintState");t.resetMintState=i},,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.isTransactionRecent=s,t.useAllTransactions=l,t.useHasPendingApproval=function(e,t){const n=l();return(0,a.useMemo)(()=>"string"===typeof e&&"string"===typeof t&&Object.keys(n).some(a=>{const r=n[a];if(!r)return!1;if(r.receipt)return!1;{const n=r.approval;return!!n&&(n.spender===t&&n.tokenAddress===e&&s(r))}}),[n,t,e])},t.useIsTransactionPending=function(e){const t=l();return!(!e||!t[e])&&!t[e].receipt},t.useTransactionAdder=function(){const{chainId:e,account:t}=(0,o.useActiveWeb3React)(),n=(0,r.useDispatch)();return(0,a.useCallback)((function(a){let{summary:r,approval:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return;if(!e)return;const{hash:l}=a;if(!l)throw Error("No transaction hash found.");n((0,i.addTransaction)({hash:l,from:t,chainId:e,approval:o,summary:r}))}),[n,e,t])};var a=n(0),r=n(39),o=n(22),i=n(176);function l(){var e;const{chainId:t}=(0,o.useActiveWeb3React)(),n=(0,r.useSelector)(e=>e.transactions);return t&&null!==(e=n[t])&&void 0!==e?e:{}}function s(e){return(new Date).getTime()-e.addedTime<864e5}},function(e,t,n){"use strict";t.__esModule=!0,t.typeInput=t.switchCurrencies=t.setRecipient=t.selectCurrency=t.replaceSwapState=t.Field=void 0;var a=n(36);let r;t.Field=r,function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(r||(t.Field=r={}));const o=(0,a.createAction)("swap/selectCurrency");t.selectCurrency=o;const i=(0,a.createAction)("swap/switchCurrencies");t.switchCurrencies=i;const l=(0,a.createAction)("swap/typeInput");t.typeInput=l;const s=(0,a.createAction)("swap/replaceSwapState");t.replaceSwapState=s;const c=(0,a.createAction)("swap/setRecipient");t.setRecipient=c},function(e,t,n){"use strict";t.__esModule=!0,t.getTranslation=t.TranslateString=void 0;var a=n(0),r=n(313);const o=(e,t,n)=>{const a=e.find(e=>e.data.stringId===t);return a?a.data.text:n};t.getTranslation=o;t.TranslateString=(e,t)=>{const{translations:n}=(0,a.useContext)(r.TranslationsContext);return"error"===n[0]?t:o(n,e,t)}},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{isOpen:t,onDismiss:n,minHeight:a=!1,maxHeight:o=50,initialFocusRef:l,children:c}=e;const d=(0,i.useTransition)(t,null,{config:{duration:250,tension:280,friction:28},from:{opacity:0,transform:"scale(0.96)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.96)"}});return r.default.createElement(r.default.Fragment,null,d.map(e=>{let{item:t,key:i,props:d}=e;return t&&r.default.createElement(u,{key:i,style:d,onDismiss:n,initialFocusRef:l},r.default.createElement(m,{"aria-label":"dialog content",minHeight:a,maxHeight:o,mobile:s.isMobile},!l&&s.isMobile?r.default.createElement("div",{tabIndex:1}):null,c))}))};var r=a(n(0)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(14)),i=n(224),l=n(822),s=n(264);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}n(612);const d=(0,i.animated)(l.DialogOverlay),u=(0,o.default)(d)`
  &[data-reach-dialog-overlay] {
    z-index: 2;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${e=>{let{theme:t}=e;return t.colors.modalBG}};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: backdrop-filter 0.3s ease;
  }
`,p=(0,i.animated)(l.DialogContent),m=(0,o.default)(e=>{let{minHeight:t,maxHeight:n,mobile:a,isOpen:o,...i}=e;return r.default.createElement(p,i)}).attrs({"aria-label":"dialog"})`
  &[data-reach-dialog-content] {
    margin: 6rem 0 2rem 0;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}}40;
    background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    box-shadow: 
      0 10px 40px -8px rgba(0, 0, 0, 0.2),
      0 4px 16px -4px rgba(0, 0, 0, 0.25);
    padding: 0px;
    width: 50vw;
    overflow: hidden;
    align-self: ${e=>{let{mobile:t}=e;return t?"flex-end":"center"}};
    max-width: 480px;
    ${e=>{let{maxHeight:t,mobile:n}=e;return t&&o.css`
        max-height: ${n?`calc(${t}vh - 5rem)`:`calc(${t}vh - 8rem)`};
      `}}
    ${e=>{let{minHeight:t,mobile:n}=e;return t&&o.css`
        min-height: ${n?`calc(${t}vh - 5rem)`:`calc(${t}vh - 8rem)`};
      `}}
    display: flex;
    border-radius: 20px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
      width: 65vw;
      margin: 5rem 0.5rem 1.5rem 0.5rem;
    `}}
    ${e=>{let{theme:t,mobile:n}=e;return t.mediaWidth.upToSmall`
      width: 85vw;
      margin: 4.5rem 0.5rem 1rem 0.5rem;
      border-radius: 20px;
      ${n&&o.css`
          width: 100vw;
          margin: 4rem 0 0 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `}
    `}}
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
      margin: 4rem 0.5rem 1rem 0.5rem;
    `}}
  }
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{size:t="16px",stroke:n,...a}=e;return r.default.createElement(s,Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:n},a),r.default.createElement("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))};var r=a(n(0)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(14));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}const l=o.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,s=o.default.svg`
  animation: 2s ${l} linear infinite;
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
  path {
    stroke: ${e=>{let{stroke:t,theme:n}=e;return null!==t&&void 0!==t?t:n.colors.primary1}};
  }
`},,,function(e,t,n){"use strict";t.__esModule=!0,t.WalletNotAvailableError=t.WalletConnectionError=t.WalletConnectTimeoutError=t.WalletConnectRejectedError=t.UserRejectedError=void 0;class a extends Error{constructor(e,t){super(e),this.connectorId=t,this.name="WalletConnectionError"}}t.WalletConnectionError=a;t.WalletNotAvailableError=class extends a{constructor(e){super(e+" is not available",e),this.name="WalletNotAvailableError"}};t.WalletConnectRejectedError=class extends a{constructor(e){super("User rejected connection to "+e,e),this.name="WalletConnectRejectedError"}};t.UserRejectedError=class extends a{constructor(e){super("Connection request was rejected in "+e,e),this.name="UserRejectedError"}};t.WalletConnectTimeoutError=class extends a{constructor(e){super(`Connection to ${e} timed out`,e),this.name="WalletConnectTimeoutError"}}},,,,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.updateBlockNumber=t.toggleWalletModal=t.toggleSettingsMenu=t.removePopup=t.addPopup=void 0;var a=n(36);const r=(0,a.createAction)("app/updateBlockNumber");t.updateBlockNumber=r;const o=(0,a.createAction)("app/toggleWalletModal");t.toggleWalletModal=o;const i=(0,a.createAction)("app/toggleSettingsMenu");t.toggleSettingsMenu=i;const l=(0,a.createAction)("app/addPopup");t.addPopup=l;const s=(0,a.createAction)("app/removePopup");t.removePopup=s},function(e,t,n){e.exports=n.p+"static/media/metamask.78eeb125.png"},,,function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){const[n,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const n=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(n)}},[e,t]),n};var a=n(0)},function(e,t,n){"use strict";t.__esModule=!0,t.finalizeTransaction=t.clearAllTransactions=t.checkedTransaction=t.addTransaction=void 0;var a=n(36);const r=(0,a.createAction)("transactions/addTransaction");t.addTransaction=r;const o=(0,a.createAction)("transactions/clearAllTransactions");t.clearAllTransactions=o;const i=(0,a.createAction)("transactions/finalizeTransaction");t.finalizeTransaction=i;const l=(0,a.createAction)("transactions/checkedTransaction");t.checkedTransaction=l},,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=t.YellowCard=t.PinkCard=t.OutlineCard=t.LightCard=t.GreyCard=t.BlueCard=void 0;var r=a(n(0)),o=a(n(14)),i=n(40),l=n(223);const s=(0,o.default)(l.Box)`
  width: 100%;
  border-radius: ${e=>{let{borderRadius:t}=e;return t||"16px"}};
  padding: ${e=>{let{padding:t}=e;return t||"20px"}};
  border: ${e=>{let{border:t}=e;return t||"none"}};
    backdrop-filter: none;
    background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
    box-shadow: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: none !important;
  }
`;var c=s;t.default=c;const d=(0,o.default)(s)`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-shadow: none !important;
`;t.LightCard=d;const u=(0,o.default)(s)`
  background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
`;t.GreyCard=u;const p=(0,o.default)(s)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-shadow: none !important;
`;t.OutlineCard=p;const m=(0,o.default)(s)`
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: ${e=>{let{theme:t}=e;return t.colors.yellow2}};
  font-weight: 600;
    backdrop-filter: none;
`;t.YellowCard=m;const f=(0,o.default)(s)`
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(219, 39, 119, 0.05) 100%);
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  font-weight: 600;
    backdrop-filter: none;
`;t.PinkCard=f;const A=(0,o.default)(s)`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    border-radius: 13.6px;
  width: fit-content;
    backdrop-filter: none;
`;t.BlueCard=e=>{let{children:t,...n}=e;return r.default.createElement(A,n,r.default.createElement(i.Text,{fontWeight:600,color:"#3B82F6"},t))}},function(e,t,n){"use strict";t.__esModule=!0,t.PairState=void 0,t.usePair=function(e,t){return p([[e,t]])[0]},t.usePairs=p;var a=n(24),r=n(0),o=n(180),i=n(355),l=n(22),s=n(96),c=n(114);const d=new i.Interface(o.abi);let u;function p(e){const{chainId:t}=(0,l.useActiveWeb3React)(),n=(0,r.useMemo)(()=>e.map(e=>{let[n,a]=e;return[(0,c.wrappedCurrency)(n,t),(0,c.wrappedCurrency)(a,t)]}),[t,e]),o=(0,r.useMemo)(()=>n.map(e=>{let[t,n]=e;return t&&n&&!t.equals(n)?a.Pair.getAddress(t,n):void 0}),[n]),i=(0,s.useMultipleContractSingleData)(o,d,"getReserves");return(0,r.useMemo)(()=>i.map((e,t)=>{const{result:r,loading:o}=e,i=n[t][0],l=n[t][1];if(o)return[u.LOADING,null];if(!i||!l||i.equals(l))return[u.INVALID,null];if(!r)return[u.NOT_EXISTS,null];const{reserve0:s,reserve1:c}=r,[d,p]=i.sortsBefore(l)?[i,l]:[l,i];return[u.EXISTS,new a.Pair(new a.TokenAmount(d,s.toString()),new a.TokenAmount(p,c.toString()))]}),[i,n])}t.PairState=u,function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(u||(t.PairState=u={}))},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return/^0x0*$/.test(e)}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{currency0:t,currency1:n,size:a=16,margin:o=!1}=e;return r.default.createElement(l,{sizeraw:a,margin:o},t&&r.default.createElement(s,{currency:t,size:a.toString()+"px"}),n&&r.default.createElement(c,{currency:n,size:a.toString()+"px",sizeraw:a}))};var r=a(n(0)),o=a(n(14)),i=a(n(104));const l=o.default.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: ${e=>{let{sizeraw:t,margin:n}=e;return n&&(t/3+8).toString()+"px"}};
`,s=(0,o.default)(i.default)`
  z-index: 2;
`,c=(0,o.default)(i.default)`
  position: absolute;
  left: ${e=>{let{sizeraw:t}=e;return(t/2).toString()+"px"}};
`},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAACACAMAAADd2IbjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEX///8AAAD8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX8zTX/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/wxr/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/1Tj/0TH/yST/ziz/zy7/yCL/yiX/0DD/xR3/yyj/0jP8zTX/wxr/1Tj////yBGjzAAAAOXRSTlMAABBAcICvv+9QYM+fMN+PICBAEIBgr79w348w75/PUHCAvyCP71DfrxAwn2BAz4C/n7+vr6+/z7+GBMfWAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UCFBIkOgeg/DMAAAzlSURBVHja7Z3ZYqO4EoYjY0LiOLERApm9k/QyM5145sxZQ7//e50LG9DOJifErv8qsTAI9KEqVUny1RUIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCtULDtHCcpetee55388bL8zzXvXUQ6II0FCJn5Xp3b9268dZLZwHPFyDidb9c98GH1cO1CyQBRHUH5HpvY3W3uQWQLh2ixer65m2i7tx7eNYXC9Fidf1mRw/rW3jclwjRrS2Cjt72BvqjC4NosXwQO5ONs0Bo4WwexvdHS/CPLgeihSs5Qpu21J3QHa238NgvAiIFQm9r9oDNFLN2DcHIC4DoVmWvOIhWnR3Oteu67lpj+Dxwjs4cooXGnV61h9x3DPpvlk2ESYPRGnyjc4bI0QLiHQfpW7crcMR0NIu7Ls5AZwfR0pwS87weset+ls8DD/tMIVqPcJTdLUJou2oN110/H/wGwo9nCdGYsXs99N8qPR6jC76CFjg/iG5HRX4OKGxZf/xhdbBVt+t+AILOBqLt2Eyr53l3474J7vW5QbR+e3+BRTsviLYfwNDbzZS4o49rBdCW84Bo+REQ8UO5gSJVLQxtOQ+I3A+BaIpBA4hmB9HmYyDyzFUMwohWjGi08+cOkb/j6hzTJJ1L1ULKiJxNT/RmjFyTrJKVB3OGKEgUVaYzwYh7IYt5QbRxx8sEUV4pVQTzhSgolFXO5kER/04G1iG6V5gad+ncamd0sHOETnPLZaVRPl+IiKbKxRwql/J1Kq1CRDBCSMytuk32wvE+JmpY6CCq/LlCFGS6KpczqN2OrxKxClGUy10RN2zqCkTenCInH2gZqsK5QoS1VU5mUDvBPaBWIaJVKnpF/Khp8dBnkPXlUasnvZ6HN8jhHZojRERbZTqD2sVCnaxClB1uca2PAt71MWhffo3Rlx4QRRhjTD4XREVOkmJWEEldO7YJUVVVO5Eizpwt+yUwnsZA9LUHRKKP9AkgKgQDMgOISmWHbgmitGkIlqJN41gvNj0TGM/fRkD01Bsi+u4QDU7NEe0IcgYQSRGsyCJEuI1krNj5INcrx3Gc5brfHBEXIfR9BEQ/bEC0O/RSWRSyLe4nXHQto8TvWxrs+Eg5/01CuVFYG5MmwlvOQdT8k0mOri8Mn+JjhDk6uDEFCZCAI3v3IT3ewS7oHWpk64EQYk/v58er5lj+KhKedQ1RyMTD7u9GhxzvEUK/jaBoOkQl43tk2Bg7ToJepWVW6ft+1TejoBsiLHq0VOxLCddHpDEbYNVDxMCRmSIJbSam/iNVQcTe+/G2mJoGwrOuISJcBZZjJ6fdLRD6fYRB+2MyRPwrlhrDTLRPaWgapOeGMLoRokCsokQoZf9POZBzLUS0ZzyqeZ5xVP+1U0BUZIogaXuNRHjWNUQJfyuL3tPT7jau615z013NBu3ny+vjXvzwdTJEvGLzaJt0l2pChlgPWM2YCFGb8UzYITYWA8i5MAbHKuujgUgwUUFnqDEiwmV5oFWPi2qfdQ1RewQ92Obtesg0jvsmiOSYDdr+EBJ6FXqrF8sQHZsoMzJmLN2Zsi2FqfWIceQTCYRJPSCb1vKrURAdArHIeHUsvG8miGIjRBWWIaqy4713L1E8MoMQQk1f9GA0aPu6vn/whzzahogo8kSCuTOXah5ZhpChbSvcCRHhLSMR434p23K7kRDlnaFG7IsOvQGiwyFaiEgNEU9e7ZiuOjNmNxvHcRz2OJNB+9aGpl/HQdQ3OhwZs7dV2Vkaa8rMcXTSCRHmOaBiU5XsHZCREOliCT7TzWWyB2V8N/QQRUqIqorWGG2Xg4dqDkLop8YfYm5obxminJBceIyED3fjQtPYqlKuX2KGI3ytKMYY40hzXmoKGcsmFXN1JvwYsEjk2Lf57hUKmYtTOaPHdCMJIVQPkXC1I0Ry104bQLfLYZt+PiwQ+v2HEqLvzA092oUoUcT1xFAk1jS2qpS/MNFAZD5vRRTrCGL2TIFkgiO1X52rwpbmuzeFGiPm6EIBkc+n2bDCk0gkiFQddNyGrRa3mwEd0kayVqpBmGWIsNBFDIEITYQI6SBix8mhGBjyRcOYc8WKdsOGYKOi2DCxhrDWPJAhUoWwqKbLNEJUVVXORBwWjuvd9DdoXy8WIp2vJU7GxCJwlD1VcQqIWK8vlTNGEyHSumhZzkWuto677kZJa9DYbP3PzwSRrlYqiAKjs98ytpOClqzrm58AIsyZK9n/PxVEhwSJL9TGcVx3rVo5/eB5nudd32sM2p45x49zhUg3LfwYpPbZYwtxJI25QLJliPjEHZWOPiFEVVVVcS6B1CmVQWuDil9+fRaI/KEQ+ZlxZmPGVJHPWmAmMoRPABGPTSI92hNDdExxl0NIUhm0b7VX9PLrXSEqKKWU6ob4VFFaMPdNKaU0IqVcq8N5hbbmsqZy+Ia2Xs/RL6F58+1E04xWIMq4s4VSpvEdIKqXDpKy1+yaFP+pDBU9I4SexTjSqSEyBwVVpZHqNSJdk3Zr9yKk2nB3e92mHfNd4wdRbtxtF6KUz9C2/+7eG6LmFYwIIRhjnLKzt0JCSF6/mn9pwtZPchc1P4hCQ1/SDRF7C7lwD2VrJ49V2OHm7DGXuLALUShYaGli2ntD1Ef/6D8VZH4QBbGekkEQsTk6PveAUeMLNeV852AXolyYiFaIE9MmQhSdAqK/PzNEwlQeLjI3DCJpoJc1ufas/vhIrI95j90uRLFQLE2qnCNEP6cv95AgSprJOeGJIUJpoZtlMRGiujVI0Pg/x+ePS+OchWkQtfGr+PAEY3HqyBzN2YCFH9MnpXUM8QX5naUIIYQTGqswaS+z03zTCBFp8r5iIosQPp9lFSL9rIV66sgMIaKt//z4jNDLjw+EyGwKhyySIKo4Ee+/cjMZFRDVrUlJc8rjGfOIb1WrEBnauJgvREKIUYgb7b+/vnz7LBDhARBJyXTxHtrURnOS40dNrGp3Aoiooa2CuUL0T3EWEZcI+fE7YqZAPr8LRD6p5XeWDoGo/SbuA1GbZG1bMFPMArMMkamtyrlC9C9pKcdeGo99tbZkqA9EfOP3LcWdEOnSKTqI+D4hVnQTyAJEglnFprZK5grR39KiskcJoscLgMiX2EjkAGai8lH6QxQa754i03zt9nwzhOjfEkTsmP83hNp1IftTQySu9MEDS8dBFAdC6yHVkjYif5RLEEXcrEd53Zkw11BRao7iCBCF/KIpbK6MeVKanRF+Myn2m5jQfxmwFn+XIuSX1TiIihJjHBYaTMylfCaNh6gIMcalLrFbxRHh1mnLMWw5kcUms9gNRtgMsTzHOmPDPkqIYsU4gr9l1muKKbtKXJxjLVxNO8d6srK9uF2DsO3M/udeNYFfB5EyrmeGSB8ZwZ2lLArs8yTGWpXGoXSh9HF9+SPcNSrvs9qDh8iXa8HGrMkJVntYHeEfGXkZnvUYulOaAFFqHNKaS7HhsvpapUbEItVoO1Ms6UYIGVfa9lp3xkMUSraSs7TUxrqzwjpE/2HH8y+vL09jNrkauGej6HnGxjYwl2aGiIquVuaVte3C1ES6GjcdspDXiQ2DqJQhSlSpGcyjbO5BtRCl0lp8a/rr1/Ssx9DdY0WIdsawiLmUGMbCpZES7QYBgaqHSZBUmURhb4ZAFCvc7kIVIA34PtQMv35fAH5rGZv6r4VNQdDAfayx6f2WBz/m0kJ/2RHf5PaxTuXuCat6LGFL7EI/OpOMqgiRGJ0WEvvVTr8rSCTa4Fi4rRoi/3RhognbEyE0bEd9OWareFmznSmd1JYqdi9q9i5S1Soz715UpOrocSp7f8yRATMyp6U+2MhQFKfItC9SrNzgocq1+xMlkiPH7gVVpMyejdadov9Z2Cjt8BwNv+3RRmVTTeA/4H5lI6M5t4+auZT7hQ72slKtMhrpv1lVMU34LFs7o6WpaCR/dMypHEryEqVCapfbKS2Kj3egzOFpVscSji3mmOMWcgWzPRxVXa1kt9uz7xQNmAjyhEBjZHvHyr4JXPFqDUS2I0Vx//3Snr4AD+cBkW17RqGNLxCiECACiKZCpI29AUQAUW+IQoAIIJoKkd2uCCC6TIgwQAQQTYXIaqwIILpQiGwO8wGi08tXbAk5Rc3plL9Wm2qvxkOk3VkHIALpxUOkW4AOEIH6Q4RwBhCBJkJkrS8CiC4YIlsUAUSXDBHyC4AINBEiO/EigOjCIUI4BohAEyFS/zoqQAQaAhFCPgWIQBMhQghTgAg0ESKEcAQQgSZChJCfZAARaBpECKEyzwAi0DSIRnIEEAFEolJCASLQNIgQQgjv8gIgAk2C6EBSSGgBEIGmQHRQgDEhCeU29mv2ieB/YQ50KRCBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAg0NXV1dX/AQ8gM54t13ZvAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTIwVDE4OjM2OjQ0KzAwOjAwmMmasAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0yMFQxODozNjo0NCswMDowMOmUIgwAAAAASUVORK5CYII="},,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.eip6963Store=t.KNOWN_WALLET_RDNS=void 0;var r=a(n(91));const o=new class{constructor(){(0,r.default)(this,"providers",new Map),(0,r.default)(this,"listeners",new Set),(0,r.default)(this,"started",!1)}start(){this.started||"undefined"===typeof window||(this.started=!0,window.addEventListener("eip6963:announceProvider",e=>{const t=e.detail;if(!t||!t.info||!t.provider||!t.info.rdns)return;const n=this.providers.get(t.info.rdns);n&&n.provider===t.provider||(this.providers.set(t.info.rdns,{info:{...t.info},provider:t.provider}),this.emit())}),this.requestProviders())}requestProviders(){"undefined"!==typeof window&&window.dispatchEvent(new Event("eip6963:requestProvider"))}getProviders(){return Array.from(this.providers.values())}getProvider(e){return this.providers.get(e)}async waitForProvider(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;const n=this.getProvider(e);return n||(this.requestProviders(),new Promise(n=>{const a=setTimeout(()=>{r(),n(this.getProvider(e))},t),r=this.subscribe(()=>{const t=this.getProvider(e);t&&(clearTimeout(a),r(),n(t))})}))}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}emit(){const e=this.getProviders();this.listeners.forEach(t=>{try{t(e)}catch(n){console.error("[EIP6963] listener error:",n)}})}};t.eip6963Store=o,o.start();t.KNOWN_WALLET_RDNS={"io.metamask":"MetaMask","io.metamask.flask":"MetaMask Flask","com.trustwallet.app":"Trust Wallet","com.okex.wallet":"OKX Wallet","com.binance.wallet":"Binance Wallet","com.coinbase.wallet":"Coinbase Wallet","com.brave.wallet":"Brave Wallet","app.phantom":"Phantom","io.rabby":"Rabby Wallet","io.zerion.wallet":"Zerion","com.bitget.web3":"Bitget Wallet","pro.tokenpocket":"TokenPocket","com.safepal":"SafePal","io.xdefi":"Ctrl Wallet"}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.walletConnectConnector=t.CheeseSwapWalletConnect=void 0;var r=a(n(91)),o=n(55),i=n(81),l=n(158);const s="61fa5b56203c18d546fb4e0e64bd73eb";class c extends i.BaseWalletConnector{constructor(){super("WalletConnect"),(0,r.default)(this,"wcProvider",null),(0,r.default)(this,"initPromise",null),(0,r.default)(this,"displayUriListeners",new Set)}onDisplayUri(e){return this.displayUriListeners.add(e),()=>this.displayUriListeners.delete(e)}isAvailable(){return Boolean(s)}async getWcProvider(){return this.wcProvider?this.wcProvider:(this.initPromise||(this.initPromise=(async()=>{const{EthereumProvider:e}=await n.e(6).then(n.t.bind(null,835,7)),t=await e.init({projectId:s,chains:[56],optionalChains:[56],rpcMap:{56:"https://bsc-dataseed1.binance.org/"},showQrModal:!0,metadata:{name:"CheeseSwap",description:"CheeseSwap Interface - swap and provide liquidity on BNB Smart Chain",url:window.location.origin,icons:["https://cheeseswap.app/images/coins/chs.png"]}});return this.wcProvider=t,t.on("display_uri",e=>{this.displayUriListeners.forEach(t=>t(e))}),this.setupWalletConnectListeners(),t})(),this.initPromise.catch(()=>{this.initPromise=null})),this.initPromise)}async connect(){try{console.log("[WalletConnect] Initializing WalletConnect v2...");const e=await this.getWcProvider();return e.session?await e.enable():await e.connect(),this.provider=new o.ethers.providers.Web3Provider(e,"any"),console.log("[WalletConnect] Successfully connected"),this.provider}catch(e){console.error("[WalletConnect] Connection error:",e),this.provider=null;const t=(null===e||void 0===e?void 0:e.message)||"";if(4001===(null===e||void 0===e?void 0:e.code)||/rejected|declined|cancelled|canceled/i.test(t))throw new l.UserRejectedError("WalletConnect");throw e}}async eagerConnect(){if(!this.isAvailable())return null;try{const e=await this.getWcProvider();return e.session&&e.accounts&&0!==e.accounts.length?(this.provider=new o.ethers.providers.Web3Provider(e,"any"),console.log("[WalletConnect] Session restored"),this.provider):null}catch(e){return console.warn("[WalletConnect] Eager connect failed:",e),null}}async disconnect(){if(this.wcProvider)try{await this.wcProvider.disconnect()}catch(e){console.error("[WalletConnect] Error disconnecting:",e)}this.provider=null}getWcEip1193Provider(){return this.wcProvider}setupWalletConnectListeners(){this.wcProvider&&(this.wcProvider.on("accountsChanged",e=>{console.log("[WalletConnect] Accounts changed:",e),0===e.length&&this.disconnect()}),this.wcProvider.on("chainChanged",e=>{console.log("[WalletConnect] Chain changed:",e)}),this.wcProvider.on("disconnect",()=>{console.log("[WalletConnect] Session disconnected"),this.provider=null}))}}t.CheeseSwapWalletConnect=c;const d=new c;t.walletConnectConnector=d},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.fetchingMulticallResults=t.errorFetchingMulticallResults=t.addMulticallListeners=void 0,t.parseCallKey=function(e){const t=e.split("-");if(2!==t.length)throw new Error("Invalid call key: "+e);return{address:t[0],callData:t[1]}},t.removeMulticallListeners=void 0,t.toCallKey=function(e){if(!r.test(e.address))throw new Error("Invalid address: "+e.address);if(!o.test(e.callData))throw new Error("Invalid hex: "+e.callData);return`${e.address}-${e.callData}`},t.updateMulticallResults=void 0;var a=n(36);const r=/^0x[a-fA-F0-9]{40}$/,o=/^0x[a-f0-9]*$/;const i=(0,a.createAction)("multicall/addMulticallListeners");t.addMulticallListeners=i;const l=(0,a.createAction)("multicall/removeMulticallListeners");t.removeMulticallListeners=l;const s=(0,a.createAction)("multicall/fetchingMulticallResults");t.fetchingMulticallResults=s;const c=(0,a.createAction)("multicall/errorFetchingMulticallResults");t.errorFetchingMulticallResults=c;const d=(0,a.createAction)("multicall/updateMulticallResults");t.updateMulticallResults=d},function(e,t,n){"use strict";t.__esModule=!0,t.updateUserSlippageTolerance=t.updateUserExpertMode=t.updateUserDeadline=t.updateUserDarkMode=t.updateMatchesDarkMode=t.unmuteAudio=t.removeSerializedToken=t.removeSerializedPair=t.muteAudio=t.addSerializedToken=t.addSerializedPair=void 0;var a=n(36);const r=(0,a.createAction)("user/updateMatchesDarkMode");t.updateMatchesDarkMode=r;const o=(0,a.createAction)("user/updateUserDarkMode");t.updateUserDarkMode=o;const i=(0,a.createAction)("user/updateUserExpertMode");t.updateUserExpertMode=i;const l=(0,a.createAction)("user/updateUserSlippageTolerance");t.updateUserSlippageTolerance=l;const s=(0,a.createAction)("user/updateUserDeadline");t.updateUserDeadline=s;const c=(0,a.createAction)("user/addSerializedToken");t.addSerializedToken=c;const d=(0,a.createAction)("user/removeSerializedToken");t.removeSerializedToken=d;const u=(0,a.createAction)("user/addSerializedPair");t.addSerializedPair=u;const p=(0,a.createAction)("user/removeSerializedPair");t.removeSerializedPair=p;const m=(0,a.createAction)("user/muteAudio");t.muteAudio=m;const f=(0,a.createAction)("user/unmuteAudio");t.unmuteAudio=f},function(e,t,n){"use strict";t.__esModule=!0,t.useOnClickOutside=function(e,t){const n=(0,a.useRef)(t);(0,a.useEffect)(()=>{n.current=t},[t]),(0,a.useEffect)(()=>{const t=t=>{var a,r;null!==(a=null===(r=e.current)||void 0===r?void 0:r.contains(t.target))&&void 0!==a&&a||n.current&&n.current()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[e])};var a=n(0)},,,function(e,t,n){e.exports=n.p+"static/media/coinbaseWalletIcon.0d3ecc8a.svg"},function(e,t,n){e.exports=n.p+"static/media/walletConnectIcon.9da52dbf.svg"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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yA+hVsU8LKUSt2FbdXdsosqs51y4TbbTUMawbXMK24nBk0zaBCCLvWWWiLYt7WGb4FmDFW5c6Wfgsrc+fG341haOugLiQ9SDl7qyA8AB4siHiMnliEB6zSHE6JqTl2vxU19FHA3kKOUIPY/skWcb8qZmYAtxqZch5Xinqm7TMUyUpqAGnLTH0YHZQnOtHIC+Zxt7lAPbSLkXW1zuUx2Xx2Q3c6tgwrFiWhP7Dze3hzGuC+3zWH1epJfvT4wtxv0rPJ9+/fovDP0bmY+i9mtkzk3trrGdAtEbhr4n5v9H9Iah5yr7MGq/UjKnp/bz+j8htXea2dmo3XM5A6I3DD1LzMdRe11lH0DtpyVzSmq/p/7PQa3lcg5Ebxg6TswHUntVZR9B7Wclc1Jqv6P+z0Kt+Rn6JIjeMHSUmBdqbff/XSnP9dcks/qvqvAPjduYd1RB8ZsAAAABb3JOVAHPoneaAAAAi0lEQVR42u3WQQqAIBBA0Vp4hO7Vwu5/lYIEI7NFVBi9tzJGPrmbrgMAAAAAAAAAAOBp05GYB+N6LaTP5TjkO4s+D+4JBkFBQUFBQcHvBndysBxcCcbNP50H08uGWjAWS1HxVkFBQUFBQcFWg7dvDu/tNhZOQUFBQUHBHwf7yooDAAAAAAAAAABA+2bTiAEuMLZxJQAAAM5lWElmSUkqAAgAAAAKAAABBAABAAAAQAEAAAEBBAABAAAAQAEAAAIBAwADAAAAhgAAABIBAwABAAAAAQAAABoBBQABAAAAjAAAABsBBQABAAAAlAAAACgBAwABAAAAAgAAADEBAgALAAAAnAAAADIBAgAUAAAAqAAAAGmHBAABAAAAvAAAAAAAAAAIAAgACABIAAAAAQAAAEgAAAABAAAAR0lNUCAzLjAuNAAAMjAyNToxMToxNyAxNzo1NDo1MQABAAGgAwABAAAAAQAAAAAAAAC0J452AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0xMi0yN1QxMzo1NTowOSswMDowMF0ga1oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMTItMjdUMTM6NTU6MDkrMDA6MDAsfdPmAAAAGnRFWHRleGlmOkJpdHNQZXJTYW1wbGUAOCwgOCwgOBLtPicAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAACF0RVh0ZXhpZjpEYXRlVGltZQAyMDI1OjExOjE3IDE3OjU0OjUxwGZhoAAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADE4OFtOSrEAAAAUdEVYdGV4aWY6SW1hZ2VMZW5ndGgAMzIwTCuf6QAAABN0RVh0ZXhpZjpJbWFnZVdpZHRoADMyMJ9Xj2QAAAAYdEVYdGV4aWY6U29mdHdhcmUAR0lNUCAzLjAuNP/o9doAAAAbdEVYdGljYzpjb3B5cmlnaHQAUHVibGljIERvbWFpbraRMVsAAAAidEVYdGljYzpkZXNjcmlwdGlvbgBHSU1QIGJ1aWx0LWluIHNSR0JMZ0ETAAAAFXRFWHRpY2M6bWFudWZhY3R1cmVyAEdJTVBMnpDKAAAADnRFWHRpY2M6bW9kZWwAc1JHQltgSUMAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,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"},,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.parseENSAddress=function(e){const t=e.match(a);return t?{ensName:t[1].toLowerCase()+"eth",ensPath:t[3]}:void 0};const a=/^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t,n;switch(e.split(":")[0].toLowerCase()){case"https":return[e];case"http":return["https"+e.substr(4),e];case"ipfs":const a=null===(t=e.match(/^ipfs:(\/\/)?(.*)$/i))||void 0===t?void 0:t[2];return[`https://cloudflare-ipfs.com/ipfs/${a}/`,`https://ipfs.io/ipfs/${a}/`];case"ipns":const r=null===(n=e.match(/^ipns:(\/\/)?(.*)$/i))||void 0===n?void 0:n[2];return[`https://cloudflare-ipfs.com/ipns/${r}/`,`https://ipfs.io/ipns/${r}/`];default:return[]}}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){let{srcs:t,alt:n,...o}=e;const[,l]=(0,a.useState)(0),s=t.find(e=>!i[e]);if(s)return a.default.createElement("img",Object.assign({},o,{alt:n,src:s,onError:()=>{s&&(i[s]=!0),l(e=>e+1)}}));return a.default.createElement(r.HelpCircle,o)};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=n(35);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}const i={}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.SeparatorDark=t.Separator=t.SearchInput=t.PaddedColumn=t.ModalInfo=t.MenuItem=t.FadedSpan=void 0;var r=a(n(14)),o=n(47),i=n(28);const l=r.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  padding: 1rem 1rem;
  margin: 0.25rem 0.5rem;
  justify-content: center;
  flex: 1;
  user-select: none;
`;t.ModalInfo=l;const s=(0,r.default)(i.RowFixed)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  font-size: 14px;
`;t.FadedSpan=s;const c=(0,r.default)(o.AutoColumn)`
  padding: 20px;
`;t.PaddedColumn=c;const d=(0,r.default)(i.RowBetween)`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);
  grid-gap: 16px;
  cursor: ${e=>{let{disabled:t}=e;return!t&&"pointer"}};
  pointer-events: ${e=>{let{disabled:t}=e;return t&&"none"}};
  :hover {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&t.colors.bg2}};
  }
  opacity: ${e=>{let{disabled:t,selected:n}=e;return t||n?.5:1}};
`;t.MenuItem=d;const u=r.default.input`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  border-style: solid;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  -webkit-appearance: none;

  font-size: 18px;

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  }
  transition: border 100ms;
  :focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
    outline: none;
  }
`;t.SearchInput=u;const p=r.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
`;t.Separator=p;const m=r.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
`;t.SeparatorDark=m},,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.updateVersion=void 0;const a=(0,n(36).createAction)("global/updateVersion");t.updateVersion=a},,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.computeSlippageAdjustedAmounts=function(e,t){const n=(0,i.basisPointsToPercent)(t);return{[o.Field.INPUT]:null===e||void 0===e?void 0:e.maximumAmountIn(n),[o.Field.OUTPUT]:null===e||void 0===e?void 0:e.minimumAmountOut(n)}},t.computeTradePriceBreakdown=function(e){const t=e?s.subtract(e.route.pairs.reduce(e=>e.multiply(c),s)):void 0,n=e&&t?e.priceImpact.subtract(t):void 0,a=n?new r.Percent(null===n||void 0===n?void 0:n.numerator,null===n||void 0===n?void 0:n.denominator):void 0,o=t&&e&&(e.inputAmount instanceof r.TokenAmount?new r.TokenAmount(e.inputAmount.token,t.multiply(e.inputAmount.raw).quotient):r.CurrencyAmount.ether(t.multiply(e.inputAmount.raw).quotient));return{priceImpactWithoutFee:a,realizedLPFee:o}},t.formatExecutionPrice=function(e,t){if(!e)return"";return t?`${e.executionPrice.invert().toSignificant(6)} ${e.inputAmount.currency.symbol} / ${e.outputAmount.currency.symbol}`:`${e.executionPrice.toSignificant(6)} ${e.outputAmount.currency.symbol} / ${e.inputAmount.currency.symbol}`},t.warningSeverity=function(e){return null!==e&&void 0!==e&&e.lessThan(a.BLOCKED_PRICE_IMPACT_NON_EXPERT)?null!==e&&void 0!==e&&e.lessThan(a.ALLOWED_PRICE_IMPACT_HIGH)?null!==e&&void 0!==e&&e.lessThan(a.ALLOWED_PRICE_IMPACT_MEDIUM)?null!==e&&void 0!==e&&e.lessThan(a.ALLOWED_PRICE_IMPACT_LOW)?0:1:2:3:4};var a=n(58),r=n(24),o=n(151),i=n(38);const l=new r.Percent(r.JSBI.BigInt(20),r.JSBI.BigInt(1e4)),s=new r.Percent(r.JSBI.BigInt(1e4),r.JSBI.BigInt(1e4)),c=s.subtract(l)},function(e,t,n){"use strict";t.__esModule=!0,t.currencyId=function(e){if(e===a.ETHER)return"ETH";if(e instanceof a.Token)return e.address;throw new Error("invalid currency")};var a=n(24)},function(e,t,n){"use strict";t.__esModule=!0,t.useTotalSupply=function(e){var t,n;const i=(0,r.useTokenContract)(null===e||void 0===e?void 0:e.address,!1),l=null===(t=(0,o.useSingleCallResult)(i,"totalSupply"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return e&&l?new a.TokenAmount(e,l.toString()):void 0};var a=n(24),r=n(73),o=n(96)},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.ConnectorFactory=void 0;var r=a(n(91)),o=n(463),i=n(464),l=n(465),s=n(466),c=n(467),d=n(468),u=n(277),p=n(200),m=n(469),f=n(158);class A{static getConnector(e){const t=this.connectorMap[e];if(!t)throw new Error("Unknown connector: "+e);return t}static async connect(e){console.log("[ConnectorFactory] Connection requested for: "+e);const t=this.getConnector(e);if(!t.isAvailable())throw new f.WalletNotAvailableError(e);return console.log("[ConnectorFactory] Connecting with "+e),await t.connect()}static async autoConnect(){const e=["eip6963","injected","metamask","binance","trustwallet","okxwallet","fantomwallet","coinbasewallet"];for(const a of e){const e=this.getConnector(a);if(e.isAvailable())try{console.log(`[AutoConnect] Trying ${a}...`);return{provider:await e.connect(),connectorId:a}}catch(n){console.error(`[AutoConnect] ${a} failed:`,n);continue}}const t=this.getConnector("walletconnect");if(t.isAvailable())try{console.log("[AutoConnect] Fallback to WalletConnect...");return{provider:await t.connect(),connectorId:"walletconnect"}}catch(n){console.error("[AutoConnect] WalletConnect failed:",n)}throw new Error("No wallet connector available")}static async disconnect(e){const t=this.getConnector(e);await t.disconnect()}static getAvailableConnectors(){return Object.entries(this.connectorMap).map(e=>{let[t,n]=e;return{id:t,name:n.getName(),available:n.isAvailable()}})}static isInjectedWallet(e){return["injected","eip6963","metamask","binance","trustwallet","okxwallet","fantomwallet","coinbasewallet"].includes(e)}static getRecommendedMobileConnector(){const e=["eip6963","injected","metamask","binance","trustwallet","okxwallet","fantomwallet","walletconnect","coinbasewallet"];for(const t of e){if(this.getConnector(t).isAvailable())return t}throw new Error("No wallet connector available for mobile")}static isMobile(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}}t.ConnectorFactory=A,(0,r.default)(A,"connectorMap",{metamask:o.metaMaskConnector,binance:i.binanceWalletConnector,trustwallet:l.trustWalletConnector,okxwallet:s.okxWalletConnector,fantomwallet:c.fantomWalletConnector,injected:d.injectedConnector,eip6963:u.eip6963Connector,walletconnect:p.walletConnectConnector,coinbasewallet:m.coinbaseWalletConnector})},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.eip6963Connector=t.EIP6963Connector=void 0;var r=a(n(91)),o=n(55),i=n(81),l=n(199),s=n(60),c=n(158);class d extends i.BaseWalletConnector{constructor(){super("Discovered Wallet"),(0,r.default)(this,"detail",null),(0,r.default)(this,"rdns",null)}isAvailable(){return l.eip6963Store.getProviders().length>0}getName(){return this.detail?this.detail.info.name:this.walletName}getRdns(){return this.rdns}getInjectedProvider(){return this.detail?this.detail.provider:null}async connect(e){const t=await this.resolveDetail(e);try{const e=await t.provider.request({method:"eth_requestAccounts"});if(!e||0===e.length)throw new Error("No accounts returned from wallet");return this.detail=t,this.rdns=t.info.rdns,this.provider=new o.ethers.providers.Web3Provider(t.provider,"any"),await(0,s.ensureBSCMainnet)(this.provider),console.log(`[EIP6963] Connected to ${t.info.name} (${t.info.rdns})`),this.provider}catch(n){if(this.detail=null,this.rdns=null,this.provider=null,4001===(null===n||void 0===n?void 0:n.code))throw new c.UserRejectedError(t.info.name);throw n}}async eagerConnect(e){const t=await l.eip6963Store.waitForProvider(e);if(!t)return null;try{const e=await t.provider.request({method:"eth_accounts"});return e&&0!==e.length?(this.detail=t,this.rdns=t.info.rdns,this.provider=new o.ethers.providers.Web3Provider(t.provider,"any"),console.log("[EIP6963] Eagerly reconnected to "+t.info.name),this.provider):null}catch(n){return console.warn("[EIP6963] Eager connect failed:",n),null}}async disconnect(){const e=this.detail?this.detail.provider:null;if(this.detail=null,this.rdns=null,this.provider=null,e&&"function"===typeof e.request)try{await e.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})}catch{}}async resolveDetail(e){if(e){const t=await l.eip6963Store.waitForProvider(e);if(!t)throw new Error(`Wallet ${e} is not available. Make sure the extension is installed and enabled.`);return t}const t=l.eip6963Store.getProviders();if(0===t.length)throw new Error("No EIP-6963 wallets discovered");return t[0]}}t.EIP6963Connector=d;const u=new d;t.eip6963Connector=u},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=t.ERC20_BYTES32_INTERFACE=void 0;var r=n(355),o=a(n(308));t.ERC20_ABI=o.default;var i=a(n(594));t.ERC20_BYTES32_ABI=i.default;const l=new r.Interface(o.default),s=new r.Interface(i.default);t.ERC20_BYTES32_INTERFACE=s;var c=l;t.default=c},function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.MouseoverTooltip=function(e){let{children:t,...n}=e;const[a,o]=(0,r.useState)(!1),i=(0,r.useCallback)(()=>o(!0),[o]),l=(0,r.useCallback)(()=>o(!1),[o]);return r.default.createElement(c,Object.assign({},n,{show:a}),r.default.createElement("div",{onMouseEnter:i,onMouseLeave:l},t))},t.default=c;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=a(n(14)),i=a(n(606));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}const s=o.default.div`
  width: 228px;
  padding: 0.6rem 1rem;
  line-height: 150%;
  font-weight: 600;
`;function c(e){let{text:t,...n}=e;return r.default.createElement(i.default,Object.assign({content:r.default.createElement(s,null,t)},n))}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=(0,a.useRef)();(0,a.useEffect)(()=>{r.current=e},[e]),(0,a.useEffect)(()=>{function e(){const e=r.current;e&&e()}if(null!==t){n&&e();const a=setInterval(e,t);return()=>clearInterval(a)}},[t,n])};var a=n(0)},function(e,t,n){"use strict";t.__esModule=!0,t.TranslationsContext=void 0;const a=(0,n(0).createContext)({translations:[],setTranslations:()=>{}});t.TranslationsContext=a},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const[t,n]=(0,a.useState)(e),r=(0,a.useCallback)(()=>n(e=>!e),[]);return[t,r]};var a=n(0)},function(e,t,n){e.exports=n.p+"static/media/binance.c3ca4c22.svg"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n,a;const u=(0,d.default)(e,200),p=(0,o.useMemo)(()=>{if(!u||!(0,l.isAddress)(u))return[void 0];try{return u?[(0,r.namehash)(u.toLowerCase().substr(2)+".addr.reverse")]:[void 0]}catch(e){return[void 0]}},[u]),m=(0,c.useENSRegistrarContract)(!1),f=(0,i.useSingleCallResult)(m,"resolver",p),A=null===(t=f.result)||void 0===t?void 0:t[0],h=(0,c.useENSResolverContract)(A&&!(0,s.default)(A)?A:void 0,!1),b=(0,i.useSingleCallResult)(h,"name",p),g=u!==e;return{ENSName:g?null:null!==(n=null===(a=b.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:g||f.loading||b.loading}};var r=n(173),o=n(0),i=n(96),l=n(38),s=a(n(194)),c=n(73),d=a(n(175))},,function(e,t,n){"use strict";n.r(t),n.d(t,"ReactComponent",(function(){return c}));var a,r,o=n(0),i=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=e=>{let{svgRef:t,title:n,...o}=e;return i.a.createElement("svg",l({width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"feather feather-x",viewBox:"0 0 20 20",ref:t},o),n?i.a.createElement("title",null,n):null,a||(a=i.a.createElement("line",{x1:18,x2:6,y1:6,y2:18})),r||(r=i.a.createElement("line",{x1:6,x2:18,y1:6,y2:18})))},c=i.a.forwardRef((e,t)=>i.a.createElement(s,l({svgRef:t},e)));t.default=n.p+"static/media/x.93df88f8.svg"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{link:t=null,clickable:n=!0,size:a,onClick:o=null,color:i,header:s,subheader:d=null,icon:u,active:p=!1,id:A,statusLabel:v="",tooltip:w=""}=e;const C=r.default.createElement(f,{id:A,onClick:o,clickable:n&&!p,active:p,role:"button","aria-pressed":p,"aria-label":"string"===typeof s?s:void 0,tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||!o||(e.preventDefault(),o())}},r.default.createElement(m,null,r.default.createElement(g,{color:i},p?r.default.createElement(b,null,r.default.createElement(h,null,r.default.createElement("div",null))):"",s,w&&r.default.createElement("span",{style:{marginLeft:6,cursor:"pointer"},title:w,"aria-label":w},r.default.createElement(c,{size:16}))),d&&r.default.createElement(y,null,d),v&&r.default.createElement("div",{style:{fontSize:"0.7em",color:"#888",marginTop:2}},v)),r.default.createElement(E,{size:a},r.default.createElement("img",{src:u,alt:"string"===typeof s?s+" icon":"Wallet icon"})));if(t)return r.default.createElement(l.ExternalLink,{href:t},C);return C};var r=a(n(0)),o=n(825),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(14)),l=n(34);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}const c=o.AiOutlineInfoCircle,d=i.keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,u=i.default.button`
  background: ${e=>{let{theme:t,active:n}=e;return n?`linear-gradient(135deg, ${t.colors.primary1}12 0%, ${t.colors.primary1}05 100%)`:t.colors.bg2}};
  padding: 0.65rem;
  outline: none;
  border: 1px solid;
  border-radius: 10px;
  width: 100%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${d} 0.3s ease-out;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, ${e=>{let{theme:t}=e;return t.colors.primary1}}05 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:focus {
    box-shadow: none !important;
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
  
  border-color: ${e=>{let{theme:t,active:n}=e;return n?t.colors.primary1:t.colors.bg3}}40;
`,p=(0,i.default)(u)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 104px;
  margin-top: 0;
  padding: 0.75rem 0.625rem;
  text-align: center;
  gap: 0.375rem;
  
  &:first-child {
    margin-top: 0;
  }
`,m=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  height: 100%;
`,f=(0,i.default)(p)`
  margin-top: 0;
  cursor: ${e=>{let{clickable:t}=e;return t?"pointer":"default"}};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${e=>{let{theme:t,active:n}=e;return n?`linear-gradient(135deg, ${t.colors.primary1}18 0%, ${t.colors.primary1}08 100%)`:`linear-gradient(180deg, ${t.colors.bg2} 0%, ${t.colors.bg1} 100%)`}};
  
  &:hover {
    ${e=>{let{clickable:t,theme:n}=e;return t&&`\n      border-color: ${n.colors.primary1}80;\n      transform: translateY(-1px);\n      box-shadow: none !important;\n      \n      &::before {\n        opacity: 1;\n      }\n    `}}
  }
  
  &:active {
    ${e=>{let{clickable:t}=e;return t&&"\n      transform: translateY(0);\n    "}}
  }
  
  opacity: ${e=>{let{disabled:t}=e;return t?"0.5":"1"}};
  pointer-events: ${e=>{let{disabled:t}=e;return t?"none":"auto"}};
`,A=i.keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`,h=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  justify-content: center;
  align-items: center;

  &:first-child {
    height: 6.5px;
    width: 6.5px;
    margin-right: 6px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.green1}};
    border-radius: 50%;
    box-shadow: none !important;
    animation: ${A} 2s ease-in-out infinite;
  }
`,b=i.default.div`
  color: ${e=>{let{theme:t}=e;return t.colors.green1}};
  display: flex;
  justify-content: center;
  align-items: center;
`,g=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: center;
  color: ${e=>"blue"===e.color?e=>{let{theme:t}=e;return t.colors.primary1}:e=>{let{theme:t}=e;return t.colors.text1}};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`,y=i.default.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  margin-top: 0.25rem;
  font-size: 0.6375rem;
  line-height: 1.4;
  font-weight: 400;
`,E=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  order: -1;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  border-radius: 12px;
  padding: 0.375rem;
  transition: all 0.2s ease;
  
  & > img,
  span {
    height: ${e=>{let{size:t}=e;return t?t+"px":"36px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"36px"}};
    object-fit: contain;
  }
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    align-items: center;
    padding: 0.2rem;
    
    & > img,
    span {
      height: 20px;
      width: 20px;
    }
  `}};
`},,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflAhQSJDoHoPwzAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTIwVDE4OjM2OjQ0KzAwOjAwmMmasAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0yMFQxODozNjo0NCswMDowMOmUIgwAAAAASUVORK5CYII="},function(e,t,n){e.exports=n.p+"static/media/blue-loader.a927ef39.svg"},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return`v${e.major}.${e.minor}.${e.patch}`}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n,a,L,j,V,z,Y,Q,K;let{match:{params:{currencyIdA:G,currencyIdB:H}},history:Z}=e;const{account:q,chainId:X,library:J}=(0,w.useActiveWeb3React)(),_=(0,i.useContext)(l.ThemeContext),$=(0,C.useCurrency)(G),ee=(0,C.useCurrency)(H),te=Boolean(X&&($&&(0,o.currencyEquals)($,o.WETH[X])||ee&&(0,o.currencyEquals)(ee,o.WETH[X]))),ne=(0,B.useWalletModalToggle)(),ae=(0,I.useIsExpertMode)(),{independentField:re,typedValue:oe,otherTypedValue:ie}=(0,T.useMintState)(),{dependentField:le,currencies:se,pair:ce,pairState:de,currencyBalances:ue,parsedAmounts:pe,price:me,noLiquidity:fe,liquidityMinted:Ae,poolTokenPercentage:he,error:be}=(0,T.useDerivedMintInfo)(null!==$&&void 0!==$?$:void 0,null!==ee&&void 0!==ee?ee:void 0),{onFieldAInput:ge,onFieldBInput:ye}=(0,T.useMintActionHandlers)(fe),Ee=!be,[ve,we]=(0,i.useState)(!1),[Ce,xe]=(0,i.useState)(!1),[Be]=(0,I.useUserDeadline)(),[ke]=(0,I.useUserSlippageTolerance)(),[Te,De]=(0,i.useState)(""),Ie={[re]:oe,[le]:fe?ie:null!==(t=null===(n=pe[le])||void 0===n?void 0:n.toSignificant(6))&&void 0!==t?t:""},Fe=[k.Field.CURRENCY_A,k.Field.CURRENCY_B].reduce((e,t)=>({...e,[t]:(0,S.maxAmountSpend)(ue[t])}),{}),Pe=[k.Field.CURRENCY_A,k.Field.CURRENCY_B].reduce((e,t)=>{var n,a;return{...e,[t]:null===(n=Fe[t])||void 0===n?void 0:n.equalTo(null!==(a=pe[t])&&void 0!==a?a:"0")}},{}),[Se,Me]=(0,x.useApproveCallback)(pe[k.Field.CURRENCY_A],E.ROUTER_ADDRESS),[Re,Ne]=(0,x.useApproveCallback)(pe[k.Field.CURRENCY_B],E.ROUTER_ADDRESS),We=(0,D.useTransactionAdder)();async function Ue(){if(!X||!J||!q)return;const e=(0,P.getRouterContract)(X,J,q),{[k.Field.CURRENCY_A]:t,[k.Field.CURRENCY_B]:n}=pe;if(!t||!n||!$||!ee)return;const a={[k.Field.CURRENCY_A]:(0,P.calculateSlippageAmount)(t,fe?0:ke)[0],[k.Field.CURRENCY_B]:(0,P.calculateSlippageAmount)(n,fe?0:ke)[0]},i=Math.ceil(Date.now()/1e3)+Be;let l,s,d,u;if($===o.ETHER||ee===o.ETHER){var p,m;const c=ee===o.ETHER;l=e.estimateGas.addLiquidityETH,s=e.addLiquidityETH,d=[null!==(p=null===(m=(0,M.wrappedCurrency)(c?$:ee,X))||void 0===m?void 0:m.address)&&void 0!==p?p:"",(c?t:n).raw.toString(),a[c?k.Field.CURRENCY_A:k.Field.CURRENCY_B].toString(),a[c?k.Field.CURRENCY_B:k.Field.CURRENCY_A].toString(),q,i],u=r.BigNumber.from((c?n:t).raw.toString())}else{var f,A,h,b;l=e.estimateGas.addLiquidity,s=e.addLiquidity,d=[null!==(f=null===(A=(0,M.wrappedCurrency)($,X))||void 0===A?void 0:A.address)&&void 0!==f?f:"",null!==(h=null===(b=(0,M.wrappedCurrency)(ee,X))||void 0===b?void 0:b.address)&&void 0!==h?h:"",t.raw.toString(),n.raw.toString(),a[k.Field.CURRENCY_A].toString(),a[k.Field.CURRENCY_B].toString(),q,i],u=null}xe(!0),await l(...d,u?{value:u}:{}).then(e=>s(...d,{...u?{value:u}:{},gasLimit:(0,P.calculateGasMargin)(e)}).then(e=>{var t,n,a,r,o,i;xe(!1),We(e,{summary:"Add "+(null===(t=pe[k.Field.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3))+" "+(null===(n=se[k.Field.CURRENCY_A])||void 0===n?void 0:n.symbol)+" and "+(null===(a=pe[k.Field.CURRENCY_B])||void 0===a?void 0:a.toSignificant(3))+" "+(null===(r=se[k.Field.CURRENCY_B])||void 0===r?void 0:r.symbol)}),De(e.hash),c.default.event({category:"Liquidity",action:"Add",label:[null===(o=se[k.Field.CURRENCY_A])||void 0===o?void 0:o.symbol,null===(i=se[k.Field.CURRENCY_B])||void 0===i?void 0:i.symbol].join("/")})})).catch(e=>{console.log(e),xe(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)})}const Oe=()=>{var e,t,n,a;return fe?i.default.createElement(m.AutoColumn,{gap:"20px"},i.default.createElement(p.LightCard,{mt:"20px",borderRadius:"20px"},i.default.createElement(y.RowFlat,null,i.default.createElement(d.Text,{fontSize:"48px",fontWeight:700,lineHeight:"42px",marginRight:10},(null===(e=se[k.Field.CURRENCY_A])||void 0===e?void 0:e.symbol)+"/"+(null===(t=se[k.Field.CURRENCY_B])||void 0===t?void 0:t.symbol)),i.default.createElement(h.default,{currency0:se[k.Field.CURRENCY_A],currency1:se[k.Field.CURRENCY_B],size:30})))):i.default.createElement(m.AutoColumn,{gap:"20px"},i.default.createElement(y.RowFlat,{style:{marginTop:"20px"}},i.default.createElement(d.Text,{fontSize:"48px",fontWeight:700,lineHeight:"42px",marginRight:10},null===Ae||void 0===Ae?void 0:Ae.toSignificant(6)),i.default.createElement(h.default,{currency0:se[k.Field.CURRENCY_A],currency1:se[k.Field.CURRENCY_B],size:30})),i.default.createElement(y.default,null,i.default.createElement(d.Text,{fontSize:"24px"},(null===(n=se[k.Field.CURRENCY_A])||void 0===n?void 0:n.symbol)+"/"+(null===(a=se[k.Field.CURRENCY_B])||void 0===a?void 0:a.symbol)+" Pool Tokens")),i.default.createElement(F.TYPE.Italic,{fontSize:12,textAlign:"left",padding:"8px 0 0 0 "},`Output is estimated. If the price changes by more than ${ke/100}% your transaction will revert.`))},Le=()=>i.default.createElement(W.ConfirmAddModalBottom,{price:me,currencies:se,parsedAmounts:pe,noLiquidity:fe,onAdd:Ue,poolTokenPercentage:he}),je=`Supplying ${null===(a=pe[k.Field.CURRENCY_A])||void 0===a?void 0:a.toSignificant(6)} ${null===(L=se[k.Field.CURRENCY_A])||void 0===L?void 0:L.symbol} and ${null===(j=pe[k.Field.CURRENCY_B])||void 0===j?void 0:j.toSignificant(6)} ${null===(V=se[k.Field.CURRENCY_B])||void 0===V?void 0:V.symbol}`,Ve=(0,i.useCallback)(e=>{const t=(0,U.currencyId)(e);t===H?Z.push(`/add/${H}/${G}`):Z.push(`/add/${t}/${H}`)},[H,Z,G]),ze=(0,i.useCallback)(e=>{const t=(0,U.currencyId)(e);G===t?H?Z.push(`/add/${H}/${t}`):Z.push("/add/"+t):Z.push(`/add/${G||"ETH"}/${t}`)},[G,Z,H]),Ye=(0,i.useCallback)(()=>{we(!1),Te&&ge(""),De("")},[ge,Te]),Qe=l.default.div`
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
  `,Ke=l.default.div`
    width: 100%;
    max-width: 460px;
    flex-shrink: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
      max-width: 100%;
    `}}
  `;return i.default.createElement(i.default.Fragment,null,i.default.createElement(Qe,{showChart:!1},i.default.createElement(Ke,null,i.default.createElement(R.default,null,i.default.createElement(b.AddRemoveTabs,{adding:!0}),i.default.createElement(N.Wrapper,null,i.default.createElement(f.default,{isOpen:ve,onDismiss:Ye,attemptingTxn:Ce,hash:Te,content:()=>i.default.createElement(f.ConfirmationModalContent,{title:fe?"You are creating a pool":"You will receive",onDismiss:Ye,topContent:Oe,bottomContent:Le}),pendingText:je}),i.default.createElement(m.AutoColumn,{gap:"20px"},fe&&i.default.createElement(m.ColumnCenter,null,i.default.createElement(p.BlueCard,null,i.default.createElement(m.AutoColumn,{gap:"10px"},i.default.createElement(F.TYPE.Link,{fontWeight:600,color:"primaryText1"},"You are the first liquidity provider."),i.default.createElement(F.TYPE.Link,{fontWeight:600,color:"primaryText1"},"The ratio of tokens you add will set the price of this pool."),i.default.createElement(F.TYPE.Link,{fontWeight:600,color:"primaryText1"},"Once you are happy with the rate click supply to review.")))),i.default.createElement(A.default,{value:Ie[k.Field.CURRENCY_A],onUserInput:ge,onMax:()=>{var e,t;ge(null!==(e=null===(t=Fe[k.Field.CURRENCY_A])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},onCurrencySelect:Ve,showMaxButton:!Pe[k.Field.CURRENCY_A],currency:se[k.Field.CURRENCY_A],id:"add-liquidity-input-tokena",showCommonBases:!1}),i.default.createElement(m.ColumnCenter,null,i.default.createElement(s.Plus,{size:"16",color:_.colors.text2})),i.default.createElement(A.default,{value:Ie[k.Field.CURRENCY_B],onUserInput:ye,onCurrencySelect:ze,onMax:()=>{var e,t;ye(null!==(e=null===(t=Fe[k.Field.CURRENCY_B])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showMaxButton:!Pe[k.Field.CURRENCY_B],currency:se[k.Field.CURRENCY_B],id:"add-liquidity-input-tokenb",showCommonBases:!1}),se[k.Field.CURRENCY_A]&&se[k.Field.CURRENCY_B]&&de!==v.PairState.INVALID&&i.default.createElement(i.default.Fragment,null,i.default.createElement(p.GreyCard,{padding:"0px",borderRadius:"20px"},i.default.createElement(y.RowBetween,{padding:"1rem"},i.default.createElement(F.TYPE.SubHeader,{fontWeight:700,fontSize:16},fe?"Initial prices":"Prices"," and pool share"))," ",i.default.createElement(p.LightCard,{padding:"1rem",borderRadius:"20px"},i.default.createElement(O.PoolPriceBar,{currencies:se,poolTokenPercentage:he,noLiquidity:fe,price:me})))),q?i.default.createElement(m.AutoColumn,{gap:"md"},(Se===x.ApprovalState.NOT_APPROVED||Se===x.ApprovalState.PENDING||Re===x.ApprovalState.NOT_APPROVED||Re===x.ApprovalState.PENDING)&&Ee&&i.default.createElement(y.RowBetween,null,Se!==x.ApprovalState.APPROVED&&i.default.createElement(u.ButtonPrimary,{onClick:Me,disabled:Se===x.ApprovalState.PENDING,width:Re!==x.ApprovalState.APPROVED?"48%":"100%"},Se===x.ApprovalState.PENDING?i.default.createElement(N.Dots,null,"Approving ",null===(z=se[k.Field.CURRENCY_A])||void 0===z?void 0:z.symbol):"Approve "+(null===(Y=se[k.Field.CURRENCY_A])||void 0===Y?void 0:Y.symbol)),Re!==x.ApprovalState.APPROVED&&i.default.createElement(u.ButtonPrimary,{onClick:Ne,disabled:Re===x.ApprovalState.PENDING,width:Se!==x.ApprovalState.APPROVED?"48%":"100%"},Re===x.ApprovalState.PENDING?i.default.createElement(N.Dots,null,"Approving ",null===(Q=se[k.Field.CURRENCY_B])||void 0===Q?void 0:Q.symbol):"Approve "+(null===(K=se[k.Field.CURRENCY_B])||void 0===K?void 0:K.symbol))),i.default.createElement(u.ButtonError,{onClick:()=>{ae?Ue():we(!0)},disabled:!Ee||Se!==x.ApprovalState.APPROVED||Re!==x.ApprovalState.APPROVED,error:!Ee&&!!pe[k.Field.CURRENCY_A]&&!!pe[k.Field.CURRENCY_B]},i.default.createElement(d.Text,{fontSize:20,fontWeight:700},null!==be&&void 0!==be?be:"Supply"))):i.default.createElement(u.ButtonLight,{onClick:ne},"Connect Wallet"))))),ce&&!fe&&de!==v.PairState.INVALID?i.default.createElement(m.AutoColumn,{style:{minWidth:"27rem",marginTop:"1rem"}},i.default.createElement(g.MinimalPositionCard,{showUnwrapped:te,pair:ce})):null))};var r=n(106),o=n(24),i=j(n(0)),l=j(n(14)),s=n(35),c=a(n(74)),d=n(40),u=n(72),p=n(192),m=n(47),f=j(n(381)),A=a(n(383)),h=a(n(195)),b=n(377),g=n(379),y=j(n(28)),E=n(58),v=n(193),w=n(22),C=n(113),x=n(384),B=n(68),k=n(143),T=n(778),D=n(150),I=n(90),F=n(34),P=n(38),S=n(393),M=n(114),R=a(n(378)),N=n(386),W=n(793),U=n(257),O=n(794);function L(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(L=function(e){return e?n:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=L(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){const t=(0,r.useMemo)(()=>e?(0,i.parseENSAddress)(e):void 0,[e]),n=(0,s.default)(null===t||void 0===t?void 0:t.ensName);return(0,r.useMemo)(()=>t?n.contenthash?(0,l.default)((0,o.default)(n.contenthash)):[]:e?(0,l.default)(e):[],[t,n.contenthash,e])};var r=n(0),o=a(n(329)),i=n(235),l=a(n(236)),s=a(n(728))},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){const t=l(e),n=(0,o.getCodec)(t);switch(n){case"ipfs-ns":{const e=(0,o.rmPrefix)(t),n=new r.default(e);return"ipfs://"+(0,i.toB58String)(n.multihash)}case"ipns-ns":{const e=(0,o.rmPrefix)(t),n=new r.default(e),a=(0,i.decode)(n.multihash);return"identity"===a.name?"ipns://"+s.decode(a.digest).trim():"ipns://"+(0,i.toB58String)(n.multihash)}default:throw new Error("Unrecognized codec: "+n)}},t.hexToUint8Array=l;var r=a(n(691)),o=n(707),i=n(715);function l(e){if((e=e.startsWith("0x")?e.substr(2):e).length%2!==0)throw new Error("hex must have length that is multiple of 2");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(2*n,2),16);return t}const s=new TextDecoder},,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{logoURI:t,style:n,size:a="24px",alt:o}=e;const l=(0,i.default)(t);return r.default.createElement(s,{alt:o,size:a,srcs:l,style:n})};var r=a(n(0)),o=a(n(14)),i=a(n(328)),l=a(n(237));const s=(0,o.default)(l.default)`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`},function(e,t,n){"use strict";n.r(t),n.d(t,"ReactComponent",(function(){return s}));var a,r=n(0),o=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const l=e=>{let{svgRef:t,title:n,...r}=e;return o.a.createElement("svg",i({width:12,height:7,fill:"none",viewBox:"0 0 12 7",ref:t},r),n?o.a.createElement("title",null,n):null,a||(a=o.a.createElement("path",{stroke:"#AEAEAE",d:"M0.97168 1L6.20532 6L11.439 1"})))},s=o.a.forwardRef((e,t)=>o.a.createElement(l,i({svgRef:t},e)));t.default=n.p+"static/media/dropdown.32b15d66.svg"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.useFetchListCallback=function(){const{chainId:e,library:t}=(0,p.useActiveWeb3React)(),n=(0,l.useDispatch)(),a=(0,i.useCallback)(n=>{if(!t||e!==o.ChainId.MAINNET){if(s.CHAIN_ID===o.ChainId.MAINNET){const e=(0,s.getNetworkLibrary)();if(e)return(0,u.default)(n,e)}throw new Error("Could not construct mainnet ENS resolver")}return(0,u.default)(n,t)},[e,t]);return(0,i.useCallback)(async e=>{const t=(0,r.nanoid)();return n(c.fetchTokenList.pending({requestId:t,url:e})),(0,d.default)(e,a).then(a=>(n(c.fetchTokenList.fulfilled({url:e,tokenList:a,requestId:t})),a)).catch(a=>{throw console.debug("Failed to get list at url "+e,a),n(c.fetchTokenList.rejected({url:e,requestId:t,errorMessage:a.message})),a})},[n,a])};var r=n(36),o=n(24),i=n(0),l=n(39),s=n(138),c=n(142),d=a(n(739)),u=a(n(775)),p=n(22)},,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.DEFAULT_TOKEN_LIST_URL=t.DEFAULT_LIST_OF_LISTS=void 0;t.DEFAULT_TOKEN_LIST_URL="cheeseswap";const a=["cheeseswap"];t.DEFAULT_LIST_OF_LISTS=a},function(e){e.exports=JSON.parse('{"name":"cheeseswap","timestamp":"2026-01-21T14:12:22.056445Z","version":{"major":2,"minor":0,"patch":1},"tags":{},"logoURI":"https://bafybeidibc2ybtnrmr6plm5rbyjjqkitlgl5uk6xz72e7l35urvgq4i3ve.ipfs.dweb.link/","keywords":["cheeseeswap","default"],"tokens":[{"address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","name":"Wrapped BNB","website":"https://binance.org","description":"As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction","explorer":"https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","research":"https://research.binance.com/en/projects/bnb","type":"BEP20","symbol":"WBNB","decimals":18,"status":"active","id":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","tags":["wrapped"],"chainId":56},{"address":"0xaDD8A06fd58761A5047426e160B2B88AD3B9D464","name":"cheesemaker.farm","website":"https://cheeseswap.app/","description":"EVM Based Token Swap AMM Dex Platform.","explorer":"https://bscscan.com/token/0xaDD8A06fd58761A5047426e160B2B88AD3B9D464","type":"BEP20","symbol":"CHS","decimals":18,"status":"active","id":"0xaDD8A06fd58761A5047426e160B2B88AD3B9D464","links":[{"name":"github","url":"https://github.com/cheeseswapbsc/"},{"name":"x","url":"https://x.com/cheeseswapbsc"},{"name":"discord","url":"https://discord.gg/KeFQnRmyW8"}],"chainId":56},{"address":"0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB","name":"PizzaSwap","website":"https://pizzafinance.app/","description":"PIZZA is the Best Modern Yield Farm on Binance Smart Chain.","explorer":"https://bscscan.com/token/0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb","type":"BEP20","symbol":"PIZZA","decimals":18,"status":"active","id":"0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB","links":[{"name":"github","url":"https://github.com/pizzafinancebsc"},{"name":"x","url":"https://x.com/Pizza_Finance"},{"name":"telegram","url":"https://t.me/PizzaFinance"}],"chainId":56},{"address":"0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81","name":"Keep3r BSC Network","website":"https://keep3rb.network","description":"Keep3r BSC Network is First Decentralized Keeper Network Project on Binance Smart Chain. KP3RB token is fully democratic governance dapp.","explorer":"https://bscscan.com/token/0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81","type":"BEP20","symbol":"KP3RB","decimals":18,"status":"active","id":"0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81","links":[{"name":"github","url":"https://github.com/keep3rb-network"}],"chainId":56},{"address":"0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4","symbol":"MANGO","decimals":18,"name":"Mango Farm","chainId":56},{"address":"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c","name":"Binance-Peg Bitcoin","type":"BEP20","symbol":"BTC","decimals":18,"website":"https://bitcoin.org/","description":"Binance-Peg BTC mirrors the value of Bitcoin (BTC) on BNB Chain, backed 1:1 by BTC held in reserve.","explorer":"https://bscscan.com/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","status":"active","id":"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c","chainId":56},{"address":"0x793766efcA4CEF8c55EE950E759AD6FF73D49c09","symbol":"HOTS","decimals":18,"name":"Hot Sausage","chainId":56},{"address":"0x280Ee39670F5b353A0d31AbECD0665138CF2eE47","symbol":"KIWI","decimals":18,"name":"Kiwi Token","chainId":56},{"address":"0x55d398326f99059fF775485246999027B3197955","name":"Tether USD","website":"https://tether.to","description":"Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable","explorer":"https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955","research":"","type":"BEP20","symbol":"USDT","decimals":18,"status":"active","id":"0x55d398326f99059fF775485246999027B3197955","tags":["stablecoin"],"links":[{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/tether/"}],"chainId":56},{"address":"0xCC42724C6683B7E57334c4E856f4c9965ED682bD","name":"Matic Token","symbol":"MATIC","type":"BEP20","decimals":18,"description":"Matic Network is a layer-2 scaling solution that uses sidechains for off-chain computation while ensuring asset security using Plasma framework","website":"https://matic.network/","explorer":"https://bscscan.com/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd","status":"active","id":"0xCC42724C6683B7E57334c4E856f4c9965ED682bD","chainId":56},{"address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","name":"BNB pegged BUSD","website":"https://paxos.com/busd","description":"BNB pegged BUSD (BUSD BEP20) is a token issued by Binance on Smart Chain; its price is pegged to BUSD","explorer":"https://bscscan.com/token/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","research":"https://research.binance.com/en/projects/binance-usd","type":"BEP20","symbol":"BUSD","decimals":18,"status":"active","id":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/binance-chain/"},{"name":"x","url":"https://x.com/binance_dex"},{"name":"telegram","url":"https://t.me/BinanceDEXchange"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/binance-usd/"}],"chainId":56},{"address":"0x0000028a2eB8346cd5c0267856aB7594B7a55308","name":"Zeta","type":"BEP20","symbol":"ZETA","decimals":18,"website":"https://www.zetachain.com/","description":"ZetaChain is a public, decentralized blockchain and smart contract platform that enables message passing and value transfer between any blockchain.","explorer":"https://bscscan.com/token/0x0000028a2eb8346cd5c0267856ab7594b7a55308","status":"active","id":"0x0000028a2eB8346cd5c0267856aB7594B7a55308","links":[{"name":"x","url":"https://x.com/zetablockchain"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/zetachain/"}],"chainId":56},{"address":"0x0173295183685F27C84db046B5F0bea3e683c24b","name":"Cat","type":"BEP20","symbol":"CAT","decimals":18,"website":"https://www.catcattoken.com/","description":"Cat carries the important task of future digital currency connection, and DAO is our purpose.Our goal is to have a","explorer":"https://bscscan.com/token/0x0173295183685f27c84db046b5f0bea3e683c24b","status":"active","id":"0x0173295183685F27C84db046B5F0bea3e683c24b","links":[{"name":"x","url":"https://x.com/Cat_CAT_Token"},{"name":"telegram","url":"https://t.me/CatToken_Global"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/cat-cat-token/"}],"tags":["memes"],"chainId":56},{"address":"0x01db446F7C6d20ce1FcA421B4397dA789fbb21F1","name":"Doge King","type":"BEP20","symbol":"DOGEK","decimals":18,"website":"https://dogekingtoken.com","description":"Doge King is a MEME & Self Solvent Token on #BSC inspired by #DOGE Coin. Its completely based on decentralized","explorer":"https://bscscan.com/token/0x01db446F7C6d20ce1FcA421B4397dA789fbb21F1","status":"active","id":"0x01db446F7C6d20ce1FcA421B4397dA789fbb21F1","links":[{"name":"x","url":"https://x.com/dogekingbsc"},{"name":"github","url":"https://github.com/dogekingbsc"},{"name":"telegram","url":"https://t.me/dogekingen"}],"chainId":56},{"address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","name":"BNB pegged Ethereum","website":"https://ethereum.org/","description":"BNB pegged Ethereum (ETH BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Ethereum","explorer":"https://bscscan.com/token/0x2170Ed0880ac9A755fd29B2688956BD959F933F8","research":"https://research.binance.com/en/projects/ethereum","type":"BEP20","symbol":"ETH","decimals":18,"status":"active","id":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/ethereum/ethereum-org-website"},{"name":"x","url":"https://x.com/ethdotorg"},{"name":"discord","url":"https://discord.com/invite/CetY6Y4"}],"chainId":56},{"address":"0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE","name":"BNB pegged XRP Token","website":"https://ripple.com/xrp","description":"BNB pegged XRP Token (XRP BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE","research":"https://research.binance.com/en/projects/xrp","type":"BEP20","symbol":"XRP","decimals":18,"status":"active","id":"0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE","tags":["binance-peg"],"links":[{"name":"x","url":"https://x.com/Ripple"}],"chainId":56},{"address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","name":"BNB pegged USD Coin","website":"https://www.centre.io","description":"BNB pegged USD Coin (USD BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","research":"https://research.binance.com/en/projects/usd-coin","type":"BEP20","symbol":"USDC","decimals":18,"status":"active","id":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","tags":["binance-peg","stablecoin"],"links":[{"name":"github","url":"https://github.com/centrehq"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/usd-coin/"}],"chainId":56},{"address":"0xbA2aE424d960c26247Dd6c32edC70B295c744C43","name":"BNB pegged Dogecoin","website":"https://dogecoin.com/","description":"BNB pegged Dogecoin (DOGE BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Dogecoin","explorer":"https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43","research":"https://research.binance.com/en/projects/dogecoin","type":"BEP20","symbol":"DOGE","decimals":8,"status":"active","id":"0xbA2aE424d960c26247Dd6c32edC70B295c744C43","tags":["binance-peg","memes"],"chainId":56},{"address":"0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47","name":"BNB pegged Cardano Token","website":"https://cardano.org","description":"BNB pegged Cardano Token (ADA BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47","research":"https://research.binance.com/en/projects/cardano","type":"BEP20","symbol":"ADA","decimals":18,"status":"active","id":"0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47","tags":["binance-peg"],"chainId":56},{"address":"0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf","name":"BNB pegged Bitcoin Cash Token","website":"https://bitcoincash.org","description":"Bitcoin ABC is an electronic cash platform that allows peer-to-peer online cash payments. It is a fork (a copy in","explorer":"https://bscscan.com/token/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf","research":"https://research.binance.com/en/projects/bitcoin-cash","type":"BEP20","symbol":"BCH","decimals":18,"status":"active","id":"0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf","chainId":56},{"address":"0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD","name":"BNB pegged ChainLink","website":"https://chain.link","description":"BNB pegged ChainLink (LINK BEP20) is a token issued by Binance on Smart Chain; its price is pegged to ChainLink","explorer":"https://bscscan.com/token/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD","research":"https://research.binance.com/en/projects/chainlink","type":"BEP20","symbol":"LINK","decimals":18,"status":"active","id":"0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD","tags":["binance-peg","defi"],"chainId":56},{"address":"0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb","name":"BNB pegged Zcash Token","website":"https://z.cash","description":"BNB pegged Zcash Token (ZEC BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb","research":"https://research.binance.com/en/projects/zcash","type":"BEP20","symbol":"ZEC","decimals":18,"status":"active","id":"0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb","tags":["binance-peg"],"chainId":56},{"address":"0x4338665CBB7B2485A8855A139b75D5e34AB0DB94","name":"BNB pegged Litecoin Token","website":"https://litecoin.org/","description":"BNB pegged Litecoin Token (LTC BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94","research":"https://research.binance.com/en/projects/litecoin","type":"BEP20","symbol":"LTC","decimals":18,"status":"active","id":"0x4338665CBB7B2485A8855A139b75D5e34AB0DB94","tags":["binance-peg"],"chainId":56},{"address":"0x1CE0c2827e2eF14D5C4f29a091d735A204794041","name":"Binance-Peg Avalanche Token","website":"http://avax.network","description":"Avalanche is an open-source platform for launching Decentralized Finance (DeFi) applications and enterprise blockchain deployments in an interoperable, highly scalable","explorer":"https://bscscan.com/token/0x1CE0c2827e2eF14D5C4f29a091d735A204794041","research":"https://research.binance.com/en/projects/avalanche","symbol":"AVAX","type":"BEP20","decimals":18,"status":"active","id":"0x1CE0c2827e2eF14D5C4f29a091d735A204794041","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/ava-labs"}],"chainId":56},{"address":"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3","name":"BNB pegged Dai Token","website":"http://makerdao.com","description":"BNB pegged Dai Token (DAI BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3","research":"https://research.binance.com/en/projects/dai","type":"BEP20","symbol":"DAI","decimals":18,"status":"active","id":"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3","tags":["binance-peg","stablecoin","defi"],"links":[{"name":"x","url":"https://x.com/MakerDAO"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/multi-collateral-dai/"}],"chainId":56},{"address":"0xBf5140A22578168FD562DCcF235E5D43A02ce9B1","name":"BNB pegged Uniswap","website":"https://uniswap.org","description":"BNB pegged Uniswap (UNI BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Uniswap","explorer":"https://bscscan.com/token/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1","research":"https://research.binance.com/en/projects/uniswap","type":"BEP20","symbol":"UNI","decimals":18,"status":"active","id":"0xBf5140A22578168FD562DCcF235E5D43A02ce9B1","tags":["binance-peg","defi","governance"],"links":[{"name":"x","url":"https://x.com/UniswapProtocol"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/uniswap/"}],"chainId":56},{"address":"0x2859e4544C4bB03966803b044A93563Bd2D0DD4D","name":"BNB pegged SHIBA INU","website":"https://shibatoken.com/","description":"BNB pegged SHIBA INU (SHIB BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x2859e4544c4bb03966803b044a93563bd2d0dd4d","type":"BEP20","symbol":"SHIB","decimals":18,"status":"active","id":"0x2859e4544C4bB03966803b044A93563Bd2D0DD4D","tags":["binance-peg"],"chainId":56},{"address":"0x76A797A59Ba2C17726896976B7B3747BfD1d220f","name":"Wrapped TON Coin","type":"BEP20","symbol":"TON","decimals":9,"website":"https://ton.org/","description":"The Open Network is a blockchain-based decentralized computer network. TON is designed to enable processing millions of transactions per second","explorer":"https://bscscan.com/token/0x76A797A59Ba2C17726896976B7B3747BfD1d220f","status":"active","id":"0x76A797A59Ba2C17726896976B7B3747BfD1d220f","links":[{"name":"github","url":"https://github.com/newton-blockchain"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/toncoin/"},{"name":"telegram","url":"https://t.me/tonblockchain"}],"tags":["nft"],"chainId":56},{"address":"0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402","name":"BNB pegged Polkadot Token","website":"https://polkadot.network","description":"Polkadot is a blockchain project that aims to connect blockchains, to enable the transfer of value and logic across chains.","explorer":"https://bscscan.com/token/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402","research":"https://research.binance.com/en/projects/polkadot","type":"BEP20","symbol":"DOT","decimals":18,"status":"active","id":"0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402","chainId":56},{"address":"0x352Cb5E19b12FC216548a2677bD0fce83BaE434B","name":"BNB pegged BitTorrent","symbol":"BTT","type":"BEP20","decimals":18,"description":"BTT is the official token of BitTorrent Chain. BitTorrent Chain is a brand-new heterogeneous cross-chain interoperability protocol, which leverages sidechains","website":"https://bt.io/","explorer":"https://bscscan.com/token/0x352cb5e19b12fc216548a2677bd0fce83bae434b","status":"active","id":"0x352Cb5E19b12FC216548a2677bD0fce83BaE434B","links":[{"name":"x","url":"https://x.com/BitTorrent"},{"name":"github","url":"https://github.com/bttcprotocol/bttc"},{"name":"telegram","url":"https://t.me/BitTorrentChain"}],"tags":["governance","staking","defi"],"chainId":56},{"address":"0xfb6115445Bff7b52FeB98650C87f44907E58f802","name":"Binance-Peg Aave Token","website":"https://aave.com","description":"Aave is a decentralized finance protocol that allows people to lend and borrow crypto.","explorer":"https://bscscan.com/token/0xfb6115445bff7b52feb98650c87f44907e58f802","research":"https://research.binance.com/en/projects/aave-protocol","type":"BEP20","symbol":"AAVE","decimals":18,"status":"active","id":"0xfb6115445Bff7b52FeB98650C87f44907E58f802","tags":["governance","defi"],"chainId":56},{"address":"0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63","name":"BNB pegged NEAR Protocol","website":"https://near.org","description":"BNB pegged NEAR Protocol (NEAR BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63","research":"https://research.binance.com/en/projects/near-protocol","type":"BEP20","symbol":"NEAR","decimals":18,"status":"active","id":"0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63","tags":["binance-peg"],"chainId":56},{"address":"0x3d6545b08693daE087E957cb1180ee38B9e3c25E","name":"BNB pegged Ethereum Classic","website":"https://ethereumclassic.org","description":"BNB pegged Ethereum Classic (ETC BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x3d6545b08693dae087e957cb1180ee38b9e3c25e","research":"https://research.binance.com/en/projects/ethereum-classic","type":"BEP20","symbol":"ETC","decimals":18,"status":"active","id":"0x3d6545b08693daE087E957cb1180ee38B9e3c25E","tags":["binance-peg"],"chainId":56},{"address":"0x000Ae314E2A2172a039B26378814C252734f556A","name":"Aster","type":"BEP20","symbol":"ASTER","decimals":18,"website":"https://www.asterdex.com/","description":"Aster is a next-generation decentralized exchange offering both Perpetual and Spot trading, designed as a one-stop onchain venue for global","explorer":"https://bscscan.com/token/0x000Ae314E2A2172a039B26378814C252734f556A","status":"active","id":"0x000Ae314E2A2172a039B26378814C252734f556A","links":[{"name":"x","url":"https://x.com/Aster_DEX"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/aster/"}],"tags":["defi"],"chainId":56},{"address":"0x7ba2710210b525AA5b90b4Dee4cC781dAD8Aec49","name":"BNB pegged PEPE","type":"BEP20","symbol":"PEPE","decimals":18,"description":"PEPE","website":"https://www.pepe.vip/","explorer":"https://bscscan.com/token/0x7ba2710210b525aa5b90b4dee4cc781dad8aec49","id":"0x7ba2710210b525AA5b90b4Dee4cC781dAD8Aec49","status":"active","links":[{"name":"x","url":"https://x.com/pepecoineth"}],"tags":["memes"],"chainId":56},{"address":"0x570A5D26f7765Ecb712C0924E4De545B89fD43dF","name":"BNB pegged Solana","website":"https://solana.com/","description":"Solana is the worlds most performant blockchain in the world at 710k transactions per second. 710k TPS is achieved by","explorer":"https://bscscan.com/token/0x570a5d26f7765ecb712c0924e4de545b89fd43df","research":"https://research.binance.com/en/projects/solana","symbol":"SOL","type":"BEP20","decimals":18,"status":"active","id":"0x570A5D26f7765Ecb712C0924E4De545B89fD43dF","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/solana-labs"},{"name":"x","url":"https://x.com/solana"}],"chainId":56},{"address":"0x0Eb3a705fc54725037CC9e008bDede697f62F335","name":"BNB pegged Cosmos Token","website":"https://cosmos.network","description":"BNB pegged Cosmos Token (ATOM BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x0Eb3a705fc54725037CC9e008bDede697f62F335","research":"https://research.binance.com/en/projects/cosmos-network","type":"BEP20","symbol":"ATOM","decimals":18,"status":"active","id":"0x0Eb3a705fc54725037CC9e008bDede697f62F335","tags":["binance-peg"],"chainId":56},{"address":"0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe","name":"BNB pegged Elrond","website":"https://elrond.com","description":"BNB pegged Elrond (EGLD BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Elrond","explorer":"https://bscscan.com/token/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe","research":"https://messari.io/asset/elrond/profile","type":"BEP20","symbol":"EGLD","decimals":18,"status":"active","id":"0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/ElrondNetwork"},{"name":"x","url":"https://x.com/ElrondNetwork"},{"name":"telegram","url":"https://t.me/ElrondNetwork"}],"chainId":56},{"address":"0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153","name":"BNB pegged Filecoin","website":"https://filecoin.io","description":"Filecoin provides a blockchain-based marketplace that aims to revolutionize the global storage economy.","explorer":"https://bscscan.com/token/0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153","research":"https://research.binance.com/en/projects/filecoin","type":"BEP20","symbol":"FIL","decimals":18,"status":"active","id":"0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153","chainId":56},{"address":"0x6FDcdfef7c496407cCb0cEC90f9C5Aaa1Cc8D888","name":"BNB pegged VeChain","website":"https://vechain.org","description":"VeChain is the world\u2019s leading blockchain platform offering Blockchain-as-a-Service to enterprises for products and information. VeChain strives to build a","explorer":"https://bscscan.com/token/0x6FDcdfef7c496407cCb0cEC90f9C5Aaa1Cc8D888","research":"https://research.binance.com/en/projects/vechain","symbol":"VET","type":"BEP20","decimals":18,"status":"active","id":"0x6FDcdfef7c496407cCb0cEC90f9C5Aaa1Cc8D888","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/vechain"},{"name":"x","url":"https://x.com/vechainofficial"},{"name":"telegram","url":"https://t.me/vechain_official_english"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/vechain/"}],"chainId":56},{"address":"0xb7F8Cd00C5A06c0537E2aBfF0b58033d02e5E094","name":"BNB pegged Paxos Standard","website":"https://paxos.com/standard","description":"BNB pegged Paxos Standard (PAX BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094","research":"https://research.binance.com/en/projects/paxos-standard","type":"BEP20","symbol":"PAX","decimals":18,"status":"active","id":"0xb7F8Cd00C5A06c0537E2aBfF0b58033d02e5E094","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/paxosglobal/pax-contracts"},{"name":"x","url":"https://x.com/PaxosStandard"}],"chainId":56},{"address":"0x392004BEe213F1FF580C867359C246924f21E6Ad","name":"Decentralized USD","symbol":"USDD","type":"BEP20","decimals":18,"description":"USDD is a fully decentralized algorithmic stablecoin","website":"https://usdd.io/","explorer":"https://bscscan.com/token/0x392004BEe213F1FF580C867359C246924f21E6Ad","status":"active","id":"0x392004BEe213F1FF580C867359C246924f21E6Ad","links":[{"name":"x","url":"https://x.com/usddio"}],"tags":["stablecoin"],"chainId":56},{"address":"0x9Ac983826058b8a9C7Aa1C9171441191232E8404","name":"BNB pegged Synthetix","website":"https://synthetix.io","description":"BNB pegged Synthetix (SNX BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Synthetix","explorer":"https://bscscan.com/token/0x9Ac983826058b8a9C7Aa1C9171441191232E8404","research":"https://research.binance.com/en/projects/synthetix","type":"BEP20","symbol":"SNX","decimals":18,"status":"active","id":"0x9Ac983826058b8a9C7Aa1C9171441191232E8404","tags":["binance-peg"],"links":[{"name":"github","url":"https://github.com/Synthetixio/synthetix"},{"name":"x","url":"https://x.com/synthetix_io"}],"chainId":56},{"address":"0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B","name":"Venus BTC","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B","type":"BEP20","symbol":"vBTC","decimals":8,"status":"active","id":"0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82","name":"PancakeSwap Token","website":"https://pancakeswap.finance","description":"PancakeSwap is a yield farming project whereby users can get FLIP (LP token) for staking and get CAKE token as","explorer":"https://bscscan.com/token/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82","research":"https://research.binance.com/en/projects/pancakeswap","type":"BEP20","symbol":"Cake","decimals":18,"status":"active","id":"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82","tags":["defi"],"links":[{"name":"github","url":"https://github.com/pancakeswap"},{"name":"x","url":"https://x.com/pancakeswap"},{"name":"telegram","url":"https://t.me/PancakeSwap"}],"chainId":56},{"address":"0x16939ef78684453bfDFb47825F8a5F714f12623a","name":"BNB pegged Tezos Token","website":"https://tezos.com","description":"BNB pegged Tezos Token (XTZ BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0x16939ef78684453bfDFb47825F8a5F714f12623a","research":"https://research.binance.com/en/projects/tezos","type":"BEP20","symbol":"XTZ","decimals":18,"status":"active","id":"0x16939ef78684453bfDFb47825F8a5F714f12623a","tags":["binance-peg","defi","nft"],"chainId":56},{"address":"0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9","name":"BNB pegged TrueUSD","website":"https://www.trueusd.com/","description":"BNB pegged TrueUSD (TUSDP BEP20) is a token issued by Binance on Smart Chain; its price is pegged to TrueUSD","explorer":"https://bscscan.com/token/0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9","symbol":"TUSD","type":"BEP20","decimals":18,"status":"active","id":"0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9","tags":["binance-peg","stablecoin"],"links":[{"name":"github","url":"https://github.com/trusttoken/TrueUSD"},{"name":"x","url":"https://x.com/tusd_official"},{"name":"telegram","url":"https://t.me/TUSDofficial_EN"}],"chainId":56},{"address":"0xC762043E211571eB34f1ef377e5e8e76914962f9","name":"ApeCoin","type":"BEP20","symbol":"APE","decimals":18,"website":"https://apecoin.com","description":"ApeCoin is an BEP-20 governance and utility token used within the APE ecosystem to empower a decentralized community building at","explorer":"https://bscscan.com/token/0xc762043e211571eb34f1ef377e5e8e76914962f9","status":"active","id":"0xC762043E211571eB34f1ef377e5e8e76914962f9","links":[{"name":"x","url":"https://x.com/apecoin"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/apecoin-ape/"}],"tags":["governance"],"chainId":56},{"address":"0xfb5B838b6cfEEdC2873aB27866079AC55363D37E","name":"FLOKI","type":"BEP20","symbol":"FLOKI","decimals":9,"website":"https://floki.com","description":"The people\'s cryptocurrency. By combining the power of memes with real utility and charitability, FLOKI gives power and opportunity to","explorer":"https://bscscan.com/token/0xfb5b838b6cfeedc2873ab27866079ac55363d37e","status":"active","id":"0xfb5B838b6cfEEdC2873aB27866079AC55363D37E","links":[{"name":"x","url":"https://x.com/realflokiinu"},{"name":"telegram","url":"https://t.me/FlokiInuToken"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/floki-inu/"},{"name":"discord","url":"https://discord.com/invite/floki"}],"tags":["memes"],"chainId":56},{"address":"0x8595F9dA7b868b1822194fAEd312235E43007b49","name":"BNB pegged BitTorrent","website":"https://bittorrent.com/btt","description":"BNB pegged BitTorrent (BTT BEP20) is a token issued by Binance on Smart Chain; its price is pegged to BitTorrent","explorer":"https://bscscan.com/token/0x8595F9dA7b868b1822194fAEd312235E43007b49","type":"BEP20","symbol":"BTT","decimals":18,"status":"active","id":"0x8595F9dA7b868b1822194fAEd312235E43007b49","tags":["binance-peg"],"chainId":56},{"address":"0x4B0F1812e5Df2A09796481Ff14017e6005508003","name":"Trust Wallet","website":"https://trustwallet.com","description":"Utility token to increase adoption of cryptocurrency.","explorer":"https://bscscan.com/token/0x4B0F1812e5Df2A09796481Ff14017e6005508003","research":"https://research.binance.com/en/projects/trustwallet","type":"BEP20","symbol":"TWT","decimals":18,"status":"active","id":"0x4B0F1812e5Df2A09796481Ff14017e6005508003","tags":["governance"],"links":[{"name":"github","url":"https://github.com/trustwallet/"}],"chainId":56},{"address":"0xd944f1D1e9d5f9Bb90b62f9D45e447D989580782","name":"MIOTAC","type":"BEP20","symbol":"IOTA","decimals":6,"website":"https://www.iota.org/","description":"IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It","explorer":"https://bscscan.com/token/0xd944f1d1e9d5f9bb90b62f9d45e447d989580782","status":"active","id":"0xd944f1D1e9d5f9Bb90b62f9D45e447D989580782","links":[{"name":"x","url":"https://x.com/iota"},{"name":"github","url":"https://github.com/iotaledger"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/iota/"}],"tags":["defi"],"chainId":56},{"address":"0x101d82428437127bF1608F699CD651e6Abf9766E","name":"BNB pegged Basic Attention Token","website":"https://basicattentiontoken.org","description":"BNB pegged Basic Attention Token (BAT BEP20) is a token issued by Binance on Smart Chain; its price is pegged","explorer":"https://bscscan.com/token/0x101d82428437127bF1608F699CD651e6Abf9766E","research":"https://research.binance.com/en/projects/basic-attention-token","type":"BEP20","symbol":"BAT","decimals":18,"status":"active","id":"0x101d82428437127bF1608F699CD651e6Abf9766E","tags":["binance-peg","defi"],"links":[{"name":"x","url":"https://x.com/@attentiontoken"}],"chainId":56},{"address":"0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B","name":"Binance Beacon ETH","website":"https://binance.com/en/eth2","description":"BETH is a tokenized asset representing staked ETH at Binance Staking on a 1:1 basis.","explorer":"https://bscscan.com/token/0x250632378e573c6be1ac2f97fcdf00515d0aa91b","research":"","type":"BEP20","symbol":"BETH","decimals":18,"status":"active","id":"0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B","chainId":56},{"address":"0x29cED01C447166958605519F10DcF8b0255fB379","name":"Frax","website":"https://frax.finance/","description":"Frax is a new paradigm in stablecoin design, bringing together a two-token seigniorage share system, swap-based monetary policy, fully on-chain","explorer":"https://bscscan.com/token/0x29cED01C447166958605519F10DcF8b0255fB379","type":"BEP20","symbol":"FRAX","decimals":18,"status":"active","id":"0x29cED01C447166958605519F10DcF8b0255fB379","links":[{"name":"github","url":"https://github.com/FraxFinance"},{"name":"x","url":"https://x.com/Frax Finance"},{"name":"telegram","url":"https://t.me/fraxfinance"},{"name":"discord","url":"https://discord.com/invite/Xwe8kAwZ4a"}],"chainId":56},{"address":"0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8","name":"BNB pegged Compound","website":"https://compound.finance","description":"BNB pegged Compound (COMP BEP20) is a token issued by Binance on Smart Chain; its price is pegged to Compound","explorer":"https://bscscan.com/token/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8","research":"https://research.binance.com/en/projects/compound","type":"BEP20","symbol":"COMP","decimals":18,"status":"active","id":"0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8","tags":["binance-peg","defi"],"chainId":56},{"address":"0xfD5840Cd36d94D7229439859C0112a4185BC0255","name":"Venus USDT","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xfD5840Cd36d94D7229439859C0112a4185BC0255","type":"BEP20","symbol":"vUSDT","decimals":8,"status":"active","id":"0xfD5840Cd36d94D7229439859C0112a4185BC0255","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x26433c8127d9b4e9B71Eaa15111DF99Ea2EeB2f8","name":"Decentraland","website":"https://decentraland.org","description":"Decentraland (MANA) defines itself as a virtual reality platform powered by the Ethereum blockchain that allows users to create, experience,","explorer":"https://bscscan.com/token/0x26433c8127d9b4e9b71eaa15111df99ea2eeb2f8","type":"BEP20","symbol":"MANA","decimals":18,"status":"active","id":"0x26433c8127d9b4e9B71Eaa15111DF99Ea2EeB2f8","tags":["gamefi","nft"],"links":[{"name":"github","url":"https://github.com/decentraland"},{"name":"x","url":"https://x.com/decentraland"}],"chainId":56},{"address":"0x08CEB3F4a7ed3500cA0982bcd0FC7816688084c3","name":"Venus TUSD","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x08CEB3F4a7ed3500cA0982bcd0FC7816688084c3","type":"BEP20","symbol":"vTUSD","decimals":8,"status":"active","id":"0x08CEB3F4a7ed3500cA0982bcd0FC7816688084c3","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506","name":"UniCrypt","website":"https://unicrypt.network","description":"UNCX is the governance token of the UniCrypt platform.","explorer":"https://bscscan.com/token/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506","type":"BEP20","symbol":"UNCX","decimals":18,"status":"active","id":"0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506","links":[{"name":"x","url":"https://x.com/UNCX_token"},{"name":"telegram","url":"https://t.me/uncx_token"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/uncx/"}],"chainId":56},{"address":"0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb","name":"UNCL","website":"https://unicrypt.network","description":"UNCL is the liquidity rewards token of the UniCrypt Farming platform.","explorer":"https://bscscan.com/token/0x0e8d5504bf54d9e44260f8d153ecd5412130cabb","type":"BEP20","symbol":"UNCL","decimals":18,"status":"active","id":"0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb","links":[{"name":"x","url":"https://x.com/UNCX_token"},{"name":"telegram","url":"https://t.me/uncx_token"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/uncl/"}],"chainId":56},{"address":"0x0bC907e26377f7E072D27d7c57e72e13fc343AbC","symbol":"BUTT","decimals":18,"name":"Butter Token","chainId":56},{"address":"0x0cF8e180350253271f4b917CcFb0aCCc4862F262","symbol":"BTCBR","decimals":18,"name":"Bitcoin BR","chainId":56},{"address":"0x111111111117dC0aa78b770fA6A738034120C302","name":"1INCH Token","website":"https://1inch.io","description":"The 1INCH token on Binance Smart Chain will be used for a bridge between the Binance and Ethereum networks.","explorer":"https://bscscan.com/token/0x111111111117dc0aa78b770fa6a738034120c302","type":"BEP20","symbol":"1INCH","decimals":18,"status":"active","id":"0x111111111117dC0aa78b770fA6A738034120C302","tags":["defi"],"links":[{"name":"x","url":"https://x.com/1inchExchange"},{"name":"telegram","url":"https://t.me/OneInchExchange"}],"chainId":56},{"address":"0x12e34cDf6A031a10FE241864c32fB03a4FDaD739","name":"FREE coin","website":"https://FREEcoin.technology","description":"The FREE coin is the ideal start-to-crypto coin : large community, many exchangess and wallets, available on Ethereum, Binance and","explorer":"https://bscscan.com/token/0x12e34cDf6A031a10FE241864c32fB03a4FDaD739","type":"BEP20","symbol":"FREE","decimals":18,"status":"active","id":"0x12e34cDf6A031a10FE241864c32fB03a4FDaD739","chainId":56},{"address":"0x2f03F417496c956E64fd0B3D9323f0619D26f788","symbol":"Cheese-LP","decimals":18,"name":"CheeseSwap LPs","chainId":56},{"address":"0xe05207A432f6B06Fe9f78B598c1f890b260Dec45","symbol":"Cheese-LP","decimals":18,"name":"CheeseSwap LPs","chainId":56},{"address":"0xe2BfDc2e02B9A8AA5Aa0EcAB17e115e1e742b834","symbol":"Cheese-LP","decimals":18,"name":"CheeseSwap LPs","chainId":56},{"address":"0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D","name":"Venus XVS","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D","type":"BEP20","symbol":"vXVS","decimals":8,"status":"active","id":"0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x156ab3346823B651294766e23e6Cf87254d68962","name":"LUNA (Portal)","type":"BEP20","symbol":"LUNA","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://terra.money","explorer":"https://bscscan.com/token/0x156ab3346823B651294766e23e6Cf87254d68962","status":"active","id":"0x156ab3346823B651294766e23e6Cf87254d68962","tags":["wrapped"],"chainId":56},{"address":"0x1610bc33319e9398de5f57B33a5b184c806aD217","name":"Venus DOT","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x1610bc33319e9398de5f57B33a5b184c806aD217","type":"BEP20","symbol":"vDOT","decimals":8,"status":"active","id":"0x1610bc33319e9398de5f57B33a5b184c806aD217","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x1921168344840d1Ca5aCd82e8815F24582D4AD27","symbol":"BOLO","decimals":18,"name":"Bollo token","chainId":56},{"address":"0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584","name":"KUN","website":"https://qian.finance/mining","description":"KUN is the governance token of the QIAN stablecoin protocol. It is used to vote on QIAN governance and to","explorer":"https://bscscan.com/token/0x1a2fb0af670d0234c2857fad35b789f8cb725584","audit_report":"https://qian.finance/PeckShield-Audit-Report-QIAN2-v1.0.pdf","type":"BEP20","symbol":"KUN","decimals":18,"status":"active","id":"0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584","links":[{"name":"github","url":"https://github.com/QIAN-Protocol/QIAN"}],"chainId":56},{"address":"0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A","name":"Fuel Token","website":"https://jetfuel.finance/","description":"Jetfuel is a yield farming and yield aggregator platform that combines features from the most successful DeFi projects. The Jet","research":"https://jetfuel.finance/info","explorer":"https://bscscan.com/token/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a","type":"BEP20","symbol":"Fuel","decimals":18,"status":"active","id":"0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A","links":[{"name":"x","url":"https://x.com/Jetfuelfinance"},{"name":"telegram","url":"https://t.me/jetfuelfinance"}],"chainId":56},{"address":"0x23396cF899Ca06c4472205fC903bDB4de249D6fC","name":"Wrapped UST Token","website":"https://terra.money","description":"TerraUSD is the first decentralized stablecoin that is scalable, yield bearing and interchain.","explorer":"https://bscscan.com/token/0x23396cF899Ca06c4472205fC903bDB4de249D6fC","type":"BEP20","symbol":"UST","decimals":18,"status":"active","id":"0x23396cF899Ca06c4472205fC903bDB4de249D6fC","tags":["stablecoin"],"links":[{"name":"x","url":"https://x.com/TerraMoney"},{"name":"telegram","url":"https://t.me/terra_announcements"},{"name":"discord","url":"https://discord.com/invite/bYfyhUT"}],"chainId":56},{"address":"0x233d91A0713155003fc4DcE0AFa871b508B3B715","name":"Ditto","website":"https://ditto.money","description":"The dominant elastic supply token on Binance Smart Chain.","explorer":"https://bscscan.com/token/0x233d91a0713155003fc4dce0afa871b508b3b715","type":"BEP20","symbol":"DITTO","decimals":9,"status":"active","id":"0x233d91A0713155003fc4DcE0AFa871b508B3B715","links":[{"name":"github","url":"https://github.com/ditto-money/"},{"name":"x","url":"https://x.com/dittomoney_"}],"chainId":56},{"address":"0x24086EAb82DBDaa4771d0A5D66B0D810458b0E86","name":"Pepe AI","symbol":"PEPEAI","type":"BEP20","decimals":18,"description":"PepeAI is an innovative cryptocurrency token that has captured the attention of the crypto community, building on the recent hype","website":"https://pepeai.io","explorer":"https://bscscan.com/token/0x24086eab82dbdaa4771d0a5d66b0d810458b0e86","status":"active","id":"0x24086EAb82DBDaa4771d0A5D66B0D810458b0E86","links":[{"name":"x","url":"https://x.com/pepeaicoin"},{"name":"telegram","url":"https://t.me/pepeaicoin"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/pepe-ai/"}],"tags":["memes"],"chainId":56},{"address":"0x25b24B3c47918b7962B3e49C4F468367F73CC0E0","name":"AXL INU","type":"BEP20","symbol":"AXL","decimals":18,"website":"https://www.axltoken.com","description":"AXL INU is being developed as Decentralized Eco-System with a LaunchPad, Farming, Staking, NFT MarketPlace and a Metaverse.","explorer":"https://bscscan.com/token/0x25b24B3c47918b7962B3e49C4F468367F73CC0E0","status":"active","id":"0x25b24B3c47918b7962B3e49C4F468367F73CC0E0","links":[{"name":"x","url":"https://x.com/axltoken"},{"name":"telegram","url":"https://t.me/axltoken"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/axl-inu/"}],"tags":["memes","gamefi","staking","nft"],"chainId":56},{"address":"0x26DA28954763B92139ED49283625ceCAf52C6f94","name":"Venus AAVE","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"explorer":"https://bscscan.com/token/0x26DA28954763B92139ED49283625ceCAf52C6f94","type":"BEP20","symbol":"vAAVE","decimals":8,"status":"active","id":"0x26DA28954763B92139ED49283625ceCAf52C6f94","chainId":56},{"address":"0x2B90E061a517dB2BbD7E39Ef7F733Fd234B494CA","name":"Tether USD (Portal from Avalanche)","type":"BEP20","symbol":"USDTav","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://tether.to/","explorer":"https://bscscan.com/token/0x2B90E061a517dB2BbD7E39Ef7F733Fd234B494CA","status":"active","id":"0x2B90E061a517dB2BbD7E39Ef7F733Fd234B494CA","tags":["wrapped"],"chainId":56},{"address":"0x3048144676Ea683bF670392971e569d9511015eb","name":"FUSD","website":"https://fusd.network/","description":"Decentralizing the U.S dollar to create the worlds favourite USD stable token.","explorer":"https://bscscan.com/token/0x3048144676ea683bf670392971e569d9511015eb","type":"BEP20","symbol":"FUSD","decimals":18,"status":"active","id":"0x3048144676Ea683bF670392971e569d9511015eb","chainId":56},{"address":"0x31C78f583ed0288D67b2b80Dc5C443Bc3b15C661","name":"Basic Attention Token (Portal)","type":"BEP20","symbol":"BAT","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://basicattentiontoken.org/","explorer":"https://bscscan.com/token/0x31C78f583ed0288D67b2b80Dc5C443Bc3b15C661","status":"active","id":"0x31C78f583ed0288D67b2b80Dc5C443Bc3b15C661","tags":["wrapped"],"chainId":56},{"address":"0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1","name":"Venus DAI","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1","type":"BEP20","symbol":"vDAI","decimals":8,"status":"active","id":"0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x338cfc61E23d9D086779f37542e7Acb8517E9faE","name":"DDDD","type":"BEP20","symbol":"DDDD","decimals":18,"website":"https://bscscan.com/address/0x338cfc61E23d9D086779f37542e7Acb8517E9faE","description":"DDDD","explorer":"https://bscscan.com/token/0x338cfc61E23d9D086779f37542e7Acb8517E9faE","status":"active","id":"0x338cfc61E23d9D086779f37542e7Acb8517E9faE","tags":["memes"],"chainId":56},{"address":"0x3413a030EF81a3dD5a302F4B4D11d911e12ed337","name":"DAI (Portal)","type":"BEP20","symbol":"DAI","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://makerdao.com/","explorer":"https://bscscan.com/token/0x3413a030EF81a3dD5a302F4B4D11d911e12ed337","status":"active","id":"0x3413a030EF81a3dD5a302F4B4D11d911e12ed337","tags":["wrapped"],"chainId":56},{"address":"0x3524fd7488fdb1F4723BBc22C9cbD1Bf89f46E3B","name":"SushiToken (Portal)","type":"BEP20","symbol":"SUSHI","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://sushi.com/","explorer":"https://bscscan.com/token/0x3524fd7488fdb1F4723BBc22C9cbD1Bf89f46E3B","status":"active","id":"0x3524fd7488fdb1F4723BBc22C9cbD1Bf89f46E3B","tags":["wrapped"],"chainId":56},{"address":"0x35bEdBF9291b22218a0dA863170dcC9329Ef2563","name":"TAP Coin","website":"https://tapfantasy.io/","description":"Tap Fantasy is an MMORPG blockchain game, building the biggest Play2Earn NFT game on Solana and BSC. It\u2019s the metaverse","explorer":"https://bscscan.com/token/0x35bEdBF9291b22218a0dA863170dcC9329Ef2563","type":"BEP20","symbol":"TAP","decimals":18,"status":"active","id":"0x35bEdBF9291b22218a0dA863170dcC9329Ef2563","links":[{"name":"x","url":"https://x.com/tapfantasy2021"},{"name":"github","url":"https://github.com/tapfantasy/"},{"name":"telegram","url":"https://t.me/tap_fantasy"}],"tags":["nft"],"chainId":56},{"address":"0x393B312C01048b3ed2720bF1B090084C09e408A1","name":"fry.world","website":"https://fry.world/","description":"Fry.world is a yield optimization project with unique baskets(vaults) where $FRIES holders will share in all profits accrued on the","explorer":"https://bscscan.com/token/0x393B312C01048b3ed2720bF1B090084C09e408A1","type":"BEP20","symbol":"FRIES","decimals":18,"status":"active","id":"0x393B312C01048b3ed2720bF1B090084C09e408A1","chainId":56},{"address":"0x3c037C4c2296f280bB318D725D0b454B76c199b9","symbol":"JNTR/b","decimals":18,"name":"JNTR/b","chainId":56},{"address":"0x3d4350cD54aeF9f9b2C29435e0fa809957B3F30a","name":"UST (Wormhole)","type":"BEP20","symbol":"UST","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://wormholebridge.com","explorer":"https://bscscan.com/token/0x3d4350cD54aeF9f9b2C29435e0fa809957B3F30a","status":"active","id":"0x3d4350cD54aeF9f9b2C29435e0fa809957B3F30a","tags":["wrapped"],"chainId":56},{"address":"0x40f85D6040dF96ea14cD41142bcd244E14CF76f6","name":"USD Coin Bridged ZED20","website":"https://zedscan.net/","description":"USDC.z, a cutting-edge stablecoin tightly linked to the US dollar, the founders of this stablecoin have 35 years of successful","explorer":"https://bscscan.com/token/0x40f85D6040dF96ea14cD41142bcd244E14CF76f6","type":"BEP20","symbol":"USDC.z","decimals":18,"status":"active","id":"0x40f85D6040dF96ea14cD41142bcd244E14CF76f6","links":[{"name":"x","url":"https://x.com/zedxionc"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/usd-coin-bridged-zed20/"}],"chainId":56},{"address":"0x432665A9709593149DAb052FCda7E389122d98ae","name":"TRUMP COIN","website":"https://x.com/GOUTPUMP_TRUMP","description":"In 2025, Trump may start a new process of governing.","explorer":"https://bscscan.com/token/0x432665A9709593149DAb052FCda7E389122d98ae","type":"BEP20","symbol":"TRUMP","decimals":18,"status":"active","id":"0x432665A9709593149DAb052FCda7E389122d98ae","links":[{"name":"x","url":"https://x.com/GOUTPUMP_TRUMP"}],"chainId":56},{"address":"0x4375eA687330A95D42383Ef18AD3ea8C4Db7224d","symbol":"PASTA","decimals":18,"name":"PastaBar Token","chainId":56},{"address":"0x43B9cE0394d9AFfc97501359646A410A48c21a11","name":"Pepecoin","type":"BEP20","symbol":"PEPE","decimals":9,"website":"https://pepecoin.rocks","description":"Pepecoin is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP locked and contract renounced.","explorer":"https://bscscan.com/token/0x43B9cE0394d9AFfc97501359646A410A48c21a11","status":"active","id":"0x43B9cE0394d9AFfc97501359646A410A48c21a11","links":[{"name":"x","url":"https://x.com/pepecoin_global"},{"name":"github","url":"https://github.com/pepecoinbsc"},{"name":"telegram","url":"https://t.me/pepecoin_global"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/pepecoinbsc/"}],"tags":["memes"],"chainId":56},{"address":"0x4879B8e299c706131bd0A06e15c06f3c1d89902E","symbol":"SDC","decimals":18,"name":"Skydeepcoin","chainId":56},{"address":"0x49BA054B9664e99ac335667a917c63bB94332E84","name":"FTX Token (Portal)","type":"BEP20","symbol":"FTT","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://ftx.com","explorer":"https://bscscan.com/token/0x49BA054B9664e99ac335667a917c63bB94332E84","status":"active","id":"0x49BA054B9664e99ac335667a917c63bB94332E84","tags":["wrapped"],"chainId":56},{"address":"0x49d5cC521F75e13fa8eb4E89E9D381352C897c96","name":"Tether USD (Portal from Solana)","type":"BEP20","symbol":"USDTso","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://tether.to/","explorer":"https://bscscan.com/token/0x49d5cC521F75e13fa8eb4E89E9D381352C897c96","status":"active","id":"0x49d5cC521F75e13fa8eb4E89E9D381352C897c96","tags":["wrapped"],"chainId":56},{"address":"0x4AD663403df2F0E7987bC9C74561687472e1611C","name":"Frodo the virtual samurai","type":"BEP20","symbol":"FROG","decimals":18,"website":"https://frogonbnb.com/","description":"Frodo the Virtual Samurai aka FROG on BNB","explorer":"https://bscscan.com/token/0x4AD663403df2F0E7987bC9C74561687472e1611C","status":"active","id":"0x4AD663403df2F0E7987bC9C74561687472e1611C","tags":["memes"],"chainId":56},{"address":"0x4AadaD81487c3fadD9F162b851E6a61b729200cb","name":"Shiba Floki Inu","type":"BEP20","symbol":"FLOKI","decimals":18,"website":"https://flokiinu.com","description":"Shibas are highly affectionate and would make a great choice for a novice pet parent. However, they\u2019re highly sensitive and","explorer":"https://bscscan.com/token/0x4AadaD81487c3fadD9F162b851E6a61b729200cb","status":"active","id":"0x4AadaD81487c3fadD9F162b851E6a61b729200cb","links":[{"name":"x","url":"https://x.com/shibaflokitoken"},{"name":"github","url":"https://github.com/shibafloki/"},{"name":"telegram","url":"https://t.me/shibaflokitoken"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/shiba-floki/"}],"tags":["gamefi","nft"],"chainId":56},{"address":"0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7","name":"VAI Stablecoin","website":"http://venus.io","description":"VAI is the world\u2019s first decentralized stablecoin, enabled by Venus, built on Binance Smart Chain.","explorer":"https://bscscan.com/token/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","type":"BEP20","symbol":"VAI","decimals":18,"status":"active","id":"0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7","tags":["stablecoin"],"chainId":56},{"address":"0x4BE35Ec329343d7d9F548d42B0F8c17FFfe07db4","name":"Tether USD Bridged ZED20","website":"https://zedscan.net","description":"ZedScan Block Explorer ZedScan is an independent block explorer unrelated to other service providers (unless stated explicitly otherwise) and is","explorer":"https://bscscan.com/token/0x4be35ec329343d7d9f548d42b0f8c17fffe07db4","type":"BEP20","symbol":"USDT.z","decimals":18,"status":"active","id":"0x4BE35Ec329343d7d9F548d42B0F8c17FFfe07db4","links":[{"name":"x","url":"https://x.com/zedxionc"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/tether-usd-bridged-zed20-usdt/"}],"chainId":56},{"address":"0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA","name":"Ether (Portal)","type":"BEP20","symbol":"ETH","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://ethereum.org/en/","explorer":"https://bscscan.com/token/0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA","status":"active","id":"0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA","tags":["wrapped"],"chainId":56},{"address":"0x55F96C7005D7C684A65Ee653B07b5FE1507C56ab","name":"Wojak","type":"BEP20","symbol":"WOJ","decimals":9,"website":"https://woj.finance","description":"The $WOJ token is a charity token, based on the BEP20 standard. Using $WOJ tokens the holders can enjoy multiple","explorer":"https://bscscan.com/token/0x55F96C7005D7C684A65Ee653B07b5FE1507C56ab","status":"active","id":"0x55F96C7005D7C684A65Ee653B07b5FE1507C56ab","links":[{"name":"x","url":"https://x.com/wojfinance"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/wojak-finance/"},{"name":"telegram","url":"https://t.me/wojtoken"},{"name":"discord","url":"https://discord.com/invite/BZUQqnEH"},{"name":"github","url":"https://github.com/wojak-finance"}],"chainId":56},{"address":"0x55f0799D60F5f1046971d494bCe376A09Dd4C668","symbol":"HOTDOG","decimals":18,"name":"Hotdog.Cafe","chainId":56},{"address":"0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6","name":"BNB pegged EOS Token","website":"https://eos.io","description":"EOS is a cryptocurrency token and blockchain that operates as a smart contract platform for the deployment of decentralized applications","explorer":"https://bscscan.com/token/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6","research":"https://research.binance.com/en/projects/eos","type":"BEP20","symbol":"EOS","decimals":18,"status":"active","id":"0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6","chainId":56},{"address":"0x56eab07247e3e6404ac90140F20bba61375d5C3C","name":"TapSwap.Money","type":"BEP20","symbol":"TAPS","decimals":18,"website":"https://tapswap.money/","description":"TAPSwap is a revolutionary Decentralize Exchange(DEX) Protocol powered by Binance Smartchain & Uniswap AMM implementation.Use TapSwap for Swapping , Market","explorer":"https://bscscan.com/token/0x56eab07247e3e6404ac90140F20bba61375d5C3C","status":"active","id":"0x56eab07247e3e6404ac90140F20bba61375d5C3C","chainId":56},{"address":"0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B","name":"Venus LTC","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B","type":"BEP20","symbol":"vLTC","decimals":8,"status":"active","id":"0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x593822E8bc2875A786362E41aC6aD5947a3954F5","name":"Cheese","type":"BEP20","symbol":"CHEESE","decimals":18,"website":"https://cheesescoin.xyz","description":"CHEESE was born on 4chan\u2019s /biz/ board, destined to be the ultimate BSC coin","explorer":"https://bscscan.com/token/0x593822e8bc2875a786362e41ac6ad5947a3954f5","status":"active","id":"0x593822E8bc2875A786362E41aC6aD5947a3954F5","links":[{"name":"x","url":"https://x.com/cheese_bsc"}],"chainId":56},{"address":"0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A","name":"Catcoin","type":"BEP20","symbol":"CAT","decimals":9,"website":"https://catcoin.com","description":"Catcoin is a cat theme token that focuses on community decentralization and adoption. $CAT is designed to make memeCoins great","explorer":"https://bscscan.com/token/0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A","status":"active","id":"0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A","links":[{"name":"x","url":"https://x.com/catcoin"}],"tags":["defi"],"chainId":56},{"address":"0x5C999E15B71de2bb8e651f0f999FB0Bc321a0DFe","name":"ZedDex","website":"https://zeddex.com","description":"ZedDex is The First NeoBanking Decentralized Hub Trade, earn, and excel with crypto on the galaxy\u2019s top decentralized platform token.","explorer":"https://bscscan.com/token/0x5c999e15b71de2bb8e651f0f999fb0bc321a0dfe","symbol":"ZED","type":"BEP20","decimals":18,"status":"active","id":"0x5C999E15B71de2bb8e651f0f999FB0Bc321a0DFe","links":[{"name":"x","url":"https://x.com/zedxionc"},{"name":"github","url":"https://github.com/Zedscan"}],"chainId":56},{"address":"0x5CA42204cDaa70d5c773946e69dE942b85CA6706","name":"Position","type":"BEP20","symbol":"POSI","decimals":18,"website":"https://position.exchange","description":"Position Exchange is a decentralized trading platform, powered by a virtual Automated Market Maker (vAMM) and operating on Binance Smart","explorer":"https://bscscan.com/token/0x5CA42204cDaa70d5c773946e69dE942b85CA6706","status":"active","id":"0x5CA42204cDaa70d5c773946e69dE942b85CA6706","links":[{"name":"x","url":"https://x.com/PositionEx"},{"name":"github","url":"https://github.com/PositionExchange"},{"name":"telegram","url":"https://t.me/PositionExchange"}],"chainId":56},{"address":"0x5F0388EBc2B94FA8E123F404b79cCF5f40b29176","name":"Venus BCH","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x5F0388EBc2B94FA8E123F404b79cCF5f40b29176","type":"BEP20","symbol":"vBCH","decimals":8,"status":"active","id":"0x5F0388EBc2B94FA8E123F404b79cCF5f40b29176","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x5F84ce30DC3cF7909101C69086c50De191895883","name":"Venus Reward Token","website":"https://venus.io/","description":"Venus Reward Token is a mechanism created to become an additional mining distribution to suppliers and borrowers of Venus Protocol.","explorer":"https://bscscan.com/token/0x5F84ce30DC3cF7909101C69086c50De191895883","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"type":"BEP20","symbol":"VRT","decimals":18,"status":"active","id":"0x5F84ce30DC3cF7909101C69086c50De191895883","chainId":56},{"address":"0x5F88AB06e8dfe89DF127B2430Bba4Af600866035","name":"Kava","website":"https://kava.io","description":"Kava is a cross-chain DeFi Lending platform enabling stablecoin loans for users of major cryptocurrencies.","explorer":"https://bscscan.com/token/0x5f88ab06e8dfe89df127b2430bba4af600866035","research":"https://research.binance.com/en/projects/kava","type":"BEP20","symbol":"KAVA","decimals":6,"status":"active","id":"0x5F88AB06e8dfe89DF127B2430Bba4Af600866035","chainId":56},{"address":"0x5b4963B964bAc5C2Db83e53ffFe46E0cb83a1346","name":"Kitty Token","type":"BEP20","symbol":"KITTY","decimals":18,"website":"https://kittytoken.io/","description":"Kitty Token is a Decentralized Meme Token. Make the Fun with Kitty. Mine BNB with #KITTY upto 1000 BNB.","explorer":"https://bscscan.com/token/0x5b4963B964bAc5C2Db83e53ffFe46E0cb83a1346","status":"active","id":"0x5b4963B964bAc5C2Db83e53ffFe46E0cb83a1346","chainId":56},{"address":"0x5c9476FcD6a4F9a3654139721c949c2233bBbBc8","name":"Venus MATIC","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"explorer":"https://bscscan.com/token/0x5c9476FcD6a4F9a3654139721c949c2233bBbBc8","type":"BEP20","symbol":"vMATIC","decimals":8,"status":"active","id":"0x5c9476FcD6a4F9a3654139721c949c2233bBbBc8","chainId":56},{"address":"0x5f0Da599BB2ccCfcf6Fdfd7D81743B6020864350","name":"Binance-Peg Maker","website":"https://makerdao.com","description":"Maker is a utility token, governance token and recapitalization resource of the Maker system.","explorer":"https://bscscan.com/token/0x5f0Da599BB2ccCfcf6Fdfd7D81743B6020864350","research":"https://research.binance.com/en/projects/maker","type":"BEP20","symbol":"MKR","decimals":18,"status":"active","id":"0x5f0Da599BB2ccCfcf6Fdfd7D81743B6020864350","tags":["defi","governance","binance-peg"],"chainId":56},{"address":"0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95","name":"Ape Swap Finance Banana","website":"https://apeswap.finance","description":"ApeSwap is an Automated Market Maker, Yield Farming, and Staking platform on Binance Smart Chain. ApeSwap was built by DeFi","explorer":"https://bscscan.com/token/0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95","type":"BEP20","symbol":"BANANA","decimals":18,"status":"active","id":"0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95","links":[{"name":"github","url":"https://github.com/ApeSwapFinance"},{"name":"x","url":"https://x.com/ape_swap"},{"name":"telegram","url":"https://t.me/ape_swap"},{"name":"discord","url":"https://discord.com/invite/AbVxfGRCSd/"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/apeswap-finance/"}],"chainId":56},{"address":"0x61eDcFe8Dd6bA3c891CB9bEc2dc7657B3B422E93","name":"Venus TRX","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x61eDcFe8Dd6bA3c891CB9bEc2dc7657B3B422E93","type":"BEP20","symbol":"vTRX","decimals":8,"status":"active","id":"0x61eDcFe8Dd6bA3c891CB9bEc2dc7657B3B422E93","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x62475fB57669EfEBd411D9C05109870Bf1BBfdEE","name":"PI Network","type":"ERC20","symbol":"PI","decimals":18,"description":"PI Network is a decentralized financial payment network that rebuilds the traditional payment stack on the blockchain. It utilizes a","website":"https://thebittimes.com/token-PI-BSC-0x62475fB57669EfEBd411D9C05109870Bf1BBfdEE.html#google_vignette","explorer":"https://bscscan.com/token/0x62475fb57669efebd411d9c05109870bf1bbfdee","id":"0x62475fB57669EfEBd411D9C05109870Bf1BBfdEE","status":"active","tags":["stablecoin"],"chainId":56},{"address":"0x631C2f0EdABaC799f07550aEE4fF0Bf7fd35212B","name":"Poollotto.finance","type":"BEP20","symbol":"PLT","decimals":18,"website":"https://www.poollotto.finance/","description":"Smart contract on the blockchain network for non-centralized management of a global social lottery pool","explorer":"https://bscscan.com/token/0x631C2f0EdABaC799f07550aEE4fF0Bf7fd35212B","status":"active","id":"0x631C2f0EdABaC799f07550aEE4fF0Bf7fd35212B","chainId":56},{"address":"0x650b940a1033B8A1b1873f78730FcFC73ec11f1f","name":"Venus LINK","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x650b940a1033B8A1b1873f78730FcFC73ec11f1f","type":"BEP20","symbol":"vLINK","decimals":8,"status":"active","id":"0x650b940a1033B8A1b1873f78730FcFC73ec11f1f","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x651a89fed302227d41425235F8E934502FB94C48","name":"ADAcash","website":"https://adacash.io","description":"A revolutionary new token that earns you 10% ADA reflections just for holding","explorer":"https://bscscan.com/token/0x651a89fed302227d41425235F8E934502FB94C48","type":"BEP20","symbol":"ADAcash","decimals":18,"status":"active","id":"0x651a89fed302227d41425235F8E934502FB94C48","links":[{"name":"x","url":"https://x.com/adacashbsc"},{"name":"telegram","url":"https://t.me/adacashtoken"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/adacash/"}],"chainId":56},{"address":"0x67b725d7e342d7B611fa85e859Df9697D9378B2e","name":"The Sandbox","symbol":"SAND","type":"BEP20","decimals":18,"description":"The Sandbox is a virtual world where players can build, own, and monetize their gaming experiences in the Ethereum blockchain","website":"http://www.sandbox.game/","explorer":"https://bscscan.com/token/0x67b725d7e342d7b611fa85e859df9697d9378b2e","status":"active","id":"0x67b725d7e342d7B611fa85e859Df9697D9378B2e","links":[{"name":"x","url":"https://x.com/TheSandboxGame"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/the-sandbox/"},{"name":"telegram","url":"https://t.me/sandboxgame"}],"tags":["nft"],"chainId":56},{"address":"0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2","name":"DODO","website":"https://dodoex.io/","short_description":"a liquidity protocol powered by the Proactive Market Maker (PMM) algorithm","description":"DODO is a liquidity protocol powered by the Proactive Market Maker (PMM) algorithm and built for capital efficiency.","explorer":"https://bscscan.com/token/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2","type":"BEP20","symbol":"DODO","decimals":18,"status":"active","id":"0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2","links":[{"name":"github","url":"https://github.com/DODOEX/"},{"name":"x","url":"https://x.com/DODO"}],"chainId":56},{"address":"0x697bd938e7E572E787ecd7bC74a31f1814C21264","name":"Digital Financial Exchange","type":"BEP20","symbol":"DIFX","decimals":18,"website":"https://difx.io/","description":"Digital Financial Exchange token (DIFX) is the native token associated with the cryptocurrency exchange DIFX. Based on the Binance Smart","explorer":"https://bscscan.com/token/0x697bd938e7E572E787ecd7bC74a31f1814C21264","status":"active","id":"0x697bd938e7E572E787ecd7bC74a31f1814C21264","links":[{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/digital-financial-exchange/"},{"name":"telegram","url":"https://t.me/difx1"},{"name":"github","url":"https://github.com/DIFX-io"},{"name":"x","url":"https://x.com/difx_io"}],"tags":["staking"],"chainId":56},{"address":"0x6fDfA944478Fd4D87B16902147062CcDC985f2eF","symbol":"MSHIB","decimals":18,"name":"Meta Shiba Inu","chainId":56},{"address":"0x702b3f41772e321aacCdea91e1FCEF682D21125D","name":"PinkSwap","website":"https://www.pinkswap.finance/","description":"Sale, swap, earn, lock all on one decentralized, community driven platform. Earn PinkS by staking LP & tokens. Welcome to","explorer":"https://bscscan.com/token/0x702b3f41772e321aacCdea91e1FCEF682D21125D","type":"BEP20","symbol":"PINKS","decimals":18,"status":"active","id":"0x702b3f41772e321aacCdea91e1FCEF682D21125D","chainId":56},{"address":"0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0","name":"BNB pegged Axie Infinity Shard","website":"https://axieinfinity.com","description":"BNB pegged Axie Infinity Shard (AXS BEP20) is a token issued by Binance on Smart Chain; its price is pegged","explorer":"https://bscscan.com/token/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0","research":"https://research.binance.com/en/projects/axie-infinity","type":"BEP20","symbol":"AXS","decimals":18,"status":"active","id":"0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0","tags":["binance-peg","gamefi","nft"],"chainId":56},{"address":"0x7320c128e89bA4584Ab02ed1C9c96285b726443C","name":"Kokoswap Token","type":"BEP20","symbol":"KOKO","decimals":18,"website":"https://kokoswap.org","description":"Kokoswap is a unique decentralised platform that is transforming the world of crypto, NFTs & Game-Fi.","explorer":"https://bscscan.com/token/0x7320c128e89bA4584Ab02ed1C9c96285b726443C","status":"active","id":"0x7320c128e89bA4584Ab02ed1C9c96285b726443C","links":[{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/kokoswap/"},{"name":"telegram","url":"https://t.me/kokoswap"},{"name":"github","url":"https://github.com/Kokoswap-org"},{"name":"x","url":"https://x.com/kokoswap"}],"tags":["staking"],"chainId":56},{"address":"0x75aFA9915B2210Cd6329E820af0365e932bC1dd5","name":"Smurfs INU","type":"BEP20","symbol":"SMURF","decimals":9,"website":"https://smurfsinu.com","description":"SmurfsINU is designed to create a complex ecosystem in which DeFi and Metaverse are integrated together. Crypto users will access","explorer":"https://bscscan.com/token/0x75afa9915b2210cd6329e820af0365e932bc1dd5","status":"active","id":"0x75aFA9915B2210Cd6329E820af0365e932bC1dd5","links":[{"name":"x","url":"https://x.com/smurfsinu_"},{"name":"telegram","url":"https://t.me/smurfsinu"}],"tags":["gamefi","nft"],"chainId":56},{"address":"0x78e1936f065Fd4082387622878C7d11c9f05ECF4","name":"Jointer","type":"BEP20","symbol":"JNTR/b","decimals":18,"website":"https://jointer.io/","description":"-","explorer":"https://bscscan.com/token/0x78e1936f065Fd4082387622878C7d11c9f05ECF4","status":"active","id":"0x78e1936f065Fd4082387622878C7d11c9f05ECF4","chainId":56},{"address":"0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2","name":"Kebab Token","website":"https://kebabfinance.com","description":"The strategically superior yield farming community on BSC.","explorer":"https://bscscan.com/token/0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2","type":"BEP20","symbol":"KEBAB","decimals":18,"status":"active","id":"0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2","links":[{"name":"github","url":"https://github.com/chefkebab"},{"name":"x","url":"https://x.com/kebabfinance"},{"name":"telegram","url":"https://t.me/kebabfinance"}],"chainId":56},{"address":"0x7F70642d88cf1C4a3a7abb072B53B929b653edA5","name":"BNB pegged YFII.finance Token","website":"https://yfii.finance","description":"DFI.Money (YFII) is a DeFi platform which aims to build products on aggregated liquidity provision, leveraged trading, automated marketing making.","explorer":"https://bscscan.com/token/0x7F70642d88cf1C4a3a7abb072B53B929b653edA5","research":"https://research.binance.com/en/projects/dfimoney","type":"BEP20","symbol":"YFII","decimals":18,"status":"active","id":"0x7F70642d88cf1C4a3a7abb072B53B929b653edA5","chainId":56},{"address":"0x81E4d494b85A24a58a6BA45c9B418b32a4E039de","name":"MoonToken","website":"https://www.moontoken.xyz/","description":"We keep it simple, We Moon. Rugproof. Audited. Community Owned #MoonToken.","explorer":"https://bscscan.com/token/0x81E4d494b85A24a58a6BA45c9B418b32a4E039de","type":"BEP20","symbol":"MOON","decimals":18,"status":"active","id":"0x81E4d494b85A24a58a6BA45c9B418b32a4E039de","links":[{"name":"x","url":"https://x.com/MoonToken_BSC"},{"name":"telegram","url":"https://t.me/MoonTokenBSCChat"},{"name":"discord","url":"https://discord.com/invite/mtMQSNSE"}],"chainId":56},{"address":"0x85102c0062Aa918cB9e26D94A284AafCa602Df13","name":"Avalon Protocol","website":"https://avalonprotocol.com/","description":"Avalon, frictionless yield and liquidity generation protocol on BSC.","explorer":"https://bscscan.com/token/0x85102c0062Aa918cB9e26D94A284AafCa602Df13","type":"BEP20","symbol":"AVLP","decimals":9,"status":"active","id":"0x85102c0062Aa918cB9e26D94A284AafCa602Df13","links":[{"name":"x","url":"https://x.com/Avalon_Protocol"},{"name":"telegram","url":"https://t.me/AvalonProtocol"}],"chainId":56},{"address":"0x86aC3974e2BD0d60825230fa6F355fF11409df5c","name":"Venus CAKE","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"explorer":"https://bscscan.com/token/0x86aC3974e2BD0d60825230fa6F355fF11409df5c","type":"BEP20","symbol":"vCAKE","decimals":8,"status":"active","id":"0x86aC3974e2BD0d60825230fa6F355fF11409df5c","chainId":56},{"address":"0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e","name":"BNB pegged yearn.finance","website":"https://yearn.finance/","description":"BNB pegged yearn.finance (YFI BEP20) is a token issued by Binance on Smart Chain; its price is pegged to yearn.finance","explorer":"https://bscscan.com/token/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e","research":"https://research.binance.com/en/projects/yearnfinance","type":"BEP20","symbol":"YFI","decimals":18,"status":"active","id":"0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e","tags":["binance-peg","defi","governance"],"links":[{"name":"github","url":"https://github.com/iearn-finance"},{"name":"x","url":"https://x.com/iearnfinance"},{"name":"telegram","url":"https://t.me/iearnfinance"}],"chainId":56},{"address":"0x89675DcCFE0c19bca178A0E0384Bd8E273a45cbA","name":"Dexview","website":"https://dexview.io","description":"Dexview aims to become a cross network real-time trading-view market and assets analytics platform, that offers the best user experience.","explorer":"https://bscscan.com/token/0x89675DcCFE0c19bca178A0E0384Bd8E273a45cbA","type":"BEP20","symbol":"DXW","decimals":18,"status":"active","id":"0x89675DcCFE0c19bca178A0E0384Bd8E273a45cbA","chainId":56},{"address":"0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F","name":"ALPACA","website":"https://www.alpacafinance.org","description":"ALPACA is the token that powers Alpaca Finance, the 1st leveraged yield farming protocol on Binance Smart Chain.","explorer":"https://bscscan.com/token/0x8f0528ce5ef7b51152a59745befdd91d97091d2f","type":"BEP20","symbol":"ALPACA","decimals":18,"status":"active","id":"0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F","chainId":56},{"address":"0x8b04E56A8cd5f4D465b784ccf564899F30Aaf88C","name":"AnchorUST (Portal)","type":"BEP20","symbol":"aUST","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://anchorprotocol.com/","explorer":"https://bscscan.com/token/0x8b04E56A8cd5f4D465b784ccf564899F30Aaf88C","status":"active","id":"0x8b04E56A8cd5f4D465b784ccf564899F30Aaf88C","tags":["wrapped"],"chainId":56},{"address":"0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65","name":"Axelar","type":"BEP20","symbol":"AXL","decimals":6,"website":"https://axelar.network/","description":"Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on","explorer":"https://bscscan.com/token/0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65","status":"active","id":"0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65","links":[{"name":"x","url":"https://x.com/axelarcore"},{"name":"github","url":"https://github.com/axelarnetwork"},{"name":"telegram","url":"https://t.me/axelarcommunity"},{"name":"discord","url":"https://discord.com/invite/aRZ3Ra6f7D"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/axelar/"}],"tags":["wrapped"],"chainId":56},{"address":"0x8e17ed70334C87eCE574C9d537BC153d8609e2a3","name":"WazirX Token","website":"https://wazirx.com","description":"The WRX token is used for trading fee discounts, WRX Trade Mining (unlock and earn WRX tokens by performing trades),","explorer":"https://bscscan.com/token/0x8e17ed70334c87ece574c9d537bc153d8609e2a3","research":"https://research.binance.com/en/projects/wazirx","type":"BEP20","symbol":"WRX","decimals":8,"status":"active","id":"0x8e17ed70334C87eCE574C9d537BC153d8609e2a3","links":[{"name":"x","url":"https://x.com/wazirxindiap"},{"name":"github","url":"https://github.com/wazirx"}],"chainId":56},{"address":"0x8f4087Cb09E0F378f4278a314C94A636665dE24b","name":"NAR Ticket Token (GOLD)","website":"https://narwhalswap.org","description":"Narwhalswap Protocol \u2014 DeFi Platform with Sustainability. We will build a new unique dapp and protocol to enhance the value","explorer":"https://bscscan.com/token/0x8f4087cb09e0f378f4278a314c94a636665de24b","type":"BEP20","symbol":"GOLD","decimals":18,"status":"active","id":"0x8f4087Cb09E0F378f4278a314C94A636665dE24b","links":[{"name":"x","url":"https://x.com/narwhalswap"},{"name":"telegram","url":"https://t.me/narwhalswap"}],"chainId":56},{"address":"0x9029FdFAe9A03135846381c7cE16595C3554e10A","name":"OpenOcean","website":"https://openocean.finance/","description":"OpenOcean Token on Binance Smartchain","explorer":"https://bscscan.com/token/0x9029FdFAe9A03135846381c7cE16595C3554e10A","type":"BEP20","symbol":"OOE","decimals":18,"status":"active","id":"0x9029FdFAe9A03135846381c7cE16595C3554e10A","chainId":56},{"address":"0x9133049Fb1FdDC110c92BF5b7Df635abB70C89DC","name":"Pink token","website":"https://dot.finance","description":"Dot.Finance is a new DeFi platform designed to incentivize the growth of the Polkadot ecosystem.","explorer":"https://bscscan.com/token/0x9133049Fb1FdDC110c92BF5b7Df635abB70C89DC","type":"BEP20","symbol":"PINK","decimals":18,"status":"active","id":"0x9133049Fb1FdDC110c92BF5b7Df635abB70C89DC","chainId":56},{"address":"0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e","symbol":"CID","decimals":18,"name":"CheeseSwap Index","chainId":56},{"address":"0x947950BcC74888a40Ffa2593C5798F11Fc9124C4","name":"Sushi","website":"https://sushiswap.fi","description":"SushiSwap claims to be an evolution of #Uniswap with $SUSHI tokenomics.","explorer":"https://bscscan.com/token/0x947950bcc74888a40ffa2593c5798f11fc9124c4","research":"https://research.binance.com/en/projects/sushi","type":"BEP20","symbol":"SUSHI","decimals":18,"status":"active","id":"0x947950BcC74888a40Ffa2593C5798F11Fc9124C4","tags":["defi","governance","nft"],"links":[{"name":"github","url":"https://github.com/sushiswap"},{"name":"x","url":"https://x.com/sushiswap"}],"chainId":56},{"address":"0x95c78222B3D6e262426483D42CfA53685A67Ab9D","name":"Venus BUSD","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x95c78222B3D6e262426483D42CfA53685A67Ab9D","type":"BEP20","symbol":"vBUSD","decimals":8,"status":"active","id":"0x95c78222B3D6e262426483D42CfA53685A67Ab9D","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x96412902aa9aFf61E13f085e70D3152C6ef2a817","name":"AVAX (Portal)","type":"BEP20","symbol":"AVAX","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://www.avax.network/","explorer":"https://bscscan.com/token/0x96412902aa9aFf61E13f085e70D3152C6ef2a817","status":"active","id":"0x96412902aa9aFf61E13f085e70D3152C6ef2a817","tags":["wrapped"],"chainId":56},{"address":"0x9678E42ceBEb63F23197D726B29b1CB20d0064E5","name":"BNB pegged IoTeX Network","website":"https://iotex.io","description":"BNB pegged IoTeX Network (IOTX BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","research":"https://iotex.io/research","explorer":"https://bscscan.com/token/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5","type":"BEP20","symbol":"IOTX","decimals":18,"status":"active","id":"0x9678E42ceBEb63F23197D726B29b1CB20d0064E5","tags":["binance-peg","defi"],"links":[{"name":"github","url":"https://github.com/iotexproject/iotex-core"},{"name":"x","url":"https://x.com/iotex_io"},{"name":"telegram","url":"https://t.me/IoTeXGroup"}],"chainId":56},{"address":"0x9720CA160Bbd4E7f3dD4bb3f8BD4227ca0342e63","name":"GamesPad","website":"https://gamespad.io","description":"GMPD is the native token of GamesPad: the ultimate gaming, NFT, and metaverse ecosystem.","explorer":"https://bscscan.com/token/0x9720CA160Bbd4E7f3dD4bb3f8BD4227ca0342e63","type":"BEP20","symbol":"GMPD","decimals":18,"status":"active","id":"0x9720CA160Bbd4E7f3dD4bb3f8BD4227ca0342e63","links":[{"name":"x","url":"https://x.com/gamespad_vc"},{"name":"telegram","url":"https://t.me/GamesPadChat"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/gamespad/"}],"tags":["gamefi","nft"],"chainId":56},{"address":"0x972207A639CC1B374B893cc33Fa251b55CEB7c07","name":"Venus BETH","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0x972207A639CC1B374B893cc33Fa251b55CEB7c07","type":"BEP20","symbol":"vBETH","decimals":8,"status":"active","id":"0x972207A639CC1B374B893cc33Fa251b55CEB7c07","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0x9C65AB58d8d978DB963e63f2bfB7121627e3a739","name":"MDX Token","website":"https://bsc.mdex.com/","description":"MDEX integrates the advantages of multiple chains to create a high-performance composite DEX ecosystem, to maximize the rewards of participants","explorer":"https://bscscan.com/token/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739","type":"BEP20","symbol":"MDX","decimals":18,"status":"active","id":"0x9C65AB58d8d978DB963e63f2bfB7121627e3a739","tags":["defi"],"links":[{"name":"x","url":"https://x.com/Mdextech"},{"name":"github","url":"https://github.com/mdexSwap"},{"name":"telegram","url":"https://t.me/MixDex"}],"chainId":56},{"address":"0xA07c5b74C9B40447a954e1466938b865b6BBea36","name":"Venus BNB","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xA07c5b74C9B40447a954e1466938b865b6BBea36","type":"BEP20","symbol":"vBNB","decimals":8,"status":"active","id":"0xA07c5b74C9B40447a954e1466938b865b6BBea36","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xA1303E6199b319a891b79685F0537D289af1FC83","name":"NAR Token","website":"https://narwhalswap.org","description":"Narwhalswap Protocol \u2014 DeFi Platform with Sustainability. We will build a new unique dapp and protocol to enhance the value","explorer":"https://bscscan.com/token/0xa1303e6199b319a891b79685f0537d289af1fc83","type":"BEP20","symbol":"NAR","decimals":18,"status":"active","id":"0xA1303E6199b319a891b79685F0537D289af1FC83","links":[{"name":"x","url":"https://x.com/narwhalswap"},{"name":"telegram","url":"https://t.me/narwhalswap"}],"chainId":56},{"address":"0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929","name":"CertiK Token","website":"https://certik.foundation","description":"A Cross-chain Protocol with Security Scoring and Decentralized Reimbursements for Building Secure dApps and Blockchains.","explorer":"https://bscscan.com/token/0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929","research":"https://research.binance.com/en/projects/certik","type":"BEP20","symbol":"CTK","decimals":6,"status":"active","id":"0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929","chainId":56},{"address":"0xAD29AbB318791D579433D831ed122aFeAf29dcfe","name":"Fantom","symbol":"FTM","type":"BEP20","decimals":18,"description":"Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own","website":"http://fantom.foundation","explorer":"https://bscscan.com/token/0xad29abb318791d579433d831ed122afeaf29dcfe","status":"active","id":"0xAD29AbB318791D579433D831ed122aFeAf29dcfe","tags":["defi"],"links":[{"name":"x","url":"https://x.com/FantomFDN"},{"name":"telegram","url":"https://t.me/Fantom_English"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/fantom/"}],"chainId":56},{"address":"0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18","name":"BNB pegged Band Protocol Token","website":"https://bandprotocol.com","description":"Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.","explorer":"https://bscscan.com/token/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18","research":"https://research.binance.com/en/projects/band-protocol","type":"BEP20","symbol":"BAND","decimals":18,"status":"active","id":"0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18","chainId":56},{"address":"0xAaaAfDC2E08371B956Be515B3f3Ff735AB9c9D74","name":"Azbit","website":"https://azbit.com","description":"AZBIT TOKEN (AZ) is a decentralized cryptocurrency asset founded by the Seychelles-based Azbit platform. The Azbit (AZ) token project was","explorer":"https://bscscan.com/token/0xAaaAfDC2E08371B956Be515B3f3Ff735AB9c9D74","research":"https://azbit.com","symbol":"AZ","type":"BEP20","decimals":18,"status":"active","id":"0xAaaAfDC2E08371B956Be515B3f3Ff735AB9c9D74","tags":["defi"],"links":[{"name":"github","url":"https://github.com/azbit-com/"},{"name":"x","url":"https://x.com/azbit_news"}],"chainId":56},{"address":"0xAdBAF88B39D37Dc68775eD1541F1bf83A5A45feB","name":"Binance-Peg COTI Token","website":"https://coti.io/","description":"COTI is an enterprise-grade fintech platform that enables cross-chain interoperability and is built on its own DAG-based chain. It supports","explorer":"https://bscscan.com/token/0xadbaf88b39d37dc68775ed1541f1bf83a5a45feb","type":"BEP20","symbol":"COTI","decimals":18,"status":"active","id":"0xAdBAF88B39D37Dc68775eD1541F1bf83A5A45feB","tags":["binance-peg"],"links":[{"name":"x","url":"https://x.com/COTInetwork"},{"name":"telegram","url":"https://t.me/COTInetwork"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/coti/"}],"chainId":56},{"address":"0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f","name":"Burger Swap Token","website":"https://burgerswap.org","description":"A democratized AMM on Binance Smart Chain.","explorer":"https://bscscan.com/token/0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f","research":"https://research.binance.com/en/projects/burger-swap","type":"BEP20","symbol":"BURGER","decimals":18,"status":"active","id":"0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f","chainId":56},{"address":"0xB04906e95AB5D797aDA81508115611fee694c2b3","name":"USD Coin (Wormhole)","type":"BEP20","symbol":"USDC","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://www.circle.com/en/usdc","explorer":"https://bscscan.com/token/0xB04906e95AB5D797aDA81508115611fee694c2b3","status":"active","id":"0xB04906e95AB5D797aDA81508115611fee694c2b3","tags":["wrapped"],"chainId":56},{"address":"0xB248a295732e0225acd3337607cc01068e3b9c10","name":"Venus XRP","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xB248a295732e0225acd3337607cc01068e3b9c10","type":"BEP20","symbol":"vXRP","decimals":8,"status":"active","id":"0xB248a295732e0225acd3337607cc01068e3b9c10","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xC808592e5b4585F982bc728d63b227634bc007a4","name":"CryptoFrog.Finance","website":"https://cryptofrog.finance","description":"CryptoFrog.Finance is the first collectible frog NFT and a yield farming project on Binance Smart Chain.","explorer":"https://bscscan.com/token/0xC808592e5b4585F982bc728d63b227634bc007a4","type":"BEP20","symbol":"FROG","decimals":18,"status":"active","id":"0xC808592e5b4585F982bc728d63b227634bc007a4","links":[{"name":"github","url":"https://github.com/cryptofrogfinance"},{"name":"x","url":"https://x.com/CryptoFrogFi"},{"name":"telegram","url":"https://t.me/cryptofrogfinance"}],"chainId":56},{"address":"0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51","name":"Bunny Token","website":"https://pancakebunny.finance","description":"PancakeBunny is a new and rapidly growing DeFi yield aggregator that is used for PancakeSwap. PancakeBunny protocol empowers farmers to","explorer":"https://bscscan.com/token/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51","type":"BEP20","symbol":"BUNNY","decimals":18,"status":"active","id":"0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51","links":[{"name":"github","url":"https://github.com/PancakeBunny-finance/Bunny"},{"name":"x","url":"https://x.com/PancakeBunnyFin"},{"name":"telegram","url":"https://t.me/pancakebunny_fin"}],"chainId":56},{"address":"0xC9ac219C6A3eB0E0AcBb5911099c6a79D29F585d","name":"CATEX","symbol":"CATEX","type":"BEP20","decimals":9,"description":"CATEX strives to become the most beloved and successful project by adhering to all market standards and surpassing all indicators.","website":"https://catextoken.com/","explorer":"https://bscscan.com/token/0xc9ac219c6a3eb0e0acbb5911099c6a79d29f585d","status":"active","id":"0xC9ac219C6A3eB0E0AcBb5911099c6a79D29F585d","links":[{"name":"x","url":"https://x.com/catextoken"}],"chainId":56},{"address":"0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3","name":"TRON","type":"BEP20","symbol":"TRX","decimals":6,"website":"https://tron.network/","description":"TRON is a dedicated to build the infrastructure for a truly decentralized Internet.","explorer":"https://bscscan.com/token/0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3","status":"active","id":"0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3","links":[{"name":"x","url":"https://x.com/Tronfoundation"},{"name":"telegram","url":"https://t.me/tronnetworkEN"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/tron/"}],"chainId":56},{"address":"0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3","symbol":"KIWI","decimals":18,"name":"Kiwi Token","chainId":56},{"address":"0xDAa52A3A1B1c76D52D80B8933202c83Da9B786e4","name":"Pi Network","symbol":"Pi","website":"https://x.com/michelledian","description":"Pi-Cryptocurrency for everyday people fueling theworld\'s most inclusive peer-to-peer economy. Downloadour app to start mining Pi today.","explorer":"https://bscscan.com/token/0xdaa52a3a1b1c76d52d80b8933202c83da9b786e4","decimals":18,"status":"active","id":"0xDAa52A3A1B1c76D52D80B8933202c83Da9B786e4","type":"BEP20","links":[{"name":"x","url":"https://x.com/babycapbnb"}],"chainId":56},{"address":"0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F","name":"Ampleforth","website":"https://ampleforth.org","description":"Ampleforth describes itself as smart commodity money. It is chain-agnostic and reportedly less-correlated to Bitcoin and other digital assets.","explorer":"https://bscscan.com/token/0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f","type":"BEP20","symbol":"AMPL","decimals":9,"status":"active","id":"0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F","links":[{"name":"x","url":"https://x.com/ampleforthorg"}],"chainId":56},{"address":"0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5","name":"Bakery Token","website":"https://bakeryswap.org","description":"BakerySwap, an AMM Dex on Binance Smart Chain.","explorer":"https://bscscan.com/token/0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5","research":"https://research.binance.com/en/projects/bakerytoken","type":"BEP20","symbol":"BAKE","decimals":18,"status":"active","id":"0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5","tags":["defi"],"links":[{"name":"x","url":"https://x.com/bakery_swap"},{"name":"telegram","url":"https://t.me/bakeryswap"}],"chainId":56},{"address":"0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa","name":"Anyswap-BEP20","website":"https://bsc.anyswap.exchange","description":"Anyswap aims to create a multi-platform cross-chain DEX using Fusion\u2019s DCRM technology.","explorer":"https://bscscan.com/token/0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa","research":"","type":"BEP20","symbol":"ANY","decimals":18,"status":"active","id":"0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa","chainId":56},{"address":"0xFd7B3A77848f1C2D67E05E54d78d174a0C850335","name":"BNB pegged Ontology Token","website":"https://ont.io","description":"BNB pegged Ontology Token (ONT BEP20) is a token issued by Binance on Smart Chain; its price is pegged to","explorer":"https://bscscan.com/token/0xFd7B3A77848f1C2D67E05E54d78d174a0C850335","research":"https://research.binance.com/en/projects/ontology","type":"BEP20","symbol":"ONT","decimals":18,"status":"active","id":"0xFd7B3A77848f1C2D67E05E54d78d174a0C850335","tags":["binance-peg"],"chainId":56},{"address":"0xa184088a740c695E156F91f5cC086a06bb78b827","name":"AUTOv2","website":"https://autofarm.network","description":"Autofarm is a suite of products in Decentralized Finance (DeFi) that provides DEX aggregation and, yield farming aggregation on the","explorer":"https://bscscan.com/token/0xa184088a740c695e156f91f5cc086a06bb78b827","research":"","type":"BEP20","symbol":"AUTO","decimals":18,"status":"active","id":"0xa184088a740c695E156F91f5cC086a06bb78b827","chainId":56},{"address":"0xa2E3356610840701BDf5611a53974510Ae27E2e1","name":"Wrapped Binance Beacon ETH","type":"BEP20","symbol":"wBETH","decimals":18,"website":"https://www.binance.com/en/wbeth","description":"wBETH is a reward-bearing ETH liquid staking token offered by Binance. Each wBETH represents 1 BETH (1:1 to staked ETH)","explorer":"https://bscscan.com/token/0xa2E3356610840701BDf5611a53974510Ae27E2e1","status":"active","id":"0xa2E3356610840701BDf5611a53974510Ae27E2e1","links":[{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/wrapped-beacon-eth"}],"tags":["wrapped"],"chainId":56},{"address":"0xa4080f1778e69467E905B8d6F72f6e441f9e9484","name":"Synapse","website":"https://synapseprotocol.com/","description":"Synapse is a cross-chain layer \u221e protocol powering interoperability between blockchains.","explorer":"https://bscscan.com/token/0xa4080f1778e69467e905b8d6f72f6e441f9e9484","type":"BEP20","symbol":"SYN","decimals":18,"status":"active","id":"0xa4080f1778e69467E905B8d6F72f6e441f9e9484","tags":["nft"],"links":[{"name":"x","url":"https://x.com/synapseprotocol"},{"name":"telegram","url":"https://t.me/synapseprotocol"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/synapse-2/"}],"chainId":56},{"address":"0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6","name":"Coin98","type":"BEP20","symbol":"C98","decimals":18,"description":"Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, Fully Automatic Liquidity and","website":"https://coin98.com","explorer":"https://bscscan.com/token/0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6","status":"active","id":"0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6","links":[{"name":"github","url":"https://github.com/coin98"},{"name":"x","url":"https://x.com/coin98_finance"},{"name":"telegram","url":"https://t.me/coin98_labs"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/coin98/"}],"chainId":56},{"address":"0xabE8E5CabE24Cb36df9540088fD7cE1175b9bc52","name":"Solv","type":"BEP20","symbol":"SOLV","decimals":18,"description":"Solv Protocol is a leading Bitcoin staking platform that utilizes SolvBTC to unlock the full potential of over $1 trillion","website":"https://solv.finance/?chl=CMC","explorer":"https://bscscan.com/token/0xabe8e5cabe24cb36df9540088fd7ce1175b9bc52","id":"0xabE8E5CabE24Cb36df9540088fD7cE1175b9bc52","status":"active","links":[{"name":"x","url":"https://x.com/SolvProtocol"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/solv-protocol/"}],"tags":["staking"],"chainId":56},{"address":"0xb1280589dbac3e7ce111bF4A7Fb9c71A30213F7e","name":"DEXTools","website":"https://dextools.io/app","description":"Ultimate Hub and Defi App For Decentralized exchanges like Uniswap, Pancakeswap, Sushiswap, etc.","explorer":"https://bscscan.com/token/0xb1280589dbac3e7ce111bF4A7Fb9c71A30213F7e","type":"BEP20","symbol":"DEXT","decimals":18,"status":"active","id":"0xb1280589dbac3e7ce111bF4A7Fb9c71A30213F7e","chainId":56},{"address":"0xb1547683DA678f2e1F003A780143EC10Af8a832B","name":"Shiba Inu (Portal)","type":"BEP20","symbol":"SHIB","decimals":18,"description":"Cross Chain Portal Bridged Token","website":"https://shibatoken.com/","explorer":"https://bscscan.com/token/0xb1547683DA678f2e1F003A780143EC10Af8a832B","status":"active","id":"0xb1547683DA678f2e1F003A780143EC10Af8a832B","tags":["wrapped"],"chainId":56},{"address":"0xb46584e0efdE3092e04010A13f2eAe62aDb3b9F0","name":"Pepe Coin","type":"BEP20","symbol":"PEPE","decimals":18,"website":"https://pepecoinbsc.xyz","description":"Pepe is the most memeable memecoin around the world, it\u2018s time to make memecoins great again and add some frog","explorer":"https://bscscan.com/token/0xb46584e0efde3092e04010a13f2eae62adb3b9f0","status":"active","id":"0xb46584e0efdE3092e04010A13f2eAe62aDb3b9F0","links":[{"name":"x","url":"https://x.com/Pepecoin_BSC2"},{"name":"telegram","url":"https://t.me/PEPECOINBSC2"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/pepe-coin-bsc2"}],"tags":[],"chainId":56},{"address":"0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787","name":"Zilliqa","type":"BEP20","symbol":"ZIL","decimals":12,"website":"http://www.zilliqa.com/","description":"Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing","explorer":"https://bscscan.com/token/0xb86abcb37c3a4b64f74f59301aff131a1becc787","status":"active","id":"0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787","links":[{"name":"x","url":"https://x.com/zilliqa"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/french-connection-finance/"},{"name":"github","url":"https://github.com/Zilliqa"},{"name":"telegram","url":"https://t.me/zilliqachat"}],"chainId":56},{"address":"0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E","name":"QUSD","website":"https://qian.finance","description":"QUSD is the first kind of stablecoin of QIAN protocol. In the future, QIAN will launch QHKD, QEUR and other","explorer":"https://bscscan.com/token/0xb8c540d00dd0bf76ea12e4b4b95efc90804f924e","audit_report":"https://qian.finance/PeckShield-Audit-Report-QIAN2-v1.0.pdf","type":"BEP20","symbol":"QUSD","decimals":18,"status":"active","id":"0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E","links":[{"name":"github","url":"https://github.com/QIAN-Protocol/QIAN"}],"chainId":56},{"address":"0xbdfF32474E3B2fDe9Ff306B9a8BEffbc3c3DC0Fd","symbol":"BLDOGE","decimals":18,"name":"Black Doge","chainId":56},{"address":"0xc1F47175d96Fe7c4cD5370552e5954f384E3C791","name":"USD Coin (Portal from Avalanche)","type":"BEP20","symbol":"USDCav","decimals":6,"description":"Cross Chain Portal Bridged Token","website":"https://www.circle.com/en/usdc","explorer":"https://bscscan.com/token/0xc1F47175d96Fe7c4cD5370552e5954f384E3C791","status":"active","id":"0xc1F47175d96Fe7c4cD5370552e5954f384E3C791","tags":["wrapped"],"chainId":56},{"address":"0xc335Df7C25b72eEC661d5Aa32a7c2B7b2a1D1874","name":"Ice Open Network","website":"https://ice.io","description":"Ice represents the next generation of digital currency, mineable on any mobile device. At its core, Ice Network fosters a","explorer":"https://bscscan.com/token/0xc335Df7C25b72eEC661d5Aa32a7c2B7b2a1D1874","type":"BEP20","symbol":"ICE","decimals":18,"status":"active","id":"0xc335Df7C25b72eEC661d5Aa32a7c2B7b2a1D1874","links":[{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/ice-decentralized-future/"},{"name":"github","url":"https://github.com/ice-blockchain"},{"name":"x","url":"https://x.com/ice_blockchain"},{"name":"telegram","url":"https://t.me/iceblockchain"}],"tags":[],"chainId":56},{"address":"0xc6D866628B5A1C63E196557C1BA189211b779F64","name":"Cheese NFT","website":"https://cnft.cheeseswap.app","short_description":"Cheese NFT will bring the easiest way to buy/sell NFT on BSC.","explorer":"https://bscscan.com/address/0xc6D866628B5A1C63E196557C1BA189211b779F64","research":"https://docs.cheeseswap.app","type":"BEP20","symbol":"CNFT","decimals":18,"chainId":56},{"address":"0xc748673057861a797275CD8A068AbB95A902e8de","name":"Baby Doge Coin","type":"BEP20","symbol":"BabyDoge","decimals":9,"website":"https://babydoge.com/","description":"Baby Doge Coin has learned a few tricks and lessons from his meme father, Doge. A new crypto birthed by","explorer":"https://bscscan.com/token/0xc748673057861a797275CD8A068AbB95A902e8de","status":"active","id":"0xc748673057861a797275CD8A068AbB95A902e8de","tags":["deflationary"],"links":[{"name":"x","url":"https://x.com/babydogecoin"},{"name":"telegram","url":"https://t.me/babydogecoin"},{"name":"discord","url":"https://discord.com/invite/babydogecoin"}],"chainId":56},{"address":"0xc978BA9309f3c3bE3a79302251A2bB041bAa7118","name":"Kitty Shiba","type":"BEP20","symbol":"KSHIBA","decimals":18,"website":"https://kittyshiba.com","description":"KittyShiba, a decentralized & unique way to earn. Running on BSC, Token REFLECTION earning with very intelligent coding, makes KittyShiba","explorer":"https://bscscan.com/token/0xc978BA9309f3c3bE3a79302251A2bB041bAa7118","status":"active","id":"0xc978BA9309f3c3bE3a79302251A2bB041bAa7118","links":[{"name":"x","url":"https://x.com/kittyshiba"},{"name":"github","url":"https://github.com/kittyshiba"},{"name":"telegram","url":"https://t.me/kittyshiba"}],"chainId":56},{"address":"0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63","name":"Venus","website":"https://venus.io","description":"Venus is an algorithmic money market and synthetic stablecoin decentralized finance protocol.","explorer":"https://bscscan.com/token/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63","research":"https://research.binance.com/en/projects/venus","type":"BEP20","symbol":"XVS","decimals":18,"status":"active","id":"0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63","tags":["defi"],"chainId":56},{"address":"0xda3684575afa20309938434F3d40799B12868057","symbol":"Cake-LP","decimals":18,"name":"Pancake LPs","chainId":56},{"address":"0xe0E1CEa27B751656Bd197E410Ef4dD9CD09ea2C8","name":"Cheese NFT OLD","website":"https://cnft.cheeseswap.app","short_description":"Cheese NFT will bring the easiest way to buy/sell NFT on BSC.","explorer":"https://bscscan.com/address/0xe0E1CEa27B751656Bd197E410Ef4dD9CD09ea2C8","research":"https://docs.cheeseswap.app","type":"BEP20","symbol":"cNFT","decimals":18,"chainId":56},{"address":"0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66","name":"CEEK","type":"BEP20","symbol":"CEEK","decimals":18,"website":"https://ceek.com","description":"CEEK VR","explorer":"https://bscscan.com/token/0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66","status":"active","id":"0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66","links":[{"name":"x","url":"https://x.com/CEEK"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/ceek-vr/"}],"chainId":56},{"address":"0xe57F73EB27Da9D17f90C994744D842e95700C100","name":"Pepe AI","type":"BEP20","symbol":"PepeAI","decimals":9,"website":"https://pepe.style","description":"The most memeable memecoin in existence. The dogs have had their day,  time for Pepe AI to take reign.","explorer":"https://bscscan.com/token/0xe57F73EB27Da9D17f90C994744D842e95700C100","status":"active","id":"0xe57F73EB27Da9D17f90C994744D842e95700C100","links":[{"name":"x","url":"https://x.com/pepe_ai_bsc"},{"name":"github","url":"https://github.com/pepestyle"},{"name":"telegram","url":"https://t.me/pepe_ai_bsc"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/pepe-ai-bsc/"}],"tags":["memes"],"chainId":56},{"address":"0xe6DF05CE8C8301223373CF5B969AFCb1498c5528","name":"BNB48 Club Token","type":"BEP20","symbol":"KOGE","decimals":18,"description":"48 Club\xae was founded in Sept. 2017 by a diverse and tight-knit group of investors with a common passion for","website":"https://www.48.club/","explorer":"https://bscscan.com/token/0xe6df05ce8c8301223373cf5b969afcb1498c5528","id":"0xe6DF05CE8C8301223373CF5B969AFCb1498c5528","status":"active","links":[{"name":"x","url":"https://x.com/48Club_Official"},{"name":"coinmarketcap","url":"https://coinmarketcap.com/currencies/bnb48-club-token/"}],"tags":["governance"],"chainId":56},{"address":"0xe77011ed703ed06927dBd78e60c549baBAbF913e","name":"Micro Bitcoin","website":"https://mbitcoin.finance/","description":"The Micro Bitcoin mBTC is frictionless mining generation mBTC hard-coded on its smart contract to use as future store of","explorer":"https://bscscan.com/token/0xe77011ed703ed06927dBd78e60c549baBAbF913e","type":"BEP20","symbol":"mBTC","decimals":18,"status":"active","id":"0xe77011ed703ed06927dBd78e60c549baBAbF913e","chainId":56},{"address":"0xeBD0070237a0713E8D94fEf1B728d3d993d290ef","name":"Venus CAN","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xeBD0070237a0713E8D94fEf1B728d3d993d290ef","type":"BEP20","symbol":"vCAN","decimals":8,"status":"active","id":"0xeBD0070237a0713E8D94fEf1B728d3d993d290ef","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8","name":"Venus USDC","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8","type":"BEP20","symbol":"vUSDC","decimals":8,"status":"active","id":"0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xf307910A4c7bbc79691fD374889b36d8531B08e3","name":"Ankr Token","website":"https://ankr.com","description":"Ankr is building an infrastructure platform and marketplace for Web3-stack deployment.","explorer":"https://bscscan.com/token/0xf307910A4c7bbc79691fD374889b36d8531B08e3","research":"https://research.binance.com/en/projects/ankr-network","type":"BEP20","symbol":"ANKR","decimals":18,"status":"active","id":"0xf307910A4c7bbc79691fD374889b36d8531B08e3","links":[{"name":"x","url":"https://x.com/ankr"}],"chainId":56},{"address":"0xf508fCD89b8bd15579dc79A6827cB4686A3592c8","name":"Venus ETH","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xf508fCD89b8bd15579dc79A6827cB4686A3592c8","type":"BEP20","symbol":"vETH","decimals":8,"status":"active","id":"0xf508fCD89b8bd15579dc79A6827cB4686A3592c8","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xf5D8015D625be6F59b8073C8189BD51bA28792e1","name":"JulSwap","website":"https://julswap.com","description":"JulSwap DEX Commnuity Token","explorer":"https://bscscan.com/token/0xf5D8015D625be6F59b8073C8189BD51bA28792e1","type":"BEP20","symbol":"JulD","decimals":18,"status":"active","id":"0xf5D8015D625be6F59b8073C8189BD51bA28792e1","chainId":56},{"address":"0xf91d58b5aE142DAcC749f58A49FCBac340Cb0343","name":"Venus FIL","website":"https://venus.io/","description":"Venus is a decentralized finance (DeFi) algorithmic money market protocol on BNB Chain.","research":"https://research.binance.com/en/projects/venus","explorer":"https://bscscan.com/token/0xf91d58b5aE142DAcC749f58A49FCBac340Cb0343","type":"BEP20","symbol":"vFIL","decimals":8,"status":"active","id":"0xf91d58b5aE142DAcC749f58A49FCBac340Cb0343","links":[{"name":"x","url":"https://x.com/VenusProtocol"},{"name":"telegram","url":"https://t.me/VenusProtocol"}],"chainId":56},{"address":"0xfA54fF1a158B5189Ebba6ae130CEd6bbd3aEA76e","name":"SOL (Portal)","type":"BEP20","symbol":"SOL","decimals":9,"description":"Cross Chain Portal Bridged Token","website":"https://solana.com/","explorer":"https://bscscan.com/token/0xfA54fF1a158B5189Ebba6ae130CEd6bbd3aEA76e","status":"active","id":"0xfA54fF1a158B5189Ebba6ae130CEd6bbd3aEA76e","tags":["wrapped"],"chainId":56},{"address":"0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b","name":"Kyber Network","website":"https://kyber.network","description":"Kyber Network\u2019s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be","explorer":"https://bscscan.com/token/0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b","type":"BEP20","symbol":"KNC","decimals":18,"status":"active","id":"0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b","tags":["defi","governance"],"chainId":56}]}')},,function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){const[e,t]=(0,a.useState)(o()),n=(0,a.useCallback)(()=>{t(o())},[t]);return(0,a.useEffect)(()=>{if(r)return document.addEventListener("visibilitychange",n),()=>{document.removeEventListener("visibilitychange",n)}},[n]),e};var a=n(0);const r="visibilityState"in document;function o(){return!r||"hidden"!==document.visibilityState}},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(820),r=n(14);const o={upToExtraSmall:500,upToSmall:600,upToMedium:960,upToLarge:1280},i=Object.keys(o).reduce((e,t)=>(e[t]=(e,n,a)=>r.css`
      @media (max-width: ${o[t]}px) {
        ${(0,r.css)(e,n,a)}
      }
    `,e),{});var l={colors:{white:a.white,black:a.black,...a.green,...a.red,...a.yellow,...a.purple,...a.blue},gradients:a.gradients,grids:{sm:8,md:12,lg:24},gradient:a.gradients.primary,spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},borderRadius:{sm:"8px",md:"12px",lg:"16px",xl:"24px",round:"50%"},shadows:{sm:"0 2px 8px rgba(0, 0, 0, 0.08)",md:"0 4px 16px rgba(0, 0, 0, 0.12)",lg:"0 8px 32px rgba(0, 0, 0, 0.16)",xl:"0 16px 48px rgba(0, 0, 0, 0.20)"},mediaWidth:i,flexColumnNoWrap:r.css`
    display: flex;
    flex-flow: column nowrap;
  `,flexRowNoWrap:r.css`
    display: flex;
    flex-flow: row nowrap;
  `};t.default=l},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.StyledBalanceMaxMini=t.SectionBreak=t.ErrorText=t.Dots=t.BottomGrouping=t.ArrowWrapper=void 0,t.SwapCallbackError=function(e){let{error:t}=e;return o.default.createElement(y,null,o.default.createElement(E,null,o.default.createElement(i.AlertTriangle,{size:24})),o.default.createElement("p",null,t))},t.Wrapper=t.TruncatedText=t.SwapShowAcceptChanges=void 0;var r=n(75),o=a(n(0)),i=n(35),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(14)),s=n(40),c=n(47);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}const u=l.default.div`
  position: relative;
  padding: 0;
  background: transparent;
`;t.Wrapper=u;const p=l.default.div`
  padding: 4px;
  border-radius: 12px;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: -12px auto;
  position: relative;
  z-index: 2;
  transition: all 0.2s;

  ${e=>{let{clickable:t}=e;return t?l.css`
          :hover {
            cursor: pointer;
            background: rgba(31, 41, 55, 0.9);
            border-color: rgba(92, 116, 255, 0.7);
            transform: rotate(180deg);
          }
        `:null}}
`;t.ArrowWrapper=p;const m=l.default.div`
  height: 1px;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
`;t.SectionBreak=m;const f=l.default.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 2;
`;t.BottomGrouping=f;const A=(0,l.default)(s.Text)`
  color: ${e=>{let{theme:t,severity:n}=e;return 3===n||4===n?t.colors.red1:2===n?t.colors.yellow2:1===n?t.colors.text1:t.colors.green1}};
`;t.ErrorText=A;const h=l.default.button`
  height: 22px;
  width: 22px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.4rem;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  :hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  }
  :focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    outline: none;
  }
`;t.StyledBalanceMaxMini=h;const b=(0,l.default)(s.Text)`
  text-overflow: ellipsis;
  width: 220px;
  overflow: hidden;
`;t.TruncatedText=b;const g=l.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;t.Dots=g;const y=l.default.div`
  background-color: ${e=>{let{theme:t}=e;return(0,r.transparentize)(.9,t.colors.red1)}};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.red1}};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 700;
  }
`,E=l.default.div`
  background-color: ${e=>{let{theme:t}=e;return(0,r.transparentize)(.9,t.colors.red1)}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;const v=(0,l.default)(c.AutoColumn)`
  background-color: ${e=>{let{theme:t}=e;return(0,r.transparentize)(.9,t.colors.primary1)}};
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
`;t.SwapShowAcceptChanges=v},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.AddRemoveTabs=function(e){let{adding:t}=e;return r.default.createElement(u,null,r.default.createElement(s.RowBetween,{style:{padding:"1rem"}},r.default.createElement(i.Link,{to:"/pool"},r.default.createElement(A,null)),r.default.createElement(f,null,t?"Add":"Remove"," Liquidity"),r.default.createElement(c.default,{text:t?"When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.":"Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."})))},t.FindPoolTabs=function(){return r.default.createElement(u,null,r.default.createElement(s.RowBetween,{style:{padding:"1rem"}},r.default.createElement(i.Link,{to:"/pool"},r.default.createElement(A,null)),r.default.createElement(f,null,"Import Pool"),r.default.createElement(c.default,{text:"Use this tool to find pairs that don't automatically appear in the interface."})))},t.SwapPoolTabs=function(e){let{active:t}=e;return r.default.createElement(u,{style:{marginBottom:"10px"}},r.default.createElement(m,{id:"swap-nav-link",to:"/swap",isActive:()=>"swap"===t},r.default.createElement(d.default,{translationId:8},"Swap")),r.default.createElement(m,{id:"pool-nav-link",to:"/pool",isActive:()=>"pool"===t},r.default.createElement(d.default,{translationId:74},"Pool")),r.default.createElement(p,{id:"bridge-nav-link",target:"_blank",rel:"noopener noreferrer",href:"#/bridge"},"Cross Chain Swap"))};var r=a(n(0)),o=a(n(14)),i=n(76),l=n(35),s=n(28),c=a(n(128)),d=a(n(129));const u=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
  gap: 1rem;
  flex: 1;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    gap: 0.5rem;
  `}}
`,p=o.default.a`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  font-size: 16px;
  padding: 0 0.75rem;
  background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  white-space: nowrap;
  transition: all 0.2s;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &.${"ACTIVE"} {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
  }

  :hover {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    font-size: 14px;
    padding: 0 0.5rem;
  `}}
`,m=(0,o.default)(i.NavLink).attrs({activeClassName:"ACTIVE"})`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  font-size: 16px;
  padding: 0 0.75rem;
  background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  transition: all 0.2s;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &.${"ACTIVE"} {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
  }

  :hover,
  :focus {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    font-size: 14px;
    padding: 0 0.5rem;
  `}}
`,f=o.default.div`
  font-weight: 700;
  font-size: 18px;
`,A=(0,o.default)(l.ArrowLeft)`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.BodyWrapper=void 0,t.default=function(e){let{children:t}=e;return r.default.createElement(o,null,t)};var r=a(n(0));const o=a(n(14)).default.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: none !important;
  }
`;t.BodyWrapper=o},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.HoverCard=t.FixedHeightRow=void 0,t.MinimalPositionCard=function(e){let{pair:t,showUnwrapped:n=!1,border:a}=e;const{account:o}=(0,p.useActiveWeb3React)(),l=n?t.token0:(0,A.unwrappedToken)(t.token0),s=n?t.token1:(0,A.unwrappedToken)(t.token1),[d,f]=(0,i.useState)(!1),h=(0,m.useTokenBalance)(null!==o&&void 0!==o?o:void 0,t.liquidityToken),y=(0,u.useTotalSupply)(t.liquidityToken),[w,C]=t&&y&&h&&r.JSBI.greaterThanOrEqual(y.raw,h.raw)?[t.getLiquidityValue(t.token0,y,h,!1),t.getLiquidityValue(t.token1,y,h,!1)]:[void 0,void 0];return i.default.createElement(i.default.Fragment,null,h&&i.default.createElement(b.GreyCard,{border:a},i.default.createElement(g.AutoColumn,{gap:"12px"},i.default.createElement(B,null,i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontWeight:700,fontSize:16},"Your position"))),i.default.createElement(B,{onClick:()=>f(!d)},i.default.createElement(v.RowFixed,null,i.default.createElement(E.default,{currency0:l,currency1:s,margin:!0,size:20}),i.default.createElement(c.Text,{fontWeight:700,fontSize:18},l.symbol,"/",s.symbol)),i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontWeight:700,fontSize:18},h?h.toSignificant(4):"-"))),i.default.createElement(g.AutoColumn,{gap:"4px"},i.default.createElement(B,null,i.default.createElement(c.Text,{color:"#888D9B",fontSize:16,fontWeight:700},l.symbol,":"),w?i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{color:"#888D9B",fontSize:16,fontWeight:700,marginLeft:"6px"},null===w||void 0===w?void 0:w.toSignificant(6))):"-"),i.default.createElement(B,null,i.default.createElement(c.Text,{color:"#888D9B",fontSize:16,fontWeight:700},s.symbol,":"),C?i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{color:"#888D9B",fontSize:16,fontWeight:700,marginLeft:"6px"},null===C||void 0===C?void 0:C.toSignificant(6))):"-")))))},t.default=function(e){let{pair:t,border:n}=e;const{account:a}=(0,p.useActiveWeb3React)(),o=(0,A.unwrappedToken)(t.token0),d=(0,A.unwrappedToken)(t.token1),[b,C]=(0,i.useState)(!1),x=(0,m.useTokenBalance)(null!==a&&void 0!==a?a:void 0,t.liquidityToken),T=(0,u.useTotalSupply)(t.liquidityToken),D=x&&T&&r.JSBI.greaterThanOrEqual(T.raw,x.raw)?new r.Percent(x.raw,T.raw):void 0,[I,F]=t&&T&&x&&r.JSBI.greaterThanOrEqual(T.raw,x.raw)?[t.getLiquidityValue(t.token0,T,x,!1),t.getLiquidityValue(t.token1,T,x,!1)]:[void 0,void 0];return i.default.createElement(k,{border:n},i.default.createElement(g.AutoColumn,{gap:"12px"},i.default.createElement(B,{onClick:()=>C(!b),style:{cursor:"pointer"}},i.default.createElement(v.RowFixed,null,i.default.createElement(E.default,{currency0:o,currency1:d,margin:!0,size:20}),i.default.createElement(c.Text,{fontWeight:700,fontSize:18},o&&d?`${o.symbol}/${d.symbol}`:i.default.createElement(w.Dots,null,"Loading"))),i.default.createElement(v.RowFixed,null,b?i.default.createElement(l.ChevronUp,{size:"20",style:{marginLeft:"10px"}}):i.default.createElement(l.ChevronDown,{size:"20",style:{marginLeft:"10px"}}))),b&&i.default.createElement(g.AutoColumn,{gap:"8px"},i.default.createElement(B,null,i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700},"Pooled ",o.symbol,":")),I?i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700,marginLeft:"6px"},null===I||void 0===I?void 0:I.toSignificant(6)),i.default.createElement(y.default,{size:"20px",style:{marginLeft:"8px"},currency:o})):"-"),i.default.createElement(B,null,i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700},"Pooled ",d.symbol,":")),F?i.default.createElement(v.RowFixed,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700,marginLeft:"6px"},null===F||void 0===F?void 0:F.toSignificant(6)),i.default.createElement(y.default,{size:"20px",style:{marginLeft:"8px"},currency:d})):"-"),i.default.createElement(B,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700},"Your pool tokens:"),i.default.createElement(c.Text,{fontSize:16,fontWeight:700},x?x.toSignificant(4):"-")),i.default.createElement(B,null,i.default.createElement(c.Text,{fontSize:16,fontWeight:700},"Your pool share:"),i.default.createElement(c.Text,{fontSize:16,fontWeight:700},D?D.toFixed(2)+"%":"-")),i.default.createElement(v.RowBetween,{marginTop:"10px"},i.default.createElement(h.ButtonSecondary,{as:s.Link,to:`/add/${(0,f.currencyId)(o)}/${(0,f.currencyId)(d)}`,width:"48%"},"Add"),i.default.createElement(h.ButtonSecondary,{as:s.Link,width:"48%",to:`/remove/${(0,f.currencyId)(o)}/${(0,f.currencyId)(d)}`},"Remove")))))};var r=n(24),o=n(75),i=x(n(0)),l=n(35),s=n(76),c=n(40),d=a(n(14)),u=n(258),p=n(22),m=n(105),f=n(257),A=n(114),h=n(72),b=x(n(192)),g=n(47),y=a(n(104)),E=a(n(195)),v=n(28),w=n(376);function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const B=(0,d.default)(v.RowBetween)`
  height: 24px;
`;t.FixedHeightRow=B;const k=(0,d.default)(b.default)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg2}};
  :hover {
    border: 2px solid ${e=>{let{theme:t}=e;return(0,o.darken)(.06,t.colors.bg2)}};
  }
`;t.HoverCard=k},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.queryParametersToSwapState=k,t.tryParseAmount=y,t.useDefaultsFromURLSearch=function(){const{chainId:e}=(0,c.useActiveWeb3React)(),t=(0,s.useDispatch)(),n=(0,p.default)(),[a,r]=(0,l.useState)();return(0,l.useEffect)(()=>{if(!e)return;const a=k(n);t((0,A.replaceSwapState)({typedValue:a.typedValue,field:a.independentField,inputCurrencyId:a[A.Field.INPUT].currencyId,outputCurrencyId:a[A.Field.OUTPUT].currencyId,recipient:a.recipient})),r({inputCurrencyId:a[A.Field.INPUT].currencyId,outputCurrencyId:a[A.Field.OUTPUT].currencyId})},[t,e]),a},t.useDerivedSwapInfo=function(){var e,t;const{account:n}=(0,c.useActiveWeb3React)(),{independentField:a,typedValue:o,[A.Field.INPUT]:{currencyId:i},[A.Field.OUTPUT]:{currencyId:l},recipient:s}=g(),p=(0,d.useCurrency)(i),w=(0,d.useCurrency)(l),C=(0,r.default)(null!==s&&void 0!==s?s:void 0),x=null!==(e=null===s?n:C.address)&&void 0!==e?e:null,B=(0,f.useCurrencyBalances)(null!==n&&void 0!==n?n:void 0,[null!==p&&void 0!==p?p:void 0,null!==w&&void 0!==w?w:void 0]),k=a===A.Field.INPUT,T=y(o,null!==(t=k?p:w)&&void 0!==t?t:void 0),D=(0,u.useTradeExactIn)(k?T:void 0,null!==w&&void 0!==w?w:void 0),I=(0,u.useTradeExactOut)(null!==p&&void 0!==p?p:void 0,k?void 0:T),F=k?D:I,P={[A.Field.INPUT]:B[0],[A.Field.OUTPUT]:B[1]},S={[A.Field.INPUT]:null!==p&&void 0!==p?p:void 0,[A.Field.OUTPUT]:null!==w&&void 0!==w?w:void 0};let M;n||(M="Connect Wallet");var R,N;T||(M=null!==(R=M)&&void 0!==R?R:"Enter an amount");S[A.Field.INPUT]&&S[A.Field.OUTPUT]||(M=null!==(N=M)&&void 0!==N?N:"Select a token");const W=(0,m.isAddress)(x);var U;if(x&&W){if(-1!==E.indexOf(W)||D&&v(D,W)||I&&v(I,W)){var O;M=null!==(O=M)&&void 0!==O?O:"Invalid recipient"}}else M=null!==(U=M)&&void 0!==U?U:"Enter a recipient";const[L]=(0,h.useUserSlippageTolerance)(),j=F&&L&&(0,b.computeSlippageAdjustedAmounts)(F,L),V=P[A.Field.INPUT],z=j?j[A.Field.INPUT]:null;V&&z&&V.lessThan(z)&&(M="Insufficient "+z.currency.symbol+" balance");return{currencies:S,currencyBalances:P,parsedAmount:T,v2Trade:null!==F&&void 0!==F?F:void 0,inputError:M}},t.useSwapActionHandlers=function(){const e=(0,s.useDispatch)(),t=(0,l.useCallback)((t,n)=>{e((0,A.selectCurrency)({field:t,currencyId:n instanceof i.Token?n.address:n===i.ETHER?"ETH":""}))},[e]),n=(0,l.useCallback)(()=>{e((0,A.switchCurrencies)())},[e]),a=(0,l.useCallback)((t,n)=>{e((0,A.typeInput)({field:t,typedValue:n}))},[e]),r=(0,l.useCallback)(t=>{e((0,A.setRecipient)({recipient:t}))},[e]);return{onSwitchTokens:n,onCurrencySelection:t,onUserInput:a,onChangeRecipient:r}},t.useSwapState=g;var r=a(n(385)),o=n(97),i=n(24),l=n(0),s=n(39),c=n(22),d=n(113),u=n(779),p=a(n(780)),m=n(38),f=n(105),A=n(151),h=n(90),b=n(256);function g(){return(0,s.useSelector)(e=>e.swap)}function y(e,t){if(e&&t)try{const n=(0,o.parseUnits)(e,t.decimals).toString();if("0"!==n)return t instanceof i.Token?new i.TokenAmount(t,i.JSBI.BigInt(n)):i.CurrencyAmount.ether(i.JSBI.BigInt(n))}catch(n){console.debug(`Failed to parse input amount: "${e}"`,n)}}const E=["0xBCfCcbde45cE874adCB698cC183deBcF17952812","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"];function v(e,t){return e.route.path.some(e=>e.address===t)||e.route.pairs.some(e=>e.liquidityToken.address===t)}function w(e){if("string"===typeof e){const t=(0,m.isAddress)(e);if(t)return t;if("ETH"===e.toUpperCase())return"ETH";if(!1===t)return"ETH"}return null!=="ETH"?"ETH":""}function C(e){return"string"===typeof e&&"output"===e.toLowerCase()?A.Field.OUTPUT:A.Field.INPUT}const x=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,B=/^0x[a-fA-F0-9]{40}$/;function k(e){let t=w(e.inputCurrency),n=w(e.outputCurrency);t===n&&("string"===typeof e.outputCurrency?t="":n="");const a=function(e){if("string"!==typeof e)return null;const t=(0,m.isAddress)(e);return t||(x.test(e)||B.test(e)?e:null)}(e.recipient);return{[A.Field.INPUT]:{currencyId:t},[A.Field.OUTPUT]:{currencyId:n},typedValue:(r=e.exactAmount,"string"!==typeof r||isNaN(parseFloat(r))?"":r),independentField:C(e.exactField),recipient:a};var r}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.ConfirmationModalContent=function(e){let{title:t,bottomContent:n,onDismiss:a,topContent:o}=e;return r.default.createElement(E,null,r.default.createElement(v,null,r.default.createElement(c.RowBetween,null,r.default.createElement(s.Text,{fontWeight:700,fontSize:18},t),r.default.createElement(l.CloseIcon,{onClick:a})),o()),r.default.createElement(w,{gap:"12px"},n()))},t.TransactionErrorContent=function(e){let{message:t,onDismiss:n}=e;const a=(0,r.useContext)(o.ThemeContext);return r.default.createElement(E,null,r.default.createElement(v,null,r.default.createElement(c.RowBetween,null,r.default.createElement(s.Text,{fontWeight:700,fontSize:18},"Error"),r.default.createElement(l.CloseIcon,{onClick:n})),r.default.createElement(p.AutoColumn,{style:{marginTop:20,padding:"2rem 0"},gap:"24px",justify:"center"},r.default.createElement(d.AlertTriangle,{color:a.colors.red1,style:{strokeWidth:1.5},size:64}),r.default.createElement(s.Text,{fontWeight:700,fontSize:14,color:a.colors.red1,style:{textAlign:"center",width:"85%"}},t))),r.default.createElement(w,{gap:"12px"},r.default.createElement(u.ButtonPrimary,{onClick:n,style:{padding:"11.2px 16px",fontSize:"12.8px"}},"Dismiss")))},t.default=function(e){let{isOpen:t,onDismiss:n,attemptingTxn:a,hash:o,pendingText:l,content:s,currencyToAdd:c}=e;const{chainId:d}=(0,h.useActiveWeb3React)();return d?r.default.createElement(i.default,{isOpen:t,onDismiss:n,maxHeight:90},a?r.default.createElement(k,{onDismiss:n,pendingText:l}):o?r.default.createElement(T,{chainId:d,hash:o,onDismiss:n,currencyToAdd:c}):s()):null};var r=y(n(0)),o=y(n(14)),i=a(n(154)),l=n(34),s=n(40),c=n(28),d=n(35),u=n(72),p=n(47),m=a(n(325)),f=a(n(172)),A=n(38),h=n(22),b=a(n(690));function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const E=o.default.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  overflow-y: auto;
`,v=(0,o.default)(p.AutoColumn)`
  padding: 24px;
`,w=(0,o.default)(v)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,C=o.default.img`
  height: 16px;
  width: 16px;
  margin-left: 6px;
`,x=(0,o.default)(p.ColumnCenter)`
  padding: 60px 0;
`,B=(0,o.default)(l.Spinner)`
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
`;function k(e){let{onDismiss:t,pendingText:n}=e;return r.default.createElement(E,null,r.default.createElement(v,null,r.default.createElement(c.RowBetween,null,r.default.createElement("div",null),r.default.createElement(l.CloseIcon,{onClick:t})),r.default.createElement(x,null,r.default.createElement(B,{src:m.default,alt:"loader",size:"90px"})),r.default.createElement(p.AutoColumn,{gap:"12px",justify:"center"},r.default.createElement(s.Text,{fontWeight:700,fontSize:18},"Waiting For Confirmation"),r.default.createElement(p.AutoColumn,{gap:"12px",justify:"center"},r.default.createElement(s.Text,{fontWeight:600,fontSize:14,color:"",textAlign:"center"},n)),r.default.createElement(s.Text,{fontSize:12,color:"#565A69",textAlign:"center"},"Confirm this transaction in your wallet"))))}function T(e){var t;let{onDismiss:n,chainId:a,hash:i,currencyToAdd:m}=e;const g=(0,r.useContext)(o.ThemeContext),{library:y}=(0,h.useActiveWeb3React)(),{addToken:w,success:B}=(0,b.default)(m);return r.default.createElement(E,null,r.default.createElement(v,null,r.default.createElement(c.RowBetween,null,r.default.createElement("div",null),r.default.createElement(l.CloseIcon,{onClick:n})),r.default.createElement(x,null,r.default.createElement(d.ArrowUpCircle,{strokeWidth:.5,size:90,color:g.colors.text1})),r.default.createElement(p.AutoColumn,{gap:"12px",justify:"center"},r.default.createElement(s.Text,{fontWeight:700,fontSize:18},"Transaction Submitted"),a&&i&&r.default.createElement(l.ExternalLink,{href:(0,A.getBscscanLink)(a,i,"transaction")},r.default.createElement(s.Text,{fontWeight:700,fontSize:14,color:g.colors.text2},"View on bscscan.com")),m&&(null===y||void 0===y||null===(t=y.provider)||void 0===t?void 0:t.isMetaMask)&&r.default.createElement(u.ButtonLight,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:w,style:{padding:"4.8px 9.6px",fontSize:"12.8px"}},B?r.default.createElement(c.RowFixed,null,"Added ",m.symbol," ",r.default.createElement(d.CheckCircle,{size:"16px",stroke:g.colors.text2,style:{marginLeft:"6px"}})):r.default.createElement(c.RowFixed,null,"Add ",m.symbol," to Metamask ",r.default.createElement(C,{src:f.default}))),r.default.createElement(u.ButtonPrimary,{onClick:n,style:{margin:"20px 0 0 0",padding:"11.2px 16px",fontSize:"12.8px"}},r.default.createElement(s.Text,{fontWeight:700,fontSize:12.8},"Close")))))}},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{value:t,onUserInput:n,onMax:a,showMaxButton:i,label:f=(0,b.TranslateString)(132,"Input"),onCurrencySelect:g,currency:y,disableCurrencySelect:F=!1,hideBalance:P=!1,pair:S=null,hideInput:M=!1,otherCurrency:R,id:N,showCommonBases:W}=e;const[U,O]=(0,r.useState)(!1),{account:L}=(0,A.useActiveWeb3React)(),j=(0,l.useCurrencyBalance)(null!==L&&void 0!==L?L:void 0,null!==y&&void 0!==y?y:void 0),V=(0,r.useContext)(o.ThemeContext),z=(0,r.useCallback)(()=>{O(!1)},[O]);return r.default.createElement(B,{id:N},!M&&r.default.createElement(w,null,r.default.createElement(u.RowBetween,null,r.default.createElement(p.TYPE.Body,{color:V.colors.text2,fontWeight:700,fontSize:13},f),L&&r.default.createElement(p.TYPE.Body,{onClick:a,color:V.colors.text2,fontWeight:700,fontSize:13,style:{display:"inline",cursor:"pointer"}},!P&&y&&j?"Balance: "+(null===j||void 0===j?void 0:j.toSignificant(6)):" -"))),r.default.createElement(k,{hideInput:M},r.default.createElement(E,{style:M?{padding:"0",borderRadius:"10px"}:{},selected:F},!M&&r.default.createElement(T,null,r.default.createElement(m.Input,{className:"token-amount-input",value:t,onUserInput:e=>{n(e)}}),L&&y&&i&&r.default.createElement(I,{onClick:a},"MAX")),r.default.createElement(v,{selected:!!y,className:"open-currency-select-button",onClick:()=>{F||O(!0)}},r.default.createElement(C,null,S?r.default.createElement(d.default,{currency0:S.token0,currency1:S.token1,size:26,margin:!0}):y?r.default.createElement(c.default,{currency:y,size:"26px"}):null,S?r.default.createElement(D,{className:"pair-name-container"},null===S||void 0===S?void 0:S.token0.symbol,":",null===S||void 0===S?void 0:S.token1.symbol):r.default.createElement(D,{className:"token-symbol-container",active:Boolean(y&&y.symbol)},(y&&y.symbol&&y.symbol.length>20?y.symbol.slice(0,4)+"..."+y.symbol.slice(y.symbol.length-5,y.symbol.length):null===y||void 0===y?void 0:y.symbol)||r.default.createElement(h.default,{translationId:82},"Select a Token")),!F&&r.default.createElement(x,{selected:!!y}))))),!F&&g&&r.default.createElement(s.default,{isOpen:U,onDismiss:z,onCurrencySelect:g,selectedCurrency:y,otherSelectedCurrency:R,showCommonBases:W}))};var r=y(n(0)),o=y(n(14)),i=n(75),l=n(105),s=a(n(391)),c=a(n(104)),d=a(n(195)),u=n(28),p=n(34),m=n(776),f=n(339),A=n(22),h=a(n(129)),b=n(152);function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const E=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
`,v=o.default.button`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  min-width: 76px;
  height: 2.34rem;
  font-size: 13.6px;
  font-weight: 600;
  background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg4}};
  padding: 0 0.72rem;
  transition: all 0.2s;
  white-space: nowrap;
  box-shadow: none !important;

  :hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    background: ${e=>{let{theme:t}=e;return t.colors.bg4}};
    transform: translateY(-1px);
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    height: 2.5rem;
    padding: 0 0.6rem;
    font-size: 14px;
    min-width: 70px;
  `}}
`,w=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
    font-size: 0.68rem;
    line-height: 0.85rem;
  font-size: 0.68rem;
  line-height: 0.85rem;
  padding: 0 0.21rem;
  margin-bottom: 0.55rem;
  letter-spacing: 0.01em;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return(0,i.darken)(.15,t.colors.text1)}};
  }
`,C=o.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x=(0,o.default)(f.ReactComponent)`
  margin: 0rem 0.25rem 0 0.5rem;
  height: 35%;

  path {
    stroke: #FFFFFF;
    stroke-width: 1.4px;
  }
`,B=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  position: relative;
  border-radius: ${e=>{let{hideInput:t}=e;return t?"8.5px":"15.3px"}};
  z-index: 1;
  width: 100%;
`,k=o.default.div`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border-radius: ${e=>{let{hideInput:t}=e;return t?"12px":"16px"}};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
  width: 100%;
`,T=o.default.div`
  flex: 1;
  display: flex;
  align-items: center;

  .token-amount-input {
    flex: 1;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 0.8rem 1rem;
    background: ${e=>{let{theme:t}=e;return t.colors.bg0}};
    color: ${e=>{let{theme:t}=e;return t.colors.text1}};
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: none;
    transition: border-color 200ms ease;
    outline: none;
  }
`,D=o.default.span`
  margin: ${e=>{let{active:t}=e;return t?"0 0.43rem":"0 0.3rem"}};
  font-size: ${e=>{let{active:t}=e;return t?"14.45px":"12.75px"}};
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  max-width: 119px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=o.default.button`
  height: 22.95px;
  background: ${e=>{let{theme:t}=e;return`linear-gradient(135deg, ${t.colors.primary5} 0%, ${t.colors.primary3} 100%)`}};
  border: none;
  border-radius: 7.65px;
  font-weight: 700;
  font-size: 0.48rem;
  cursor: pointer;
  margin-left: 0.32rem;
  padding: 0 0.7rem;
  white-space: nowrap;

  :hover {
    transform: translateY(-1px);
  }

  :focus {
    outline: none;
  }

  :active {
    transform: translateY(0);
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    margin-left: 0.32rem;
    padding: 0 0.57rem;
    height: 20.4px;
  `}}
`},function(e,t,n){"use strict";t.__esModule=!0,t.ApprovalState=void 0,t.useApproveCallback=A,t.useApproveCallbackFromTrade=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=(0,o.useMemo)(()=>e?(0,d.computeSlippageAdjustedAmounts)(e,t)[s.Field.INPUT]:void 0,[e,t]);return A(n,i.ROUTER_ADDRESS)};var a=n(249),r=n(24),o=n(0),i=n(58),l=n(777),s=n(151),c=n(150),d=n(256),u=n(38),p=n(73),m=n(22);let f;function A(e,t){const{account:n}=(0,m.useActiveWeb3React)(),i=e instanceof r.TokenAmount?e.token:void 0,s=(0,l.useTokenAllowance)(i,null!==n&&void 0!==n?n:void 0,t),d=(0,c.useHasPendingApproval)(null===i||void 0===i?void 0:i.address,t),A=(0,o.useMemo)(()=>e&&t?e.currency===r.ETHER?f.APPROVED:s?s.lessThan(e)?d?f.PENDING:f.NOT_APPROVED:f.APPROVED:f.UNKNOWN:f.UNKNOWN,[e,s,d,t]),h=(0,p.useTokenContract)(null===i||void 0===i?void 0:i.address),b=(0,c.useTransactionAdder)(),g=(0,o.useCallback)(async()=>{if(A!==f.NOT_APPROVED)return void console.error("Approve was called unnecessarily");if(!i)return void console.error("No token");if(!h)return void console.error("TokenContract is null");if(!e)return void console.error("Missing amount to approve");if(!t)return void console.error("No spender");let n=!1;const r=await h.estimateGas.approve(t,a.MaxUint256).catch(()=>(n=!0,h.estimateGas.approve(t,e.raw.toString())));return h.approve(t,n?e.raw.toString():a.MaxUint256,{gasLimit:(0,u.calculateGasMargin)(r)}).then(n=>{b(n,{summary:"Approve "+e.currency.symbol,approval:{tokenAddress:i.address,spender:t}})}).catch(e=>{throw console.debug("Failed to approve token",e),e})},[A,i,h,e,t,b]);return[A,g]}t.ApprovalState=f,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(f||(t.ApprovalState=f={}))},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){const t=(0,r.isAddress)(e),n=(0,i.default)(t||void 0),a=(0,o.default)(e);return{loading:n.loading||a.loading,address:t||a.address,name:n.ENSName?n.ENSName:!t&&a.address&&e||null}};var r=n(38),o=a(n(392)),i=a(n(316))},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.Wrapper=t.MaxButton=t.Dots=t.ClickableText=void 0;var r=n(40),o=a(n(14));const i=o.default.div`
  position: relative;
`;t.Wrapper=i;const l=(0,o.default)(r.Text)`
  :hover {
    cursor: pointer;
  }
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
`;t.ClickableText=l;const s=o.default.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary5}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary5}};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 0.25rem 0.5rem;
  `}};
  font-weight: 700;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${e=>{let{theme:t}=e;return t.colors.primaryText1}};
  :hover {
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
  :focus {
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
    outline: none;
  }
`;t.MaxButton=s;const c=o.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;t.Dots=c},function(e,t,n){"use strict";t.__esModule=!0,t.typeInput=t.Field=void 0;var a=n(36);let r;t.Field=r,function(e){e.LIQUIDITY_PERCENT="LIQUIDITY_PERCENT",e.LIQUIDITY="LIQUIDITY",e.CURRENCY_A="CURRENCY_A",e.CURRENCY_B="CURRENCY_B"}(r||(t.Field=r={}));const o=(0,a.createAction)("burn/typeInputBurn");t.typeInput=o},,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(14)),o=a(n(237));var i=(0,r.default)(o.default)`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`;t.default=i},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{isOpen:t,onDismiss:n,onCurrencySelect:a,selectedCurrency:u,otherSelectedCurrency:p,showCommonBases:m=!1}=e;const[f,A]=(0,r.useState)(!1),h=(0,i.default)(t);(0,r.useEffect)(()=>{t&&!h&&A(!1)},[t,h]);const b=(0,r.useCallback)(e=>{a(e),n()},[n,a]),g=(0,r.useCallback)(()=>{o.default.event({category:"Lists",action:"Change Lists"}),A(!0)},[]),y=(0,r.useCallback)(()=>{o.default.event({category:"Lists",action:"Back"}),A(!1)},[]),E=!(0,l.useSelectedListUrl)();return r.default.createElement(s.default,{isOpen:t,onDismiss:n,maxHeight:99,minHeight:f?52:E?0:92},f?r.default.createElement(d.ListSelect,{onDismiss:n,onBack:y}):r.default.createElement(c.CurrencySearch,{isOpen:t,onDismiss:n,onCurrencySelect:b,onChangeList:g,selectedCurrency:u,otherSelectedCurrency:p,showCommonBases:!0}))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=a(n(74)),i=a(n(729)),l=n(119),s=a(n(154)),c=n(730),d=n(738);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n,a;const d=(0,c.default)(e,200),u=(0,o.useMemo)(()=>{if(!d)return[void 0];try{return d?[(0,r.namehash)(d)]:[void 0]}catch(e){return[void 0]}},[d]),p=(0,s.useENSRegistrarContract)(!1),m=(0,i.useSingleCallResult)(p,"resolver",u),f=null===(t=m.result)||void 0===t?void 0:t[0],A=(0,s.useENSResolverContract)(f&&!(0,l.default)(f)?f:void 0,!1),h=(0,i.useSingleCallResult)(A,"addr",u),b=d!==e;return{address:b?null:null!==(n=null===(a=h.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:b||m.loading||h.loading}};var r=n(173),o=n(0),i=n(96),l=a(n(194)),s=n(73),c=a(n(175))},function(e,t,n){"use strict";t.__esModule=!0,t.maxAmountSpend=function(e){if(!e)return;if(e.currency===a.ETHER)return a.JSBI.greaterThan(e.raw,r.MIN_ETH)?a.CurrencyAmount.ether(a.JSBI.subtract(e.raw,r.MIN_ETH)):a.CurrencyAmount.ether(a.JSBI.BigInt(0));return e};var a=n(24),r=n(58)},,,,,,,,,,,,,function(e,t,n){e.exports=n(407)},function(e,t,n){"use strict";var a=n(7);n(408);var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=n(264),i=a(n(146)),l=a(n(74)),s=n(39),c=n(14);n(418);var d=a(n(444)),u=a(n(799)),p=n(90),m=a(n(810)),f=a(n(811)),A=a(n(812)),h=a(n(815)),b=a(n(816)),g=n(817),y=n(34),E=n(134);function v(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function w(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(f.default,null),r.default.createElement(b.default,null),r.default.createElement(m.default,null),r.default.createElement(h.default,null),r.default.createElement(A.default,null))}function C(e){let{children:t}=e;const n=(0,p.useIsDarkMode)()?g.darkTheme:g.lightTheme;return r.default.createElement(c.ThemeProvider,{theme:n},t)}l.default.initialize("UA-187991504-1"),l.default.set({customBrowserType:o.isMobile?"web3"in window||"ethereum"in window?"mobileWeb3":"mobileRegular":"desktop"}),window.addEventListener("error",e=>{localStorage&&localStorage.removeItem("redux_localstorage_simple_lists"),l.default.exception({description:`${e.message} @ ${e.filename}:${e.lineno}:${e.colno}`,fatal:!0})}),i.default.render(r.default.createElement(r.StrictMode,null,r.default.createElement(y.FixedGlobalStyle,null),r.default.createElement(E.Web3Provider,null,r.default.createElement(s.Provider,{store:u.default},r.default.createElement(w,null),r.default.createElement(C,null,r.default.createElement(y.ThemedGlobalStyle,null),r.default.createElement(d.default,null))))),document.getElementById("root"))},,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(823)),o=n(246),i=a(n(430)),l=a(n(434));r.default.use(i.default).use(l.default).use(o.initReactI18next).init({backend:{loadPath:"./locales/{{lng}}.json"},react:{useSuspense:!0},fallbackLng:"en",preload:["en"],keySeparator:!1,interpolation:{escapeValue:!1}});var s=r.default;t.default=s},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const[e,t]=(0,r.useState)(void 0),[n,a]=(0,r.useState)(void 0),[i,g]=(0,r.useState)([]);return(0,r.useEffect)(()=>{const e=localStorage.getItem("cheeseSwapLanguage");if(e){const n=(e=>A.allLanguages.filter(t=>t.code===e)[0])(e);t(n),a(n)}else t(A.EN),a(A.EN)},[]),r.default.createElement(r.Suspense,{fallback:null},r.default.createElement(o.HashRouter,null,r.default.createElement(o.Route,{component:l.default}),r.default.createElement(D,null,r.default.createElement(h.LanguageContext.Provider,{value:{selectedLanguage:e,setSelectedLanguage:t,translatedLanguage:n,setTranslatedLanguage:a}},r.default.createElement(b.TranslationsContext.Provider,{value:{translations:i,setTranslations:g}},r.default.createElement(I,null,r.default.createElement(s.default,null)),r.default.createElement(F,null,r.default.createElement(d.default,null),r.default.createElement(P,null,r.default.createElement(u.default,null,r.default.createElement(o.Switch,null,r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/swap",component:x}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/swap/:outputCurrency",component:f.RedirectToSwap}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/send",component:f.RedirectPathToSwapOnly}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/find",component:w}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/pool",component:v}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/bridge",component:B}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/transactions",component:y}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/privacy-policy",component:k}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/terms-of-service",component:T}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/create",component:p.RedirectToAddLiquidity}),r.default.createElement(o.Route,{exact:!0,path:"/add",component:E}),r.default.createElement(o.Route,{exact:!0,path:"/add/:currencyIdA",component:p.RedirectOldAddLiquidityPathStructure}),r.default.createElement(o.Route,{exact:!0,path:"/add/:currencyIdA/:currencyIdB",component:p.RedirectDuplicateTokenIds}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/remove/:tokens",component:m.RedirectOldRemoveLiquidityPathStructure}),r.default.createElement(o.Route,{exact:!0,strict:!0,path:"/remove/:currencyIdA/:currencyIdB",component:C}),r.default.createElement(o.Route,{component:f.RedirectPathToSwapOnly}))))),r.default.createElement(c.default,null))))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=n(76),i=a(n(14)),l=a(n(446)),s=a(n(447)),c=a(n(672)),d=a(n(684)),u=a(n(688)),p=n(689),m=n(795),f=n(796),A=n(797),h=n(798),b=n(313);function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}const y=(0,r.lazy)(()=>Promise.all([n.e(7),n.e(64)]).then(n.t.bind(null,827,7))),E=(0,r.lazy)(()=>Promise.resolve().then(n.t.bind(null,327,7))),v=(0,r.lazy)(()=>n.e(67).then(n.t.bind(null,828,7))),w=(0,r.lazy)(()=>n.e(68).then(n.t.bind(null,829,7))),C=(0,r.lazy)(()=>n.e(63).then(n.t.bind(null,830,7))),x=(0,r.lazy)(()=>n.e(10).then(n.t.bind(null,831,7))),B=(0,r.lazy)(()=>n.e(66).then(n.t.bind(null,832,7))),k=(0,r.lazy)(()=>n.e(69).then(n.t.bind(null,833,7))),T=(0,r.lazy)(()=>n.e(70).then(n.t.bind(null,834,7))),D=i.default.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  min-height: 100vh;
  min-height: 100dvh;
`,I=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  width: 100%;
  justify-content: space-between;
`,F=i.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 86px;
  padding-bottom: 18px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
      padding-left: 16px;
      padding-right: 16px;
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      padding: 16px;
  `}};
`,P=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto 0;
`},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{location:{pathname:t,search:n}}=e;return(0,r.useEffect)(()=>{o.default.pageview(`${t}${n}`)},[t,n]),null};var r=n(0),o=a(n(74))},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){var e;(0,f.useIsDarkMode)();const{account:t}=(0,s.useActiveWeb3React)(),n=null===(e=(0,c.useETHBalances)(t?[t]:[]))||void 0===e?void 0:e[null!==t&&void 0!==t?t:""],a=(0,r.useMemo)(()=>{if(!n)return null;const e=parseFloat(n.toSignificant(10));return Number.isNaN(e)?null:new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:6}).format(e)},[n]);return r.default.createElement(g,null,r.default.createElement(A.RowBetween,{style:{alignItems:"flex-start"}},r.default.createElement(v,null,r.default.createElement(E,null,r.default.createElement(C,{href:"/"},r.default.createElement(B,null,r.default.createElement("img",{src:l.default,alt:"logo"})))),r.default.createElement(p.default,null)),r.default.createElement(k,null,r.default.createElement(y,null,r.default.createElement(x,{active:!!t,style:{pointerEvents:"auto"}},t&&a?r.default.createElement(T,{style:{flexShrink:0},pl:"0.75rem",pr:"0.5rem",fontWeight:700},a," BNB"):null,r.default.createElement(h.default,null))),r.default.createElement(w,null,r.default.createElement(m.default,null),r.default.createElement(d.default,null),r.default.createElement(u.default,null)))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=n(40),i=a(n(14)),l=a(n(196)),s=n(22),c=n(105),d=a(n(604)),u=a(n(613)),p=a(n(615)),m=a(n(616)),f=n(90),A=n(28),h=a(n(617));function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}const g=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 68px;
  padding: 12px 16px;
  margin: 0;
  position: fixed;
  z-index: 10;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 0.75rem 1rem;
    position: relative;
  `}};
`,y=i.default.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    gap: 0.25rem;
  `}};

  @media (max-width: 400px) {
    flex-shrink: 1;
    min-width: 0;
  }
`,E=(0,i.default)(y)`
  flex-shrink: 0;
`,v=i.default.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 7%;
  min-width: 0;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    gap: 2.5%;
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    gap: 0.75%;
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    gap: 0;
    width: 100%;
  `}};
`,w=i.default.div`
  display: flex;
  align-items: center;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`}};
`,C=i.default.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`,x=i.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${e=>{let{theme:t,active:n}=e;return n?t.colors.bg3:t.colors.bg2}};
  border: 1px solid ${e=>{let{theme:t,active:n}=e;return n?t.colors.primary1:"transparent"}};
  border-radius: 9.6px; /* 20% smaller than 12px */
  white-space: nowrap;
  width: 100%;
  padding: 3.2px; /* 20% smaller than 4px */
  font-size: 0.8em; /* reduce font size for contained text */
  transition: all 0.2s ease;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  }

  :focus {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
    outline-offset: 2px;
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    padding: 1.6px;
    border-radius: 6.4px;
    font-size: 0.7em;
  `}};
`,B=i.default.div`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  :hover {
    transform: scale(1.05) rotate(-3deg);
  }

  img {
    height: 2.625rem;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    img {
      height: 2.25rem;
    }
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    img {
      height: 1.875rem;
    }
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    img {
      height: 1.5rem;
    }
  `}};
`,k=i.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 1;
  min-width: 0;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  `}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    gap: 0.25rem;
  `}};
`,T=(0,i.default)(o.Text)`
  font-size: 0.8em;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    display: none;
    font-size: 0.7em;
  `}};
`},,function(e,t){},,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";t.__esModule=!0,t.metaMaskConnector=t.MetaMaskConnector=void 0;var a=n(55),r=n(81),o=n(60);class i extends r.BaseWalletConnector{constructor(){super("MetaMask")}isAvailable(){var e,t,n,a,r;if("undefined"===typeof window)return!1;const o=null===(e=window.ethereum)||void 0===e?void 0:e.isMetaMask,i=(null===(t=window.ethereum)||void 0===t?void 0:t.isTrust)||(null===(n=window.ethereum)||void 0===n?void 0:n.isTrustWallet),l=null===(a=window.ethereum)||void 0===a?void 0:a.isBinance,s=null===(r=window.ethereum)||void 0===r?void 0:r.isOKXWallet;return Boolean(o&&!i&&!l&&!s)}async connect(){if(!this.isAvailable())throw new Error("MetaMask not detected. Please install MetaMask extension.");try{console.log("[MetaMask] Connecting...");const e=await window.ethereum.request({method:"eth_requestAccounts"});if(!e||0===e.length)throw new Error("No accounts returned from MetaMask");return console.log("[MetaMask] Accounts received:",e),this.provider=new a.ethers.providers.Web3Provider(window.ethereum,"any"),console.log("[MetaMask] Checking network..."),await(0,o.ensureBSCMainnet)(this.provider),console.log("[MetaMask] Successfully connected"),this.provider}catch(t){var e;if(console.error("[MetaMask] Connection error:",t),this.provider=null,4001===t.code)throw new Error("Connection request rejected. Please approve the connection in MetaMask.");if(-32002===t.code)throw new Error("Connection request already pending. Please check MetaMask.");if(null!==(e=t.message)&&void 0!==e&&e.includes("chain"))throw new Error("Please switch to BSC Mainnet in MetaMask.");throw t}}async disconnect(){this.provider=null}}t.MetaMaskConnector=i;const l=new i;t.metaMaskConnector=l},function(e,t,n){"use strict";t.__esModule=!0,t.binanceWalletConnector=t.BinanceWalletConnector=void 0;var a=n(55),r=n(81),o=n(60);class i extends r.BaseWalletConnector{constructor(){super("Binance Wallet")}isAvailable(){var e;return"undefined"!==typeof window&&Boolean((null===(e=window.ethereum)||void 0===e?void 0:e.isBinance)||window.BinanceChain)}async connect(){if(!this.isAvailable())throw new Error("Binance Wallet not detected. Please install Binance Wallet extension.");try{var e;console.log("[BinanceWallet] Connecting...");const t=null!==(e=window.ethereum)&&void 0!==e&&e.isBinance?window.ethereum:window.BinanceChain,n=await t.request({method:"eth_requestAccounts"});if(!n||0===n.length)throw new Error("No accounts returned from Binance Wallet");return this.provider=new a.ethers.providers.Web3Provider(t,"any"),await(0,o.ensureBSCMainnet)(this.provider),console.log("[BinanceWallet] Successfully connected"),this.provider}catch(t){throw console.error("[BinanceWallet] Connection error:",t),this.provider=null,t}}async disconnect(){this.provider=null}}t.BinanceWalletConnector=i;const l=new i;t.binanceWalletConnector=l},function(e,t,n){"use strict";t.__esModule=!0,t.trustWalletConnector=t.TrustWalletConnector=void 0;var a=n(55),r=n(81),o=n(60);class i extends r.BaseWalletConnector{constructor(){super("Trust Wallet")}isAvailable(){var e,t;return"undefined"!==typeof window&&(!(null===(e=window.ethereum)||void 0===e||!e.isTrust)||(!(null===(t=window.ethereum)||void 0===t||!t.isTrustWallet)||!!window.trustwallet))}async connect(){if(!this.isAvailable())throw new Error("Trust Wallet not detected. Please install Trust Wallet or use Trust Wallet browser.");try{var e,t;let n;if(console.log("[TrustWallet] Connecting..."),null!==(e=window.ethereum)&&void 0!==e&&e.isTrust||null!==(t=window.ethereum)&&void 0!==t&&t.isTrustWallet)n=window.ethereum,console.log("[TrustWallet] Using in-app browser provider");else{if(!window.trustwallet)throw new Error("Trust Wallet provider not found");n=window.trustwallet,console.log("[TrustWallet] Using extension provider")}const r=await n.request({method:"eth_requestAccounts"});if(!r||0===r.length)throw new Error("No accounts returned from Trust Wallet");return this.provider=new a.ethers.providers.Web3Provider(n,"any"),await(0,o.ensureBSCMainnet)(this.provider),console.log("[TrustWallet] Successfully connected"),this.provider}catch(n){throw console.error("[TrustWallet] Connection error:",n),this.provider=null,n}}async disconnect(){this.provider=null}}t.TrustWalletConnector=i;const l=new i;t.trustWalletConnector=l},function(e,t,n){"use strict";t.__esModule=!0,t.okxWalletConnector=t.OKXWalletConnector=void 0;var a=n(55),r=n(81),o=n(60);class i extends r.BaseWalletConnector{constructor(){super("OKX Wallet")}isAvailable(){var e;return"undefined"!==typeof window&&Boolean(window.okxwallet||(null===(e=window.ethereum)||void 0===e?void 0:e.isOKXWallet))}async connect(){if(!this.isAvailable())throw new Error("OKX Wallet not detected. Please install OKX Wallet extension.");try{console.log("[OKXWallet] Connecting...");const e=window.okxwallet||window.ethereum,t=await e.request({method:"eth_requestAccounts"});if(!t||0===t.length)throw new Error("No accounts returned from OKX Wallet");return this.provider=new a.ethers.providers.Web3Provider(e,"any"),await(0,o.ensureBSCMainnet)(this.provider),console.log("[OKXWallet] Successfully connected"),this.provider}catch(e){throw console.error("[OKXWallet] Connection error:",e),this.provider=null,e}}async disconnect(){this.provider=null}}t.OKXWalletConnector=i;const l=new i;t.okxWalletConnector=l},function(e,t,n){"use strict";t.__esModule=!0,t.fantomWalletConnector=t.FantomWalletConnector=void 0;var a=n(55),r=n(81),o=n(60);class i extends r.BaseWalletConnector{constructor(){super("Fantom Wallet")}isAvailable(){var e;return"undefined"!==typeof window&&Boolean(window.ftmwallet||(null===(e=window.ethereum)||void 0===e?void 0:e.isFTM))}async connect(){if(!this.isAvailable())throw new Error("Fantom Wallet not detected. Please install Fantom Wallet extension.");try{console.log("[FantomWallet] Connecting...");const e=window.ftmwallet||window.ethereum,t=await e.request({method:"eth_requestAccounts"});if(!t||0===t.length)throw new Error("No accounts returned from Fantom Wallet");return this.provider=new a.ethers.providers.Web3Provider(e,"any"),await(0,o.ensureBSCMainnet)(this.provider),console.log("[FantomWallet] Successfully connected"),this.provider}catch(e){throw console.error("[FantomWallet] Connection error:",e),this.provider=null,e}}async disconnect(){this.provider=null}}t.FantomWalletConnector=i;const l=new i;t.fantomWalletConnector=l},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.specificInjectedConnector=t.injectedConnector=t.InjectedWalletConnector=t.GenericInjectedConnector=void 0;var r=a(n(91)),o=n(55),i=n(81),l=n(60);class s extends i.BaseWalletConnector{constructor(){super("Browser Wallet"),(0,r.default)(this,"walletType",null)}isAvailable(){return"undefined"!==typeof window&&Boolean(window.ethereum)}async connect(e){if(!this.isAvailable())throw new Error("No injected wallet detected. Please install a Web3 wallet like MetaMask, Trust Wallet, or OKX Wallet.");try{let t;if(console.log("[GenericInjected] Attempting to connect to injected provider"),e?(t=(0,l.getWalletProvider)(e),this.walletType=e,console.log("[GenericInjected] Trying specific wallet: "+e)):(t=window.ethereum,this.walletType=null,console.log("[GenericInjected] Using generic window.ethereum (works with in-app browsers)")),!t)throw new Error("Wallet provider not found"+(e?" for "+e:""));console.log("[GenericInjected] Requesting accounts...");const n=await t.request({method:"eth_requestAccounts"});if(console.log("[GenericInjected] Accounts received:",n),!n||0===n.length)throw new Error("No accounts returned from wallet");return this.provider=new o.ethers.providers.Web3Provider(t,"any"),console.log("[GenericInjected] Created Web3Provider, ensuring BSC Mainnet"),await(0,l.ensureBSCMainnet)(this.provider),console.log("[GenericInjected] Successfully connected"),this.provider}catch(t){throw console.error("[GenericInjected] Error connecting:",t),this.provider=null,this.walletType=null,t}}async disconnect(){this.provider=null,this.walletType=null}getWalletType(){return this.walletType}}t.GenericInjectedConnector=s;class c extends i.BaseWalletConnector{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Injected Wallet"),(0,r.default)(this,"walletType",null)}isAvailable(){return"undefined"!==typeof window&&Boolean(window.ethereum)}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"METAMASK";if("WALLETCONNECT"===e||"COINBASE"===e)throw new Error("Use WalletConnect or Coinbase connector instead");console.log("[InjectedConnector] Attempting to connect to "+e);const t=(0,l.getWalletProvider)(e);if(console.log(`[InjectedConnector] Provider for ${e}:`,t),!t){const t=`${e} wallet is not installed. Please install the ${e} extension.`;throw console.error("[InjectedConnector] "+t),new Error(t)}try{console.log("[InjectedConnector] Requesting accounts from "+e);const n=await t.request({method:"eth_requestAccounts"});if(console.log("[InjectedConnector] Accounts received:",n),!n||0===n.length)throw new Error("No accounts returned from wallet");return this.provider=new o.ethers.providers.Web3Provider(t,"any"),this.walletType=e,console.log("[InjectedConnector] Created Web3Provider, ensuring BSC Mainnet"),await(0,l.ensureBSCMainnet)(this.provider),console.log("[InjectedConnector] Successfully connected to "+e),this.provider}catch(n){throw console.error(`[InjectedConnector] Error connecting to ${e}:`,n),this.provider=null,this.walletType=null,n}}async disconnect(){this.provider=null,this.walletType=null}getWalletType(){return this.walletType}}t.InjectedWalletConnector=c;const d=new s;t.injectedConnector=d;const u=new c;t.specificInjectedConnector=u},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.coinbaseWalletConnector=t.CheeseSwapCoinbaseWallet=void 0;var r=a(n(91)),o=n(55),i=a(n(470)),l=n(81),s=n(60);const c=["REACT_APP_NETWORK_URL_1","REACT_APP_NETWORK_URL_2","REACT_APP_NETWORK_URL_3","REACT_APP_NETWORK_URL_4","REACT_APP_NETWORK_URL_5","REACT_APP_NETWORK_URL_6","REACT_APP_NETWORK_URL_7","REACT_APP_NETWORK_URL_8","REACT_APP_NETWORK_URL_9","REACT_APP_NETWORK_URL_10","REACT_APP_NETWORK_URL_11","REACT_APP_NETWORK_URL_12","REACT_APP_NETWORK_URL_13"].map(e=>Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAIN_ID:"56",REACT_APP_NETWORK_URL_1:"https://bsc-dataseed1.binance.org/",REACT_APP_NETWORK_URL_2:"https://bsc-dataseed2.binance.org/",REACT_APP_NETWORK_URL_3:"https://bsc-dataseed3.binance.org/",REACT_APP_NETWORK_URL_4:"https://bsc-dataseed1.bnbchain.org/",REACT_APP_NETWORK_URL_5:"https://bsc-dataseed.defibit.io/",REACT_APP_NETWORK_URL_6:"https://bsc-dataseed.ninicoin.io",REACT_APP_GOOGLE_ANALYTICS_ID:"UA-187991504-1",REACT_APP_PUBLIC_URL:"https://cheeseswap.app",REACT_APP_NODE_ENV:"production",REACT_APP_NETWORK_URL_7:"https://bsc-dataseed.ninicoin.io",REACT_APP_NETWORK_URL_8:"https://0.48.club/",REACT_APP_NETWORK_URL_9:"https://bsc-dataseed2.ninicoin.io/",REACT_APP_NETWORK_URL_10:"https://public-bsc-mainnet.fastnode.io/",REACT_APP_NETWORK_URL_11:"https://bsc.drpc.org/",REACT_APP_NETWORK_URL_12:"https://bsc.blockrazor.xyz/",REACT_APP_NETWORK_URL_13:"https://bsc.meowrpc.com",REACT_APP_TRANSACTIONS_SUBGRAPH_URL:"https://gateway.thegraph.com/api/e74f872faa2b79699e978d00e61b412b/subgraphs/id/5xa2cK1KdB4enwsv27k8dqzuecbwDJnSfrHkoJA9RrHF",REACT_APP_NETWORK_WSS_URL_1:"wss://bsc-mainnet.infura.io/ws/v3/5360ec7f835141b0bfa74eb029b61425",REACT_APP_WALLETCONNECT_PROJECT_ID:"61fa5b56203c18d546fb4e0e64bd73eb",REACT_APP_BUILD_VERSION:"v2.4.0"})[e]).filter(e=>"string"===typeof e);class d extends l.BaseWalletConnector{constructor(){super("Coinbase Wallet"),(0,r.default)(this,"sdk",null),(0,r.default)(this,"cbProvider",null)}isAvailable(){return!0}async connect(){try{return console.log("[CoinbaseWallet] Initializing Coinbase Wallet SDK..."),this.sdk=new i.default({appName:"CheeseSwap",appLogoUrl:"https://cheeseswap.app/images/coins/chs.png",darkMode:!1}),this.cbProvider=this.sdk.makeWeb3Provider(c[0]||"https://bsc-dataseed1.binance.org",56),console.log("[CoinbaseWallet] Requesting accounts..."),await this.cbProvider.request({method:"eth_requestAccounts"}),this.provider=new o.ethers.providers.Web3Provider(this.cbProvider,"any"),await(0,s.ensureBSCMainnet)(this.provider),console.log("[CoinbaseWallet] Successfully connected"),this.provider}catch(e){throw console.error("[CoinbaseWallet] Connection error:",e),await this.disconnect(),e}}async disconnect(){if(this.cbProvider&&this.cbProvider.close)try{await this.cbProvider.close()}catch(e){console.error("[CoinbaseWallet] Error disconnecting:",e)}this.sdk=null,this.cbProvider=null,this.provider=null}getCBProvider(){return this.cbProvider}}t.CheeseSwapCoinbaseWallet=d;const u=new d;t.coinbaseWalletConnector=u},,,,,,,function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')},,function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')},function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.MIGRATOR_ADDRESS=void 0;var r=a(n(599));t.MIGRATOR_ABI=r.default;t.MIGRATOR_ADDRESS="0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b"},function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},function(e){e.exports=JSON.parse('[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]')},function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.MULTICALL_NETWORKS=void 0;var r=n(24),o=a(n(603));t.MULTICALL_ABI=o.default;const i={[r.ChainId.MAINNET]:"0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb",[r.ChainId.BSCTESTNET]:""};t.MULTICALL_NETWORKS=i},function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const e=(0,r.useRef)(),t=(0,A.useSettingsMenuOpen)(),n=(0,A.useToggleSettingsMenu)(),a=(0,r.useContext)(i.ThemeContext),[o,y]=(0,s.useUserSlippageTolerance)(),[E,I]=(0,s.useUserDeadline)(),[F,P]=(0,s.useExpertModeManager)(),[S,M]=(0,s.useAudioModeManager)(),[R,N]=(0,r.useState)(!1);return(0,l.useOnClickOutside)(e,t?n:void 0),r.default.createElement(B,{ref:e},r.default.createElement(b.default,{isOpen:R,onDismiss:()=>N(!1),maxHeight:100},r.default.createElement(D,null,r.default.createElement(m.AutoColumn,{gap:"lg"},r.default.createElement(d.RowBetween,{style:{padding:"0 2rem"}},r.default.createElement("div",null),r.default.createElement(h.Text,{fontWeight:700,fontSize:18},"Are you sure?"),r.default.createElement(w,{onClick:()=>N(!1)})),r.default.createElement(T,null),r.default.createElement(m.AutoColumn,{gap:"lg",style:{padding:"0 2rem"}},r.default.createElement(h.Text,{fontWeight:700,fontSize:18},"Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."),r.default.createElement(h.Text,{fontWeight:600,fontSize:18},"ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."),r.default.createElement(f.ButtonError,{error:!0,padding:"12px",onClick:()=>{"confirm"===window.prompt('Please type the word "confirm" to enable expert mode.')&&(P(),N(!1))}},r.default.createElement(h.Text,{fontSize:18,fontWeight:700,id:"confirm-expert-mode"},"Turn On Expert Mode")))))),r.default.createElement(C,{onClick:n,id:"open-settings-dialog-button"},r.default.createElement(v,null),F&&r.default.createElement(x,null,r.default.createElement("span",{role:"img","aria-label":"wizard-icon"},"\ud83e\uddd9"))),t&&r.default.createElement(k,null,r.default.createElement(m.AutoColumn,{gap:"md",style:{padding:"1rem"}},r.default.createElement(h.Text,{fontWeight:600,fontSize:16},r.default.createElement(g.default,{translationId:86},"Transaction Settings")),r.default.createElement(c.default,{rawSlippage:o,setRawSlippage:y,deadline:E,setDeadline:I}),r.default.createElement(h.Text,{fontWeight:600,fontSize:16},r.default.createElement(g.default,{translationId:94},"Interface Settings")),r.default.createElement(d.RowBetween,null,r.default.createElement(d.RowFixed,null,r.default.createElement(u.TYPE.Black,{fontWeight:600,fontSize:14,color:a.colors.text2},r.default.createElement(g.default,{translationId:96},"Toggle Audio Mode"))),r.default.createElement(p.default,{isActive:S,toggle:M})))))};var r=E(n(0)),o=n(35),i=E(n(14)),l=n(222),s=n(90),c=a(n(605)),d=n(28),u=n(34),p=a(n(611)),m=n(47),f=n(72),A=n(68),h=n(40),b=a(n(154)),g=a(n(129));function y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const v=(0,i.default)(o.Settings)`
  height: 20px;
  width: 20px;

  > * {
    stroke: ${e=>{let{theme:t}=e;return t.colors.text1}};
  }
`,w=(0,i.default)(o.X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${e=>{let{theme:t}=e;return t.colors.text1}};
  }
`,C=i.default.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 36px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg4}};
  }

  svg {
    margin-top: 3px;
  }
`,x=i.default.div`
  position: absolute;
  bottom: -6px;
  right: 0px;
  font-size: 16px;
`,B=i.default.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,k=i.default.span`
  min-width: 20.125rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);

  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};

  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    min-width: 18.125rem;
    right: -46px;
  `}};
`,T=i.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
`,D=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border-radius: 20px;
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{rawSlippage:t,setRawSlippage:n,deadline:a,setDeadline:p}=e;const f=(0,i.useContext)(l.ThemeContext),A=(0,i.useRef)(),[h,v]=(0,i.useState)(""),[w,C]=(0,i.useState)(""),x=""===h||(t/100).toFixed(2)===Number.parseFloat(h).toFixed(2),B=""===w||(a/60).toString()===w;let k,T;k=""===h||x?x&&t<50?r.RiskyLow:x&&t>500?r.RiskyHigh:void 0:r.InvalidInput;T=""===w||B?void 0:o.InvalidInput;function D(e){v(e);try{const t=Number.parseInt((100*Number.parseFloat(e)).toString());!Number.isNaN(t)&&t<5e3&&n(t)}catch{}}function I(e){C(e);try{const t=60*Number.parseInt(e);!Number.isNaN(t)&&t>0&&p(t)}catch{}}return i.default.createElement(d.AutoColumn,{gap:"md"},i.default.createElement(d.AutoColumn,{gap:"sm"},i.default.createElement(u.RowFixed,null,i.default.createElement(c.TYPE.Black,{fontWeight:600,fontSize:14,color:f.colors.text2},i.default.createElement(m.default,{translationId:88},"Slippage tolerance")),i.default.createElement(s.default,{text:"Your transaction will revert if the price changes unfavorably by more than this percentage."})),i.default.createElement(u.RowBetween,null,i.default.createElement(b,{onClick:()=>{v(""),n(10)},active:10===t},"0.1%"),i.default.createElement(b,{onClick:()=>{v(""),n(50)},active:50===t},"0.5%"),i.default.createElement(b,{onClick:()=>{v(""),n(100)},active:100===t},"1%"),i.default.createElement(y,{active:![10,50,100].includes(t),warning:!x,tabIndex:-1},i.default.createElement(u.RowBetween,null,!h||k!==r.RiskyLow&&k!==r.RiskyHigh?null:i.default.createElement(E,null,i.default.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f")),i.default.createElement(g,{ref:A,placeholder:(t/100).toFixed(2),value:h,onBlur:()=>{D((t/100).toFixed(2))},onChange:e=>D(e.target.value),color:x?"":"red"}),"%"))),!!k&&i.default.createElement(u.RowBetween,{style:{fontSize:"14px",paddingTop:"7px",color:k===r.InvalidInput?"red":"#F3841E"}},k===r.InvalidInput?"Enter a valid slippage percentage":k===r.RiskyLow?"Your transaction may fail":"Your transaction may be frontrun")),i.default.createElement(d.AutoColumn,{gap:"sm"},i.default.createElement(u.RowFixed,null,i.default.createElement(c.TYPE.Black,{fontSize:14,fontWeight:600,color:f.colors.text2},i.default.createElement(m.default,{translationId:90},"Transaction deadline")),i.default.createElement(s.default,{text:"Your transaction will revert if it is pending for more than this long."})),i.default.createElement(u.RowFixed,null,i.default.createElement(y,{style:{width:"80px"},tabIndex:-1},i.default.createElement(g,{color:T?"red":void 0,onBlur:()=>{I((a/60).toString())},placeholder:(a/60).toString(),value:w,onChange:e=>I(e.target.value)})),i.default.createElement(c.TYPE.Body,{style:{paddingLeft:"8px"},fontSize:14},i.default.createElement(m.default,{translationId:92},"minutes")))))};var r,o,i=A(n(0)),l=A(n(14)),s=a(n(128)),c=n(34),d=n(47),u=n(28),p=n(75),m=a(n(129));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function A(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}!function(e){e.InvalidInput="InvalidInput",e.RiskyLow="RiskyLow",e.RiskyHigh="RiskyHigh"}(r||(r={})),function(e){e.InvalidInput="InvalidInput"}(o||(o={}));const h=l.default.button`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 12px;
  width: auto;
  min-width: 3rem;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  outline: none;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  :hover {
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg4}};
  }
  :focus {
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
`,b=(0,l.default)(h)`
  margin-right: 8px;
  :hover {
    cursor: pointer;
  }
  background-color: ${e=>{let{active:t,theme:n}=e;return t&&n.colors.primary1}};
  color: ${e=>{let{active:t,theme:n}=e;return t?n.colors.white:n.colors.text1}};
`,g=l.default.input`
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  font-size: 14px;
  width: auto;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${e=>{let{theme:t,color:n}=e;return"red"===n?t.colors.red1:t.colors.text1}};
  text-align: right;
`,y=(0,l.default)(h)`
  height: 2rem;
  position: relative;
  padding: 0 0.75rem;
  flex: 1;
  border: ${e=>{let{theme:t,active:n,warning:a}=e;return n&&"1px solid "+(a?t.colors.red1:t.colors.primary1)}};
  :hover {
    border: ${e=>{let{theme:t,active:n,warning:a}=e;return n&&"1px solid "+(a?(0,p.darken)(.1,t.colors.red1):(0,p.darken)(.1,t.colors.primary1))}};
  }

  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
  }
`,E=l.default.span`
  color: #f3841e;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: none;
  `}}
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n;let{content:a,show:r,children:l,placement:d="auto"}=e;const[f,A]=(0,o.useState)(null),[h,b]=(0,o.useState)(null),[g,y]=(0,o.useState)(null),{styles:E,update:v,attributes:w}=(0,i.usePopper)(f,h,{placement:d,strategy:"fixed",modifiers:[{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{element:g}}]}),C=(0,o.useCallback)(()=>{v&&v()},[v]);return(0,s.default)(C,r?100:null),o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{ref:A},l),o.default.createElement(c.default,null,o.default.createElement(u,Object.assign({show:r,ref:b,style:E.popper},w.popper),a,o.default.createElement(m,Object.assign({className:"arrow-"+(null!==(t=null===(n=w.popper)||void 0===n?void 0:n["data-popper-placement"])&&void 0!==t?t:""),ref:y,style:E.arrow},w.arrow)))))};var r=n(75),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),i=n(354),l=a(n(14)),s=a(n(312)),c=a(n(251));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}const u=l.default.div`
  z-index: 9999;

  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?1:0};
  transition: visibility 150ms linear, opacity 150ms linear;

  background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  box-shadow: 0 4px 8px 0 ${e=>{let{theme:t}=e;return(0,r.transparentize)(.9,t.colors.shadow1)}};
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  border-radius: 8px;
`,p=l.default.div`
  display: inline-block;
`,m=l.default.div`
  width: 8px;
  height: 8px;
  z-index: 9998;

  ::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 9998;

    content: '';
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
    transform: rotate(45deg);
    background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  }

  &.arrow-top {
    bottom: -5px;
    ::before {
      border-top: none;
      border-left: none;
    }
  }

  &.arrow-bottom {
    top: -5px;
    ::before {
      border-bottom: none;
      border-right: none;
    }
  }

  &.arrow-left {
    right: -5px;

    ::before {
      border-bottom: none;
      border-left: none;
    }
  }

  &.arrow-right {
    left: -5px;
    ::before {
      border-right: none;
      border-top: none;
    }
  }
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.BackArrow=function(e){let{to:t}=e;return r.default.createElement(y,{to:t},r.default.createElement(c.ArrowLeft,null))},t.CloseIcon=t.Button=void 0,t.ExternalLink=function(e){let{target:t="_blank",href:n,rel:a="noopener noreferrer",...i}=e;const l=(0,r.useCallback)(e=>{"_blank"===t||e.ctrlKey||e.metaKey?o.default.outboundLink({label:n},()=>{console.debug("Fired outbound link event",n)}):(e.preventDefault(),o.default.outboundLink({label:n},()=>{window.location.href=n}))},[n,t]);return r.default.createElement(h,Object.assign({target:t,rel:a,href:n,onClick:l},i))},t.StyledInternalLink=t.Spinner=t.LinkStyledButton=void 0;var r=u(n(0)),o=a(n(74)),i=n(76),l=u(n(14)),s=n(75),c=n(35);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const p=l.default.button.attrs(e=>{let{warning:t,theme:n}=e;return{backgroundColor:t?n.colors.red1:n.colors.primary1}})`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: 1px;
  outline: none;
  background-color: ${e=>{let{backgroundColor:t}=e;return t}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  width: 100%;

  :hover,
  :focus {
    background-color: ${e=>{let{backgroundColor:t}=e;return(0,s.darken)(.1,t)}};
  }

  :active {
    background-color: ${e=>{let{backgroundColor:t}=e;return(0,s.darken)(.3,t)}};
  }

  :disabled {
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
    cursor: auto;
  }
`;t.Button=p;const m=(0,l.default)(c.X)`
  cursor: pointer;
`;t.CloseIcon=m;const f=l.default.button`
  border: none;
  text-decoration: none;
  background: none;

  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  color: ${e=>{let{theme:t,disabled:n}=e;return n?t.colors.text2:t.colors.primary1}};
  font-weight: 700;

  :hover {
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :focus {
    outline: none;
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :active {
    text-decoration: none;
  }
`;t.LinkStyledButton=f;const A=(0,l.default)(i.Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  font-weight: 700;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;t.StyledInternalLink=A;const h=l.default.a`
  text-decoration: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  font-weight: 700;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;const b=l.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,g=l.default.img`
  animation: 2s ${b} linear infinite;
  width: 16px;
  height: 16px;
`;t.Spinner=g;const y=(0,l.default)(A)`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
`},function(e,t,n){"use strict";t.__esModule=!0,t.ThemedGlobalStyle=t.FixedGlobalStyle=void 0;var a=n(14);const r=a.createGlobalStyle`
    html, input, textarea, button {
      font-family: 'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      letter-spacing: -0.018em;
      font-display: swap;
    }
    @supports (font-variation-settings: normal) {
      html, input, textarea, button {
        font-family: 'Inter var', 'Noto Sans', sans-serif;
      }
    }

    html,
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
    }

    button {
      user-select: none;
    }

    html {
      font-family: 'Inter', 'Noto Sans', sans-serif;
      font-size: 16px;
      font-variant: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      text-rendering: optimizeLegibility;
    }

    /* Smooth scroll behavior */
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }
`;t.FixedGlobalStyle=r;const o=a.createGlobalStyle`
    /* Custom scrollbar styling */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${e=>{let{theme:t}=e;return t.colors.primary1}};
      border-radius: 10px;
      transition: background 0.3s ease;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.primary2}};
    }

    html {
      color: ${e=>{let{theme:t}=e;return t.colors.text1}};
      background-color: ${e=>{let{theme:t}=e;return t.colors.bg0}};
      background-image:
        radial-gradient(circle at 50% -20%, ${e=>{let{theme:t}=e;return t.colors.primary6}} 0, transparent 42rem);
    }

    body {
      min-height: 100vh;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    /* Modern focus styles */
    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible {
      outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary1}};
      outline-offset: 2px;
    }

    /* Smooth transitions for theme changes */
    body,
    body * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }
`;t.ThemedGlobalStyle=o},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.TYPE=void 0;var r=a(n(0)),o=n(40);const i=(0,a(n(14)).default)(o.Text)`
  color: ${e=>{let{color:t,theme:n}=e;return n.colors[t]}};
`,l={Main:e=>r.default.createElement(i,Object.assign({fontWeight:700,color:"text2"},e)),Link:e=>r.default.createElement(i,Object.assign({fontWeight:700,color:"primary1"},e)),Black:e=>r.default.createElement(i,Object.assign({fontWeight:700,color:"text1"},e)),Body:e=>r.default.createElement(i,Object.assign({fontWeight:600,fontSize:16,color:"text1"},e)),LargeHeader:e=>r.default.createElement(i,Object.assign({fontWeight:600,fontSize:24},e)),MediumHeader:e=>r.default.createElement(i,Object.assign({fontWeight:700,fontSize:18},e)),SubHeader:e=>r.default.createElement(i,Object.assign({fontWeight:600,fontSize:14},e)),Blue:e=>r.default.createElement(i,Object.assign({fontWeight:700,color:"primary1"},e)),DarkGray:e=>r.default.createElement(i,Object.assign({fontWeight:700,color:"text3"},e)),Italic:e=>r.default.createElement(i,Object.assign({fontWeight:700,fontSize:13,fontStyle:"italic",color:"text2"},e)),Error:e=>{let{error:t,...n}=e;return r.default.createElement(i,Object.assign({fontWeight:700,color:t?"red1":"text2"},n))}};t.TYPE=l},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{id:t,isActive:n,toggle:a}=e;return r.default.createElement(l,{id:t,isActive:n,onClick:a},r.default.createElement(i,{isActive:n,isOnSwitch:!0},"On"),r.default.createElement(i,{isActive:!n,isOnSwitch:!1},"Off"))};var r=a(n(0)),o=a(n(14));const i=o.default.span`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${e=>{let{theme:t,isActive:n,isOnSwitch:a}=e;return n?a?t.colors.primary1:t.colors.text4:"none"}};
  color: ${e=>{let{theme:t,isActive:n,isOnSwitch:a}=e;return n?a?t.colors.white:t.colors.text2:t.colors.text3}};
  font-size: 0.825rem;
  font-weight: 600;
`,l=o.default.button`
  border-radius: 16px;
  border: 2px solid ${e=>{let{theme:t,isActive:n}=e;return n?t.colors.primary5:t.colors.text4}};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  background-color: transparent;
`},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const e=(0,r.useRef)(),[t,n]=(0,c.default)(!1);return(0,s.useOnClickOutside)(e,t?n:void 0),r.default.createElement(f,{ref:e},r.default.createElement(m,{onClick:n},r.default.createElement(p,null)),t&&r.default.createElement(A,null,r.default.createElement(h,{id:"link",href:"#"},r.default.createElement(o.ArrowDown,{size:14}),"FARMS"),r.default.createElement(h,{id:"link",href:"https://pizza.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"Pizza"),r.default.createElement(h,{id:"link",href:"https://mango.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"Mango"),r.default.createElement(h,{id:"link",href:"https://kiwi.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"Kiwi"),r.default.createElement(h,{id:"link",href:"https://hots.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"Hots"),r.default.createElement(h,{id:"link",href:"https://cnft.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"CNFT"),r.default.createElement(h,{id:"link",href:"https://cnft.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Award,{size:14}),"CNFT"),r.default.createElement(h,{id:"link",href:"https://info.cheeseswap.app/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.PieChart,{size:14}),"Analytics"),r.default.createElement(h,{id:"link",href:"https://discord.gg/KeFQnRmyW8",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.MessageCircle,{size:14}),"Discord"),r.default.createElement(h,{id:"link",href:"https://github.com/cheeseswapbsc/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Code,{size:14}),"Github"),r.default.createElement(h,{id:"link",href:"https://skynet.certik.com/projects/cheeseswap",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(o.Code,{size:14}),"Certik")))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=n(35),i=a(n(14)),l=n(614),s=n(222),c=a(n(314)),d=n(34);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}const p=(0,i.default)(l.ReactComponent)`
  path {
    stroke: ${e=>{let{theme:t}=e;return t.colors.text1}};
  }
`,m=i.default.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 36px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg4}};
  }

  svg {
    margin-top: 3px;
  }
`,f=i.default.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,A=i.default.span`
  min-width: 12.125rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`,h=(0,i.default)(d.ExternalLink)`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  :hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`},function(e,t,n){"use strict";n.r(t),n.d(t,"ReactComponent",(function(){return d}));var a,r,o,i=n(0),l=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const c=e=>{let{svgRef:t,title:n,...i}=e;return l.a.createElement("svg",s({width:24,height:24,fill:"none",viewBox:"0 0 24 24",ref:t},i),n?l.a.createElement("title",null,n):null,a||(a=l.a.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"})),r||(r=l.a.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"})),o||(o=l.a.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"})))},d=l.a.forwardRef((e,t)=>l.a.createElement(c,s({svgRef:t},e)));t.default=n.p+"static/media/menu.62164403.svg"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(0)),o=n(76),i=n(35),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(14));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}const c=[{label:"Swap",to:"/swap"},{label:"Transactions",to:"/transactions"}],d=[{label:"Pizza Farm",href:"https://pizza.cheeseswap.app",icon:"\ud83d\udd25"},{label:"Kiwi Farm",href:"https://kiwi.cheeseswap.app"},{label:"Mango Farm",href:"https://mango.cheeseswap.app"},{label:"HOTS Farm",href:"https://hots.cheeseswap.app"},{label:"CNFT Farm",href:"https://cnft.cheeseswap.app"}],u=[{label:"Overview",href:"https://info.cheeseswap.app/#/home"},{label:"Tokens",href:"https://info.cheeseswap.app/#/tokens"},{label:"Pairs",href:"https://info.cheeseswap.app/#/pairs"},{label:"Accounts",href:"https://info.cheeseswap.app/#/accounts"}],p=[{label:"Audit (CertiK)",href:"https://skynet.certik.com/projects/cheeseswap"},{label:"Cross-Chain",to:"/bridge"},{label:"Transactions",to:"/transactions"},{label:"Docs",href:"https://docs.cheeseswap.app"},{label:"API",href:"https://api.cheeseswap.app"},{label:"Discord",href:"https://discord.gg/KeFQnRmyW8"},{label:"Github",href:"https://github.com/cheeseswapbsc/"}],m=l.default.nav`
  align-items: center;
  display: flex;
  font-size: 16px;
  line-height: 45px;
  font-weight: 700;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
  flex-wrap: nowrap;

  @media (max-width: 1280px) {
    font-size: 14px;
    gap: 0.35rem;
  }

  @media (max-width: 960px) {
    display: none;
  }
`,f=l.css`
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  display: inline-flex;
  font-weight: 700;
  padding: 0 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover,
  &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }

  @media (max-width: 1280px) {
    padding: 0 6px;
  }

  @media (max-width: 1100px) {
    padding: 0 4px;
    font-size: 0.9em;
  }
`,A=(0,l.default)(o.NavLink).attrs({activeClassName:"active"})`
  ${f}
`,h=l.default.button`
  ${f}
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 0.25rem;
  padding-right: 6px;

  svg {
    transition: transform 0.2s ease;
  }

  &:focus {
    outline: none;
  }
`,b=l.default.div`
  position: absolute;
  top: calc(100% - 4px);
  left: 0;
  display: flex;
  flex-direction: column;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  padding: 0.35rem 0.25rem;
  border-radius: 0.5rem;
  min-width: 180px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
  transition: opacity 0.15s ease, transform 0.2s ease;
  z-index: 5;
`,g=l.default.div`
  position: relative;
  display: inline-flex;

  &:hover ${b},
  &:focus-within ${b} {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  &:hover ${h} svg,
  &:focus-within ${h} svg {
    transform: rotate(180deg);
  }
`,y=l.css`
  border-radius: 0.4rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;
  font-weight: 600;
  padding: 0.45rem 0.75rem;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover,
  &.active {
    background: ${e=>{let{theme:t}=e;return t.colors.bg3}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  }
`,E=l.default.a`
  ${y}
`,v=(0,l.default)(o.NavLink).attrs({activeClassName:"active"})`
  ${y}
`,w=l.default.span`
  flex: 0 1 auto;
  min-width: 0;
`,C=l.default.span`
  flex-shrink: 0;
  font-size: 0.9rem;
  line-height: 1;
`,x=e=>{let{label:t,items:n}=e;return r.default.createElement(g,null,r.default.createElement(h,{type:"button"},t,r.default.createElement(i.ChevronDown,{size:16})),r.default.createElement(b,null,n.map(e=>e.to?r.default.createElement(v,{key:e.label,to:e.to,exact:!0},r.default.createElement(w,null,e.label),e.icon?r.default.createElement(C,{"aria-hidden":"true"},e.icon):null):r.default.createElement(E,{key:e.label,href:e.href,target:"_blank",rel:"noopener noreferrer"},r.default.createElement(w,null,e.label),e.icon?r.default.createElement(C,{"aria-hidden":"true"},e.icon):null))))};var B=()=>r.default.createElement(m,null,c.map(e=>{var t;return r.default.createElement(A,{key:e.label,to:null!==(t=e.to)&&void 0!==t?t:"/",exact:!0},e.label)}),r.default.createElement(x,{label:"Farms",items:d}),r.default.createElement(x,{label:"Analytics",items:u}),r.default.createElement(x,{label:"More",items:p}));t.default=B},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(0)),o=a(n(14)),i=n(90);const l=()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",color:"#F5F3F3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.default.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.default.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.default.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.default.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.default.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.default.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.default.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.default.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})),s=()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.default.createElement("path",{fill:"#F5F3F3",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})),c=o.default.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;var d=()=>{const[e,t]=(0,i.useDarkModeManager)();return r.default.createElement(c,{onClick:t},e?r.default.createElement(l,null):r.default.createElement(s,null))};t.default=d},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const{account:e}=(0,x.useWeb3)(),{ENSName:t}=(0,h.default)(null!==e&&void 0!==e?e:void 0),n=(0,g.useAllTransactions)(),a=(0,r.useMemo)(()=>Object.values(n).filter(g.isTransactionRecent).sort(W),[n]),o=a.filter(e=>!e.receipt).map(e=>e.hash),i=a.filter(e=>e.receipt).map(e=>e.hash);return r.default.createElement(r.default.Fragment,null,r.default.createElement(O,null),r.default.createElement(C.default,{ENSName:null!==t&&void 0!==t?t:void 0,pendingTransactions:o,confirmedTransactions:i}))};var r=k(n(0)),o=n(35),i=a(n(315)),l=k(n(14)),s=n(75),c=a(n(225)),d=a(n(226)),u=a(n(172)),p=a(n(227)),m=a(n(228)),f=a(n(229)),A=n(138),h=a(n(316)),b=n(68),g=n(150),y=n(38),E=n(72),v=a(n(155)),w=n(28),C=a(n(618)),x=n(134);function B(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(B=function(e){return e?n:t})(e)}function k(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=B(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const T=l.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
  }
`,D=l.default.div`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.red1}};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    margin-left: 6px;
    svg {
      width: 14px;
      height: 14px;
    }
  `}};
`,I=l.default.div`
  display: flex;
  align-items: center;
  gap: 0;
`,F=(0,l.default)(E.ButtonSecondary)`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
  
  @media (max-width: 600px) {
    padding: 0.4rem;
    border-radius: 10px;
  }
  
  @media (max-width: 400px) {
    padding: 0.3rem;
    border-radius: 8px;
  }
`,P=(0,l.default)(F)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.red1}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.red1}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  font-weight: 700;
  :hover,
  :focus {
    background-color: ${e=>{let{theme:t}=e;return(0,s.darken)(.1,t.colors.red1)}};
  }
`,S=(0,l.default)(F)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary4}};
  border: none;
  color: ${e=>{let{theme:t}=e;return t.colors.primaryText1}};
  font-weight: 700;

  :hover,
  :focus {
    border: 2px solid ${e=>{let{theme:t}=e;return(0,s.darken)(.05,t.colors.primary4)}};
    color: ${e=>{let{theme:t}=e;return t.colors.primaryText1}};
  }

  ${e=>{let{faded:t}=e;return t&&l.css`
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary5}};
      border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary5}};
      color: ${e=>{let{theme:t}=e;return t.colors.primaryText1}};

      :hover,
      :focus {
        border: 2px solid ${e=>{let{theme:t}=e;return(0,s.darken)(.05,t.colors.primary4)}};
        color: ${e=>{let{theme:t}=e;return(0,s.darken)(.05,t.colors.primaryText1)}};
      }
    `}}
`,M=(0,l.default)(F)`
  background-color: ${e=>{let{pending:t,theme:n}=e;return t?n.colors.primary1:n.colors.bg2}};
  border: 2px solid ${e=>{let{pending:t,theme:n}=e;return t?n.colors.primary1:n.colors.bg3}};
  color: ${e=>{let{pending:t,theme:n}=e;return t?n.colors.white:n.colors.text1}};
  font-weight: 700;
  :hover,
  :focus {
    background-color: ${e=>{let{pending:t,theme:n}=e;return t?(0,s.darken)(.05,n.colors.primary1):(0,s.lighten)(.05,n.colors.bg2)}};

    :focus {
      border: 2px solid
        ${e=>{let{pending:t,theme:n}=e;return t?(0,s.darken)(.1,n.colors.primary1):(0,s.darken)(.1,n.colors.bg3)}};
    }
  }
`,R=l.default.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 700;
  
  @media (max-width: 600px) {
    font-size: 0.875rem;
    margin: 0 0.25rem 0 0.15rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.75rem;
    margin: 0 0.15rem 0 0.1rem;
  }
`,N=(0,l.default)(o.Activity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;function W(e,t){return t.addedTime-e.addedTime}function U(e){let{walletType:t,walletIcon:n}=e;return n?r.default.createElement(T,{size:16},r.default.createElement("img",{src:n,alt:"Wallet logo"})):"METAMASK"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:u.default,alt:"MetaMask logo"})):"TRUST_WALLET"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:p.default,alt:"Trust Wallet logo"})):"OKX_WALLET"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:m.default,alt:"OKX Wallet logo"})):"FANTOM_WALLET"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:f.default,alt:"Fantom Wallet logo"})):"WALLETCONNECT"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:d.default,alt:"WalletConnect logo"})):"COINBASE"===t?r.default.createElement(T,{size:16},r.default.createElement("img",{src:c.default,alt:"Coinbase Wallet logo"})):null}function O(){const{account:e,walletType:t,walletMeta:n,error:a,chainId:l,disconnect:s}=(0,x.useWeb3)(),{ENSName:c}=(0,h.default)(null!==e&&void 0!==e?e:void 0),d=(0,g.useAllTransactions)(),u=(0,r.useMemo)(()=>Object.values(d).filter(g.isTransactionRecent).sort(W),[d]).filter(e=>!e.receipt).map(e=>e.hash),p=!!u.length,m=(0,b.useWalletModalToggle)(),[f,E]=(0,r.useState)(!1),C=l&&l!==A.CHAIN_ID,B=async e=>{e.stopPropagation(),await s()},k=t=>{t.stopPropagation(),e&&(navigator.clipboard.writeText(e),E(!0),setTimeout(()=>E(!1),1200))};return e?r.default.createElement(I,null,r.default.createElement(M,{id:"web3-status-connected",onClick:m,pending:p,style:{transition:"background 0.3s, color 0.3s"}},p?r.default.createElement(w.RowBetween,null,r.default.createElement(R,null,null===u||void 0===u?void 0:u.length," Pending")," ",r.default.createElement(v.default,{stroke:"white"})):r.default.createElement(r.default.Fragment,null,r.default.createElement(R,{style:{marginRight:8}},c||(0,y.shortenAddress)(e)),t&&r.default.createElement("span",{style:{marginRight:8}},r.default.createElement(U,{walletType:t,walletIcon:null===n||void 0===n?void 0:n.icon})),r.default.createElement("span",{style:{marginRight:8,cursor:"pointer"},title:f?"Copied!":"Copy Address",onClick:k},r.default.createElement(o.Copy,{size:16,color:f?"#4caf50":"#888"})),r.default.createElement("span",{style:{display:"flex",alignItems:"center"}},r.default.createElement("img",{src:i.default,alt:"BSC Network",style:{height:18,width:"auto",marginLeft:4}})))),r.default.createElement(D,{onClick:B,title:"Disconnect Wallet"},r.default.createElement(o.LogOut,null))):a||C?r.default.createElement(P,{onClick:m,style:{animation:"fadein 0.3s"}},r.default.createElement(N,null),r.default.createElement(R,null,C?"Wrong Network":"Error"),C&&r.default.createElement("span",{style:{marginLeft:8,color:"#e53935",fontWeight:500}},"Please connect to ",A.NETWORK_NAME)):r.default.createElement(S,{id:"connect-wallet",onClick:m,faded:!e,style:{animation:"fadein 0.3s"}},r.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"}},r.default.createElement("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),r.default.createElement("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),r.default.createElement("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})),r.default.createElement(R,null,"Connect Wallet"))}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{pendingTransactions:t,confirmedTransactions:a,ENSName:i}=e;const{account:A,connect:b,isConnected:g,error:y,clearError:N,walletType:W,walletMeta:U,discoveredWallets:O}=(0,h.useWeb3)(),[L,j]=(0,r.useState)(M),[V,z]=(0,r.useState)(),[Y,Q]=(0,r.useState)(),K=(0,s.useWalletModalOpen)(),G=(0,s.useWalletModalToggle)(),H=(0,l.default)(A);(0,r.useEffect)(()=>{A&&!H&&K&&G()},[A,H,G,K]),(0,r.useEffect)(()=>{K&&(Q(!1),j(M))},[K]),(0,r.useEffect)(()=>{if(!y||!K)return;const e=setTimeout(()=>{N(),Q(!1),j(M)},3500);return()=>clearTimeout(e)},[y,K,N]);const Z=(0,l.default)(g),q=(0,l.default)(W);(0,r.useEffect)(()=>{K&&(g&&!Z||W&&W!==q&&!y)&&j(M)},[j,g,y,W,K,Z,q]);const X=async(e,t,n,a)=>{const r=Object.values(m.SUPPORTED_WALLETS).find(t=>t.type===e),i=n||(null===r||void 0===r?void 0:r.name)||"Unknown";o.default.event({category:"Wallet",action:"Change Wallet",label:i}),z({walletType:e,rdns:t,name:i,icon:a}),j(R);try{await b(e,t)}catch(l){console.error("Connection error:",l),Q(!0)}},J=async()=>{try{await b("INJECTED")}catch(e){console.error("Refresh connection error:",e)}};return r.default.createElement(c.default,{isOpen:K,onDismiss:G,minHeight:!1,maxHeight:90},r.default.createElement(w,null,y?r.default.createElement(B,null,r.default.createElement(E,{onClick:G},r.default.createElement(v,null)),r.default.createElement(C,null,r.default.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f")," Connection Error"),r.default.createElement(x,null,r.default.createElement(F,null,r.default.createElement("h5",null,y.includes("chain")||y.includes("network")?"Please connect to the BSC Mainnet network.":"Unable to connect to your wallet. Please try refreshing the page or check your wallet extension."),r.default.createElement("a",{href:"https://docs.bnbchain.org/docs/wallets/wallet-tutorial-overview",target:"_blank",rel:"noopener noreferrer"},"Learn how to connect")),r.default.createElement(P,{onClick:J},r.default.createElement("span",{role:"img","aria-label":"refresh"},"\ud83d\udd04")," Try Again"))):A&&L===M?r.default.createElement(d.default,{toggleWalletModal:G,pendingTransactions:t,confirmedTransactions:a,ENSName:i,openOptions:()=>j(S)}):r.default.createElement(B,null,r.default.createElement(E,{onClick:G},r.default.createElement(v,null)),L!==M?r.default.createElement(C,{color:"blue"},r.default.createElement(I,{onClick:()=>{Q(!1),j(M)}},"Back")):r.default.createElement(C,null,r.default.createElement("span",null,"Connect Wallet")),r.default.createElement(x,null,L===R?r.default.createElement(u.default,{walletType:null===V||void 0===V?void 0:V.walletType,walletName:null===V||void 0===V?void 0:V.name,walletIcon:null===V||void 0===V?void 0:V.icon,error:Y,setPendingError:Q,tryActivation:()=>V&&X(V.walletType,V.rdns,V.name,V.icon)}):r.default.createElement(r.default.Fragment,null,r.default.createElement(D,null,r.default.createElement("strong",null,"Choose a wallet"),r.default.createElement("span",null,"Connect securely to start using CheeseSwap")),r.default.createElement(T,null,function(){const e=[],t=new Set(O.map(e=>e.info.rdns));O.forEach(t=>{var n;const a=(0,h.rdnsToWalletType)(t.info.rdns),o=!!A&&(null===U||void 0===U?void 0:U.rdns)===t.info.rdns;e.push(r.default.createElement(p.default,{key:"eip6963-"+t.info.rdns,id:"connect-"+t.info.rdns,onClick:()=>X(a,t.info.rdns,t.info.name,t.info.icon),active:o,color:(null===(n=m.SUPPORTED_WALLETS[a])||void 0===n?void 0:n.color)||"#666",header:t.info.name,subheader:null,icon:t.info.icon,clickable:!o,statusLabel:"Detected",tooltip:`Connect with the ${t.info.name} extension (detected in this browser).`}))});const a="undefined"!==typeof window&&Boolean(window.ethereum);if(0===O.length&&a){const t=m.SUPPORTED_WALLETS.INJECTED;t&&e.push(r.default.createElement(p.default,{key:"INJECTED",id:"connect-INJECTED",onClick:()=>X("INJECTED"),active:!!A&&"INJECTED"===W&&!(null!==U&&void 0!==U&&U.rdns),color:t.color,header:"Browser Wallet",subheader:null,icon:n(121)("./"+t.iconName),clickable:!0,statusLabel:"Detected",tooltip:"Connect with the wallet injected into this browser."}))}if(!t.has("com.binance.wallet")&&"undefined"!==typeof window&&window.BinanceChain){const t=m.SUPPORTED_WALLETS.BINANCE;t&&e.push(r.default.createElement(p.default,{key:"BINANCE",id:"connect-BINANCE",onClick:()=>X("BINANCE"),active:!!A&&"BINANCE"===W,color:t.color,header:t.name,subheader:null,icon:n(121)("./"+t.iconName),clickable:"BINANCE"!==W,statusLabel:"Detected",tooltip:"Binance Chain Wallet extension."}))}const o=m.SUPPORTED_WALLETS.WALLETCONNECT;if(o&&e.push(r.default.createElement(p.default,{key:"WALLETCONNECT",id:"connect-WALLETCONNECT",onClick:()=>X("WALLETCONNECT"),active:!!A&&"WALLETCONNECT"===W,color:o.color,header:o.name,subheader:null,icon:n(121)("./"+o.iconName),clickable:"WALLETCONNECT"!==W,statusLabel:"QR code / mobile",tooltip:"Scan a QR code with any WalletConnect-compatible mobile wallet."})),!t.has("com.coinbase.wallet")){const t=m.SUPPORTED_WALLETS.COINBASE;t&&e.push(r.default.createElement(p.default,{key:"COINBASE",id:"connect-COINBASE",onClick:()=>X("COINBASE"),active:!!A&&"COINBASE"===W,color:t.color,header:t.name,subheader:null,icon:n(121)("./"+t.iconName),clickable:"COINBASE"!==W,statusLabel:"App / extension",tooltip:"Connect with the Coinbase Wallet app or extension."}))}if(0===O.length&&!a){const t=m.SUPPORTED_WALLETS.METAMASK;t&&e.push(r.default.createElement(p.default,{key:"install-metamask",id:"install-metamask",link:"https://metamask.io/download/",color:t.color,header:"Install MetaMask",subheader:null,icon:n(121)("./"+t.iconName),statusLabel:"Not installed",tooltip:"No browser wallet detected. Install MetaMask to get started."}))}return e}())),L!==R&&r.default.createElement(k,null,r.default.createElement("span",null,"New to BSC? \xa0")," ",r.default.createElement(f.ExternalLink,{href:"https://docs.binance.org/smart-chain/wallet/metamask.html"},"Learn more about wallets"))))))};var r=g(n(0)),o=a(n(74)),i=g(n(14)),l=a(n(619)),s=n(68),c=a(n(154)),d=a(n(620)),u=a(n(626)),p=a(n(319)),m=n(60),f=n(34),A=n(318),h=n(134);function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const y=i.keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,E=i.default.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.08);
    transform: rotate(90deg);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.9);
  }
`,v=(0,i.default)(A.ReactComponent)`
  path {
    stroke: ${e=>{let{theme:t}=e;return t.colors.text2}};
    stroke-width: 2;
  }
`,w=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  width: 100%;
  animation: ${y} 0.3s ease-out;
  position: relative;
`,C=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 3.25rem 0 1.25rem;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: -0.025em;
  color: ${e=>"blue"===e.color?e=>{let{theme:t}=e;return t.colors.primary1}:e=>{let{theme:t}=e;return t.colors.text1}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}}40;
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 1rem 1rem 0.75rem 1rem;
    font-size: 0.9375rem;
  `}};
`,x=i.default.div`
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  padding: 1rem 1.25rem 1.25rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  max-height: calc(68vh - 64px);
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Hidden scrollbar for modern browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 1rem;
    max-height: calc(59.5vh - 140px);
  `}};
`,B=i.default.div`
  position: relative;
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  border-radius: 20px;
  overflow: hidden;

  h5 {
    margin: 0;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${e=>{let{theme:t}=e;return t.colors.text1}};
    
    a {
      color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
      text-decoration: none;
      margin-left: 0.375rem;
      font-weight: 500;
      transition: opacity 0.2s ease;
      
      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    }
  }

  h5:last-child {
    margin-bottom: 0;
  }

  h4 {
    margin: 0 0 0.75rem 0;
    font-weight: 500;
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  }
`,k=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}}40;
  font-size: 0.8125rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  font-weight: 400;
  
  span {
    color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  }
  
  a {
    color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
    font-weight: 500;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    margin-top: 1rem;
    padding-top: 1rem;
    font-size: 0.75rem;
  `}};
`,T=i.default.div`
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    grid-gap: 0.625rem;
  `}};
`,D=i.default.div`
  margin: 0 0 0.875rem;
  text-align: center;

  strong {
    display: block;
    color: ${e=>{let{theme:t}=e;return t.colors.text1}};
    font-size: 0.9375rem;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 0.25rem;
    color: ${e=>{let{theme:t}=e;return t.colors.text3}};
    font-size: 0.75rem;
  }
`,I=i.default.div`
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.9375rem;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: translateX(-2px);
  }
  
  &::before {
    content: '←';
    margin-right: 0.375rem;
    font-size: 1rem;
    transition: transform 0.2s ease;
  }
  
  &:hover::before {
    transform: translateX(-2px);
  }
`,F=i.default.div`
  padding: 0.875rem;
  border-radius: 10px;
  background-color: rgba(255, 82, 82, 0.08);
  border: 1px solid rgba(255, 82, 82, 0.25);
  color: ${e=>{let{theme:t}=e;return t.colors.red1}};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.75rem;
`,P=i.default.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: none;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary2}};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,S="options",M="account",R="pending"},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){const t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e},[e]),t.current};var a=n(0)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{toggleWalletModal:t,pendingTransactions:n,confirmedTransactions:a,ENSName:p,openOptions:f}=e;const{chainId:v,account:B}=(0,l.useActiveWeb3React)(),{walletType:k,walletMeta:j,disconnect:Y}=(0,x.useWeb3)(),Q=(0,r.useContext)(i.ThemeContext),K=(0,o.useDispatch)();function G(){return j&&j.icon?r.default.createElement(L,{size:16},r.default.createElement("img",{src:j.icon,alt:j.name+" logo"})):"METAMASK"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:b.default,alt:"MetaMask logo"})):"TRUST_WALLET"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:g.default,alt:"Trust Wallet logo"})):"OKX_WALLET"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:y.default,alt:"OKX Wallet logo"})):"FANTOM_WALLET"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:E.default,alt:"Fantom Wallet logo"})):"WALLETCONNECT"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:h.default,alt:"WalletConnect logo"})):"COINBASE"===k?r.default.createElement(L,{size:16},r.default.createElement("img",{src:A.default,alt:"Coinbase Wallet logo"})):null}const H=(0,r.useCallback)(()=>{v&&K((0,s.clearAllTransactions)({chainId:v}))},[K,v]);return r.default.createElement(r.default.Fragment,null,r.default.createElement(D,null,r.default.createElement(W,{onClick:t},r.default.createElement(U,null)),r.default.createElement(T,null,"Account"),r.default.createElement(P,null,r.default.createElement(S,null,r.default.createElement(I,null,r.default.createElement(F,null,function(){if(j&&j.name)return r.default.createElement(O,null,"Connected with ",j.name);const e=Object.values(m.SUPPORTED_WALLETS).find(e=>e.walletType===k),t=(null===e||void 0===e?void 0:e.name)||"Unknown";return r.default.createElement(O,null,"Connected with ",t)}(),r.default.createElement("div",null,r.default.createElement(V,{style:{fontSize:".825rem",fontWeight:600,marginRight:"8px"},onClick:()=>{Y()}},"Disconnect"),r.default.createElement(V,{style:{fontSize:".825rem",fontWeight:600},onClick:()=>{f()}},"Change"))),r.default.createElement(F,{id:"web3-account-identifier-row"},r.default.createElement(R,null,p?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,G(),r.default.createElement("p",null," ",p))):r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,G(),r.default.createElement("p",null," ",B&&(0,c.shortenAddress)(B)))))),r.default.createElement(F,null,p?r.default.createElement(r.default.Fragment,null,r.default.createElement(R,null,r.default.createElement("div",null,B&&r.default.createElement(u.default,{toCopy:B},r.default.createElement("span",{style:{marginLeft:"4px"}},"Copy Address")),v&&B&&r.default.createElement(N,{hasENS:!!p,isENS:!0,href:v&&(0,c.getBscscanLink)(v,p,"address")},r.default.createElement(w.ExternalLink,{size:16}),r.default.createElement("span",{style:{marginLeft:"4px"}},"View on bscscan"))))):r.default.createElement(r.default.Fragment,null,r.default.createElement(R,null,r.default.createElement("div",null,B&&r.default.createElement(u.default,{toCopy:B},r.default.createElement("span",{style:{marginLeft:"4px"}},"Copy Address")),v&&B&&r.default.createElement(N,{hasENS:!!p,isENS:!1,href:(0,c.getBscscanLink)(v,B,"address")},r.default.createElement(w.ExternalLink,{size:16}),r.default.createElement("span",{style:{marginLeft:"4px"}},"View on bscscan")))))))))),n.length||a.length?r.default.createElement(M,null,r.default.createElement(d.AutoRow,{mb:"1rem",style:{justifyContent:"space-between"}},r.default.createElement(C.TYPE.Body,null,"Recent Transactions"),r.default.createElement(C.LinkStyledButton,{onClick:H},"(clear all)")),z(n),z(a)):r.default.createElement(M,null,r.default.createElement(C.TYPE.Body,{color:Q.colors.text1},"Your transactions will appear here...")))};var r=k(n(0)),o=n(39),i=k(n(14)),l=n(22),s=n(176),c=n(38),d=n(28),u=a(n(621)),p=a(n(625)),m=n(58),f=n(318),A=a(n(225)),h=a(n(226)),b=a(n(172)),g=a(n(227)),y=a(n(228)),E=a(n(229)),v=n(72),w=n(35),C=n(34),x=n(134);function B(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(B=function(e){return e?n:t})(e)}function k(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=B(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const T=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  padding: 1rem 1rem;
  font-weight: 700;
  color: ${e=>"blue"===e.color?e=>{let{theme:t}=e;return t.colors.primary1}:"inherit"};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    padding: 1rem;
  `}};
`,D=i.default.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 700;
  }
`,I=i.default.div`
  padding: 1rem;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  border-radius: 20px;
  position: relative;
  display: grid;
  grid-row-gap: 12px;
  margin-bottom: 20px;
`,F=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};

  div {
    ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
    align-items: center;
  }
`,P=i.default.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  padding: 0rem 1rem;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`padding: 0rem 1rem 1.5rem 1rem;`}};
`,S=i.default.div`
  h5 {
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  h4 {
    margin: 0;
    font-weight: 700;
  }
`,M=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  padding: 1.5rem;
  flex-grow: 1;
  overflow: auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 20px;

  h5 {
    margin: 0;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  }
`,R=i.default.div`
  display: flex;
  justify-content: space-between;
  min-width: 0;
  width: 100%;

  font-weight: 700;
  font-size: 1.25rem;

  a:hover {
    text-decoration: underline;
  }

  p {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,N=(0,i.default)(C.ExternalLink)`
  font-size: 0.825rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  margin-left: 1rem;
  font-size: 0.825rem;
  display: flex;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
`,W=i.default.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`,U=(0,i.default)(f.ReactComponent)`
  path {
    stroke: ${e=>{let{theme:t}=e;return t.colors.text4}};
  }
`,O=i.default.div`
  width: initial;
  font-size: 0.825rem;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
`,L=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    align-items: flex-end;
  `}};
`,j=i.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
`,V=(0,i.default)(v.ButtonSecondary)`
  width: fit-content;
  font-weight: 600;
  margin-left: 8px;
  font-size: 0.825rem;
  padding: 4px 6px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;function z(e){return r.default.createElement(j,null,e.map((e,t)=>r.default.createElement(p.default,{key:t,hash:e})))}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){const[t,n]=(0,i.default)();return r.default.createElement(c,{onClick:()=>n(e.toCopy)},t?r.default.createElement(d,null,r.default.createElement(s.CheckCircle,{size:"16"}),r.default.createElement(d,null,"Copied")):r.default.createElement(d,null,r.default.createElement(s.Copy,{size:"16"})),t?"":e.children)};var r=a(n(0)),o=a(n(14)),i=a(n(622)),l=n(34),s=n(35);const c=(0,o.default)(l.LinkStyledButton)`
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  font-size: 0.825rem;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
`,d=o.default.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;const[t,n]=(0,o.useState)(!1),a=(0,o.useCallback)(e=>{const t=(0,r.default)(e);n(t)},[]);return(0,o.useEffect)(()=>{if(t){const t=setTimeout(()=>{n(!1)},e);return()=>{clearTimeout(t)}}},[t,n,e]),[t,a]};var r=a(n(623)),o=n(0)},,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n;let{hash:a}=e;const{chainId:o}=(0,l.useActiveWeb3React)(),c=(0,d.useAllTransactions)(),b=null===c||void 0===c?void 0:c[a],g=null===b||void 0===b?void 0:b.summary,y=!(null!==b&&void 0!==b&&b.receipt),E=!y&&b&&(1===(null===(t=b.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=b.receipt)||void 0===n?void 0:n.status));return o?r.default.createElement(m,null,r.default.createElement(A,{href:(0,s.getBscscanLink)(o,a,"transaction"),pending:y,success:E},r.default.createElement(u.RowFixed,null,r.default.createElement(f,null,null!==g&&void 0!==g?g:a," \u2197")),r.default.createElement(h,{pending:y,success:E},y?r.default.createElement(p.default,null):E?r.default.createElement(i.CheckCircle,{size:"16"}):r.default.createElement(i.Triangle,{size:"16"})))):null};var r=a(n(0)),o=a(n(14)),i=n(35),l=n(22),s=n(38),c=n(34),d=n(150),u=n(28),p=a(n(155));const m=o.default.div``,f=o.default.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`,A=(0,o.default)(c.ExternalLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-weight: 700;
  font-size: 0.825rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
`,h=o.default.div`
  color: ${e=>{let{pending:t,success:n,theme:a}=e;return t?a.colors.primary1:n?a.colors.green1:a.colors.red1}};
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,a;let{walletType:o,walletName:s,walletIcon:c,error:u=!1,setPendingError:E,tryActivation:v}=e;const w=null===(t=window)||void 0===t||null===(a=t.ethereum)||void 0===a?void 0:a.isMetaMask,[C,x]=(0,r.useState)(null),[B,k]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if("WALLETCONNECT"!==o)return;return d.walletConnectConnector.onDisplayUri(x)},[o]),(0,r.useEffect)(()=>{C&&p.toDataURL(C,{width:400,margin:1}).then(k).catch(()=>k(null))},[C]),r.default.createElement(m,null,!u&&"WALLETCONNECT"===o&&B&&r.default.createElement(y,null,r.default.createElement("img",{src:B,alt:"WalletConnect QR code"}),r.default.createElement("span",null,"Scan with a WalletConnect-compatible wallet")),r.default.createElement(A,{error:u},r.default.createElement(g,null,u?r.default.createElement(h,null,r.default.createElement("div",null,"Error connecting."),r.default.createElement(b,{onClick:()=>{E(!1),o&&v(o)}},"Try Again")):r.default.createElement(r.default.Fragment,null,r.default.createElement(f,null),r.default.createElement("div",null,r.default.createElement("strong",{style:{display:"block"}},"Confirm in your wallet"),r.default.createElement("span",{style:{display:"block",opacity:.72,fontSize:"0.75rem",marginTop:2}},"Accept the connection request to continue"))))),c&&s?r.default.createElement(i.default,{id:"connect-pending-"+s,clickable:!1,color:"#666",header:s,subheader:"Waiting for wallet confirmation...",icon:c}):Object.keys(l.SUPPORTED_WALLETS).map(e=>{const t=l.SUPPORTED_WALLETS[e];if(t.walletType===o){if("METAMASK"===o||"TRUST_WALLET"===o||"OKX_WALLET"===o||"FANTOM_WALLET"===o){if(w&&"MetaMask"!==t.name)return null;if(!w&&"MetaMask"===t.name)return null}return r.default.createElement(i.default,{id:"connect-"+e,key:e,clickable:!1,color:t.color,header:t.name,subheader:t.description,icon:n(121)("./"+t.iconName)})}return null}))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),o=a(n(14)),i=a(n(319)),l=n(58),s=n(75),c=a(n(155)),d=n(200);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}const p=n(389),m=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  width: 100%;
  & > * {
    width: 100%;
  }
`,f=(0,o.default)(c.default)`
  margin-right: 1rem;
`,A=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: flex-start;
  border-radius: 14px;
  margin-bottom: 12px;
  padding: 0.25rem;
  color: ${e=>{let{theme:t,error:n}=e;return n?t.colors.red1:"inherit"}};
  background: ${e=>{let{theme:t,error:n}=e;return n?"rgba(255, 82, 82, 0.08)":t.colors.primary1+"10"}};
  border: 1px solid ${e=>{let{theme:t,error:n}=e;return n?t.colors.red1:t.colors.primary1+"55"}};

  & > * {
    padding: 1rem;
  }
`,h=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: flex-start;
`,b=o.default.div`
  border-radius: 8px;
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg4}};
  margin-left: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: ${e=>{let{theme:t}=e;return(0,s.darken)(.1,t.colors.text4)}};
  }
`,g=o.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: center;
`,y=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 12px;
  padding: 0.75rem;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};

  img {
    width: 200px;
    height: 200px;
  }

  span {
    color: #15161b;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
  }
`},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/arrow-down-blue.70ef93bb.svg"},function(e,t,n){e.exports=n.p+"static/media/arrow-down-grey.91343ea9.svg"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n.p+"static/media/arrow-right.2d14d4c1.svg"},function(e,t,n){e.exports=n.p+"static/media/cheeseswap-logo.8d42abb8.svg"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n.p+"static/media/circle-grey.0c483640.svg"},function(e,t,n){e.exports=n.p+"static/media/circle.f1aad185.svg"},function(e,t,n){e.exports=n.p+"static/media/dropdown-blue.7ada1115.svg"},function(e,t,n){e.exports=n.p+"static/media/dropdown.32b15d66.svg"},function(e,t,n){e.exports=n.p+"static/media/dropup-blue.f545db69.svg"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n.p+"static/media/injected.7a34eb81.png"},function(e,t,n){e.exports=n.p+"static/media/injected.9d34ded5.svg"},function(e,t,n){e.exports=n.p+"static/media/link.b798901b.svg"},function(e,t,n){e.exports=n.p+"static/media/magnifying-glass.c363eccf.svg"},function(e,t,n){e.exports=n.p+"static/media/menu.62164403.svg"},function(e,t,n){e.exports=n.p+"static/media/plus-blue.b27c56c0.svg"},function(e,t,n){e.exports=n.p+"static/media/plus-grey.b7617f93.svg"},function(e,t,n){e.exports=n.p+"static/media/question-mark.d6589d7f.svg"},function(e,t,n){e.exports=n.p+"static/media/question.e789b003.svg"},function(e,t,n){e.exports=n.p+"static/media/spinner.ffc0b699.svg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAACEFBMVEX/zzj/yTj7xDH6xDL5wzL5wzH5wjH5wjD4wjH4wjD5wTH4wTH5wDH5wDD4wDH4wDD3vzD3vjD0vjDyuTDytzDoqS3nqCzlqSznpirjpi3fpjDjoyrenCfNlVvXkyzJekY9BQAAAAD/zTT/zDH8yzL8yTP/yjX4wDD2vjD/yzL4vy/3vjD5wTD4vy/3vjD3vzD0vDD0vC/5wjH1vTD2vDD/yTP6wTH5wDH3vzD+xTL6wTH6wDH5wDH9xDL7xDH2vzD6wTL3vzH8xjL5wDH8xjL7wTH4wTH5wDL5wDH4vzH8xTH6wzH7wjH5wjH5wDH3vjD4vzD2vTH2vTD6wTH4vzD3vTH2vTH3vjD3vjD3vzD2vjD2vS/2vjD2vjD2vTD2vTD2vTD2vjD2vTD2vTD2vS/1vS/2vTD1vS/1vS/2vTD1vTD1vS/1vTD1vTD1vS/1vC/2vjD1vS/1vC/2vTD1vTD2vTD1vC/1vC/2vTD2vTD2vTD2vTD2vjD2vTD2vTD1vC/1vjD1vjD1vTD1vC/0vC/1vC/1vC/1vC/1vC/1vDD1vC/0uy/1vTD0vDD1vC/1vTD1vC/0vDD1vDD1vC/0uy/0vC/0uy/1vC/1vTD1vDD1vDD0uzD1vDD0uzD0uzD0uy/0uzD1vDD0vC/0uy/0vDD1vDD1vDD1vDD0uy/0uy/0uy/0uy/0uy/zui/0uy/zui+/4vZiAAAArnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQICAgMDAwQEBAUFBQYGBgcHBwcICAgJCgoMDQ0ODg8PDw8PDxAQEBAQERISEhMTFBQXGUVKXGRlbG5vcHByeXl6ent9f3+AgYGBgoKCg4OEhIWJiouMjY2OkZSVlZWZnJ2foqmsrq+wsbKzs7W1t7m5ury8v7/Dw8TExcbGxsnMzc/P0NHW1/5ef49CAAABn0lEQVR42m2SVVtUARRFr4WKonfs1mUrdmMrFgZ2i4mNXdgtJirYBcaMog7rL/owdQX20/nO+s5+OHsHZNWRERfKIMxtguyUN4gKPQktQbitJo9ETjMwj6HnVXV3zjkN83pTYVqnmtveMquDxCKwPcNOqPrxb8Y5loXdSbEv65e+VfXsyIjtPlXj42FdnWrjzrYp2AGGUKPWjx0ILP6tVs8HuhK068VKmPLI+i2wBlj12ofTgTEQwJ0/xTDu2jRis2vfA1t3zQIS5cSC4cf0zQZ60I0ZD/T5HACKE7qH4Jzq943A6lrVZ5OAbV9VbwZlqnEAPqhWFQLLvqlWBpxJ+nniYABq9EURAEsa9DoBHP+xGebdWw5zX1YVwabTQGn1UfoEIaOmEpv52IYSmFwIxH0HTBhNp9SHFtxXX62lVUBp3KRPF7XJvW97o2rdQljxSdUdrSOR7VX1VwkJVa9E8wy5qOqTn2nWr+C/sA/nwj5E34JoE0LYn2FXoUuTmoRcSrFK+ue3UM3ylOeA/Oa9DeGA3sh6NrkMuXuZnp1zi39dc++4r/6GQAAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n.p+"static/media/x.93df88f8.svg"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){return r.default.createElement(g,null,r.default.createElement(y,null,r.default.createElement(B,{src:i.default,alt:"CheeseSwap Logo"}),r.default.createElement(v,null,"EVM Based Token Swap AMM Dex Platform"),r.default.createElement(w,null,"\xa9 Copyright 2020-2025 Cheeseswap."),r.default.createElement(y,null,r.default.createElement(x,{href:"https://ipfs.io/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement("img",{src:m.default,alt:"IPFS",height:"36"})),r.default.createElement(x,{href:"https://skynet.certik.com/projects/cheeseswap/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement("img",{src:p.default,alt:"Certik",height:"36"})))),r.default.createElement(y,null,r.default.createElement(v,null,"Products"),r.default.createElement(C,{href:"#/swap",target:"_blank",rel:"nofollow noopener noreferrer"},"Swap"),r.default.createElement(C,{href:"#/pool",target:"_blank",rel:"nofollow noopener noreferrer"},"Liquidity Pool"),r.default.createElement(C,{href:"https://bulksender.cheeseswap.app",target:"_blank",rel:"nofollow noopener noreferrer"},"Bulk Sender"),r.default.createElement(C,{href:"https://watcher.cheeseswap.app",target:"_blank",rel:"nofollow noopener noreferrer"},"Farm Watcher")),r.default.createElement(y,null,r.default.createElement(v,null,"Useful Links"),r.default.createElement(C,{href:"https://info.cheeseswap.app",target:"_blank",rel:"nofollow noopener noreferrer"},"Analytics"),r.default.createElement(C,{href:"https://docs.cheeseswap.app",target:"_blank",rel:"nofollow noopener noreferrer"},"Docs"),r.default.createElement(C,{href:"https://api.cheeseswap.app",target:"_blank",rel:"nofollow noopener noreferrer"},"API"),r.default.createElement(C,{href:"https://certik.org/projects/cheeseswap/",target:"_blank",rel:"noopener noreferrer"},"Audit")),r.default.createElement(y,null,r.default.createElement(v,null,"Market Data"),r.default.createElement(k,null,r.default.createElement(T,{href:"https://coinmarketcap.com/exchanges/cheeseswap/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:f.default,alt:"CoinMarketCap"})),r.default.createElement(T,{href:"https://www.coingecko.com/en/coins/cheeseswap",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:A.default,alt:"CoinGecko"})),r.default.createElement(T,{href:"https://dappradar.com/binance-smart-chain/exchanges/cheeseswap",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:h.default,alt:"DappRadar"})),r.default.createElement(T,{href:"https://www.dapp.com/app/cheeseswap",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:b.default,alt:"Dapp"}))),r.default.createElement(E,null,r.default.createElement(v,null,"Social Media"),r.default.createElement(k,null,r.default.createElement(T,{href:"https://twitter.com/cheeseswapbsc",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:l.default,alt:"Twitter"})),r.default.createElement(T,{href:"https://discord.gg/KeFQnRmyW8",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:s.default,alt:"Discord"})),r.default.createElement(T,{href:"https://github.com/cheeseswapbsc/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:c.default,alt:"Github"})),r.default.createElement(T,{href:"mailto:info@cheeseswap.app",target:"_blank",rel:"noopener noreferrer"},r.default.createElement(D,{src:d.default,alt:"Mail"}))))),r.default.createElement(y,null,r.default.createElement(v,null,"Built on"),r.default.createElement(E,null,r.default.createElement(x,{href:"https://www.binance.org/",target:"_blank",rel:"noopener noreferrer"},r.default.createElement("img",{src:u.default,alt:"Binance Smart Chain",height:"44"}))),r.default.createElement(E,null,r.default.createElement(C,{href:"#/terms-of-service","aria-label":"Terms of Service",target:"_blank",rel:"noopener noreferrer"},"Terms of Service"),r.default.createElement(C,{href:"#/privacy-policy","aria-label":"Privacy Policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"))))};var r=a(n(0)),o=a(n(14)),i=a(n(196)),l=a(n(673)),s=a(n(674)),c=a(n(675)),d=a(n(676)),u=a(n(677)),p=a(n(678)),m=a(n(679)),f=a(n(680)),A=a(n(681)),h=a(n(682)),b=a(n(683));const g=o.default.div`
  background: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  box-sizing: border-box;
  z-index: inherit;
  margin: 0px;
  min-width: 0px;
  width: 100vw;
  display: flex;
  padding: 1.3rem 3rem 0.95rem 3rem;
  bottom: 0px;
  align-items: flex-start;
  justify-content: space-evenly;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 1rem 0.65rem 1rem;
  }
`,y=o.default.div`
  padding: 11px;
`,E=o.default.div`
  padding: 2px;
`,v=o.default.div`
  margin: 0 0 0 10px;
  font-weight: 700;
`,w=o.default.div`
  margin: 0 0 0 10px;
  font-weight: 400;
`,C=o.default.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
  &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,x=o.default.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  margin: 4px;
  text-decoration: none;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
  &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  }
  @media (max-width: 400px) {
    margin: 4px;
  }
`,B=o.default.img`
  height: 40.5px;
`,k=o.default.div`
  margin: 6px;
`,T=o.default.a`
  height: 12px;
  margin-left: 4px;
`,D=o.default.img`
  height: 24px;
`},function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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MjBtnRrCAAAAKXRFWHRleGlmOkRhdGVUaW1lT3JpZ2luYWwAMjAyNToxMjoyNyAxNjozNzoyMHQGdAIAAAATdEVYdGV4aWY6RXhpZk9mZnNldAAyMzi6/C0jAAAAJ3RFWHRleGlmOkltYWdlRGVzY3JpcHRpb24AQ3JlYXRlZCB3aXRoIEdJTVAQZNIlAAAAFHRFWHRleGlmOkltYWdlTGVuZ3RoADQwMHtS6+4AAAATdEVYdGV4aWY6SW1hZ2VXaWR0aAA0MDCoLvtjAAAAFnRFWHRleGlmOk9mZnNldFRpbWUAKzA2OjAwYv9VcQAAAB90RVh0ZXhpZjpPZmZzZXRUaW1lRGlnaXRpemVkACswNjowMOcW3+gAAAAedEVYdGV4aWY6T2Zmc2V0VGltZU9yaWdpbmFsACswNjowMCBpwVkAAAAYdEVYdGV4aWY6U29mdHdhcmUAR0lNUCAzLjAuNP/o9doAAAAqdEVYdGV4aWY6VXNlckNvbW1lbnQALi4uLi4uLi5DcmVhdGVkIHdpdGggR0lNUIqda7gAAAAbdEVYdGljYzpjb3B5cmlnaHQAUHVibGljIERvbWFpbraRMVsAAAAidEVYdGljYzpkZXNjcmlwdGlvbgBHSU1QIGJ1aWx0LWluIHNSR0JMZ0ETAAAAFXRFWHRpY2M6bWFudWZhY3R1cmVyAEdJTVBMnpDKAAAADnRFWHRpY2M6bW9kZWwAc1JHQltgSUMAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,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R4OkC6zUG+YwQNDFNaM2bN5/4jxsR5AfQq2KeVhKJW7DZrU7NiFSi1wLt8V2GcoYtm1OYTsxeJJJWwBUMZpS2bkdad+2CZ412OHmmucZuBzZh68Nd2Ph0VRAbvgARM0N7Du0V+G8Qvd7+/GZqLafyxLf2K5IMTrMuMV7LbYV26PnkT3ybEPdshnYQlzZ25By3Kmq23QMF33TUANO2sfZgdue7lo5+HhLPk3v5BDAMO/FlpZ9qdPyvdjN2iqY8FgxrYvjh5vbwxjtQvs8Vp8XGeX+ibHFeHyF58uvX/+Fo38j81HUfo3MuantBtspEL3h6L4w/z+iNxw9V9mHUfuVljk9tZ/3/wmpvTPMzkZtz+UMiN5w9KwwH0ftdZV9ALWftswpqf2e/j8HtZbLORC94ehxYT6Q2qsq+whqP2uZk1L7Hf1/FmrNn6FPgugNR48K80KvHf6/q+hc/5pkVv9VFf4BJw6YfWTvb2UAAAABb3JOVAHPoneaAAAAY0lEQVQY02NgwAcY04BAAMpJAwMIWw3CSUaSgEixwTgJQI5YWgKbAlMCW1oiWFUCVAEmB2YBAY4CiM2EzQCQI1kgThAD8UDsVKhzwPJg1WAS5gcziEwywgaYbUBvAzkCeEMGALZkK0HOMI5aAAAAzmVYSWZJSSoACAAAAAoAAAEEAAEAAAAYAAAAAQEEAAEAAAAYAAAAAgEDAAMAAACGAAAAEgEDAAEAAAABAAAAGgEFAAEAAACMAAAAGwEFAAEAAACUAAAAKAEDAAEAAAACAAAAMQECAAsAAACcAAAAMgECABQAAACoAAAAaYcEAAEAAAC8AAAAAAAAAAgACAAIACwBAAABAAAALAEAAAEAAABHSU1QIDMuMC40AAAyMDI1OjEyOjI3IDE2OjM5OjUzAAEAAaADAAEAAAABAAAAAAAAAHLWc1wAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEyLTI3VDEzOjU1OjA5KzAwOjAwXSBrWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMi0yN1QxMzo1NTowOSswMDowMCx90+YAAAAadEVYdGV4aWY6Qml0c1BlclNhbXBsZQA4LCA4LCA4Eu0+JwAAABF0RVh0ZXhpZjpDb2xvclNwYWNlADEPmwJJAAAAIXRFWHRleGlmOkRhdGVUaW1lADIwMjU6MTI6MjcgMTY6Mzk6NTPRHSyKAAAAE3RFWHRleGlmOkV4aWZPZmZzZXQAMTg4W05KsQAAABN0RVh0ZXhpZjpJbWFnZUxlbmd0aAAyNL2dU0MAAAASdEVYdGV4aWY6SW1hZ2VXaWR0aAAyNBd5JSQAAAAYdEVYdGV4aWY6U29mdHdhcmUAR0lNUCAzLjAuNP/o9doAAAAbdEVYdGljYzpjb3B5cmlnaHQAUHVibGljIERvbWFpbraRMVsAAAAidEVYdGljYzpkZXNjcmlwdGlvbgBHSU1QIGJ1aWx0LWluIHNSR0JMZ0ETAAAAFXRFWHRpY2M6bWFudWZhY3R1cmVyAEdJTVBMnpDKAAAADnRFWHRpY2M6bW9kZWwAc1JHQltgSUMAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,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VzqygM2L48r5qwvYZKB2/voCvB3m2OCcmMlT/hYC5u+GFxpDwNwzYZtSmlz1oWGw0kgCVM/vxt9pVUfDw7Km5v/9xgK+WVg1LsDd0ZkIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABGwh4CJ2/k8tf8zRAxMCwgvYjS3gjQS/DQgCEBB6FpwQIPIksoBnEnwSEATEngQmBAQfA4KA2GPg/zMu9qMKOJfgY8DDGSceRkBYAQeNz3jyMwKCfgSm5sd8+fkAiJzFy39zR8BePAGv7x529ipa/g8/HHb3e+gpUETkZaz890/B3okl4OT+iY+hbgS3bo789PAMEPBxcObk36dR8s+eAR96AAQysObo78cR8j9bd/h5gBeFaw9/D3Ar2JB/+HlAtuAoSg9gnucxVsDBpoJLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6J9/ASvHp7zfqb4DAAAAzmVYSWZJSSoACAAAAAoAAAEEAAEAAAAAAgAAAQEEAAEAAAAAAgAAAgEDAAMAAACGAAAAEgEDAAEAAAABAAAAGgEFAAEAAACMAAAAGwEFAAEAAACUAAAAKAEDAAEAAAACAAAAMQECAAsAAACcAAAAMgECABQAAACoAAAAaYcEAAEAAAC8AAAAAAAAAAgACAAIACwBAAABAAAALAEAAAEAAABHSU1QIDMuMC40AAAyMDI1OjEyOjI3IDE2OjM5OjE1AAEAAaADAAEAAAABAAAAAAAAAM1EZJ0AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEyLTI3VDEzOjU1OjA5KzAwOjAwXSBrWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMi0yN1QxMzo1NTowOSswMDowMCx90+YAAAAadEVYdGV4aWY6Qml0c1BlclNhbXBsZQA4LCA4LCA4Eu0+JwAAABF0RVh0ZXhpZjpDb2xvclNwYWNlADEPmwJJAAAAIXRFWHRleGlmOkRhdGVUaW1lADIwMjU6MTI6MjcgMTY6Mzk6MTVcEky7AAAAE3RFWHRleGlmOkV4aWZPZmZzZXQAMTg4W05KsQAAABR0RVh0ZXhpZjpJbWFnZUxlbmd0aAA1MTKNhdG0AAAAE3RFWHRleGlmOkltYWdlV2lkdGgANTEyXvnBOQAAABh0RVh0ZXhpZjpTb2Z0d2FyZQBHSU1QIDMuMC40/+j12gAAABt0RVh0aWNjOmNvcHlyaWdodABQdWJsaWMgRG9tYWlutpExWwAAACJ0RVh0aWNjOmRlc2NyaXB0aW9uAEdJTVAgYnVpbHQtaW4gc1JHQkxnQRMAAAAVdEVYdGljYzptYW51ZmFjdHVyZXIAR0lNUEyekMoAAAAOdEVYdGljYzptb2RlbABzUkdCW2BJQwAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n.p+"static/media/built-on-bsc.68c07aa9.svg"},function(e,t,n){e.exports=n.p+"static/media/certik.bf09fd85.svg"},function(e,t,n){e.exports=n.p+"static/media/ipfs.8cd2ed47.svg"},function(e,t,n){e.exports=n.p+"static/media/cmc.a72a0e25.png"},function(e,t,n){e.exports=n.p+"static/media/cg.9ab5a117.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC9FBMVEX///8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/8Aa/////9A3jhlAAAA+nRSTlMAAAMod7jY3twkAgx15N9zD5iWg4FC7uk6ELGtXPr5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"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const e=(0,i.useActivePopups)();return r.default.createElement(r.default.Fragment,null,r.default.createElement(u,{gap:"20px"},e.map(e=>r.default.createElement(s.default,{key:e.key,content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs}))),r.default.createElement(c,{height:(null===e||void 0===e?void 0:e.length)>0?"fit-content":0},r.default.createElement(d,null,e.slice(0).reverse().map(e=>r.default.createElement(s.default,{key:e.key,content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs})))))};var r=a(n(0)),o=a(n(14)),i=n(68),l=n(47),s=a(n(685));const c=o.default.div`
  position: relative;
  max-width: 100%;
  height: ${e=>{let{height:t}=e;return t}};
  margin: ${e=>{let{height:t}=e;return t?"0 auto;":0}};
  margin-bottom: ${e=>{let{height:t}=e;return t?"20px":0}}};

  display: none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: block;
  `}};
`,d=o.default.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,u=(0,o.default)(l.AutoColumn)`
  position: fixed;
  top: 64px;
  right: 1rem;
  max-width: 355px !important;
  width: 100%;
  z-index: 2;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: none;
  `}};
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.StyledClose=t.Popup=void 0,t.default=function(e){let{removeAfterMs:t,content:n,popKey:a}=e;const o=(0,c.useRemovePopup)(),s=(0,r.useCallback)(()=>o(a),[a,o]);(0,r.useEffect)(()=>{if(null===t)return;const e=setTimeout(()=>{s()},t);return()=>{clearTimeout(e)}},[t,s]);const p=(0,r.useContext)(l.ThemeContext);let m;if("txn"in n){const{txn:{hash:e,success:t,summary:a}}=n;m=r.default.createElement(u.default,{hash:e,success:t,summary:a})}else if("listUpdate"in n){const{listUpdate:{listUrl:e,oldList:t,newList:o,auto:i}}=n;m=r.default.createElement(d.default,{popKey:a,listUrl:e,oldList:t,newList:o,auto:i})}const h=(0,i.useSpring)({from:{width:"100%"},to:{width:"0%"},config:{duration:null!==t&&void 0!==t?t:void 0}});return r.default.createElement(A,null,r.default.createElement(f,{color:p.colors.text2,onClick:s}),m,null!==t?r.default.createElement(b,{style:h}):null)};var r=m(n(0)),o=n(35),i=n(224),l=m(n(14)),s=n(224),c=n(68),d=a(n(686)),u=a(n(687));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const f=(0,l.default)(o.X)`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`;t.StyledClose=f;const A=l.default.div`
  display: inline-block;
  width: 100%;
  padding: 1em;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg1}};
  position: relative;
  border-radius: 10px;
  padding: 20px;
  padding-right: 35px;
  overflow: hidden;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    min-width: 290px;
  `}}
`;t.Popup=A;const h=l.default.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
`,b=(0,s.animated)(h)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{popKey:t,listUrl:n,oldList:a,newList:h,auto:b}=e;const g=(0,c.useRemovePopup)(),y=(0,o.useCallback)(()=>g(t),[t,g]),E=(0,l.useDispatch)(),v=(0,o.useCallback)(()=>{b||(i.default.event({category:"Lists",action:"Update List from Popup",label:n}),E((0,d.acceptListUpdate)(n)),y())},[b,E,n,y]),{added:w,changed:C,removed:x}=(0,o.useMemo)(()=>(0,r.diffTokenLists)(a.tokens,h.tokens),[h.tokens,a.tokens]),B=(0,o.useMemo)(()=>Object.keys(C).reduce((e,t)=>e+Object.keys(C[t]).length,0),[C]);return o.default.createElement(A.AutoRow,null,o.default.createElement(f.AutoColumn,{style:{flex:"1"},gap:"8px"},b?o.default.createElement(u.TYPE.Body,{fontWeight:700},'The token list "',a.name,'" has been updated to'," ",o.default.createElement("strong",null,(0,p.default)(h.version)),"."):o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement(s.Text,null,'An update is available for the token list "',a.name,'" (',(0,p.default)(a.version)," to ",(0,p.default)(h.version),")."),o.default.createElement("ul",null,w.length>0?o.default.createElement("li",null,w.map((e,t)=>o.default.createElement(o.default.Fragment,{key:`${e.chainId}-${e.address}`},o.default.createElement("strong",{title:e.address},e.symbol),t===w.length-1?null:", "))," ","added"):null,x.length>0?o.default.createElement("li",null,x.map((e,t)=>o.default.createElement(o.default.Fragment,{key:`${e.chainId}-${e.address}`},o.default.createElement("strong",{title:e.address},e.symbol),t===x.length-1?null:", "))," ","removed"):null,B>0?o.default.createElement("li",null,B," tokens updated"):null)),o.default.createElement(A.AutoRow,null,o.default.createElement("div",{style:{flexGrow:1,marginRight:12}},o.default.createElement(m.ButtonSecondary,{onClick:v},"Accept update")),o.default.createElement("div",{style:{flexGrow:1}},o.default.createElement(m.ButtonSecondary,{onClick:y},"Dismiss"))))))};var r=n(232),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),i=a(n(74)),l=n(39),s=n(40),c=n(68),d=n(142),u=n(34),p=a(n(326)),m=n(72),f=n(47),A=n(28);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){let{hash:t,success:n,summary:d}=e;const{chainId:u}=(0,i.useActiveWeb3React)(),p=(0,a.useContext)(o.ThemeContext);return a.default.createElement(m,null,a.default.createElement("div",{style:{paddingRight:16}},n?a.default.createElement(r.CheckCircle,{color:p.colors.green1,size:24}):a.default.createElement(r.AlertCircle,{color:p.colors.red1,size:24})),a.default.createElement(c.AutoColumn,{gap:"8px"},a.default.createElement(l.TYPE.Body,{fontWeight:700},null!==d&&void 0!==d?d:"Hash: "+t.slice(0,8)+"..."+t.slice(58,65)),u&&a.default.createElement(l.ExternalLink,{href:(0,s.getBscscanLink)(u,t,"transaction")},"View on bscscan")))};var a=p(n(0)),r=n(35),o=p(n(14)),i=n(22),l=n(34),s=n(38),c=n(47),d=n(28);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const m=(0,o.default)(d.AutoRow)`
  flex-wrap: nowrap;
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{children:t}=e;const{t:n}=(0,i.useTranslation)(),{chainId:a,account:o,switchNetwork:p}=(0,l.useWeb3)();if(o&&a&&a!==s.CHAIN_ID)return r.default.createElement(c,null,r.default.createElement(d,null,n("wrongNetwork",`Please connect to the ${s.NETWORK_NAME} network.`)),r.default.createElement(u,{onClick:()=>p()},"Switch Network"));return t};var r=a(n(0)),o=a(n(14)),i=n(246),l=n(22),s=n(138);const c=o.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
`,d=o.default.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
`,u=o.default.button`
  margin-left: 16px;
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  background: #f7b500;
  color: #222;
  font-weight: 600;
  cursor: pointer;
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.RedirectDuplicateTokenIds=function(e){const{match:{params:{currencyIdA:t,currencyIdB:n}}}=e;if(t.toLowerCase()===n.toLowerCase())return r.default.createElement(o.Redirect,{to:"/add/"+t});return r.default.createElement(i.default,e)},t.RedirectOldAddLiquidityPathStructure=function(e){const{match:{params:{currencyIdA:t}}}=e,n=t.match(l);if(null!==n&&void 0!==n&&n.length)return r.default.createElement(o.Redirect,{to:`/add/${n[1]}/${n[2]}`});return r.default.createElement(i.default,e)},t.RedirectToAddLiquidity=function(){return r.default.createElement(o.Redirect,{to:"/add/"})};var r=a(n(0)),o=n(76),i=a(n(327));const l=/^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){const{library:t,chainId:n}=(0,i.useActiveWeb3React)(),l=(0,r.wrappedCurrency)(e,n),[s,c]=(0,o.useState)();return{addToken:(0,o.useCallback)(()=>{t&&t.provider.isMetaMask&&t.provider.request&&l?t.provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:l.address,symbol:l.symbol,decimals:l.decimals,image:(0,a.getTokenLogoURL)(l.address)}}}).then(e=>{c(e)}).catch(()=>c(!1)):c(!1)},[t,l]),success:s}};var a=n(104),r=n(114),o=n(0),i=n(22)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){var t,n,a;const c=(0,o.useMemo)(()=>{if(!e)return[void 0];try{return e?[(0,r.namehash)(e)]:[void 0]}catch(t){return[void 0]}},[e]),d=(0,s.useENSRegistrarContract)(!1),u=(0,i.useSingleCallResult)(d,"resolver",c),p=null===(t=u.result)||void 0===t?void 0:t[0],m=(0,s.useENSResolverContract)(p&&(0,l.default)(p)?void 0:p,!1),f=(0,i.useSingleCallResult)(m,"contenthash",c);return{contenthash:null!==(n=null===(a=f.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:u.loading||f.loading}};var r=n(173),o=n(0),i=n(96),l=a(n(194)),s=n(73)},function(e,t,n){"use strict";t.__esModule=!0,t.default=r,t.useLastTruthy=function(e){return r(e,o)};var a=n(0);function r(e,t){const[n,r]=(0,a.useState)(t&&t(e)?e:void 0);return(0,a.useEffect)(()=>{r(n=>!t||t(e)?e:n)},[t,e]),n}function o(e){return null!==e&&void 0!==e}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.CurrencySearch=function(e){let{selectedCurrency:t,onCurrencySelect:n,otherSelectedCurrency:a,showCommonBases:D,onDismiss:I,isOpen:F,onChangeList:P}=e;const{t:S}=(0,s.useTranslation)(),{chainId:M}=(0,u.useActiveWeb3React)(),R=((0,o.useContext)(d.ThemeContext),(0,o.useRef)()),[N,W]=(0,o.useState)(""),[U,O]=(0,o.useState)(!1),L=(0,p.useAllTokens)(),j=(0,A.isAddress)(N),V=(0,p.useToken)(N);(0,o.useEffect)(()=>{j&&i.default.event({category:"Currency Select",action:"Search by address",label:j})},[j]);const z=(0,o.useMemo)(()=>{const e=N.toLowerCase().trim();return""===e||"e"===e||"et"===e||"eth"===e},[N]),Y=(0,C.useTokenComparator)(U),Q=(0,l.useSelector)(e=>e.user.audioPlay),K=(0,o.useMemo)(()=>j?V?[V]:[]:(0,v.filterTokens)(Object.values(L),N),[j,V,L,N]),G=(0,o.useMemo)(()=>{if(V)return[V];const e=K.sort(Y),t=N.toLowerCase().split(/\s+/).filter(e=>e.length>0);return t.length>1?e:[...V?[V]:[],...e.filter(e=>{var n;return(null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())===t[0]}),...e.filter(e=>{var n;return(null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())!==t[0]})]},[K,N,V,Y]),H=(0,o.useCallback)(e=>{if(n(e),I(),Q){const e=document.getElementById("bgMusic");e&&e.play()}},[I,n,Q]);(0,o.useEffect)(()=>{F&&W("")},[F]);const Z=(0,o.useRef)(),q=(0,o.useCallback)(e=>{var t;const n=e.target.value,a=(0,A.isAddress)(n);W(a||n),null===(t=R.current)||void 0===t||t.scrollTo(0)},[]),X=(0,o.useCallback)(e=>{if("Enter"===e.key){if("eth"===N.toLowerCase().trim())H(r.ETHER);else if(G.length>0){var t;(null===(t=G[0].symbol)||void 0===t?void 0:t.toLowerCase())!==N.trim().toLowerCase()&&1!==G.length||H(G[0])}}},[G,H,N]);(0,m.useSelectedListInfo)();return o.default.createElement(h.default,{style:{width:"100%",flex:"1 1"}},o.default.createElement(x.PaddedColumn,{gap:"14px"},o.default.createElement(g.RowBetween,null,o.default.createElement(c.Text,{fontWeight:700,fontSize:14},o.default.createElement(k.default,{translationId:82},"Select a token"),o.default.createElement(b.default,{text:(0,T.TranslateString)(130,"Find a token by searching for its name or symbol or by pasting its address below.")})),o.default.createElement(f.CloseIcon,{onClick:I})),o.default.createElement(x.SearchInput,{type:"text",id:"token-search-input",placeholder:S("Search token or paste address"),value:N,ref:Z,onChange:q,onKeyDown:X}),D&&o.default.createElement(y.default,{chainId:M,onSelect:H,selectedCurrency:t}),o.default.createElement(g.RowBetween,null,o.default.createElement(c.Text,{fontSize:14,fontWeight:700},o.default.createElement(k.default,{translationId:126},"Token name")),o.default.createElement(w.default,{ascending:U,toggleSortOrder:()=>O(e=>!e)}))),o.default.createElement(x.Separator,null),o.default.createElement("div",{style:{flex:"1"}},o.default.createElement(B.default,{disableWidth:!0},e=>{let{height:n}=e;return o.default.createElement(E.default,{height:n,showETH:z,currencies:G,onCurrencySelect:H,otherCurrency:a,selectedCurrency:t,fixedListRef:R})})),null)};var r=n(24),o=I(n(0)),i=a(n(74)),l=n(39),s=n(246),c=n(40),d=n(14),u=n(22),p=n(113),m=n(119),f=n(34),A=n(38),h=(a(n(192)),a(n(47))),b=(a(n(338)),a(n(128))),g=I(n(28)),y=a(n(731)),E=a(n(732)),v=n(734),w=a(n(735)),C=n(736),x=n(238),B=a(n(737)),k=a(n(129)),T=n(152);function D(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(D=function(e){return e?n:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=D(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{chainId:t,onSelect:n,selectedCurrency:a}=e;return r.default.createElement(c.AutoColumn,{gap:"md"},r.default.createElement(u.AutoRow,null,r.default.createElement(o.Text,{fontWeight:700,fontSize:14},"Common bases"),r.default.createElement(d.default,{text:"These tokens are commonly paired with other tokens."})),r.default.createElement(m,null,r.default.createElement(f,{onClick:()=>{a&&(0,i.currencyEquals)(a,i.ETHER)||n(i.ETHER)},disable:a===i.ETHER},r.default.createElement(A,null,r.default.createElement(p.default,{currency:i.ETHER})),r.default.createElement(h,null,"BNB")),(t?s.SUGGESTED_BASES[t]:[]).map(e=>{const t=a instanceof i.Token&&a.address===e.address;return r.default.createElement(f,{onClick:()=>!t&&n(e),disable:t,key:e.address},r.default.createElement(A,null,r.default.createElement(p.default,{currency:e})),r.default.createElement(h,null,e.symbol))})))};var r=a(n(0)),o=n(40),i=n(24),l=a(n(14)),s=n(58),c=n(47),d=a(n(128)),u=n(28),p=a(n(104));const m=(0,l.default)(u.AutoRow)`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    gap: 2px;
  `}}
`,f=l.default.div`
  border: 2px solid ${e=>{let{theme:t,disable:n}=e;return n?"transparent":t.colors.bg3}};
  border-radius: 8px;
  display: flex;
  padding: 3px 5px;
  flex-shrink: 0;

  align-items: center;
  :hover {
    cursor: ${e=>{let{disable:t}=e;return!t&&"pointer"}};
    background-color: ${e=>{let{theme:t,disable:n}=e;return!n&&t.colors.bg2}};
  }

  background-color: ${e=>{let{theme:t,disable:n}=e;return n&&t.colors.bg3}};
  opacity: ${e=>{let{disable:t}=e;return t&&"0.4"}};
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    padding: 3px 5px;
    border-radius: 6px;
  `}}
`,A=l.default.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  flex-shrink: 0;
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    width: 18px;
    height: 18px;
    margin-right: 4px;
  `}}
  
  img {
    width: 100%;
    height: 100%;
  }
`,h=(0,l.default)(o.Text)`
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
  
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    font-size: 11px;
  `}}
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(e){let{height:t,currencies:n,selectedCurrency:a,onCurrencySelect:l,otherCurrency:s,fixedListRef:c,showETH:d}=e;const u=(0,o.useMemo)(()=>d?[r.Currency.ETHER,...n]:[...n],[n,d]),p=(0,o.useCallback)(e=>{let{data:t,index:n,style:i}=e;const c=t[n],d=Boolean(a&&(0,r.currencyEquals)(a,c)),u=Boolean(s&&(0,r.currencyEquals)(s,c));return o.default.createElement(I,{style:i,currency:c,isSelected:d,onSelect:()=>l(c),otherSelected:u})},[l,s,a]),m=(0,o.useCallback)((e,t)=>C(t[e]),[]);return o.default.createElement(i.FixedSizeList,{height:t,ref:c,width:"100%",itemData:u,itemCount:u.length,itemSize:56,itemKey:m},p)};var r=n(24),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),i=n(733),l=n(40),s=a(n(14)),c=n(22),d=n(119),u=n(90),p=n(105),m=n(34),f=n(113),A=a(n(47)),h=n(28),b=a(n(104)),g=n(311),y=n(238),E=a(n(155)),v=n(38);function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}function C(e){return e instanceof r.Token?e.address:e===r.ETHER?"ETHER":""}const x=(0,s.default)(l.Text)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`,B=s.default.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg3}};
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  font-size: 14px;
  border-radius: 4px;
  padding: 0.25rem 0.3rem 0.25rem 0.3rem;
  max-width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-self: flex-end;
  margin-right: 4px;
`;function k(e){let{balance:t}=e;return o.default.createElement(x,{title:t.toExact()},t.toSignificant(4))}const T=s.default.div`
  display: flex;
  justify-content: flex-end;
`;function D(e){let{currency:t}=e;if(!(t instanceof d.WrappedTokenInfo))return o.default.createElement("span",null);const n=t.tags;if(!n||0===n.length)return o.default.createElement("span",null);const a=n[0];return o.default.createElement(T,null,o.default.createElement(g.MouseoverTooltip,{text:a.description},o.default.createElement(B,{key:a.id},a.name)),n.length>1?o.default.createElement(g.MouseoverTooltip,{text:n.slice(1).map(e=>{let{name:t,description:n}=e;return`${t}: ${n}`}).join("; \n")},o.default.createElement(B,null,"...")):null)}function I(e){let{currency:t,onSelect:n,isSelected:a,otherSelected:i,style:s}=e;const{account:g,chainId:w}=(0,c.useActiveWeb3React)(),x=C(t),B=(0,d.useSelectedTokenList)(),T=(0,v.isTokenOnList)(B,t),I=(0,f.useIsUserAddedToken)(t),F=(0,p.useCurrencyBalance)(null!==g&&void 0!==g?g:void 0,t),P=(0,u.useRemoveUserAddedToken)(),S=(0,u.useAddUserToken)();return o.default.createElement(y.MenuItem,{style:s,className:"token-item-"+x,onClick:()=>a?null:n(),disabled:a,selected:i},o.default.createElement(b.default,{currency:t,size:"24px"}),o.default.createElement(A.default,null,o.default.createElement(l.Text,{title:t.name,fontWeight:700},t.symbol),o.default.createElement(y.FadedSpan,null,T||!I||t instanceof d.WrappedTokenInfo?null:o.default.createElement(m.TYPE.Main,{fontWeight:700},"Added by user",o.default.createElement(m.LinkStyledButton,{onClick:e=>{e.stopPropagation(),w&&t instanceof r.Token&&P(w,t.address)}},"(Remove)")),T||I||t instanceof d.WrappedTokenInfo?null:o.default.createElement(m.TYPE.Main,{fontWeight:700},"Found by address",o.default.createElement(m.LinkStyledButton,{onClick:e=>{e.stopPropagation(),t instanceof r.Token&&S(t)}},"(Add)")))),o.default.createElement(D,{currency:t}),o.default.createElement(h.RowFixed,{style:{justifySelf:"flex-end"}},F?o.default.createElement(k,{balance:F}):g?o.default.createElement(E.default,null):null))}},,function(e,t,n){"use strict";t.__esModule=!0,t.filterTokens=function(e,t){if(0===t.length)return e;const n=(0,a.isAddress)(t);if(n)return e.filter(e=>e.address===n);const r=t.toLowerCase().split(/\s+/).filter(e=>e.length>0);if(0===r.length)return e;const o=e=>{const t=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);return r.every(e=>0===e.length||t.some(t=>t.startsWith(e)||t.endsWith(e)))};return e.filter(e=>{const{symbol:t,name:n}=e;return t&&o(t)||n&&o(n)})};var a=n(38)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.FilterWrapper=void 0,t.default=function(e){let{toggleSortOrder:t,ascending:n}=e;return r.default.createElement(s,{onClick:t},r.default.createElement(o.Text,{fontSize:14,fontWeight:700},n?"\u2191":"\u2193"))};var r=a(n(0)),o=n(40),i=a(n(14)),l=n(28);const s=(0,i.default)(l.RowFixed)`
  padding: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  border-radius: 8px;
  user-select: none;
  & > * {
    user-select: none;
  }
  :hover {
    cursor: pointer;
  }
`;t.FilterWrapper=s},function(e,t,n){"use strict";t.__esModule=!0,t.useTokenComparator=function(e){const t=(0,r.useAllTokenBalances)(),n=(0,a.useMemo)(()=>function(e){return function(t,n){const a=function(e,t){if(e&&t)return e.greaterThan(t)?-1:e.equalTo(t)?0:1;if(e&&e.greaterThan("0"))return-1;if(t&&t.greaterThan("0"))return 1;return 0}(e[t.address],e[n.address]);return 0!==a?a:t.symbol&&n.symbol?t.symbol.toLowerCase()<n.symbol.toLowerCase()?-1:1:t.symbol||n.symbol?-1:0}}(null!==t&&void 0!==t?t:{}),[t]);return(0,a.useMemo)(()=>e?(e,t)=>-1*n(e,t):n,[e,n])};var a=n(0),r=n(105)},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.ListSelect=function(e){var t;let{onDismiss:n,onBack:a}=e;const[l,d]=(0,r.useState)(""),u=(0,s.useDispatch)(),m=(0,s.useSelector)(e=>e.lists.byUrl),f=Boolean(null===(t=m[l])||void 0===t?void 0:t.loadingRequestId),[h,g]=(0,r.useState)(null),v=(0,r.useCallback)(e=>{d(e.target.value),g(null)},[]),C=(0,p.useFetchListCallback)(),T=(0,r.useCallback)(()=>{f||(g(null),C(l).then(()=>{d(""),i.default.event({category:"Lists",action:"Add List",label:l})}).catch(e=>{i.default.event({category:"Lists",action:"Add List Failed",label:l}),g(e.message),u((0,A.removeList)(l))}))},[f,u,C,l]),D=(0,r.useMemo)(()=>(0,E.default)(l).length>0||Boolean((0,y.parseENSAddress)(l)),[l]),I=(0,r.useCallback)(e=>{D&&"Enter"===e.key&&T()},[T,D]),F=(0,r.useMemo)(()=>Object.keys(m).filter(e=>Boolean(m[e].current)).sort((e,t)=>{const{current:n}=m[e],{current:a}=m[t];return n&&a?n.name.toLowerCase()<a.name.toLowerCase()?-1:n.name.toLowerCase()===a.name.toLowerCase()?0:1:n?-1:a?1:0}),[m]);return r.default.createElement(w.default,{style:{width:"100%",flex:"1 1"}},r.default.createElement(k.PaddedColumn,null,r.default.createElement(B.RowBetween,null,r.default.createElement("div",null,r.default.createElement(o.ArrowLeft,{style:{cursor:"pointer"},onClick:a})),r.default.createElement(c.Text,{fontWeight:700,fontSize:18},"Manage Lists"),r.default.createElement(b.CloseIcon,{onClick:n}))),r.default.createElement(k.Separator,null),r.default.createElement(k.PaddedColumn,{gap:"14px"},r.default.createElement(c.Text,{fontWeight:600},"Add a list"," ",r.default.createElement(x.default,{text:"Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens."})),r.default.createElement(B.default,null,r.default.createElement(k.SearchInput,{type:"text",id:"list-add-input",placeholder:"https:// or ipfs:// or ENS name",value:l,onChange:v,onKeyDown:I,style:{height:"2.75rem",borderRadius:12,padding:"12px"}}),r.default.createElement(W,{onClick:T,disabled:!D},"Add")),h?r.default.createElement(b.TYPE.Error,{title:h,style:{textOverflow:"ellipsis",overflow:"hidden"},error:!0},h):null),r.default.createElement(k.Separator,null),r.default.createElement(U,null,F.map(e=>r.default.createElement(N,{key:e,listUrl:e,onBack:a}))),r.default.createElement(k.Separator,null),r.default.createElement("div",{style:{padding:"16px",textAlign:"center"}},r.default.createElement(b.ExternalLink,{href:"https://tokenlists.org"},"Browse lists")))};var r=D(n(0)),o=n(35),i=a(n(74)),l=n(354),s=n(39),c=n(40),d=a(n(14)),u=n(339),p=n(340),m=n(222),f=a(n(314)),A=n(142),h=n(119),b=n(34),g=a(n(326)),y=n(235),E=a(n(236)),v=n(72),w=a(n(47)),C=a(n(338)),x=a(n(128)),B=D(n(28)),k=n(238);function T(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(T=function(e){return e?n:t})(e)}function D(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=T(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const I=(0,d.default)(b.LinkStyledButton)`
  padding: 0;
  font-size: 1rem;
  opacity: ${e=>{let{disabled:t}=e;return t?"0.4":"1"}};
`,F=d.default.div`
  z-index: 100;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?1:0};
  transition: visibility 150ms linear, opacity 150ms linear;
  background: ${e=>{let{theme:t}=e;return t.colors.bg2}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.bg3}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  color: ${e=>{let{theme:t}=e;return t.colors.text2}};
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 8px;
  font-size: 1rem;
  text-align: left;
`,P=d.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
`,S=d.default.div`
  max-width: 160px;
  opacity: 0.6;
  margin-right: 0.5rem;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;function M(e){let{listUrl:t}=e;const n=(0,r.useMemo)(()=>{var e;return null===(e=(0,y.parseENSAddress)(t))||void 0===e?void 0:e.ensName},[t]),a=(0,r.useMemo)(()=>{if(n)return;const e=t.toLowerCase();if(e.startsWith("ipfs://")||e.startsWith("ipns://"))return t;try{return new URL(t).host}catch(a){return}},[t,n]);return r.default.createElement(r.default.Fragment,null,null!==n&&void 0!==n?n:a)}function R(e){return"list-row-"+e.replace(/\./g,"-")}const N=(0,r.memo)((function(e){let{listUrl:t,onBack:n}=e;const a=(0,s.useSelector)(e=>e.lists.byUrl),o=(0,h.useSelectedListUrl)(),d=(0,s.useDispatch)(),{current:p,pendingUpdate:y}=a[t],E=t===o,[x,T]=(0,f.default)(!1),D=(0,r.useRef)(),[N,W]=(0,r.useState)(),[U,O]=(0,r.useState)(),{styles:L,attributes:j}=(0,l.usePopper)(N,U,{placement:"auto",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[8,8]}}]});(0,m.useOnClickOutside)(D,x?T:void 0);const V=(0,r.useCallback)(()=>{E||(i.default.event({category:"Lists",action:"Select List",label:t}),d((0,A.selectList)(t)),n())},[d,E,t,n]),z=(0,r.useCallback)(()=>{y&&(i.default.event({category:"Lists",action:"Update List from List Select",label:t}),d((0,A.acceptListUpdate)(t)))},[d,t,y]),Y=(0,r.useCallback)(()=>{i.default.event({category:"Lists",action:"Start Remove List",label:t}),"REMOVE"===window.prompt("Please confirm you would like to remove this list by typing REMOVE")&&(i.default.event({category:"Lists",action:"Confirm Remove List",label:t}),d((0,A.removeList)(t)))},[d,t]);return p?r.default.createElement(B.default,{key:t,align:"center",padding:"16px",id:R(t)},p.logoURI?r.default.createElement(C.default,{style:{marginRight:"1rem"},logoURI:p.logoURI,alt:p.name+" list logo"}):r.default.createElement("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),r.default.createElement(w.default,{style:{flex:"1"}},r.default.createElement(B.default,null,r.default.createElement(c.Text,{fontWeight:E?700:600,fontSize:14,style:{overflow:"hidden",textOverflow:"ellipsis"}},p.name)),r.default.createElement(B.default,{style:{marginTop:"4px"}},r.default.createElement(S,{title:t},r.default.createElement(M,{listUrl:t})))),r.default.createElement(P,{ref:D},r.default.createElement(v.ButtonOutlined,{style:{width:"2rem",padding:".8rem .35rem",borderRadius:"12px",fontSize:"14px",marginRight:"0.5rem"},onClick:T,ref:W},r.default.createElement(u.ReactComponent,null)),x&&r.default.createElement(F,Object.assign({show:!0,ref:O,style:L.popper},j.popper),r.default.createElement("div",null,p&&(0,g.default)(p.version)),r.default.createElement(k.SeparatorDark,null),r.default.createElement(b.ExternalLink,{href:"https://tokenlists.org/token-list?url="+t},"View list"),r.default.createElement(I,{onClick:Y,disabled:1===Object.keys(a).length},"Remove list"),y&&r.default.createElement(I,{onClick:z},"Update list"))),E?r.default.createElement(v.ButtonPrimary,{disabled:!0,className:"select-button",style:{width:"5rem",minWidth:"5rem",padding:"0.5rem .35rem",borderRadius:"12px",fontSize:"14px"}},"Selected"):r.default.createElement(r.default.Fragment,null,r.default.createElement(v.ButtonPrimary,{className:"select-button",style:{width:"5rem",minWidth:"4.5rem",padding:"0.5rem .35rem",borderRadius:"12px",fontSize:"14px"},onClick:V},"Select"))):null})),W=(0,d.default)(v.ButtonSecondary)`
  /* height: 1.8rem; */
  max-width: 4rem;
  margin-left: 1rem;
  border-radius: 12px;
  padding: 10px 18px;
`,U=d.default.div`
  flex: 1;
  overflow: auto;
`},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=async function(e,t){if(e===c.DEFAULT_TOKEN_LIST_URL)return d.default;const n=(0,l.parseENSAddress)(e);let a;if(n){var r;let e,o;try{e=await t(n.ensName)}catch(m){throw console.debug("Failed to resolve ENS name: "+n.ensName,m),new Error("Failed to resolve ENS name: "+n.ensName)}try{o=(0,i.default)(e)}catch(m){throw console.debug("Failed to translate contenthash to URI",e),new Error("Failed to translate contenthash to URI: "+e)}a=(0,s.default)(`${o}${null!==(r=n.ensPath)&&void 0!==r?r:""}`)}else a=(0,s.default)(e);for(let i=0;i<a.length;i++){const t=a[i],n=i===a.length-1;let r;try{r=await fetch(t)}catch(m){if(console.debug("Failed to fetch list",e,m),n)throw new Error("Failed to download list "+e);continue}if(!r.ok){if(n)throw new Error("Failed to download list "+e);continue}const l=await r.json();if(!u(l)){var o,p;const e=null!==(o=null===(p=u.errors)||void 0===p?void 0:p.reduce((e,t)=>{var n;const a=`${t.dataPath} ${null!==(n=t.message)&&void 0!==n?n:""}`;return e.length>0?`${e}; ${a}`:""+a},""))&&void 0!==o?o:"unknown error";throw new Error("Token list failed validation: "+e)}return l}throw new Error("Unrecognized list URL protocol.")};var r=a(n(740)),o=a(n(741)),i=a(n(329)),l=n(235),s=a(n(236)),c=n(349),d=a(n(350));const u=new o.default({allErrors:!0}).compile(r.default)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.default=async function(e,t){const n=new a.Contract("0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",o,t),l=(0,r.namehash)(e);return function(e,t){return new a.Contract(e,i,t)}(await n.resolver(l),t).contenthash(l)};var a=n(55),r=n(173);const o=[{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"resolver",outputs:[{name:"resolverAddress",type:"address"}],payable:!1,stateMutability:"view",type:"function"}],i=[{constant:!0,inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"contenthash",outputs:[{internalType:"bytes",name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"}]},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=t.Input=void 0;var r=a(n(0)),o=a(n(14)),i=n(38);const l=o.default.input`
  color: ${e=>{let{error:t,theme:n}=e;return t?n.colors.red1:n.colors.text1}};
  width: 0;
  min-width: 0;
  position: relative;
  font-weight: 600;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg0}};
  font-size: ${e=>{let{fontSize:t}=e;return null!==t&&void 0!==t?t:"24px"}};
  text-align: ${e=>{let{align:t}=e;return t&&t}};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 12px;
  border-radius: 6px;
  margin-right: 6px;
  -webkit-appearance: textfield;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    font-size: 18px;
    padding: 8px;
    margin-right: 4px;
  `}}

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.text4}};
  }
`,s=RegExp("^\\d*(?:\\\\[.])?\\d*$"),c=r.default.memo((function(e){let{value:t,onUserInput:n,placeholder:a,...o}=e;return r.default.createElement(l,Object.assign({},o,{value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||s.test((0,i.escapeRegExp)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:a||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))}));t.Input=c;var d=c;t.default=d},function(e,t,n){"use strict";t.__esModule=!0,t.useTokenAllowance=function(e,t,n){const l=(0,o.useTokenContract)(null===e||void 0===e?void 0:e.address,!1),s=(0,r.useMemo)(()=>[t,n],[t,n]),c=(0,i.useSingleCallResult)(l,"allowance",s).result;return(0,r.useMemo)(()=>e&&c?new a.TokenAmount(e,c.toString()):void 0,[e,c])};var a=n(24),r=n(0),o=n(73),i=n(96)},function(e,t,n){"use strict";t.__esModule=!0,t.useDerivedMintInfo=function(e,t){var n,o;const{account:h,chainId:b}=(0,s.useActiveWeb3React)(),{independentField:g,typedValue:y,otherTypedValue:E}=A(),v=g===m.Field.CURRENCY_A?m.Field.CURRENCY_B:m.Field.CURRENCY_A,w=(0,r.useMemo)(()=>({[m.Field.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[m.Field.CURRENCY_B]:null!==t&&void 0!==t?t:void 0}),[e,t]),[C,x]=(0,i.usePair)(w[m.Field.CURRENCY_A],w[m.Field.CURRENCY_B]),B=(0,l.useTotalSupply)(null===x||void 0===x?void 0:x.liquidityToken),k=C===i.PairState.NOT_EXISTS||Boolean(B&&a.JSBI.equal(B.raw,f)),T=(0,p.useCurrencyBalances)(null!==h&&void 0!==h?h:void 0,[w[m.Field.CURRENCY_A],w[m.Field.CURRENCY_B]]),D={[m.Field.CURRENCY_A]:T[0],[m.Field.CURRENCY_B]:T[1]},I=(0,u.tryParseAmount)(y,w[g]),F=(0,r.useMemo)(()=>{if(k)return E&&w[v]?(0,u.tryParseAmount)(E,w[v]):void 0;if(I){const n=(0,d.wrappedCurrencyAmount)(I,b),[r,o]=[(0,d.wrappedCurrency)(e,b),(0,d.wrappedCurrency)(t,b)];if(r&&o&&n&&x){const i=v===m.Field.CURRENCY_B?t:e,l=v===m.Field.CURRENCY_B?x.priceOf(r).quote(n):x.priceOf(o).quote(n);return i===a.ETHER?a.CurrencyAmount.ether(l.raw):l}}else;},[k,E,w,v,I,e,b,t,x]),P=(0,r.useMemo)(()=>({[m.Field.CURRENCY_A]:g===m.Field.CURRENCY_A?I:F,[m.Field.CURRENCY_B]:g===m.Field.CURRENCY_A?F:I}),[F,I,g]),S=(0,r.useMemo)(()=>{if(k){const{[m.Field.CURRENCY_A]:e,[m.Field.CURRENCY_B]:t}=P;return e&&t?new a.Price(e.currency,t.currency,e.raw,t.raw):void 0}{const t=(0,d.wrappedCurrency)(e,b);return x&&t?x.priceOf(t):void 0}},[b,e,k,x,P]),M=(0,r.useMemo)(()=>{const{[m.Field.CURRENCY_A]:e,[m.Field.CURRENCY_B]:t}=P,[n,a]=[(0,d.wrappedCurrencyAmount)(e,b),(0,d.wrappedCurrencyAmount)(t,b)];return x&&B&&n&&a?x.getLiquidityMinted(B,n,a):void 0},[P,b,x,B]),R=(0,r.useMemo)(()=>M&&B?new a.Percent(M.raw,B.add(M).raw):void 0,[M,B]);let N;h||(N="Connect Wallet");var W,U;C===i.PairState.INVALID&&(N=null!==(W=N)&&void 0!==W?W:(0,c.TranslateString)(136,"Invalid pair"));P[m.Field.CURRENCY_A]&&P[m.Field.CURRENCY_B]||(N=null!==(U=N)&&void 0!==U?U:(0,c.TranslateString)(84,"Enter an amount"));const{[m.Field.CURRENCY_A]:O,[m.Field.CURRENCY_B]:L}=P;var j,V;O&&null!==D&&void 0!==D&&null!==(n=D[m.Field.CURRENCY_A])&&void 0!==n&&n.lessThan(O)&&(N="Insufficient "+(null===(j=w[m.Field.CURRENCY_A])||void 0===j?void 0:j.symbol)+" balance");L&&null!==D&&void 0!==D&&null!==(o=D[m.Field.CURRENCY_B])&&void 0!==o&&o.lessThan(L)&&(N="Insufficient "+(null===(V=w[m.Field.CURRENCY_B])||void 0===V?void 0:V.symbol)+" balance");return{dependentField:v,currencies:w,pair:x,pairState:C,currencyBalances:D,parsedAmounts:P,price:S,noLiquidity:k,liquidityMinted:M,poolTokenPercentage:R,error:N}},t.useMintActionHandlers=function(e){const t=(0,o.useDispatch)(),n=(0,r.useCallback)(n=>{t((0,m.typeInput)({field:m.Field.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))},[t,e]),a=(0,r.useCallback)(n=>{t((0,m.typeInput)({field:m.Field.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))},[t,e]);return{onFieldAInput:n,onFieldBInput:a}},t.useMintState=A;var a=n(24),r=n(0),o=n(39),i=n(193),l=n(258),s=n(22),c=n(152),d=n(114),u=n(380),p=n(105),m=n(143);const f=a.JSBI.BigInt(0);function A(){return(0,o.useSelector)(e=>e.mint)}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.useTradeExactIn=function(e,t){const n=u(null===e||void 0===e?void 0:e.currency,t);return(0,i.useMemo)(()=>{var a;return e&&t&&n.length>0&&null!==(a=r.Trade.bestTradeExactIn(n,e,t,{maxHops:3,maxNumResults:1})[0])&&void 0!==a?a:null},[n,e,t])},t.useTradeExactOut=function(e,t){const n=u(e,null===t||void 0===t?void 0:t.currency);return(0,i.useMemo)(()=>{var a;return e&&t&&n.length>0&&null!==(a=r.Trade.bestTradeExactOut(n,e,t,{maxHops:3,maxNumResults:1})[0])&&void 0!==a?a:null},[n,e,t])};var r=n(24),o=a(n(310)),i=n(0),l=n(58),s=n(193),c=n(114),d=n(22);function u(e,t){const{chainId:n}=(0,d.useActiveWeb3React)(),a=(0,i.useMemo)(()=>{var e;return n&&null!==(e=l.BASES_TO_CHECK_TRADES_AGAINST[n])&&void 0!==e?e:[]},[n]),[r,u]=n?[(0,c.wrappedCurrency)(e,n),(0,c.wrappedCurrency)(t,n)]:[void 0,void 0],p=(0,i.useMemo)(()=>(0,o.default)(a,e=>a.map(t=>[e,t])).filter(e=>{let[t,n]=e;return t.address!==n.address}),[a]),m=(0,i.useMemo)(()=>r&&u?[[r,u],...a.map(e=>[r,e]),...a.map(e=>[u,e]),...p].filter(e=>Boolean(e[0]&&e[1])).filter(e=>{let[t,n]=e;return t.address!==n.address}).filter(e=>{let[t,a]=e;if(!n)return!0;const r=l.CUSTOM_BASES[n];if(!r)return!0;const o=r[t.address],i=r[a.address];return!o&&!i||!(o&&!o.find(e=>a.equals(e)))&&!(i&&!i.find(e=>t.equals(e)))}):[],[r,u,a,p,n]),f=(0,s.usePairs)(m);return(0,i.useMemo)(()=>Object.values(f.filter(e=>Boolean(e[0]===s.PairState.EXISTS&&e[1])).reduce((e,t)=>{var n;let[,a]=t;return e[a.liquidityToken.address]=null!==(n=e[a.liquidityToken.address])&&void 0!==n?n:a,e},{})),[f])}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){const{search:e}=(0,o.useLocation)();return(0,r.useMemo)(()=>e&&e.length>1?(0,a.parse)(e,{parseArrays:!1,ignoreQueryPrefix:!0}):{},[e])};var a=n(781),r=n(0),o=n(76)},,,,,,,,,,,function(e,t){},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.ConfirmAddModalBottom=function(e){var t,n,a,u,p,m,f,A;let{noLiquidity:h,price:b,currencies:g,parsedAmounts:y,poolTokenPercentage:E,onAdd:v}=e;return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.RowBetween,null,r.default.createElement(d.TYPE.Body,null,null===(t=g[c.Field.CURRENCY_A])||void 0===t?void 0:t.symbol," Deposited"),r.default.createElement(l.RowFixed,null,r.default.createElement(s.default,{currency:g[c.Field.CURRENCY_A],style:{marginRight:"8px"}}),r.default.createElement(d.TYPE.Body,null,null===(n=y[c.Field.CURRENCY_A])||void 0===n?void 0:n.toSignificant(6)))),r.default.createElement(l.RowBetween,null,r.default.createElement(d.TYPE.Body,null,null===(a=g[c.Field.CURRENCY_B])||void 0===a?void 0:a.symbol," Deposited"),r.default.createElement(l.RowFixed,null,r.default.createElement(s.default,{currency:g[c.Field.CURRENCY_B],style:{marginRight:"8px"}}),r.default.createElement(d.TYPE.Body,null,null===(u=y[c.Field.CURRENCY_B])||void 0===u?void 0:u.toSignificant(6)))),r.default.createElement(l.RowBetween,null,r.default.createElement(d.TYPE.Body,null,"Rates"),r.default.createElement(d.TYPE.Body,null,`1 ${null===(p=g[c.Field.CURRENCY_A])||void 0===p?void 0:p.symbol} = ${null===b||void 0===b?void 0:b.toSignificant(4)} ${null===(m=g[c.Field.CURRENCY_B])||void 0===m?void 0:m.symbol}`)),r.default.createElement(l.RowBetween,{style:{justifyContent:"flex-end"}},r.default.createElement(d.TYPE.Body,null,`1 ${null===(f=g[c.Field.CURRENCY_B])||void 0===f?void 0:f.symbol} = ${null===b||void 0===b?void 0:b.invert().toSignificant(4)} ${null===(A=g[c.Field.CURRENCY_A])||void 0===A?void 0:A.symbol}`)),r.default.createElement(l.RowBetween,null,r.default.createElement(d.TYPE.Body,null,"Share of Pool:"),r.default.createElement(d.TYPE.Body,null,h?"100":null===E||void 0===E?void 0:E.toSignificant(4),"%")),r.default.createElement(i.ButtonPrimary,{style:{margin:"20px 0 0 0"},onClick:v},r.default.createElement(o.Text,{fontWeight:700,fontSize:20},h?"Create Pool & Supply":"Confirm Supply")))};var r=a(n(0)),o=n(40),i=n(72),l=n(28),s=a(n(104)),c=n(143),d=n(34)},function(e,t,n){"use strict";t.__esModule=!0,t.PoolPriceBar=function(e){var t,n,u,p,m,f,A,h;let{currencies:b,noLiquidity:g,poolTokenPercentage:y,price:E}=e;const v=(0,a.useContext)(o.ThemeContext);return a.default.createElement(i.AutoColumn,{gap:"md"},a.default.createElement(l.AutoRow,{justify:"space-around",gap:"4px"},a.default.createElement(i.AutoColumn,{justify:"center"},a.default.createElement(d.TYPE.Black,null,null!==(t=null===E||void 0===E?void 0:E.toSignificant(6))&&void 0!==t?t:"-"),a.default.createElement(r.Text,{fontWeight:700,fontSize:16,color:v.colors.text2,pt:1},null===(n=b[c.Field.CURRENCY_B])||void 0===n?void 0:n.symbol," per ",null===(u=b[c.Field.CURRENCY_A])||void 0===u?void 0:u.symbol)),a.default.createElement(i.AutoColumn,{justify:"center"},a.default.createElement(d.TYPE.Black,null,null!==(p=null===E||void 0===E||null===(m=E.invert())||void 0===m?void 0:m.toSignificant(6))&&void 0!==p?p:"-"),a.default.createElement(r.Text,{fontWeight:700,fontSize:16,color:v.colors.text2,pt:1},null===(f=b[c.Field.CURRENCY_A])||void 0===f?void 0:f.symbol," per ",null===(A=b[c.Field.CURRENCY_B])||void 0===A?void 0:A.symbol)),a.default.createElement(i.AutoColumn,{justify:"center"},a.default.createElement(d.TYPE.Black,null,g&&E?"100":null!==(h=null!==y&&void 0!==y&&y.lessThan(s.ONE_BIPS)?"<0.01":null===y||void 0===y?void 0:y.toFixed(2))&&void 0!==h?h:"0","%"),a.default.createElement(r.Text,{fontWeight:700,fontSize:16,color:v.colors.text2,pt:1},"Share of Pool"))))};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=n(40),o=n(14),i=n(47),l=n(28),s=n(58),c=n(143),d=n(34);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.RedirectOldRemoveLiquidityPathStructure=function(e){let{match:{params:{tokens:t}}}=e;if(!i.test(t))return r.default.createElement(o.Redirect,{to:"/pool"});const[n,a]=t.split("-");return r.default.createElement(o.Redirect,{to:`/remove/${n}/${a}`})};var r=a(n(0)),o=n(76);const i=/^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.RedirectPathToSwapOnly=function(e){let{location:t}=e;return r.default.createElement(o.Redirect,{to:{...t,pathname:"/swap"}})},t.RedirectToSwap=function(e){const{location:{search:t},match:{params:{outputCurrency:n}}}=e;return r.default.createElement(o.Redirect,{to:{...e.location,pathname:"/swap",search:t&&t.length>1?`${t}&outputCurrency=${n}`:"?outputCurrency="+n}})};var r=a(n(0)),o=n(76)},function(e,t,n){"use strict";t.__esModule=!0,t.allLanguages=t.ZHTW=t.ZHCN=t.VI=t.UK=t.TR=t.TA=t.SVSE=t.SR=t.RU=t.RO=t.PTBR=t.NL=t.KO=t.JA=t.IT=t.ID=t.HU=t.HI=t.FR=t.FIL=t.FI=t.ESES=t.EN=t.EL=t.DE=t.DA=t.CS=t.CA=t.AR=void 0;const a={code:"en",language:"English"};t.EN=a;const r={code:"ar",language:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"};t.AR=r;const o={code:"ca",language:"Catal\xe0"};t.CA=o;const i={code:"zh-CN",language:"\u7e41\u9ad4\u4e2d\u6587"};t.ZHCN=i;const l={code:"zh-TW",language:"\u81fa\u7063\u83ef\u8a9e"};t.ZHTW=l;const s={code:"cs",language:"\u010ce\u0161tina"};t.CS=s;const c={code:"da",language:"Dansk"};t.DA=c;const d={code:"de",language:"Deutsch"};t.DE=d;const u={code:"nl",language:"Nederlands"};t.NL=u;const p={code:"fil",language:"Filipino"};t.FIL=p;const m={code:"fi",language:"Suomalainen"};t.FI=m;const f={code:"fr",language:"Fran\xe7ais"};t.FR=f;const A={code:"el",language:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"};t.EL=A;const h={code:"hi",language:"\u0939\u093f\u0902\u0926\u0940"};t.HI=h;const b={code:"hu",language:"Magyar"};t.HU=b;const g={code:"id",language:"Bahasa Indonesia"};t.ID=g;const y={code:"it",language:"Italiano"};t.IT=y;const E={code:"ja",language:"\u65e5\u672c\u8a9e"};t.JA=E;const v={code:"ko",language:"\ud55c\uad6d\uc5b4"};t.KO=v;const w={code:"pt-BR",language:"Portugu\xeas"};t.PTBR=w;const C={code:"ro",language:"Rom\xe2n\u0103"};t.RO=C;const x={code:"ru",language:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"};t.RU=x;const B={code:"sr",language:"\u0421\u0440\u043f\u0441\u043a\u0438"};t.SR=B;const k={code:"es-ES",language:"Espa\xf1ol"};t.ESES=k;const T={code:"sv-SE",language:"Svenska"};t.SVSE=T;const D={code:"ta",language:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"};t.TA=D;const I={code:"tr",language:"T\xfcrk\xe7e"};t.TR=I;const F={code:"uk",language:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"};t.UK=F;const P={code:"vi",language:"Ti\u1ebfng Vi\u1ec7t"};t.VI=P;const S=[a,r,o,i,l,s,c,d,u,p,m,f,A,h,b,g,y,E,v,w,C,x,B,k,T,D,I,F,P];t.allLanguages=S},function(e,t,n){"use strict";t.__esModule=!0,t.LanguageContext=void 0;const a=(0,n(0).createContext)({selectedLanguage:{code:"",language:""},setSelectedLanguage:()=>{},translatedLanguage:{code:"",language:""},setTranslatedLanguage:()=>{}});t.LanguageContext=a},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=n(36),o=n(800),i=a(n(802)),l=n(245),s=a(n(803)),c=a(n(804)),d=a(n(805)),u=a(n(806)),p=a(n(807)),m=a(n(808)),f=a(n(809));const A=["user","transactions"],h=(0,r.configureStore)({reducer:{application:i.default,user:s.default,transactions:c.default,swap:d.default,mint:u.default,burn:m.default,multicall:f.default,lists:p.default},middleware:[...(0,r.getDefaultMiddleware)({thunk:!1}),(0,o.save)({states:A})],preloadedState:(0,o.load)({states:A})});h.dispatch((0,l.updateVersion)());var b=h;t.default=b},,,function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(36),r=n(171);var o=(0,a.createReducer)({blockNumber:{},popupList:[],walletModalOpen:!1,settingsMenuOpen:!1},e=>e.addCase(r.updateBlockNumber,(e,t)=>{const{chainId:n,blockNumber:a}=t.payload;"number"!==typeof e.blockNumber[n]?e.blockNumber[n]=a:e.blockNumber[n]=Math.max(a,e.blockNumber[n])}).addCase(r.toggleWalletModal,e=>{e.walletModalOpen=!e.walletModalOpen}).addCase(r.toggleSettingsMenu,e=>{e.settingsMenuOpen=!e.settingsMenuOpen}).addCase(r.addPopup,(e,t)=>{let{payload:{content:n,key:r,removeAfterMs:o=15e3}}=t;e.popupList=(r?e.popupList.filter(e=>e.key!==r):e.popupList).concat([{key:r||(0,a.nanoid)(),show:!0,content:n,removeAfterMs:o}])}).addCase(r.removePopup,(e,t)=>{let{payload:{key:n}}=t;e.popupList.forEach(e=>{e.key===n&&(e.show=!1)})}));t.default=o},function(e,t,n){"use strict";t.__esModule=!0,t.initialState=t.default=void 0;var a=n(58),r=n(36),o=n(245),i=n(221);const l=()=>(new Date).getTime();function s(e,t){return`${e};${t}`}const c={userDarkMode:null,matchesDarkMode:!0,userExpertMode:!1,userSlippageTolerance:a.INITIAL_ALLOWED_SLIPPAGE,userDeadline:a.DEFAULT_DEADLINE_FROM_NOW,tokens:{},pairs:{},timestamp:l(),audioPlay:!0};t.initialState=c;var d=(0,r.createReducer)(c,e=>e.addCase(o.updateVersion,e=>{"number"!==typeof e.userSlippageTolerance&&(e.userSlippageTolerance=a.INITIAL_ALLOWED_SLIPPAGE),"number"!==typeof e.userDeadline&&(e.userDeadline=a.DEFAULT_DEADLINE_FROM_NOW),e.lastUpdateVersionTimestamp=l()}).addCase(i.updateUserDarkMode,(e,t)=>{e.userDarkMode=t.payload.userDarkMode,e.timestamp=l()}).addCase(i.updateMatchesDarkMode,(e,t)=>{e.matchesDarkMode=t.payload.matchesDarkMode,e.timestamp=l()}).addCase(i.updateUserExpertMode,(e,t)=>{e.userExpertMode=t.payload.userExpertMode,e.timestamp=l()}).addCase(i.updateUserSlippageTolerance,(e,t)=>{e.userSlippageTolerance=t.payload.userSlippageTolerance,e.timestamp=l()}).addCase(i.updateUserDeadline,(e,t)=>{e.userDeadline=t.payload.userDeadline,e.timestamp=l()}).addCase(i.addSerializedToken,(e,t)=>{let{payload:{serializedToken:n}}=t;e.tokens[n.chainId]=e.tokens[n.chainId]||{},e.tokens[n.chainId][n.address]=n,e.timestamp=l()}).addCase(i.removeSerializedToken,(e,t)=>{let{payload:{address:n,chainId:a}}=t;e.tokens[a]=e.tokens[a]||{},delete e.tokens[a][n],e.timestamp=l()}).addCase(i.addSerializedPair,(e,t)=>{let{payload:{serializedPair:n}}=t;if(n.token0.chainId===n.token1.chainId&&n.token0.address!==n.token1.address){const t=n.token0.chainId;e.pairs[t]=e.pairs[t]||{},e.pairs[t][s(n.token0.address,n.token1.address)]=n}e.timestamp=l()}).addCase(i.removeSerializedPair,(e,t)=>{let{payload:{chainId:n,tokenAAddress:a,tokenBAddress:r}}=t;e.pairs[n]&&(delete e.pairs[n][s(a,r)],delete e.pairs[n][s(r,a)]),e.timestamp=l()}).addCase(i.muteAudio,e=>{e.audioPlay=!1}).addCase(i.unmuteAudio,e=>{e.audioPlay=!0}));t.default=d},function(e,t,n){"use strict";t.__esModule=!0,t.initialState=t.default=void 0;var a=n(36),r=n(176);const o=()=>(new Date).getTime(),i={};t.initialState=i;var l=(0,a.createReducer)(i,e=>e.addCase(r.addTransaction,(e,t)=>{var n,a;let{payload:{chainId:r,from:i,hash:l,approval:s,summary:c}}=t;if(null!==(n=e[r])&&void 0!==n&&n[l])throw Error("Attempted to add existing transaction.");const d=null!==(a=e[r])&&void 0!==a?a:{};d[l]={hash:l,approval:s,summary:c,from:i,addedTime:o()},e[r]=d}).addCase(r.clearAllTransactions,(e,t)=>{let{payload:{chainId:n}}=t;e[n]&&(e[n]={})}).addCase(r.checkedTransaction,(e,t)=>{var n;let{payload:{chainId:a,hash:r,blockNumber:o}}=t;const i=null===(n=e[a])||void 0===n?void 0:n[r];i&&(i.lastCheckedBlockNumber?i.lastCheckedBlockNumber=Math.max(o,i.lastCheckedBlockNumber):i.lastCheckedBlockNumber=o)}).addCase(r.finalizeTransaction,(e,t)=>{var n;let{payload:{hash:a,chainId:r,receipt:i}}=t;const l=null===(n=e[r])||void 0===n?void 0:n[a];l&&(l.receipt=i,l.confirmedTime=o())}));t.default=l},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(36),r=n(151);const o={independentField:r.Field.INPUT,typedValue:"",[r.Field.INPUT]:{currencyId:""},[r.Field.OUTPUT]:{currencyId:""},recipient:null};var i=(0,a.createReducer)(o,e=>e.addCase(r.replaceSwapState,(e,t)=>{let{payload:{typedValue:n,recipient:a,field:o,inputCurrencyId:i,outputCurrencyId:l}}=t;return{[r.Field.INPUT]:{currencyId:i},[r.Field.OUTPUT]:{currencyId:l},independentField:o,typedValue:n,recipient:a}}).addCase(r.selectCurrency,(e,t)=>{let{payload:{currencyId:n,field:a}}=t;const o=a===r.Field.INPUT?r.Field.OUTPUT:r.Field.INPUT;return n===e[o].currencyId?{...e,independentField:e.independentField===r.Field.INPUT?r.Field.OUTPUT:r.Field.INPUT,[a]:{currencyId:n},[o]:{currencyId:e[a].currencyId}}:{...e,[a]:{currencyId:n}}}).addCase(r.switchCurrencies,e=>({...e,independentField:e.independentField===r.Field.INPUT?r.Field.OUTPUT:r.Field.INPUT,[r.Field.INPUT]:{currencyId:e[r.Field.OUTPUT].currencyId},[r.Field.OUTPUT]:{currencyId:e[r.Field.INPUT].currencyId}})).addCase(r.typeInput,(e,t)=>{let{payload:{field:n,typedValue:a}}=t;return console.log(a),{...e,independentField:n,typedValue:a}}).addCase(r.setRecipient,(e,t)=>{let{payload:{recipient:n}}=t;e.recipient=n}));t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(36),r=n(143);const o={independentField:r.Field.CURRENCY_A,typedValue:"",otherTypedValue:""};var i=(0,a.createReducer)(o,e=>e.addCase(r.resetMintState,()=>o).addCase(r.typeInput,(e,t)=>{let{payload:{field:n,typedValue:a,noLiquidity:r}}=t;return r?n===e.independentField?{...e,independentField:n,typedValue:a}:{...e,independentField:n,typedValue:a,otherTypedValue:e.typedValue}:{...e,independentField:n,typedValue:a,otherTypedValue:""}}));t.default=i},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=n(36),o=n(232),i=n(349),l=n(245),s=n(142),c=a(n(350));const d={error:null,current:null,loadingRequestId:null,pendingUpdate:null},u={lastInitializedDefaultListOfLists:i.DEFAULT_LIST_OF_LISTS,byUrl:{...i.DEFAULT_LIST_OF_LISTS.reduce((e,t)=>(e[t]=d,e),{}),[i.DEFAULT_TOKEN_LIST_URL]:{error:null,current:c.default,loadingRequestId:null,pendingUpdate:null}},selectedListUrl:i.DEFAULT_TOKEN_LIST_URL};var p=(0,r.createReducer)(u,e=>e.addCase(s.fetchTokenList.pending,(e,t)=>{let{payload:{requestId:n,url:a}}=t;e.byUrl[a]={current:null,pendingUpdate:null,...e.byUrl[a],loadingRequestId:n,error:null}}).addCase(s.fetchTokenList.fulfilled,(e,t)=>{var n,a;let{payload:{requestId:r,tokenList:i,url:l}}=t;const s=null===(n=e.byUrl[l])||void 0===n?void 0:n.current,c=null===(a=e.byUrl[l])||void 0===a?void 0:a.loadingRequestId;if(s){if((0,o.getVersionUpgrade)(s.version,i.version)===o.VersionUpgrade.NONE)return;null!==c&&c!==r||(e.byUrl[l]={...e.byUrl[l],loadingRequestId:null,error:null,current:s,pendingUpdate:i})}else e.byUrl[l]={...e.byUrl[l],loadingRequestId:null,error:null,current:i,pendingUpdate:null}}).addCase(s.fetchTokenList.rejected,(e,t)=>{var n;let{payload:{url:a,requestId:r,errorMessage:o}}=t;(null===(n=e.byUrl[a])||void 0===n?void 0:n.loadingRequestId)===r&&(e.byUrl[a]={...e.byUrl[a],loadingRequestId:null,error:o,current:null,pendingUpdate:null})}).addCase(s.selectList,(e,t)=>{let{payload:n}=t;e.selectedListUrl=n,e.byUrl[n]||(e.byUrl[n]=d)}).addCase(s.addList,(e,t)=>{let{payload:n}=t;e.byUrl[n]||(e.byUrl[n]=d)}).addCase(s.removeList,(e,t)=>{let{payload:n}=t;e.byUrl[n]&&delete e.byUrl[n],e.selectedListUrl===n&&(e.selectedListUrl=Object.keys(e.byUrl)[0])}).addCase(s.acceptListUpdate,(e,t)=>{var n;let{payload:a}=t;if(null===(n=e.byUrl[a])||void 0===n||!n.pendingUpdate)throw new Error("accept list update called without pending update");e.byUrl[a]={...e.byUrl[a],pendingUpdate:null,current:e.byUrl[a].pendingUpdate}}).addCase(l.updateVersion,e=>{if(e.lastInitializedDefaultListOfLists){if(e.lastInitializedDefaultListOfLists){const t=e.lastInitializedDefaultListOfLists.reduce((e,t)=>e.add(t),new Set),n=i.DEFAULT_LIST_OF_LISTS.reduce((e,t)=>e.add(t),new Set);i.DEFAULT_LIST_OF_LISTS.forEach(n=>{t.has(n)||(e.byUrl[n]=d)}),e.lastInitializedDefaultListOfLists.forEach(t=>{n.has(t)||delete e.byUrl[t]})}}else e.byUrl=u.byUrl,e.selectedListUrl=void 0;e.lastInitializedDefaultListOfLists=i.DEFAULT_LIST_OF_LISTS}));t.default=p},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(36),r=n(387);const o={independentField:r.Field.LIQUIDITY_PERCENT,typedValue:"0"};var i=(0,a.createReducer)(o,e=>e.addCase(r.typeInput,(e,t)=>{let{payload:{field:n,typedValue:a}}=t;return{...e,independentField:n,typedValue:a}}));t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n(36),r=n(220);var o=(0,a.createReducer)({callResults:{}},e=>e.addCase(r.addMulticallListeners,(e,t)=>{var n;let{payload:{calls:a,chainId:o,options:{blocksPerFetch:i=1}={}}}=t;const l=e.callListeners?e.callListeners:e.callListeners={};l[o]=null!==(n=l[o])&&void 0!==n?n:{},a.forEach(e=>{var t,n;const a=(0,r.toCallKey)(e);l[o][a]=null!==(t=l[o][a])&&void 0!==t?t:{},l[o][a][i]=(null!==(n=l[o][a][i])&&void 0!==n?n:0)+1})}).addCase(r.removeMulticallListeners,(e,t)=>{let{payload:{chainId:n,calls:a,options:{blocksPerFetch:o=1}={}}}=t;const i=e.callListeners?e.callListeners:e.callListeners={};i[n]&&a.forEach(e=>{const t=(0,r.toCallKey)(e);i[n][t]&&i[n][t][o]&&(1===i[n][t][o]?delete i[n][t][o]:i[n][t][o]--)})}).addCase(r.fetchingMulticallResults,(e,t)=>{var n;let{payload:{chainId:a,fetchingBlockNumber:o,calls:i}}=t;e.callResults[a]=null!==(n=e.callResults[a])&&void 0!==n?n:{},i.forEach(t=>{const n=(0,r.toCallKey)(t),i=e.callResults[a][n];if(i){var l;if((null!==(l=i.fetchingBlockNumber)&&void 0!==l?l:0)>=o)return;e.callResults[a][n].fetchingBlockNumber=o}else e.callResults[a][n]={fetchingBlockNumber:o}})}).addCase(r.errorFetchingMulticallResults,(e,t)=>{var n;let{payload:{fetchingBlockNumber:a,chainId:o,calls:i}}=t;e.callResults[o]=null!==(n=e.callResults[o])&&void 0!==n?n:{},i.forEach(t=>{const n=(0,r.toCallKey)(t),i=e.callResults[o][n];i&&i.fetchingBlockNumber===a&&(delete i.fetchingBlockNumber,i.data=null,i.blockNumber=a)})}).addCase(r.updateMulticallResults,(e,t)=>{var n;let{payload:{chainId:a,results:r,blockNumber:o}}=t;e.callResults[a]=null!==(n=e.callResults[a])&&void 0!==n?n:{},Object.keys(r).forEach(t=>{var n;const i=e.callResults[a][t];(null!==(n=null===i||void 0===i?void 0:i.blockNumber)&&void 0!==n?n:0)>o||(e.callResults[a][t]={data:r[t],blockNumber:o})})}));t.default=o},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const{library:e,chainId:t}=(0,o.useActiveWeb3React)(),n=(0,c.useDispatch)(),a=(0,l.default)(),[d,u]=(0,r.useState)({chainId:t,blockNumber:null}),p=(0,r.useCallback)(e=>{u(n=>t===n.chainId?"number"!==typeof n.blockNumber?{chainId:t,blockNumber:e}:{chainId:t,blockNumber:Math.max(e,n.blockNumber)}:n)},[t,u]);(0,r.useEffect)(()=>{if(e&&t&&a)return u({chainId:t,blockNumber:null}),e.getBlockNumber().then(p).catch(e=>console.error("Failed to get block number for chainId: "+t,e)),e.on("block",p),()=>{e.removeListener("block",p)}},[n,t,e,p,a]);const m=(0,i.default)(d,100);return(0,r.useEffect)(()=>{m.chainId&&m.blockNumber&&a&&n((0,s.updateBlockNumber)({chainId:m.chainId,blockNumber:m.blockNumber}))},[a,n,m.blockNumber,m.chainId]),null};var r=n(0),o=n(22),i=a(n(175)),l=a(n(352)),s=n(171),c=n(39)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=function(){const{library:e}=(0,l.useActiveWeb3React)(),t=(0,i.useDispatch)(),n=(0,i.useSelector)(e=>e.lists.byUrl),a=(0,d.default)(),m=(0,s.useFetchListCallback)(),f=(0,o.useCallback)(()=>{a&&Object.keys(n).forEach(e=>m(e).catch(e=>console.debug("interval list fetching error",e)))},[m,a,n]);return(0,c.default)(f,e?6e5:null),(0,o.useEffect)(()=>{Object.keys(n).forEach(e=>{const t=n[e];t.current||t.loadingRequestId||t.error||m(e).catch(e=>console.debug("list added fetching error",e))})},[t,m,e,n]),(0,o.useEffect)(()=>{Object.keys(n).forEach(e=>{const a=n[e];if(a.current&&a.pendingUpdate){const n=(0,r.getVersionUpgrade)(a.current.version,a.pendingUpdate.version);switch(n){case r.VersionUpgrade.NONE:throw new Error("unexpected no version bump");case r.VersionUpgrade.PATCH:case r.VersionUpgrade.MINOR:n>=(0,r.minVersionBump)(a.current.tokens,a.pendingUpdate.tokens)?(t((0,p.acceptListUpdate)(e)),t((0,u.addPopup)({key:e,content:{listUpdate:{listUrl:e,oldList:a.current,newList:a.pendingUpdate,auto:!0}}}))):console.error(`List at url ${e} could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR`);break;case r.VersionUpgrade.MAJOR:t((0,u.addPopup)({key:e,content:{listUpdate:{listUrl:e,auto:!1,oldList:a.current,newList:a.pendingUpdate}},removeAfterMs:null}))}}})},[t,n]),null};var r=n(232),o=n(0),i=n(39),l=n(22),s=n(340),c=a(n(312)),d=a(n(352)),u=n(171),p=n(142)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.activeListeningKeys=m,t.default=function(){const e=(0,o.useDispatch)(),t=(0,o.useSelector)(e=>e.multicall),n=(0,s.default)(t.callListeners,100),a=(0,u.useBlockNumber)(),{chainId:A}=(0,i.useActiveWeb3React)(),h=(0,l.useMulticallContract)(),b=(0,r.useRef)(),g=(0,r.useMemo)(()=>m(n,A),[n,A]),y=(0,r.useMemo)(()=>f(t.callResults,g,A,a),[A,t.callResults,g,a]),E=(0,r.useMemo)(()=>JSON.stringify(y.sort()),[y]);return(0,r.useEffect)(()=>{var t;if(!a||!A||!h)return;const n=JSON.parse(E);if(0===n.length)return;const r=n.map(e=>(0,p.parseCallKey)(e)),o=(0,c.default)(r,600);var i,l;(null===(t=b.current)||void 0===t?void 0:t.blockNumber)!==a&&(null===(i=b.current)||void 0===i||null===(l=i.cancellations)||void 0===l||l.forEach(e=>e()));e((0,p.fetchingMulticallResults)({calls:r,chainId:A,fetchingBlockNumber:a})),b.current={blockNumber:a,cancellations:o.map((t,r)=>{const{cancel:i,promise:l}=(0,d.retry)(()=>async function(e,t,n){let a,r;console.debug("Fetching chunk",e,t,n);try{[a,r]=await e.aggregate(t.map(e=>[e.address,e.callData]))}catch(o){throw console.debug("Failed to fetch chunk inside retry",o),o}if(a.toNumber()<n)throw console.debug(`Fetched results for old block number: ${a.toString()} vs. ${n}`),new d.RetryableError("Fetched for old block number");return{results:r,blockNumber:a.toNumber()}}(h,t,a),{n:1/0,minWait:1e3,maxWait:1500});return l.then(i=>{let{results:l,blockNumber:s}=i;b.current={cancellations:[],blockNumber:a};const c=o.slice(0,r).reduce((e,t)=>e+t.length,0),d=c+l.length;e((0,p.updateMulticallResults)({chainId:A,results:n.slice(c,d).reduce((e,t,n)=>{var a;return e[t]=null!==(a=l[n])&&void 0!==a?a:null,e},{}),blockNumber:s})),console.log("Success to fetch multicall chunk",t,A)}).catch(n=>{n instanceof d.CancelledError?console.debug("Cancelled fetch for blockNumber",a):(console.error("Failed to fetch multicall chunk",t,A,n),e((0,p.errorFetchingMulticallResults)({calls:t,chainId:A,fetchingBlockNumber:a})))}),i})}},[A,h,e,E,a]),null},t.outdatedListeningKeys=f;var r=n(0),o=n(39),i=n(22),l=n(73),s=a(n(175)),c=a(n(813)),d=n(814),u=n(68),p=n(220);function m(e,t){if(!e||!t)return{};const n=e[t];return n?Object.keys(n).reduce((e,t)=>{const a=n[t];return e[t]=Object.keys(a).filter(e=>{const t=parseInt(e);return!(t<=0)&&a[t]>0}).reduce((e,t)=>Math.min(e,parseInt(t)),1/0),e},{}):{}}function f(e,t,n,a){if(!n||!a)return[];return e[n]?Object.keys(t).filter(r=>{const o=t[r],i=e[n][r];if(!i)return!0;const l=a-(o-1);return!(i.fetchingBlockNumber&&i.fetchingBlockNumber>=l)&&(!i.blockNumber||i.blockNumber<l)}):Object.keys(t)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(t<1)throw new Error("maxChunkSize must be gte 1");if(e.length<=t)return[e];const n=Math.ceil(e.length/t),a=Math.ceil(e.length/n);return[...Array(n).keys()].map(t=>e.slice(t*a,t*a+a))}},function(e,t,n){"use strict";t.__esModule=!0,t.RetryableError=t.CancelledError=void 0,t.retry=function(e,t){let n,{n:o,minWait:i,maxWait:l}=t,s=!1;return{promise:new Promise(async(t,a)=>{for(n=a;;){let n;try{n=await e(),s||(t(n),s=!0);break}catch(u){if(s)break;if(o<=0||!(u instanceof r)){a(u),s=!0;break}o--}await(c=i,d=l,function(e){return new Promise(t=>setTimeout(t,e))}(c+Math.round(Math.random()*Math.max(0,d-c))))}var c,d}),cancel:()=>{s||(s=!0,n(new a))}}};class a extends Error{constructor(){super("Cancelled")}}t.CancelledError=a;class r extends Error{}t.RetryableError=r},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){const{chainId:e,library:t}=(0,o.useActiveWeb3React)(),n=(0,i.useBlockNumber)(),c=(0,r.useDispatch)(),d=(0,r.useSelector)(e=>e.transactions),u=(0,a.useMemo)(()=>{var t;return e&&null!==(t=d[e])&&void 0!==t?t:{}},[e,d]),p=(0,i.useAddPopup)();return(0,a.useEffect)(()=>{e&&t&&n&&Object.keys(u).filter(e=>s(n,u[e])).forEach(a=>{t.getTransactionReceipt(a).then(t=>{var r;t?(c((0,l.finalizeTransaction)({chainId:e,hash:a,receipt:{blockHash:t.blockHash,blockNumber:t.blockNumber,contractAddress:t.contractAddress,from:t.from,status:t.status,to:t.to,transactionHash:t.transactionHash,transactionIndex:t.transactionIndex}})),p({txn:{hash:a,success:1===t.status,summary:null===(r=u[a])||void 0===r?void 0:r.summary}},a)):c((0,l.checkedTransaction)({chainId:e,hash:a,blockNumber:n}))}).catch(e=>{console.error("failed to check transaction hash: "+a,e)})})},[e,t,u,n,c,p]),null},t.shouldCheck=s;var a=n(0),r=n(39),o=n(22),i=n(68),l=n(176);function s(e,t){if(t.receipt)return!1;if(!t.lastCheckedBlockNumber)return!0;const n=e-t.lastCheckedBlockNumber;if(n<1)return!1;const a=((new Date).getTime()-t.addedTime)/1e3/60;return a>60?n>9:!(a>5)||n>2}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){const e=(0,r.useDispatch)();return(0,a.useEffect)(()=>{e((0,o.updateMatchesDarkMode)({matchesDarkMode:!0}))},[e]),null};var a=n(0),r=n(39),o=n(221)},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.lightTheme=t.darkTheme=void 0;var r=a(n(818)),o=a(n(819));t.lightTheme=o.default;var i=a(n(821));t.darkTheme=i.default,r.default.load({google:{families:["Noto+Sans:400,500,600,700,800,900","sans-serif"]}})},,function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(353)),o={...r.default,colors:{...r.default.colors,shadow1:"rgba(0, 0, 0, 0.1)",text1:"#15161B",text2:"#565B6B",text3:"#8B909A",text4:"#B4B7BE",bg0:"#F5F7F6",bg1:"#FFFFFF",bg2:"#EFF3F0",bg3:"#E3EAE5",bg4:"#D5DED8",bg5:"#C6D1C9",bg6:"linear-gradient(135deg, rgba(95, 203, 135, 0.06) 0%, rgba(123, 255, 105, 0.06) 100%)",modalBG:"rgba(21, 22, 27, 0.4)",advancedBG:"rgba(255, 255, 255, 0.7)",primary1:"#31C36B",primary2:"#5FCB87",primary3:"#28A85A",primary4:"#C9F0D8",primary5:"#E8F8EE",primary6:"rgba(49, 195, 107, 0.12)",primaryText1:"#157A3E",buttonText:"#0E0E16",secondary1:"#10B981",secondary2:"#34D399",secondary3:"#6EE7B7"}};t.default=o},function(e,t,n){"use strict";t.__esModule=!0,t.yellow=t.white=t.red=t.purple=t.green=t.gradients=t.blue=t.black=void 0;t.white="#FFFFFF";t.black="#0A0E1A";t.green={green1:"#10B981",green2:"#059669",green3:"#34D399"};t.red={red1:"#EF4444",red2:"#F87171",red3:"#DC2626"};t.yellow={yellow1:"#F59E0B",yellow2:"#FBBF24",yellow3:"#F97316"};t.purple={purple1:"#8B5CF6",purple2:"#A78BFA",purple3:"#7C3AED"};t.blue={blue1:"#3B82F6",blue2:"#60A5FA",blue3:"#2563EB"};t.gradients={primary:"linear-gradient(135deg, #7BFF69 0%, #5FCB87 100%)",success:"linear-gradient(135deg, #10B981 0%, #059669 100%)",danger:"linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",gold:"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",cosmic:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",sunset:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"}},function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r=a(n(353)),o={...r.default,colors:{...r.default.colors,shadow1:"rgba(0, 0, 0, 0.5)",text1:"#F5F5F5",text2:"#C3C5CB",text3:"#8A8FA3",text4:"#5E6373",bg0:"#0E0E16",bg1:"#15161B",bg2:"#1B1D27",bg3:"#23262F",bg4:"#2A2A3E",bg5:"#353849",bg6:"linear-gradient(135deg, rgba(123, 255, 105, 0.07) 0%, rgba(95, 203, 135, 0.07) 100%)",modalBG:"rgba(14, 14, 22, 0.78)",advancedBG:"rgba(21, 22, 27, 0.92)",primary1:"#7BFF69",primary2:"#A4FF97",primary3:"#5FCB87",primary4:"#3E9B63",primary5:"#1E3D2B",primary6:"rgba(123, 255, 105, 0.14)",primaryText1:"#83FFAE",buttonText:"#0E0E16",secondary1:"#5FCB87",secondary2:"#84EFAB",secondary3:"#B5F5C8"}};t.default=o}]),[[406,3,5]]]);