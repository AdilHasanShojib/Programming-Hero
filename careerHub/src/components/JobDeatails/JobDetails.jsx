import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const job=jobs.find(job=>job.id === idInt);
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2>Job Details Of: {job.job_title} </h2>
                    <p>{job.company_name}</p>

                </div>

                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button className="btn btn-primary w-full">APPLY NOW</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;