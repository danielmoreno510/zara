import PodcastList from './PodcastList';
import { StoreService } from '@/redux/StoreService';
import { fetchPodcastList, putFilterPodcastList } from '@/redux/actions';
import { IPodcastReducer, IPodcastListDispatchProps, IPodcastListStateProps, IPodcastInitialState } from '@/types/podcasts';
import { getPodcastList } from '../../redux/selectors/podcastsSelectors';

export const mapStateToProps = (state: IPodcastListStateProps): IPodcastInitialState => ({
  isFetchingPodcastList: state.podcasts.isFetchingPodcastList,
  podcastList: getPodcastList(state),
  filter: state.podcasts.filter,
});

export const mapDispatchToProps = (dispatch: (T: IPodcastReducer) => void): IPodcastListDispatchProps => ({
  getPodcasts: () => {
    dispatch(fetchPodcastList());
  },
  searchPodcasts: (filter: string) => {
    dispatch(putFilterPodcastList(filter));
  },
});

const PodcastListContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(PodcastList);

export default PodcastListContainer;
