import PropTypes from "prop-types";
import { useState } from "react";
import DeleteIcon from "../../../../assets/icons/delete.svg";

const ProfileForm = ({ details, onDetailsChange, onFormSubmit }) => {
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // remove image
  const deleteImage = () => {
    onDetailsChange("image", "");
  };

  const handleChange = (e) => {
    try {
      const { name, value, type, checked } = e.target;

      // handling check box
      if (type === "checkbox") {
        const updatedSkills = checked
          ? [...details.skills, value]
          : details.skills.filter((skill) => skill !== value);
        onDetailsChange(name, updatedSkills);
      }
      // change for image to raw data
      else if (type === "file") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            onDetailsChange(name, reader.result);
          };
          reader.onerror = () => {
            setError("Failed to read file");
          };
          reader.readAsDataURL(file);
        }
      } else {
        onDetailsChange(name, value);
      }
    } catch (err) {
      setError("Try again");
    }
  };

  const validateFields = () => {
    const newFieldErrors = {};
    if (!details.name) newFieldErrors.name = "Enter the Name❗️";
    if (!details.jobTitle) newFieldErrors.jobTitle = "Enter the Job Title❗️";
    if (!details.course) newFieldErrors.course = "Enter the Course❗️";
    if (!details.email) newFieldErrors.email = "Enter the Email❗️";
    if (!details.gender) newFieldErrors.gender = "Select Gender❗️";
    if (details.skills.length === 0)
      newFieldErrors.skills = "At least one skill select❗️";
    if (!details.bio) newFieldErrors.bio = "Enter the bio❗️";

    setFieldErrors(newFieldErrors);
    return Object.keys(newFieldErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      onFormSubmit();
    } else {
      setError("Please fill in all fields below ❗️");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="prince-mt-10 prince-ml-9 prince-p-10 prince-pb-0 prince-card prince-glass prince-w-[500px] prince-h-[100%] prince-flex prince-gap-2 prince-opacity-90">
          <p className="prince-font-AppleFont prince-text-center prince-font-bold prince-text-2xl prince-text-slate-100">
            Details
          </p>
          {error && (
            <div className="prince-text-gray-50 prince-font-bold prince-text-center">
              {error}
            </div>
          )}
          <label className="prince-uppercase prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
            Name:
            <input
              name="name"
              onChange={handleChange}
              type="text"
              value={details.name}
              className="prince-grow prince-uppercase prince-text-white prince-w-10"
              placeholder="Ex: Prince"
            />
            {fieldErrors.name && (
              <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
                {fieldErrors.name}
              </div>
            )}
          </label>

          <label className="prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
            Job Title:
            <input
              onChange={handleChange}
              name="jobTitle"
              type="text"
              value={details.jobTitle}
              className="prince-grow prince-text-white prince-w-10"
              placeholder="Ex: Developer"
            />
            {fieldErrors.jobTitle && (
              <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
                {fieldErrors.jobTitle}
              </div>
            )}
          </label>

          <label className="prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
            Course:
            <input
              onChange={handleChange}
              name="course"
              type="text"
              value={details.course}
              className="prince-grow prince-text-white prince-w-10"
              placeholder="Ex: MCA"
            />
                      {fieldErrors.course && (
            <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
              {fieldErrors.course}
            </div>
          )}
          </label>

          <label className="prince-uppercase prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
            Email:
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={details.email}
              className="prince-grow prince-text-white prince-lowercase prince-w-10"
              placeholder="Ex: contact@elavarasan.me"
            />
                      {fieldErrors.email && (
            <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
              {fieldErrors.email}
            </div>
          )}
          </label>

          <label className="prince-text-lg prince-font-AppleFont prince-font-extrabold prince-flex prince-justify-around prince-text-white">
            <span>Gender:</span>
            <span className="prince-flex prince-gap-4">
              Male
              <input
                onChange={handleChange}
                checked={details.gender === "Male"}
                type="radio"
                name="gender"
                className="prince-radio prince-radio-success"
                value="Male"
              />
            </span>
            <span className="prince-flex prince-gap-4">
              Female
              <input
                onChange={handleChange}
                checked={details.gender === "Female"}
                value="Female"
                type="radio"
                name="gender"
                className="prince-radio prince-radio-success"
              />
            </span>
            {fieldErrors.gender && (
            <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
              {fieldErrors.gender}
            </div>
          )}
          </label>

          <label className="prince-cursor-pointer prince-label prince-flex prince-flex-wrap prince-justify-around prince-text-slate-100">
            <span className="prince-text-slate-900 prince-font-AppleFont prince-font-bold prince-flex prince-gap-3 ">
              <input
                onChange={handleChange}
                type="checkbox"
                className="prince-checkbox"
                name="skills"
                value="JavaScript"
                checked={details.skills.includes("JavaScript")}
              />
              <span className="prince-label-text prince-text-slate-100">
                JavaScript
              </span>
            </span>
            <span className="prince-text-white prince-font-AppleFont prince-font-bold prince-flex prince-gap-3">
              <input
                onChange={handleChange}
                type="checkbox"
                className="prince-checkbox"
                name="skills"
                value="Python"
                checked={details.skills.includes("Python")}
              />
              <span className="prince-label-text prince-text-slate-100">
                Python
              </span>
            </span>
            <span className="prince-text-white prince-font-AppleFont prince-font-bold prince-flex prince-gap-3">
              <input
                onChange={handleChange}
                type="checkbox"
                className="prince-checkbox"
                name="skills"
                value="Java"
                checked={details.skills.includes("Java")}
              />
              <span className="prince-label-text prince-text-slate-100">
                Java
              </span>
            </span>
            <span className="prince-text-white prince-font-AppleFont prince-font-bold prince-flex prince-gap-3">
              <input
                onChange={handleChange}
                type="checkbox"
                className="prince-checkbox"
                name="skills"
                value="ReactJs"
                checked={details.skills.includes("ReactJs")}
              />
              <span className="prince-label-text prince-text-slate-100">
                React Js
              </span>
            </span>
            {fieldErrors.skills && (
            <div className="prince-text-red-500 prince-font-bold prince-text-left prince-text-sm">
              {fieldErrors.skills}
            </div>
          )}
          </label>
        
          <label className="prince-cursor-pointer prince-label prince-flex prince-gap-3 prince-justify-center">
            <input
              onChange={handleChange}
              name="image"
              accept=".png, .jpg, .jpeg"
              type="file"
              className=" prince-max-h-72 prince-file-input prince-file-input-bordered"
            />
            {details.image && (
              <div className="prince-flex prince-justify-center prince-my-4 prince-gap-3">
                <img
                  src={details.image}
                  alt=""
                  className="prince-object-cover prince-w-10 prince-h-10 prince-rounded-md"
                />
                <img
                  onClick={deleteImage}
                  className="prince-w-4 prince-cursor-pointer"
                  src={DeleteIcon}
                  alt="Delete"
                />
              </div>
            )}
          </label>
          <label className="prince-cursor-pointer prince-label prince-flex prince-flex-wrap prince-justify-center">
          {fieldErrors.bio && (
            <div className="prince-text-red-500 prince-font-bold prince-text-sm">
              {fieldErrors.bio}
            </div>
          )}
            <textarea
              value={details.bio}
              onChange={handleChange}
              name="bio"
              className="prince-font-AppleFont prince-font-extrabold prince-textarea prince-textarea-lg prince-bg-slate-800 prince-w-96 prince-text-white"
              placeholder="Bio"
            >
                   
            </textarea>

          </label>
         
          <button
            type="submit"
            className="prince-btn prince-btn-block prince-mb-12 prince-btn-success prince-text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

ProfileForm.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  onDetailsChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
