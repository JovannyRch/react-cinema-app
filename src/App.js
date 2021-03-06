/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <span>Setup react redux</span>
      </div>
    </Provider>
  );
};

export default App;
