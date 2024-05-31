import React from "react";
import Sidebar from "../../components/Sidebar";
import { HistoryTable } from "./Components/HistoryTable";
import CardDashboard from "./Components/CardDashboard";
const Dashboard = () => {
  return (
    <Sidebar>
      <div>
        <CardDashboard />
      </div>
      <div className=" flex items-center justify-between">
        <div className="mx-8 font-bold">ປະຫວັດການສັ່ງຊື້ໃນວັນນີ້</div>
        <button className=" bg-green-400 text-white rounded text-center px-6 py-1 mr-5">
          Export
        </button>
      </div>
      <HistoryTable />
    </Sidebar>
  );
};

export default Dashboard;
