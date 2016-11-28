import React, { Component } from 'react';
import NavMenu from '../components/NavMenu';
import ListContainer from './ListContainer';
import Look from '../components/Look';
import AddOptions from '../components/AddOptions';
import FilterOptions from '../components/FilterOptions';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { deselect, setLook, updateDate } from '../actions'
import { getLook } from '../reducers';

class App extends Component {

	handleDeselect = (item) => {
	  const itemType = item.get('type');
	  this.props.deselect(itemType);
	}

	handleSetLook = (e) => {
	  const lookId = e.target.value;
	  const look = getLook(this.props.looks, lookId);
	  this.props.setLook(look);
	}

	handleDateChange = (date) => {
	  this.props.updateDate(date);
	}

	render() {
		const { look, looks, clothingItems } = this.props;

		return(
			<div>
				<NavMenu />
				<Look look={look} 
							clothingItems={clothingItems} 
							deselect={this.handleDeselect}/>
				<AddOptions />
				<FilterOptions look={look}
											 looks={looks}
											 setLook={this.handleSetLook}
											 updateDate={this.handleDateChange}/>
				<ListContainer />
				{this.props.children}
			</div>
		);
	}
}

const mapDispatchToProps = ({
	deselect,
	setLook,
	updateDate,
})

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	look: state.lookDraft,
	looks: state.looks,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
