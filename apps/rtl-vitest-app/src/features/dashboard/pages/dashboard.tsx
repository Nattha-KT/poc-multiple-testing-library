// src/pages/dashboard.tsx
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../shared"
import { logout, RootState } from "../../auth/stores"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>Status: {user?.status}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Dashboard
