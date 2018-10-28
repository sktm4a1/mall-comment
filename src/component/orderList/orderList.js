import React,{Component} from 'react';
import OrderItem from '../orderItem/index.js'


	
class OrderList extends Component {
	constructor(props){
		super(props)
		this.state = {data:[]}
	}

	componentDidMount() {
		fetch('/mock/orders.json').then(res => {
			if(res.ok){
				res.json().then(data => {
					this.setState({
						data:data
					})
				})
			}
		})
	}
	render(){
		return (
			<div className="orderList">
				{
					this.state.data.map(item => {
						return <OrderItem data={item} key={item.id} onSubmit={this.handleOnSubmit}></OrderItem>
					})
				}
			</div>
		);
	}

	handleOnSubmit = (id,stars,comment) => {
		const newData = this.state.data.map((item ,index) => {
			return item.id === id ? {
				...item,stars,comment,ifCommented:true
			} : item
		})
		this.setState({
			data:newData
		})
	}

}

export default OrderList;