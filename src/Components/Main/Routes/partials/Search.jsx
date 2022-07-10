
const Search = ({inner}) => {
  return (
    <>
      {inner ? (
        <>
          <div className="search_div">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="search"
                name="search"
                id=""
                placeholder="Search Twitter"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="search">
            <i className="bi bi-search"></i>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search Twitter"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Search