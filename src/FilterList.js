import React, { PureComponent } from 'react';
import List from './List.js';
import './style.css';

export default class FilterList extends PureComponent {
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
