import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../assets/styles/Publications.scss";

type PublicationItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
};

const PUBLICATIONS: PublicationItem[] = [
  {
    title: "From naive to advanced: Enhancing question answering with retrieval-augmented generation",
    authors: "Chakrabarty, A., Butukuri, R. S. R., Lu, J., Syed, S., & Syed, J.",
    venue: "2025 IEEE International Conference on Future Machine Learning and Data Science (FMLDS), pp. 514–518",
    year: "2025",
    url: "https://doi.org/10.1109/fmlds67896.2025.00066",
  },
  {
    title: "Smart Robot Car for Industrial Internet of Things",
    authors: "Chakrabarty et al.",
    venue: "CRC Press, Taylor & Francis Group, Vol. 2, 1st ed.",
    year: "2023",
  },
];

function Publications() {
  return (
    <div className="container publications-container" id="publications">
      <div className="publications-inner">
        <h1>Publications</h1>
        <p className="publications-subtitle">Peer-reviewed research and book chapters</p>
        <div className="publications-list">
          {PUBLICATIONS.map((pub, index) => (
            <article key={index} className="pub-card">
              <div className="pub-card-content">
                <span className="pub-year">{pub.year}</span>
                <h3>{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link"
                  >
                    View publication
                    <OpenInNewIcon fontSize="small" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
