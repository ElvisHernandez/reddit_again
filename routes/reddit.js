const { Router } = require('express')
const router = Router()
const axios = require('axios')

// ************************************************************************* //
// Look up a subreddit
// ************************************************************************* //

router.get('/api/sub', async (req, res, next) => {
  const subReddit = req.query.subReddit

  const url = `https://www.reddit.com/r/${subReddit}.json`

  try {
    const { data } = await axios.get(url)
		const redditArray = []

    const response = data.data.children
		
    response.map(reddit => {
      redditArray.push({
        title: reddit.data.title,
        thumbnail: reddit.data.thumbnail,
        upvotes: reddit.data.ups,
        image: reddit.data.url,
        author: reddit.data.author
      })
    })

    res.json({ success: true, redditArray })
  } catch (e) {
    res.json({ success: false, error: e.toString() })
  }
})

// ************************************************************************* //
// Look up a reddit user
// ************************************************************************* //
router.get('/api/user', async (req, res, next) => {
    const user = req.query.user
    try {
      const userArray = []
      const url = `https://www.reddit.com/u/${user}.json`
  
      const { data } = await axios.get(url)
  
      const response = data.data.children
  
      response.map(user => {
        userArray.push({
          title: user.data.link_title,
          url: user.data.link_url,
          body: user.data.body,
          subReddit: user.data.subreddit
        })
      })
  
      res.json(userArray)
    } catch (e) {
      res.json(e.toString())
    }
  })

module.exports = router