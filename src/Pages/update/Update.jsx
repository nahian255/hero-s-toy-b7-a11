import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedToy = useLoaderData()
    console.log(loadedToy);

    const handelUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const price = form.price.value
        const avilableQuantity = form.quantity.value
        const detail = form.description.value
        const updateToys = { price, avilableQuantity, detail }
        console.log(updateToys);

        fetch(`https://b7a11-toy-marketplace-server-side-nahian255-theta.vercel.app/mytoys/${loadedToy._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateToys),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated succesfully')
                }
            })
    }

    return (
        <div>
            <h1>update {loadedToy.name}</h1>

            <form onSubmit={handelUpdate}>
                <input type="text" name='price' defaultValue={loadedToy.price} placeholder="Price" className="input input-bordered input-warning w-full max-w-xs" /> <br />
                <input type="text" name='quantity' defaultValue={loadedToy.avilableQuantity
                } placeholder="available quantity" className="input input-bordered input-error w-full max-w-xs" /> <br />
                <input type="text" name='description' defaultValue={loadedToy.detail
                } placeholder="Detail description" className="input input-bordered input-warning w-full max-w-xs" /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;