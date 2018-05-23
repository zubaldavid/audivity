import React, { Component } from 'react'
import { Button,Grid, Header, Icon, Modal,Embed, Form, Card, Image} from 'semantic-ui-react'
import { Player } from 'video-react';


const ModalExampleShorthand = () => (

  <div className='tutorial-form'>
  <Grid
    textAlign='center'
    style={{ height: '75%' }}
    verticalAlign='middle'
  >
    <Grid.Column style={{ maxWidth: 650 }}>
      <Header>Thank you for registering with us.</Header>
      <h1>Let us start you off on a new project!</h1>
      <br/>
      <br/>
      <Form.Input
        fluid
        name = 'name'
        type =  'text'
        icon ='user'
        iconPosition ='left'
        placeholder ='Full Name'
      />
      <br/>
      <Form.Input
        fluid
        name = 'name'
        type =  'text'
        icon ='external'
        iconPosition ='left'
        placeholder ='Link to blog'
      />
      <br/>
      <Form.Input
        fluid
        name = 'name'
        type =  'text'
        icon ='male'
        iconPosition ='left'
        placeholder ='Gender preference'
      />
      <br/>
      <Form.Input
        fluid
        name = 'name'
        type =  'text'
        icon ='industry'
        iconPosition ='left'
        placeholder ='What industry are you in?'
      />
      <br/>
      <br/>
      <Modal className = 'scrolling'
        trigger={<Button>Show Modal</Button>}
        header='Modal!'
        content='Video would go here.'
        // <div>
        //   <Embed id='125292332' placeholder='/assets/images/vimeo-example.jpg' source='vimeo'/>
        // </div>
        actions={[
          { key: 'done', content: 'Done', positive: true },
        ]}
      />
      </Grid.Column>
      </Grid>


      <Card.Group  textAlign='center' verticalAlign='left' style={{ marginRight: '1.5%',float:'right'}}>
      <Card>
      <Card.Content>
      <Image floated='right' size='mini' src='matthew.png' />
      <Card.Header>
      Steve Sanders
      </Card.Header>
      <Card.Meta>
      Specialist
      </Card.Meta>
      <Card.Description>
      Steve can help if you have any questions.
      </Card.Description>
      </Card.Content>
      <Card.Content >
      <div className='ui two buttons'>
      <Button basic color='green'>Yes</Button>
      <Button basic color='red'>No</Button>
      </div>
      </Card.Content>
      </Card>
      </Card.Group>
    </div>

)

export default ModalExampleShorthand
