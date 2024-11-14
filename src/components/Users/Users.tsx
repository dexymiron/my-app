import React, { useEffect } from "react";
import n from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType, follow, requestUsers, unfollow } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/users-selectors";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../redux/redux-store";
import { AnyAction } from "redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

type UsersType = {};

export const Users: React.FC<UsersType> = () => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Загрузка данных из URL-параметров при начальной загрузке компонента
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page");
    const term = searchParams.get("term");
    const friend = searchParams.get("friend");

    const actualPage = page ? Number(page) : currentPage;
    const actualFilter: FilterType = {
      term: term || filter.term,
      friend: friend === "true" ? true : friend === "false" ? false : null,
    };

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []); // Пустой массив зависимостей, чтобы загрузка происходила только один раз при монтировании

  // Обновление URL и состояние при изменении фильтра
  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (filter.term) searchParams.set("term", filter.term);
    if (filter.friend !== null) searchParams.set("friend", String(filter.friend));
    if (currentPage !== 1) searchParams.set("page", String(currentPage));

    navigate({
      pathname: "/users",
      search: searchParams.toString(),
    });
  }, [filter, currentPage, navigate]); // Обновление URL при изменении фильтра или страницы

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter)); // При изменении фильтра сбрасываем на первую страницу
  };

  const handleFollow = (userId: number) => {
    dispatch(follow(userId));
  };

  const handleUnfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };


  return (
    <div className={n.UsersPage}>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div className={n.UsersMainContainer}>
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
      <ToastContainer />
    </div>
  );
};

