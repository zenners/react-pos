require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Orders from './orders'

var data = [
	{
		name: "potatowefwef balls",
		price: 200
	},
	{
		name: "carbonaasdfsra",
		price: 300,
	},
	{
		name: "sinigang",
		price: 280,
	},
	{
		name: "blue ice cream",
		price: 90
	},
	{
		name: "overshake",
		price: 250
	},

]

export class App extends React.Component {
	constructor() {
		super();
   	 	this.state = { 
   	 		orders: [], 
   	 		counter: -1,
   	 		selected: null }
	}

  	createOrder(){
  		this.setState({
  			counter: this.state.counter + 1,
  			orders: this.state.orders.concat({
  				id: this.state.counter + 1,
  				details: []
  			})
  		})
  	}

  	addToOrder(){
  		this.setState({

  		})
  	}

  	selectOrder(index){
  		this.setState({
  			selected: index
  		})
  	}

	render() {
		return (
      		<div className="container">
      			<div className="row col-md-6">
	      			
	      			<Menu data={data}/>
	      			<div className="row">
	      				<button onClick={this.createOrder.bind(this)} className="btn btn-warning"> Create new Order </button>
		      			<Orders 
		      					selectOrder={this.selectOrder.bind(this)} 
		      					selected={this.state.selected}
		      					orders={this.state.orders} />
      				</div>
      			</div>
      			<div className="col-md-6">
      				{this.state.selected}
      			</div>
      		</div>
      		


		);
	}
}

ReactDOM.render(<App/>, document.body);
