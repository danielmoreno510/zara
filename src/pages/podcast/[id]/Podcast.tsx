import React from 'react';
import { useRouter } from 'next/router';
import PodcastDetails from '@/components/PodcastDetails';
import { IPodcastInitialState, IPodcastListDispatchProps } from '@/types/podcasts';
import LoadingIndicator from '@/components/common/LoadingIndicator.tsx';

const Podcast: React.FC<IPodcastInitialState> = ({ podcastDetails }) => (
    podcastDetails ? <PodcastDetails podcastDetails={podcastDetails} /> : <div>No data found</div>
);

const ListWithLoading = LoadingIndicator(Podcast);

const PodcastWithLoading: React.FC<IPodcastInitialState & IPodcastListDispatchProps> = ({
  isFetchingPodcastDetails,
  podcastDetails,
  getPodcastDetails,
}) => {
  const router = useRouter();
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    if (typeof router.query.id === 'string') {
      setId(router.query.id);
      getPodcastDetails!(router.query.id);
    }
  }, [router.query.id]);
  return <ListWithLoading isLoading={!id || isFetchingPodcastDetails!} podcastDetails={podcastDetails} />;
};

export default PodcastWithLoading;
