import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-600 mb-2">📞 {phone}</p>
      <p className="text-blue-600 mb-2 underline">🌐 {website}</p>

      <div className="text-sm text-gray-700 mt-4">
        <p><strong>🏢 Company:</strong> {company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
        <p className="mt-2"><strong>📍 Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
