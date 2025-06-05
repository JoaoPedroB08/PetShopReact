import React from 'react'
import Col from 'react-bootstrap/Col'

function StaticBanner(props) {
  return (
    <Col>
        <img className='img_bannerAd' src={ props.bannerAdestramento } alt={ props.bannerAdestramento } />
    </Col>
  )
}

export default StaticBanner;
