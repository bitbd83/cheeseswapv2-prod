import{r as t,j as r,q as o}from"./index-NoqJLJW8.js";const i="https://app.debridge.com/r/32773",n=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 560px;
  min-height: 240px;
  text-align: center;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.bg1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.colors.bg3};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`,s=o.h2`
  margin-bottom: 0.75rem;
  color: ${({theme:e})=>e.colors.text1};
`,c=o.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text2};
`;function d(){return t.useEffect(()=>{const e=window.setTimeout(()=>{window.location.replace(i)},400);return()=>window.clearTimeout(e)},[]),r.jsxs(n,{children:[r.jsx(s,{children:"Cross Chain Bridge"}),r.jsx(c,{children:"Redirecting you to our cross-chain partner experience…"})]})}export{d as default};
