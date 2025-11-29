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
        return (
          <Profile
            data={data}
            setData={setData}
            error={error}
            setError={setError}
          />
        );
      case "Interests":
        return (
          <Interests
            data={data}
            setData={setData}
            error={error}
            setError={setError}
          />
        );
      case "Settings":
        return (
          <Settings
            data={data}
            setData={setData}
            error={error}
            setError={setError}
          />
        );
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
  const onSubmit = () => {
    console.log(data);
  };

  const onNext = (btns: any) => {
    const currentIndex = btns.indexOf(active);
    setActive(btns[currentIndex + 1]);
  };

  const onPrev = (btns: any) => {
    const currentIndex = btns.indexOf(active);
    setActive(btns[currentIndex - 1]);
  };

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
        </div>
        {btns.indexOf(active) > 0 && (
          <button
            className="m-2 p-2 border-black bg-secondary bg-danger text-white rounded"
            onClick={() => onPrev(btns)}
          >
            Back
          </button>
        )}
        {btns.indexOf(active) < btns.length - 1 && (
          <button
            className="m-2 p-2 border-black bg-secondary bg-danger text-white rounded"
            onClick={() => onNext(btns)}
          >
            Next
          </button>
        )}
        {btns.indexOf(active) === btns.length - 1 && (
          <button
            className="m-2 p-2 border-black bg-secondary bg-danger text-white rounded"
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </center>
    </>
  );
};

export default Tab;
