import { MyHeader } from "./Myheader";
import {useEffect, useState} from 'react';
import {getOrders} from './Utils';
import {motion} from 'framer-motion';
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
								<p key={idx}>{v}</p>
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
			<>
			<MyHeader/>
			<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
            <div className="ContainerListEmpty">
				
				<div className="EmptyListOrder">
					<h2 id="h2_EmptyList">Non hai ancora effettuato ordini</h2>			
				</div>
			</div>
			</motion.div>
			
			</>
		);
	}

}