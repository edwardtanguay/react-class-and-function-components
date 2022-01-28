import './App.scss';
import { ShowInfo } from './components/ShowInfo';
import { ShowInfoAsClass } from './components/ShowInfoAsClass';

const ExtraInfo = () => {
	return (
		<div>
			<h2>Here is the Extra Info</h2>
			<p>Info #1</p>
			<p>Info #2</p>
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<h1>Welcome</h1>

			<ShowInfo title="The Function InfoBox">
				<ExtraInfo />
			</ShowInfo>

			<ShowInfoAsClass title="The Class InfoBox">
				<ExtraInfo />
				<p>Reminder: This is a class component.</p>
			</ShowInfoAsClass>

		</div>
	);
}

export default App;
