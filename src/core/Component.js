export default class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.state = null;

    this.setUp();
    this.render();
    this.setEvent();
  }

  setUp() {}

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {

  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) {
        return;
      }

      callback(event);
    });
  }
}
