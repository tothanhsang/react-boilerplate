import { Link, Outlet, useSearchParams } from "react-router-dom";
import { User } from "../App";

const Users = ({ users }: { users: User[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (event) => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {users
          .filter((user) =>
            user.fullName
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          )
          .map((user) => (
            <li key={`${user.id}`}>
              <Link to={`/users/${user.id}`}>{user.fullName}</Link>
            </li>
          ))}
      </ul>

      <Outlet />
    </main>
  );
};

export default Users;
