const BottomOutletBtn = ({ children }) => {
    return (
        <div className="text-center">
            <button className="btn btn-outline border-0 bg-slate-100 border-b-4 border-green-400">
                {children}
            </button>
        </div>
    );
};

export default BottomOutletBtn;