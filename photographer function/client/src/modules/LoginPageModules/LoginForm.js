import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onLogin(e) {
    e.preventDefault();
    if (
      this.state.email === 'admin@gmail.com' &&
      this.state.password === 'admin123'
    ) {
      var x = document.getElementById('snackbar');
      x.className = 'show';
      x.innerHTML = 'Login Success!';
      setTimeout(function () {
        x.className = x.className.replace('show', '');
      }, 3000);
      window.location = '/adminhome';
    } else {
      var y = document.getElementById('snackbar');
      y.className = 'show';
      y.innerHTML = 'Email or Password is wrong';
      setTimeout(function () {
        y.className = y.className.replace('show', '');
      }, 3000);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='container text-center'>
          <div className='container mt-5'>
            <h5> ADMIN LOGIN HERE !</h5>
          </div>
          <div className='container mt-3'>
            <Form onSubmit={this.onLogin}>
              <FormGroup className='mt-2'>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  onChange={(e) => {
                    this.onValueChange(e);
                  }}
                />
              </FormGroup>
              <FormGroup className='mt-2'>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => {
                    this.onValueChange(e);
                  }}
                />
              </FormGroup>
              <a className='text-left' href='/'>
                Forget password?
              </a>
              <FormGroup className='mt-2'>
                <Button className='mt-2 loginBtn'>Login</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div id='snackbar'></div>
      </div>
    );
  }
}

export default LoginForm;
