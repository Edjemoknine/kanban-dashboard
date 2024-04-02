/* eslint-disable react/prop-types */
import { useState } from "react";
import Model from "../../components/Model/Model";
import useBoard from "../../context/Board";
import "./Board.css";
import Board, {
  moveColumn,
  moveCard,
  addCard,
  addColumn,
  removeCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const BoardPage = () => {
  const { board, setBoard } = useBoard();
  const [modelOpen, setModelOpen] = useState(false);
  const onClose = () => {
    setModelOpen(!modelOpen);
  };

  const handleDragColumn = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination);
    setBoard(updatedBoard);
  };
  const handleDrag = (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };
  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumn(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        background: "linear-gradient(90deg, #de4546 0%, #cfcf14 100%)",
      };
    }
    if (title === "Doing") {
      return {
        background: "linear-gradient(90deg, #fcfc11 0%, #cdcfa4 100%)",
      };
    }
    if (title === "Completed") {
      return {
        background: "linear-gradient(90deg, #000000 0%, #dada75 100%)",
      };
    }
    if (title === "Backlog") {
      return {
        background: "linear-gradient(90deg, #544fdf 0%, #cf5454 100%)",
      };
    }
  };

  return (
    <div className="board-container">
      <span>Trello Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleDrag}
        onColumnDragEnd={handleDragColumn}
        renderCard={(props) => (
          <div className="Kanban-card " style={getGradient(props)}>
            <div>
              <span>{props.title}</span>
              <button
                onClick={() => {
                  const updatedBoard = removeCard(
                    board,
                    getColumn(props),
                    props
                  );
                  setBoard(updatedBoard);
                }}
                className="removeBtn"
              >
                X
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props) => {
          return (
            <div className="column-header">
              <span>{props.title}</span>
              <span onClick={() => setModelOpen(true)}>+</span>
              <Model visible={modelOpen} onClose={onClose} />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
