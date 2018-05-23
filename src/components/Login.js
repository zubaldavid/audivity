import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const RegisterForm = () => (
  <div className='login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='00BAB4' textAlign='center'>
          <Image src='/audivity.png' />
          <br/>
          <br/>
          {'Welcome to Audivity'}
        </Header>
        <Form size='large'>
          <Segment stacked>

            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>Log In</Button>
          </Segment>
        </Form>
        <Message>
          New with us? <Link to='/'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default RegisterForm
