import { takeLatest, put, call } from 'redux-saga/effects';

import { putPodcastDetails } from '../../actions';
import { PODCASTS } from '../../actions/types';
import { getPodcastDetails } from '../../../services/api/podcastService';
import { handleHttpError } from '../../../services/httpUtils';
import { IPodcastDetails, IPodcastDetailsResponse, IPodcastTrack, TPodcastaga } from '@/types/podcasts';
import { getPodcastDetailsStore, setPodcastDetailsStore } from '@/utils/localStorageUtils';

export function* fetchPodcastDetails({ id }: { id: string }): Generator<TPodcastaga, void, IPodcastDetailsResponse> {
  const context = 'fetchPodcastDetails saga';

  try {
    let data: {0: IPodcastTrack; T: IPodcastDetails };
    const podcastDetailsStore = getPodcastDetailsStore(id);
    if (podcastDetailsStore) {
      data = podcastDetailsStore
    } else {
      const response: IPodcastDetailsResponse = yield call(getPodcastDetails, id);
      data = JSON.parse(response.contents).results;
      setPodcastDetailsStore(data)
    }

    // Dispatches an action to get the node data to the state tree.
    yield put(putPodcastDetails(data));
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
