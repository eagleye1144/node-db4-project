const router = require('express').Router()
const Recipe = require('./recipes-model')


router.get('/reipe_id', (req, res, next) => {
    Recipe.getRecipesById(req.params.recipe_id)
        .then((resource) => {
            res.json(resource)
        })
        .catch(next())
})




router.use((err, req, res, next) => {

    res.status(500).json({
        customMessage: 'blah',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router