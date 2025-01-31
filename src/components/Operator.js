import React from 'react'

const Operator = (props) => {
    const mails = props.mails;

  return (
    <div>
        {mails.length > 0 && <h2>You have {mails.length} unread notifications</h2>}
    </div>
  )
}

export default Operator
