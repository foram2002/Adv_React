import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { del, insert, update } from './UserReducer'

const UserCrudComponent = () => {
    const [data, setdata] = useState({
        name: '',
        age: ''
    })
    const allData = useSelector((state) => state.user.data)
    const [id, setid] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target
        setdata({
            ...data, [name]: value
        })
    }
    const saveData = (e) => {
        e.preventDefault()
        if (id != '') {
            dispatch(update({ id, data }))
        }
        else {
            dispatch(insert(data))
        }
        setdata({
            name: "",
            age: ""
        })
    }
    const edit = (id) => {
        setid(id)
        let res = allData.find((i, index) => index == id)
        setdata(res)
    }
    return (
        <div>
            <form action="#" method='post' onSubmit={saveData}>
                <input type="text" name="name" id="" placeholder='Enter Your First Name' value={data.name} onChange={handleChange} />
                <input type="number" name="age" id="" placeholder='Enter Your Age' value={data.age} onChange={handleChange} />
                <input type="submit" value='Save Data' />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((i, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>
                                        <button onClick={() => dispatch(edit(index))}>Update</button>
                                        <button onClick={() => dispatch(del(index))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserCrudComponent
