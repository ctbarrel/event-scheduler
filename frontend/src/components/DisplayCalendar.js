import React, {Component} from 'react'
import DailyCard from './DailyCard'
// const API_URL = process.env.REACT_APP_API_URL

export default class DisplayCalendar extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            month: 'A',
            calendar: props.calendar,
            docket: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    render () {
        const mapDays = this.state.docket.map(
            day => {
                let dayNum = this.state.docket.indexOf(day) + 1
                return (
                    <DailyCard key={dayNum} dayNum={dayNum} month={this.state.month} />
                )
            }
        )
        return (
        <div>
        <select name='month'
                    value={this.state.month}
                    onChange={this.handleChange}
                >
                    <option value='A'>January</option>
                    <option value='B'>February</option>
                    <option value='C'>March</option>
                    <option value='D'>April</option>
                    <option value='E'>May</option>
                    <option value='F'>June</option>
                    <option value='G'>July</option>
                    <option value='H'>August</option>
                    <option value='I'>September</option>
                    <option value='J'>October</option>
                    <option value='K'>November</option>
                    <option value='L'>December</option>
                </select> <br />
                {mapDays}
        </div>
    )}
}