import AdminNavbar from '../admin/components/adminNavbar';
import {Outlet} from 'react-router-dom'
const AdminLayout=()=>{
    return <>
    <AdminNavbar/>
    <Outlet/>
    </>
}
export default AdminLayout;
