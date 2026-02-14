import { Link } from "react-router-dom";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-400 px-12 py-12 mt-20 border-t border-gray-800">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link to="/company?section=about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/company?section=careers" className="hover:text-white">Careers</Link></li>
                        <li><Link to="/company?section=contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Browse */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Browse</h3>
                    <ul className="space-y-2">
                        <li><Link to="/browser#popular" className="hover:text-white">Popular Movies</Link></li>
                        <li><Link to="/browser#toprated" className="hover:text-white">Top Rated</Link></li>
                        <li><Link to="/browser#upcoming" className="hover:text-white">Upcoming</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://policies.google.com/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Info</h3>
                    <p className="text-gray-500">
                        Unlimited movies, TV shows and more.
                    </p>
                </div>

            </div>

            <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500 flex justify-between">
                <span>© {currentYear} Aftab Khan. All rights reserved.</span>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-white"
                >
                    Back to Top ↑
                </button>
            </div>

        </footer>
    );
};

export default Footer;
