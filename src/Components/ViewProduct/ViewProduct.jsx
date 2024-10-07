import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { deleteproAsync, editProductsAsync, updateDataAsync, updateImg } from '../../Services/Actions/addproductAction';
import './view.css';
import Admin from '../Admin/Admin';

function ViewProduct() {
  const { product, isEdit } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: '',
    author: '',
    generation: '',
    date: '',
    image: '',
    description :''
  });

  useEffect(() => {
    if (product) {
      setEditData(product);
    }
  }, [product]);

 

const handleClose = ()=>{
  navigate('/event');
}

  return (
    <>
    <Admin />
      <main>
        <Container>
          
          <div className=''>
            <h1 className='text-center mt-20'>View Product</h1>
            
            <div>
              <h1>
                Title:-
                {editData.name}
              </h1>
            </div>
            <div>
              <h4>
                Author:-
                {
                  editData.author
                }
              </h4>
            </div>
            <div>
              <h4>
                Generation:-
                {
                  editData.generation
                }
              </h4>
            </div>
            <div>
              <h4>
                Date:-
                {
                  editData.date
                }
              </h4>
            </div>
            <div className='dec-ff'>
              <p>
              description:-
                {
                  editData. description
                }
              </p>
            </div>
            <div>
              <button className="btn btn-primary px-4" onClick={() => handleClose()}>Close</button>
             
              
            </div>

          </div>



        </Container>

      </main>
    </>
  );
}

export default ViewProduct
