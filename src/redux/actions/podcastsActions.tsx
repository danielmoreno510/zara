import { IPodcast, IPodcastDetails, IPodcastReducer, IPodcastTrack } from '@/types/podcasts';
import { PODCASTS } from './types';

export const fetchPodcastList = (): IPodcastReducer => ({
  type: PODCASTS.FETCH_PODCAST_LIST,
});

export const putPodcastList = (podcastList: IPodcast[]): IPodcastReducer => ({
  type: PODCASTS.PUT_PODCAST_LIST,
  podcastList,
});

export const putFilterPodcastList = (filter: string): IPodcastReducer => ({
  type: PODCASTS.PUT_FILTER_PODCAST_LIST,
  filter,
});

export const fetchPodcastDetails = (id: string): IPodcastReducer => ({
  type: PODCASTS.FETCH_PODCAST_DETAILS,
  id,
});

export const putPodcastDetails = (podcastDetails: { [0]: IPodcastTrack; T: IPodcastDetails } | null): IPodcastReducer => ({
  type: PODCASTS.PUT_PODCAST_DETAILS,
  podcastDetails,
});

export default {
  fetchPodcastList,
  putPodcastList,
};
