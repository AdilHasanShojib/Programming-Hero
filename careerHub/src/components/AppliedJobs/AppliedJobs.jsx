import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);  
  
  const handleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }

    else if(filter === 'remote'){
       const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
       setDisplayJobs(remoteJobs);
    }

    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
     }
 

    
  }




  useEffect(() => {
    const storedJobIDs = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIDs.includes(job.id));

      //console.log(jobs,storedJobIDs,jobApplied);
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li  onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li  onClick={()=>handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name} : {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
