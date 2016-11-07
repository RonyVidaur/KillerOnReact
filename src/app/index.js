var React = require('react');
var ReactDom = require('react-dom');

//create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ["eat", "work", "sleep", "gf"]
    }
  },
  render: function(){
    var todos = this.state.todos.map(function(item,index){
      return (
        <TodoItem item = {item} key={index}/>
      )
    })
    return(
      <div>
        <h1>Hello here is what You need to complete</h1>
        <ul>{todos}</ul>
      </div>

    );
  }//end of render
});

var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    )
  }
})

var person = {name:"Rony Vidaur",
              hobby:"Coding & Soccer",
              favoriteTeam:"Real Madrid"}

//put the component into the page
ReactDom.render(<TodoComponent person = {person} />, document.getElementById('todo-wrapper'));
