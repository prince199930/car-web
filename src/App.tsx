import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Auth />
        </div>
      </Provider>
    </>
  );
}

export default App;
