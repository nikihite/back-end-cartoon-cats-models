const { Router } = require('express');
const Cat = require('../models/Cat');

//const router = Router();

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getById(req.params.id);
    res.json(cat);
    // const cat = cats.find((cat) => cat.id === req.params.id);
  })

  .get('/', async (req, res) =>  {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id:cat.id, name: cat.name }));
    res.json(ids);
  });

// module.exports = router;
