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
import { Media, Typography } from "./Components/Block";
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
        "header-six"
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
    const blockRenderMap = DefaultDraftBlockRenderMap.merge(
      Immutable.Map({
        "header-one": {
          element: "h1",
          wrapper: <Typography variant="h1" />
        },
        "header-two": {
          element: "h2",
          wrapper: <Typography variant="h2" />
        },
        "header-three": {
          element: "h3",
          wrapper: <Typography variant="h3" />
        },
        "header-four": {
          element: "h4",
          wrapper: <Typography variant="h4" />
        },
        "header-five": {
          element: "h5",
          wrapper: <Typography variant="h5" />
        },
        "header-six": {
          element: "h6",
          wrapper: <Typography variant="h6" />
        }
      })
    );
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
