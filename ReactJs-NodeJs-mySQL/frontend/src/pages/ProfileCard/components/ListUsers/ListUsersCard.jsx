/* eslint-disable react/prop-types */
import JobIcon from "../../../../assets/icons/jobIcon.svg";
import StudyIcon from "../../../../assets/icons/courseIcon.svg";
import GenderIcon from "../../../../assets/icons/gender.svg";
import MailIcon from "../../../../assets/icons/mail.svg";

const ListUsersCard = ({ user }) => {
  return (
    <div>
      <div className="prince-h-[100%] prince-rounded-2xl prince-glass prince-opacity-80 prince-gap-10">
        <div className="prince-text-center prince-flex prince-flex-row prince-p-6 prince-justify-between">
          <div className="prince-ml-8 prince-mt-4 prince-flex prince-flex-col prince-text-left">
            <h3 className="prince-font-extrabold prince-text-3xl prince-font-AppleFont prince-uppercase prince-text-white prince-drop-shadow-lg">
              {user.NAME}
            </h3>
            <div className="prince-font-bold prince-font-AppleFont prince-text-slate-100 prince-text-center prince-mt-3 prince-flex prince-flex-col prince-gap-3">
              {user.jobTitle && (
                <div className="prince-flex prince-flex-row prince-gap-2">
                  <img src={JobIcon} alt="Job Icon" /> {user.jobTitle}
                </div>
              )}
              <div className="prince-flex prince-flex-row prince-gap-2">
                {user.gender && (
                  <div className="prince-flex prince-gap-2">
                    <img src={GenderIcon} alt="Gender Icon" /> {user.gender}
                  </div>
                )}
                {user.course && (
                  <div className="prince-flex prince-gap-2">
                    <img src={StudyIcon} alt="Study Icon" /> {user.course}
                  </div>
                )}
              </div>
              <div className="prince-flex prince-flex-row prince-gap-2">
                {user.email && (
                  <div className="prince-flex prince-gap-2">
                    <img src={MailIcon} alt="Mail Icon" /> {user.email}
                  </div>
                )}
              </div>
            </div>
            {user.bio && (
              <span className="prince-text-lg prince-font-extrabold prince-mt-4 prince-text-slate-100">
                ABOUT
              </span>
            )}
            {user.bio && (
              <div className="prince-text-slate-100 prince-text-sm prince-font-AppleFont prince-text-left prince-mt-1">
                {user.bio}
              </div>
            )}
          </div>
          <div className="prince-flex prince-flex-col ">
            <img
              className="prince-object-cover prince-w-32 prince-h-32 prince-outline prince-rounded-2xl "
              src={user.image}
              alt="Profile"
            />
            <div className="prince-flex prince-flex-col prince-mt-5">
              {user.skill && (
                <span className="prince-text-slate-100 prince-font-AppleFont prince-uppercase prince-font-bold">
                  Skills
                </span>
              )}
              <div className="prince-gap-2 prince-grid-cols-2 prince-grid">
                {user && user.skills ? (
                  user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="prince-badge prince-badge-accent prince-badge-outline prince-mt-2 prince-p-1 prince-uppercase"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <div>no skills</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsersCard;
