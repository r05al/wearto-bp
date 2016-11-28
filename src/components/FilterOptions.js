import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';

class FilterOptions extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showFilter: false,
    }
  }

  static propTypes = {
    look: PropTypes.object.isRequired,
    looks: PropTypes.object.isRequired,
    setLook: PropTypes.func.isRequired,
    updateDate: PropTypes.func.isRequired
  }

  toggleFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  render() {
    let datedLooks;
    const {look, looks, setLook, updateDate } = this.props;

    if (look.get('date')) {
      datedLooks = looks.filter((l) => l.get('date'))
                    .filter((l) => 
                      l.get('date').format('L') === look.get('date').format('L')
                    );
    } else {
      datedLooks = looks;
    }

    const looksSelection = datedLooks.map((look) => {
      return <option key={look.get('id')} value={look.get('id')}>{look.get('title')}</option>
    });

  	return(
			<div className="filter-options">
        <div id="search" onClick={this.toggleFilter.bind(this)}>&#9740;</div>
        <div className={this.state.showFilter ? 'search-options search-options--is-open':'search-options'}>
          <DatePicker selected={look.get('date')}
                      isClearable={true}
                      placeholderText='Select a date to filter by'
                      popoverAttachment='bottom center'
                      popoverTargetAttachment='top center'
                      popoverTargetOffset='10px 50px'
                      onChange={updateDate.bind(this)} 
                      style={{ flex: '2'}}/>
          <select id="savedLook"
                  value={look.get('id')}
                  style={{ flex: '1'}}
                  onChange={setLook.bind(this)}>
            <option value="">Build a Look</option>
            {looksSelection}
          </select>
        </div>
			</div>
  	);
  }
}

export default FilterOptions;
