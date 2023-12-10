import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  function startRegister() {
    navigate("/register");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to TimeChat!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get TimeChat ready for everyone! While we
          finalize the last details, we’re gradually adding people to ensure
          nothing breaks.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link className={styles.signInLink} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
