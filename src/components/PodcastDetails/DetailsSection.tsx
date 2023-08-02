import { IPodcastTrack } from '@/types/podcasts';
import { useRouter } from 'next/router';

const DetailsSection: React.FC<{ podcastTrack: IPodcastTrack }> = ({ podcastTrack }) => {
  const router = useRouter();
  const goToPodcast = () => router.push(`/podcast/${router.query.id}`);

  return (
    <div className="shadow-sm shadow-zinc-300 p-4">
      <img className="mb-6 cursor-pointer" src={podcastTrack.artworkUrl600} onClick={goToPodcast} alt="" />
      <div className="text-lg font-bold border-t border-gray-200 pt-4 cursor-pointer">{podcastTrack.collectionName}</div>
      <div className="italic border-b border-gray-200 pb-4">by {podcastTrack.artistName}</div>
      <div className="text-sm font-bold pt-4">Description:</div>
      <div className="text-sm italic">{podcastTrack.collectionName}</div>
    </div>
  );
};

export default DetailsSection;
