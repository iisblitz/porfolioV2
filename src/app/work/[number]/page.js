'use client'

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Welcome from "@/components/Welcome"; // Adjust the import path if needed

export default function WorkPage({ params }) {
  const { name } = params; // Get dynamic route param from Next.js
  const loadData = useSelector((state) => state.rootReducer);

  const [state, setState] = useState({
    details: [],
    projects: [],
    loading: true,
  });

  useEffect(() => {
    if (loadData) {
      const decodedName = decodeURIComponent(name); // Ensure spaces work correctly
      const details = loadData.time.filter((e) => e.BusinessName === decodedName);
      const projects = loadData.arts.filter((e) => e.Work === decodedName);

      setState({
        loading: false,
        details,
        projects,
      });
    }
  }, [loadData, name]);

  if (state.loading) {
    return <div>...Loading</div>;
  }

  const { details, projects } = state;
  if (details.length === 0) {
    return <div>Details not found</div>;
  }

  const workDetails = details.find((e) => e.Language === loadData.language);
  if (!workDetails) {
    return <div>Details not available in this language</div>;
  }

  return (
    <div className="workTemplate">
      <Welcome />
      <h1 className="workTitle">{workDetails.BusinessName}</h1>
      <div className="workHeaders">
        <div className="workHeaderImg">
          <img src={workDetails.Image} alt="logo" />
        </div>
        <div className="businessData">
          <h2>{loadData.texts.find((e) => e.language === loadData.language)?.desc}</h2>
          <p>{workDetails.BusinessDescription}</p>
        </div>
        <div className="workDataTL">
          <h4>
            {loadData.texts.find((e) => e.language === loadData.language)?.ti}: {workDetails.Begin}
          </h4>
          <h4>
            {loadData.texts.find((e) => e.language === loadData.language)?.te}:{" "}
            {workDetails.End === "0001-01-01" ? "Present" : workDetails.End}
          </h4>
          <p>
            {loadData.texts.find((e) => e.language === loadData.language)?.loc}: {workDetails.Location}
          </p>
        </div>
      </div>
      <div className="jobData">
        <h1>
          {loadData.language === "ESP"
            ? `Descripción de ${workDetails.Category}`
            : `${workDetails.Category} description`}
        </h1>
        <p>{workDetails.JobDescription}</p>
      </div>
      <div className="workProjects">
        <div className="workProjectTitle">
          <h1>{loadData.texts.find((e) => e.language === loadData.language)?.header}</h1>
        </div>
        <div className="WorkWrap">
          {projects
            .filter((e) => e.Language === loadData.language)
            .map((e) => (
              <div key={e.id} className="projectBullet">
                <Link href={`/Project/${e.number}`}>
                  <img src={e.Logo} alt="Logo" />
                  <p>{e.Title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Link href="/">
        {loadData.texts.find((e) => e.language === loadData.language)?.link}
      </Link>
    </div>
  );
}
