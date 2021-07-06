import {REQUEST_API_DATA} from '../actions/actionType';
import UserComponent from '../components/UserComponent';
import {connect} from 'react-redux';
import {requestApiData} from '../actions/UserActions';

const mapStateToProps = state => {
  return {state};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(requestApiData()),
  };
};

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserComponent);

export default UserContainer;
