const getAppliedJobApplications = ()=>{
    const storedAppliedJobApplications = localStorage.getItem('job-applications');
    if(storedAppliedJobApplications){
        return JSON.parse(storedAppliedJobApplications)
        
    }
    return [];
}

const setAppliedJobApplications = (id)=>{
    const storedAppliedJobApplications = getAppliedJobApplications()
    const exist = storedAppliedJobApplications.find(jobId => jobId === id)
    if(!exist){
        storedAppliedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedAppliedJobApplications))
    }
}

export {getAppliedJobApplications, setAppliedJobApplications}