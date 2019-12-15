module.exports = {
    devServer: {
        proxy: {
            '^/eventsimages': {
                target: 'http://localhost:8080'
            }
        }
    },
    "outputDir": "../server/build/client/"
};