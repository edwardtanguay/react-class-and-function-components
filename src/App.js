import './App.scss';
import { ShowInfo } from './components/ShowInfo';
import { ShowInfoAsClass } from './components/ShowInfoAsClass';

function App() {
	return (
		<div className="App">
			<h1>Welcome</h1>
			<ShowInfo title="The Function InfoBox">
				<h2>More Info</h2>
				<p>This is some more info.</p>
			</ShowInfo>
			<ShowInfoAsClass/>
		</div>
	);
}

export default App;
