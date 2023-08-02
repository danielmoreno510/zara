import { useRouter } from 'next/router';
import { IPodcastDetails } from '@/types/podcasts';

const EpisodeList: React.FC<{ episodes: IPodcastDetails[] }> = ({ episodes }) => {
  const router = useRouter();
  
  const goToEpisode = (episode: IPodcastDetails) => router.push(`${router.asPath}/episode/${episode.trackId}`);

  const getDate = (date: string): string => {
    const currentDate = new Date(date);
    const yyyy = currentDate.getFullYear();
    const mm = currentDate.getMonth() + 1;
    const dd = currentDate.getDate();
    return dd + '/' + mm + '/' + yyyy;
  };

  const getDuration = (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds;
  };

  return (
    <div>
      <div className="shadow-sm shadow-zinc-300 p-4 mb-6">Episodes: {episodes.length}</div>
      <div className="shadow-sm shadow-zinc-300 p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Date</th>
              <th className="text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <tr className={`${index % 2 && 'bg-zinc-100'}`} key={episode.trackName}>
                <td className="text-sky-700 cursor-pointer" onClick={() => goToEpisode(episode)}>
                  {episode.trackName}
                </td>
                <td>{getDate(episode.releaseDate)}</td>
                <td>{getDuration(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodeList;
