import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/Components";

storiesOf("Button", module)
  .add("with text", () => (
    <div>
      <Button onClick={action("clicked")} disabled>
        Disabled Button
      </Button>
      <Button onClick={action("clicked")}>
        Primary Button | Default Button
      </Button>
      <Button onClick={action("clicked")} type="Outline">
        Outline Button
      </Button>
      <Button onClick={action("clicked")} type="Toggle">
        Toggle Button
      </Button>
      <Button onClick={action("clicked")} type="Text">
        Text Button
      </Button>
    </div>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
