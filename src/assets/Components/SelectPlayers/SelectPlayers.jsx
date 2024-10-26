

const SelectPlayers = ({ selectPlayers, handleDelete }) => {

    return (
        <div className="">
            {
                selectPlayers.map(players => (

                    <div className="border-2 border-solid border-gray-300 rounded-xl py-7 px-5 mt-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-7">
                                <img className="w-20 h-20 rounded-2xl" src={players.image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{players.name}</h3>
                                    <p className="font-semibold text-gray-500">{players.batting}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(players.id)}>Delete</button>
                        </div>
                    </div>

                ))
            }
            <span className="border border-solid border-amber-300 rounded-2xl py-5 px-2 my-36">
                <button className="bg-amber-300 w-40 h-12 text-base font-medium rounded-xl">Add More Player</button>
            </span>
        </div>
    );
};

export default SelectPlayers;