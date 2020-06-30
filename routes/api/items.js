const router = require('express').Router();

//Item Model
const Item = require('../../models/Item');

// @route GET /api/items
// @desc Get all items
// @access public
router.get('/', async (req, res) => {
  try{
  const items = await Item.find().sort({ date: -1 })
  res.json(items)
  } catch(err){
    console.log(err)
  }
})

// @route POST /api/items
// @desc Create an item
// @access public
router.post('/', async (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  try{
    const item = await newItem.save();
    res.json(item)
  } catch(err){
    console.log(err)
  }
})

// @route DELETE /api/items/:id
// @desc Delete an item
// @access public
router.delete('/:id', async (req, res) => {
  try{
    const item = await Item.findById(req.params.id);
    const result = await item.remove();
    res.json({success: true})
  }catch(err){
    res.status(404).json({success: false})
  }
  
})

module.exports = router;