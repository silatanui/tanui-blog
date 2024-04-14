const Remember = () => {
  const handleClick = () => {
    alert("Hello Word of JSX");
  };
  const handleClickAgain = (name) => {
    console.log(handleClick + name);
  };

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-outline-primary mt-4"
        onClick={handleClick}
      >
        Remember
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mt-4 ml-3"
        onClick={() => {
          handleClickAgain("John");
        }}
      ></button>
    </div>
  );
};

export default Remember;
