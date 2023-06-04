import { useState } from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./Modal";

function ChatFeed(props) {
    const { chats, activeChat, userName, messages, colorState, setColorState, refresh, colorArray } = props;
    const chat = chats && chats[activeChat];
    const [mobileModal, setMobileModal] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
    });

    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMyMessage
                            ? <MyMessage message={message} colorState={colorState} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    if (!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            {
                mobileModal.modal1 ?
                    <Modal
                        mobileModal={mobileModal}
                        setMobileModal={setMobileModal}
                        chat={chat}
                        colorState={colorState}
                        setColorState={setColorState}
                        refresh={refresh}
                        colorArray={colorArray}
                    />
                    : null
            }
            <div className="chat-title-container" id={colorState.color1 === 'true' ? 'colorid1' : colorState.color2 === 'true' ? 'colorid2' : colorState.color3 === 'true' ? 'colorid3' : colorState.color4 === 'true' ? 'colorid4' : null}>
                <button onClick={() => setMobileModal({ ...mobileModal, modal1: !mobileModal.modal1 })} className="btn btn-light" id="menu"><RxHamburgerMenu /></button>
                <div className="chat-title" id={colorState.color1 === 'true' ? 'colorid1color' : colorState.color2 === 'true' ? 'colorid2color' : colorState.color3 === 'true' ? 'colorid3color' : colorState.color4 === 'true' ? 'colorid4color' : null}>{chat?.title}</div>
                <div className="chat-subtitle" id={colorState.color1 === 'true' ? 'colorid1color' : colorState.color2 === 'true' ? 'colorid2color' : colorState.color3 === 'true' ? 'colorid3color' : colorState.color4 === 'true' ? 'colorid4color' : null}>
                    {chat.people.map((person) => <p key={person.person.username}>{person.person.username}</p>)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} colorState={colorState} />
            </div>
        </div>
    );
}

export default ChatFeed;