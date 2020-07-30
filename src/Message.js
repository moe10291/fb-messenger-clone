import React, {forwardRef} from 'react';

import {Card, CardContent, Typography} from '@material-ui/core';
import './message.css';

const Message= forwardRef(({message, username}, ref) =>{
    const isUser= username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser? "message_userCard": "message_guestCard"}>
                <CardContent>
                    <Typography
                    color= "black"
                    variant="h6" component="h6">
                {message.username || 'Unkown User'}: {message.message}
                    </Typography>         
                </CardContent>
            </Card>
            </div>
    )
});



export default Message
