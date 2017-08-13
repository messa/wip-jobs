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

const offerTypeCheckboxes = [
  {key: 'typeFullTime', label: 'Full-time'},
  {key: 'typePartTime', label: 'Part-time'},
  {key: 'typeExternal', label: 'Externě'},
  {key: 'typeInternship', label: 'Internship'},
  {key: 'typeCofounder', label: 'Co-founder'},
  {key: 'typeNonprofit', label: 'Nonprofit'},
];

const goodForCheckboxes = [
  {key: 'forBeginners', label: 'Začátečníky - bez praxe, ale s nadšením :)'},
  {key: 'forJuniors', label: 'Absolventy VŠ nebo programátory s kratší praxí'},
  {key: 'forSeniors', label: 'Zkušené vývojáře'},
];

const locationPresets = [
  {key: 'locationPresetPrague', label: 'Praha'},
  {key: 'locationPresetBrno', label: 'Brno'},
  {key: 'locationPresetOstrava', label: 'Ostrava'},
];


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      customLocation: '',
      remote: false,
    };
    offerTypeCheckboxes.map(({key}) => { this.state[key] = false; });
    goodForCheckboxes.map(({key}) => { this.state[key] = false; });
    locationPresets.map(({key}) => { this.state[key] = false; });
  }

  render() {
    const renderCheckbox = ({key, label}) => (
      <Form.Checkbox
        key={key} label={label} checked={this.state[key]}
        onChange={() => { this.setState({ [key]: !this.state[key] }) }}
      />
    );
    return (
      <Form>
        { /* <pre>{JSON.stringify(this.state, null, 2)}</pre> */ }

        <Form.Input
          label='Název pozice'
          placeholder='např. Vývojář backendu online multiplayer her'
          size='big'
          value={this.state.title}
          onChange={event => { this.setState({ title: event.target.value }) }}
        />

        <Form.Group inline>
          {offerTypeCheckboxes.map(({key, label}) => renderCheckbox({key, label}))}
        </Form.Group>

        <Form.Group grouped>
          <label>Vhodné pro:</label>
          {goodForCheckboxes.map(({key, label}) => renderCheckbox({key, label}))}
        </Form.Group>

        <h3>Lokalita</h3>

        <Form.Group>
          {locationPresets.map(({key, label}) => renderCheckbox({key, label}))}
        </Form.Group>

        <Form.Input
          inline
          label='Jinde:'
          placeholder='např. Horní Dolní'
          value={this.state.customLocation}
          onChange={event => { this.setState({ customLocation: event.target.value }) }}
        />

        {renderCheckbox({ key: 'remote', label: 'Remote - práce na dálku' })}

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
            value={this.state.description}
            onChange={(event) => { this.setState({ description: event.target.value }) }}
          />
        </div>

        <h3>Náhled</h3>

        <div className='vmargin'>
          <pre>{this.state.description}</pre>
        </div>

        <div className='vmargin'>
          <Form.Button primary>Odeslat</Form.Button>
        </div>

      </Form>

    );
  }



}
