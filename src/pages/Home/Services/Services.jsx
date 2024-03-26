import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    console.log(services);

    return (
        <div className="mt-10">
            <div className="text-center space-y-5">
                <h2 className="text-xl text-orange-600">Services</h2>
                <h3 className="text-5xl">Our Services Area</h3>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => {
                        return <ServiceCard key={service._id} service={service}></ServiceCard>
                    })
                }
            </div>
        </div>
    );
};

export default Services;