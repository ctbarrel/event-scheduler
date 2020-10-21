import React, {Component} from 'react'
import AddCalEvent from './AddEvent'

const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            calendar: [],
            userView: ''
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
        this.refresh()
    }
    
    refresh = () => {
        fetch(`${API_URL}schedule`)
            .then(res => res.json())
            .then(calendar => this.setState({ calendar }))
    }

    componentDidMount(){
        this.refresh()
    }

    render() {
        const displayCalendar = this.state.calendar.map(
            event => {
                console.log(event)
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
                return (
                    <p key={event._id}>{event.name} on {month()} {event.day}</p>
                )
            }
        )
        return (
            <div>
                <h1>Calendar</h1>
                
                <input name='userView'
                value={this.state.userView}
                placeholder='Enter Username Here' 
                onChange={this.handleChange}/><br />

                <AddCalEvent refresh={this.refresh} user={this.state.userView}/>
                {displayCalendar}
            </div>
        )
    }
}