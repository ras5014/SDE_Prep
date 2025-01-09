import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


// React Query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// React Router Setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)
