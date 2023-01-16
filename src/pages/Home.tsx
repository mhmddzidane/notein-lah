import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/Searchbar/SearchBar";
import { useEffect, useState } from "react";
import { getNotes, getUser } from "../redux/apiCall";
import { mobileTab } from "../redux/tabRedux";
import Loading from "../components/Loading";
import CatatanAktif from "../components/CatatanAktif";
import CatatanArsip from "../components/CatatanArsip";
import TambahCatatan from "../components/TambahCatatan";

const Home = () => {
  const [sideBar, setSidebar] = useState<boolean>(false);
  const tab = useSelector((state: any) => state.tab.activeTab);
  const { isFetching, notes, error } = useSelector((state: any) => state.notes);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch, { token });
    getNotes(dispatch, { token });
  }, [token]);

  useEffect(() => {
    dispatch(mobileTab(sideBar));
  }, [sideBar]);

  useEffect(() => {
    if (error) {
      sessionStorage.removeItem("token");
    }
  }, [error]);

  return (
    <div className="p-5 ">
      <div
        className="py-4 space-y-2 rounded shadow cursor-pointer md:hidden"
        onClick={() => setSidebar(!sideBar)}
      >
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
      </div>
      {tab == "aktif" && (
        <div>
          <p className="text-4xl">Catatan Aktif</p>
          {isFetching ? <Loading /> : <CatatanAktif notes={notes?.data} />}
        </div>
      )}

      {tab == "arsip" && (
        <div>
          <p className="text-4xl">Catatan Arsip</p>
          <CatatanArsip />
        </div>
      )}

      {tab == "tambah" && (
        <div>
          <p className="text-4xl">Tambahkan Catatan</p>
          <TambahCatatan />
        </div>
      )}
    </div>
  );
};

export default Home;
