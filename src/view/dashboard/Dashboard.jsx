import React from "react";
import Sidebar from "../../components/Sidebar";

import CardDashboard from "./Components/CardDashboard";
const Dashboard = () => {
  return (
    <Sidebar>
     <div>
      <CardDashboard/>
     </div>
    </Sidebar>
  );
};

export default Dashboard;
