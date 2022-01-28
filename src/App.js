import './App.scss';
import { ShowInfo } from './components/ShowInfo';
import { ShowInfoAsClass } from './components/ShowInfoAsClass';

function App() {
	return (
		<div className="App">
			<h1>Welcome</h1>
			<ShowInfo />
			<ShowInfoAsClass/>
		</div>
	);
}

export default App;
