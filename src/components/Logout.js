
function Logout(props) {

    const handlerLogout = () => {
        window.location.reload();
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    return (
        <div>
            <button className="logout" type="submit" onClick={handlerLogout}>Logout</button>
        </div>
    );
}

export default Logout;