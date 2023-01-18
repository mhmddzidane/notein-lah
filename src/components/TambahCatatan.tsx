import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { postNotes } from "../redux/apiCall";
import { useDispatch } from "react-redux";

const TambahCatatan = () => {
  const [titleText, setTitleText] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const handlePost = (e: any) => {
    e.preventDefault();
    postNotes(dispatch, { token }, { titleText }, { bodyText });
    setTitleText("");
    setBodyText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Masukan Judul Note"
        className="text-black p-2 w-full mt-10 text-center font-semibold text-3xl"
        onChange={(e) => setTitleText(e.target.value)}
        value={titleText}
      />
      <div className="mt-10 text-black ">
        <CKEditor
          editor={ClassicEditor}
          data={bodyText}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();

            setBodyText(data);
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
      <div className="text-center mt-5 ">
        <button
          onClick={handlePost}
          className="border border-white p-5 rounded-md w-[100px]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TambahCatatan;
