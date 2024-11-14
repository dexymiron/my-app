import {actions} from "../../../redux/profile-reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from '../../../redux/redux-store';
 
const mapStateToProps = (state: AppStateType): MapPropsType => ({
    posts: state.profilePage.posts,
  });
  
  const mapDispatchToProps: DispatchPropsType = {
    addPost: actions.addPostActionCreator,
  };
  
  const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
  )(MyPosts);
  
  export default MyPostsContainer;