export const ShowInfo = ({ title, children }) => {
	return (
		<div className="infoBox">
			<div className="title">{title}</div>
			<p>This is the info from the function component <strong>which is simply a function in App.js</strong>.</p>
			{children}
		</div>
	)
}

