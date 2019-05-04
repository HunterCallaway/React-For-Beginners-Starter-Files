import React, { Fragment } from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render() {
		return (
			<Fragment>
				{ /* Sample JSX comment -- it must go inside of the returned element */ }
				<form className="store-selector">
					<h2>Please select a store.</h2>
					<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
					<button type="Submit">Visit the store.</button>
				</form>
			</Fragment>
			)
	}
}

export default StorePicker;