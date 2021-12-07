import Items from './component/Items.js';

export default class App {
  constructor($app) {
    this.$app = $app;

    new Items($app);
  }
}
