import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    if (this.state.newItem === "") {
      alert("You forgot to type something in!");
      return;
    }
    // create item
    const newItem = { id: Math.random(), value: this.state.newItem.slice() };

    // copy current list of items
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      newItem: "",
      list
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out deleted item
    const updatedList = list.filter(item => item.id !== id);

    // update state
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center mt-5 pb-3">
          <h1>To Do</h1>
          <div className="form-group d-flex mt-5">
            <input
              type="text"
              className="form-control mr-1"
              id="newToDo"
              value={this.state.newItem}
              placeholder="What are you up to today?"
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.addItem()}
            >
              add
            </button>
          </div>
        </div>
        <ul className="list-group">
          {this.state.list.map(item => {
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}
                  className="badge badge-danger badge-pill"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
