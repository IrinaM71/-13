import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = ({ setFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Фильтровать пользователей..."
      onChange={(event) => setFilter(event.target.value)}
    />
  );
};

export default connect(null, { setFilter })(Filter);
