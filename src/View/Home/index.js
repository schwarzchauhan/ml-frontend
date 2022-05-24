// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getAllPosts } from "../../store/Actions/TestActions";
// import Users from "../../components/Users";

function Home() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllPosts());
//   }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };
  return (
    <div className="home-page">
      <h1>This is a React-Redux Structure Demo App</h1>
      <h2>Welcome to the Homepage / Landing page</h2>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;