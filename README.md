 🍰 Dessert Utopia | React + TypeScript Static Website with Docker, AWS, and Custom Domain

Welcome to **Dessert Utopia**, a modern static website built using **React** and **TypeScript**, containerized with **Docker**, deployed on **AWS EC2**, and accessible via a custom domain using **Route 53** with **NGINX** as a reverse proxy.



 🔧 Tech Stack
- ⚛️ React + TypeScript (Frontend)
- 🐳 Docker (Containerization)
- 🖥️ AWS EC2 (Ubuntu Linux Instance)
- 🌐 AWS Route 53 (DNS & Domain)
- 🚦 NGINX (Reverse Proxy & Web Server)
- 💻 GitHub (Code Hosting & Version Control)



 🌐 Live Project
🔗 Visit the site: [https://premify.sbs](https://premify.sbs)



 🚀 Features
- ⚡ Fast, static and responsive UI
- 📦 Dockerized frontend app for consistency across environments
- ☁️ Hosted on AWS EC2 for scalable deployment
- 🌍 Domain configured via Route 53
- 🔁 NGINX reverse proxy with Docker for production-grade routing
- 🔒 HTTPS SSL ready (via Certbot - Let's Encrypt)



 🐳 Docker Setup

```bash
# Step 1: Build the Docker image
docker build -t dessert-utopia .

# Step 2: Run the Docker container
docker run -d -p 3000:3000 --name dessert-utopia-container dessert-utopia ```

🔀 NGINX Configuration (Reverse Proxy)

server {
    listen 80;
    server_name premify.sbs;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

💡 Author
Prem
🔗 LinkedIn
🐙 GitHub















