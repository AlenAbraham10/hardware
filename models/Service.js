const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['repair', 'maintenance', 'upgrade', 'diagnostic']
  },
  deviceType: {
    type: String,
    required: true,
    enum: ['computer', 'mobile', 'both']
  },
  estimatedTime: {
    type: String,
    required: true
  },
  warranty: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema); 