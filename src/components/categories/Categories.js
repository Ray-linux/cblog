import "./categories.css";
import { MdAddCircle } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

export default function Categories({isAuthenticated}) {
  const cate = [
    { id: 1, type: "Code" },
    { id: 2, type: "Music" },
    { id: 3, type: "Movies" },
    { id: 4, type: "Sports" },
    { id: 5, type: "Tech" },
  ];

  const [SearchParams] = useSearchParams();
  const category = SearchParams.get("category");
  return (
    <>
      <div className="categories-container">
        <span>Categories</span>
        <div className="categories">
          <Link to={`/`}>
            <button>All</button>
          </Link>
          {cate.map((category) => {
            return (
              <Link key={category.id} to={`/?category=${category.type}`}>
                <button key={category.id}>{category.type}</button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={isAuthenticated ? "create": "hide"}>
        <Link to={`/create?category=${category || ""}`}>
          <button>
            <MdAddCircle className="icon" />
            Create Blog
          </button>
        </Link>
      </div>
    </>
  );
}
