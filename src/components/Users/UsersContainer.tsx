import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {Users} from "./Users";
// @ts-ignore
import Preloader from "../common/preloader/preloader";
//import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getIsFetching
  // @ts-ignore
} from "../../redux/users-selectors";



type UsersPagePropsType = {
  pageTitle?: string
}

export const UsersPage:React.FC<UsersPagePropsType> = (props) => {
  

  const isFetching = useSelector(getIsFetching);
  

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users/>
    </>
  );
}