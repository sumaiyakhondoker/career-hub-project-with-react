import {Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center my-56">
            <div className="text-center ">
          
          <h2>Oops!! <br />{error.status}</h2>
          <p><i>
              {error.statusText || error.message}
          </i></p>
          {
              error.status === 404 && <div>
                  <p>Go back where you from.</p>
                  <Link to= '/'><button className=" mt-3 btn bg-violet-400 text-white">Home</button></Link>

              </div>
          }
      </div>
        </div>
    );
};

export default ErrorPage;