import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const Message = ({ id, user, message, time, avatar, state }) => {
  let image = ''
  if (avatar === 1) { image = 'avatar01' }
  if (avatar === 2) { image = 'avatar02' }
  if (avatar === 3) { image = 'avatar03' }
  if (avatar === 4) { image = 'avatar04' }
  if (avatar === 5) { image = 'avatar05' }
  if (avatar === 6) { image = 'avatar06' }
  if (avatar === 7) { image = 'avatar07' }
  if (avatar === 8) { image = 'avatar08' }
  if (avatar === 9) { image = 'avatar09' }


  // console.log('state from message: ', state.users);
  // // on click, send id to deleteMessage function
  // const deleteItem = (e) => {
  //   e.preventDefault()
  //   deleteMessage(id)
  // }

  // const userName = () => {
  //   for (var i = 0; i < state.users.length; i++) {
  //     if (state.users[i].id === user) {
  //       console.log('OBJ FROM MESAGE', state.users[i].id);
  //     }
  //   }
  //   // let obj = state.users.filter(item => item.id === user)
  //   // console.log(obj);
  //   // return obj.id
  // }
  // background-image: url('./images/weather-partly-cloudy.png');
  // let style = "background-image: url('./images/avatar01.png')"
  // let jsx = 'avatar01'

{/* <div style={{'backgroundColor': color}}>{text}</div> */}
  return (
    <div>
      <div className="message-container">
        <div className="message-avatar" id={image}></div>
        <div className="message-holder">
          <div>
            <span className="user-name">{user}</span>
            {/* <span className="timestamp">{time}</span> */}
          </div>
          <div className="message">
            {message}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Message
