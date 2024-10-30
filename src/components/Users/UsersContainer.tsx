import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  requestUsers,
  actions,
  FilterType,
} from "../../redux/users-reducer";
// @ts-ignore
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
//import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsersFilter,
  // @ts-ignore
} from "../../redux/users-selectors";
import { UserType } from "../../redux/types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  isFetching: boolean
  totalUsersCount:number
  currentPage:number
  followingInProgress: Array<number>
  filter: FilterType
}

type MapDispatchToPropsType = {
  toggleFolowingProgress: (isFetching: boolean, userId:number) => void
  follow: (userId:number) => void
  unfollow: (userId:number) => void
  requestUsers: (pageNumber: number, pageSize: number, filter: FilterType) => void
  setCurrentPage: (pageNumber: number) => void
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { pageSize, currentPage, filter} = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (pageNumber:number) => {
    const { pageSize, filter } = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize} = this.props;
    this.props.requestUsers(1, pageSize, filter);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFolowingProgress={this.props.toggleFolowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}


let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state),
  };
};

export default compose(
  //withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>( mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
    toggleFolowingProgress: actions.toggleFolowingProgress,
    setCurrentPage: actions.setCurrentPage,       
  })
)(UsersContainer);
