import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import authRoutes from './routes/auth.js';
import actionsRoutes from './routes/actions.js';
import { verifyToken } from './middleware/auth.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB conectado!'))
.catch(err => console.log('❌ Erro ao conectar:', err));

app.use('/api/auth', authRoutes);
app.use('/api/actions', verifyToken, actionsRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));