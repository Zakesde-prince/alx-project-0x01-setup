import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersProps {
  posts: UserData[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;
