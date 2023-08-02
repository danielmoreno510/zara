import { IPodcastDetails } from '@/types/podcasts';

const EpisodePlay: React.FC<{ episode: IPodcastDetails }> = ({ episode }) => {
  return (
    <div className="shadow-sm shadow-zinc-300 p-4 mb-6">
      <div className="text-2xl font-bold">{episode.trackName}</div>
      <div className="mt-2 italic">{episode.shortDescription}</div>
      <div className="mt-2">Genres: {episode.genres[0].name}</div>
      <audio className='w-full mt-8' src={episode.previewUrl} controls>
      </audio>
    </div>
  );
};

export default EpisodePlay;
