'use client'

import { useState } from 'react'

function Upvote() {

    const [upvote, setUpvote] = useState(0);


    return (
        <button className='bg-blue-500 text-white p-2 mt-10 rounded-lg shadow-lg hover:bg-blue-700' onClick={() => setUpvote(upvote + 1)}>
            Upvote {upvote}
        </button>
    )
}

export default Upvote
