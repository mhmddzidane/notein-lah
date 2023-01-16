import { useState } from "react";
import formatDate from "../utils/formatDate";
import SearchBar from "./Searchbar/SearchBar";

interface NotesProps {
  notes: any;
}

const CatatanAktif = ({ notes }: NotesProps) => {
  const [data, setData] = useState<any>(notes);

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

  console.log(data);

  return (
    <div className="mt-5 ">
      <SearchBar updateQuery={updateQuery} />

      <ul className="flex flex-row flex-wrap pt-10 list-none">
        {data?.length !== 0 ? (
          data?.map((note: any) => (
            <li key={note.id} className="w-full md:w-6/12 xl:w-4/12 mb-5 pr-2">
              <div className="bg-[#19191a] relative mt-2 p-2 h-[250px] rounded-md">
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

export default CatatanAktif;
