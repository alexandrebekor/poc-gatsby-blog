const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const allPosts = await graphql(`
            query {
        posts: allMarkdownRemark {
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
    }`)

    allPosts.data.posts.edges.forEach(post => {
        console.log(post)
        createPage({
            path: `/blog/${post.node.parent.name}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                id: post.node.parent.name
            }
        })
    })
}