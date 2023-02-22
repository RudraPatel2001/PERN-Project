import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../css/rateus.css'

function RateUs() {

    const navigate = useNavigate()
    const starColor = {
        orange: "orange",
        grey: "grey"
    }
    const stars = Array(5).fill(0)
    const [currentVal, setCurrentVal] = useState(0)
    const [feedback, setFeedback] = useState('')
    const [username, setUsername] = useState('')
    const [uid, setUid] = useState(Number)

    const starHandler = (value) => {
        setCurrentVal(value)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const body = { username, currentVal, feedback, uid };
        await fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(r => r.json).then(d => alert('Thanks For Feedback!'))
        navigate('/profile')
    }

    useEffect(() => {
        fetch('http://localhost:5000/login', { credentials: 'include' })
            .then(r => r.json())
            .then(d => {
                setUsername(d.user[0].username)
                setUid(d.user[0].uid)
            })
    }, [])


    return (
        <div className='rate'>
            <form onSubmit={submitHandler}>
                <div className='head'>Rate Us</div>
                <div className='stars'>
                    {stars.map((_, star) => (
                        <FaStar
                            className='star'
                            key={star}
                            size={32}
                            color={currentVal > star ? starColor.orange : starColor.grey}
                            onClick={() => starHandler(star + 1)}
                        />
                    ))}
                </div>
                <textarea
                    placeholder='Feedback...'
                    onChange={e => setFeedback(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RateUs