# CloudCart 🚀

## Overview

CloudCart is a cloud-native microservices e-commerce platform
demonstrating enterprise DevOps practices using Docker, Kubernetes,
Helm, Prometheus, Grafana, GitHub Actions, and ArgoCD.

## Architecture

-   React Frontend
-   API Gateway
-   User Service
-   Product Service
-   Cart Service
-   Order Service
-   Payment Service
-   Notification Service
-   MongoDB

## Tech Stack

### Frontend

-   React
-   Vite
-   Tailwind CSS
-   React Query
-   React Hook Form

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   JWT
-   Joi

### DevOps

-   Docker
-   Docker Compose
-   Kubernetes
-   Helm
-   NGINX Ingress
-   Prometheus
-   Grafana
-   GitHub Actions
-   ArgoCD
-   Terraform (Planned)
-   Azure AKS (Planned)

## Features

-   JWT Authentication
-   Product Catalog
-   Shopping Cart
-   Order Management
-   Monitoring Dashboards
-   CI/CD Pipeline
-   GitOps Deployment

## Monitoring Dashboards

1.  Kubernetes Cluster Overview
2.  CloudCart Operations Center
3.  CloudCart Networking & Traffic

## Repository Structure

``` text
frontend/
api-gateway/
services/
helm/
kubernetes/
monitoring/
.github/workflows/
```

## Local Development

``` bash
docker compose up --build
```

## Kubernetes

``` bash
kubectl apply -f kubernetes/
```

## Helm

``` bash
helm install cloudcart ./helm/cloudcart
```

## CI/CD

GitHub Actions performs: - Helm lint - Helm template validation - Docker
image builds - Image publishing

ArgoCD provides: - GitOps deployment - Auto Sync - Self Healing

## Future Roadmap

-   Terraform
-   Azure AKS
-   Logging
-   Tracing
-   Security Scanning

## Skills Demonstrated

-   Git
-   Docker
-   Kubernetes
-   Helm
-   Prometheus
-   Grafana
-   GitHub Actions
-   ArgoCD
-   React
-   Node.js
-   MongoDB

