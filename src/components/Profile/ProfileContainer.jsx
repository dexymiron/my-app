import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    const id = userId || 1;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, [userId, setUserProfile]);

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
