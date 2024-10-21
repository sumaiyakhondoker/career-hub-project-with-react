import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TiLocationOutline } from "react-icons/ti";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
const AppliedJob = ({ appliedJob }) => {
  // console.log(appliedJob);

  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = appliedJob;
  return (
    <div className="grid grid-cols-5 gap-3 border rounded-lg">
        <div className=" p-6">
            <img className="rounded-lg bg-gray-100 w-56 px-6 py-12 " src={logo} alt="" />
        </div>
        <div className="col-span-3 items-center my-auto">
        <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="my-2">
            
            <button className="btn text-violet-500 border-2 border-violet-400 mr-3">{remote_or_onsite}</button>
            <button className="btn text-violet-500 border-2 border-violet-400">{job_type}</button>
            </div>

            <div className="flex gap-6 my-4">
                <h2 className="flex items-center"><TiLocationOutline className="text-xl mr-2"></TiLocationOutline>{location}</h2>
                <h2 className="flex items-center"><PiCurrencyCircleDollarLight className="text-xl mr-2"></PiCurrencyCircleDollarLight>{salary}</h2>
            </div>
           
        </div>
        <div className="flex justify-center items-center">
        <Link to={ `/job/${id}`}>
        <button className="btn px-6 text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">View Details</button>
        </Link>
        </div>

    </div>
  );
};

AppliedJob.propTypes = {
  appliedJob: PropTypes.object,
};

export default AppliedJob;
