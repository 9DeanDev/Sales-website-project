import { useState } from 'react';
import './Account.scss'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
const Account = () => {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleLogin = () => {
        // document.getElementById('account') = <>{account}</>
        if (!account) {
            toast.error('Missing account')
            return
        }
        if (!password) {
            toast.error('Missing password')
            return
        }
        toast.success('Login success')
        setShow(false)
        setAccount('')
        setPassword('')
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <span variant="primary" onClick={handleShow}>
                Tài khoản
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Xin chào,</h3>
                    <div>Đăng nhập tài khoản</div>
                    <div className='Login-modal'>
                        <input value={account} placeholder="Tên tài khoản" type='account' required autoFocus onChange={(event) => setAccount(event.target.value)} />
                        <input value={password} placeholder="Mật khẩu" type='password' required onChange={(event) => setPassword(event.target.value)} />
                        <button onClick={handleLogin}>Đăng nhập</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Account;
