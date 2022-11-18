import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
    <div className='product-block-wrapper'>
        <ContentLoader
            className='product-block'
            speed={2}
            width={280}
            height={465}
            viewBox='0 0 280 465'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
            {...props}>
            <circle cx='140' cy='120' r='110' />
            <rect x='0' y='260' rx='10' ry='10' width='280' height='30' />
            <rect x='0' y='315' rx='10' ry='10' width='280' height='88' />
            <rect x='130' y='415' rx='30' ry='30' width='150' height='50' />
            <rect x='0' y='415' rx='10' ry='10' width='85' height='50' />
        </ContentLoader>
    </div>
)

export default Skeleton
