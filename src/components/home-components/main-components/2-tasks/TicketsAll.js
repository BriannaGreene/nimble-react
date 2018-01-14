import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'


const TicketsAll = ( state ) => {

  let tickets = state.user_tickets

  const ticketsAll = tickets.map(item => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      status={item.status}
      labels={item.labels}
      team={item.team}
      assignees={item.assignees}
      priority={item.priority}
    />
  ))


  return (
      <div>
        <div>
          <span className="tickets-section-title">All Tasks</span>
        </div>
        <div className="ticket-block">
          { ticketsAll }
        </div>
      </div>

  )


}

function mapStateToProps({ user_tickets }) {
  return { user_tickets }
}

export default connect(mapStateToProps)(TicketsAll)
