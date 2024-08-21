import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfilePage } from "../../redux/profile-reducer";
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
      userId = 31253; // Устанавливаем ID по умолчанию
    }
    this.props.getProfilePage(userId); // Запрашиваем данные профиля
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
    return <Profile profile={this.props.profile} />;
  }
}

// Подключение состояния из Redux
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getProfilePage }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
