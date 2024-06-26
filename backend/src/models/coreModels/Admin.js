const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true,},
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
    required: true,
    unique: true,
    default: 'owner',
    enum: ['owner', 'admin', 'manager', 'employee', 'create_only', 'read_only'],
  },
});
adminSchema.index({ role: 1 }, { unique: true });
module.exports = mongoose.model('Admin', adminSchema);
