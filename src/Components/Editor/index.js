import React, { Component } from "react";
import {
  EditorState,
  convertFromRaw,
  getDefaultKeyBinding,
  DefaultDraftBlockRenderMap,
  Editor,
  RichUtils
} from "draft-js";
import DraftOffsetKey from "draft-js/lib/DraftOffsetKey";
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
      position: {},
      editorState: RichUtils.toggleBlockType(
        this.state.editorState,
        "header-six"
      )
    });
  }
  _onChange = editorState => {
    this.setState({ editorState });
    this._calculateCurrentOffsetTop();
  };
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
  _calculateCurrentOffsetTop = () => {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.getHasFocus()) {
      this.setState({
        position: {
          transform: "scale(0)"
        }
      });
      return;
    }
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0);
    setTimeout(() => {
      const node = document.querySelectorAll(
        `[data-offset-key="${offsetKey}"]`
      )[0];
      let editorRoot = this._editor.current.editor;
      if (!editorRoot) return;

      while (editorRoot.className.indexOf("DraftEditor-root") === -1) {
        editorRoot = editorRoot.parentNode;
      }

      const position = {
        top: node ? node.offsetTop : 0 + editorRoot.offsetTop,
        transform: "scale(1)",
        transition: "transform 0.15s cubic-bezier(.3,1.2,.2,1)"
      };
      if (this.props.position === "right") {
        position.left =
          editorRoot.offsetLeft + editorRoot.offsetWidth + 80 - 36;
      } else {
        position.left = editorRoot.offsetLeft - 80;
      }

      this.setState({
        position
      });
    }, 0);
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
