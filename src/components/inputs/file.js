import { useState } from "react";
import { Button } from "../buttons/button";
import { HelpText } from "../text/help-text";

export const FileInput = ({ id, label, helpText, types }) => {
  const [text, setText] = useState(helpText);

  return (
    <>
      <input
        id={id}
        type="file"
        accept={types}
        hidden="hidden"
        onChange={(e) => {
          setText(e.target.value.match(/[/\\]([\w\d\s.\-()]+)$/)[1]);
        }}
      />
      <Button
        action={() => {
          const fileInput = document.getElementById(id);
          fileInput.click();
        }}
      >
        Choose File
      </Button>
      <HelpText addStyle="align-middle-xxx">{text}</HelpText>
    </>
  );
};
