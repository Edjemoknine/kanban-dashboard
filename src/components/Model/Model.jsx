import css from "./Model.module.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
const Model = ({ visible, onClose }) => {
  return <Rodal visible={visible} onClose={onClose}></Rodal>;
};

export default Model;
