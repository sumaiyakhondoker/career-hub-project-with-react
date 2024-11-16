import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobApplications } from "../../utility/Localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([])

  const handleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    }
    else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    }
  }

  const jobs = useLoaderData();
  useEffect(() => {
    const storedIds = getAppliedJobApplications();

    const jobsApplied = jobs.filter((job) => storedIds.includes(job.id));
    setAppliedJobs(jobsApplied);
    setDisplayJobs(jobsApplied)
    // console.log(jobsApplied, jobs);
  }, [jobs]);
  return (
    <div>
      <Helmet>
      <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <div className="grid grid-cols-4 bg-slate-100">
        <div className="col-span-1 ">
          <img src="../../assets/images/bg1.png" alt="" />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <h2 className="text-3xl font-extrabold">Applied Jobs</h2>
        </div>
        <div>
          <img src="../../assets/images/bg2.png" alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-16">
        {/* filter btn */}
        <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1">Filter By <IoIosArrowDown></IoIosArrowDown></summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
            <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
            <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
          </ul>
        </details>
        </div>
        <div className="my-5 space-y-4">
          {displayJobs.map((appliedJob) => (
            <AppliedJob
              key={appliedJob.id}
              appliedJob={appliedJob}
            ></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
