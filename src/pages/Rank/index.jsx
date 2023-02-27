import clsx from "clsx";
import styles from "./Rank.module.scss";
import Petrol from "./components/Petrol";
import RentalRebate from "./components/RentalRebate";
import Food from "./components/Food";
function Rank() {
  return (
    <div className={clsx(styles.wrapper)}>
      <Petrol />
      <RentalRebate />
      <Food />
    </div>
  );
}

export default Rank;
