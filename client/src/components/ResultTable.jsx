import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export const ResultTable = () => {
  const [data, setData] = useState([]);
  const [refreshData, setRefreshData] = useState();

  //Retrieve data from the server to display in table
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getServerData(
          `https://quizserver-s3a8.onrender.com/api/result`
        );
        setData(result);
        handleRefresh();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Reset the refreshData state after fetching data
    setRefreshData(true);
  }, [refreshData]);

  const handleRefresh = () => {
    // Set refreshData to true to trigger a re-fetch of data
    setRefreshData(true);
  };

  return (
    <div className="tablecont">
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Answered</td>
            <td>Total Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
