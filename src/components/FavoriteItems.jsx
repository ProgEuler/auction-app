import React from 'react'

export default function FavoriteItems({ favPlayers, removeFromFavorites }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col justify-center items-center w-[350px]">
        <div className='mb-4'>
            <h1 className='text-2xl flex items-center gap-2'><span className='text-3xl'>♡</span>Favorite Items</h1>
        </div>
        <div className='text-center'>
            <hr className='opacity-10' />

            {
                favPlayers.length > 0 ? (
                    <ul className="my-4">
                        {favPlayers.map(player => (
                            <li key={player.id} className="mb-2 w-[250px] p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-start relative">
                                <div className="flex items-center gap-2">
                                    <img src={player.image} alt={player.title} className="size-12 rounded-full" />
                                    <span>{player.title}</span>
                                </div>
                                <div className='flex gap-8 justify-center items-center mt-2 pl-2'>
                                    <span className="text-sm text-gray-500">${player.currentBidPrice}</span>
                                    <span className="text-sm text-gray-500">Bids: {player.bidsCount}</span>
                                </div>
                                <button
                                    onClick={() => removeFromFavorites(player.id)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    ✖
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <h1 className='text-xl font-semibold my-8'>No favorites yet</h1>
                        <p className='mb-6'>Click the heart icon on any item to add it to your favorites</p>
                    </>
                )
            }
            <hr className='opacity-10' />
        </div>
        <div className='flex justify-between items-center w-full text-lg mt-4'>
            <h1>Total bids</h1>
            <span>$
                {
                    favPlayers.reduce((total, player) => total + (player.currentBidPrice), 0)
                }
            </span>
        </div>
    </div>
  )
}
