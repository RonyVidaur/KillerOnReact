var React = require('react');
var ReactDom = require('react-dom');

//create component
var TodoComponent = React.createClass({
  render: function(){
    return (
      <h1>helloooooo</h1>);
  }
});

//put the component into the page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));
