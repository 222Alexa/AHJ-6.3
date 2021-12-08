export default class Card {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.bindToDOM();
  }

  static template(element) {
    return `
    <div class="card-box">
      <h3 class="card__title">${element.name}</h3>
      <span class="card__size">${element.size}</span>
      <span class="card__unit">Mb</span> 
      <a class="download" href="${element.url}"download="${element.name}" rel="noopener">Download</a>
  </div>

`;
  }

  bindToDOM() {
    const cardBox = document.querySelector(".board");

    const card = this.addCard(this.element);

    cardBox.insertAdjacentHTML("beforeend", card);
  }

  addCard() {
    if (this.element) {
      const result = this.constructor.template(this.element);
      return result;
    }
    return false;
  }
}
