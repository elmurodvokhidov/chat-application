import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import ChatAppState from "./components/ChatAppState";
import { useState } from "react";

function App() {

  const [colorState, setColorState] = useState({
    color1: localStorage.getItem('color1') || localStorage.setItem('color1', 'true'),
    color2: localStorage.getItem('color2') || localStorage.setItem('color2', 'false'),
    color3: localStorage.getItem('color3') || localStorage.setItem('color3', 'false'),
    color4: localStorage.getItem('color4') || localStorage.setItem('color4', 'false'),
  });

  function refresh() {
    setColorState({
      color1: localStorage.getItem('color1'),
      color2: localStorage.getItem('color2'),
      color3: localStorage.getItem('color3'),
      color4: localStorage.getItem('color4'),
    })
  };

  const colorArray = ['color1', 'color2', 'color3', 'color4'];

  // color1 #8774E1
  // color2 #0D6EFD
  // color3 #C06C84
  // color4 #

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="globalBox">
      <ChatEngine
        height='100vh'
        projectID='a273fb8f-2ca3-4087-843c-f927fa4d94a8'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} colorState={colorState} setColorState={setColorState} refresh={refresh} colorArray={colorArray} />}
        renderOptionsSettings={(creds, chat) => <Logout {...creds} />}
        renderChatSettings={(chatAppState) => <ChatAppState {...chatAppState} colorState={colorState} setColorState={setColorState} refresh={refresh} colorArray={colorArray} />}
      />
    </div>
  )
};

export default App;