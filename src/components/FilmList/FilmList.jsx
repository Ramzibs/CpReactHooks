import React, { useState,useEffect} from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import axios from 'axios'
import Modal from '../Modal/Modal'


function FilmList() {
    const [myData, SetMyData] = useState([])
    const getMyData = async () => {
        try {
            const { data } = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
            SetMyData(data)


        } catch (e) {
            console.error(e)

        }            


    }
    useEffect(() => { getMyData() }, [])

return(

    <Row xs={2} md={4} className="g-4">
    {myData.map((el) => (
      <Col>
        <Card>
        <Link to={`/detail/${el._id}`}><Card.Img variant="top" src={el.imgUrl} /></Link>          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              <li>{el.title}</li>
              <li>{el.category}</li>

              <li>{el.date}</li>
              <li>{el.rate}</li>

            </Card.Text>
            <button type="button" class="btn btn-primary btn-sm">Delete</button>
<button type="button" class="btn btn-secondary btn-sm">Modify</button>
          </Card.Body>
        </Card>
      </Col>
    ))}
                <Modal/>
  </Row>
  
  
)








}
    export default FilmList