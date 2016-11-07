var React = require('react');
var ReactDom = require('react-dom');
var TodoItem = require('./todo-item')
var AddItem = require('./add-item')
require('./css/index.css')
//create component
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
  }
});
//put the component into the page
ReactDom.render(<TodoComponent person = "Rony" />, document.getElementById('todo-wrapper'));
