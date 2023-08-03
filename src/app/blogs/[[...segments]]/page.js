

const SingleBlog = ({ params }) => {
    console.log(params);
    const [year, id] = params.segments || [];
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            single blog {year || new Date().getFullYear()} {id}
        </div>
    );
};

export default SingleBlog;