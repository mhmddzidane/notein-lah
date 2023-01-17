import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUnarchivedNotes } from "../redux/apiCall";
import formatDate from "../utils/formatDate";
import SearchBar from "./Searchbar/SearchBar";
interface NotesProps {
  notes: any;
}
const CatatanArsip = ({ notes }: NotesProps) => {
  const [data, setData] = useState<any>(notes);
  const [menuId, setMenuId] = useState(null);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const updateQuery = (input: string): void => {
    const keyword = input;

    if (keyword !== "") {
      const results = notes?.filter((note: any) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setData(results);
    } else {
      setData(notes);
    }
  };

  const handleMenu = (id: any) => {
    setMenuId(id);
    if (menuId == id) {
      setMenuId(null);
    }
  };

  const handleUnarchive = (id: string) => {
    postUnarchivedNotes(dispatch, { token }, { id });
  };
  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <div className="mt-5 ">
      <SearchBar updateQuery={updateQuery} />

      <ul className="flex flex-row flex-wrap pt-10 list-none">
        {data?.length !== 0 ? (
          data?.map((note: any) => (
            <li key={note.id} className="w-full md:w-6/12 xl:w-4/12 mb-5 pr-2">
              <div className="bg-[#19191a] relative mt-2 p-2 h-[250px] rounded-md">
                <div
                  className="cursor-pointer"
                  onClick={() => handleMenu(note.id)}
                >
                  <img
                    src="/dots.png"
                    alt="menu"
                    className="bg-white rounded-full absolute w-7 h-7  top-4 right-4"
                  />
                </div>
                {menuId == note.id && (
                  <div className="flex absolute bg-white right-0 -top-5 p-1 rounded-md gap-x-2">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleUnarchive(note.id)}
                    >
                      <img src="/archive.png" alt="" className="w-6 h-6" />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleDelete(note.id)}
                    >
                      <img src="/bin.png" alt="" className="w-6 h-5.5" />
                    </div>
                  </div>
                )}
                <p className="font-bold text-2xl">{note.title}</p>
                <p className="mt-2">{note.body}</p>
                <p className="bottom-1 right-2 absolute">
                  {formatDate(note.createdAt)}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>not foundn</p>
        )}
      </ul>
    </div>
  );
};

export default CatatanArsip;
