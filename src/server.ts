import express, {Request, Response} from "express";
import { runInNewContext } from "node:vm";
import { Tarefa } from "./models/tarefa";
import tarefasRoutes from "./routes/tarefas";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", tarefasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost: ${PORT}`)
});