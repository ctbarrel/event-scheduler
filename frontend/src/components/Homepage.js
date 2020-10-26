import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import AddCalEvent from './AddEvent'
import EventDisplay from './EventDisplay'
import DisplayCalendar from './DisplayCalendar'

const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            calendar: [],
            userView: 'user',
            eventView: 'calendar'
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
        const displayEventList = this.state.calendar.map(
            event => {
                if (this.state.userView === event.user && this.state.eventView === 'list') {
                    return (
                        <EventDisplay key={event._id}
                            event={event} 
                            refresh={this.refresh}/>
                    )
                }
            }
        )
        const displayEventCalendar = this.state.eventView==='calendar' ? <DisplayCalendar calendar={this.state.calendar}/> : null
        return (
            <div>
                <h1>Calendar</h1>
                
                <input name='userView'
                value={this.state.userView}
                placeholder='Enter Username Here' 
                onChange={this.handleChange}/><br />

                <AddCalEvent refresh={this.refresh} user={this.state.userView}/> <br />
                
                <ButtonGroup>
                    <Button name='eventView' value='list' onClick={this.handleChange}>List View</Button>
                    <Button name='eventView' value='calendar' onClick={this.handleChange}>Calendar View</Button>
                </ButtonGroup>
                {displayEventCalendar}
                {displayEventList}

            </div>
        )
    }
}