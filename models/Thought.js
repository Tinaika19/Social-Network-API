const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');

// Reaction schema (subdocument)
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280 // Max length of 280 characters
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A') // Format the timestamp
  }
}, {
  toJSON: { getters: true },
  id: false
});

// Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280 // Text between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A') // Format the timestamp
  },
  username: {
    type: String,
    required: true // User that created the thought
  },
  reactions: [reactionSchema] // Array of nested reaction documents
}, {
  toJSON: { virtuals: true, getters: true },
  id: false
});

// Virtual to retrieve reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
