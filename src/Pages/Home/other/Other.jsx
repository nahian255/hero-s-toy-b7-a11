
import img3 from "../../../assets/img10 (10).jpg"

const Other = () => {
    return (
        <div data-aos="fade-up-right">
            <h1 data-aos="fade-up-right" className='text-green-400 text-4xl my-12'>Best Seller Product</h1>
            <div className="card lg:card-side bg-base-100 my-14  shadow-xl">
                <div className="w-1/2">
                    <figure><img src={img3} className="object-cover" alt="Album" /></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="card-title">Spider Man Toy</h2>
                    <p className='text-green-200 text-xl my-2'>Deatiles : That's is the Our best seeler product.</p>
                    <p>Like his namesake, Spider-Man's strength and agility stand far above those of the average human, allowing him to lift nearly ten tons and to leap and move at incredible speeds with high accuracy. He also heals faster than normal when injured, though he is not completely immune to viruses and other human ailments.</p>
                    <button className="bg-red-200 text-black">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Other;