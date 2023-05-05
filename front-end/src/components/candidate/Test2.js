import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState, useMemo } from "react";
import axios from "axios";
import JoditEditor from 'jodit-react';
function Test2() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <JoditEditor
      ref={editor}
      value={content}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
}
export default Test2;
