import { createStore } from 'redux';
import rootReducer from '../reducers';
import Reactotron from '../cfg/ReactotronCfg';

const enhancer =
	process.env.NODE_ENV === 'development' ? Reactotron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
