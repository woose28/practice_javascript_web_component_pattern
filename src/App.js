import Component from './core/Component.js';
import Items from './component/Items.js';
import SELECTOR from './constant/selector.js';
import { $ } from './utils/domTool.js';

export default class App extends Component {
  setUp() {
    this.state = {
      nextId: 4,
      items: [
        {
          id: 1,
          name: 'apple',
        },
        {
          id: 2,
          name: 'banana',
        },
        {
          id: 3,
          name: 'cherry',
        },
      ],
    };
  }

  template() {
    return `
      <div id="${SELECTOR.ID_ITEMS}"></div>
    `;
  }

  mounted() {
    this.$items = $(`#${SELECTOR.ID_ITEMS}`);

    new Items(this.$items, {
      items: this.state.items,
      addItem: this.addItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
    });
  }

  addItem() {
    const items = [
      ...this.state.items,
      {
        id: this.state.nextId,
        name: `Item${this.state.nextId}`,
      },
    ];

    this.setState({ nextId: this.state.nextId + 1, items });
  }

  deleteItem(id) {
    const items = this.state.items.filter((item) => item.id !== id);

    this.setState({ items });
  }
}
