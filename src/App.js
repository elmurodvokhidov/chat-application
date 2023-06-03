import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import ChatAppState from "./components/ChatAppState";

function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="globalBox">
      <ChatEngine
        height='100vh'
        projectID='a273fb8f-2ca3-4087-843c-f927fa4d94a8'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        renderOptionsSettings={(creds, chat) => <Logout {...creds} />}
        renderChatSettings={(chatAppState) => <ChatAppState {...chatAppState} />}
      />
    </div>
  )
};

export default App;