const Home = () => {
  const handleClick = () => {
    alert("Hello World");
  };
  const handleClickAgain = (name) => {
    alert("Hello World" + name);
  };
  return (
    <div className="Home">
      <div className="container-fluid">
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          error totam obcaecati accusamus reiciendis amet tenetur velit,
          corrupti, ut dignissimos maiores nihil, nisi ducimus at culpa dolore
          nulla mollitia natus.
        </p>
        <button
          type="button"
          class="btn btn-outline-primary"
          style={{
            fontWeight: "700",
          }}
          onClick={handleClick}
        >
          Click Me
        </button>

        <button
          type="button"
          class="btn btn-primary ml-5"
          onClick={() =>{
              handleClickAgain(" Mario")
          }}
        >
          Click Me again
        </button>
      </div>
    </div>
  );
};

export default Home;
