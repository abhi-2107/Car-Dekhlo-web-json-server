import React, { useState } from 'react'

function EditCard (props) {
  let [editCarName, setEditCarName] = useState(props.editCar)
  let [editImageUrl, setEditImageUrl] = useState(props.editImage)
  let [editCarPrice, setEditCarPrice] = useState(props.editPrice)
  let [editCarFuelType, setEditCarFuelType] = useState(props.editFuelType)
  let [editCarDistance, setEditCarDistance] = useState(props.editDistance)
  const handleEditCarName = event => {
    setEditCarName(event.target.value)
  }
  const handleEditImageUrl = event => {
    setEditImageUrl(event.target.value)
  }
  const handleEditCarPrice = event => {
    setEditCarPrice(event.target.value)
  }
  const handleFuelType = event => {
    setEditCarFuelType(event.target.value)
  }
  const handleEditDistance = event => {
    setEditCarDistance(event.target.value)
  }
  const editCarDetails = (ID, event) => {
    event.preventDefault()
    fetch(`http://localhost:3004/cars/${ID}`, {
      method: 'PATCH',
      body: JSON.stringify({
        carname: editCarName,
        image: editImageUrl,
        price: editCarPrice,
        fueltype: editCarFuelType,
        distancecovered: editCarDistance
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        window.bootstrap.Modal.getOrCreateInstance(
          document.getElementById('editId' + props.editId)
        ).hide()
        props.editSuccess()
        window.scrollTo(0, 0)
      })
  }
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() =>
          window.bootstrap.Modal.getOrCreateInstance(
            document.getElementById('editId' + props.editId)
          ).show()
        }
      >
        Edit
      </button>

      <div
        className='modal fade'
        id={'editId' + props.editId}
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-primary text-white'>
              <h1 className='modal-title fs-5'>Edit Car : {props.editCar}</h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form
                className='container'
                onSubmit={event => editCarDetails(props.editId, event)}
              >
                <div>
                  <label className='form-label h6'>Car Name :</label>
                  <input
                    type='text'
                    className='form-control mb-2'
                    value={editCarName}
                    onChange={handleEditCarName}
                    placeholder='Enter car name..'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Car Image :</label>
                  <input
                    type='url'
                    className='form-control mb-2'
                    value={editImageUrl}
                    onChange={handleEditImageUrl}
                    placeholder='https://imagelink/for/car'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Price (In lakhs) :</label>
                  <input
                    type='number'
                    className='form-control mb-2'
                    value={editCarPrice}
                    onChange={handleEditCarPrice}
                    placeholder='Car price ___ lakhs..'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Fuel Type :</label>
                  <input
                    type='text'
                    className='form-control mb-2'
                    value={editCarFuelType}
                    onChange={handleFuelType}
                    placeholder='Diesel/Petrol..'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>
                    Distance Covered (Kms) :
                  </label>
                  <input
                    type='number'
                    className='form-control mb-2'
                    value={editCarDistance}
                    onChange={handleEditDistance}
                    placeholder='Total distance covered by Car..'
                  ></input>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary ' type='submit'>
                      Submit Info
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCard
