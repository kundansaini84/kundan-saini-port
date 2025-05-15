
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add viewport meta tag programmatically for better mobile display
const setViewportMeta = () => {
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
  document.getElementsByTagName('head')[0].appendChild(meta);
};

setViewportMeta();

createRoot(document.getElementById("root")!).render(<App />);
