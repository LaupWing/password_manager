import React from 'react'

interface MessageProps {
   message: string
}

const Message:React.FC<MessageProps> = ({
   message
}) =>(
   <div>
      {message}
   </div>
)

export default Message