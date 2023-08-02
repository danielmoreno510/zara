import React from 'react';
import { useRouter } from 'next/router';
import { IPodcast } from '@/types/podcasts';

const PodcastCard: React.FC<{ podcast: IPodcast }> = ({ podcast }) => {
  const router = useRouter()
  const goToPodcast = (id: string) => router.push(`/podcast/${id}`)

  return (
    <div className="p-4 w-56 cursor-pointer hover:opacity-60" onClick={() => goToPodcast(podcast.id.attributes['im:id'])}>
      <div className="flex justify-center">
        <img
          className="w-32 rounded-full border border-x-zinc-200"
          src={podcast['im:image'][2].label || podcast['im:image'][1].label || podcast['im:image'][0].label}
          alt=""
        />
      </div>
      <div className="border border-x-zinc-200 border-b-zinc-300 border-t-zinc-100 shadow-sm shadow-zinc-300 p-4 pt-16 -mt-16">
        <div className="text-center">{podcast['im:name'].label}</div>
        <div className="text-center text-gray-500">Author: {podcast['im:artist'].label}</div>
      </div>
    </div>
  );
};
export default PodcastCard;
