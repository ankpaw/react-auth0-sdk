import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../shared/loading/loading";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome to our website {props.name}!</h1>
      <img src={props.picture} alt="profile-picture" className="img-thumbnail" />
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  return (
    <div className="container">
      <Welcome name={name} picture={picture} />
      <div>{email}</div>
    </div>
  );
};
export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});
