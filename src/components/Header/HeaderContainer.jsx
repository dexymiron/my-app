import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {

      authAPI.getUsers(this.props.id, this.props.login, this.props.email)
      .then((responce) => {
        if (responce.resultCode === 0) {
          let { id, login, email } = responce.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
