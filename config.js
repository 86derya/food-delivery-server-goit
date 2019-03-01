const dbUser = "86derya";
const dbPassword = "%40e8srxwkp";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb://86derya:${dbPassword}@cluster0-shard-00-00-fuhq2.azure.mongodb.net:27017,cluster0-shard-00-01-fuhq2.azure.mongodb.net:27017,cluster0-shard-00-02-fuhq2.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
};

module.exports = config;
