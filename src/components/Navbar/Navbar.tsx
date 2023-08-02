import { useRouter } from 'next/router';
import Spinner from '../Spinner';
import { IPodcastInitialState } from '@/types/podcasts';

const Navbar: React.FC<IPodcastInitialState> = ({ isFetchingPodcastList, isFetchingPodcastDetails }) => {
  const router = useRouter()
  const goToHome = () => router.push(`/`)

  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-8">
      <div className="text-sky-700 text-2xl font-medium cursor-pointer" onClick={goToHome}>Podcaster</div>
      <div>{isFetchingPodcastList || isFetchingPodcastDetails && <Spinner />}</div>
    </div>
  );
};

export default Navbar;
