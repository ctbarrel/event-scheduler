import React from 'react'

const API_URL = process.env.REACT_APP_API_URL

export default function EventDisplay ({ event, refresh }) {
    
    var month = () => {
        switch (event.month) {
            case 'A': return 'January'
            case 'B': return 'February'
            case 'C': return 'March'
            case 'D': return 'April'
            case 'E': return 'May'
            case 'F': return 'June'
            case 'G': return 'July'
            case 'H': return 'August'
            case 'I': return 'September'
            case 'J': return 'October'
            case 'K': return 'November'
            case 'L': return 'December'
            default: return event.month
        }
    }

    function handleDelete() {
        fetch(`${API_URL}schedule/${event._id}`, {
            method: 'DELETE'
        })
        .then(refresh)
    }

    return (
        <div>
        <span key={event._id}>{event.name} on {month()} {event.day}</span>
        <input type='button'
        onClick={handleDelete}
        value='x'/>
        </div>
    )
}