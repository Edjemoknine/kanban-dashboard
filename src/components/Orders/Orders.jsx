import { groupNumber, ordersData } from "../../data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";
import css from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./vite.svg" alt="logo" />
        <span>Orders today</span>
      </div>
      <div className={`${css.stat} grey-container`}>
        <span>Amount</span>
        <span>{groupNumber(4860)}</span>
      </div>
      <div className={css.orders}>
        {ordersData.map((order, idx) => (
          <div className={css.order} key={idx}>
            <div>
              <span>{order.name}</span>
              <span>{order.change}</span>
            </div>
            <div>
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={css.ordersChart}>
        <span>Split by orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
