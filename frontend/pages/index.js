import React from 'react'
import CustomHead from '../components/CustomHead'
import { Container, Button } from 'semantic-ui-react'
import Router from 'next/router'

export default class extends React.Component {

  render() {
    return (
      <div>
        <CustomHead />
        <Container text style={{ marginTop: '2rem' }}>

          <h1>Python a práce</h1>


          <h2>Nabídky práce</h2>

          <p>
            <Button
              basic
              color='red'
              size='small'
              content='Zadat novou nabídku'
              onClick={() => { Router.push('/zadat-nabidku') }}
            />
          </p>


          <h2>Nabídky odjinud</h2>

          <p>Zde jsou automaticky agregovány pracovní nabídky z kategorie Python ze <a href="https://www.startupjobs.cz/nabidky/15/python-programmer">StartupJobs.cz</a>.</p>



        </Container>
      </div>
    );
  }

}
