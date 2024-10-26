

const Newsletter = () => {
    return (
        <div className="border border-solid border-gray-400 rounded-3xl p-3 mx-auto">
            <div className="w-full h-full bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/HDwvK1C/bg-shadow.png)' }}>
                <div className="text-center py-24">
                    <h3 className="text-4xl font-bold text-black mt-10">Subscribe to our Newsletter</h3>
                    <p className="text-gray-500 text-base font-medium my-7">Get the latest updates and news right in your inbox!</p>
                    <div className="join my-3">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item w-96" />
                        <button className="btn bg-amber-300 hover:bg-amber-300 join-item">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;