import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import TodoList from './TodoList';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <TodoList />
  ,rootElement);



