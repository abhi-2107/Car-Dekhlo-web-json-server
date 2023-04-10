import { useEffect, useState } from 'react'
import './cars.scss'
import Carcard from './components/Carcard'
import Postform from './components/Postform'

function App () {
  let [carData, setCarData] = useState([])
  let [postDataSuccess, setPostDataSuccess] = useState(false)
  let [postDataError, setPostDataError] = useState(false)
  let [editSuccess, setEditSuccesss] = useState(false)
  let [editError, setEditError] = useState(false)
  let [deleteSuccess, setDeleteSuccess] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3004/cars')
      .then(response => response.json())
      .then(data => {
        setCarData(data)
      })
  }, [])
  const cardsforcar = carData.map(item => (
    <div className='col'>
      <Carcard
        key={item.id}
        carid={item.id}
        deletedSuccessfully={() => setDeleteSuccess(true)}
        updatedSuccessfully={() => setEditSuccesss(true)}
        carname={item.carname}
        carimage={item.image}
        carprice={item.price}
        carfueltype={item.fueltype}
        distance={item.distancecovered}
      />
    </div>
  ))

  return (
    <div className='container bg-light'>
      {postDataSuccess && (
        <div
          class='alert alert-success alert-dismissible fade show'
          role='alert'
        >
          Car details are <strong>Saved Successfully...</strong> Please refresh
          this page to see changes.
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}
      {postDataError && (
        <div
          class='alert alert-danger alert-dismissible fade show'
          role='alert'
        >
          Opps... An Error occured, Your <strong> Post request Failed</strong>{' '}
          Please refresh this page and try again.
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}
      {editSuccess && (
        <div
          class='alert alert-success alert-dismissible fade show'
          role='alert'
        >
          Car details are <strong> Updated Successfully...</strong> Please
          refresh this page to see changes.
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}
      {editError && (
        <div
          class='alert alert-danger alert-dismissible fade show'
          role='alert'
        >
          Opps... An Error occured, Your request to{' '}
          <strong> Edit form Failed</strong> Please refresh this page and try
          again.
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}
      {deleteSuccess && (
        <div
          class='alert alert-success alert-dismissible fade show'
          role='alert'
        >
          Car details <strong>Deleted Successfully...</strong> Please refresh
          this page to see changes.
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}

      <div className='h1 fs-3 text-center'>
        Welcom to{' '}
        <span className='display-4 fw-semibold text-info-emphasis'>
          Car Dekhlo, Haq se!{' '}
        </span>
      </div>
      <div className='container  row row-cols-md-3 g-4 m-2'>{cardsforcar}</div>
      <div className='d-flex justify-content-center m-2'>
        <Postform
          successfullyPosted={() => setPostDataSuccess(true)}
          postError={() => setPostDataError(true)}
        />
      </div>
    </div>
  )
}

export default App
