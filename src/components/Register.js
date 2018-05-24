import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Progress} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Delay from 'react-delay'

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addProgressbar = this.addProgressbar.bind(this);
    this.nap = this.nap.bind(this);
    this.state = { progress: 0 }
    this.state = {show : true}
  }

  nap(ms){
    let start = Date.now();
    while(Date.now() < start + ms) {}
  }

  handleClick() {
    this.setState({progress:10})
  }

  addProgressbar(){
    const{ show } = this.state;
    this.setState({show : !show})
  }

  render () {
    return (
      <div className='register-form'>
      {this.state.show && <progressBar/> }
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='00BAB4' textAlign='center'>
            <Image src='/audivity.png'/>
            <br/>
            <br/>
              {'Welcome to Audivity'}
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>

              <Form.Input
                fluid
                name = 'name'
                type = 'text'
                icon = 'user'
                iconPosition ='left'
                placeholder ='Full Name'
              //  onChange = {e => this.onChange(e)}
                //value = {this.state.name}
              />
                <Form.Input
                  fluid
                  name = 'email'
                  type='text'
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  //value={this.state.email}
                  //onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  name = 'passwordConfirmation'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  //value={this.state.password}
                  //onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Re-Enter Password'
                  type='password'
                //  value={this.state.passwordConfirmation}
                //  onChange={this.handleChange}
                />

                <Link to='/onboard'>
                <Button color='teal' fluid size='large' onClick={this.addProgressbar}> Sign Up</Button>
                </Link>
              </Segment>
            </Form>
            <Message>
              Already a member? <Link to='/login'>Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

class progressBar extends React.Component{
  render(){
    return(
      <Progress value='4' total='5' progress={this.state.progress}/>
    )
  }
}

export default RegisterForm
