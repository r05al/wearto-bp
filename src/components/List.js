import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class RightNavButton extends Component {
  render() {
			let style = {
			left: 0,
			position: "absolute",
			zIndex: 1,
			top: "30%",
			opacity: ".7",
			cursor: "pointer",
			fontSize: "4em"
		}
    return <span{...this.props} style={style}>&#8249;</span>  
  }
}

class LeftNavButton extends Component {
  render() {
		let style = {
			right: 0,
			position: "absolute",
			zIndex: 1,
			top: "30%",
			opacity: ".7",
			cursor: "pointer",
			fontSize: "4em"
		}
    return <span{...this.props} style={style}>&#8250;</span>  
  }
}

class List extends Component {

	
	toggleList() {
		this.props.toggleList(this.props.type);
	}

	render() {
		let { type, listItems } = this.props;
		let leftNav = <LeftNavButton />;
		let rightNav = <RightNavButton />;
		let settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 7,
			slidesToScroll: 1,
			nextArrow: leftNav,
			prevArrow: rightNav
		};

		let clothingItems, slider;
		if (listItems[type]) {
			clothingItems = this.props.clothingItems
			.filter((item) => item.type === type)
			.map((item) => {
  			let info;
  			if (item.href.includes('placehold.it')) {
  				info = <span onClick={ this.props.select.bind(null, item) }
			  							 style={{position: "absolute", left: 0, textAlign: "center", width: "100%"}}>
			  					{item.title}
			  				</span>;
  			}
	  		return (
	  			<div className='clothing' key={item.id}>
	  				<div style={{width: "90%", margin: "0 auto"}}>
		  				<img src={ item.href }
									 onClick={ this.props.select.bind(null, item) }
									 style={ item.available ? {} : { filter: "opacity(50%)" }}/>
							{ info }
		  				<div className="item-edit"><Link to={`items/${item.id}/edit`}>✎</Link></div>
		  				<div className="item-toggle" onClick={this.props.toggleItem.bind(null, item)}>&#9852;</div>

		  			</div>
	  			</div>
	  		);
	  	});
		  slider = <Slider {...settings}>{clothingItems}</Slider>
		}


    return (
    	<div className="list">
	    	<div className={ listItems[type] ? 
    					`list-title list-title--is-open ${type}` : 
    					`list-title ${type}`} 
    					onClick={this.toggleList.bind(this)}>
	      </div>
    		<ReactCSSTransitionGroup transitionName="toggle"
    		                         transitionEnterTimeout={500}
    		                     		 transitionLeaveTimeout={500}>
		  	{ slider }
		  	</ReactCSSTransitionGroup>

	  	</div>
    );
	}
}

export default List;