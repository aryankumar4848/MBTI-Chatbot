const REQUIRED_ENV_VARS = ['MONGO_URI', 'JWT_SECRET', 'JWT_EXPIRES_IN'];

function validateEnv() {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

module.exports = validateEnv;
