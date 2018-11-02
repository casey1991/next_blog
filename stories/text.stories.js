import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Text } from "../src/Components";

storiesOf("Text", module).add("with text", () => (
  <div>
    <div>
      <Text type="H1">H1 Text</Text>
    </div>
    <div>
      <Text type="H2">H2 Text</Text>
    </div>
    <div>
      <Text type="H3">H3 Text</Text>
    </div>
    <div>
      <Text type="H4">H4 Text</Text>
    </div>
    <div>
      <Text type="H5">H5 Text</Text>
    </div>
    <div>
      <Text type="H6">H6 Text</Text>
    </div>
    <div>
      <Text type="Subtitle1">Subtitle1 Text</Text>
    </div>
    <div>
      <Text type="Subtitle2">Subtitle2 Text</Text>
    </div>
    <div>
      <Text type="Body1">Body1 Text</Text>
    </div>
    <div>
      <Text type="Body2">Body2 Text</Text>
    </div>
    <div>
      <Text type="Button">Button Text</Text>
    </div>
    <div>
      <Text type="Caption">Caption Text</Text>
    </div>
    <div>
      <Text type="Overline">Overline Text</Text>
    </div>
  </div>
));
