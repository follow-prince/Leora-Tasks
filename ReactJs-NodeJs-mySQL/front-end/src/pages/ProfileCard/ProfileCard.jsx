import { useEffect, useState } from "react";
import ProfileForm from "./components/FormCard/profileForm";
import ShowCard from "./components/FormCard/ShowCard";
import { getUsers, createUser } from "./api/api";
import ListUsers from "./components/ListUsers/ListUsers";

const ProfileCard = () => {
  const [users, setUsers] = useState([]);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    gender: "",
    course: "",
    jobTitle: "",
    bio: "",
    skills: [],
    image: "",
  });

  // ------------------get a data from api----start--------------------
  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

 useEffect(()=>{
  fetchUsers();
 },[])



  
  // -----------------get a data from api----end-------------------------------------

  // ____________real time change data / details state __
  const handleDetailsChange = (name, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  // ______________________________________________

  // +++++++++++ send a data submit to api
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(details); // send to api

      setDetails({
        name: "",
        email: "",
        gender: "",
        image: "",
        course: "",
        jobTitle: "",
        bio: "",
        skills: [],
        file: null,
      });
      fetchUsers();

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  // ++++++++++++++++++++++++++++++++++++

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://64.media.tumblr.com/fb2c31390368aafebd5f2386d0bc713a/tumblr_o1zhz7mR3B1uuzayro1_1280.gif')",
        }}
        className="prince-overflow-auto prince-bg-center prince-bg-cover prince-bg-repeat-x prince-h-screen prince-w-screen"
      >
        <h1 className="prince-pt-4 prince-text-5xl prince-font-AppleFont prince-text-center prince-font-bold prince-text-gray-100 prince-uppercase">
          Generating Profile Card
        </h1>
        <div className="prince-flex prince-justify-around prince-flex-wrap">
          {/* get a form data */}
          <ProfileForm
            details={details}
            onDetailsChange={handleDetailsChange}
            onFormSubmit={handleFormSubmit}
          />
          {/* send a profile card */}
          <ShowCard {...details} />

          <div className="prince-w-[90%] prince-mt-64 prince-ml-9 prince-mb-12  prince-card prince-glass">
            {/* list users component */}
            {ListUsers && <ListUsers users={users} fetchUsers={fetchUsers} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
