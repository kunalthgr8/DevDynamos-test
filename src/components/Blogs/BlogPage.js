import useFetch from "../../useFetch";
import './Blog.css';
import BlogList from "./BlogList";

const BlogPage = () => {

    const { data: blogs, isPending, error } = useFetch('https://json-server-openlake.vercel.app/blogs');

    return (
        <div className="blogs" id="Blog">
            <div className="head">
                <div className='Blog-heading'>
                    <a href="https://openlake-iitbh-blog.vercel.app" target="_blank">Blogs</a>
                    
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