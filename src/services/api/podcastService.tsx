import { IPodcastListResponse } from '@/types/podcasts';
import http from '../http';
import { ALLORIGINS, API_URL } from '@/constants';

/**
 * Get podcast list from itunes.
 */
export const getPodcastList = async (): Promise<IPodcastListResponse> => {
  const { data } = await http.get('us/rss/toppodcasts/limit=100/genre=1310/json');
  return data;
};


/**
 * Get podcast details from itunes.
 */
export const getPodcastDetails = async (id: string): Promise<IPodcastListResponse> => {
    const params = '&country=US&media=podcast&entity=podcastEpisode'
    const { data } = await http.get(`${ALLORIGINS}${encodeURIComponent(`${API_URL}/lookup?id=${id}${params}`)}`);
    return data;
  };
  