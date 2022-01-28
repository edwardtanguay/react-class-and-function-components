import { Component } from 'react';

export class ShowInfoAsClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'notApproved'
		};
	}
	handleChangeStatus = () => {
		this.setState({status: this.state.status === 'approved' ? 'notApproved' : 'approved'});
	}
	render() {
		return (
			<div className="infoBox">
				<div className="title">{this.props.title}</div>
				<p>This is the info from the <strong>class</strong> component.</p>
			<div className="status"><button onClick={this.handleChangeStatus}>CHANGE STATUS</button> <span>{this.state.status}</span></div>
				{this.props.children}
			</div>
		)
	}
}