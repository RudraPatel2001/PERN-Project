import React, { useEffect, useState } from 'react'
import '../css/edit.css';
import { useNavigate } from 'react-router-dom'

function Edit() {

    const navigate = useNavigate();

    const [oldUsername, setOldUsername] = useState('')
    const [username, setUsername] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const updateUser = async (e) => {
        e.preventDefault();
        const body = { fname, lname, username, email, oldUsername }
        await fetch('http://localhost:5000/update', {
            method: "POST",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(r => r.json())
    }

    useEffect(() => {
        fetch("http://localhost:5000/login", { credentials: 'include' })
            .then(r => r.json())
            .then(d => {
                setUsername(d.user[0].username)
                setFname(d.user[0].fname)
                setLname(d.user[0].lname)
                setEmail(d.user[0].email)
                setOldUsername(d.user[0].username)
            })
    }, [])

    return (
        <div className='edit'>
            <div className='note'>Note : Please login again after saving in order to view changes!</div>
            <form onSubmit={updateUser}>
                <div className='flex'>
                    <div className='box'>
                        <label>First Name</label>
                        <input type="text" value={fname}
                            onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className='box'>
                        <label>Last Name</label>
                        <input type="text" value={lname}
                            onChange={(e) => setLname(e.target.value)} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='box'>
                        <label>Username</label>
                        <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='box'>
                        <label>Email ID</label>
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='containBtns'>
                    <button type="submit" onClick={() => navigate(-1)}>Save</button>
                    <button onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Edit