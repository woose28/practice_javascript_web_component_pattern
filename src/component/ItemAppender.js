import Component from '../core/Component.js';
import SELECTOR from '../constant/selector.js';
import MESSAGE from '../constant/message.js';

export default class ItemAppender extends Component {
  template() {
    return `
      <input type="text" id="${SELECTOR.ID_APPENDER_INPUT}" placeholder="${MESSAGE.PLACEHOLDER_APPENDER}"/>
    `;
  }

  setEvent() {
    const { addItem } = this.props;

    this.addEvent('keyup', `#${SELECTOR.ID_APPENDER_INPUT}`, ({ key, target }) => {
      if (key !== 'Enter' || target.value.lenght === 0) {
        return;
      }

      addItem(target.value);
    });
  }
}
