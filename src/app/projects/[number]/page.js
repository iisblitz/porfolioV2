"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Welcome from "../../../components/Welcome";
import Head from "next/head";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectDetailPage() {
  const { number } = useParams(); // 🔥 correct dynamic param
  const { arts, language, texts } = useSelector((state) => state.rootReducer);

  const [state, setState] = useState({
    detail: null,
    loading: true,
    textLabels: null,
  });

  useEffect(() => {
    if (number && arts.length > 0) {
      const filtered = arts.find((art) => art.number === number);
      const labels = texts.find((text) => text.language === language);

      setState({
        detail: filtered || null,
        loading: false,
        textLabels: labels || null,
      });
    }
  }, [number, arts, language, texts]);

  if (state.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!state.detail) {
    return <div className="text-center mt-10">Project not found.</div>;
  }

  const { detail, textLabels } = state;

  return (
    <div className="A3F p-4">
      <Head>
        <title>Project: {detail?.Title || "Project"}</title>
        <meta
          name="description"
          content={
            detail?.ProblemDescription?.substring(0, 150) || "Project Details"
          }
        />
      </Head>

      <Welcome />

      <h1 className="text-3xl font-bold mb-6">{detail.Title}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="backGround space-y-4">
          <div className="A3Ftitle">
            <h2 className="text-2xl">{textLabels?.bg}</h2>
          </div>
          <div className="probDesc">
            <h3 className="font-semibold">{textLabels?.pd}</h3>
            <p>{detail.ProblemDescription}</p>
          </div>
          <div className="desiredState">
            <h3 className="font-semibold">{textLabels?.ds}</h3>
            <p>{detail.DesiredState}</p>
          </div>
          <div className="goal">
            <h3 className="font-semibold">{textLabels?.g}</h3>
            <p>{detail.Goals}</p>
          </div>
        </div>

        <div className="Solution space-y-4">
          <div className="A3Ftitle">
            <h2 className="text-2xl">{textLabels?.ex}</h2>
          </div>
          <div className="Tools">
            <h3 className="font-semibold">{textLabels?.tools}:</h3>
            <p>{detail.Tools}</p>
          </div>
          <div className="Plan">
            <h3 className="font-semibold">{textLabels?.plan}</h3>
            <ol className="list-decimal ml-4">
              {detail.Plan?.split('","').map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="Results space-y-4">
          <div className="A3Ftitle">
            <h2 className="text-2xl">{textLabels?.del}</h2>
          </div>
          <div className="status">
            <p>Status: {detail.Status}</p>
          </div>
          <div className="Deliverable">
            <img
              src={detail.Image}
              alt="DeliverablePic"
              className="rounded shadow-md"
            />
          </div>
          <div className="link">
            <h3>
              <a
                href={detail.Deliverable}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {language === "ESP"
                  ? "Entregable en Google Drive"
                  : "Deliverable link in Google Drive"}
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/projects">
          <div className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            {language === "ESP" ? "Regresar" : "Go Back"}
          </div>
        </Link>
      </div>
    </div>
  );
}
