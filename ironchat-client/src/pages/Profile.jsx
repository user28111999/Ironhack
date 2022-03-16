import { useState } from "react";
import apiHandler from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import IconAvatar from "../components/Icon/IconAvatarAdmin";

const Profile = () => {
  const { currentUser, storeToken } = useAuth();
  // const [name, setName] = useState(currentUser.name);
  const [{ name, image, imageTmp }, setState] = useState({
    name: currentUser.name,
    image: "",
    imageTmp: "",
  });

  const id = currentUser._id;

  const handleChange = (e) => {
    e.persist();
    setState((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    if (name !== "") fd.append("name", name);
    if (image !== "") fd.append("image", image);

    try {
      await apiHandler.patch(`/profile/${id}`, fd).then(({ data }) => {
        storeToken(data.newAuthToken);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // when the fileReader ends reading image  ...
      const base64String = reader.result;
      // add the actual file to the state + the tmp logo as a preview before upload
      setState((preValues) => ({
        ...preValues,
        image: file,
        imageTmp: base64String,
      }));
    };
    reader.readAsDataURL(file); // read the file from the local disk
  };

  return (
    <div className="profile-edit">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label className="label" htmlFor="image"></label>
        <IconAvatar
          avatar={imageTmp ? imageTmp : currentUser?.image}
          clbk={(e) => handleImage(e.target.files[0])}
          id="image"
        />
        <input
          style={{ borderRadius: "50px", border: "none", cursor: "pointer",backgroundColor:"inherit",color:"white"}}
          type="text"
          defaultValue={name}
          id="name"
          name="name"
        ></input>
        <button style={{ borderRadius: "10px",padding:"0px 20px" }}>Ok</button>
      </form>
    </div>
  );
};

export default Profile;
