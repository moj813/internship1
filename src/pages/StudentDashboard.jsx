import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import "../stylesheets/StudentDashboard.css";
import MeteorDemo from "../components/Meteors";

import { dashboardDetails, downloadPDF } from "../services/operation/student";
import GridPatternDemo from "../components/GridCard";

const StudentDashboard = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = ()=>{
    dashboardDetails(setUserData, setLoading);
  }

  // Getting details as soon as page is loded
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="studentDashboard">
      {
        loading ? (<h1>Loading...</h1>) : (
          <>
            <div className="outerContainer-cards">
              <div className="tiles-container">
                <MeteorDemo name={"22DIT022"}/>
                <GridPatternDemo title={"Your Application"} count={25} />
                <GridPatternDemo title={"Approved Application"} count={10} />
                <GridPatternDemo title={"Rejected Application"} count={12} />
                <GridPatternDemo title={"Returned Application"} count={3} />
              </div>
              <div className="newApplication-conatainer">
                <Link to="/student/application" className="newApplicationBTN">New Application</Link>
              </div>
            </div>

            {
              userData == null ? (<h1>Data Not Found</h1>) : (
                <>
                  <div className="dataTable-container">
                    <DataTable userData={userData} id={'student'}/>
                  </div>
                </>
              )
            }

          </>
        )
      }
    </div>
  );
};
export default StudentDashboard;
