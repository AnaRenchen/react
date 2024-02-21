const Loading = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col text-center">
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
