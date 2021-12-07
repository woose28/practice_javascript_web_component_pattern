import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';
import $ from '../utils/domTool.js';

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
        ${items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <button id="${SELECTOR.ID_ADD_BUTTON}">추가</button>
    `;
  }

  setEvent() {
    $(`#${SELECTOR.ID_ADD_BUTTON}`).addEventListener('click', () => {
      const { items } = this.state;

      this.setState({ items: [...items, `Item${items.length + 1}`] });
    });
  }
}
