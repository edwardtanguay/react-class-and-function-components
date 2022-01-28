import { Component } from 'react';

export class ShowInfoAsClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'notApproved'
		};
	}
	render() {
		return (
			<div className="infoBox">
				<div className="title">{this.props.title}</div>
				<p>This is the info from the <strong>class</strong> component.</p>
				<div className="status">STATUS: <span>{this.state.status}</span></div>
				{this.props.children}
			</div>
		)
	}
}