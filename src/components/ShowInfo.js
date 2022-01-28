import { useState } from 'react';

export const ShowInfo = ({ title, children }) => {
	const [status, setStatus] = useState('notApproved');
	return (
		<div className="infoBox">
			<div className="title">{title}</div>
			<p>This is the info from the function component.</p>
			<div className="status">STATUS: <span>{status}</span></div>
			{children}
		</div>
	)
}

