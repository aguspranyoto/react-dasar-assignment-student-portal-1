import profileImg from "../assets/img/admin.jpg";

const Header = () => {
  return (
    <>
      <div className="judul">
        <p>Student Portal</p>
      </div>
      <div className="user">
        <div>
          <p>Admin</p>
        </div>
        <div>
          <img className="profile" src={profileImg} width="40px" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
