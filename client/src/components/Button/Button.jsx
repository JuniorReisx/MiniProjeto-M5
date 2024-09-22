import PropTypes from "prop-types";
import "./Button.css";
import "../../index.css";

export function Button(props) {
  return (
    <>
      <button className="btn-blue">
        <p>{props.title}</p>
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
