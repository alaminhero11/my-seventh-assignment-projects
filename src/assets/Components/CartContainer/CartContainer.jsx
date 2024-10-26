/* eslint-disable react/prop-types */

import AllPlayers from "../AllPlayers/AllPlayers";
import SelectPlayers from "../SelectPlayers/SelectPlayers";


const CartContainer = ({ handleActiveStatus, isActive, handleSelectPlayer, selectPlayers, handleDelete }) => {

    return (
        <div className="mt-24">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Available Players({selectPlayers.length}/6)</h3>
                <div>
                    <button onClick={() => handleActiveStatus("AllPlayers")} className={`${isActive.AllPlayers ? "bg-amber-300 w-28 h-12 text-base font-medium rounded-l-xl" : "w-28 h-12 text-base font-medium rounded-l-xl border border-solid border-gray-200"}`}>Available</button>
                    <button onClick={() => handleActiveStatus("SelectPlayers")} className={`${isActive.AllPlayers ? " w-28 h-12 text-base font-medium rounded-r-xl border border-solid border-gray-200" : "bg-amber-300 w-28 h-12 text-base font-medium rounded-r-xl"}`}>Selected ({selectPlayers.length})</button>
                </div>
            </div>
            {
                isActive.AllPlayers ? <AllPlayers handleSelectPlayer={handleSelectPlayer}></AllPlayers> :
                    <SelectPlayers selectPlayers={selectPlayers} handleDelete={handleDelete}></SelectPlayers>
            }
        </div>
    );
};

export default CartContainer;