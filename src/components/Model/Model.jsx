import { Padding } from "@mui/icons-material";
import css from "./Model.module.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useState } from "react";
const Model = ({ visible, onClose, handleCard }) => {
  const customStyle = {
    background: "rgb(20,20,20)",
    padding: "20px",
    width: "50%",
    top: "3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <Rodal customStyles={customStyle} visible={visible} onClose={onClose}>
      <div className={css.container}>
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span className={css.label}>Detail</span>
          <textarea
            className={css.input}
            onChange={(e) => setDetail(e.target.value)}
            cols="30"
            rows={10}
            value={detail}
          ></textarea>
        </div>
        <button
          onClick={() => {
            handleCard(title, detail);
            setDetail("");
            setTitle("");
          }}
          disabled={title === "" || detail === ""}
          className={css.save}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default Model;
