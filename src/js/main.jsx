import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (secondsSinceLoad) => {
  root.render(
    <React.StrictMode>
      <Home seconds={secondsSinceLoad} />
    </React.StrictMode>,
  );
};

const startTimer = () => {
  const start = Date.now();
  const updateSeconds = () => {
    const secondsSinceLoad = Math.floor((Date.now() - start) / 1000);
    renderApp(secondsSinceLoad);
  };

  updateSeconds();
  setInterval(updateSeconds, 1000);
};

if (document.readyState === 'complete') {
  startTimer();
} else {
  window.addEventListener('load', startTimer);
}
