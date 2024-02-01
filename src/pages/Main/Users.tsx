import { useState } from "react";
import UsersTable from "../../components/Users/UsersTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";

const Users = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <>
      <SearchField
        placeholder="Search by name/email/phone number"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="rounded-md p-4  bg-white">
        <HeadingText>User List</HeadingText>
        <div className="mt-5">
          <UsersTable />
        </div>
      </div>
    </>
  );
};

export default Users;
