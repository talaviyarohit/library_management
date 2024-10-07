



import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfring';








const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/event'); // Redirect to home page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>

      <Container className="login-container">

        <Row className="justify-content-md-center">
          <Col md={6}>

            {error && <p className="text-danger">{error}</p>}



            <Form onSubmit={handleSubmit} className='form' >
              <h2 className="mb-4 text-center fs-3 font-bold">Login</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className='p-3'>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input p-3 rounded-full"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label className='p-3'>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  className="input p-3 rounded-full"
                />
              </Form.Group>
              <span className="span">Forgot password?</span>

              {/* <Button className="button-submit rounded-full mt-12 text-center text-blue-50 font-extrabold " type="submit" >
                Login
              </Button> */}
              <button className="styled-button mt-12" type="submit">
                Login
                <div className="inner-button">
                  <svg
                    id="Arrow"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    width="30px"
                    class="icon"
                  >
                    <defs>
                      <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
                        <stop style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} offset="0%" />
                        <stop style={{ stopColor: "#AAAAAA", stopOpacity: 1 }} offset="100%" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#iconGradient)"
                      d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
                    ></path>
                  </svg>
                </div>
              </button>




              <p className="p fs-5">Don't have an account? <span className="span"><Link to='/registerPage' className='p-4 font-bold  fs-4 '>Sing In</Link></span></p>
            </Form>







          </Col>
        </Row>




      </Container>






    </>
  );
};

export default Login;
