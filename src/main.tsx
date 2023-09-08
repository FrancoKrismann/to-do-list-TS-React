import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "todomvc-app-css/index.css"
import './index.css'
import { TodoProvider } from './context/TodoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
    <App />
    </TodoProvider>
  </React.StrictMode>,
)
