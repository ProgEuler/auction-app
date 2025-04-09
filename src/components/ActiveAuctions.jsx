import React from 'react'
import AuctionItems from './AuctionItems'
import FavoriteItems from './FavoriteItems'
import { useState } from 'react'

export default function ActiveAuctions() {
    const [players, setPlayers] = useState([]);
    const [favPlayers, setFavPlayers] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const addToFavorites = (player) => {
        setFavPlayers([...favPlayers, player]);
    };

    const removeFromFavorites = (playerId) => {
        setFavPlayers(favPlayers.filter(player => player.id !== playerId));
        setPlayers(prevPlayers =>
            prevPlayers.map(player =>
                player.id === playerId ? { ...player, disabled: false } : player
            )
        );
    };

    return (
        <div className="p-4 lg:p-14">
            <h1 className='text-2xl font-semibold'>Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>
            <div className='flex mt-8 gap-4'>
                <AuctionItems
                    players={players}
                    setPlayers={setPlayers}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    addToFavorites={addToFavorites}
                />
                <FavoriteItems
                    favPlayers={favPlayers}
                    removeFromFavorites={removeFromFavorites}
                />
            </div>
        </div>
    )
}
