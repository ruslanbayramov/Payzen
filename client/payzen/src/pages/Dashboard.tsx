import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((store: any) => store.user);

  return <div>Welcome to Dashboard, dear {user.name}</div>;
}

export default Dashboard;
