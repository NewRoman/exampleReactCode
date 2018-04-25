import ReactOnRails from 'react-on-rails'
import App from './app'
import configureStore from '../store/appStore'

const appStore = configureStore;

ReactOnRails.registerStore({ appStore });
ReactOnRails.register({ App });
