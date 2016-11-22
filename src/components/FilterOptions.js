import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getLook } from '../reducers';
import { handleDateChange, setLook } from '../actions';

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
    let look = getLook(this.props.looks, lookId);
    this.props.setLook(look);
  }

  render() {

    let datedLooks;
    if (this.props.look.date) {
      let day = this.props.look.date.startOf('day');
      datedLooks = this.props.looks.filter((look) => look.date).filter((look) =>
        look.date.format('L') === this.props.look.date.format('L')
      );
    } else {
      datedLooks = this.props.looks;
    }

    let looksSelection = datedLooks.map((look) => {
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
                  onChange={this.handleSetLook.bind(this)}>
            <option value="">Build a Look</option>
            {looksSelection}
          </select>
        </div>
			</div>
  	);
  }
}

const mapStateToProps = (state) => (
  {
    look: state.lookDraft,
    looks: state.looks,
  }
)

const mapDispatchToProps = ({
  handleDateChange,
  setLook
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
