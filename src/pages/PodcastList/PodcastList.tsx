import InputSearch from '@/components/InputSearch';
import PodcastCard from '@/components/PodcastCard';
import LoadingIndicator from '@/components/common/LoadingIndicator.tsx';
import { IPodcastListDispatchProps, IPodcastInitialState } from '@/types/podcasts';
import React from 'react';

const PodcastList: React.FC<IPodcastInitialState & IPodcastListDispatchProps> = ({
  podcastList,
  filter,
  searchPodcasts,
}) => {
  const filterPodcast = (value: string) => searchPodcasts!(value);

  return (
    <div>
      <div className="flex justify-end items-baseline">
        <div>
          <div className="text-lg font-bold bg-sky-700 text-white rounded-xl p-2 pt-0.5 pb-0.5 mr-2">
            {podcastList?.length}
          </div>
        </div>
        <InputSearch value={filter!} setValue={filterPodcast} />
      </div>
      <div className="mt-4 flex flex-wrap justify-between">
        {(podcastList || []).map((podcast) => (
          <PodcastCard podcast={podcast} key={podcast.id.label} />
        ))}
      </div>
    </div>
  );
};

const ListWithLoading = LoadingIndicator(PodcastList);

const PodcastListWithLoading: React.FC<IPodcastInitialState & IPodcastListDispatchProps> = ({
  isFetchingPodcastList,
  podcastList,
  filter,
  getPodcasts,
  searchPodcasts,
}) => {
  React.useEffect(() => {
    getPodcasts!();
  }, []);

  return (
    <ListWithLoading
      isLoading={isFetchingPodcastList!}
      filter={filter}
      podcastList={podcastList}
      searchPodcasts={searchPodcasts}
    />
  );
};

export default PodcastListWithLoading;
