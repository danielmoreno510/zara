import { combineReducers } from 'redux';
import podcasts from './podcastsReducer';

const rootReducer = combineReducers({
  podcasts,
});

export default rootReducer;
