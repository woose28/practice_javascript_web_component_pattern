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
}
