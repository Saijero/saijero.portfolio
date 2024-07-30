import React, { useState } from 'react';
import { blog_post_content } from '../data/post_one';
import { CustomSelect } from '../../../../components/CustomSelect';

const PostOne = () => {
    const [sortedBlogPostContent, setSortedBlogPostContent] = useState(blog_post_content);

    function handleSortByDate(sortedBy) {
        if (sortedBy === 'ascending') {
            const sortedContent = [...blog_post_content];
            sortedContent.sort((a, b) => new Date(a.created) - new Date(b.created));
            setSortedBlogPostContent(sortedContent);
        } else if (sortedBy === 'descending') {
            const sortedContent = [...blog_post_content];
            sortedContent.sort((a, b) => new Date(b.created) - new Date(a.created));
            setSortedBlogPostContent(sortedContent);
        }
    }

    return (
        <React.Fragment>
            <div id='post-content'>
                <div className="wp-main-wrap">
                    <div className='wp-blog-post'>
                        <div className="wp-wrap-blog">
                            <h1 className='wp-blog-title'>Post</h1>
                        </div>
                        <div className="wp-wrap-sort-date">
                            <span className='wp-select-sort'>Sort by &#58; </span>
                            <CustomSelect
                                id='wp-selection'
                                className='wp-sorted-selection'
                                onChange={(e) => handleSortByDate(e.target.value)}
                            >
                                <option value='ascending'>New date</option>
                                <option value='descending'>Old date</option>
                            </CustomSelect>
                        </div>
                    </div>
                    <div className='wrap-content-blog-post'>
                        {sortedBlogPostContent.map(({ header_title, parag, date_posted }, index) => (
                            <React.Fragment key={index}>
                                <div className='wp-content-wrap'>
                                    <div className="wp-title-wrap">
                                        <h2 className='wp-title'>{header_title}</h2>
                                    </div>
                                    <div className="wp-parag-wrap">
                                        <div className="wrap-text">
                                            <p className="wp-parag">{parag}</p>
                                        </div>
                                        <div className="wrap-date-time">
                                            <small className='wp-data-time'>
                                                <span>Date posted &#58; </span>
                                                <span>{date_posted}</span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PostOne;
