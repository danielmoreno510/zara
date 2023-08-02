import {all} from 'redux-saga/effects';
import podcastSagas from './podcasts';

export default function* rootSaga() {
  yield all([podcastSagas()]);
}