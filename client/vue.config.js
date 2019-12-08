module.exports = {
    devServer: {
        proxy: {
            '^/eventsimages': {
                target: 'http://localhost:8080'
            }
        }
    }
};