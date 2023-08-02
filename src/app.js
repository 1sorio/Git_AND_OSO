import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser()); // para  y acceder de forma mas  a las cookies
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;