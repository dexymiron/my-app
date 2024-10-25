import React from "react";
//@ts-ignore
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfilePage,
  getStatus,
  updateStatus,
  saveProfile,
  savePhoto,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../redux/types/types";

// Типизация параметров маршрута
type PathParamsType = {
  userId: string | undefined;
};

// Типизация состояния из Redux
type MapPropsType = ReturnType<typeof mapStateToProps>;

// Типизация экшенов Redux
type DispatchPropsType = {
  getProfilePage: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

// Итоговый тип пропсов
type PropsType = MapPropsType & DispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
  redirectToMainUser() {
    //@ts-ignore
    const { userId } = this.props.match.params;
    let actualUserId = userId || this.props.authorizedUserId?.toString();
    
    if (actualUserId) {
      this.props.getProfilePage(+actualUserId);
      this.props.getStatus(+actualUserId);
    }
  }

  componentDidMount() {
    this.redirectToMainUser();
  }

  componentDidUpdate(prevProps: PropsType) {
    //@ts-ignore
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.redirectToMainUser();
    }
  }

  render() {
    return (
      <Profile
      //@ts-ignore
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

// Функция для получения параметров маршрута
const withRouter = (Component: React.ComponentType<PropsType>) => {
  return (props: PropsType) => {
    const params = useParams<PathParamsType>();
    //@ts-ignore
    return <Component {...props} match={{ params }} />;
  };
};

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getProfilePage,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
