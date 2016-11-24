import React, { Component } from 'react';
import NavMenu from '../components/NavMenu';
import SelectedItems from '../containers/SelectedItems';
import SelectionList from '../components/SelectionList';
import AddOptions from '../components/AddOptions';
import FilterOptions from '../components/FilterOptions';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
	componentDidMount(){
	  // this.props.fetchCards();
	}

	render() {
		return(
			<div>
				<NavMenu />
				<SelectedItems />
				<AddOptions />
				<FilterOptions />
				<SelectionList />
				{ this.props.children }
			</div>
		);
	}
}

export default App;
