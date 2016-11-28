import React from 'react'
import ListItems from '../containers/ListItems';	

const SelectionList = () => {
  return (
  	<div className="selection-lists">
  		<ListItems type="jacket"/>
  		<ListItems type="shirt"/>
  		<ListItems type="pant"/>
  		<ListItems type="shoe"/>
  	</div>
  );
}

export default SelectionList;
