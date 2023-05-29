const Form = () => {
  return (
    <>
      <form id="form-student" className="form-student">
        <div className="fullname">
          <label>
            Fullname
            <input id="input-name" type="text" />
          </label>
        </div>

        <div className="birth">
          <label>
            Birth Date
            <input id="input-date" type="date" />
          </label>
        </div>

        <div className="gender">
          <label>
            {" "}
            Gender
            <select id="input-gender">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </label>
        </div>

        <div className="prody">
          <label>
            Program Study
            <select id="input-prody">
              <option value="">Ekonomi</option>
              <option value="">Manajemen</option>
              <option value="">Akuntansi</option>
              <option value="">Administrasi Publik</option>
              <option value="">Administrasi Bisnis</option>
              <option value="">Hubungan Internasional</option>
              <option value="">Teknik Sipil</option>
              <option value="">Arsitektur</option>
              <option value="">Matematika</option>
              <option value="">Fisika</option>
              <option value="">Informatika</option>
            </select>
          </label>
        </div>

        <div>
          <input
            className="add-btn"
            id="add-btn"
            type="submit"
            value="Add student"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
