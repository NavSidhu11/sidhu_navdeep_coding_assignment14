# Assignment 14 – Portfolio Website

## Overview

This project is a portfolio website built using React, TypeScript, Vite, and Docker. It showcases my work, skills, resources, and development setup.

## Technologies Used

- React
- TypeScript
- Vite
- Styled Components
- Storybook
- Docker
- ESLint & Prettier
- Husky

## Running the Application (Docker)

### Step 1: Build Docker Image

docker build -t sidhu_navdeep_coding_assignment14 .

### Step 2: Run Docker Container

docker run -d -p 5575:5575 --name sidhu_navdeep_coding_assignment14 sidhu_navdeep_coding_assignment14

### Step 3: Open in Browser

http://127.0.0.1:5575

## Features

- Portfolio sections (About, Work, Skills, Resources, Setup)
- Reusable component library
- Responsive layout
- Production build using Docker
- CI/CD pipeline configured

## Developer Setup

- VS Code with ESLint & Prettier
- Husky for pre-commit hooks
- GitHub for version control

## Author

Navdeep Sidhu
