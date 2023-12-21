import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [completedTodos, setCompletedTodos] = useState([])

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    }

    let updatedTodoArr = [...allTodos]
    updatedTodoArr.push(newTodoItem)
    setTodos(updatedTodoArr)
    localStorage.setItem('todoList', JSON.stringify(updatedTodoArr))

  }
  const handleDeleteTodo = (index) =>{
    let reducedTodo = [...allTodos]
    reducedTodo.splice (index,1)

    localStorage.setItem('todoList',JSON.stringify(reducedTodo))
    setTodos(reducedTodo)
  }
  const handleComplete = (index)=>{
    let now = new Date()
    let dd = now.getDate()
    let mm = now.getMonth() +1
    let yy = now.getFullYear()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let completedOn = `${dd}-${mm}-${yy} at ${h}:${m}:${s}`

    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn
    }
    let updatedCompletedArr = [...completedTodos]
    updatedCompletedArr.push(filteredItem)
    setCompletedTodos(updatedCompletedArr)
    handleDeleteTodo(index)
    localStorage.setItem('completedTodo',JSON.stringify(updatedCompletedArr))
  }
  const handleDeleteCompletedTodo = (index) =>{
    let reducedTodo = [...completedTodos]
    reducedTodo.splice (index,1)

    localStorage.setItem('completedTodo',JSON.stringify(reducedTodo))
    setCompletedTodos(reducedTodo)
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todoList'))
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'))

    if (savedTodo) {
      setTodos(savedTodo)
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo)
    }
  }, [])
  return (
    <>
      <div className="container my-3">
        <main className="form-signin w-75 m-auto shadow-lg p-3 mb-5 bg-body rounded">
          <form className='text-center' onSubmit={handleAddTodo}>

            <h1 className="h3 mb-3 fw-normal">Add todo tasks:</h1>

            <div className="form-floating my-2">
              <input type="text" className="form-control" id="floatingInput" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Todo Title" />
              <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="form-floating my-2">
              <textarea className="form-control" placeholder="Todo Description" id="floatingTextarea2" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} style={{ height: 100 }}></textarea>
              <label htmlFor="floatingTextarea2">Description</label>
            </div>

            <button className="btn btn-primary w-50 py-2 my-2" type='submit'>Add Todo</button>

          </form>
        </main>
      </div>
      <div className="container-fluid my-2 p-2 w-75 bg-secondary bg-opacity-10 shadow" >
        <div className="p-2">
          <h1>Todo List:</h1>
          <div className={`btn btn-outline-primary text-black mx-1 ${isCompleteScreen===false && 'btn-primary'}`} 
            onClick={()=>setIsCompleteScreen(false)}>
              Todo
          </div>
          <div className={`btn btn-outline-success text-black mx-1 ${isCompleteScreen===true && 'btn-success'}`} 
            onClick={()=>setIsCompleteScreen(true)}>
              Completed
          </div>
        </div>

        {isCompleteScreen===false && allTodos.map((item, index) => {
          return (
            <>
              <div className="row border border-black p-2 m-2" key={index}>
                <div className="col-md-9">
                  <h2><strong>Title: </strong>{item.title}</h2>
                  <p><strong>Description: </strong>{item.description}</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div className="btn btn-success mx-1" onClick={()=>handleComplete(index)}><i className="fa-solid fa-check"></i></div>
                  <div className="btn btn-danger mx-1" onClick={()=>handleDeleteTodo(index)}><i className="fa-solid fa-trash"></i></div>
                </div>
              </div>
            </>
          )
        })
        }
        {isCompleteScreen===true && completedTodos.map((item, index) => {
          return (
            <>
              <div className="row border border-black p-2 m-2" key={index}>
                <div className="col-md-9">
                  <h2><strong>Title: </strong>{item.title}</h2>
                  <p><strong>Description: </strong>{item.description}</p>
                  <p><small>Completed on: </small>{item.completedOn}</p>

                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div className="btn btn-danger mx-1" onClick={()=>handleDeleteCompletedTodo(index)}><i className="fa-solid fa-trash"></i></div>
                </div>
              </div>
            </>
          )
        })
        }
      </div>
    </>
  )
}

export default HomePage