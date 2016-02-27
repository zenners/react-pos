require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';
import ReactDOM from 'react-dom';

export default class MenuItem extends React.Component {
	render() {
		return (
      		<div className="col-md-8 col-md-offset-2">
      			<button className="btn btn-default btn-block"> {this.props.name} </button>
      		</div>
		);
	}
}