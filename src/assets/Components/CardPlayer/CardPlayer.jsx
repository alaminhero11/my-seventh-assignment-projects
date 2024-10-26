/* eslint-disable react/prop-types */

const CardPlayer = ({ players, handleSelectPlayer }) => {

    const { name, country, batting, role, price, image } = players;

    return (
        <div className="">
            <div className="border border-solid border-gray-200 py-7 px-7 rounded-lg">
                <div className="border border-solid border-gray-200 py-3 px-3 rounded-lg">
                    <img className="w-full h-80 bg-cover mx-auto rounded-lg" src={image} alt="" />
                </div>
                <div className="my-5">
                    <h3 className="text-xl font-semibold my-1">{name}</h3>
                    <div className="flex justify-between items-center my-1">
                        <div className="">
                            <i className="fa-solid fa-user"></i>
                            <h3 className="text-base font-normal">{country}</h3>
                        </div>
                        <h3 className="text-base font-medium bg-gray-100 py-2 px-4 rounded-lg">{role}</h3>
                    </div>
                </div>
                <hr />
                <h3 className="text-base font-bold mt-2">Rating</h3>
                <div className="flex justify-between my-1">
                    <h3 className="text-base font-semibold">{batting}</h3>
                    <h3 className="text-base font-medium text-gray-400">{batting}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3>Price: {price}</h3>
                    <button onClick={() => handleSelectPlayer(players)} className="border border-solid border-gray-200 py-2 px-4 rounded-lg text-base font-medium text-gray-600">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default CardPlayer;