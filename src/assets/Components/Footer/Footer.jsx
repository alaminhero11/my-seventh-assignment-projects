import FooterLogo from "../../Components/Images/logo-footer.png"

const Footer = () => {
    return (
        <div>
            <div className="bg-slate-950">
                <footer className="pt-36 w-10/12 mx-auto">
                    <img className="mx-auto" src={FooterLogo} alt="" />
                    <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-7 text-white text-base-content py-10 ml-32">
                        <nav>
                            <h6 className="text-lg font-semibold text-white">About Us</h6>
                            <p className="text-base font-normal text-gray-400 mt-5">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </nav>
                        <nav>
                            <h6 className="text-lg font-semibold text-white">Quick Links</h6>
                            <li className="link link-hover text-base font-normal text-gray-400">Home</li>
                            <li className="link link-hover text-base font-normal text-gray-400">Services</li>
                            <li className="link link-hover text-base font-normal text-gray-400">About</li>
                            <li className="link link-hover text-base font-normal text-gray-400">Contact</li>
                        </nav>
                        <form className="md:mt-7 lg:mt-0">
                            <h6 className="text-lg font-semibold text-white">Subscribe</h6>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text text-gray-400 text-base font-normal">Subscribe to our newsletter for the <br /> latest updates.</span>
                                </label>
                                <div className="join my-3">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="input input-bordered join-item" />
                                    <button className="btn bg-amber-300 hover:bg-amber-300 join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </footer>
                <hr />
                <div className="text-center py-7">
                    <p className="text-base font-medium text-gray-500">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;