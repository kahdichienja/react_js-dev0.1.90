import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
// import uuid from 'uuid'
// https://jsonplaceholder.typicode.com/todos
import './App.css';
import axios from 'axios';
// const uuid = require('uuid');

class App extends Component {
  state = {
    todos: [
      /*
      { id: uuid.v4(), title: 'Creating React Todo App', completed: true },
      { id: uuid.v4(), title: 'Integrating React With Django', completed: true },
      { id: uuid.v4(), title: 'Sleeping', completed: false },
      { id: uuid.v4(), title: 'Meeting Emilly At 1500hrs', completed: false },
      { id: uuid.v4(), title: 'Adding Material Css to React Todo App', completed: false }, 
      */
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(res => this.setState({todos: res.data}))
  }
  /*
    delete todo item from the list
  */
  delTodo = (id) => {
    // console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  markComplete = (id) => {
    // event.preventDefault()
    // console.log(id)

    this.setState(
      {
        // loop though the todo items in the current state. 
        todos: this.state.todos.map(todo => {
          /* 
            @comment
            check if the clicked todo id is equel 
            to the one passed through the props
            then toggle complete
          */
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        }

        )
      }
    )
  }
  AddTodo = (title) => {
    // console.log(title)
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    //this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    // console.log(this.state.todos[0].title)
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo
                AddTodo={this.AddTodo}
              />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )} />
          <Route path="/about" exact component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
