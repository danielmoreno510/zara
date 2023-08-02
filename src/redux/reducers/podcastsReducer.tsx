import { produce } from 'immer';

import { PODCASTS } from '../actions/types';
import { IPodcastInitialState, IPodcastReducer } from '@/types/podcasts';

export const initialState: IPodcastInitialState = {
  isFetchingPodcastList: false,
  podcastList: [],
  filter: '',
  isFetchingPodcastDetails: false,
  podcastDetails: null,
};

export default (state = initialState, action: IPodcastReducer) =>
  produce(state, (draft: IPodcastInitialState) => {
    switch (action.type) {
      case PODCASTS.FETCH_PODCAST_LIST:
        draft.isFetchingPodcastList = true;
        break;
      case PODCASTS.PUT_PODCAST_LIST:
        draft.podcastList = action.podcastList;
        draft.isFetchingPodcastList = false;
        break;
      case PODCASTS.PUT_FILTER_PODCAST_LIST:
        draft.filter = action.filter;
        break;
      case PODCASTS.FETCH_PODCAST_DETAILS:
        draft.isFetchingPodcastDetails = true;
        break;
      case PODCASTS.PUT_PODCAST_DETAILS:
        draft.podcastDetails = action.podcastDetails;
        draft.isFetchingPodcastDetails = false;
        break;
      default:
        break;
    }
  });
