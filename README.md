# 🌐 Personal Portfolio Website — DevOps Enabled Deployment

## 🔗 Live Website
https://urwahshafiq.site

## 📦 Repository
https://github.com/urwahsiddiqui-148/urwah.site.project

# 📌 Project Overview

This project demonstrates the end-to-end development and DevOps deployment of a fully responsive personal portfolio website.

## Goals of this project:
- Build a modern static website using core web technologies
- Apply real DevOps CI/CD practices
- Deploy the application on cloud infrastructure
- Automate build and deployment using GitHub Actions
- Configure a custom professional domain with secure HTTPS

This project simulates real-world DevOps workflows used in production environments.

# 🛠️ Tech Stack & Tools Used

## 🌐 Frontend
- **HTML5** – Semantic page structure
- **CSS3** – Responsive styling & layout
- **JavaScript (Vanilla)** – Interactivity and dynamic behavior

## ☁️ Cloud & Hosting
- **Microsoft Azure**
- **Azure Static Web Apps**
- Resource Groups
- Managed SSL (HTTPS)

## 🔁 CI/CD & DevOps
- GitHub
- GitHub Actions
- YAML-based CI/CD workflow

## 🌍 Domain & DNS
- Hostinger
- Custom domain configuration
- DNS validation & token-based verification

# 🧠 Key Concepts Applied

- **Static Web Hosting**
- **Continuous Integration (CI)**
- **Continuous Deployment (CD)**
- **Infrastructure-managed deployments**
- **Cloud-native hosting**
- **Secure domain binding (HTTPS)**
- **Source-controlled automation**
- **Environment-agnostic deployment**

# 🗂️ Project Architecture

urwah.site.project/

| |
|---|
| index.html |
| css/ |
| &nbsp;&nbsp; └── style.css |
| js/ |
| &nbsp;&nbsp; └── script.js |
| .github/ |
| &nbsp;&nbsp; └── workflows/ |
| &nbsp;&nbsp;&nbsp;&nbsp; └── azure-static-web-apps.yml |
| README.md |

# 🚀 Deployment Workflow (Step-by-Step)

## 1️⃣ Local Development

- Website developed locally using VS Code
- Code tested in browser

## 2️⃣ Source Control

- Git initialized locally
- Code pushed to GitHub repository
  
```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

# 3️⃣ Azure Resource Setup

- Created a Resource Group in Azure
- Provisioned Azure Static Web App
- Connected GitHub repository to Azure

# 4️⃣ CI/CD Automation (GitHub Actions)

Azure automatically generated a workflow file:

`.github/workflows/azure-static-web-apps.yml`

This pipeline:
- Triggers on every push to `main`
- Pulls latest code
- Builds the application
- Deploys it to Azure Static Web Apps

✅ No manual deployment required

# 5️⃣ Custom Domain Configuration

- Purchased domain: `urwahshafiq.site`
- Added custom domain in Azure Static Web App
- Generated verification token
- Added token as a GitHub Secret
- Azure validated domain ownership
- HTTPS enabled automatically

# 🔄 CI/CD Strategy Explained

| Stage | Description |
| --- | --- |
| Trigger | Push to main branch |
| Build | Static site validation |
| Test | Basic deployment checks |
| Deploy | Automated upload to Azure |
| Live | Changes reflected instantly |

This is the same CI/CD model used in production DevOps teams.

## 📈 Final Outcome

- ✔ Live, secure, production-ready website
- ✔ Automated CI/CD pipeline
- ✔ Custom professional domain
- ✔ Zero-downtime deployments
- ✔ Cloud-native hosting
- ✔ Real DevOps workflow experience

## 🎯 Real-World Relevance

This project reflects how:

- Frontend teams deliver static applications
- DevOps engineers automate deployments
- Cloud services reduce infrastructure overhead
- CI/CD pipelines improve release velocity
- DNS & SSL are managed professionally

The same workflow can scale to:

- React / Angular / Vue apps
- Micro-frontends
 - API-backed static apps
 - Enterprise static portals 
 
## 📚 What I Learned 
 
- Practical CI/CD implementation 
 - Azure Static Web Apps architecture 
 - GitHub Actions workflows 
 - Domain & DNS configuration 
 - Cloud deployment best practices 
 - DevOps mindset for frontend projects 
 
## 🔮 Future Enhancements 
  
- Add staging environment  
 - Enable PR preview deployments  
 - Add monitoring & logs  
 - Migrate frontend to React  
 - Add backend APIs  
  
## 👤 Author  
uwah Shafiq Siddiqui  
devops • infrastructure • automation  [Website](https://urwahshafiq.site) [GitHub](https://github.com/urwahsiddiqui-148)
