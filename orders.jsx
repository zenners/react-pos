require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';
import ReactDOM from 'react-dom';

export default class Orders extends React.Component {
	handleClick(index){
		this.props.selectOrder(index)
	}

	render() {
		var tags;

		var orderList = this.props.orders.map((order, index)=>{
			return (
				<button onClick={this.handleClick.bind(this, index)} 
						className={index == this.props.selected ? "btn btn-primary" : "btn btn-danger"}
						key={index} > 
						{order.id} 
				</button>
			)
		});

		return (
      		<div className="row">
      			{orderList}
      		</div>
      		
		);
	}
}