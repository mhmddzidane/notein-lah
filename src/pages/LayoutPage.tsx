import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Buttons/Button";
import Loading from "../components/Loading";
import { changeTab } from "../redux/tabRedux";
import { logoutSuccess } from "../redux/userRedux";

const LayoutPage = () => {
  const [activeTab, setActiveTab] = useState("aktif");
  const [logout, setLogout] = useState<boolean>(false);
  const tab = useSelector((state: any) => state.tab.sideBar);
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    dispatch(changeTab(activeTab));
  }, [activeTab]);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.location.reload();
  };

  return (
    <div
      className={`${
        tab ? "flex absolute w-4/4" : "hidden"
      } text-center md:flex flex-col sticky top-0 h-[100vh] bg-[#19191a] lg:w-1/4 `}
    >
      <p className="text-3xl mt-10">Notin Aja</p>

      <p
        onClick={() => setActiveTab("aktif")}
        className={`text-xl mt-10 cursor-pointer ${
          activeTab == "aktif" &&
          "bg-white mx-4 rounded-md text-black p-1 font-bold"
        }`}
      >
        Catatan Aktif
      </p>
      <p
        onClick={() => setActiveTab("arsip")}
        className={`text-xl mt-5 cursor-pointer ${
          activeTab == "arsip" &&
          "bg-white mx-4 rounded-md text-black p-1 font-bold"
        }`}
      >
        Catatan Arsip
      </p>
      <p
        onClick={() => setActiveTab("tambah")}
        className={`text-xl mt-5 cursor-pointer ${
          activeTab == "tambah" &&
          "bg-white mx-4 rounded-md text-black p-1 font-bold"
        }`}
      >
        Tambahkan Catatan
      </p>

      <div className="mt-auto pb-5">
        <p>Pengaturan</p>
        {logout && (
          <div className="sign" onClick={handleLogout}>
            <Button text="Logout" style="p-1 mt-2" />
          </div>
        )}
        <div className="mt-5 cursor-pointer" onClick={() => setLogout(!logout)}>
          {isFetching == true ? (
            <Loading />
          ) : (
            <div className="flex flex-col">
              <p className="uppercase">{currentUser?.data.name}</p>
              <p className="text-sm text-gray-200">{currentUser?.data.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
