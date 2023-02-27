import styles from "./Food.module.scss";
import clsx from "clsx";
import { food } from "../../../../assets";
import { Link } from "react-router-dom";
function Food() {
  return (
    <div className={clsx(styles.food)}>
      <h1 className={clsx(styles.title)}>Food and Beverage</h1>
      <div className={clsx(styles.slideShow)}>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={food[0]}
              alt="15-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>25 Coins</h2>
              <p>NTUC Fairprice $50 Voucher</p>
            </div>
          </Link>
        </div>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={food[1]}
              alt="1000-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>5 Coins</h2>
              <p
                style={{
                  minWidth: "170px",
                }}
              >
                Free Cold Stone Sundae at any flavour!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Food;
