/*! For license information please see 8.34d12ab3.chunk.js.LICENSE.txt */
(this["webpackJsonp@cheeseswapv2/interface-v2"]=this["webpackJsonp@cheeseswapv2/interface-v2"]||[]).push([[8],{1080:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mConnectingWidget=void 0;var o=r(860),n=r(864),l=r(896),s=r(873);r(1503),r(905),r(1039),r(1271),r(1272),r(2005),r(955),r(1273),r(1274);var a=i(r(2012)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};class d extends o.LitElement{constructor(){var e,t,r,i,o,n,l,a;(super(),this.wallet=null===(e=s.RouterController.state.data)||void 0===e?void 0:e.wallet,this.connector=null===(t=s.RouterController.state.data)||void 0===t?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=null!==(r=s.AssetUtil.getConnectorImage(this.connector))&&void 0!==r?r:s.AssetUtil.getWalletImage(this.wallet),this.name=null!==(i=null!==(o=null===(n=this.wallet)||void 0===n?void 0:n.name)&&void 0!==o?o:null===(l=this.connector)||void 0===l?void 0:l.name)&&void 0!==i?i:"Wallet",this.isRetrying=!1,this.uri=s.ConnectionController.state.wcUri,this.error=s.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(s.ConnectionController.subscribeKey("wcUri",e=>{var t;(this.uri=e,this.isRetrying&&this.onRetry)&&(this.isRetrying=!1,null===(t=this.onConnect)||void 0===t||t.call(this))}),s.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(s.CoreHelperUtil.isTelegram()||s.CoreHelperUtil.isSafari())&&s.CoreHelperUtil.isIos()&&s.ConnectionController.state.wcUri)&&(null===(a=this.onConnect)||void 0===a||a.call(this))}firstUpdated(){var e;null===(e=this.onAutoConnect)||void 0===e||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),s.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null===(e=this.onRender)||void 0===e||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r="";return this.label?r=this.label:(r="Continue in "+this.name,this.error&&(r="Connection declined")),o.html`
      <wui-flex
        data-error=${(0,l.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,l.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.html`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?o.html`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-button");null===t||void 0===t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;(s.ConnectionController.setWcError(!1),this.onRetry)?(this.isRetrying=!0,null===(e=this.onRetry)||void 0===e||e.call(this)):null===(t=this.onConnect)||void 0===t||t.call(this)}loaderTemplate(){const e=s.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(s.CoreHelperUtil.copyToClopboard(this.uri),s.SnackController.showSuccess("Link copied"))}catch{s.SnackController.showError("Failed to copy")}}}t.W3mConnectingWidget=d,d.styles=a.default,c([(0,n.state)()],d.prototype,"isRetrying",void 0),c([(0,n.state)()],d.prototype,"uri",void 0),c([(0,n.state)()],d.prototype,"error",void 0),c([(0,n.state)()],d.prototype,"ready",void 0),c([(0,n.state)()],d.prototype,"showRetry",void 0),c([(0,n.state)()],d.prototype,"label",void 0),c([(0,n.state)()],d.prototype,"secondaryBtnLabel",void 0),c([(0,n.state)()],d.prototype,"secondaryLabel",void 0),c([(0,n.state)()],d.prototype,"isLoading",void 0),c([(0,n.property)({type:Boolean})],d.prototype,"isMobile",void 0),c([(0,n.property)()],d.prototype,"onRetry",void 0)},1271:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1079);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1273:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1269);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1274:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mMobileDownloadLinks=void 0;var o=r(860),n=r(864),l=r(873),s=r(868);r(2008);var a=i(r(2011)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends o.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,a=l.CoreHelperUtil.isMobile(),c=l.CoreHelperUtil.isIos(),d=l.CoreHelperUtil.isAndroid(),u=[t,r,n,i].filter(Boolean).length>1,p=s.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!a?o.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>l.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&n?o.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&c?o.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&d?o.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&l.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&l.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&l.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};t.W3mMobileDownloadLinks=d,d.styles=[a.default],c([(0,n.property)({type:Object})],d.prototype,"wallet",void 0),t.W3mMobileDownloadLinks=d=c([(0,s.customElement)("w3m-mobile-download-links")],d)},1275:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2032);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1505:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1506);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1506:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiShimmer=void 0;var o=r(860),n=r(864),l=r(879),s=i(r(2020)),a=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let c=class extends o.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",o.html`<slot></slot>`}};t.WuiShimmer=c,c.styles=[s.default],a([(0,n.property)()],c.prototype,"width",void 0),a([(0,n.property)()],c.prototype,"height",void 0),a([(0,n.property)()],c.prototype,"variant",void 0),a([(0,n.property)({type:Boolean})],c.prototype,"rounded",void 0),t.WuiShimmer=c=a([(0,l.customElement)("wui-shimmer")],c)},1508:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2047);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1509:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mAllWalletsListItem=void 0;var o=r(860),n=r(864),l=r(896),s=r(873),a=r(868);r(905),r(1039),r(1505),r(955),r(1273);var c=i(r(2049)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const r="certified"===(null===(e=this.wallet)||void 0===e?void 0:e.badge_type);return o.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,l.ifDefined)(r?"certified":void 0)}
            >${null===(t=this.wallet)||void 0===t?void 0:t.name}</wui-text
          >
          ${r?o.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t,r;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.html`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,l.ifDefined)(this.imageSrc)}
        name=${(0,l.ifDefined)(null===(e=this.wallet)||void 0===e?void 0:e.name)}
        .installed=${null!==(t=null===(r=this.wallet)||void 0===r?void 0:r.installed)&&void 0!==t&&t}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,s.EventsController.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:s.RouterController.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};t.W3mAllWalletsListItem=u,u.styles=c.default,d([(0,n.state)()],u.prototype,"visible",void 0),d([(0,n.state)()],u.prototype,"imageSrc",void 0),d([(0,n.state)()],u.prototype,"imageLoading",void 0),d([(0,n.state)()],u.prototype,"isImpressed",void 0),d([(0,n.property)()],u.prototype,"explorerId",void 0),d([(0,n.property)()],u.prototype,"walletQuery",void 0),d([(0,n.property)()],u.prototype,"certified",void 0),d([(0,n.property)()],u.prototype,"displayIndex",void 0),d([(0,n.property)({type:Object})],u.prototype,"wallet",void 0),t.W3mAllWalletsListItem=u=d([(0,a.customElement)("w3m-all-wallets-list-item")],u)},1943:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1944);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var o=r(2028);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var n=r(2054);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||(t[e]=n[e]))}))},1944:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcBasicView=void 0;var i=r(860),o=r(864),n=r(873),l=r(868);r(905),r(1954),r(1991),r(1993);var s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.isMobile=n.CoreHelperUtil.isMobile(),this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.unsubscribe.push(n.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=n.ApiController.state,{customWallets:r}=n.OptionsController.state,o=n.StorageUtil.getRecentWallets(),l=e.length||t.length||(null===r||void 0===r?void 0:r.length)||o.length;return i.html`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${l?i.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.html`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?i.html` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};t.W3mConnectingWcBasicView=a,s([(0,o.state)()],a.prototype,"isMobile",void 0),s([(0,o.state)()],a.prototype,"remoteFeatures",void 0),t.W3mConnectingWcBasicView=a=s([(0,l.customElement)("w3m-connecting-wc-basic-view")],a)},1954:function(e,t,r){"use strict";t.__esModule=!0,t.W3mAllWalletsWidget=void 0;var i=r(860),o=r(864),n=r(896),l=r(871),s=r(873),a=r(868);r(1501);var c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=s.ConnectorController.state.connectors,this.count=s.ApiController.state.count,this.filteredCount=s.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=s.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(s.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),s.ApiController.subscribeKey("count",e=>this.count=e),s.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),s.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=s.OptionsController.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!s.CoreHelperUtil.isMobile())return null;const r=s.ApiController.state.featured.length,o=this.count+r,a=o<10?o:10*Math.floor(o/10),c=this.filteredCount>0?this.filteredCount:a;let d=""+c;this.filteredCount>0?d=""+this.filteredCount:c<o&&(d=c+"+");const u=s.ConnectionController.hasAnyConnection(l.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${d}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,n.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${u}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var e;s.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),s.RouterController.push("AllWallets",{redirectView:null===(e=s.RouterController.state.data)||void 0===e?void 0:e.redirectView})}};t.W3mAllWalletsWidget=d,c([(0,o.property)()],d.prototype,"tabIdx",void 0),c([(0,o.state)()],d.prototype,"connectors",void 0),c([(0,o.state)()],d.prototype,"count",void 0),c([(0,o.state)()],d.prototype,"filteredCount",void 0),c([(0,o.state)()],d.prototype,"isFetchingRecommendedWallets",void 0),t.W3mAllWalletsWidget=d=c([(0,a.customElement)("w3m-all-wallets-widget")],d)},1991:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mConnectorList=void 0;var o=r(860),n=r(864),l=r(896),s=r(871),a=r(873),c=r(868);r(905);var d=r(1150),u=r(1260),p=i(r(1992)),h=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let m=class extends o.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=a.ConnectorController.state.connectors,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.explorerWallets=a.ApiController.state.explorerWallets,this.connections=a.ConnectionController.state.connections,this.connectorImages=a.AssetController.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),a.ConnectionController.subscribeKey("connections",e=>this.connections=e),a.AssetController.subscribeKey("connectorImages",e=>this.connectorImages=e),a.ApiController.subscribeKey("recommended",e=>this.recommended=e),a.ApiController.subscribeKey("featured",e=>this.featured=e),a.ApiController.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=null!==e&&void 0!==e&&e.length?e:a.ApiController.state.explorerWallets}),a.ApiController.subscribeKey("explorerWallets",e=>{var t;null!==(t=this.explorerWallets)&&void 0!==t&&t.length||(this.explorerWallets=e)})),a.CoreHelperUtil.isTelegram()&&a.CoreHelperUtil.isIos()&&(this.loadingTelegram=!a.ConnectionController.state.wcUri,this.unsubscribe.push(a.ConnectionController.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}processConnectorsByType(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=u.ConnectorUtil.sortConnectorsByExplorerWallet([...e]);return t?r.filter(u.ConnectorUtil.showConnector):r}connectorListTemplate(){const e=u.ConnectorUtil.getConnectorsByType(this.connectors,this.recommended,this.featured),t=this.processConnectorsByType(e.announced.filter(e=>"walletConnect"!==e.id)),r=this.processConnectorsByType(e.injected),i=this.processConnectorsByType(e.multiChain.filter(e=>"WalletConnect"!==e.name),!1),o=e.custom,n=e.recent,l=this.processConnectorsByType(e.external.filter(e=>e.id!==s.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK&&e.id!==s.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT)),c=e.recommended,d=e.featured,p=u.ConnectorUtil.getConnectorTypeOrder({custom:o,recent:n,announced:t,injected:r,multiChain:i,recommended:c,featured:d,external:l}),h=this.connectors.find(e=>"walletConnect"===e.id),m=a.CoreHelperUtil.isMobile(),f=[];for(const s of p)switch(s){case"walletConnect":!m&&h&&f.push({kind:"connector",subtype:"walletConnect",connector:h});break;case"recent":u.ConnectorUtil.getFilteredRecentWallets().forEach(e=>f.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":i.forEach(e=>f.push({kind:"connector",subtype:"multiChain",connector:e})),t.forEach(e=>f.push({kind:"connector",subtype:"announced",connector:e})),r.forEach(e=>f.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":d.forEach(e=>f.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":u.ConnectorUtil.getFilteredCustomWallets(null!==o&&void 0!==o?o:[]).forEach(e=>f.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":l.forEach(e=>f.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":u.ConnectorUtil.getCappedRecommendedWallets(c).forEach(e=>f.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn("Unknown connector type: "+s)}return f.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?(null===(t=e.connector.connectors)||void 0===t?void 0:t.map(e=>e.chain))||[]:[e.connector.chain];var t}renderConnector(e,t){var r,i,n,c,u;const p=e.connector,h=a.AssetUtil.getConnectorImage(p)||this.connectorImages[null!==(r=null===p||void 0===p?void 0:p.imageId)&&void 0!==r?r:""],m=(null!==(i=this.connections.get(p.chain))&&void 0!==i?i:[]).some(e=>d.HelpersUtil.isLowerCaseMatch(e.connectorId,p.id));let f=void 0,g=void 0;"walletConnect"===e.subtype?(f="qr code",g="accent"):"injected"===e.subtype||"announced"===e.subtype?(f=m?"connected":"installed",g=m?"info":"success"):(f=void 0,g=void 0);const w=a.ConnectionController.hasAnyConnection(s.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),v=("walletConnect"===e.subtype||"external"===e.subtype)&&w;return o.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,l.ifDefined)(h)}
        .installed=${!0}
        name=${null!==(n=p.name)&&void 0!==n?n:"Unknown"}
        .tagVariant=${g}
        tagLabel=${(0,l.ifDefined)(f)}
        data-testid=${"wallet-selector-"+p.id.toLowerCase()}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        ?disabled=${v}
        rdnsId=${(0,l.ifDefined)((null===(c=p.explorerWallet)||void 0===c?void 0:c.rdns)||void 0)}
        walletRank=${(0,l.ifDefined)(null===(u=p.explorerWallet)||void 0===u?void 0:u.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){var t;const r=null===(t=a.RouterController.state.data)||void 0===t?void 0:t.redirectView;return"walletConnect"===e.subtype?(a.ConnectorController.setActiveConnector(e.connector),void(a.CoreHelperUtil.isMobile()?a.RouterController.push("AllWallets"):a.RouterController.push("ConnectingWalletConnect",{redirectView:r}))):"multiChain"===e.subtype?(a.ConnectorController.setActiveConnector(e.connector),void a.RouterController.push("ConnectingMultiChain",{redirectView:r})):"injected"===e.subtype?(a.ConnectorController.setActiveConnector(e.connector),void a.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:r,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(a.CoreHelperUtil.isMobile()?a.RouterController.push("AllWallets"):a.RouterController.push("ConnectingWalletConnect",{redirectView:r})):void a.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:r,wallet:e.connector.explorerWallet}):void a.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:r})}renderWallet(e,t){var r;const i=e.wallet,n=a.AssetUtil.getWalletImage(i),c=a.ConnectionController.hasAnyConnection(s.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),d=this.loadingTelegram,u="recent"===e.subtype?"recent":void 0,p="recent"===e.subtype?"info":void 0;return o.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,l.ifDefined)(n)}
        name=${null!==(r=i.name)&&void 0!==r?r:"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${"wallet-selector-"+i.id}
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        ?loading=${d}
        ?disabled=${c}
        rdnsId=${(0,l.ifDefined)(i.rdns||void 0)}
        walletRank=${(0,l.ifDefined)(i.order)}
        tagLabel=${(0,l.ifDefined)(u)}
        .tagVariant=${p}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){var t;const r=null===(t=a.RouterController.state.data)||void 0===t?void 0:t.redirectView;if("featured"===e.subtype)return void a.ConnectorController.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void a.ConnectorController.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void a.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:r})}if(this.loadingTelegram)return;const i=a.ConnectorController.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?a.RouterController.push("ConnectingExternal",{connector:i,redirectView:r}):a.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:r})}};t.W3mConnectorList=m,m.styles=p.default,h([(0,n.property)({type:Number})],m.prototype,"tabIdx",void 0),h([(0,n.state)()],m.prototype,"connectors",void 0),h([(0,n.state)()],m.prototype,"recommended",void 0),h([(0,n.state)()],m.prototype,"featured",void 0),h([(0,n.state)()],m.prototype,"explorerWallets",void 0),h([(0,n.state)()],m.prototype,"connections",void 0),h([(0,n.state)()],m.prototype,"connectorImages",void 0),h([(0,n.state)()],m.prototype,"loadingTelegram",void 0),t.W3mConnectorList=m=h([(0,c.customElement)("w3m-connector-list")],m)},1992:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  :host {
    margin-top: ${e=>{let{spacing:t}=e;return t[1]}};
  }
  wui-separator {
    margin: ${e=>{let{spacing:t}=e;return t[3]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1)
      ${e=>{let{spacing:t}=e;return t[2]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1);
    width: calc(100% + ${e=>{let{spacing:t}=e;return t[3]}} * 2);
  }
`;t.default=i},1993:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mConnectingWcView=void 0;var o=r(860),n=r(864),l=r(871),s=r(873),a=r(868),c=r(1150);r(1994),r(2e3),r(2013),r(2014),r(2015),r(2025),r(2026);var d=i(r(2027)),u=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let p=class extends o.LitElement{constructor(){var e;super(),this.wallet=null===(e=s.RouterController.state.data)||void 0===e?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.OptionsController.state.siwx),this.remoteFeatures=s.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return s.OptionsController.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.html`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding&&this.displayBranding?o.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!s.OptionsController.state.manualWCControl||e))try{var t;const{wcPairingExpiry:i,status:o}=s.ConnectionController.state,{redirectView:n}=null!==(t=s.RouterController.state.data)&&void 0!==t?t:{};if(e||s.OptionsController.state.enableEmbedded||s.CoreHelperUtil.isPairingExpired(i)||"connecting"===o){var r;const e=s.ConnectionController.getConnections(s.ChainController.state.activeChain),t=null===(r=this.remoteFeatures)||void 0===r?void 0:r.multiWallet,i=e.length>0;await s.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(s.RouterController.replace("ProfileWallets"),s.SnackController.showSuccess("New Wallet Added")):n?s.RouterController.replace(n):s.ModalController.close())}}catch(a){var i,o;if(a instanceof Error&&a.message.includes("An error occurred when attempting to switch chain")&&!s.OptionsController.state.enableNetworkSwitch)if(s.ChainController.state.activeChain)return s.ChainController.setActiveCaipNetwork(c.CaipNetworksUtil.getUnsupportedNetwork(`${s.ChainController.state.activeChain}:${null===(o=s.ChainController.state.activeCaipNetwork)||void 0===o?void 0:o.id}`)),void s.ChainController.showUnsupportedChainUI();var n;if(a instanceof s.AppKitError&&a.originalName===l.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)s.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:a.message}});else s.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(n=null===a||void 0===a?void 0:a.message)&&void 0!==n?n:"Unknown"}});s.ConnectionController.setWcError(!0),s.SnackController.showError(null!==(i=a.message)&&void 0!==i?i:"Connection error"),s.ConnectionController.resetWcConnection(),s.RouterController.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:o}=this.wallet,n=null===i||void 0===i?void 0:i.map(e=>{let{injected_id:t}=e;return t}).filter(Boolean),l=[...o?[o]:null!==n&&void 0!==n?n:[]],a=!s.OptionsController.state.isUniversalProvider&&l.length,c=e,d=r,u=s.ConnectionController.checkInstalled(l),p=a&&u,h=t&&!s.CoreHelperUtil.isMobile();p&&!s.ChainController.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(s.CoreHelperUtil.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),h&&this.platforms.push("desktop"),p||!a||s.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.html`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return o.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};t.W3mConnectingWcView=p,p.styles=d.default,u([(0,n.state)()],p.prototype,"platform",void 0),u([(0,n.state)()],p.prototype,"platforms",void 0),u([(0,n.state)()],p.prototype,"isSiwxEnabled",void 0),u([(0,n.state)()],p.prototype,"remoteFeatures",void 0),u([(0,n.property)({type:Boolean})],p.prototype,"displayBranding",void 0),u([(0,n.property)({type:Boolean})],p.prototype,"basic",void 0),t.W3mConnectingWcView=p=u([(0,a.customElement)("w3m-connecting-wc-view")],p)},1994:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingHeader=void 0;var i=r(860),o=r(864),n=r(868);r(905),r(1995);var l=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let s=class extends i.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return i.html`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(e=>{let{platform:t}=e;return t}),e}onTabChange(e){const t=this.platformTabs[e];var r;t&&(null===(r=this.onSelectPlatfrom)||void 0===r||r.call(this,t))}};t.W3mConnectingHeader=s,l([(0,o.property)({type:Array})],s.prototype,"platforms",void 0),l([(0,o.property)()],s.prototype,"onSelectPlatfrom",void 0),t.W3mConnectingHeader=s=l([(0,n.customElement)("w3m-connecting-header")],s)},1995:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1996);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},1996:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiTabs=void 0;var o=r(860),n=r(864),l=r(881),s=r(879);r(1997);var a=i(r(1999)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends o.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{var r;const i=t===this.activeTab;return o.html`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${null===(r=e.label)||void 0===r?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};t.WuiTabs=d,d.styles=[l.resetStyles,l.elementStyles,a.default],c([(0,n.property)({type:Array})],d.prototype,"tabs",void 0),c([(0,n.property)()],d.prototype,"onTabChange",void 0),c([(0,n.property)()],d.prototype,"size",void 0),c([(0,n.state)()],d.prototype,"activeTab",void 0),t.WuiTabs=d=c([(0,s.customElement)("wui-tabs")],d)},1997:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiTab=void 0;var o=r(860),n=r(864);r(913),r(926);var l=r(881),s=r(879),a=i(r(1998)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};const d={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},u={lg:"md",md:"sm",sm:"sm"};let p=class extends o.LitElement{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return o.html`
      <button data-active=${this.active}>
        ${this.icon?o.html`<wui-icon size=${u[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${d[this.size]}> ${this.label} </wui-text>
      </button>
    `}};t.WuiTab=p,p.styles=[l.resetStyles,l.elementStyles,a.default],c([(0,n.property)()],p.prototype,"icon",void 0),c([(0,n.property)()],p.prototype,"size",void 0),c([(0,n.property)()],p.prototype,"label",void 0),c([(0,n.property)({type:Boolean})],p.prototype,"active",void 0),t.WuiTab=p=c([(0,s.customElement)("wui-tab-item")],p)},1998:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundTertiary}};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    }
  }
`;t.default=i},1999:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
    padding: ${e=>{let{spacing:t}=e;return t["01"]}};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;t.default=i},2e3:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcBrowser=void 0;var i=r(871),o=r(873),n=r(868),l=r(1080),s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends l.W3mConnectingWidget{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),o.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:o.RouterController.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=o.ConnectorController.state,t=e.find(e=>{var t,r,i;return"ANNOUNCED"===e.type&&(null===(t=e.info)||void 0===t?void 0:t.rdns)===(null===(r=this.wallet)||void 0===r?void 0:r.rdns)||"INJECTED"===e.type||e.name===(null===(i=this.wallet)||void 0===i?void 0:i.name)});if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await o.ConnectionController.connectExternal(t,t.chain),o.ModalController.close()}catch(t){var e;if(t instanceof o.AppKitError&&t.originalName===i.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)o.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}});else o.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null===t||void 0===t?void 0:t.message)&&void 0!==e?e:"Unknown"}});this.error=!0}}};t.W3mConnectingWcBrowser=a,t.W3mConnectingWcBrowser=a=s([(0,n.customElement)("w3m-connecting-wc-browser")],a)},2005:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2006);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2006:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiLoadingThumbnail=void 0;var o=r(860),n=r(864),l=r(881),s=r(879),a=i(r(2007)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends o.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,i=245+t,n=360+1.75*t;return o.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};t.WuiLoadingThumbnail=d,d.styles=[l.resetStyles,a.default],c([(0,n.property)({type:Number})],d.prototype,"radius",void 0),t.WuiLoadingThumbnail=d=c([(0,s.customElement)("wui-loading-thumbnail")],d)},2007:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;t.default=i},2008:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2009);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2009:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiCtaButton=void 0;var o=r(860),n=r(864);r(913),r(926),r(1078);var l=r(881),s=r(879);r(1504);var a=i(r(2010)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends o.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};t.WuiCtaButton=d,d.styles=[l.resetStyles,l.elementStyles,a.default],c([(0,n.property)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,n.property)()],d.prototype,"label",void 0),c([(0,n.property)()],d.prototype,"buttonLabel",void 0),t.WuiCtaButton=d=c([(0,s.customElement)("wui-cta-button")],d)},2010:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding-left: ${e=>{let{spacing:t}=e;return t[3]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[3]}};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e=>{let{spacing:t}=e;return t[6]}};
  }

  wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;t.default=i},2011:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  :host {
    display: block;
    padding: 0 ${e=>{let{spacing:t}=e;return t[5]}} ${e=>{let{spacing:t}=e;return t[5]}};
  }
