/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <span>Setup react redux</span>
      </div>
    </Provider>
  );
};

export default App;
