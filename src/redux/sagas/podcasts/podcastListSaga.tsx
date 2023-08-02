import { takeLatest, put, call } from 'redux-saga/effects';

import { putPodcastList } from '../../actions';
import { PODCASTS } from '../../actions/types';
import { getPodcastList } from '../../../services/api/podcastService';
import { handleHttpError } from '../../../services/httpUtils';
import { IPodcastList, TPodcastListSaga } from '@/types/podcasts';

export function* fetchPodcastList(): Generator<TPodcastListSaga, void, IPodcastList> {
  const context = 'fetchPodcastList saga';

  try {
    const response: IPodcastList = yield call(getPodcastList);

    // Dispatches an action to get the node data to the state tree.
    yield put(putPodcastList(response.feed.entry));
  } catch (error: unknown) {
    yield put(putPodcastList([]));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchPodcastList() {
  yield takeLatest(PODCASTS.FETCH_PODCAST_LIST, fetchPodcastList);
}
