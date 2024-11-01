import React, { useState } from "react";

interface UserProfileProps {
  name: string;
  email: string;
  onUpdate: (updatedName: string, updatedEmail: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, onUpdate }) => {
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editName, editEmail);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold">User Profile</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </form>
  );
};

export default UserProfile;
