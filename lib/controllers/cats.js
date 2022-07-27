const { Router } = require('express');
const Cat = require('../models/Cat');

//const router = Router();

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getbyId(req.params.id);
    res.json(cat);
    // const cat = cats.find((cat) => cat.id === req.params.id);
  })

  .get('/', async (req, res) =>  {
    console.log(cats);
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id:cat.id, name: cat.name }));
    console.log(ids);
    res.json(ids);
  });

// module.exports = router;
