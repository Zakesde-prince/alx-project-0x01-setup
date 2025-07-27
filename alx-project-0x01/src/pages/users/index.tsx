import Header from "@/components/layout/Header";

const UsersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-3xl font-bold">All Users</h1>
      </main>
    </div>
  );
};

export default UsersPage;
