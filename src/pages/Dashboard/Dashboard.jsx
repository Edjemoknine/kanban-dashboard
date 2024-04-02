import Orders from "../../components/Orders/Orders";
import Statistics from "../../components/Statistics/Statistics";
import { cardsData, groupNumber } from "../../data";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={css.durationButton}>
              <select name="" id="">
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card) => (
              <div className={css.card} key={card.id}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <div>+{card.change}</div>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Statistics />
      </div>
      <Orders />
    </div>
  );
};

export default Dashboard;
