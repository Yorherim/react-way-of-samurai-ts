import React from "react";

type PropsType = {
    message: string;
};

function Message({ message }: PropsType) {
    return <div>{message}</div>;
}

export default Message;
