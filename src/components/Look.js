import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import { Link } from 'react-router';
import { getClothingItem } from '../reducers';

class Look extends Component {
  static propTypes = {
    clothingItems: PropTypes.instanceOf(List).isRequired,
    look: PropTypes.instanceOf(Map).isRequired,
    deselect: PropTypes.func.isRequired
  };

  render() {
    const { look, clothingItems, deselect } = this.props;
    const id = look.get('id');
    const pieces = look.get('pieces');
    const types = pieces.keySeq();

    const lookArray = types.map((type) => {
    	let info, itemInfo;
      if (pieces.get(type)) {
        itemInfo = getClothingItem(clothingItems, pieces.get(type));
      } else {
        itemInfo = Map();
      }
      const href = itemInfo.get('href');
      if (href && href.includes('placehold.it')) {
        info = <span style={{textAlign: 'center', width: '100%'}}>
                {itemInfo.get('title')}
               </span>;
      }
    	return <div className="look-grid" key={type}
									onClick={ deselect.bind(this, itemInfo) }>
                <img src={href} />
								{info}
						 </div>
    });

    let edit;
    if (id) {
    	edit = <div className="look-edit"><Link to={`looks/${id}/edit`}>✎</Link></div>
    }

    return (
      <div className="look">
        <div className="look-description">
        	{ edit }
        	<h2><strong>{look.get('title')}</strong></h2>
        	<p>{look.get('description')}</p>
        </div>
        <div className="look-flex">
	        { lookArray }
	      </div>
      </div>
    );
  }
}

export default Look;
