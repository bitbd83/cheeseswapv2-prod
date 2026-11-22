import{j as r,q as t}from"./index-NoqJLJW8.js";const p=t.main`
  width: min(1120px, 100%);
  padding: 56px 24px 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({theme:e})=>e.colors.text1};
`,h=t.section`
  position: relative;
  border-radius: 32px;
  background: radial-gradient(circle at 15% 20%, rgba(102, 126, 234, 0.2), transparent 55%),
    radial-gradient(circle at 75% 20%, rgba(16, 185, 129, 0.18), transparent 60%),
    ${({theme:e})=>e.colors.bg1};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.15);
  padding: 64px 56px;
  overflow: hidden;
`,x=t.div`
  position: absolute;
  inset: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
`,g=t.h1`
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin: 0 0 24px;
`,u=t.p`
  font-size: 1.1rem;
  max-width: 640px;
  color: ${({theme:e})=>e.colors.text2};
  margin: 0;
`,m=t.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,a=t.span`
  background: rgba(255, 255, 255, 0.7);
  color: ${({theme:e})=>e.colors.text1};
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 0.92rem;
  border: 1px solid ${({theme:e})=>e.colors.bg4};
`,y=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`,c=t.article`
  background: ${({theme:e})=>e.colors.bg1};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  border-radius: 24px;
  padding: 28px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 12px 50px rgba(15, 23, 42, 0.08);
`,o=t.h2`
  margin: 0;
  font-size: 1.2rem;
`,i=t.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text2};
  line-height: 1.5;
`,b=t.ul`
  margin: 0;
  padding-left: 20px;
  color: ${({theme:e})=>e.colors.text2};
  line-height: 1.5;
`,f=t.section`
  background: ${({theme:e})=>e.colors.bg2};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  border-radius: 28px;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
`,s=t.div`
  background: ${({theme:e})=>e.colors.bg1};
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  border-radius: 18px;
  padding: 22px;
`,n=t.p`
  margin: 0 0 8px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text3};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,l=t.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
`,w=t.section`
  border-radius: 24px;
  padding: 32px;
  border: 1px solid ${({theme:e})=>e.colors.bg4};
  background: linear-gradient(120deg, rgba(102, 126, 234, 0.1), rgba(16, 185, 129, 0.1));
  display: flex;
  flex-direction: column;
  gap: 12px;
`,v=t.a`
  color: ${({theme:e})=>e.colors.primary1};
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,j=[{title:"Data We Do Not Custody",body:"CheeseSwap is non-custodial. We do not hold your tokens, private keys, seed phrases, or KYC documents. Every swap executes directly from your wallet via smart contracts you authorize."},{title:"Operational Data We Process",body:"We only capture the minimum operational telemetry needed to keep the app healthy: anonymized device metadata, language preference, referral parameters, and aggregated performance metrics."},{title:"Blockchain Transparency",body:"Transaction hashes, wallet addresses you interact with, liquidity positions, and approvals are permanently recorded on public chains. Treat on-chain activity as public information."}],k=[{title:"How We Use Limited Metadata",bullets:["Detect stuck swaps and surface recovery guidance inside the interface.","Measure throughput so we can right-size RPC providers and caching layers.","Understand language preferences to preload the correct translations at launch.","Share anonymized usage summaries with infrastructure partners (RPC, analytics) under strict DPAs."]},{title:"When Data Leaves Your Device",bullets:["Support tickets you submit through email or Telegram (wallet address optional).","Security investigations coordinated with auditors or law enforcement when required by law.","Regulatory requests tied to sanctioned wallet monitoring. We only respond to valid court orders."]},{title:"Retention Windows",bullets:["Realtime logs roll after 30 days unless they are attached to a security review.","Aggregated analytics (swap counts, volume bands) are stored for up to 12 months.","Support conversations are retained for 18 months to improve follow-up context."]}];function C(){return r.jsxs(p,{children:[r.jsxs(h,{children:[r.jsx(x,{}),r.jsx(g,{children:"Privacy Policy"}),r.jsx(u,{children:"This page explains how CheeseSwap handles the operational data that flows through our non-custodial exchange. We aim to preserve your anonymity by default, only touching the metadata required to keep swaps performant and safe."}),r.jsxs(m,{children:[r.jsx(a,{children:"Applies to: Web App & API"}),r.jsx(a,{children:"Effective: 27 December 2025"}),r.jsx(a,{children:"Status: Public"})]})]}),r.jsx(y,{children:j.map(e=>r.jsxs(c,{children:[r.jsx(o,{children:e.title}),r.jsx(i,{children:e.body})]},e.title))}),k.map(e=>r.jsxs(c,{children:[r.jsx(o,{children:e.title}),r.jsx(b,{children:e.bullets.map(d=>r.jsx("li",{children:d},d))})]},e.title)),r.jsxs(f,{children:[r.jsxs(s,{children:[r.jsx(n,{children:"Security Reviews"}),r.jsx(l,{children:"Independent audits (CertiK) and 24/7 anomaly monitoring."})]}),r.jsxs(s,{children:[r.jsx(n,{children:"User Controls"}),r.jsx(l,{children:"Disconnect wallet anytime and clear cached preferences."})]}),r.jsxs(s,{children:[r.jsx(n,{children:"Data Portability"}),r.jsx(l,{children:"Request raw telemetry exports via privacy@cheeseswap.app."})]})]}),r.jsxs(w,{children:[r.jsx(o,{children:"Your Requests & Contact"}),r.jsxs(i,{children:["Reach the CheeseSwap privacy desk at ",r.jsx(v,{href:"mailto:privacy@cheeseswap.app",children:"privacy@cheeseswap.app"})," or send a signed message from the wallet involved in your query. We respond within 10 business days."]}),r.jsx(i,{children:"To exercise access, correction, or deletion rights, include the wallet address, the approximate date range, and any ticket IDs so we can locate the relevant metadata. We never ask for seed phrases or private keys."})]})]})}export{C as default};
