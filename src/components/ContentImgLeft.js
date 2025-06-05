import React from 'react'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

function ContentImgLeft(props) {
  return (
    <Row>
        <Col lg="6" md="6" sm="12" className='espaco_coluna'>
            <img className='img_ContentLeft' src={ props.imgContentL } alt={ props.altContentL } />
        </Col>
        <Col className='espaco_coluna'>
            <p>Nullam eleifend, augue sit amet ullamcorper imperdiet, neque magna condimentum elit, ut semper massa felis ut dolor. Integer consectetur leo quis ex efficitur lobortis. Suspendisse ut quam varius, vulputate enim id, porttitor nisi. Vestibulum accumsan massa eu quam pharetra venenatis. Fusce sed lacus id risus hendrerit fringilla. Maecenas orci tortor, placerat quis dui sed, consectetur pellentesque nulla. Sed et ligula fringilla, blandit mauris efficitur, mollis enim. Mauris posuere rhoncus massa quis auctor. </p>
            <br/>
            <p>Vestibulum in tristique nulla. Vivamus ac tempor est, ut vestibulum arcu. Morbi eu molestie nisl, lacinia malesuada ligula. Sed quam arcu, molestie eget rhoncus sed, elementum in neque. Vestibulum dignissim ligula purus, sit amet luctus ipsum volutpat ut. Duis lobortis est ligula, vel ultrices nibh blandit nec. Pellentesque nec libero euismod, convallis neque a, porta odioMauris at varius enim, in porta lacus.</p>

            <button id='SaibaMais' className='saibaMais'>Saiba Mais</button>
        </Col>
    </Row>
  )
}

export default ContentImgLeft;

