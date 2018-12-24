import React, { Component } from "react";
import {
  EditorState,
  convertFromRaw,
  getDefaultKeyBinding,
  DefaultDraftBlockRenderMap,
  Editor,
  RichUtils,
  getVisibleSelectionRect
} from "draft-js";
import Immutable from "immutable";
// block components
import { Media, Typography } from "./Components/Block";
// sub components
import Toolbar from "./Components/Toolbar";
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
      editorState: EditorState.createWithContent(emptyContentState),
      cursorPosition: {
        left: null,
        top: null
      },
      sectionHeight: 24
    };
    this._editor = React.createRef();
  }
  componentDidMount() {
    // focus editor when component did mount
    this._editor.current.focus();
  }
  _onChange = editorState => {
    this.setState({ editorState });
    if (process.browser) {
      // in browser
      const cursor = getVisibleSelectionRect(window);
      console.log(cursor);
      if (cursor)
        this.setState({
          cursorPosition: {
            left: cursor.left,
            top: cursor.top
          },
          sectionHeight: cursor.height
        });
    }
  };
  _getSectionRect = () => {};
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
          wrapper: <Typography variant="h1" />
        },
        "header-two": {
          wrapper: <Typography variant="h2" />
        },
        "header-three": {
          wrapper: <Typography variant="h3" />
        },
        "header-four": {
          wrapper: <Typography variant="h4" />
        },
        "header-five": {
          wrapper: <Typography variant="h5" />
        },
        "header-six": {
          wrapper: <Typography variant="h6" />
        }
      })
    );
    return (
      <div>
        <Toolbar
          position={this.state.cursorPosition}
          sectionHeight={this.state.sectionHeight}
        />
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
