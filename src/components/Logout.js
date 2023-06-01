import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";

function Logout(props) {

    const handlerLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }
        })
    }

    return (
        <div>
            <button style={{ backgroundColor: '#8774E1', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="submit" onClick={handlerLogout}><span>Logout</span> <span><FiLogOut /></span></button>
        </div>
    );
}

export default Logout;