import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const QUERY = graphql`
    query {
        posts: allMarkdownRemark(
            sort: {fields: frontmatter___date}
            filter: {frontmatter: {status: {eq: "Ok"}}}
        ) {
            edges {
                node {
                    frontmatter {
                        date
                        slug
                        title
                        description
                    },
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
    }
`

const Home = () => {
    const { posts } = useStaticQuery(QUERY)
    return (
        <>
            <h1>Blog</h1>
            {posts.edges.map(post => {
                return (
                    <article>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.description}</p>
                        <Link to={`/blog/${post.node.parent.name}`}>Saiba mais...</Link>
                    </article>
                )
            })}
            <p>{JSON.stringify(posts, null, 2)}</p>
        </>
    )
}
export default Home