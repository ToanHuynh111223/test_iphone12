import clsx from "clsx";
import styles from "./Petro.module.scss";
import { petrol } from "../../../../assets";
import { Link } from "react-router-dom";
function Petrol() {
  return (
    <div className={clsx(styles.petrol)}>
      <h1 className={clsx(styles.title)}>Petrol</h1>
      <div className={clsx(styles.slideShow)}>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={petrol[0]}
              alt="15-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>15 Coins</h2>
              <p>
                50% discount for every $100 top-up on your Shell Petrol Card
              </p>
            </div>
          </Link>
        </div>
        <div className={clsx(styles.slideItem)}>
          <Link to="" style={{ textDecoration: "none" }}>
            <img
              src={petrol[1]}
              alt="1000-coins"
              style={{ width: "200px", height: "98px" }}
            />
            <div className={clsx(styles.content)}>
              <h2>
                <img src={petrol[2]} alt="$" style={{ marginRight: "4px" }} />
                1,000 Coins
              </h2>
              <p
                style={{
                  minWidth: "170px",
                }}
              >
                70% discount top-up on your Shell Petrol Card
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  color: "#0062FF",
                }}
              >
                Insufficient coins
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Petrol;
