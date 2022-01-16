import React, { PureComponent } from 'react';
import './style.css';

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

class FilterList extends PureComponent {
  constructor(props) {
    super(props);
    //создаем и инициализируем state
    //добавили state в constructor потому что передаем props
    this.state = { ...props };
  }

  render() {
    return (
      <>
        <input
          onChange={(event) => {
            const value = event.target.value.toUpperCase();
            const list = this.props.list.filter((item) =>
              item.toUpperCase().includes(value)
            );
            console.log(value, list, this.props.list);
            this.setState({ list });
          }}
        />
        <List list={this.state.list} />
      </>
    );
  }
}

const myList = ['Петя', 'Masha', 'Ivan'];

export default function App() {
  return (
    <div>
      <FilterList list={myList} />
    </div>
  );
}
