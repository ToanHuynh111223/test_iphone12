import clsx from "clsx";
import styles from "./Header.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { backgroundCoupon } from "../../assets";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className={clsx(styles.wrapperHeader)}>
        <div className={styles.comeBack}>
          <Link to="">
            <KeyboardArrowLeftIcon style={{ color: "#000" }} />
          </Link>
        </div>
        <div className={clsx(styles.title)}>
          <h2>Silver Tier</h2>
          <p>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <div className={clsx(styles.coupon)}>
          <img src={backgroundCoupon} alt="background-coupon" />
          <div className={clsx(styles.content)}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "#B5B5BE",
              }}
            >
              Available Coin balance
            </span>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "400",
                lineHeight: "56px",
                marginBottom: "33px",
              }}
            >
              340
            </h2>
            <div className={clsx(styles.progress)}></div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#92929D",
                marginTop: "34px",
                marginBottom: "16px",
                width: "277px",
              }}
            >
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </p>
            <Link
              to=""
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#0062FF",
                marginBottom: "24px",
                textDecoration: "none",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              View tier benefits
              <ArrowForwardIosIcon style={{ color: "#0062FF" }} />
            </Link>
            <Link to="">
              <button
                style={{
                  height: "60px",
                  width: "100%",
                  backgroundColor: "#171725",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "18px",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                My Coupons
              </button>
            </Link>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",
                color: "#B5B5BE",
                margin: "16px 0 0",
                textAlign: "center",
              }}
            >
              Updated : 02/11/2021
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
