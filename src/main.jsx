import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

// Handle base URL for GitHub Pages
const baseUrl = '/Garrett/Portfolio/';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Ensure we're using the correct base URL
if (window.location.pathname.startsWith(baseUrl)) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Invalid base URL for GitHub Pages');
} 