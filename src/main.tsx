import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './context/userContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from '@radix-ui/react-toast'
import { Store } from 'store/store.js';

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
})



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider >
    <UserProvider>
      <QueryClientProvider client={queryClint}>
        <App />
      </QueryClientProvider>
    </UserProvider>
    </Provider>
  </React.StrictMode>,
)
