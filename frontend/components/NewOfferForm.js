import React from 'react'
import { Button, Form } from 'semantic-ui-react'


const offerBodyPlaceholder = `
  Who are we looking for
  ----------------------

  - developer experienced with web app backend
  - nice to have: experience with AWS infrastructure
  - ...

  About us
  --------

  Lorem ipsum dolor sit amet...
`.replace(/^  /mg, '').trim() + '\n\n';

export default class extends React.Component {

  render() {
    return (
      <Form>

        <Form.Input
          label='Název pozice'
          placeholder='např. Vývojář backendu online multiplayer her'
          size='big'
        />

        <Form.Group inline>
          <Form.Checkbox label='Full-time' />
          <Form.Checkbox label='Part-time' />
          <Form.Checkbox label='Externě' />
          <Form.Checkbox label='Internship' />
          <Form.Checkbox label='Co-founder' />
          <Form.Checkbox label='Nonprofit' />
        </Form.Group>

        <Form.Group grouped>
          <label>Vhodné pro:</label>
          <Form.Checkbox label='Začátečníky - bez praxe, ale s nadšením :)' />
          <Form.Checkbox label='Absolventy VŠ nebo programátory s kratší praxí' />
          <Form.Checkbox label='Zkušené vývojáře' />
        </Form.Group>

        <h3>Lokalita</h3>

        <Form.Group>
          <Form.Checkbox label='Praha' />
          <Form.Checkbox label='Brno' />
          <Form.Checkbox label='Ostrava' />
        </Form.Group>

        <Form.Input inline label='Jinde:' placeholder='např. Horní Dolní' />

        <Form.Checkbox label='Remote - práce na dálku' />

        <h3>Popis pozice</h3>

        <p>
          Zde prosím popište pozici, budoucí tým, produkt, firmu, používané technologie...
          Výši finanční odměny aspoň naznačte :)
        </p>

        <p>
          Text se formátuje pomocí jazyka{' '}
          <a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#table-of-contents'>Markdown</a>:<br/>
          <b>tučný text</b> se píše <code>**tučný text**</code>,{' '}
          <a href="http://python.cz/">odkaz</a> se píše <code>{'[odkaz](http://python.cz/)'}</code>
        </p>

        <div className='vmargin'>
          <Form.TextArea
            autoHeight
            placeholder={offerBodyPlaceholder}
            rows={15}
            style={{ fontFamily: 'monospace' }}
          />
        </div>

        <h4>Náhled</h4>

        <div className='vmargin'>
          TODO
        </div>

        <div className='vmargin'>
          <Form.Button primary>Odeslat</Form.Button>
        </div>

      </Form>

    );
  }



}
