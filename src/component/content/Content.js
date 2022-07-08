import React from 'react';
import './content.scss';
import './content2.scss';
import ContentControl from './ContentControl';

/* Section 레이아웃에서 Content */
function Content() {
    return (
    <div className='content_start'>
        <ContentControl></ContentControl>
    </div>
    );
}

export default Content;