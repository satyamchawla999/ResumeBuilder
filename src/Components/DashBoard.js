import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import "../Assets/Styles/dashboard.css";
import { CvItems, DraftItems } from "./itemsComponents";
import { logOut } from "../Features/Users/usersSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resumeData);
  const user = useSelector((state) => state.user);
  const draftData = useSelector((state) => state.draftData);

  const Navigate = useNavigate();
  const {addToast} = useToasts();

  const handleClick = () => {
    Navigate("/form");
  };

  const handleLogOut = () => {
    dispatch(logOut());
    return addToast("Logged Out", {
      appearance: "success",
    });
  };

  return (
    <div className="dashboard">
      <div className="heading">
        <h1>Dashboard</h1>
        <button onClick={handleLogOut}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut
        </button>
      </div>

      <div className="itemContainer">
        <div className="published">
          <h3>Published</h3>
          <div>
            {resumeData.map(
              (item) =>
                user === item.userId && <CvItems key={item.id} item={item} />
            )}
          </div>
        </div>

        <div className="draft">
          <h3>Draft</h3>
          <div>
            {draftData.map(
              (item) =>
                user === item.userId && <DraftItems key={item.id} item={item} />
            )}
          </div>
        </div>
      </div>

      <button className="button" onClick={handleClick}>
        &nbsp;+&nbsp;
      </button>
    </div>
  );
};

export default Dashboard;
