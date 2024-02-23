const Error404 = () => {
  return (
    <div className="container my-5 container_error">
      <div className="row">
        <div className="col text-center">
          <img
            className="fs-5"
            src="https://i.postimg.cc/bwFsm63R/trex.png"
            width={100}
            alt=""
          />
          <h1 className="display-3 texto_error">Error 404</h1>
          <h3 className="display-5 texto_error">
            The page you are looking for does not exist!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Error404;
