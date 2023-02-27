import styles from "./Footer.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
function Footer() {
  return (
    <footer>
      <div className={clsx(styles.footerMobile)}>
        <ul className={clsx(styles.navbar)}>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              <HomeOutlinedIcon
                sx={{ fontSize: 40 }}
                className={clsx(styles.icon)}
              />
            </Link>
          </li>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              <NotificationsNoneOutlinedIcon
                sx={{ fontSize: 40 }}
                className={clsx(styles.icon)}
              />
            </Link>
          </li>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              <CreditCardOutlinedIcon
                sx={{ fontSize: 40 }}
                className={clsx(styles.icon)}
              />
            </Link>
          </li>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              <PersonOutlineOutlinedIcon
                sx={{ fontSize: 40 }}
                className={clsx(styles.icon)}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
