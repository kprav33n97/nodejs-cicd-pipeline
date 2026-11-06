# Node.js CI/CD Pipeline

A Node.js REST API project demonstrating a practical DevOps workflow using Git, GitHub Actions, Docker, Docker Hub, and AWS EC2.

## Project Overview

This project demonstrates how application code moves from development to automated testing, containerization, image publishing, and deployment.

## Tech Stack

- Node.js
- Express.js
- Jest
- Supertest
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub
- AWS EC2

## Application Endpoints

| Endpoint | Description |
|---|---|
| `/` | Application information |
| `/health` | Application health check |
| `/api/status` | Application status |

## CI/CD Workflow

1. Developer pushes code to GitHub.
2. GitHub Actions checks out the repository.
3. Dependencies are installed.
4. Automated tests are executed.
5. Docker image is built.
6. Docker image is pushed to Docker Hub.
7. Application is deployed to AWS EC2.

## Project Structure

```text
nodejs-cicd-pipeline/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── app.js
├── server.js
├── app.test.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Run Locally

Install dependencies:

```bash
npm ci
```

Start the application:

```bash
npm start
```

Run tests:

```bash
npm test
```

Application:

```text
http://localhost:3000
```

Health check:

```text
http://localhost:3000/health
```

## Docker

Build the image:

```bash
docker build -t nodejs-cicd-pipeline .
```

Run the container:

```bash
docker run -d --name nodejs-cicd-app -p 3000:3000 nodejs-cicd-pipeline
```

## CI/CD

GitHub Actions automates application testing and Docker image building.

The pipeline will be extended to publish images to Docker Hub and deploy to AWS EC2.

## Project Status

Development in progress.