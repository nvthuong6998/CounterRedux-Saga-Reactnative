import PostComponent from '../components/PostComponent';
import {connect} from 'react-redux';
import {getListPost, getListPostSuccess} from '../actions/PostActions';

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListPostAction: () => dispatch(getListPost()),
  };
};

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostComponent);

export default PostContainer;
