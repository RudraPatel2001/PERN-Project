import '../css/social.css';
import React, { useState, useEffect } from 'react'

function Social() {
    let totalStars = 0
    const [starsArr, setStarsArr] = useState([])
    const [sumStars, setSumStars] = useState(0)
    const calcStars = async () => {
        await fetch('http://localhost:5000/stars')
            .then(r => r.json()).then(d => {
                setStarsArr(d)
                for (let i = 0; i < d.length; i++) {
                    totalStars += parseInt(d[i].stars)
                }
                setSumStars(totalStars)
            })
    }
    useEffect(() => {
        calcStars()
    }, [])

    return (
        <div className='footer'>
            <div className='des'>&copy; E-Mart. All Rights Reserved.</div>
            <div className='socials'>
                <a href='https://github.com/Rudra1402' target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a>
                <a href='https://twitter.com/rp14ok' target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href='https://www.youtube.com/channel/UCd7RQ5zaT3JpyTjmUsv2nuQ' target='_blank'><i className="fa fa-youtube" aria-hidden="true"></i></a>
                <a href='https://www.instagram.com/rudra.patel.14' target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href='https://www.reddit.com/user/godseye5' target='_blank'><i className="fa fa-reddit-alien" aria-hidden="true"></i></a>
            </div>
            <div className='rating'>Average Rating : {(sumStars / starsArr.length).toFixed(1)} &#9734;</div>
        </div>
    )
}

export default Social