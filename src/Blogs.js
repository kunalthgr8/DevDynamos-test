import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="head">
                <div className="head-left">
                    <h1 className="heading">Blogs</h1>
                    <div className="underline heading"></div>
                </div>
                <div className="btn head-right">
                    More Blogs
                </div>
            </div>
            <div className="blog-container">
                <hr />
                <div className="blog-box">
                    <div className="blog-date">
                        7 August, 2021
                    </div>
                    <div className="blog-content">
                        <div className="blog-heading">
                            New Features in v1
                        </div>
                        <div className="blog-title">
                            NEXT-JS TAILWIND GUIDE
                        </div>
                        <div className="blog-desc">
                            An overview of the new features released in v1 - code block copy, multiple authors, frontmattter layour and more...
                        </div>
                        <div className="btn btn-small">
                            Read more <BsFillArrowRightCircleFill id='BsFillArrowRightCircleFill'/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="blog-box">
                    <div className="blog-date">
                        12 May, 2021
                    </div>
                    <div className="blog-content">
                        <div className="blog-heading">
                            Introducing Multi-part Posts with Nested Routing
                        </div>
                        <div className="blog-title">
                            MULTI-AUTHOR NEXT-JS FEATURE
                        </div>
                        <div className="blog-desc">
                            The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!
                        </div>
                        <div className="btn btn-small">
                            Read more <BsFillArrowRightCircleFill id='BsFillArrowRightCircleFill'/>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Blogs;