export default class Component {
  constructor($target) {
    this.$target = $target;
    this.state = null;

    this.setUp();
    this.render();
    this.setEvent();
  }

  setUp() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
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
