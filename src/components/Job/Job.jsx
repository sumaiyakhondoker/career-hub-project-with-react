import { TiLocationOutline } from "react-icons/ti";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Job = ({job}) => {
        
        const {id,logo,job_title,company_name,remote_or_onsite, location,job_type,salary} = job
    return (
        <div>
             <div className="card bg-base-100 border shadow-xl ">
          <div className="card-body">
            <figure>
            <img className='my-8' src={logo} alt="" />
            </figure>
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div>
            
            <button className="btn text-violet-500 border-2 border-violet-400 mr-3">{remote_or_onsite}</button>
            <button className="btn text-violet-500 border-2 border-violet-400">{job_type}</button>
            </div>

            <div className="flex gap-6 my-4">
                <h2 className="flex items-center"><TiLocationOutline className="text-xl mr-2"></TiLocationOutline>{location}</h2>
                <h2 className="flex items-center"><PiCurrencyCircleDollarLight className="text-xl mr-2"></PiCurrencyCircleDollarLight>{salary}</h2>
            </div>
           
            <div className="card-actions ">
             <Link to={ `/job/${id}`}>
             <button className="btn px-6 text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">View Details</button>
             </Link>
            </div>
          </div>
        </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
};

export default Job;