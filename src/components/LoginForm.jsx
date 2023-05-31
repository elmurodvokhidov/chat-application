import { useState } from "react";
import axios from 'axios';

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPass, setIsPass] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const authObject = { 'Project-ID': 'a273fb8f-2ca3-4087-843c-f927fa4d94a8', 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Oops, incorrect credentials.')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <div className="logo"><i className="fa-brands fa-telegram"></i></div>
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <div className="inputGroup">
                        <input className="input" type={isPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        <span onClick={() => setIsPass(!isPass)} className="showPass">{isPass ? <i className="fa-sharp fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}</span>
                    </div>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;