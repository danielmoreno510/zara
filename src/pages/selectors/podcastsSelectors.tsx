import { createSelector } from 'reselect';
import { IPodcast, IPodcastListStateProps } from '@/types/podcasts';

const selectPodcastList = (state: IPodcastListStateProps) => state.podcasts.podcastList!;
const selectFilter = (state: IPodcastListStateProps) => state.podcasts.filter!;

export const getPodcastList = createSelector(
  [selectPodcastList, selectFilter],
  (podcastList: IPodcast[], filter: string) => {
    return podcastList?.filter((podcast) => {
      const title = podcast['im:name'].label.toUpperCase();
      const artist = podcast['im:artist'].label.toUpperCase();
      return title.includes(filter.toUpperCase()) || artist.includes(filter.toUpperCase());
    });
  },
);
