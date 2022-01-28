import { useState } from 'react';

export const ShowInfo = ({ title, children }) => {
	const [status, setStatus] = useState('notApproved');

	const handleChangeStatus = () => {
		setStatus(status === 'approved' ? 'notApproved' : 'approved'); 
	}

	return (
		<div className="infoBox">
			<div className="title">{title}</div>
			<p>This is the info from the function component.</p>
			<div className="status"><button onClick={handleChangeStatus}>CHANGE STATUS</button> <span className={status}>{status === 'approved' ? 'Approved' : 'Not Approved'}</span></div>
			{children}
		</div>
	)
}

