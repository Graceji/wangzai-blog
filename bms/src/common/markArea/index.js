import React, { Component, Fragment } from 'react';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import marked from 'marked';
import highlight from 'highlight.js';
import { Button } from 'antd';

export default class MarkDownArea extends Component {
  componentDidMount () {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor'),
      autofocus: true,
      autosave: true,
      // toolbar: ["bold", "italic", "code", "|", "table"],
      previewRender (plainText) {
        return marked(plainText, {
          // showIcons: ["code", "table"],
          renderer: new marked.Renderer(),
          autoDownloadFontAwesome: true,
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight (code) {
            return highlight.highlightAuto(code).value;
          },
        });
      },
    });
  }

  handleClick = () => {
    console.log(this.smde.markdown(this.smde.value()));
  };

  render () {
    return (
      <Fragment>
        <textarea name="" id="editor" cols="30" rows="10" />
        <Button onClick={this.handleClick}>获取值</Button>
      </Fragment>
    );
  }
}
