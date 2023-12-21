import React from 'react'
import { useState } from 'react'

// const AddTodo = ({addTodo})=>{
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [date, setDate] = useState('')

//     const handleSubmit = e =>{
//         e.preventDefault()
//         if(title.trim() && description.trim() && date.trim()){
//             addTodo({
//                 title,
//                 description,
//                 date,
//                 })
//                 setDate('')
//                 setDescription('')
//                 setTitle('')
//         }
//     }
// }

const HomePage = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(title.trim() && description.trim() && date.trim()){
            addTodo({
                title,
                description,
                date,
                })
                setDate('')
                setDescription('')
                setTitle('')
                
        }
        
        console.log({title})
        console.log({description})
        console.log({date})
    }
    return (
        <>
        
            <div className="container my-3">
                <main className="form-signin w-75 m-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <form onSubmit={handleSubmit}>

                        <h1 className="h3 mb-3 fw-normal">Add todo tasks:</h1>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Todo Title" />
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Todo Description" id="floatingTextarea2" value={description} onChange={(e)=>setDescription(e.target.value)} style={{ height: 100 }}></textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        <div className="form-floating w-25">
                            <input type="date" className="form-control" id="floatingInput" />
                            <label htmlFor="floatingInput">Date</label>
                        </div>


                        <button className="btn btn-primary w-50 py-2" type="submit">Add Todo</button>

                    </form>
                </main>
            </div>
            <div className="container-fluid my-2">
                <h1>Todo List:</h1>
                
                    <div className="row border border-black p-2 m-2">
                        <div className="col-md-9">
                            <h2><strong>Title:</strong>This is title</h2>
                            <p><strong>Description:</strong>This is description</p>
                            <p><strong>Date:</strong></p>
                        </div>
                        <div className="col-md-2">
                            <div className="btn btn-outline-success mx-2">Complete</div>
                            <div className="btn btn-outline-danger">Delete</div>
                        </div>
                    </div>
                
            </div>

        </>
    )
}

export default HomePage