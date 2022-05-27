import React, {useState} from 'react'
import { Button,Modal,InputGroup,FormControl } from 'react-bootstrap';


export default function MyModal({SetGetData}) {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState();
    const [descritption, setDescription] = useState();
    const [rating, setRating] = useState();
    const [url, setUrl] = useState();


const save = ()=> {SetGetData({title,descritption,rating,url})
handleClose()
}


  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return ( 
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body><>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setTitle(e.target.value)}/>
  </InputGroup>
  <br />
  <InputGroup size="sm">
        <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      onChange={(e)=>setDescription(e.target.value)}
    />
  </InputGroup>
  <br />
  <InputGroup size="sm">
    <InputGroup.Text id="inputGroup-sizing-sm">Rating</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    onChange={(e)=>setRating(e.target.value)} />
  </InputGroup>
  <br />
  <InputGroup size="sm">
    <InputGroup.Text id="inputGroup-sizing-sm">URL img</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
     onChange={(e)=>setUrl(e.target.value)}  />
  </InputGroup>
</></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>save()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
