import './css/index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ToggleColorMode from './components/ToggleColorMode';

const container = document.getElementById('root');
const root = container && ReactDOM.createRoot(container);
root && root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToggleColorMode />
    </BrowserRouter>
  </Provider>
);