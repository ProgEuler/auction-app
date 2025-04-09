import React from "react";
import { useEffect } from "react";

export default function AuctionItems({ players, setPlayers, addToFavorites }) {

    function disableBtn(playerId) {
        setPlayers(prevPlayers =>
            prevPlayers.map(player =>
                player.id === playerId ? { ...player, disabled: true } : player
            )
        );
    }

    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setPlayers(data.map(player => ({
                ...player,
                currentBidPrice: player.currentBidPrice,
                disabled: false
            }))));
    }, [setPlayers]);
  return (
    <div className="overflow-x-auto p-4 rounded-lg shadow-lg bg-base-100 w-8/10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            </th>
            <th>Players</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map(player => {
                return (
                    <tr key={player.id}>
                    <th>
                        <label>
                            <img src={player.team_flag} alt={player.team} />
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={player.image}
                                alt="Avatar Tailwind CSS Component"
                            />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{player.title}</div>
                            <div className="text-sm opacity-80">{player.team} | {player.position}</div>
                            <div className="text-sm opacity-50">{player.description}</div>
                        </div>
                        </div>
                    </td>
                    <td>${player.currentBidPrice}</td>
                    <td>{player.timeLeft}</td>
                    <th>
                        {
                            player.disabled ? (
                                <button disabled className="btn btn-circle bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                </button>
                            ) : (
                                <button onClick={() => { disableBtn(player.id); addToFavorites(player); }} className="btn btn-circle bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            )
                        }
                    </th>
                    </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
}
