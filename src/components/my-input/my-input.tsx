import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
})
export class MyInput {
  @Prop({ mutable: true }) label: string = 'Defaul';

  onInputChange(event: Event) {
    this.label = (event.target as HTMLInputElement).value;
  }

  @Event() bhdFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event({}) bhdBlur!: EventEmitter<void>;

  private onFocus = () => {
    console.log('bhdFocus');
    this.bhdFocus.emit();
  };

  private onBlur = () => {
    console.log('bhdBlur');
    this.bhdBlur.emit();
  };

  callMe(){
    console.log("sadfasdfd")
  }

  render() {
    return (
      <label>
        <h1  onClick={this.callMe}>Placeholder</h1>
        {this.label}
        <input onFocus={this.onFocus} onBlur={this.onBlur} type="text" class="my-input-textbox" onInput={this.onInputChange.bind(this)} value={this.label}></input>
      </label>
    );
  }
}
