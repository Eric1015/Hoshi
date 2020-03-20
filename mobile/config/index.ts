import Constants from 'expo-constants';

const ENV = {
    dev: {
        API_URL: "https://hoshi-app.herokuapp.com/api",
    },
    prod: {
        API_URL: "https://hoshi-app.herokuapp.com/api",
    },
    staging: {
        API_URL: "",
    }
}

function getEnvVars(env = "") {
    if (env === null || env === undefined || env === "") return ENV.dev;
    if (env.indexOf("dev") !== -1) return ENV.dev;
    if (env.indexOf("staging") !== -1) return ENV.staging;
    if (env.indexOf("prod") !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);