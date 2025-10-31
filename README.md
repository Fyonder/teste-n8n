# n8n + Evolution Stack

Projeto completo para rodar:

- n8n (automação)
- Evolution API (WhatsApp)
- Servidor Node.js para integração

## Deploy no Render

1. Suba este repositório no GitHub
2. No Render.com → “New → Web Service”
3. Conecte o repositório
4. Build Command: `docker-compose build`
5. Start Command: `docker-compose up`
6. Variáveis de ambiente no Render:
   - N8N_BASIC_AUTH_USER=admin
   - N8N_BASIC_AUTH_PASSWORD=admin123
   - PORT=3000
   - EVOLUTION_URL=http://evolution:8080
   - N8N_URL=http://n8n:5678
7. Acesse:
   - Servidor: `https://seuapp.onrender.com`
   - n8n: `https://seuapp.onrender.com:5678`
 