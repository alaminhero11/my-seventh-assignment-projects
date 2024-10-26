import { useEffect, useState } from "react";
import CardPlayer from "../CardPlayer/CardPlayer";



const AllPlayers = ({ handleSelectPlayer }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`fakeData.json`)
            .then(response => response.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-9 my-10">
            {
                players.map((players) => <CardPlayer key={players.price} players={players} handleSelectPlayer={handleSelectPlayer}></CardPlayer>)
            }
        </div>
    );
};

export default AllPlayers;