import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CompanyPage = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const section = query.get("section");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [section]);

    const renderContent = () => {
        switch (section) {
            case "about":
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-6">About Us</h1>
                        <img
                            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                            className="w-full h-80 object-cover rounded-lg mb-6"
                            alt="about"
                        />
                        <p>We are building a Netflix-style streaming experience with modern tech.</p>
                    </>
                );

            case "careers":
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-6">Careers</h1>
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            className="w-full h-80 object-cover rounded-lg mb-6"
                            alt="careers"
                        />
                        <p>Join our growing team and build scalable entertainment platforms.</p>
                    </>
                );

            case "contact":
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-6">Contact</h1>
                        <img
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                            className="w-full h-80 object-cover rounded-lg mb-6"
                            alt="contact"
                        />
                        <p>Email: support@netflixclone.com</p>
                    </>
                );

            default:
                return <h1>Select a section</h1>;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-16 pt-24">
            {renderContent()}
        </div>
    );
};

export default CompanyPage;
