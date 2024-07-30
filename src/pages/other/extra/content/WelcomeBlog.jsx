import React from 'react'
import { img_blog_post_welcome_1, img_blog_post_welcome_2, img_blog_post_welcome_3 } from '../data/img_files'
import { CarouselComponent } from './Banner';

export default function WelcomeBlog() {

    const blogData = [
        {
            images: img_blog_post_welcome_1,
            title: 'Best place to visit in Cebu',
        },
        {
            images: img_blog_post_welcome_2,
            title: 'Best moment in life',
        },
        {
            images: img_blog_post_welcome_3,
            title: 'Travel Adventure',
        },
    ];

    return (
        <div id="welcom-blog-post">
            <div className="wp-main-wrap">
                <div className="wrap-content">
                    <div className="wp-name-blog">
                        <h2 className="wp-blog-post-text">Welcome to the blog post</h2>
                    </div>
                    <div className="wp-blog-post">
                        <div className="wrap-display-slide-wrap">
                            {blogData.map(({ title, images }, index) => (
                                <CarouselComponent
                                    key={index}
                                    images={images}
                                    titleBlog={title}
                                    autoSlideInterval={3000}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

