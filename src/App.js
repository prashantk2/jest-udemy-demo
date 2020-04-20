import React,{Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
// import Counter from './components/Counter/Counter';
import Congrats from './Congrats';
import GuessedWord from './GuessedWord';
import {getSecretWord} from './actions';
import Input from './Input'

export class UnconnectedApp extends Component {
  componentDidMount() {
    //call getSecretWord prop
    this.props.getSecretWord();
  }
  render(){
    return (
      <div data-test="component-app" className="container">
      <h1>Jotto App</h1>
          <Congrats success={this.props.success} />
          <Input />
          <GuessedWord guessedWords={this.props.guessedWords}  />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
