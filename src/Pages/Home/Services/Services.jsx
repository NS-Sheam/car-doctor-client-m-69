import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(`https://car-doctor-server-pi.vercel.app/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [search ,asc])
    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    return (
        <div className="mt-4 mb-4" id="#services">
            <div className="text-center lg:w-1/2 mx-auto">
                <h3 className="lg:text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-2xl lg:text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                <button
                    className="px-2 py-3 bg-orange-500 text-white hover:text-orange-500 border hover:border hover:border-orange-500 rounded-md hover:bg-white my-4"
                    onClick={() => setAsc(!asc)}>{asc ? "Price High to Low" : "Price Low to High"}</button>
                <div className="form-control">
                    <div className="input-group">
                        <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;