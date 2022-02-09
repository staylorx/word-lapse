import { useContext } from "react";
import { AppContext } from "../App";
import Timeline from "../charts/Timeline";
import Neighbors from "../charts/Neighbors";
import Download from "../components/Download";
import "./Results.css";

// collection of charts to show after searching
const Results = () => {
  const { results } = useContext(AppContext);
  if (results)
    return (
      <>
        <div className="results">
          <Neighbors />
          <Timeline />
        </div>
        <Download />
      </>
    );
  else return <></>;
};

export default Results;
