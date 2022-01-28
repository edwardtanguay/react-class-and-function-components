import { Component } from 'react';

export class ShowInfoAsClass extends Component {
	render() {
		return (
			<div className="infoBox">
				<p>This is the info from the <strong>class</strong> component.</p>
			</div>
		)
	}
}