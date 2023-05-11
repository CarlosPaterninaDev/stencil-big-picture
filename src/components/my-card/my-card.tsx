import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() titleCard: string;
  @Prop() content: string;
  @State() changeIcon: boolean = true; // TODO: Remover el State y dar click

  @Watch('changeIcon')
  watcher(newValue: boolean, oldValue: boolean) {
    console.log(`newValue ${newValue} .........oldValue : ${oldValue}`);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  @Listen('tap')
  showTapAlert() {
    console.log('Escuchando desde componente Card');
    alert('Tapeado');
  }

  render() {
    let chicken = <div>🐣 {this.randomGreeting()}</div>;
    let egg = <div>🥚 {this.randomZz()}</div>;

    return (
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">{this.getTitle()}</h2>
        </div>
        <div class="card-body">
          <div class="content">
            <p>{this.getContent()}</p>
            <div class="animals">{this.changeIcon ? chicken : egg}</div>
          </div>
          <div class="actions">
            <button onClick={this.onChangeIcon.bind(this)} class="action-button">
              Click me!
            </button>

            <my-button label="My Custom Button"></my-button>
          </div>
        </div>
      </div>
    );
  }

  getTitle() {
    return this.titleCard || 'Default Title';
  }

  getContent() {
    return this.content || 'Default Content';
  }

  onChangeIcon() {
    console.log('CTA');
    this.changeIcon = !this.changeIcon;
  }

  randomZz() {
    const min = 3;
    const max = 5;
    let length = Math.floor(Math.random() * (max - min + 1)) + min;

    let result = '';
    while (length--) {
      let char = Math.floor(Math.random() * 2) === 0 ? 'Z' : 'z';
      result += Math.floor(Math.random() * 2) === 0 ? char.toUpperCase() : char.toLowerCase();
    }

    return result + '...';
  }

  randomGreeting() {
    const greetings = ['Hi!', 'Hello!', 'Hola!'];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }
}
