import React, { Component } from "react";
import {
  EditorState,
  convertFromRaw,
  getDefaultKeyBinding,
  DefaultDraftBlockRenderMap,
  Editor,
  RichUtils
} from "draft-js";
import Immutable from "immutable";
// block components
import { Media } from "./Components/Block";
const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: []
    }
  ]
});
const blockRenderMap = Immutable.Map({
  section: {
    element: "section"
  }
});
class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(emptyContentState)
    };
    this._editor = React.createRef();
  }
  componentDidMount() {
    // focus editor when component did mount
    this._editor.current.focus();
    this.setState({
      editorState: RichUtils.toggleBlockType(
        this.state.editorState,
        "block_media"
      )
    });
  }
  _onChange = editorState => this.setState({ editorState });
  _handleKeyCommand = command => {
    return getDefaultKeyBinding(command);
  };
  _blockRenderer = contentBlock => {
    const type = contentBlock.getType();
    if (type === "block_media") {
      return {
        component: Media,
        editable: false
      };
    }
  };
  render() {
    const { editorState } = this.state;
    const blockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
    return (
      <div>
        <Editor
          ref={this._editor}
          editorState={editorState}
          onChange={this._onChange}
          handleKeyCommand={this._handleKeyCommand}
          blockRenderMap={blockRenderMap}
          blockRendererFn={this._blockRenderer}
          editorKey="editor"
        />
      </div>
    );
  }
}
export default RichEditor;
