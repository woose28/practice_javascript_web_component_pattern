import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';

export default class Items extends Component {
  template() {
    const { items } = this.props;

    return `
      <ul>
        ${items.map((item) => (`<li>
          ${item.name}
          <button class="${SELECTOR.CLASS_DELETE_BUTTON}" data-id="${item.id}">삭제</button>
        </li>`)).join('')}
      </ul>
      <button id="${SELECTOR.ID_ADD_BUTTON}">추가</button>
    `;
  }

  setEvent() {
    const { addItem, deleteItem } = this.props;

    this.addEvent('click', `#${SELECTOR.ID_ADD_BUTTON}`, () => {
      addItem();
    });

    this.addEvent('click', `.${SELECTOR.CLASS_DELETE_BUTTON}`, (event) => {
      deleteItem(parseInt(event.target.dataset.id, 10));
    });
  }
}
