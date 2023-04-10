import React, { useState } from 'react'

function Postform (props) {
  let [carName, setCarName] = useState('')
  let [carImage, setCarImage] = useState('')
  let [carPrice, setCarPrice] = useState('')
  let [fuleType, setFuelType] = useState('')
  let [distanceTraveled, setDistanceTraveled] = useState('')

  const handleCarName = event => {
    setCarName(event.target.value)
  }
  const handleCarImage = event => {
    setCarImage(event.target.value)
  }
  const handleCarPrice = event => {
    setCarPrice(event.target.value)
  }
  const handleFuelType = event => {
    setFuelType(event.target.value)
  }
  const handleDistanceTraveled = event => {
    setDistanceTraveled(event.target.value)
  }

  function submitForm (event) {
    event.preventDefault()
    fetch('http://localhost:3004/cars', {
      method: 'POST',
      body: JSON.stringify({
        carname: carName,
        image: carImage,
        price: carPrice,
        fueltype: fuleType,
        distancecovered: distanceTraveled
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw res
        }
      })
      .then(response => response.json())
      .then(() => {
        props.successfullyPosted()
        window.scrollTo(0, 0)
      })
      .catch(error => {
        props.postError()
        window.scrollTo(0, 0)
      })
    let myModal = window.bootstrap.Modal.getOrCreateInstance(
      document.getElementById('postModalId')
    )
    myModal.hide()
  }

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() =>
          window.bootstrap.Modal.getOrCreateInstance(
            document.getElementById('postModalId')
          ).show()
        }
      >
        Add new car
      </button>

      <div className='modal fade' id='postModalId' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-primary text-white'>
              <h1 className='modal-title fs-5'>Car Details :</h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form className='container' onSubmit={submitForm}>
                <div>
                  <label className='form-label h6'>Car Name :</label>
                  <input
                    type='text'
                    className='form-control mb-2'
                    value={carName}
                    onChange={handleCarName}
                    placeholder='Enter car name..'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Car Image :</label>
                  <input
                    type='url'
                    className='form-control mb-2'
                    value={carImage}
                    onChange={handleCarImage}
                    placeholder='https://imagelink/for/car'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Price (In lakhs) :</label>
                  <input
                    type='number'
                    className='form-control mb-2'
                    value={carPrice}
                    onChange={handleCarPrice}
                    placeholder='Car price ___ lakhs..'
                  ></input>
                </div>
                <div>
                  <label className='form-label h6'>Fuel Type :</label>
                  <input
                    type='text'
                    className='form-control mb-2'
                    value={fuleType}
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
                    value={distanceTraveled}
                    onChange={handleDistanceTraveled}
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

export default Postform
