import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AnimateArrow({ children }) {
  return <motion.div>{children}</motion.div>;
}

AnimateArrow.propTypes = {
  children: PropTypes.node,
};

export default AnimateArrow;
