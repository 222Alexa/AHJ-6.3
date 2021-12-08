import Card from "./Card";
import data from "./catalog";

export default class BoardController {
  constructor(board) {
    this.board = board;
    this.state = [];
    this.count = 0;
  }

  init() {
    this.board.createBoard();
    this.renderingCard();
    const cardsPanel = document.querySelector(".board");
    this.addSubscribe(cardsPanel);
  }

  addSubscribe(element) {
    element.addEventListener("click", this.onClickDownload.bind(this));
  }

  onClickDownload(e) {
    if (!e.target.classList.contains("download")) {
      return;
    }

    const value =
      e.target.parentElement.querySelector(".card__size").textContent;
    this.count += Number(value);
    this.board.showCount(this.count.toFixed(1));
  }

  renderingCard() {
    const arrFiles = data;
    arrFiles.forEach((element) => {
      const card = new Card(element);
      card.init();
    });
  }
}
