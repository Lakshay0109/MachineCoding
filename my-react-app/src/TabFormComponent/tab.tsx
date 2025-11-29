import { useState } from "react";
import Profile from "./Profile/Profile";
import Interests from "./Interests/Interests";
import Settings from "./Settings/Settings";
import "./tab.css";

const Tab = () => {
  const [data, setData] = useState<any>({
    name: "Lakshay",
    age: 26,
    email: "lakshay@gmail.com",
    interests: ["music", "coding"],
    theme: "dark",
  });
  const [active, setActive] = useState<any>("Profile");
  const [error, setError] = useState("");
  const btns = ["Profile", "Interests", "Settings"];

  const renderContent = () => {
    switch (active) {
      case "Profile":
        return <Profile data={data} setData={setData} setError={setError} />;
      case "Interests":
        return <Interests />;
      case "Settings":
        return <Settings />;
    }
  };

  function btnClick(item: any) {
    if (item === "Profile") {
      setActive("Profile");
    } else if (item === "Interests") {
      setActive("Interests");
    } else if (item === "Settings") {
      setActive("Settings");
    }
  }
  const onSubmit = () => {};

  return (
    <>
      <center>
        <h3>Tab Component</h3>
        <div className="main-tab w-50 ">
          <div className="d-flex justify-content-center">
            {btns.map((item, index) => (
              <button
                key={index}
                className="m-2 p-2 border-black bg-secondary bg-success text-white rounded"
                onClick={() => {
                  btnClick(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div>{renderContent()}</div>
          <button
            className="m-2 p-2 border-black bg-secondary bg-danger text-white rounded"
            onClick={onSubmit}
          >
            Next
          </button>
        </div>
      </center>
    </>
  );
};

export default Tab;
