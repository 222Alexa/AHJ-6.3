import Board from "./Board";
import BoardController from "./BoardController";


const container = document.querySelector("#container");
const board = new Board(container);

const controller = new BoardController(board);
controller.init();
