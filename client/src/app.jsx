import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Bar, Line, Pie} from 'react-chartjs-2';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      labels: time,
      datasets: [
        {
          label: 'ETH Tracker MVP',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75, 192, 192, 0.1)',
          data: [100, 300, 500, 700]
        }
      ]
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