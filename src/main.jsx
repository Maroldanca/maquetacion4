import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Article from './components/Article.jsx'
import Aside from './components/Aside.jsx'
import Form from './components/Form.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Article />
    <Aside />
    <Form />
    <App />
  </StrictMode>,
)
