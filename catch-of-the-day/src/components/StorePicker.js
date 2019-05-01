import React, { Fragment } from "react";

class StorePicker extends React.Component {
	render() {
		return (
			<Fragment>
				<p>Soy Fish!</p>
				{ /* Sample JSX comment -- it must go inside of the returned element */ }
				<form className="store-selector">
					<h2>Please select a store.</h2>
					<input type="text" required placeholder="Store Name" />
					<button type="Submit">Visit the store.</button>
				</form>
			</Fragment>
			)
	}
}

export default StorePicker;