import { takeLatest, put, call } from 'redux-saga/effects';

import { putPodcastDetails } from '../../actions';
import { PODCASTS } from '../../actions/types';
import { getPodcastDetails } from '../../../services/api/podcastService';
import { handleHttpError } from '../../../services/httpUtils';
import { IPodcastDetailsResponse, TPodcastListSaga } from '@/types/podcasts';

export function* fetchPodcastDetails({ id }: { id: string }): Generator<TPodcastListSaga, void, IPodcastDetailsResponse> {
  const context = 'fetchPodcastList saga';

  try {
    const response: IPodcastDetailsResponse = yield call(getPodcastDetails, id);

    // Dispatches an action to get the node data to the state tree.
    yield put(putPodcastDetails(JSON.parse(response.contents).results));
  } catch (error: unknown) {
    yield put(putPodcastDetails(null));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchPodcastDetails() {
  // @ts-ignore
  yield takeLatest(PODCASTS.FETCH_PODCAST_DETAILS, fetchPodcastDetails);
}
