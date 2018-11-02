import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Text } from "../src/Components";

storiesOf("Text", module)
  .add("with text, with High emphasis", () => (
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
  ))
  .add("with Text, with Medium emphasis", () => (
    <div>
      <div>
        <Text type="H1" emphasis="Medium">
          H1 Text
        </Text>
      </div>
      <div>
        <Text type="H2" emphasis="Medium">
          H2 Text
        </Text>
      </div>
      <div>
        <Text type="H3" emphasis="Medium">
          H3 Text
        </Text>
      </div>
      <div>
        <Text type="H4" emphasis="Medium">
          H4 Text
        </Text>
      </div>
      <div>
        <Text type="H5" emphasis="Medium">
          H5 Text
        </Text>
      </div>
      <div>
        <Text type="H6" emphasis="Medium">
          H6 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle1" emphasis="Medium">
          Subtitle1 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle2" emphasis="Medium">
          Subtitle2 Text
        </Text>
      </div>
      <div>
        <Text type="Body1" emphasis="Medium">
          Body1 Text
        </Text>
      </div>
      <div>
        <Text type="Body2" emphasis="Medium">
          Body2 Text
        </Text>
      </div>
      <div>
        <Text type="Button" emphasis="Medium">
          Button Text
        </Text>
      </div>
      <div>
        <Text type="Caption" emphasis="Medium">
          Caption Text
        </Text>
      </div>
      <div>
        <Text type="Overline" emphasis="Medium">
          Overline Text
        </Text>
      </div>
    </div>
  ))
  .add("with Text, with Disabled emphasis", () => (
    <div>
      <div>
        <Text type="H1" emphasis="Disabled">
          H1 Text
        </Text>
      </div>
      <div>
        <Text type="H2" emphasis="Disabled">
          H2 Text
        </Text>
      </div>
      <div>
        <Text type="H3" emphasis="Disabled">
          H3 Text
        </Text>
      </div>
      <div>
        <Text type="H4" emphasis="Disabled">
          H4 Text
        </Text>
      </div>
      <div>
        <Text type="H5" emphasis="Disabled">
          H5 Text
        </Text>
      </div>
      <div>
        <Text type="H6" emphasis="Disabled">
          H6 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle1" emphasis="Disabled">
          Subtitle1 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle2" emphasis="Disabled">
          Subtitle2 Text
        </Text>
      </div>
      <div>
        <Text type="Body1" emphasis="Disabled">
          Body1 Text
        </Text>
      </div>
      <div>
        <Text type="Body2" emphasis="Disabled">
          Body2 Text
        </Text>
      </div>
      <div>
        <Text type="Button" emphasis="Disabled">
          Button Text
        </Text>
      </div>
      <div>
        <Text type="Caption" emphasis="Disabled">
          Caption Text
        </Text>
      </div>
      <div>
        <Text type="Overline" emphasis="Disabled">
          Overline Text
        </Text>
      </div>
    </div>
  ))
  .add("with Text, with Inverted", () => (
    <div style={{ backgroundColor: "#333" }}>
      <div>
        <Text type="H1" inverted>
          H1 Text
        </Text>
      </div>
      <div>
        <Text type="H2" inverted>
          H2 Text
        </Text>
      </div>
      <div>
        <Text type="H3" inverted>
          H3 Text
        </Text>
      </div>
      <div>
        <Text type="H4" inverted>
          H4 Text
        </Text>
      </div>
      <div>
        <Text type="H5" inverted>
          H5 Text
        </Text>
      </div>
      <div>
        <Text type="H6" inverted>
          H6 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle1" inverted>
          Subtitle1 Text
        </Text>
      </div>
      <div>
        <Text type="Subtitle2" inverted>
          Subtitle2 Text
        </Text>
      </div>
      <div>
        <Text type="Body1" inverted>
          Body1 Text
        </Text>
      </div>
      <div>
        <Text type="Body2" inverted>
          Body2 Text
        </Text>
      </div>
      <div>
        <Text type="Button" inverted>
          Button Text
        </Text>
      </div>
      <div>
        <Text type="Caption" inverted>
          Caption Text
        </Text>
      </div>
      <div>
        <Text type="Overline" inverted>
          Overline Text
        </Text>
      </div>
    </div>
  ));
