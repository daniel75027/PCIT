import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { SegmentedControls } from "react-native-radio-buttons";
import { fieldUpdate } from "actions";

function Field({ value, label, onPress }){
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{label}</Text>
			<Text style={styles.textStyle}>{value}</Text>
		</TouchableOpacity>);
}

class CodingGrid extends Component{
	constructor(props) {
		super(props);
		this.state = {mode: "Add"};
	}

	handlePress(name){
		const old = this.props.fields[name].value;
		const { time } = this.props;
		const { mode } = this.state;

		if (mode === "Add") this.props.fieldUpdate({ field: name, value: { value: old + 1, time } });
		else this.props.fieldUpdate({ field: name, value: { value: old > 0 ? old - 1 : old, time } });
	}

	render(){
		let { items, fields } = this.props;

		return (
			<View style={{ flexDirection: "column", flex: 1 }}>
				<View style={styles.containerStyle}>
					{ _.map(items, (section, section_index) => {
						return (<View key={section_index} style={styles.subContainerStyle}>
							{
								section.map((field, field_index) => {
									const { name, label } = field;
									return <Field key={field_index} 
										value={fields[name].value} 
										label={label} 
										onPress={this.handlePress.bind(this, name)} 
									/>;
								})
							}
						</View>);
					})}
				</View>

				<View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
					<SegmentedControls
						direction={"row"}
						options={ ["Add", "Subtract"] }
						optionStyle={{ fontSize: 18 }}
						onSelection={ mode => this.setState(() => { return { mode }; }) }
						selectedOption={ this.state.mode }
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1
	},
	subContainerStyle: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1
	},
	buttonStyle: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		borderWidth: 1,
		borderColor: "#d4d4d4",
		backgroundColor: "#fff"
	},
	textStyle: {
		fontSize: 16,
		textAlign: "center",
		flex: 1
	}
};

const mapStateToProps = (state) => {
	const { fields, timers } = state.form;

	return { fields, time: timers[0].time };
};

export default connect(mapStateToProps, { fieldUpdate })(CodingGrid);