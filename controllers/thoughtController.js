const { Thought, User } = require('../models');

// Get all thoughts
module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving thoughts', error: err.message });
    }
  },

  // Get a single thought by ID
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving thought', error: err.message });
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Error creating thought', error: err.message });
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID to update' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Error updating thought', error: err.message });
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID to delete' });
      }

      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting thought', error: err.message });
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID to add a reaction' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Error adding reaction', error: err.message });
    }
  },

  // Remove a reaction by ID
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID to remove a reaction' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Error removing reaction', error: err.message });
    }
  }
};
