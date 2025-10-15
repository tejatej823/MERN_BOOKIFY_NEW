import AdminLayout from './layouts/adminLayout';
import DashBoard from './admin/pages/adminDashBoard';
import AdminBookListPage from './admin/pages/adminBookList';
import AdminUserListPage from './admin/pages/adminUserList'
import {Route,Routes} from 'react-router-dom';
function App() {
  return <>
  <Routes>
    <Route path="/" element={<AdminLayout/>}>
      <Route index element={<DashBoard/>}></Route>
      <Route path="products" element={<AdminBookListPage/>}></Route>
      <Route path="users" element={<AdminUserListPage/>}></Route>
    </Route>
  </Routes>
  </>
}

export default App;
