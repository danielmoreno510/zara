import { KeysEnum } from '@/types/localStorage';
import { IPodcast, IPodcastDetails, IPodcastTrack } from '@/types/podcasts';

export function setWithExpiry(value: any) {
  return { data: value, expiry: new Date().setDate(new Date().getDate() + 1) };
}

export const setPodcastListStore = (value: IPodcast[]) => {
  const item = setWithExpiry(value);
  localStorage.setItem(KeysEnum.podcastList, JSON.stringify(item));
};

export const setPodcastDetailsStore = (value: { [0]: IPodcastTrack; T: IPodcastDetails }) => {
  const item = { [value[0].trackId]: setWithExpiry(value) };
  localStorage.setItem(KeysEnum.podcastDetails, JSON.stringify(item));
};

export const getPodcastListStore = (): IPodcast[] | null => {
  const podcastListString: string | null = localStorage.getItem(KeysEnum.podcastList);
  if (podcastListString && JSON.parse(podcastListString).expiry > new Date().getDate()) {
    return JSON.parse(podcastListString).data;
  }
  return null;
};

export const getPodcastDetailsStore = (id: string): { [0]: IPodcastTrack; T: IPodcastDetails } | null => {
  const podcastDetailsString: string | null = localStorage.getItem(KeysEnum.podcastDetails);
  const podcastDetails: any = podcastDetailsString ? JSON.parse(podcastDetailsString) : [];
  if (podcastDetails[id] && podcastDetails[id].expiry > new Date().getDate()) {
    return podcastDetails[id].data;
  }
  return null;
};
