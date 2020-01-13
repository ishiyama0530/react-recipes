const develop = process.env.REACT_APP_MODE === 'development'
const newApiKey = process.env.REACT_APP_NEWS_API_KEY
const githubAccessToken = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

export default { develop, newApiKey, githubAccessToken }
