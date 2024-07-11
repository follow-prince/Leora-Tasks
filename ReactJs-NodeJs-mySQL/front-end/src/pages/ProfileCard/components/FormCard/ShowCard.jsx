import JobIcon from "../../../../assets/icons/jobIcon.svg";
import StudyIcon from "../../../../assets/icons/courseIcon.svg";
import GenderIcon from "../../../../assets/icons/gender.svg";
import MailIcon from "../../../../assets/icons/mail.svg";

const ShowCard = (details) => {

  return (
   
        <div className="prince-mt-10 prince-glass prince-w-[600px] prince-h-[100%] prince-rounded-2xl prince-gap-20 ">
        {details.name && (
          <div className="prince-text-center prince-flex prince-flex-row prince-p-6 prince-justify-between">
            <div className="prince-ml-8 prince-mt-4 prince-flex prince-flex-col prince-text-left">
              {details.name && (
                <h3 className="prince-font-extrabold prince-text-3xl prince-font-AppleFont prince-uppercase prince-text-white prince-drop-shadow-lg">
                  {details.name}
                </h3>
              )}
              <div className="prince-font-bold prince-font-AppleFont prince-text-slate-100 prince-text-center prince-mt-3 prince-flex prince-flex-col prince-gap-3">
                {details.jobTitle && (
                  <div className="prince-flex prince-flex-row prince-gap-2">
                    <img src={JobIcon} alt="Job Icon" /> {details.jobTitle}
                  </div>
                )}
                <div className="prince-flex prince-flex-row prince-gap-2">
                  {details.gender && (
                    <div className="prince-flex prince-gap-2">
                      <img src={GenderIcon} alt="Gender Icon" />{" "}
                      {details.gender}
                    </div>
                  )}
                  {details.course && (
                    <div className="prince-flex prince-gap-2">
                      <img src={StudyIcon} alt="Study Icon" /> {details.course}
                    </div>
                  )}
                </div>

                <div className="prince-flex prince-flex-row prince-gap-2">
                  {details.email && (
                    <div className="prince-flex prince-gap-2">
                      <img src={MailIcon} alt="Mail Icon" /> {details.email}
                    </div>
                  )}
                </div>
              </div>
              {details.bio && (
                <span className="prince-text-lg prince-font-extrabold prince-mt-4 prince-text-slate-100">
                  ABOUT
                </span>
              )}
              {details.bio && (
                <div className="prince-text-slate-100 prince-text-sm prince-font-AppleFont prince-text-left prince-mt-1">
                  {details.bio}
                </div>
              )}
            </div>
            <div className="prince-flex-none prince-flex-col ">
              {details.image && (
                <img
                  className="prince-object-cover prince-w-40 prince-h-40 prince-outline-2 prince-rounded-2xl prince-p-2 "
                  src={details.image}
                  alt="Profile"
                />
              )}
              <div className="prince-flex prince-flex-col prince-mt-5">
                {details.skill && (
                  <span className="prince-text-slate-100 prince-font-AppleFont prince-uppercase prince-font-bold">
                    Skills
                  </span>
                )}
                <div className="prince-gap-2 prince-grid-cols-2 prince-grid">
                  {details.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="prince-badge prince-badge-accent prince-badge-outline prince-mt-2 prince-p-1 prince-uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
             )}
        </div>
   
    
  );
};

export default ShowCard;
