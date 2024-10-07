import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { updateDataAsync, updateImg } from '../../Services/Actions/addproductAction';

function EditProducts() {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await dispatch(updateDataAsync(editData));
        navigate('/event');
    };

    const handleUpadetimg = async (e) => {
        const file = e.target.files[0];
        try {
            const url = await dispatch(updateImg(file));
            setEditData({ ...editData, image: url });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    return (
        <>
            <main>
                <Container className='m-0'>
                    <h2 className='bg-warning py-3 ps-2'>Edit Book Details</h2>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="productName" className="mb-3">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="name"
                                value={editData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className='d-flex  gap-5'>
                            <Form.Group controlId="productName" className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter  Author Name"
                                    name="author"
                                    value={editData.author}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="productName" className="mb-3">
                                <Form.Label>Generation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter  Generation"
                                    name="generation"
                                    value={editData.generation}
                                    onChange={handleChange}
                                />
                            </Form.Group>


                        </div>

                        <Form.Group controlId="productPrice" className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter product price"
                                name="price"
                                value={editData.date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="productImage" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleUpadetimg} // Implement this if handling images
                            />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" 
                            type='text'
                            name='description'
                            onChange={handleChange}
                            value={editData.description}
                            rows={3} />
                        </Form.Group>
                        
                        <span>wait few second</span>
                        <br />

                        <Button variant="primary" className='mt-2 px-5' type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
            </main>
        </>
    );
}

export default EditProducts;
