const Profile = ({ data, setData, error, setError }: any) => {
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
        {error && <div>Error:{error}</div>}
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
        {error && <div>Error:{error}</div>}
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
        {error && <div>Error:{error}</div>}
      </div>
    </div>
  );
};

export default Profile;
