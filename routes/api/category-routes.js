const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    Category.findAll({
      include: [
        { model: Product }
      ]
    })
    .then((data) => {
      res.json(data)
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    Category.findByPk(req.params.id, {
      include: [
        {model: Product}
      ]
    })
    .then((data) => {
      res.json(data)
    })
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create({
      ...req.body
    })
    .then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
