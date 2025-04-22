'use client'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Welcome from "../../../components/Welcome";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Projects() {
  const loadData = useSelector((state) => state.rootReducer);
  const router = useRouter();
  const [state, setState] = useState({
    url: "",
    details: {},
    texts: [],
    language: "",
    loading: true,
  });

  useEffect(() => {
    if (router.isReady) {
      const { language, texts, arts } = loadData;
      const url = router.query.projectId; // Replace `projectId` with your dynamic route parameter name
      const details = arts.filter((e) => e.number === url);
      setState({ loading: false, url, details, language, texts });
    }
  }, [router.isReady, router.query.projectId, loadData]);

  if (state.loading) {
    return <div>...Loading</div>;
  }

  const { details } = state;
  if (!details || details.length === 0) {
    return <div>Details not found</div>;
  }

  const detail = details.find((e) => e.Langauge === loadData.language);

  if (!detail) {
    return <div>Details not available for the selected language</div>;
  }

  const text = state.texts.find((e) => e.language === state.language);

  return (
    <div className="A3F">
      <Head>
        <title>{`Project: ${loadData.language[0].Title}`}</title>
        <meta
          name="description"
          content={`Description: ${loadData.language[0].pd}`}
        />
      </Head>
      <Welcome />
      <h1>{detail.Title}</h1>
      <div className="Cols">
        <div className="backGround">
          <div className="A3Ftitle">
            <h2>{text?.bg}</h2>
          </div>
          <div className="probDesc">
            <h3>{text?.pd}</h3>
            <p>{detail.ProblemDescription}</p>
          </div>
          <div className="desiredState">
            <h3>{text?.ds}</h3>
            <p>{detail.DesiredState}</p>
          </div>
          <div className="goal">
            <h3>{text?.g}</h3>
            <p>{detail.Goals}</p>
          </div>
        </div>
        <div className="Solution">
          <div className="A3Ftitle">
            <h2>{text?.ex}</h2>
          </div>
          <div className="Tools">
            <h3>{text?.tools}:</h3>
            {detail.Tools}
          </div>
          <div className="Plan">
            <h3>{text?.plan}</h3>
            <ol>
              {detail.Plan.split('","').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="Results">
          <div className="A3Ftitle">
            <h2>{text?.del}</h2>
          </div>
          <div className="status">
            <p>Status: {detail.Status}</p>
          </div>
          <div className="Deliverable">
            <img src={detail.Image} alt="DeliverablePic" />
          </div>
          <div className="link">
            <h3>
              <a href={detail.Deliverable}>
                {state.language === "ESP"
                  ? "Entregable en Google Drive"
                  : "Deliverable link in Google Drive"}
              </a>
            </h3>
          </div>
        </div>
      </div>
      <Link href="../">
        <a>{state.language === "ESP" ? "Regresar" : "Go Back"}</a>
      </Link>
    </div>
  );
}
