import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div><h1>Ayyyyyy</h1></div>
        <div><h2>Hellooooo thereeeeee Broseph Stalin</h2></div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));