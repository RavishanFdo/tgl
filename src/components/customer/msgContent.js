import React from 'react'

const MsgContent = ({messages}) => {
    return(
        <div className='card'>
            {/* <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/> */}

            <span className='card-title'>
            {messages.name} <br/>{messages.content}
            </span>
        </div>
    )
}
export default  MsgContent;