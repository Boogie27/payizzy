

import TitleHeader from './TitleHeader'
import BlogBanner from './BlogBanner'
import FeaturedPost from './FeaturedPost'




const Blog = ({featuredPost}) => {
    return (
        <div className="blog-container">
            <TitleHeader/>
            <BlogBanner/>
            <FeaturedPost featuredPost={featuredPost}/>
        </div>
    )
}


export default Blog






