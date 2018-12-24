import React, { Component } from "react";
import { compose } from "redux";
import { map } from "lodash";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
// components

class Accordion extends Component {
  static propTypes = {
    data: PropTypes.object,
    level: PropTypes.number,
    renderHeader: PropTypes.func
  };
  static defaultProps = {
    data: {},
    level: 0,
    renderHeader: null
  };
  constructor(props) {
    super(props);
    this.state = {
      level: props.level + 1,
      open: isUndefined(props.data.open) ? true : props.data.open,
      collapsible: isUndefined(props.data.collapsible)
        ? true
        : props.data.collapsible
    };
  }
  _toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { data, renderHeader } = this.props;
    const { open, collapsible, level } = this.state;
    // console.log(level);
    return (
      <div>
        {renderHeader(data, {
          level: level,
          toggle: collapsible ? this._toggle : () => {}
        })}
        <Collapse in={open}>
          {map(data.sections, section => (
            <Accordion
              level={level}
              data={section}
              renderHeader={renderHeader}
              key={section.title}
            />
          ))}
        </Collapse>
      </div>
    );
  }
}

const styles = theme => ({});
export default compose(withStyles(styles))(Accordion);
