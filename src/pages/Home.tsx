import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CatatanAktif from "../components/CatatanAktif";
import CatatanArsip from "../components/CatatanArsip";
import Loading from "../components/Loading";
import TambahCatatan from "../components/TambahCatatan";
import { getArchivedNotes, getNotes, getUser } from "../redux/apiCall";
import { mobileTab } from "../redux/tabRedux";

const Home = () => {
  const [sideBar, setSidebar] = useState<boolean>(false);
  const tab = useSelector((state: any) => state.tab.activeTab);
  const { isFetching, notes, archivedNotes, error, status, statusArchive } =
    useSelector((state: any) => state.notes);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch, { token });
  }, [token]);

  useEffect(() => {
    getNotes(dispatch, { token });
    getArchivedNotes(dispatch, { token });
  }, [status]);

  useEffect(() => {
    getArchivedNotes(dispatch, { token });
    getNotes(dispatch, { token });
  }, [statusArchive]);

  useEffect(() => {
    dispatch(mobileTab(sideBar));
  }, [sideBar]);

  useEffect(() => {
    if (error) {
      sessionStorage.removeItem("token");
      navigate("/");
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
          {isFetching ? (
            <Loading />
          ) : (
            <CatatanArsip notes={archivedNotes?.data} />
          )}
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
