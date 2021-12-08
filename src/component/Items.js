import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';

export default class Items extends Component {
  template() {
    const { items } = this.props;

    return `
      <ul>
        ${items.map((item) => (`<li>
          ${item.name}
          <button 
            class="${SELECTOR.CLASS_ACTIVE_BUTTON}"
            style="color: ${item.isActive ? '#09F' : '#F09'}"
            data-id="${item.id}"
          >
            ${item.isActive ? '활성' : '비활성'}
          </button>
          <button class="${SELECTOR.CLASS_DELETE_BUTTON}" data-id="${item.id}">삭제</button>
        </li>`)).join('')}
      </ul>
    `;
  }

  setEvent() {
    const { toggleItem, deleteItem } = this.props;

    this.addEvent('click', `.${SELECTOR.CLASS_ACTIVE_BUTTON}`, (event) => {
      toggleItem(parseInt(event.target.dataset.id, 10));
    });

    this.addEvent('click', `.${SELECTOR.CLASS_DELETE_BUTTON}`, (event) => {
      deleteItem(parseInt(event.target.dataset.id, 10));
    });
  }
}
