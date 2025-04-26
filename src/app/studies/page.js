"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store"; // Adjust this import based on your store location
import Welcome from "@/components/Welcome";
import Link from "next/link";
import { Helmet } from "react-helmet-async";

export default function StudiesPage() {
  const { notes, language } = useSelector(
    (state: RootState) => state.rootReducer
  );

  return (
    <div className="p-8 space-y-8">
      <Helmet>
        <title>Project: {language[0]?.Title}</title>
        <meta
          name="description"
          content={`Description: ${language[0]?.Category}`}
        />
      </Helmet>

      <Welcome />

      {notes
        .filter((note) => note.Language === language)
        .map((note, idx) => (
          <div key={idx} className="border p-4 rounded-md shadow-md bg-white">
            <div className="mb-4">
              <p className="text-xl font-bold">{note.Title}</p>
              <p className="text-gray-500">{note.Category}</p>
              <img
                src={note.HeaderImage}
                alt="Header"
                className="w-full h-64 object-cover my-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold mb-2">Cues</h2>
                <ul className="list-disc list-inside">
                  {note.Key.split("/").map((keyItem, i) => (
                    <li key={i}>{keyItem}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Main Notes</h2>
                <ul className="list-disc list-inside">
                  {note.Definition.split("/").map((defItem, i) => (
                    <li key={i}>{defItem}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="font-semibold mb-2">Summary</h2>
              <p>{note.Summary}</p>
            </div>

            <div className="mt-6">
              <Link href="/" className="text-blue-600 hover:underline">
                {language === "ESP" ? "Regresar" : "Go Back"}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
