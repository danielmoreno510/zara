import { takeLatest, put, call } from 'redux-saga/effects';

import { putPodcastList } from '../../actions';
import { PODCASTS } from '../../actions/types';
import { getPodcastList } from '../../../services/api/podcastService';
import { handleHttpError } from '../../../services/httpUtils';
import { IPodcast, IPodcastList, TPodcastaga } from '@/types/podcasts';
import { getPodcastListStore, setPodcastListStore } from '@/utils/localStorageUtils';

export function* fetchPodcastList(): Generator<TPodcastaga, void, IPodcastList> {
  const context = 'fetchPodcastList saga';

  try {
    let data: IPodcast[];
    const podcastListStore = getPodcastListStore()
    if (podcastListStore) {
      data = podcastListStore
    } else {
      const response: IPodcastList = yield call(getPodcastList);
      data = response.feed.entry;
      setPodcastListStore(data)
    }

    // Dispatches an action to get the node data to the state tree.
    yield put(putPodcastList(data));
  } catch (error: unknown) {
    yield put(putPodcastList([]));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchPodcastList() {
  yield takeLatest(PODCASTS.FETCH_PODCAST_LIST, fetchPodcastList);
}
