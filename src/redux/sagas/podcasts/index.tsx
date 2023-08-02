import { all } from 'redux-saga/effects';

import podcastListSaga from './podcastListSaga';
import podcastDetailsSaga from './podcastDetailsSaga';

export default function* rootSaga() {
  yield all([podcastListSaga(), podcastDetailsSaga()]);
}
