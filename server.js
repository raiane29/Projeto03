import {createServer} from 'node:http';
import fs from "node:fs"
import { request } from 'node:http';

const PORT = 3333

const server = createServer((request, response) => {
    const {url, method} = request

    if (method === 'GET' && url === '/receitas') {
        
    }else if(method === 'POST' && url === '/receitas') {
        
    }else if(method === 'GET' && url.startWith('/receitas/')) {
        
    }else if(method === 'PUT' && url.startWith('/receitas/')) {
        
    }else if(method === 'DELETE' && url.startWith('/receitas/')) {
        
    }else if(method === 'GET' && url.startWith('/categorias/')) {
        
    }else if(method === 'GET' && url.startWith('//busca/')) {
        
    }else if(method === 'GET' && url.startWith('/ingredientes/')) {
        
    }else{
        response.writeHead(404, {'Content-Type' : 'application/json'})
        response.end(JSON.stringify({message: 'Página não encontrada'}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on port http://locallhost:${PORT}`);
})