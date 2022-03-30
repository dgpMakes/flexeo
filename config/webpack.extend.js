module.exports = {
    dev: (config) => {
      //override webpack configuration
      config.resolve.fallback = {"path": require.resolve("path-browserify"),
                                "crypto": false,
                               "buffer": false,
                               "stream": false};
      return config;
    },
    prod: (config) => {
      //override webpack configuration
      config.resolve.fallback = {"path": require.resolve("path-browserify"),
                              "crypto": false,
                              "buffer": false,
                              "stream": false};       
      return config;
    }
}