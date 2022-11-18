import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from '../src/components/Post/Post';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
