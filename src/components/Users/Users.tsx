import React from "react";
import n from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
// @ts-ignore
import User from "./User";
import { UserType } from "../../redux/types/types";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType } from "../../redux/users-reducer";



type UsersType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber:number) => void
  onFilterChanged: (filter: FilterType) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  toggleFolowingProgress: (isFetching: boolean, userId:number) => void
  follow: (userId:number) => void
  unfollow: (userId:number) => void
}


let Users: React.FC<UsersType> = ({ 
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className={n.UsersPage}>
      <UsersSearchForm onFilterChanged= {props.onFilterChanged}/>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};



export default Users;
