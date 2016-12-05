import React from 'react'
var ReactDom = require('react-dom');
var TodoItem = require('./todo-item')
var AddItem = require('./add-item')
require('./css/index.css')
import { Router, Route, browserHistory } from 'react-router'
import About from './about'
//create component
var App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    )
  }
})



var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ["eat", "work", "sleep", "gf"]
    }
  },
  render: function(){
    var todos = this.state.todos
      todos = todos.map(function(item,index){
      return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>)
    }.bind(this))
    return(
      <div>
        <h1 >Hello, {this.props.person}</h1>
        <p>remember to get shit done</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },//end of render
  //custom functions
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val
    })
    this.setState({todos: updatedTodos
    })
  },
  onAdd: function(item){
    var updatedTodos = this.state.todos
    updatedTodos.push(item)
    this.setState({todos: updatedTodos})
  },
  //lifecycle functions
  componentWillMount() {
    console.log('componentWillMount')
  },
  componentDidMount() {
    console.log('componentDidMount')
  },
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
})
//put the component into the page
ReactDom.render(<App/>, document.getElementById('todo-wrapper'));
