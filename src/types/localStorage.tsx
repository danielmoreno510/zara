import { IPodcastDetails, IPodcastTrack } from './podcasts';

export enum KeysEnum {
  podcastList = 'podcastList',
  podcastDetails = 'podcastDetails',
}

export interface IStoragePodcastDetails {
  expiry: number;
  data: {
    [0]: IPodcastTrack;
    T: IPodcastDetails;
  };
}
