import useFetch from "../../useFetch";
import './Blog.css';
import BlogList from "./BlogList";

const BlogPage = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="blogs">
            <div className="head">
                <div className='Blog-heading'>
                    Blogs
                    <hr className='Blog-hr'></hr>
                </div>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}></BlogList>}
        </div>
    );
}

export default BlogPage;