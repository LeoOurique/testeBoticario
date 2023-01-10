import Router from './routes/Router';
import { BrowserRouter } from "react-router-dom";
import './index.css';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>

  )
}

export default App
