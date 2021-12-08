import Component from './core/Component.js';
import ItemAppender from './component/ItemAppender.js';
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
          isActive: true,
        },
        {
          id: 2,
          name: 'banana',
          isActive: false,
        },
        {
          id: 3,
          name: 'cherry',
          isActive: false,
        },
      ],
    };
  }

  template() {
    return `
      <div id="${SELECTOR.ID_APPENDER}"></div>
      <div id="${SELECTOR.ID_ITEMS}"></div>
    `;
  }

  mounted() {
    this.$items = $(`#${SELECTOR.ID_ITEMS}`);
    this.$appender = $(`#${SELECTOR.ID_APPENDER}`);

    new Items(this.$items, {
      items: this.state.items,
      toggleItem: this.toggleItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
    });

    new ItemAppender(this.$appender, {
      addItem: this.addItem.bind(this),
    });
  }

  addItem(itemName) {
    const items = [
      ...this.state.items,
      {
        id: this.state.nextId,
        name: itemName,
        isActive: false,
      },
    ];

    this.setState({ nextId: this.state.nextId + 1, items });
  }

  deleteItem(id) {
    const items = this.state.items.filter((item) => item.id !== id);

    this.setState({ items });
  }

  toggleItem(id) {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      }

      return item;
    });

    this.setState({ items });
  }
}
