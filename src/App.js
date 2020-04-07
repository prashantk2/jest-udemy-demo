import React,{Component} from 'react';
import './App.css';
// import Counter from './components/Counter/Counter';
import Congrats from './Congrats';
import GuessedWord from './GuessedWord';

class App extends Component {
  render(){
    return (
      <div data-test="component-app" className="container">
      <h1>Jotto App</h1>
          <Congrats success={true} />
          <GuessedWord guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}  />
      </div>
    );
  }
}

export default App;
