import logo from './logo.svg';
import './css/App.css';
import Hola from './components/Saludar';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Hola />
			</header>
		</div>
	);
}

export default App;
