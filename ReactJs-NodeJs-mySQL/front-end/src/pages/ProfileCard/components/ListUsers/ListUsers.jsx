/* eslint-disable react/prop-types */
import {  useState } from "react";
import ListUsersEdit from "./ListUsersEdit";
import DeleteIcon from "../../../../assets/icons/delete.svg";
import { deleteUser } from "../../api/api";
import ListUsersCard from "./ListUsersCard";

const ListUsers = ({ users,fetchUsers }) => {
  const [currentUser, setCurrentUser] = useState(null);
   

  // ~~~~~~~~~~~~ action methods ~~~~~~~~~~~~~~~~~~~~~~~~~
  const handleEditClick = (user) => {
    setCurrentUser(user);
    document.getElementById("my_modal_1").showModal();
  };
  const handleShowClick = (user) => {
    setCurrentUser(user);
    document.getElementById("my_modal_2").showModal();
  };

  // this delete user
  const handleDeleteClick = async(id) => {
    await deleteUser(id); // req to api for delete user
    fetchUsers();
  };
  
  const ClearUserDetails = () => {
    setCurrentUser(null);
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const parsedUsers = users.map((user) => {
    return {
      ...user,
      skills: JSON.parse(user.skills),
    };
  });

  return (
    <div className="prince-overflow-x-auto prince-text-gray-100 prince-font-AppleFont">
      <table className="prince-table prince-text-gray-100 prince-font-AppleFont">
        <thead>
          <tr className="prince-text-gray-100 prince-font-AppleFont prince-text-lg">
            <th>Name</th>
            <th>Degree/Skills</th>
            <th>Email</th>
            <th>About</th>
            <th className="prince-text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parsedUsers.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="prince-gap-3 prince-text-gray-100 prince-font-AppleFont prince-items-center prince-flex">
                  <div className="avatar">
                    <div className="prince-h-12 prince-w-12 prince-mask prince-mask-squircle ">
                      {user.image ? (
                        <img className="prince-outline" src={`${user.image}`} alt="" />
                      ) : (
                        <span>No Image</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="prince-font-bold prince-uppercase prince-text-lg">
                      {user.NAME}
                    </div>
                    <div className="prince-opacity-50 prince-text-sm">
                      {user.jobTitle}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {user.course}
                <br />
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="prince-badge prince-badge-ghost prince-badge-sm"
                  >
                    <span className="prince-mr-1">{skill}</span>
                  </span>
                ))}
              </td>
              <td>{user.email}</td>
              <td>{user.bio}</td>
              <td>
                <div className="prince-flex prince-gap-7">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="prince-btn prince-border-gray-400 prince-btn-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleShowClick(user)}
                    className="prince-btn prince-border-gray-400 prince-btn-xs"
                  >
                    Show
                  </button>
                  <img
                    onClick={() => handleDeleteClick(user.id)}
                    className="prince-w-6"
                    src={DeleteIcon}
                    alt=""
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal_1" className="prince-modal">
        <div className="prince-modal-box prince-glass prince-opacity-90">
          {currentUser && <ListUsersEdit     fetchUsers={fetchUsers}  user={currentUser} />}
          <div className="prince-modal-action">
            <form method="dialog">
              <button
                onClick={ClearUserDetails}
                className="prince-btn prince-glass"
              >
                close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="prince-modal ">
        <div className="prince-modal-box prince-glass ">
          {currentUser && <ListUsersCard user={currentUser} />}
          <div className="prince-modal-action">
            <form method="dialog">
              <button
                onClick={ClearUserDetails}
                className="prince-btn prince-glass"
              >
                close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ListUsers;
