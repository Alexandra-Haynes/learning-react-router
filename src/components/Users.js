import {Outlet, useSearchParams} from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <div>
        <button onClick={()=> setSearchParams({filter:'active'})}> Active Users</button>
        <button onClick={()=> setSearchParams({})}> Reset Filter</button>
      </div>
      {showActiveUsers ? <p> Showing active users...</p> : <p> Showing all users...</p>}
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      <Outlet />
      
    </div>
  );
};
