
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser= useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form=e.target;
        const name= form.name.value;
        const email= form.email.value;
        console.log(name, email);
        const updatedUser = {name,email};

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)

        }).then(res=> res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount>0){
                alert('Updated user successfully');
            }
        })

    }
    return (
        <div>
            <h3>Updated Information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name}/>
                <input type="email" name="email" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;