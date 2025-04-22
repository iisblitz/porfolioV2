'use client'
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Welcome from "../../../components/Welcome";
import Footer from "../../../components/Footer";
import MaintenanceTimeline from "../../../components/Maintenance/MaintenaceTimeline";
import MaintenanceArticles from "../../../components/Maintenance/MaintenanceArticles";
import MaintenaceText from "../../../components/Maintenance/MaintenaceText";
import MaintenanceNotes from "../../../components/Maintenance/MaintenanceNotes";
import MaintenanceCatalog from "../../../components/Maintenance/MaintenanceCatalog";

export default function Maintenance() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  const loadData = useSelector((state) => state.rootReducer);

  useEffect(() => {
    setDetails(loadData);
    setLoading(false);
  }, [loadData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    switch (index) {
      case 0:
        return <MaintenanceTimeline />;
      case 1:
        return <MaintenanceArticles />;
      case 2:
        return <MaintenanceText />;
      case 3:
        return <MaintenanceCatalog />;
      case 4:
        return <MaintenanceNotes />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Welcome />
      <div className="Selector">
        <button value={0} onClick={() => setIndex(0)}>Timeline</button>
        <button value={1} onClick={() => setIndex(1)}>Projects</button>
        <button value={2} onClick={() => setIndex(2)}>Texts</button>
        <button value={3} onClick={() => setIndex(3)}>Articles</button>
        <button value={4} onClick={() => setIndex(4)}>Notes</button>
      </div>
      {renderContent()}
      <Footer />
    </div>
  );
}
