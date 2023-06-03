import { useState } from "react";
import Logout from "./Logout";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";

function ChatAppState(props) {

    const [foo, setFoo] = useState({
        foo1: false,
        foo2: false,
        foo3: false,
        foo4: false,
        foo5: false,
    });
    const { chats, activeChat, } = props;
    const chat = chats && chats[activeChat];
    const person = chat?.people;

    return (
        <div className="chatAppState p-1 d-flex flex-column gap-2">
            {/* All group members */}
            <div className="people">
                <button onClick={() => setFoo({ foo1: !foo.foo1 })} style={{ backgroundColor: '#8774E1', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <span>Group Members</span>
                    {foo.foo1 ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                </button>
                <div className="collapse" id="collapseExample">
                    {
                        person?.map((val, ind) => (
                            <div className="card-body d-flex p-3 justify-content-between" key={ind}>
                                <div className="cardRight">
                                    <div className="cardLeft">
                                        <img src={val.person.avatar} alt={val.person.username} />
                                    </div>
                                    <p>{val.person.first_name} {val.person.last_name}</p>
                                </div>
                                <div className="isOnline">{val.person.is_online ? <span style={{ color: 'green' }}><RiRadioButtonLine /></span> : <span style={{ color: 'red' }}><RiRadioButtonLine /></span>}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* All media */}
            <div className="people">
                <button onClick={() => setFoo({ foo2: !foo.foo2 })} style={{ backgroundColor: '#8774E1', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                    <span>Photos</span>
                    {foo.foo2 ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                </button>
                <div className="collapse" id="collapseExample1">
                    <div className="card-body d-flex p-3 justify-content-between flex-wrap gap-3">
                        {
                            chat?.attachments
                                .map((itm, ind) => (
                                    <div className="imgContainer" key={ind}><img src={itm.file} alt={itm.created} /></div>
                                ))
                        }
                    </div>
                </div>
            </div>
            <Logout />
        </div>
    );
}

export default ChatAppState;