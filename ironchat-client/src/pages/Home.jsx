import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import FormSignIn from "../components/Forms/FormSignIn";
import FormSignUp from "../components/Forms/FormSignUp";
import serverLogo from "../images/téléchargement.png";
import Profile from "./Profile";
import NavMain from "../components/Nav/NavMain";
import FormServer from "../components/Forms/FormServer";
import Logo from "../images/Ironchat.png";

const Home = () => {
  const [register, setRegister] = useState(false);
  const [servers, setServers] = useState([]);
  const { isLoggedIn, currentUser } = useAuth();
  const [profile, setProfile] = useState(false);
  const [addserver, setAddserver] = useState(false);

  useEffect(() => {
    apiHandler
      .get("/server/")
      .then((res) => {
        setServers(res.data.server);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleImgClick = (serverId) => {
    const userId = currentUser._id;
    apiHandler
      .post(`/server/${serverId}/participants`, { participants: userId })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="server">
        {isLoggedIn ? (
          <>
            <div className="navLP">
              <div className="divLogo">
                <NavLink className="logo" to="/">
                  <img style={{ width: "50px" }} src={Logo} alt="" />
                  IronChat
                </NavLink>
              </div>
              <div className="serverContainer">
                {servers.map((server, i) => (
                  <div key={i} className="serverContainerChild">
                    <Link to={`/server/${server._id}`} key={server._id}>
                      <img
                        onClick={() => handleImgClick(server._id)}
                        className="serverLogo"
                        src={serverLogo}
                        alt="serverLogo"
                      />
                      <p className="serverIcone">{server.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="homeicone">
                <i
                  onClick={() => setAddserver(!addserver)}
                  className="fa-solid fa-plus"
                  style={{ fontSize: "30px" }}
                ></i>
                {/* <i
                  onClick={() => setProfile(!profile)}
                  className="fas fa-user-circle"
                  style={{ fontSize: "30px" }}
                ></i> */}
                {currentUser.image ? (
                  <img
                    src={currentUser.image}
                    style={{ width: 40,borderRadius:"50%" }}
                    onClick={() => setProfile(!profile)}
                  />
                ) : (
                  <i
                    onClick={() => setProfile(!profile)}
                    className="fas fa-user-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                )}

                {addserver ? (
                  <div className="servdiv">
                    <FormServer
                      setServers={setServers}
                      closeServer={() => setAddserver(!addserver)}
                    />
                  </div>
                ) : null}
                {profile ? (
                  <div className="profile">
                    <Profile />
                    <NavMain />
                  </div>
                ) : null}
                {/* <Link to="/profile">
                  <i
                    className="fas fa-user-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                </Link> */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="home">
              {!register ? (
                <>
                  <FormSignIn />
                  <span
                    className="register"
                    onClick={() => setRegister(!register)}
                  >
                    Don't have an account?
                  </span>
                </>
              ) : (
                <>
                  <FormSignUp />
                  <span
                    className="register"
                    onClick={() => setRegister(!register)}
                  >
                    Already have an account?
                  </span>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
