import '../css/users.css';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {

    const navigate = useNavigate();
    const [usersArr, setUsersArr] = useState([]);

    const usersList = async () => {
        try {
            await fetch(`http://localhost:5000/users`)
                .then(res => res.json())
                .then(data => { setUsersArr(data) })
        } catch (err) {
            console.log('Failed!');
        }
    }

    const deleteUser = async(id) => {
        try {
            const delUser = await fetch(`http://localhost:5000/deleteuser/${id}`, {
                method: "DELETE"
            })
            setUsersArr(usersArr.filter(item => item.uid !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        document.title = 'E-Mart - Users';
        usersList();
    }, [])

    return (
        <div className='users'>
            <div className='containHeaders'>
            <div className='head'>List of Users</div>
            <button className='goback' onClick={() => navigate(-1)}>Go Back</button>
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-Mail</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersArr.map(user => (
                            <tr key={user.username}>
                                <td>{user.uid}</td>
                                <td>{user.username}</td>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                                <td style={{textAlign: "center"}}>
                                    <button onClick={() => {
                                        deleteUser(user.uid)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users