import React, { PureComponent } from 'react';

const List = ({ list }) => (
  <ul>
    {
      //list?.map() созает новую коллекцию list с тем же количеством элементов
    }
    {list?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
