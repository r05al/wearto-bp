import React, { Component, PropTypes } from 'react';
import ListItems from '../containers/ListItems';	

class SelectionList extends Component {

	render() {
    return (
    	<div className="selection-lists">
    		<ListItems type="jacket"/>
    		<ListItems type="shirt"/>
    		<ListItems type="pant"/>
    		<ListItems type="shoe"/>
	  	</div>
    );
	}
}

export default SelectionList;