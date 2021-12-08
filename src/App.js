import Component from './core/Component.js';
import ItemAppender from './component/ItemAppender.js';
import Items from './component/Items.js';
import ItemFilter from './component/ItemFilter.js';
import SELECTOR from './constant/selector.js';
import FILTER_KEY from './constant/filter.js';
import { $ } from './utils/domTool.js';

export default class App extends Component {
  setUp() {
    this.state = {
      nextId: 4,
      filterKey: FILTER_KEY.ALL,
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
      <div id="${SELECTOR.ID_FILTER}"></div>
    `;
  }

  mounted() {
    this.$items = $(`#${SELECTOR.ID_ITEMS}`);
    this.$appender = $(`#${SELECTOR.ID_APPENDER}`);
    this.$filter = $(`#${SELECTOR.ID_FILTER}`);

    new Items(this.$items, {
      items: this.state.items,
      toggleItem: this.toggleItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
      filterItems: this.filterItems.bind(this),
    });

    new ItemAppender(this.$appender, {
      addItem: this.addItem.bind(this),
    });

    new ItemFilter(this.$filter, {
      setFilter: this.setFilter.bind(this),
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

  setFilter(filter) {
    this.setState({ ...this.state, filterKey: filter });
  }

  filterItems() {
    return this.state.items.filter((item) => {
      if ((this.state.filterKey === FILTER_KEY.ACTIVE && !item.isActive)
        || (this.state.filterKey === FILTER_KEY.DISABLED && item.isActive)
      ) {
        return false;
      }

      return true;
    });
  }
}
