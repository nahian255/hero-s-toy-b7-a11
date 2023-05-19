
import img3 from "../../../assets/img10 (10).jpg"

const Other = () => {
    return (
        <div>
            <h1 className='text-green-400 text-4xl my-12'>Best Seller Product</h1>
            <div className="card lg:card-side bg-base-100 my-14  shadow-xl">
                <div className="w-1/2">
                    <figure><img src={img3} className="object-cover" alt="Album" /></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="card-title">Spider Man Toy</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other;