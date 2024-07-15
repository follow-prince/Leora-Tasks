/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getProjects } from "../api/RootAPI";
import { useEffect, useState } from "react";
import { FaGithub, FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import { MdPreview, MdCancel } from "react-icons/md";

const ProjectCard = ({ data }) => {
  const [showIframe, setShowIframe] = useState(false);
  console.log(showIframe);

  return (
    <div>
      <dialog
        id={`modal_${data.id}`}
        className="prince-modal sm:prince-modal-middle"
        onClose={() => setShowIframe(false)}
      >
        <div style={{ maxWidth: '80%', maxHeight: '800px' }} className="prince-modal-box prince-bg-transparent">
          <div className="prince-border prince-mockup-browser prince-bg-base-300 prince-shadow-black">
            <div className="prince-mockup-browser-toolbar">
              <div className="prince-input">{data.webUrl}</div>
            </div>
            <div className="prince-justify-center prince-flex prince-bg-base-200">
              {showIframe && (
                <iframe
                  src={data.webUrl}
                  title={data.title}
                  className="prince-w-full lg:prince-min-h-[500px] prince-min-h-[500px]"
                ></iframe>
              )}
            </div>
          </div>
          <div className="prince-modal-action prince-justify-between">
            <div className="prince-flex prince-gap-2">
              <a
                href={data.github}
                target="_blank"
                className="prince-btn prince-rounded-md prince-shadow-md prince-btn-sm"
              >
                <FaGithubSquare /> Github
                <FaExternalLinkAlt />
              </a>
              <a
                href={data.webUrl}
                target="_blank"
                className="prince-btn prince-rounded-md prince-btn-primary prince-shadow-md prince-btn-sm"
              >
                <MdPreview />
                Live
                <FaExternalLinkAlt />
              </a>
            </div>
            <button
              className="prince-btn prince-rounded-md prince-shadow-md prince-btn-sm prince-btn-error"
              onClick={() => document.getElementById(`modal_${data.id}`).close()}
            >
              <MdCancel />
              Close
            </button>
          </div>
        </div>
      </dialog>

      <div className="prince-p-5">
        <div className="prince-card prince-glass prince-w-72">
          <figure>
            {data.previewImg ? (
              <LazyLoadImage src={data.previewImg} alt={data.title} effect="blur" />
            ) : (
              <div className="">
                <div className="prince-gap-4 prince-flex-col prince-flex w-52">
                  <div className="prince-h-32 prince-w-full prince-skeleton"></div>
                  <div className="prince-h-4 prince-skeleton prince-w-28"></div>
                  <div className="prince-h-4 prince-w-full prince-skeleton"></div>
                  <div className="prince-h-4 prince-w-full prince-skeleton"></div>
                </div>
              </div>
            )}
          </figure>
          <div className="prince-card-body prince-p-3">
            <div className="prince-flex prince-justify-between">
              <a
                href={data.github}
                className="prince-btn prince-btn-outline prince-rounded-md prince-btn-sm"
              >
                <FaGithub />
                Github
              </a>
              <button
                onClick={() => {
                  setShowIframe(true);
                  document.getElementById(`modal_${data.id}`).showModal();
                }}
                className="prince-btn prince-btn-primary prince-rounded-md prince-btn-sm"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItemsTemplate = ({ projects }) => (
  <div className="prince-flex prince-flex-wrap prince-mt-5 prince-justify-center">
    {projects.map((data) => (
      <ProjectCard key={data.id} data={data} />
    ))}
  </div>
);

export const CardItems = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <CardItemsTemplate projects={projects} />
    </div>
  );
};

export default CardItems;
