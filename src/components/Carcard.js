import React from 'react'
import DeleteCard from './DeleteCard'
import EditCard from './EditCard'

function Carcard (props) {
  // console.log(Number(props.distance).toLocaleString())
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={props.carimage} className='card-img-top' alt={props.carname} />
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h6 className='card-title' title={props.carname}>
            {props.carname.length > 20
              ? props.carname.slice(0, 20) + ' ...'
              : props.carname}
          </h6>
          <img
            src='https://stimg.cardekho.com/ucr/compare/heartBlack3.png'
            alt='heart for like'
            // className='card-image-top'
            style={{ height: '25px' }}
          />
        </div>
        <p className='card-text'>
          <span>
            {props.distance} Kms | {props.carfueltype}{' '}
          </span>
        </p>
        <h4>
          &#8377; {props.carprice} Lakh
          <img
            src='https://images10.gaadi.com/listing/icons/CertifiedV1.svg'
            alt='certified cars'
            className='ms-2'
          />
        </h4>
        <hr />
        <div className='d-flex justify-content-around'>
          <DeleteCard
            deleteId={props.carid}
            deleteCar={props.carname}
            deleteSuccess={() => props.deletedSuccessfully()}
          />
          <EditCard
            editId={props.carid}
            editCar={props.carname}
            editImage={props.carimage}
            editPrice={props.carprice}
            editFuelType={props.carfueltype}
            editDistance={props.distance}
            editSuccess={() => props.updatedSuccessfully()}
          />
        </div>
      </div>
    </div>
  )
}

export default Carcard