`;t.default=i},2012:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    bottom: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${e=>{let{durations:t}=e;return t.lg}};
    transition-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${e=>{let{spacing:t}=e;return t[4]}};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;t.default=i},2013:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcDesktop=void 0;var i=r(873),o=r(868),n=r(1080),l=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let s=class extends n.W3mConnectingWidget{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),i.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:i.RouterController.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:o}=i.CoreHelperUtil.formatNativeUrl(e,this.uri);i.ConnectionController.setWcLinking({name:t,href:o}),i.ConnectionController.setRecentWallet(this.wallet),i.CoreHelperUtil.openHref(r,"_blank")}catch{this.error=!0}}};t.W3mConnectingWcDesktop=s,t.W3mConnectingWcDesktop=s=l([(0,o.customElement)("w3m-connecting-wc-desktop")],s)},2014:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcMobile=void 0;var i=r(864),o=r(873),n=r(868),l=r(1080),s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends l.W3mConnectingWidget{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=o.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var e;if(null!==(e=this.wallet)&&void 0!==e&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:r}=this.wallet,{redirect:i,redirectUniversalLink:n,href:l}=o.CoreHelperUtil.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=i,this.redirectUniversalLink=n,this.target=o.CoreHelperUtil.isIframe()?"_top":"_self",o.ConnectionController.setWcLinking({name:r,href:l}),o.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?o.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):o.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(t){o.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=o.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(o.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),o.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:o.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;(this.isLoading=!this.uri,!this.ready&&this.uri)&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onTryAgain(){var e;o.ConnectionController.setWcError(!1),null===(e=this.onConnect)||void 0===e||e.call(this)}};t.W3mConnectingWcMobile=a,s([(0,i.state)()],a.prototype,"redirectDeeplink",void 0),s([(0,i.state)()],a.prototype,"redirectUniversalLink",void 0),s([(0,i.state)()],a.prototype,"target",void 0),s([(0,i.state)()],a.prototype,"preferUniversalLinks",void 0),s([(0,i.state)()],a.prototype,"isLoading",void 0),t.W3mConnectingWcMobile=a=s([(0,n.customElement)("w3m-connecting-wc-mobile")],a)},2015:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mConnectingWcQrcode=void 0;var o=r(860),n=r(864),l=r(896),s=r(873),a=r(868);r(905),r(1039),r(1272),r(2016),r(1505),r(955),r(1507);var c=r(1080);r(1274);var d=i(r(2024)),u=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let p=class extends c.W3mConnectingWidget{constructor(){super(),this.basic=!1}firstUpdated(){var e,t,r,i;this.basic||s.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(e=null===(t=this.wallet)||void 0===t?void 0:t.name)&&void 0!==e?e:"WalletConnect",platform:"qrcode",displayIndex:null===(r=this.wallet)||void 0===r?void 0:r.display_index,walletRank:null===(i=this.wallet)||void 0===i?void 0:i.order,view:s.RouterController.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.unsubscribe)||void 0===e||e.forEach(e=>e())}render(){return this.onRenderProxy(),o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){var e;if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;s.ConnectionController.setWcLinking(void 0),s.ConnectionController.setRecentWallet(this.wallet);const r=null!==(e=s.ThemeController.state.themeVariables["--apkt-qr-color"])&&void 0!==e?e:s.ThemeController.state.themeVariables["--w3m-qr-color"];return o.html` <wui-qr-code
      theme=${s.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,l.ifDefined)(s.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,l.ifDefined)(r)}
      alt=${(0,l.ifDefined)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.html`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};t.W3mConnectingWcQrcode=p,p.styles=d.default,u([(0,n.property)({type:Boolean})],p.prototype,"basic",void 0),t.W3mConnectingWcQrcode=p=u([(0,a.customElement)("w3m-connecting-wc-qrcode")],p)},2016:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2017);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2017:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiQrCode=void 0;var o=r(860),n=r(864);r(913),r(1270),r(1078);var l=r(2018),s=r(881),a=r(879),c=i(r(2019)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),o.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return o.svg`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${l.QrCodeUtil.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){var e;return this.imageSrc?o.html`<wui-image src=${this.imageSrc} alt=${null!==(e=this.alt)&&void 0!==e?e:"logo"}></wui-image>`:this.farcaster?o.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};t.WuiQrCode=u,u.styles=[s.resetStyles,c.default],d([(0,n.property)()],u.prototype,"uri",void 0),d([(0,n.property)({type:Number})],u.prototype,"size",void 0),d([(0,n.property)()],u.prototype,"theme",void 0),d([(0,n.property)()],u.prototype,"imageSrc",void 0),d([(0,n.property)()],u.prototype,"alt",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"arenaClear",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"farcaster",void 0),t.WuiQrCode=u=d([(0,a.customElement)("wui-qr-code")],u)},2018:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.QrCodeUtil=void 0;var o=i(r(389)),n=r(860);function l(e,t,r){if(e===t)return!1;return(e-t<0?t-e:e-t)<=r+.1}const s={generate(e){let{uri:t,size:r,logoSize:i,padding:s=8,dotColor:a="var(--apkt-colors-black)"}=e;const c=[],d=function(e,t){const r=Array.prototype.slice.call(o.default.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(t,"Q"),u=(r-2*s)/d.length,p=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];p.forEach(e=>{let{x:t,y:r}=e;const i=(d.length-7)*u*t+s,o=(d.length-7)*u*r+s;for(let l=0;l<p.length;l+=1){const e=u*(7-2*l);c.push(n.svg`
            <rect
              fill=${2===l?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===l?e-10:e}
              rx= ${0===l?.45*(e-10):.45*e}
              ry= ${0===l?.45*(e-10):.45*e}
              stroke=${a}
              stroke-width=${0===l?10:0}
              height=${0===l?e-10:e}
              x= ${0===l?o+u*l+5:o+u*l}
              y= ${0===l?i+u*l+5:i+u*l}
            />
          `)}});const h=Math.floor((i+25)/u),m=d.length/2-h/2,f=d.length/2+h/2-1,g=[];d.forEach((e,t)=>{e.forEach((e,r)=>{if(d[t][r]&&!(t<7&&r<7||t>d.length-8&&r<7||t<7&&r>d.length-8)&&!(t>m&&t<f&&r>m&&r<f)){const e=t*u+u/2+s,i=r*u+u/2+s;g.push([e,i])}})});const w={};return g.forEach(e=>{let[t,r]=e;var i;w[t]?null===(i=w[t])||void 0===i||i.push(r):w[t]=[r]}),Object.entries(w).map(e=>{let[t,r]=e;const i=r.filter(e=>r.every(t=>!l(e,t,u)));return[Number(t),i]}).forEach(e=>{let[t,r]=e;r.forEach(e=>{c.push(n.svg`<circle cx=${t} cy=${e} fill=${a} r=${u/2.5} />`)})}),Object.entries(w).filter(e=>{let[t,r]=e;return r.length>1}).map(e=>{let[t,r]=e;const i=r.filter(e=>r.some(t=>l(e,t,u)));return[Number(t),i]}).map(e=>{let[t,r]=e;r.sort((e,t)=>e<t?-1:1);const i=[];for(const o of r){const e=i.find(e=>e.some(e=>l(o,e,u)));e?e.push(o):i.push([o])}return[t,i.map(e=>[e[0],e[e.length-1]])]}).forEach(e=>{let[t,r]=e;r.forEach(e=>{let[r,i]=e;c.push(n.svg`
              <line
                x1=${t}
                x2=${t}
                y1=${r}
                y2=${i}
                stroke=${a}
                stroke-width=${u/1.25}
                stroke-linecap="round"
              />
            `)})}),c}};t.QrCodeUtil=s},2019:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  :host {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    box-shadow: inset 0 0 0 4px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;t.default=i},2020:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}} 0%,
      ${e=>{let{tokens:t}=e;return t.theme.foregroundTertiary}} 50%,
      ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  :host([data-rounded='true']) {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[16]}};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;t.default=i},2024:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;t.default=i},2025:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcUnsupported=void 0;var i=r(860),o=r(896),n=r(873),l=r(868);r(905),r(955),r(1273),r(1274);var s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends i.LitElement{constructor(){var e,t,r;if(super(),this.wallet=null===(e=n.RouterController.state.data)||void 0===e?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(t=this.wallet)||void 0===t?void 0:t.display_index,walletRank:null===(r=this.wallet)||void 0===r?void 0:r.order,view:n.RouterController.state.view}})}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,o.ifDefined)(n.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};t.W3mConnectingWcUnsupported=a,t.W3mConnectingWcUnsupported=a=s([(0,l.customElement)("w3m-connecting-wc-unsupported")],a)},2026:function(e,t,r){"use strict";t.__esModule=!0,t.W3mConnectingWcWeb=void 0;var i=r(864),o=r(873),n=r(868),l=r(1080),s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends l.W3mConnectingWidget{constructor(){var e,t;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=o.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(o.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),o.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:null===(t=this.wallet)||void 0===t?void 0:t.order,view:o.RouterController.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=o.CoreHelperUtil.formatUniversalUrl(e,this.uri);o.ConnectionController.setWcLinking({name:t,href:i}),o.ConnectionController.setRecentWallet(this.wallet),o.CoreHelperUtil.openHref(r,"_blank")}catch{this.error=!0}}};t.W3mConnectingWcWeb=a,s([(0,i.state)()],a.prototype,"isLoading",void 0),t.W3mConnectingWcWeb=a=s([(0,n.customElement)("w3m-connecting-wc-web")],a)},2027:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;t.default=i},2028:function(e,t,r){"use strict";t.__esModule=!0,t.W3mAllWalletsView=void 0;var i=r(860),o=r(864),n=r(873),l=r(868);r(2029),r(905),r(1271),r(2037),r(2042),r(2051);var s=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let a=class extends i.LitElement{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.CoreHelperUtil.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return i.html`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?i.html`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:i.html`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",n.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.CoreHelperUtil.isMobile()?i.html`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){n.RouterController.push("ConnectingWalletConnect")}};t.W3mAllWalletsView=a,s([(0,o.state)()],a.prototype,"search",void 0),s([(0,o.state)()],a.prototype,"badge",void 0),t.W3mAllWalletsView=a=s([(0,l.customElement)("w3m-all-wallets-view")],a)},2029:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2030);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2030:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiCertifiedSwitch=void 0;var o=r(860),n=r(864),l=r(881),s=r(879);r(2031);var a=i(r(2036)),c=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let d=class extends o.LitElement{constructor(){super(...arguments),this.checked=!1}render(){return o.html`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};t.WuiCertifiedSwitch=d,d.styles=[l.resetStyles,l.elementStyles,a.default],c([(0,n.property)({type:Boolean})],d.prototype,"checked",void 0),t.WuiCertifiedSwitch=d=c([(0,s.customElement)("wui-certified-switch")],d)},2031:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiToggle=void 0;var o=r(860),n=r(864),l=r(1275),s=r(881),a=r(879),c=i(r(2035)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,l.createRef)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return o.html`
      <label data-size=${this.size}>
        <input
          ${(0,l.ref)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.checked,bubbles:!0,composed:!0}))}};t.WuiToggle=u,u.styles=[s.resetStyles,s.elementStyles,c.default],d([(0,n.property)({type:Boolean})],u.prototype,"checked",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"disabled",void 0),d([(0,n.property)()],u.prototype,"size",void 0),t.WuiToggle=u=d([(0,a.customElement)("wui-toggle")],u)},2032:function(e,t,r){"use strict";t.__esModule=!0,t.ref=t.createRef=void 0;var i=r(1016),o=r(2033),n=r(1268);t.createRef=()=>new l;class l{}const s=new WeakMap,a=(0,n.directive)(class extends o.AsyncDirective{render(e){return i.nothing}update(e,t){var r;let[o]=t;const n=o!==this.G;return n&&void 0!==this.G&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=o,this.ht=null===(r=e.options)||void 0===r?void 0:r.host,this.rt(this.ct=e.element)),i.nothing}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){var t;const r=null!==(t=this.ht)&&void 0!==t?t:globalThis;let i=s.get(r);void 0===i&&(i=new WeakMap,s.set(r,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t,r;return"function"==typeof this.G?null===(e=s.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(r=this.G)||void 0===r?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});t.ref=a},2033:function(e,t,r){"use strict";t.__esModule=!0,t.directive=t.AsyncDirective=void 0;var i=r(2034),o=r(1268);t.Directive=o.Directive,t.PartType=o.PartType,t.directive=o.directive;const n=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const o of r){var i;null!==(i=o._$AO)&&void 0!==i&&i.call(o,t,!1),n(o,t)}return!0},l=e=>{let t,r;do{var i;if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null===(i=r)||void 0===i?void 0:i.size))},s=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),d(t)}};function a(e){void 0!==this._$AN?(l(this),this._$AM=e,s(this)):this._$AM=e}function c(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)n(i[s],!1),l(i[s]);else null!=i&&(n(i,!1),l(i));else n(this,e)}const d=e=>{var t,r;e.type==o.PartType.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=c),null!==(r=e._$AQ)&&void 0!==r||(e._$AQ=a))};class u extends o.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),s(this),this.isConnected=e._$AU}_$AO(e){var t,r;let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),i&&(n(this,e),l(this))}setValue(e){if((0,i.isSingleExpression)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}t.AsyncDirective=u},2034:function(e,t,r){"use strict";t.__esModule=!0,t.setCommittedValue=t.setChildPartValue=t.removePart=t.isTemplateResult=t.isSingleExpression=t.isPrimitive=t.isDirectiveResult=t.isCompiledTemplateResult=t.insertPart=t.getDirectiveClass=t.getCommittedValue=t.clearPart=t.TemplateResultType=void 0;var i=r(1016);const{I:o}=i._$LH,n=()=>document.createComment(""),l={};t.clearPart=e=>{e._$AR()},t.removePart=e=>{e._$AR(),e._$AA.remove()},t.getCommittedValue=e=>e._$AH,t.setCommittedValue=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return e._$AH=t},t.setChildPartValue=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return e._$AI(t,r),e},t.insertPart=(e,t,r)=>{const i=e._$AA.parentNode,l=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=i.insertBefore(n(),l),s=i.insertBefore(n(),l);r=new o(t,s,e,e.options)}else{const t=r._$AB.nextSibling,o=r._$AM,n=o!==e;if(n){var s,a;let t;null!==(s=(a=r)._$AQ)&&void 0!==s&&s.call(a,e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==o._$AU&&r._$AP(t)}if(t!==l||n){let e=r._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,l),e=t}}}return r},t.isSingleExpression=e=>void 0===e.strings,t.getDirectiveClass=e=>null===e||void 0===e?void 0:e._$litDirective$,t.isDirectiveResult=e=>void 0!==(null===e||void 0===e?void 0:e._$litDirective$),t.isCompiledTemplateResult=e=>{var t;return null!=(null===e||void 0===e||null===(t=e._$litType$)||void 0===t?void 0:t.h)},t.isTemplateResult=(e,t)=>void 0===t?void 0!==(null===e||void 0===e?void 0:e._$litType$):(null===e||void 0===e?void 0:e._$litType$)===t,t.TemplateResultType={HTML:1,SVG:2,MATHML:3},t.isPrimitive=e=>null===e||"object"!=typeof e&&"function"!=typeof e},2035:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>{let{colors:t}=e;return t.neutrals300}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.accent080}};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:checked:disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  input:checked:disabled + span::before {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
  }
