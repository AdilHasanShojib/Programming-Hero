import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users =useLoaderData();

    const handleDelete = _id=>{
        console.log("delete",_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE",

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deleteCount>0){
                alert("delete Success!");
            }

        })

    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link> <button
                    onClick={()=>handleDelete(user._id)}>Delete</button> </p>)
                }
            </div>
            
        </div>
    );
};

export default Users;