import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';

export default class Items extends Component {
  setUp() {
    this.state = {
      items: ['Item1', 'Item2'],
    };
  }

  template() {
    const { items } = this.state;

    return `
      <ul>
        ${items.map((item, index) => `<li>${item}<button class="${SELECTOR.CLASS_DELETE_BUTTON}" data-index="${index}">삭제</button></li>`).join('')}
      </ul>
      <button id="${SELECTOR.ID_ADD_BUTTON}">추가</button>
    `;
  }

  setEvent() {
    this.addEvent('click', `#${SELECTOR.ID_ADD_BUTTON}`, () => {
      const items = [...this.state.items];

      this.setState({ items: [...items, `Item:${items.length + 1}`] });
    });

    this.addEvent('click', `.${SELECTOR.CLASS_DELETE_BUTTON}`, (event) => {
      const { target } = event;
      const items = [...this.state.items];
      items.splice(target.dataset.index, 1);

      this.setState({ items });
    });
  }
}
