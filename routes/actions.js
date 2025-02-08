import express from 'express';
import Action from '../models/Action.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const action = new Action({ ...req.body, userId: req.user._id });
    await action.save();
    res.status(201).json(action);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const actions = await Action.find({ userId: req.user._id });
    res.json(actions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const action = await Action.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(action);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Action.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ação removida' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;