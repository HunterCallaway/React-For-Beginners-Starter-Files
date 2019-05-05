import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = event => {
		//1. Prevent the form from being submitted.
		event.preventDefault();
		//2. Get the text from the input.
		/*
		The following note is taken from the React for Beginners Slack channel:
		If you are having issues with `this.nameRef.value.value` (the old API) being undefined then please try using `this.nameRef.current.value` (the new API). The starter files for the course have been updated to use `React 16.6.3` which uses the new API.
		*/
		const storeName = this.myInput.current.value;
		//3. Change the page to /store/whatever-the-user-entered.
		this.props.history.push(`/store/${storeName}`);
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
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit the store.</button>
				</form>
			</Fragment>
			);
	}
}

export default StorePicker;