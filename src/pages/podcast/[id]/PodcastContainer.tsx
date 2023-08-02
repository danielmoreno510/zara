import Podcast from './Podcast';
import { StoreService } from '@/redux/StoreService';
import { fetchPodcastDetails } from '@/redux/actions';
import {
  IPodcastReducer,
  IPodcastListDispatchProps,
  IPodcastListStateProps,
  IPodcastInitialState,
} from '@/types/podcasts';

export const mapStateToProps = (state: IPodcastListStateProps): IPodcastInitialState => ({
  isFetchingPodcastDetails: state.podcasts.isFetchingPodcastDetails,
  podcastDetails: state.podcasts.podcastDetails,
});

export const mapDispatchToProps = (dispatch: (T: IPodcastReducer) => void): IPodcastListDispatchProps => ({
  getPodcastDetails: (id: string) => {
    dispatch(fetchPodcastDetails(id));
  },
});

const PodcastListContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Podcast);

export default PodcastListContainer;
