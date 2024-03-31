const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  branchs: [{ type: mongoose.Schema.ObjectId, ref: 'Branch' }],
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true },
  surname: { type: String },
  photo: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'read_only',
    enum: ['owner', 'admin', 'manager', 'employee', 'create_only', 'read_only'],
  },
});

module.exports = mongoose.model('Admin', adminSchema);
