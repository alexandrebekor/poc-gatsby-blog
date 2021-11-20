module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: __dirname + `/src/posts`
            }
        },
        `gatsby-transformer-remark`
    ]
}