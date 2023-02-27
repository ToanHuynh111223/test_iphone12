import clsx from "clsx";
import styles from "./RentalRebate.module.scss";
import { rentalRebate } from "../../../../assets";
import { Link } from "react-router-dom";
function RentalRebate() {
  return (
    <div className={clsx(styles.rentalRebate)}>
      <h1 className={clsx(styles.title)}>Rental Rebate</h1>
      <div className={clsx(styles.slideShow)}>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={rentalRebate[0]}
              alt="15-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>20 Coins</h2>
              <p>Get $20 Rental rebate</p>
            </div>
          </Link>
        </div>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={rentalRebate[1]}
              alt="1000-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>15 Coins</h2>
              <p
                style={{
                  minWidth: "170px",
                }}
              >
                Get $500 Rental rebate
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RentalRebate;
