import React from 'react'

function DeleteCard (props) {
  const deleteItem = ID => {
    fetch(`http://localhost:3004/cars/${ID}`, {
      method: 'DELETE'
    }).then(() => {
      props.deleteSuccess()
      window.bootstrap.Modal.getOrCreateInstance(
        document.getElementById('deleteCarId' + props.deleteId)
      ).hide()
      window.scrollTo(0, 0)
    })
  }
  return (
    <div>
      <button
        className='btn btn-danger'
        onClick={() =>
          window.bootstrap.Modal.getOrCreateInstance(
            document.getElementById('deleteCarId' + props.deleteId)
          ).show()
        }
      >
        Delete
      </button>
      <div className='modal fade' id={'deleteCarId' + props.deleteId}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-danger text-white'>
              <h1 className='modal-title  fs-5' id='exampleModalLabel'>
                {props.deleteCar}
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              You are deleting <i> {props.deleteCar} </i> with ID{' '}
              {props.deleteId} in Database.
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deleteItem(props.deleteId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteCard
