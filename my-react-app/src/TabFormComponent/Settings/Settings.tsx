const Settings = ({ data, setData, error, setError }: any) => {
  const { theme } = data;
  const onChange = (e: any) => {
    setData((prevState: any) => ({
      ...prevState,
      theme: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          id="d"
          name="theme"
          checked={theme === "dark"}
          onChange={(e) => onChange(e)}
          value="dark"
        />
        <label htmlFor="d">Dark</label>
      </div>
      <div>
        <input
          type="radio"
          id="l"
          name="theme"
          onChange={onChange}
          checked={theme === "light"}
          value="light"
        />
        <label htmlFor="l">Light</label>
      </div>
    </div>
  );
};

export default Settings;
