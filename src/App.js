import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import { retrieveUserInfoService } from "./Services/allServices";
import MySpinner from "./Ui/MySpinner";

function App() {
  const cookie = new Cookies();
  const userAccessToken = cookie.get("userToken");
  const [loading, setLoading] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const setGUserData = useStoreActions((actions) => actions.setGUserData);
  
  const getUserInfo = (username) => {
    setLoading(true);
    retrieveUserInfoService(username).then((res) => {
      if (res.succeeded) {
        setLoading(false);
        setGUserData(res.data);
        setIsLogedIn(true);
      }
    });
  };
  useEffect(() => {
    if (userAccessToken) {
      getUserInfo(userAccessToken);
    }
  }, [userAccessToken]);
  return (
    <>
      {loading ? (
        <div className="w-100 loadingContainer d-flex align-items-center justify-content-center">
          <MySpinner />
        </div>
      ) : (
        <>{isLogedIn ? <Home /> : <Login />}</>
      )}
    </>
  );
}

export default App;
