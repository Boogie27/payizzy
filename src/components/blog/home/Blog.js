

import TitleHeader from './TitleHeader'
import BlogBanner from './BlogBanner'
import FeaturedPost from './FeaturedPost'
import TrendingBlog from './TrendingBlog'
import HowTo from './HowTo'







const Blog = ({featuredPost}) => {
    return (
        <div className="blog-container">
            {/* <TitleHeader/> */}
            <BlogBanner/>
            <FeaturedPost featuredPost={featuredPost}/>
            <TrendingBlog/>
            <HowTo/>
        </div>
    )
}


export default Blog






