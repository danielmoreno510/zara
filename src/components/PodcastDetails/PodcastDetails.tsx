import { IPodcastDetails, IPodcastInitialState } from '@/types/podcasts';
import DetailsSection from './DetailsSection';
import EpisodeList from './EpisodeList';
import { useRouter } from 'next/router';
import EpisodePlay from './EpisodePlay';

const PodcastDetails: React.FC<IPodcastInitialState> = ({ podcastDetails }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/4">
          <DetailsSection podcastTrack={podcastDetails![0]} />
        </div>
        <div className="w-3/5">
          {!router.query.episode ? (
            <EpisodeList
              episodes={
                // @ts-ignore
                podcastDetails!.filter((podcast: any, index: number) => index !== 0)
              }
            />
          ) : (
            <EpisodePlay
              episode={
                // @ts-ignore
                podcastDetails!.find((podcast: IPodcastDetails) => podcast.trackId == router.query.episode)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
