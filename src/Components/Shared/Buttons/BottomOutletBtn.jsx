import { Link } from "react-router-dom";

const BottomOutletBtn = ({ children, to }) => {
    return (
        <div className="text-center mt-4">
            <Link to={to} className="btn btn-outline border-0 bg-slate-100 border-b-4 border-green-400">
                {children}
            </Link>
        </div>
    );
};

export default BottomOutletBtn;