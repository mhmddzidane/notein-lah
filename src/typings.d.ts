declare module "@ckeditor/ckeditor5-react" {
  import Editor from "ckeditor5-custom-build/build/ckeditor";
  import Event from "@ckeditor/ckeditor5-utils/src/eventinfo";
  import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
  import * as React from "react";
  const CKEditor: React.FunctionComponent<{
    disabled?: boolean;
    editor: typeof Editor;
    data?: string;
    id?: string;
    config?: EditorConfig;
    onReady?: (editor: Editor) => void;
    onChange?: (event: Event, editor: Editor) => void;
    onBlur?: (event: Event, editor: Editor) => void;
    onFocus?: (event: Event, editor: Editor) => void;
    onError?: (event: Event, editor: Editor) => void;
  }>;
  export { CKEditor };
}

declare module "@ckeditor/ckeditor5-build-classic";
