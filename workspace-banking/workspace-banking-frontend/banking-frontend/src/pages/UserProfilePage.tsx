import React, { useState } from "react";
import UserProfile from "../components/UserProfile";

const UserProfilePage: React.FC = () => {
  const [userName, setUserName] = useState("John Doe");
  const [userEmail, setUserEmail] = useState("john.doe@example.com");

  const handleUpdate = (updatedName: string, updatedEmail: string) => {
    setUserName(updatedName);
    setUserEmail(updatedEmail);
  };

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <UserProfile name={userName} email={userEmail} onUpdate={handleUpdate} />
    </div>
  );
};

export default UserProfilePage;
