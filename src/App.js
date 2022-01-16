import React from 'react';
import FilterList from './FilterList.js';
import './style.css';

const myList = ['Петя', 'Masha', 'Ivan'];

export default function App() {
  return (
    <div>
      <FilterList list={myList} />
    </div>
  );
}
