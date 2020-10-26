import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
// const API_URL = process.env.REACT_APP_API_URL

export default class DisplayCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calendar: props.day
        }
    }

    render() {
        const mapEvents = this.state.calendar.map(
            plan => {
                if(plan.month === this.props.month && plan.day === this.props.dayNum) {
                    return(
                        <div>{plan.name}</div>
                    )
                }
            }
        )
        return (
            <Card className='dayCard'>
                <div className='calendarnumber'>{this.props.dayNum}</div>
                {mapEvents}
            </Card>
        )
    }
}