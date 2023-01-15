import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/Searchbar/SearchBar";
import { useEffect } from "react";
import { getUser } from "../redux/apiCall";

const Home = () => {
  const data = useSelector((state: any) => state.tab.activeTab);

  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch, { token });
  }, [token]);

  return (
    <div className="p-5">
      {data == "aktif" && (
        <div>
          <p className="text-4xl">Catatan Aktif</p>
          <div className="mt-5">
            <SearchBar />
          </div>
        </div>
      )}

      {data == "arsip" && (
        <div>
          <p className="text-4xl">Catatan Arsip</p>
          <div className="mt-5">
            <SearchBar />
          </div>
        </div>
      )}

      {data == "tambah" && (
        <div>
          <p className="text-4xl">Tambahkan Catatan</p>
          <div className="mt-5">
            <SearchBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
