import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-center bg-blue-300 w-full p-6">
      <div className="" to="/">
        ecommerce
      </div>

      {/* <button onClick={navigateHandler} className={style.creatorDogBtn}>
            Dog Creator
        </button> */}

      {/* {location.pathname === "/home" && <SearchBar />} */}
    </div>
  );
};
