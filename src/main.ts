import { createApp } from 'vue';
import './style.css';
import img from './assets/anki_104026.svg';
import App from './App.vue';
import Initializer from './lib/initializer';

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
