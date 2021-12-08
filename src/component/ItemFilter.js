import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';
import FILTER_KEY from '../constant/filter.js';

export default class ItemFilter extends Component {
  template() {
    return `
      <button class="${SELECTOR.CLASS_FILTER_BUTTON}" data-filter-key="${FILTER_KEY.ALL}">전체 보기</button>
      <button class="${SELECTOR.CLASS_FILTER_BUTTON}" data-filter-key="${FILTER_KEY.ACTIVE}">활성화 보기</button>
      <button class="${SELECTOR.CLASS_FILTER_BUTTON}" data-filter-key="${FILTER_KEY.DISABLED}">비활성화 보기</button>
    `;
  }

  setEvent() {
    const { setFilter } = this.props;

    this.addEvent('click', `.${SELECTOR.CLASS_FILTER_BUTTON}`, (event) => {
      setFilter(parseInt(event.target.dataset.filterKey, 10));
    });
  }
}
