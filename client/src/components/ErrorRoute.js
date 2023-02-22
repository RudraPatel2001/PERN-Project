import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/error.css'

function ErrorRoute() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="statusCode">404</div>
            <div className="statusMsg">Page Not Found</div>
            <div className="return">
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default ErrorRoute