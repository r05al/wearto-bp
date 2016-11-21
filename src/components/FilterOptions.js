import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import { handleDateChange, handleSetLook } from '../actions';
import { connect } from 'react-redux';

class FilterOptions extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showFilter: false,
    }
  }

  toggleFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  handleSetLook(e) {
    let lookId = e.target.value;
    this.props.lookCallbacks.setLook(lookId);
  }

  render() {

    let datedLooks;
    if (this.props.look.date) {
      let day = this.props.look.date.startOf('day');
      datedLooks = this.props.savedLooks.filter((look) => look.date).filter((look) =>
        look.date.format('L') === this.props.look.date.format('L')
      );
    } else {
      datedLooks = this.props.savedLooks;
    }

    let savedLooksSelection = datedLooks.map((look) => {
      return <option key={look.id} value={look.id}>{look.title}</option>
    });

  	return(
			<div className="filter-options">
        <div id="search" onClick={this.toggleFilter.bind(this)}>&#9740;</div>
        <div className={this.state.showFilter ? "search-options search-options--is-open":"search-options"}>
          <DatePicker selected={this.props.look.date}
                      isClearable={true}
                      placeholderText='Select a date to filter by'
                      popoverAttachment='bottom center'
                      popoverTargetAttachment='top center'
                      popoverTargetOffset='10px 50px'
                      onChange={this.props.handleDateChange.bind(this)} 
                      style={{ flex: "2"}}/>
          <select id="savedLook"
                  value={this.props.look.id}
                  style={{ flex: "1"}}
                  onChange={this.props.handleSetLook.bind(this)}>
            <option value="">saved looks</option>
            {savedLooksSelection}
          </select>
        </div>
			</div>
  	);
  }
}

const mapStateToProps = (state) => (
  {
    look: state.look,
    savedLooks: state.savedLooks,
  }
)

const mapDispatchToProps = ({
  handleDateChange,
  handleSetLook
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
