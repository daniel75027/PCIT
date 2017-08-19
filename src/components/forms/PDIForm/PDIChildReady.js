import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-icon-checkbox';
import { fieldUpdate } from '../../../actions';
import { CardSection, Multiline, Button } from '../../common';
import IncDecInput from '../../IncDecInput';
import { SubHeaderStyle } from '../../../styles';
import Timer from '../../Timer';

class PDIChildReady extends Component{
  onNext(){
    Actions.pdiObey3();
  }

  render(){
    return (
      <ScrollView>
        <Timer />
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={SubHeaderStyle}>
            Ask child if ready.
            Instruct Caregiver to repeat original command.
          </Text>
        </CardSection>
             
        <CardSection>
          <Button onPress={this.onNext.bind(this)}>
            Next
          </Button>
        </CardSection>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { fieldUpdate })(PDIChildReady);