import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className="container my-3">
                <main className="form-signin w-75 m-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <form>

                        <h1 className="h3 mb-3 fw-normal">Add todo tasks:</h1>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Todo Title" />
                            <label for="floatingInput">Title</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Todo Description" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                            <label for="floatingTextarea2">Description</label>
                        </div>
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInput" placeholder="Todo Description" />
                            <label for="floatingInput">Date</label>
                        </div>


                        <button className="btn btn-primary w-50 py-2" type="submit">Add Todo</button>

                    </form>
                </main>
            </div>
            <div className="container-fluid my-2">
                <h1>Todo List:</h1>
                <div className="row border border-black p-2 m-2">
                    <div className="col-md-9">
                        <h2><strong>Title:</strong>This is title of todo</h2>
                        <p><strong>Description:</strong>This is description of todo</p>
                        <p><strong>Date:</strong> </p>

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