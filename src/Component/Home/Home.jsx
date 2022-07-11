import { useStoreState } from "easy-peasy";
import React from "react";
import Cookies from "universal-cookie";
import Mybutton from "../../Ui/Mybutton";
import MyCard from "../../Ui/MyCard";

function Home() {
  const gUserData = useStoreState((state) => state.gUserData);
  const cookie = new Cookies();

  const logOutHandler = () => {
    cookie.remove("userToken")
    window.location.reload()
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-100 d-flex align-items-center justify-content-between p-3 bg-dark">
          {gUserData?.username && (
            <span className="text-white">
              welcome back{" "}
              <span className="text-info">{gUserData?.username}</span>
            </span>
          )}
          <div className="d-flex align-items-center justify-content-center">
            <span className="text-white me-3">
              your main postal code :{" "}
              <span className="text-info">{gUserData?.postal_code}</span>
            </span>
            <Mybutton
              btnTypColor="btn-danger"
              childColor="text-white"
              myOnClick={logOutHandler}
            >
              log out
            </Mybutton>
          </div>
        </div>
      </div>
      {gUserData?.addresses?.length > 0 && (
        <div className="row">
          <h1 className="text-center">Addresses:</h1>
          <div className="col-12 d-flex flex-wrap align-items-start justify-content-center mt-4">
            {gUserData?.addresses?.map((address, key) => (
              <MyCard
                key={key}
                width="200px"
                cardTitle={address?.title}
                cardText={address?.address}
                cardSubTitle={
                  address.type === "mainAddress" ? "main address" : false
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
