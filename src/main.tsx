// import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'
import GlobalStyle from './globalStyles.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Router />
    <GlobalStyle />
  </>
)
