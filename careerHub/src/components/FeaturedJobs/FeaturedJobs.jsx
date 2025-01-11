import { useEffect, useState } from "react";
import Job from "../Job/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this not the best way to load show all the data
  const [datalength, setDatalength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          Need. Its Your Future.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
      {jobs.slice(0,datalength)?.map(job => (
        <Job key={job.id} job={job}></Job>
      ))}
      </div>
      <div className={datalength === jobs.length && 'hidden'}>
        <button onClick={()=>setDatalength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
