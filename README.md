<div align="center">
  <h1>🚀 Yash's Portfolio</h1>

  <p>
    <img src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YD-S/c82961d43d81aaa4fa99dcf5082fecbb/raw/deployment-status.json" alt="Deployment Status" />
    <img src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YD-S/c82961d43d81aaa4fa99dcf5082fecbb/raw/version-badge.json" alt="Portfolio Image Version" />
    <img src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YD-S/c82961d43d81aaa4fa99dcf5082fecbb/raw/custom-status.json" alt="Portfolio Status" />
  </p>
</div>

---

Welcome to my personal portfolio project — a modern, containerized application that showcases my skills, projects, and experience. This project is built with performance, accessibility, and clean architecture in mind, using a professional-grade CI/CD pipeline for automated Docker builds and GitOps deployments.

> **Contact:** [LinkedIn](https://www.linkedin.com/in/yashdev-singh/) • [Email](mailto:seehra.a@yahoo.com)

---

## 🛠️ Tech Stack

Here are the key technologies powering this portfolio:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitOps](https://img.shields.io/badge/GitOps-0066CC?style=for-the-badge&logo=argo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white)

---

## 📦 Features

- **React** front-end with Tailwind CSS for a modern, responsive UI
- **Dockerized** for consistent builds and reproducible deployments
- **CI/CD** with GitHub Actions for automated testing, building, and pushing images
- **GitOps** workflow to deploy container changes to Kubernetes declaratively
- **Status Badges** for live build/deploy status and version tracking
- Clean, maintainable, and scalable architecture running on a k3s cluster

---

## 🚀 Deployment

This portfolio uses a fully automated GitHub Actions pipeline, triggered on pull request merges to the `main` branch, which then:

1. Builds and pushes a Docker image to Docker Hub
2. Updates the GitOps repository with the new image tag
3. Refreshes status badges using a Gist integration

If you wish to deploy manually, you can use the GitHub Actions **`workflow_dispatch`** trigger with the `force_deploy` option.

---

## 📄 License

This portfolio is open-sourced under the MIT license. See [LICENSE](LICENSE) for details.

---

> **_Built with ❤️ and a passion for clean, reliable infrastructure._**

