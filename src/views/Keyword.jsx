import React from 'react'
import { useParams } from 'react-router-dom'

const Keyword = () => {
    const { keyword, color,backgroundColor } = useParams();

    return (
        <div>
            <h1 style={{color: color, backgroundColor: backgroundColor}}>
                {
                    isNaN(keyword) ? "The word is: " + keyword : "The number is: " + keyword
                }
            </h1>
        </div>
    )
}

export default Keyword