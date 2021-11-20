import { graphql } from 'gatsby'
import React from 'react'

const Post = ({ data }) => {
    return (
        <div>
            <h2>{data.markdownRemark.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
    )
}

export default Post

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(parent: {id: {eq: $id}}){
            frontmatter {
                title
            },
            html
        }
    }
`