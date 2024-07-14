import img from '@/assets/anki_104026.svg';
import EventBus, { OpenConfigModalEvent } from "./events/event";

export default class ConfigInitializer {
  constructor(protected readonly element: HTMLElement) {}

  public initialize() {
    const image = document.createElement('img');
    image.src = img;
    image.width = 20;

    const a = document.createElement('a');
    a.href = 'javascript: void(0);';
    a.title = 'Anki';
    a.classList.add('hao', 'lpl-10', 'lpr-10', 'i', 'tc-w', 'fs16');
    a.setAttribute('rel', 'noopener noreferrer');
    a.appendChild(image);

    const li = document.createElement('li');
    li.classList.add('lpr-5');
    li.appendChild(a);
    this.element.appendChild(li);

    a.addEventListener('click', () => {
        EventBus.getInstance().publish(new OpenConfigModalEvent());
    });
  }
}
