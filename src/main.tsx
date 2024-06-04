import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './context/userContext.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
})



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClint}>
        <App />
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>,
)
