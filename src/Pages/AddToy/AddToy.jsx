import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toyContex } from '../../provider/ToyProvider';
import useTitle from '../../hook/useTitle';



const AddToy = () => {

    const { user } = useContext(toyContex)
    useTitle('Add Toys')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.sellerName = user.displayName
        data.sellerEmail = user.email
        fetch("https://b7a11-toy-marketplace-server-side-nahian255-theta.vercel.app/addtoy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('toy added succesfully')
                    form.reset()
                }
            });
        // console.log(data);
    };



    return (
        <div>
            <h1 className='text-4xl text-green-600 my-8'>Add Toys</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" {...register("name")} /> <br />

                <input placeholder="img-url" className="input input-bordered input-accent w-full max-w-xs py-4" {...register("imgUrl")} /> <br />

                <input placeholder="sub-category" className="input input-bordered input-accent w-full max-w-xs" {...register("subCategory")} /> <br />

                <div className=''>
                    <input placeholder="price" className="input input-bordered input-accent w-full max-w-xs" {...register("price")} />
                </div> <br />

                <input placeholder="Quantity" className="input input-bordered input-accent w-full max-w-xs" {...register("avilableQuantity")} /> <br />

                <input placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" {...register("detail")} /> <br />


                <button className="btn btn-success my-4"><input type="submit" /></button>


            </form>
        </div>
    );
};

export default AddToy;