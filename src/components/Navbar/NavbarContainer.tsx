import Navbar from './Navbar';
import { StoreService } from '@/redux/StoreService';
import { IPodcastListStateProps, IPodcastInitialState } from '@/types/podcasts';

export const mapStateToProps = (state: IPodcastListStateProps): IPodcastInitialState => ({
  isFetchingPodcastList: state.podcasts.isFetchingPodcastList,
  isFetchingPodcastDetails: state.podcasts.isFetchingPodcastDetails,
});


const PodcastListContainer = StoreService.connect(mapStateToProps, null)(Navbar);

export default PodcastListContainer;
