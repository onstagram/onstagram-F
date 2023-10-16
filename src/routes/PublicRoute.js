import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { CheckToken } from '../auth/CheckTokenl';
import LoadingModal from '../components/Login/LoadingModal';


export default function PublicRoute({ children }) {
    const location = useLocation();
    const { isAuth } = CheckToken(location.key);

    if (isAuth === 'Success') {
        return (
            <Navigate to="/" state={{from: location}}/>
        )
    } else if (isAuth==='Loading') {
        return <LoadingModal />
    }

    return children
}