import React, { useEffect } from "react";
import n from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
// @ts-ignore
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/users-selectors";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../redux/redux-store";
import { AnyAction } from "redux";




type UsersType = {
}




export const Users: React.FC<UsersType> = (props) => {

  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch();

  useEffect(()=>{
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, [])


  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  }

  const handleFollow = (userId: number) => {
    dispatch(follow(userId));
  };
  const handleUnfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };


  return (
    <div className={n.UsersPage}>
      <UsersSearchForm onFilterChanged= {onFilterChanged}/>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={followingInProgress}
          key={u.id}
          follow={handleFollow}
          unfollow={handleUnfollow}
        />
      ))}
    </div>
  );
};
