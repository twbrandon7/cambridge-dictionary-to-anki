import { createApp } from 'vue';
import App from './App.vue';
import Initializer from './lib/initializer';

import './style.css';
import './style/bootstrap.scss';

createApp(App).mount(
  (() => {
    const initializer = new Initializer(document.querySelector('.superentry') as HTMLElement);
    const examples = initializer.getExamples();
    examples.forEach((example) => example.injectAnkiButton());
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
