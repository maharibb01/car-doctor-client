import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-20 md:gap-28 lg:gap-0 lg:flex-row items-center">
                <div className="lg:flex-1 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-2/3 rounded-lg shadow-2xl absolute top-1/2 left-1/4 border-8 border-white" />
                </div>
                <div className="lg:flex-1">
                    <h3 className="text-xl mb-5 font-bold text-orange-600">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-2 mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
                    <button className="btn bg-orange-600 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;