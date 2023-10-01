import { useState } from "react"
import './Todolist.scss'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
const Todolist = () => {
    let [newToDo, setNewToDo] = useState('')
    let [listTodo, setListToDo] = useState([])
    const handleClickAdd = () => {
        if (!newToDo.trim()) {
            toast.error('Missing data')
            return;
        }
        let Todo = { id: Math.random(10) * 100000, title: newToDo }
        let toDoList = sessionStorage.getItem('listTodo')
        if (toDoList) {
            let array = JSON.parse(toDoList)
            array.push((Todo))
            setListToDo(array)
            sessionStorage.setItem('listTodo', JSON.stringify(array))
        }
        else sessionStorage.setItem('listTodo', JSON.stringify([Todo]))
        toast.success('Add new success')
        setNewToDo('')
    }
    const handleClickDelete = (todo) => {
        let data = sessionStorage.getItem('listTodo')
        listTodo = JSON.parse(data)
        setListToDo(listTodo.filter(item => item.id !== todo.id))
        sessionStorage.setItem('listTodo', JSON.stringify(listTodo.filter(item => item.id !== todo.id)))
        toast.info('Delete success')
        console.log('>>>>check item delete: ', listTodo)
    }
    const handleShow = () => {
        let data = sessionStorage.getItem('listTodo')
        let datashow = JSON.parse(data)
        // setListToDo(datashow)
        return (
            <>{datashow &&
                datashow.map((item, index) => {
                    return (

                        <li className="Todo-child" key={item.id}>
                            <div className="content">{index + 1}. {item.title}</div>
                            <span className="Search">Tìm kiếm</span>
                            <span className="X" onClick={() => handleClickDelete(item)}>Xoá</span>
                        </li>

                    )
                })
            }
            </>
        )
    }
    return (
        <>
            <div className="Todo-container">
                <div className="Todo-title">Bạn muốn mua gì hôm nay ?</div>
                <input placeholder="Áo sơ mi, quần rin,..." className="input" value={newToDo} onChange={(event) => setNewToDo(event.target.value)} />
                <button className="button" onClick={() => handleClickAdd()}>Thêm</button>
                <ul className="Todo-list">
                    {
                        handleShow()
                    }
                </ul>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Todolist;