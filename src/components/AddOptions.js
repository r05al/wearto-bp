import React, { Component } from 'react';
import { Link } from 'react-router';

class AddOptions extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showFilter: false,
      showAdd: false
    }
  }

  toggleFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }  

  toggleAdd() {
    this.setState({ showAdd: !this.state.showAdd });
  }

  render() {
  	return(
			<div className="float-button"
			     onClick={this.toggleAdd.bind(this)}>
			  +
			  <div className="add-options">
			    <Link to='items/new' className={this.state.showAdd ?
			    "add-button add-item" : "add-button"}>Item</Link>
			    <Link to='looks/new' className={this.state.showAdd ?
			    "add-button add-look" : "add-button"}>Look</Link>
			  </div>
			</div>
  	);
  }
}

export default AddOptions;