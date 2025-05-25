import { useLoaderData, useParams } from 'react-router-dom';
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { setAppliedJobApplications } from '../../utility/Localstorage';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const JobDetails =() => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    // console.log(id, jobs);
    const job = jobs.find(job => job.id === idInt)
    // console.log(job);
    const {job_description, job_responsibility,educational_requirements,experiences, salary, job_title,contact_information} = job

    const {email, phone, address} = contact_information

    const handleApplyJob = ()=>{
        toast("You Have Applied Successfully!!");
        setAppliedJobApplications(idInt)
    }


    return (
        <div>
            <Helmet>
                <title>Job Details: {id}</title>
            </Helmet>
            <div className='grid grid-cols-4 bg-slate-100'>
                <div className='col-span-1 '><img  src="/bg1.png" alt="" /></div>
                <div className='col-span-2 flex justify-center items-center'><h2 className='text-3xl font-extrabold'>Jobs Details</h2></div>
                <div><img src="/bg2.png" alt="" /></div>
            </div>

            <div className='max-w-7xl mx-auto my-16 grid grid-cols-3 gap-6'>
                <div className='col-span-2  space-y-6'>
                    <p><span className="font-bold">Job Description:</span> {job_description}</p>
                    <p><span className="font-bold">Job Responsibility :</span> {job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements: </span><br /> {educational_requirements}</p>
                    <p><span className="font-bold">Experiences: </span> <br /> {experiences}</p>
                    
                </div>
                <div className=''>
                    <div className='bg-violet-100 p-4 rounded-lg space-y-3'>
                        <div className='p-3'>
                        <h2 className='font-extrabold pb-3 border-gray-300 border-b-2'>Job Details</h2>
                        <p className='py-2 flex'><PiCurrencyCircleDollar className='mr-2 text-2xl text-violet-500'></PiCurrencyCircleDollar><span className='font-bold'>Salary: </span> {salary}</p>
                        <p className=' flex'><SlCalender className='mr-2 text-lg text-violet-500'></SlCalender><span className='font-bold'>Job Title: </span> {job_title}</p>
                        </div>
                        <div >
                        <h2 className='font-extrabold pb-3 border-gray-300 border-b-2'>Contact Information</h2>
                        <p className='pt-3 flex'><FiPhone className='mr-2 text-xl text-violet-500'></FiPhone><span className='font-bold'>Phone: </span>   {phone}</p>
                        <p className='pt-3 flex'><FaRegEnvelope className='mr-2 text-xl text-violet-500'></FaRegEnvelope><span className='font-bold'>Email: </span> {email}</p>
                        <p className='pt-3 flex'><TfiLocationPin className='mr-2 text-2xl text-violet-500'></TfiLocationPin><span className='font-bold'>Address: </span> {address}</p>

                        </div>
                    </div>

                    <div className='mt-6'>
                    <button onClick={handleApplyJob}  className="btn w-full  text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  border-none">Apply Now</button>
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};



export default JobDetails;