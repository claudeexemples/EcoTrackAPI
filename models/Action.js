import mongoose from 'mongoose';

const ActionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['Reciclagem', 'Energia', 'Água', 'Mobilidade'], required: true },
  points: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('Action', ActionSchema);