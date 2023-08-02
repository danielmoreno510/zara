import { IPodcastInitialState } from '@/types/podcasts';
import Spinner from '../Spinner';

const Navbar: React.FC<IPodcastInitialState> = ({ isFetchingPodcastList, isFetchingPodcastDetails }) => {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-8">
      <div className="text-sky-700 text-2xl font-medium">Podcaster</div>
      <div>{isFetchingPodcastList || isFetchingPodcastDetails && <Spinner />}</div>
    </div>
  );
};

export default Navbar;
