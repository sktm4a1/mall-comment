import React,{Component} from 'react';
import './style.css'

class OrderItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			stars:props.data.stars || 0,
			editing:false,
			comment:props.data.comment || ''
		}
	}

	render(){
		const {shop,price,product,picture,ifCommented} = this.props.data;
		return (
			<div className="orderItem">
				<div className="orderItem_picContainer">
					<img className="orderItem_pic" src={picture} alt="商品图片"/>
				</div>
				<div className="orderItem_content">
					<div className="orderItem_product">{product}</div>
					<div className="orderItem_shop">{shop}</div>
					<div className="orderItem_detail">
						<div className="orderItem_price">{price}</div>
						{
							!ifCommented ? (
								<div>
									<button className="orderItem_btn orderItem_btn--red" onClick={this.handleClickComment.bind(this)}>评价</button>
								</div>
							) : (
								<div>
									<button className="orderItem_btn orderItem_btn--gray">已评价</button>
								</div>
							)
						}
					</div>
				</div>
				{this.state.editing ? this.renderEditArea() : null}
			</div>
		);
	}

	renderEditArea(){
		return (
			<div className="orderItem_commentContainer">
				<textarea className="orderItem_comment" onChange={this.handleCommentChange.bind(this)} value={this.state.comment}></textarea>
				{this.renderStars()}
				<button className="orderItem_btn orderItem_btn--red" onClick={this.handleSubmitComment}>提交</button>
				<button className="orderItem_btn orderItem_btn--gray" onClick={this.handleCancleClick}>取消</button>
			</div>
		)
	}

	renderStars() {
		const {stars} = this.state;
		return (
			<div>
				{
					[1,2,3,4,5].map((item, index) => {
						const light = stars>=item ?"orderItem_star--light" : "orderItem_star"
						return <span key={index} className={light} onClick={this.handleStarClick.bind(this,item)}>★</span>
					})
				}
			</div>
		)
	}
	handleClickComment() {
		this.setState({
			editing:true
		})
	}
	handleCommentChange(e) {
		this.setState({
			comment:e.target.value
		})
	}
	handleCancleClick = () => {
		this.setState({
			comment:this.props.data.comment || '',
			editing:false,
			stars:this.props.data.stars || 0
		})
	}

	handleStarClick = (stars) => {
		this.setState({
			stars:stars
		})
	}
	handleSubmitComment = () => {
		var id = this.props.data.id;
		var stars = this.state.stars;
		var comment = this.state.comment;
		this.setState({
			editing:false
		})
		this.props.onSubmit(id,stars,comment)
	}

}

export default OrderItem;