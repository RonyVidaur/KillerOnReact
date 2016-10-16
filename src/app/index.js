var React = require('react');
var ReactDom = require('react-dom');

//create component
var TodoComponent = React.createClass({
  render: function(){
    return(
      <div>
          <h1>Hello <strong>{this.props.person.name}!</strong></h1>
          <p>I see that you like {this.props.person.hobby}, that is so cool!</p>
          <p>and {this.props.person.favoriteTeam} is a very strong choice aswell</p>
      </div>
    );
  }
});

var person = {name:"Rony Vidaur",
              hobby:"Coding & Soccer",
              favoriteTeam:"Real Madrid"}
//put the component into the page
ReactDom.render(<TodoComponent person = {person} />,document.getElementById('todo-wrapper'));
