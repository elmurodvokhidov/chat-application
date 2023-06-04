
function MyMessage({ message, colorState }) {
    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }

    return (
        <div className="message" style={{ backgroundColor: colorState.color1 === 'true' ? '#8774E1' : colorState.color2 === 'true' ? '#0D6EFD' : colorState.color3 === 'true' ? '#C06C84' : colorState.color4 === 'true' ? 'black' : 'null', float: 'right', marginRight: '18px', color: 'white', }}>
            {message.text}
        </div>
    );
}

export default MyMessage;