import { useState } from "react";
import { sendMessage, isTyping } from 'react-chat-engine';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";

function MessageForm({ colorState }, props) {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId)
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <ImAttachment className="picture-icon" id={colorState.color1 === 'true' ? 'colorid1color' : colorState.color2 === 'true' ? 'colorid2color' : colorState.color3 === 'true' ? 'colorid3color' : colorState.color4 === 'true' ? 'colorid4color' : null} />
                </span>
            </label>
            <input type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload} />
            <button type="submit" className="send-button" id={colorState.color1 === 'true' ? 'colorid1color' : colorState.color2 === 'true' ? 'colorid2color' : colorState.color3 === 'true' ? 'colorid3color' : colorState.color4 === 'true' ? 'colorid4color' : null}>
                <IoSend className="send-icon" />
            </button>
        </form>
    );
}

export default MessageForm;