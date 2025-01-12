import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() =>{
      const storedJobIDs = getStoredJobApplication();
      if(jobs.length > 0){
        const jobApplied = jobs.filter(job =>)
      }
    },[])
    return (
        <div>
            <h2>Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;