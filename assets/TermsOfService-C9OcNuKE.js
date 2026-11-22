import{j as s,q as r}from"./index-_vjmckJg.js";const d=r.main`
  width: min(1120px, 100%);
  padding: 56px 24px 120px;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.text1};
  display: flex;
  flex-direction: column;
  gap: 32px;
`,p=r.section`
  border-radius: 32px;
  padding: 72px 56px;
  background: radial-gradient(circle at 15% 20%, rgba(102, 126, 234, 0.35), transparent 60%),
    radial-gradient(circle at 80% 10%, rgba(16, 185, 129, 0.25), transparent 55%),
    ${({theme:e})=>e.colors.bg1};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.15);
`,u=r.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text3};
  margin: 0 0 18px;
`,h=r.h1`
  margin: 0 0 24px;
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  line-height: 1.1;
`,g=r.p`
  max-width: 720px;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text2};
  margin: 0;
`,x=r.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,o=r.span`
  border-radius: 999px;
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  padding: 10px 20px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.7);
`,m=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`,a=r.section`
  border-radius: 24px;
  padding: 28px;
  background: ${({theme:e})=>e.colors.bg1};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
`,i=r.h2`
  margin: 0;
  font-size: 1.2rem;
`,t=r.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text2};
  line-height: 1.5;
`,f=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`,n=r.section`
  border-radius: 26px;
  padding: 32px;
  background: ${({theme:e})=>e.colors.bg2};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
`,c=r.h3`
  margin: 0 0 16px;
  font-size: 1.1rem;
`,l=r.ul`
  margin: 0;
  padding-left: 20px;
  color: ${({theme:e})=>e.colors.text2};
  line-height: 1.5;
`,b=r.section`
  border-radius: 28px;
  padding: 40px;
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  background: linear-gradient(120deg, rgba(102, 126, 234, 0.15), rgba(16, 185, 129, 0.15));
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=r.a`
  color: ${({theme:e})=>e.colors.primary1};
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,w=[{title:"Acceptance of Terms",body:"By connecting a wallet and interacting with CheeseSwap smart contracts you confirm that you have read, understood, and agree to these Terms. If you disagree with any clause you must stop using the interface immediately."},{title:"Non-Custodial Nature",body:"CheeseSwap never takes custody of user assets. All swaps, liquidity positions, and approvals are executed directly onchain. You are solely responsible for safeguarding wallets and private keys."},{title:"Eligibility & Restrictions",body:"You must be legally permitted to use decentralized exchanges in your jurisdiction, be at least 18 years old, and not be subject to sanctions or anti-money laundering restrictions."}],j=["Use CheeseSwap in compliance with applicable laws, including tax reporting requirements in your jurisdiction.","Only connect wallets you control and verify contract addresses before signing any transaction.","Maintain updated security practices (hardware wallets, multi-factor custody, revoking approvals when not in use).","Immediately discontinue usage if you suspect unauthorized access to your wallet or detect a smart contract issue."],v=["Smart contract vulnerabilities, front-end bugs, oracle failures, or third-party infrastructure outages may lead to partial or total loss of funds.","Digital assets are highly volatile. Past performance does not guarantee future results, and CheeseSwap does not provide investment advice.","Transactions on public blockchains are irreversible. Double-check destination addresses, token symbols, and slippage settings before signing.","Regulatory shifts could impact the availability of certain assets, pools, or geographies without prior notice."],k=["Gather transaction hashes, wallet addresses, timestamps, and screenshots describing the issue.","Reach out to privacy@cheeseswap.app or legal@cheeseswap.app with the evidence. Do not send seed phrases.","We coordinate with auditors or infrastructure partners when a smart contract or RPC issue is implicated.","If unresolved, disputes are governed by the laws of the British Virgin Islands and handled through binding arbitration in Tortola."];function T(){return s.jsxs(d,{children:[s.jsxs(p,{children:[s.jsx(u,{children:"Terms of Service"}),s.jsx(h,{children:"Transparent responsibilities for every swap."}),s.jsx(g,{children:"These Terms describe how you may access and use CheeseSwap, the obligations you accept when connecting a wallet, and the risks inherent to decentralized finance. Review them carefully before interacting with our liquidity markets."}),s.jsxs(x,{children:[s.jsx(o,{children:"Effective: 27 December 2025"}),s.jsx(o,{children:"Venue: British Virgin Islands"}),s.jsx(o,{children:"Scope: Web App • API • Smart Contracts"})]})]}),s.jsx(m,{children:w.map(e=>s.jsxs(a,{children:[s.jsx(i,{children:e.title}),s.jsx(t,{children:e.body})]},e.title))}),s.jsxs(f,{children:[s.jsxs(n,{children:[s.jsx(c,{children:"User Duties"}),s.jsx(l,{children:j.map(e=>s.jsx("li",{children:e},e))})]}),s.jsxs(n,{children:[s.jsx(c,{children:"Trading Risks"}),s.jsx(l,{children:v.map(e=>s.jsx("li",{children:e},e))})]})]}),s.jsxs(a,{children:[s.jsx(i,{children:"License & Platform Availability"}),s.jsx(t,{children:"CheeseSwap grants you a personal, revocable, non-exclusive, non-transferable license to use the interface subject to these Terms. We may suspend or geoblock access to protect users, comply with regulations, or service the platform. We reserve the right to update smart contracts and UI components without notice when critical fixes are required."})]}),s.jsxs(a,{children:[s.jsx(i,{children:"Indemnification"}),s.jsx(t,{children:"You agree to indemnify and hold harmless CheeseSwap contributors, affiliates, and service providers against claims, losses, or expenses arising from your violation of these Terms, misuse of the interface, or infringement of third-party rights."})]}),s.jsxs(n,{children:[s.jsx(c,{children:"Incident & Dispute Workflow"}),s.jsx(l,{children:k.map(e=>s.jsx("li",{children:e},e))})]}),s.jsxs(b,{children:[s.jsx(i,{children:"Contact"}),s.jsxs(t,{children:["Formal notices should be sent to Omega Protocol Ltd., Tortola, BVI, and emailed to ",s.jsx(y,{href:"mailto:legal@cheeseswap.app",children:"legal@cheeseswap.app"}),". Response commitments: 5 business days for critical security issues, 10 business days for general disputes."]}),s.jsx(t,{children:"Continued use of the interface after updates constitutes acceptance of the revised Terms. Monitor the changelog in our docs or subscribe to the governance feed for amendments."})]})]})}export{T as default};
