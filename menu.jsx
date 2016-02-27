import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menuItem';

export default class Menu extends React.Component {
	render() {
		var menuNodes = this.props.data.map((item, key) => {
			return (
				<MenuItem key={key} name={item.name}> </MenuItem>
			)
		})
		return (
      		<div>
      			{menuNodes}
      		</div>
      		
		)
	}
}