'use client'
const Template = ({ children }) => {
    return (
        <div>
            <div className="text-center mt-10">
                <button className="btn bg-white text-black rounded-lg p-4 e-50px">uWu</button>
            </div>
            {children}
        </div>
    );
};

export default Template;