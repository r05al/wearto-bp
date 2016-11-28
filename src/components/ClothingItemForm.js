import React, { Component, PropTypes } from 'react';

class ClothingItemForm extends Component {
	static propTypes = {
		buttonLabel: PropTypes.string.isRequired,
		draftItem: PropTypes.shape({
			type: PropTypes.string,
			title: PropTypes.string,
			tags: PropTypes.string
		}).isRequired,
		handleChange: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		handleClose: PropTypes.func.isRequired
	};

	handleChange(field, e) {
		this.props.handleChange(field, e.target.value);
	}

	handleClose(e) {
		e.preventDefault();
		this.props.handleClose();
	}

	render() {
		const { draftItem, buttonLabel } = this.props
		return (
			<div>
				<div className="item big">
					<form onSubmit={this.props.handleSubmit.bind(this)}>
						<input type='text'
									 value={draftItem.get('title')}
									 onChange={this.handleChange.bind(this,'title')}
									 placeholder="Product Name"
									 required={true}
									 autoFocus={true} /><br />
						<textarea value={draftItem.get('tags')}
											onChange={this.handleChange.bind(this,'tags')}
											placeholder="Description Tags"
											required={true} /><br />
						<label htmlFor="type">Type</label>
						<select id="type"
										value={draftItem.get('type')}
										onChange={this.handleChange.bind(this,'type')}>
							<option value="jacket">Jacket</option>
							<option value="shirt">Shirt</option>
							<option value="pant">Pant</option>
							<option value="shoe">Shoe</option>
						</select><br />
						<input type="text"
									 value={draftItem.get('href')}
									 onChange={this.handleChange.bind(this,'href')}
									 placeholder="image url" />
						<div className="actions">
							<button type="submit">{buttonLabel}</button>
						</div>
					</form>
				</div>
				<div className="overlay" onClick={this.handleClose.bind(this)}>
				</div>
			</div>
		);
	}
}

export default ClothingItemForm;
