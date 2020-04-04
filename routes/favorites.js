const { Router } = require('express')
const router = Router()
const models = require('../db/models')

// ************************************************************************* //
// Create a new favorite
// ************************************************************************* //

router.post('/api/favorites', (req, res, next) => {
  // Create a new favorite
  const { title, thumbnail, upvotes, image, author } = req.body

  models.Favorite.create({
    title: title,
    thumbnail: thumbnail,
    upvotes: upvotes,
    image: image,
    author: author
  })
    .then(favorite =>
      res.json({ success: true, favorite, message: 'Favorite saved.' })
    )
    .catch(error => {
      res.json({
        success: false,
        error: error.toString()
      })
    })
})

// ************************************************************************* //
// List a specific favorites
// ************************************************************************* //
router.get('/api/favorite', (req, res, next) => {
  const title =  req.query.title

  models.Favorite.findAll({
    where: {
     title
    }
  })
    .then(favorite => {
      res.status(201).json({ success: true, favorite })
    })
    .catch(error => {
      res.json({ success: false, error: error.toString() })
    })
})

// ************************************************************************* //
// List all favorites
// ************************************************************************* //
router.get('/api/favorites', (req, res, next) => {
  

  models.Favorite.findAll()
    .then(favorites => {
      res.status(201).json({ success: true, favorites })
    })
    .catch(error => {
      res.json({ success: false, error: error.toString() })
    })
})

// ************************************************************************* //
// Delete a favorite
// ************************************************************************* //
router.delete('/api/favorite', async (req, res, next) => {
    const { title } = req.body
  
    const confirmedFavorite = await models.Favorite.findAll({
      where: {
        title
      }
    })
  
    if (confirmedFavorite[0]) {
      models.Favorite.destroy({
        where: {
          title
        }
      })
        .then(() => res.json({ success: true, message: 'Favorite Deleted' }))
        .catch(error => {
          res.json({
            success: false,
            error: error.toString()
          })
        })
    } else {
      res.json({ success: false, message: 'Favorite not found.' })
    }
  })
module.exports = router