`;t.default=i},2036:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    box-shadow: inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;t.default=i},2037:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2038);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2038:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiSearchBar=void 0;var o=r(860),n=r(864),l=r(1275),s=r(881),a=r(879);r(2039);var c=i(r(2041)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.inputComponentRef=(0,l.createRef)(),this.inputValue=""}render(){return o.html`
      <wui-input-text
        ${(0,l.ref)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?o.html`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=null===e||void 0===e?void 0:e.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};t.WuiSearchBar=u,u.styles=[s.resetStyles,c.default],d([(0,n.property)()],u.prototype,"inputValue",void 0),t.WuiSearchBar=u=d([(0,a.customElement)("wui-search-bar")],u)},2039:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiInputText=void 0;var o=r(860),n=r(864),l=r(896),s=r(1275);r(913),r(926);var a=r(881),c=r(879),d=i(r(2040)),u=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let p=class extends o.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,s.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return o.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,s.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,l.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?o.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var e;return this.onSubmit?o.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${null===(e=this.onSubmit)||void 0===e?void 0:e.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?o.html`<wui-icon name="spinner" size="md"></wui-icon>`:o.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?o.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?o.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.value,bubbles:!0,composed:!0}))}};t.WuiInputText=p,p.styles=[a.resetStyles,a.elementStyles,d.default],u([(0,n.property)()],p.prototype,"icon",void 0),u([(0,n.property)({type:Boolean})],p.prototype,"disabled",void 0),u([(0,n.property)({type:Boolean})],p.prototype,"loading",void 0),u([(0,n.property)()],p.prototype,"placeholder",void 0),u([(0,n.property)()],p.prototype,"type",void 0),u([(0,n.property)()],p.prototype,"value",void 0),u([(0,n.property)()],p.prototype,"errorText",void 0),u([(0,n.property)()],p.prototype,"warningText",void 0),u([(0,n.property)()],p.prototype,"onSubmit",void 0),u([(0,n.property)()],p.prototype,"size",void 0),u([(0,n.property)({attribute:!1})],p.prototype,"onKeyDown",void 0),t.WuiInputText=p=u([(0,c.customElement)("wui-input-text")],p)},2040:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    color: inherit;
    background: transparent;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[10]}};
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    line-height: ${e=>{let{typography:t}=e;return t["lg-regular"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["lg-regular"].letterSpacing}};
    font-weight: ${e=>{let{fontWeight:t}=e;return t.regular}};
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
  }

  input[data-size='lg'] {
    padding: ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[10]}};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  input::placeholder {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  input:focus:enabled {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    -webkit-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    -moz-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${e=>{let{spacing:t}=e;return t[12]}};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;t.default=i},2041:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
    cursor: pointer;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }
`;t.default=i},2042:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mAllWalletsList=void 0;var o=r(860),n=r(864),l=r(896),s=r(873),a=r(868);r(2043),r(1508);var c=r(1152);r(1509);var d=i(r(2050)),u=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let p=class extends o.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!s.ApiController.state.wallets.length,this.wallets=s.ApiController.state.wallets,this.recommended=s.ApiController.state.recommended,this.featured=s.ApiController.state.featured,this.filteredWallets=s.ApiController.state.filteredWallets,this.mobileFullScreen=s.OptionsController.state.enableMobileFullScreen,this.unsubscribe.push(s.ApiController.subscribeKey("wallets",e=>this.wallets=e),s.ApiController.subscribeKey("recommended",e=>this.recommended=e),s.ApiController.subscribeKey("featured",e=>this.featured=e),s.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(e=>e()),null===(e=this.paginationObserver)||void 0===e||e.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-grid");t&&(await s.ApiController.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.html`
        <wui-card-select-loader type="wallet" id=${(0,l.ifDefined)(t)}></wui-card-select-loader>
      `)}getWallets(){var e;const t=[...this.featured,...this.recommended];(null===(e=this.filteredWallets)||void 0===e?void 0:e.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const r=s.CoreHelperUtil.uniqueBy(t,"id"),i=c.WalletUtil.markWalletsAsInstalled(r),o=c.WalletUtil.filterWalletsByWcSupport(i);return c.WalletUtil.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map((e,t)=>o.html`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:i,mobileFilteredOutWalletsLength:o}=s.ApiController.state,n=window.innerWidth<352?3:4,l=e.length+t.length;let a=Math.ceil(l/n)*n-l+n;return a-=e.length?r.length%n:0,0===i&&r.length>0?null:0===i||[...r,...e,...t].length<i-(null!==o&&void 0!==o?o:0)?this.shimmerTemplate(a,"local-paginator"):null}createPaginationObserver(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#local-paginator");t&&(this.paginationObserver=new IntersectionObserver(e=>{let[t]=e;if(null!==t&&void 0!==t&&t.isIntersecting&&!this.loading){const{page:e,count:t,wallets:r}=s.ApiController.state;r.length<t&&s.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(t))}onConnectWallet(e){s.ConnectorController.selectWalletConnector(e)}};t.W3mAllWalletsList=p,p.styles=d.default,u([(0,n.state)()],p.prototype,"loading",void 0),u([(0,n.state)()],p.prototype,"wallets",void 0),u([(0,n.state)()],p.prototype,"recommended",void 0),u([(0,n.state)()],p.prototype,"featured",void 0),u([(0,n.state)()],p.prototype,"filteredWallets",void 0),u([(0,n.state)()],p.prototype,"badge",void 0),u([(0,n.state)()],p.prototype,"mobileFullScreen",void 0),t.W3mAllWalletsList=p=u([(0,a.customElement)("w3m-all-wallets-list")],p)},2043:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2044);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2044:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiCardSelectLoader=void 0;var o=r(860),n=r(864),l=r(2045);r(1506);var s=r(881),a=r(879),c=i(r(2046)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return o.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.html` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${l.networkSvgMd}`:o.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};t.WuiCardSelectLoader=u,u.styles=[s.resetStyles,s.elementStyles,c.default],d([(0,n.property)()],u.prototype,"type",void 0),t.WuiCardSelectLoader=u=d([(0,a.customElement)("wui-card-select-loader")],u)},2045:function(e,t,r){"use strict";t.__esModule=!0,t.networkSvgMd=void 0;const i=r(860).svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;t.networkSvgMd=i},2046:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;t.default=i},2047:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiGrid=void 0;var o=r(860),n=r(864),l=r(881),s=r(1154),a=r(879),c=i(r(2048)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&s.UiHelperUtil.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&s.UiHelperUtil.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&s.UiHelperUtil.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&s.UiHelperUtil.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&s.UiHelperUtil.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&s.UiHelperUtil.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&s.UiHelperUtil.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&s.UiHelperUtil.getSpacingStyles(this.margin,3)};\n    `,o.html`<slot></slot>`}};t.WuiGrid=u,u.styles=[l.resetStyles,c.default],d([(0,n.property)()],u.prototype,"gridTemplateRows",void 0),d([(0,n.property)()],u.prototype,"gridTemplateColumns",void 0),d([(0,n.property)()],u.prototype,"justifyItems",void 0),d([(0,n.property)()],u.prototype,"alignItems",void 0),d([(0,n.property)()],u.prototype,"justifyContent",void 0),d([(0,n.property)()],u.prototype,"alignContent",void 0),d([(0,n.property)()],u.prototype,"columnGap",void 0),d([(0,n.property)()],u.prototype,"rowGap",void 0),d([(0,n.property)()],u.prototype,"gap",void 0),d([(0,n.property)()],u.prototype,"padding",void 0),d([(0,n.property)()],u.prototype,"margin",void 0),t.WuiGrid=u=d([(0,a.customElement)("wui-grid")],u)},2048:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(860).css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;t.default=i},2049:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[0]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[4]}}, 20px);
    transition:
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  [data-selected='true'] {
    background-color: ${e=>{let{colors:t}=e;return t.accent020}};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${e=>{let{colors:t}=e;return t.accent010}};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;t.default=i},2050:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(868).css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-inout-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${e=>{let{spacing:t}=e;return t[4]}};
    padding-bottom: ${e=>{let{spacing:t}=e;return t[4]}};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;t.default=i},2051:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.W3mAllWalletsSearch=void 0;var o=r(860),n=r(864),l=r(873),s=r(868);r(905),r(1508),r(1271),r(2052),r(955);var a=r(1152);r(1509);var c=i(r(2053)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=l.OptionsController.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?o.html`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await l.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=l.ApiController.state,t=a.WalletUtil.markWalletsAsInstalled(e),r=a.WalletUtil.filterWalletsByWcSupport(t);return r.length?o.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map((e,t)=>o.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){l.ConnectorController.selectWalletConnector(e)}};t.W3mAllWalletsSearch=u,u.styles=c.default,d([(0,n.state)()],u.prototype,"loading",void 0),d([(0,n.state)()],u.prototype,"mobileFullScreen",void 0),d([(0,n.property)()],u.prototype,"query",void 0),d([(0,n.property)()],u.prototype,"badge",void 0),t.W3mAllWalletsSearch=u=d([(0,s.customElement)("w3m-all-wallets-search")],u)},2052:function(e,t,r){"use strict";t.__esModule=!0;var i=r(1157);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2053:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(860).css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;t.default=i},2054:function(e,t,r){"use strict";t.__esModule=!0,t.W3mDownloadsView=void 0;var i=r(860),o=r(873),n=r(868);r(905),r(2055),r(955);var l=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let s=class extends i.LitElement{constructor(){var e;super(...arguments),this.wallet=null===(e=o.RouterController.state.data)||void 0===e?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return i.html`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.chrome_store?i.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.app_store?i.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.play_store?i.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.homepage?i.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(o.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),o.CoreHelperUtil.openHref(e.href,"_blank"))}onChromeStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};t.W3mDownloadsView=s,t.W3mDownloadsView=s=l([(0,n.customElement)("w3m-downloads-view")],s)},2055:function(e,t,r){"use strict";t.__esModule=!0;var i=r(2056);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2056:function(e,t,r){"use strict";var i=r(7);t.__esModule=!0,t.WuiListItem=void 0;var o=r(860),n=r(864),l=r(896);r(1157),r(926);var s=r(881),a=r(879),c=i(r(2057)),d=function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",o.html`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,l.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?o.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,l.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:o.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?o.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};t.WuiListItem=u,u.styles=[s.resetStyles,s.elementStyles,c.default],d([(0,n.property)()],u.prototype,"imageSrc",void 0),d([(0,n.property)()],u.prototype,"icon",void 0),d([(0,n.property)()],u.prototype,"iconColor",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"loading",void 0),d([(0,n.property)()],u.prototype,"tabIdx",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"disabled",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"rightIcon",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"rounded",void 0),d([(0,n.property)({type:Boolean})],u.prototype,"fullSize",void 0),t.WuiListItem=u=d([(0,a.customElement)("wui-list-item")],u)},2057:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(877).css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    width: 100%;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      scale ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.default=i}}]);