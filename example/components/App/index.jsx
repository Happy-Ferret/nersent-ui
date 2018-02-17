import React from 'react'

import RaisedButton from '../../../material-react/components/RaisedButton'
import FlatButton from '../../../material-react/components/FlatButton'

import Checkbox from '../../../material-react/components/Checkbox'

import RadioButton from '../../../material-react/components/RadioButton'
import RadioButtonsContainer from '../../../material-react/components/RadioButtonsContainer'

import Switch from '../../../material-react/components/Switch'

import TextField from '../../../material-react/components/TextField'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      darkTheme: false
    }
  }

  onSwitchToggle = (flag) => {
    this.setState({darkTheme: flag})
  }

  render () {
    const darkTheme = this.state.darkTheme

    const appContainerStyle = {
      backgroundColor: !darkTheme ? '#FAFAFA' : '#333'
    }

    const hideDemo = true

    const validate = (input) => {
      const inputValue = input.getValue().toLowerCase()
      const isNersent = inputValue === 'nersent'

      if (isNersent || inputValue.length === 0) return
      else return 'Text must be "nersent"'
    }

    return (
      <div className='app-container' style={appContainerStyle}>
        {!hideDemo && (
          <div>
          <Switch onToggle={this.onSwitchToggle} darkTheme={darkTheme}>
            Dark Theme
          </Switch>
          <Switch darkTheme={darkTheme}>
            Test
          </Switch>
          <RaisedButton darkTheme={darkTheme}>
            raised button
          </RaisedButton>
          <FlatButton darkTheme={darkTheme}>
            flat button
          </FlatButton>
          <Checkbox darkTheme={darkTheme}>
            Text
          </Checkbox>
          <RadioButtonsContainer darkTheme={darkTheme}>
            <RadioButton toggled>First item</RadioButton>
            <RadioButton>Second item</RadioButton>
            <RadioButton>Third item</RadioButton>
          </RadioButtonsContainer>
        </div>
        )}
        <TextField label='Label' validate={validate} />
      </div>
    )
  }
}