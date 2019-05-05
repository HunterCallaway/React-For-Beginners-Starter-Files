import React, { Fragment } from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	//Constructor example
/*	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
}*/

	myInput = React.createRef();

	goToStore = event => {
		//1. Prevent the form from being submitted.
		event.preventDefault();
		//2. Get the text from the input.
		console.log(this);
		//3. Change the page to /store/whatever-the-user-entered.
	};

	render() {
		return (
			<Fragment>
				{ /* Sample JSX comment -- it must go inside of the returned element */ }
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please select a store.</h2>
					<input
						type="text"
						ref={this.myInput}
						required
						placeholder="Store Name"
						defaultValue={getFunName()} />
					<button type="Submit">Visit the store.</button>
				</form>
			</Fragment>
			)
	}
}

export default StorePicker;