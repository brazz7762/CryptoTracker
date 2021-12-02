import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  defaults
} from 'chart.js';
import 'chart.js/auto'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      labels: [1, 2, 3, 4],
      datasets: [
        {
          label: 'ETH Tracker MVP',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75, 192, 192, 0.1)',
          data: [100, 300, 500, 700],

        }
      ]
    }
  }
  componentDidMount(){
    console.log('component did mount running')
    axios.get('/api/getPrices')
      .then(results => {
        console.log('is this running within then part')
        console.log('results.data', results.data.length)
        var price = []
        var time = []
        for(var i = results.data.length - 1; i > 0; i--){
          price.push(results.data[i].price)
          time.push(results.data[i].ts)
        }
        console.log('price', price);
        console.log('time', time)
        this.setState({
          datasets:
          [
            {
              label: 'ETH Tracker MVP',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(75, 192, 192, 0.1)',
              data: price
            }
          ],
          labels: time
        })
      })
  }

  update(){
    console.log('update running')
    axios.get('/api/getPrices')
    .then(results => {
      console.log('is this running within then update part')
      console.log('results.data', results.data.length)
      var price = []
      var time = []
      for(var i = results.data.length - 1; i > 0; i--){
        price.push(results.data[i].price)
        time.push(results.data[i].ts)
      }
      console.log('price', price);
      console.log('time', time)
      this.setState({
        datasets:
        [
          {
            label: 'ETH Tracker MVP',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            data: price
          }
        ],
        labels: time
      })
    })
  }

  priceOk(){
    if(this.props.prices !== undefined) {
      return( <Line
        data= {this.state}
        />)
    }
  }

  render() {
    return(
      <div>
        <div><h1>Ayyyyyy</h1></div>
        <div><h2>Hellooooo thereeeeee Broseph</h2></div>
        <div className='chart'>
          <Line
          data={this.state}
          />

        </div>
        {setInterval(this.update(), 5000)}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));