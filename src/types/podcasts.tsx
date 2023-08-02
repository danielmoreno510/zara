import { PODCASTS } from '@/redux/actions/types';
import { CallEffect, PutEffect } from 'redux-saga/effects';

export interface IPodcastListResponse {
  data: IPodcastList;
}

export interface IPodcastList {
  feed: {
    entry: IPodcast[];
  };
}

export interface IPodcast {
  'im:name': {
    label: string;
  };
  'im:image': [
    {
      label: string;
      attributes: {
        height: string;
      };
    },
    {
      label: string;
      attributes: {
        height: string;
      };
    },
    {
      label: string;
      attributes: {
        height: string;
      };
    },
  ];
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  'im:artist': {
    label: string;
    attributes: {
      href: string;
    };
  };
}

export interface IPodcastDetailsResponse {
  contents: string;
}

export interface IPodcastTrack {
  trackId: number;
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
}

export interface IPodcastDetails {
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  shortDescription: string;
  previewUrl: string;
  trackId: number;
  genres: { name: string }[];
}

export type TPodcastaga = PutEffect<{ type: string }> | CallEffect<IPodcastListResponse>;

export interface IPodcastInitialState {
  isFetchingPodcastList?: boolean;
  podcastList?: IPodcast[];
  filter?: string;
  isFetchingPodcastDetails?: boolean;
  podcastDetails?: { [0]: IPodcastTrack; T: IPodcastDetails } | null;
}

export interface IPodcastReducer {
  type: PODCASTS;
  podcastList?: IPodcast[];
  filter?: string;
  id?: string;
  podcastDetails?: { [0]: IPodcastTrack; T: IPodcastDetails } | null;
}

export interface IPodcastListStateProps {
  podcasts: IPodcastInitialState;
}

export interface IPodcastListDispatchProps {
  getPodcasts?: () => any;
  searchPodcasts?: (value: string) => any;
  getPodcastDetails?: (id: string) => any;
}
