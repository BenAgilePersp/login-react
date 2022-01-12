import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Form, Row, Card, Input, Button, CardBody, CardLink } from 'reactstrap';
import './App.css';
import './signin.css';

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
        <Container className="py-5 my-5 h-100 wrap" fluid>

          <h3 className="display-2 fw-bold text-uppercase col-sm-12 col-md-3 col-xl-1 d-none d-sm-block">ebxc</h3>
          
          <Row className='d-flex justify-content-center'>
            <Col md={9} xl={5} xxl={6}>
              <Card>
                <main>
                  <Form>

                    {/*Login Message*/}
                    <h1 class="h2 login mt-5">LOGIN</h1>
                    <h2 class="h5 login-msg">Welcome back! Please login to your account</h2>

                    <CardBody>
                    
                      {/*Email and Password Input*/}
                      <Input type='email' className='form-control mb-4' id='floatingInput' placeholder='Email'/>
                      <Input type="password" className="form-control mb-5" id="floatingPassword" placeholder="Password"/>

                      {/* Remember me and Forgot Password */}
                        <Row className='mb-4'>
                          <Col>
                            {/* Remember Me */}
                            <div className='checkbox'>
                              <label>
                                <Input type="checkbox" value="remember-me" id="remem-me"/> Remember Me
                              </label>
                            </div>
                          </Col>

                          <Col>
                            {/* Forgot Password */}
                            <div className='link forgot-password'>
                              Forgot Password
                            </div>
                          </Col>
                        </Row>

                        
                        {/* Login Button */}
                        <Row>
                          <div>
                          <Button className="w-100 btn btn-lg btn-primary mb-4" type="submit" color='primary'>Login</Button>
                          </div>
                        </Row>


                        {/* Sign up */}
                        <Row>
                          <div className='sign-up mt-4 h6'>
                            Don't have an account?
                          </div>
                          <CardLink href='#'>Sign up</CardLink>
                        </Row>
                    </CardBody>

                    
                  </Form>
                </main>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
