import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Layout>
    <App />
  </Layout>
);
