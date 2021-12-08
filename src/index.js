import App from './App.js';
import { $ } from './utils/domTool.js';
import SELECTOR from './constant/selector.js';

new App($(`#${SELECTOR.ID_APP}`));
