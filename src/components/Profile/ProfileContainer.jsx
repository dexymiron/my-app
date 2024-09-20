import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfilePage,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// Функция withRouter для передачи параметров маршрута
function withRouter(Component) {
  return function ComponentWithRouterProps(props) {
    const match = { params: useParams() }; // Получаем параметры маршрута
    return <Component {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  // Логика для получения userId и вызова API
  redirectToMainUser() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;

      /*  console.log("userId:", userId);
      console.log("authorizedUserId:", this.props.authorizedUserId);  */
    }
    this.props.getProfilePage(userId);
    this.props.getStatus(userId);
  }
  // Метод вызывается при монтировании компонента
  componentDidMount() {
    this.redirectToMainUser();
  }

  // Метод вызывается при обновлении компонента
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.redirectToMainUser();
    }
  }

  // Метод render возвращает JSX
  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

// Подключение состояния из Redux
let mapStateToProps = (state) => ({
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
