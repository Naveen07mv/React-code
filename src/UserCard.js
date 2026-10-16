function UserCard({ user1 }) {
  return (
    <div>
      <h3>{user1.name}</h3>
      <p>Email: {user1.email}</p>
      <p>City: {user1.address.city}</p>
    </div>
  );
}

export default UserCard;