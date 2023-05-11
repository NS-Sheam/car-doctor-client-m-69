
import { FaArrowRight } from 'react-icons/fa';
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-3/4">
                <img src={img} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-orange-500 font-bold">Price: ${price}</p>
                    <button className="btn btn-circle btn-outline text-orange-500 border-orange-500 hover:bg-orange-500 hover:border-0">
                    <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;