import logo from './logo.jpg';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Javier Sanchez Ramos
        </p>
        <a
          className="App-link"
          href="https://www.ferrari.com/es-ES"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ferrari link
        </a>
      </header>
    </div>
  );
}
