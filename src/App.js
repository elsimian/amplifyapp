import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Authentication!</h1>
      </header>
      <a href="https://7yjxg3ieim.labeling.eu-west-1.sagemaker.aws">Labelling Place</a>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);