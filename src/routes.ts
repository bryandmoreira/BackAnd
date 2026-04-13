import { Router } from "express"
import { deflate } from "node:zlib"

const routes = Router()

routes.get("/", (request, response) =>
     response.status(200).json("Servidor rodando"),
)

export default routes