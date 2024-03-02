import { MyHeader } from "./Myheader";
import {useEffect, useContext, useState} from 'react';
import { LoginContext } from './LoginContext';
import {getOrders} from './FetchProducts';
import './Style/StyleMyOrders.css';


export function MyOrders() {

	
	const [orders, setOrders] = useState([]);
	const loginData = JSON.parse(localStorage.getItem("loginData"));
	
	useEffect(() => {
		const fetchOrders = async () => {

			const tmp = await getOrders(loginData.data.user.email);	
			setOrders(tmp);
		  };
		
		fetchOrders();
		
	}, [])

	
	if(orders.length !== 0) {

		return (
			<>
			<MyHeader/>
			
				<div className="order-history">
      			{orders.map((order, index) => (
      			  
					<div key={index} className="order-item">
						<div className="order-image">
							<img src={order.url} alt={order.name} />
						</div>
						<div className="order-info">
							<h2>DESCRIZONE</h2>
							<p>{order.data}</p>
							{order.description.map((v, idx) => (
								<p>{v}</p>
							))}
							<p>{order.prezzo}</p>
						</div>
				  	</div>
      			))}
   				</div>
			</>
		);
	}
	else {
		
		return (


			<></>

		);
	}

}