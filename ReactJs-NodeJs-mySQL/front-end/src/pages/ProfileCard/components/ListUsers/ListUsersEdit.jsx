/* eslint-disable react/prop-types */
import { useState } from "react";
import { updateUser } from "../../api/api";

const ListUsersEdit = ({ user, fetchUsers }) => {
  const [formData, setFormData] = useState({
    id: user.id,
    name: user.NAME,
    jobTitle: user.jobTitle,
    course: user.course,
    email: user.email,
    gender: user.gender,
    skills: user.skills,
    bio: user.bio,
    image: user.image,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    //  handing check box
    if (type === "checkbox") {
      const newSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData({ ...formData, skills: newSkills });
    }

    // image converting  to raw data
    else if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((data) => ({
            ...data,
            [name]: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /// submit the all data update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = await updateUser(formData.id, formData);
      console.log("User updated:", updatedUser);
      // console.log(formData);
    } catch (error) {
      console.error("Error updating user:", error);
    }
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="prince-p-0 prince-pb-0 prince-card prince-w-[100%] prince-h-[100%] prince-flex prince-gap-2 prince-opacity-90">
        <div className="prince-font-AppleFont prince-text-center prince-font-bold prince-text-2xl prince-text-slate-100">
          Details Edit
        </div>

        <label className="prince-uppercase prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
          Name:
          <input
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
            className="prince-grow prince-uppercase prince-text-white prince-w-10"
            placeholder="Ex: Prince"
          />
        </label>
        <label className="prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
          Job Title:
          <input
            onChange={handleChange}
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            className="prince-grow prince-text-white prince-w-10"
            placeholder="Ex: React Developer"
          />
        </label>
        <label className="prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
          Course:
          <input
            onChange={handleChange}
            name="course"
            type="text"
            value={formData.course}
            className="prince-grow prince-text-white prince-w-10"
            placeholder="Ex: MCA"
          />
        </label>
        <label className="prince-uppercase prince-bg-slate-900 prince-font-AppleFont prince-font-bold prince-text-white prince-gap-2 prince-items-center prince-flex prince-input prince-input-bordered">
          Email:
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={formData.email}
            className="prince-grow prince-text-white prince-lowercase prince-w-10"
            placeholder="Ex: contact@elavarasan.me"
          />
        </label>
        <label className="prince-text-lg prince-font-AppleFont prince-font-extrabold prince-flex prince-justify-around prince-text-white">
          <span>Gender : </span>
          <span className="prince-flex prince-gap-4">
            Male
            <input
              onChange={handleChange}
              checked={formData.gender === "Male"}
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
              checked={formData.gender === "Female"}
              value="Female"
              type="radio"
              name="gender"
              className="prince-radio prince-radio-success"
            />
          </span>
        </label>
        <label className="prince-cursor-pointer prince-label prince-flex prince-flex-wrap prince-justify-around prince-text-slate-100">
          <span className="prince-text-white prince-font-AppleFont prince-font-bold prince-flex prince-gap-3 ">
            <input
              onChange={handleChange}
              type="checkbox"
              className="prince-checkbox"
              name="skills"
              value="JavaScript"
              checked={
                formData.skills ? formData.skills.includes("JavaScript") : false
              }
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
              checked={
                formData.skills ? formData.skills.includes("Python") : false
              }
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
              checked={
                formData.skills ? formData.skills.includes("Java") : false
              }
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
              checked={
                formData.skills ? formData.skills.includes("ReactJs") : false
              }
            />
            <span className="prince-label-text prince-text-slate-100">
              React Js
            </span>
          </span>
        </label>
        <label className="prince-cursor-pointer prince-label prince-flex prince-gap-3 prince-justify-center">
          <img
            className="prince-w-24 prince-rounded-2xl prince-outline "
            src={formData.image}
            alt=""
          />
          <input
            onChange={handleChange}
            name="image"
            accept=".png, .jpg, .jpeg"
            type="file"
            className="prince-max-h-72 prince-file-input prince-file-input-bordered"
          />
        </label>

        <label className="prince-cursor-pointer prince-label prince-flex prince-flex-wrap prince-justify-center">
          <textarea
            value={formData.bio}
            onChange={handleChange}
            name="bio"
            className="prince-font-AppleFont prince-font-extrabold prince-textarea prince-textarea-lg prince-bg-slate-800 prince-w-96 prince-text-white"
            placeholder="Bio"
          ></textarea>
        </label>
        <button
          type="submit"
          className="prince-btn prince-btn-block prince-mb-12 prince-btn-success prince-text-white prince-uppercase"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default ListUsersEdit;
