import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Welcome from "../../../components/Welcome";
import Head from "next/head";

export default function Studies() {
  const loadData = useSelector((state) => state.rootReducer);

  // Memoize filtered notes for performance
  const notes = useMemo(
    () =>
      loadData.notes.filter(
        (e) => e.Language === loadData.language
      ),
    [loadData.notes, loadData.language]
  );

  return (
    <div className="fullStudy" key="1">
      {/* Head for SEO */}
      <Head>
        <title>{`Project: ${loadData.language[0].Title}`}</title>
        <meta
          name="description"
          content={`Description: ${loadData.language[0].Category}`}
        />
      </Head>
      <Welcome />
      {notes.map((e, index) => (
        <div className="Notes" key={index}>
          <div className="NotesTitle">
            <p>{e.Title}</p>
            <p>{e.Category}</p>
            <p>{e.HeaderImage}</p>
          </div>
          <div className="Cornell">
            <div className="Cues">
              <ul>
                {e.Key.split("/").map((key, i) => (
                  <li key={i}>{key}</li>
                ))}
              </ul>
            </div>
            <div className="MainNotes">
              <ul>
                {e.Definition.split("/").map((definition, i) => (
                  <li key={i}>{definition}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="Summary">
            <p>{e.Summary}</p>
          </div>
          <Link href="../">
            <a>
              {loadData.language === "ESP" ? "Regresar" : "Go Back"}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
