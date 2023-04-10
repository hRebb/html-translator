import React from 'react';
import { marked } from 'marked';
import Input from './Input/Input';
import Output from './Output/Output';

interface AppState {
  markdown: string;
  html: string;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    markdown: '',
    html: '',
  };

  handleMarkdownChange = (value: string) => {
    const html = marked(value);
    this.setState({ markdown: value, html });
  };

  handleHtmlChange = (value: string) => {
    const markdown = marked(value);
    this.setState({ markdown, html: value});
  };

  render() {
    return (
      <div>
        <Input<string> value={this.state.markdown} onChange={this.handleMarkdownChange} />
        <Output value={this.state.html} />
        <Input<string> value={this.state.html} onChange={this.handleHtmlChange} />
        <Output value={this.state.markdown} />
      </div>
    )
  }
}

export default App;