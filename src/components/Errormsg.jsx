const Errormsg = ({ HandleOnClick }) => {
  return (
    <>
      <center className="errormsg flex  text-5xl text-center h-96  w-full align-middle align ">
        <h1>
          You have read all the Posts.
          <button
            className="btn btn-error w-32 ml-16 bg-blue-700 border-none hover:bg-lime-600 text-white"
            onClick={HandleOnClick}
          >
            Back to previous posts.
          </button>
        </h1>
      </center>
    </>
  );
};

export default Errormsg;
