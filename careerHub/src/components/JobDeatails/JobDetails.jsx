import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplictaion } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const job=jobs.find(job=>job.id === idInt);

    const handleAppliedJob = ()=>{
        toast("You have applied successfully!");
        saveJobApplictaion(idInt);

    }
    return (
        <div>
            <Helmet>
                <title>Job Details:{id}</title>
            </Helmet>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2>Job Details Of: {job.job_title} </h2>
                    <p>{job.company_name}</p>

                </div>

                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleAppliedJob} className="btn btn-primary w-full">APPLY NOW</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;