const BottomOutletBtn = ({ children }) => {
    return (
        <div className="text-center mt-4">
            <button className="btn btn-outline border-0 bg-slate-100 border-b-4 border-green-400">
                {children}
            </button>
        </div>
    );
};

export default BottomOutletBtn;