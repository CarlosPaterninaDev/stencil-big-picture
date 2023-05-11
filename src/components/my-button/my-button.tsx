import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})
export class MyButton {
  @Prop({ mutable: true }) label = 'Click me!';

  @Prop() color = 'primary | secondary'

  private onTap = () => {
    console.log('onTap');
    this.tap.emit();
  };

  @Event({}) tap!: EventEmitter<void>;

  render() {
    return (
      <button  onClick={this.onTap.bind(this)} class="action-button">
        {this.label}
      </button>
    );
  }

  resetValue() {
    this.onTap();
  }
}
