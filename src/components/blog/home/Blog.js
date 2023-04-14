

import TitleHeader from './TitleHeader'
import BlogBanner from './BlogBanner'
import FeaturedPost from './FeaturedPost'
import TrendingBlog from './TrendingBlog'





const Blog = ({featuredPost}) => {
    return (
        <div className="blog-container">
            <TitleHeader/>
            <BlogBanner/>
            <FeaturedPost featuredPost={featuredPost}/>
            <TrendingBlog/>
        </div>
    )
}


export default Blog






