import "../Loader.scss"
export const PageLoader = () => {
    return (
        <div className='absolute left-0 top-0 flex justify-center items-center w-[100vw] h-[100vh]'>
            <span className="loader"></span>
        </div>
    );
};


