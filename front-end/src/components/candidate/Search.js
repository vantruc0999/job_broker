import "../../assets/css/homepage.css";
import { Link } from "react-router-dom";
function Search() {
  return (
    <>
      <div className="searcDetail">
        <div className="input-group">
          <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
            Từ khóa:{" "}
          </p>
          <input
            type="text"
            style={{
              border: "none",
              borderRight: "1px solid#333",
              marginRight: "2px",
            }}
            className="form-control"
            placeholder="Việc làm, công ty, nghề nghiệp..."
          />
          <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
            Địa điểm:{" "}
          </p>
          <input
            type="text"
            style={{ border: "none" }}
            className="form-control"
            placeholder="Tỉnh thành, quận..."
          />
        </div>
        <div className="input-group-prepend">
          <Link to="/listJob">
            <button
              className="input-group-text"
              id=""
              style={{ borderRadius: "50px 50px 50px 50px" }}
            >
              Tìm kiếm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Search;
