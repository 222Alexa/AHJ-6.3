export default class Board {
  constructor(container) {
    this.container = container;
    this.board = null;
  }

  createBoard() {
    this.board = document.createElement("div");
    this.board.classList.add("board-container");
    this.bindToDOM();
  }

  static get markup() {
    return `
    
    <div class="board-container">
    <h3 class="board__title">Avaliable Files (without sms and registration):</h3>
    <div class="board"></div>
    <div class="board__download-data">
      <h3 class="download-data__title">You've already downloaded: </h3>    
        <span class="text__download-data">0</span>
        <span class="unit__download-data">Mb</span>     
    </div>
  </div>
		`;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
  }

  get downloadDataText() {
    return this.container.querySelector(".text__download-data");
  }

  set downloadDataText(text) {
    return (this.container.querySelector(".text__download-data").textContent =
      text);
  }
  showCount(text) {
    this.downloadDataText = text;
  }
}
