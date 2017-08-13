import React from 'react'
import CustomHead from '../components/CustomHead'
import { Container } from 'semantic-ui-react'
import Router from 'next/router'

import NewOfferForm from '../components/NewOfferForm'


export default class extends React.Component {

  render() {
    return (
      <div>
        <CustomHead />
        <Container text style={{ marginTop: '2rem' }}>

          <h1>Zadat novou nabídku práce</h1>

          <NewOfferForm />

        </Container>
      </div>
    );
  }

}
