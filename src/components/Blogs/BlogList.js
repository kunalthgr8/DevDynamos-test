import './Blog.css'

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <div className="left-blog-data">{blog.date}
                    <hr className='left-hr'></hr></div>
                    <div className="right-blog-data">
                        <h2><a href={ blog.anchor }>{blog.blogTitle}</a></h2>
                        <p className='tags'>{blog.tags}</p>
                        <p className='blogg-desc' >{blog.blogBody}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;