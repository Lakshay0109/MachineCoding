const Profile = ({ data, setData, error, showError, setShowError }: any) => {
  const { name, age, email } = data;
  const onInputChange = (e: any, item: any) => {
    setData((prevState: any) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label className="p-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onInputChange(e, "name")}
        />
        {showError && <div>Error:{error.errorMsg}</div>}
      </div>
      <div>
        <label className="p-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          value={age}
          id="age"
          onChange={(e) => onInputChange(e, "age")}
        />
        {showError && <div>Error:{error.errorMsg}</div>}
      </div>
      <div>
        <label className="p-2" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => onInputChange(e, "email")}
        />
        {showError && <div>Error:{error.errorMsg}</div>}
      </div>
    </div>
  );
};

export default Profile;
