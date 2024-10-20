import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [jobLength, setJobLength] = useState(4)
    const handleSeeAllBtn = () =>{
        setJobLength(jobs.length)
    }
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
  return (
    <div>
      <div className="text-center ">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        
       {
        jobs.slice(0,jobLength).map(job => <Job key={job.id} job={job}></Job>)
       }
      </div>

      <div className={`text-center my-6  ${jobLength === jobs.length ? 'hidden': ''}` }>
      <button onClick={handleSeeAllBtn} className="btn px-6 text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  border-none">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
