import { createApp } from 'vue';
import App from './App.vue';
import Initializer from './lib/initializer';

import './style.css';
import './style/bootstrap.scss';
import ConfigInitializer from '@/lib/config-initializer';

createApp(App).mount(
  (() => {
    const configInitializer = new ConfigInitializer(document.querySelector('.hdn.han.hax') as HTMLElement);
    configInitializer.initialize();

    const initializer = new Initializer(document.querySelector('.superentry') as HTMLElement);
    const examples = initializer.getExamples();
    examples.forEach((example) => example.injectAnkiButton());
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
