import BannerImg from "../../../assets/Components/Images/banner-main.png"

const Banner = ({ handleClaimPrice }) => {
    return (
        <div>
            <div className="w-full h-full bg-cover bg-no-repeat bg-black rounded-3xl mt-7" style={{ backgroundImage: 'url(https://i.ibb.co.com/HDwvK1C/bg-shadow.png)' }}>
                <div className="text-center py-24">
                    <img className="mx-auto" src={BannerImg} alt="" />
                    <h3 className="text-4xl font-bold text-white mt-10">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                    <p className="text-white text-base font-medium my-7">Beyond Boundaries Beyond Limits</p>
                    <span className="border border-solid border-amber-300 rounded-2xl py-5 px-2">
                        <button onClick={handleClaimPrice} className="bg-amber-300 w-40 h-12 text-base font-medium rounded-xl">Claim Free Credit</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;