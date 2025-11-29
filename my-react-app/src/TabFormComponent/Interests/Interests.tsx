const Interests = ({ data, setData, error, setError }: any) => {
  const { interests } = data;

  const onChange = (e: any, item: any) => {
    setData((prevState: any) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, item]
        : prevState.interests.filter((i: any) => i !== item),
    }));
  };
  const ALL_INTERESTS = [
    "music",
    "coding",
    "racing",
    "travelling",
    "adventure",
  ];
  return (
    <div className="row">
      {ALL_INTERESTS.map((interest: any, index: any) => (
        <>
          <div>
            <label className="d-flex col justify-content-center p-2">
              <input
                type="checkbox"
                onChange={(e) => onChange(e, interest)}
                checked={interests.includes(interest)}
              />
              {interest}
            </label>
          </div>
        </>
      ))}
    </div>
  );
};

export default Interests;
