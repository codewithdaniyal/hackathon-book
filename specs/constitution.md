The Constitution of the Open Codex for Physical AI
Project Codename: Embodied-Intelligence
Version: 1.0.0
Preamble
We establish this framework to create a living, modular, and interactive educational resource for the next generation of roboticists. Our mission is to bridge the gap between abstract AI code and physical actuation through a "Build First, Explain Second" philosophy.
Article I: The Infrastructure (Tech Stack)
Section 1.1: Core Engine
Framework: Docusaurus 3.x (React-based Static Site Generator).
Styling: Tailwind CSS 3.x integrated via PostCSS for custom components and utility classes within MDX files.
Content Format: MDX (Markdown + JSX). This allows us to embed interactive React components directly into lessons.
Section 2.1: Hosting & CI/CD
Repository Host: GitHub.
Deployment Target: GitHub Pages.
Build Pipeline: GitHub Actions workflow (deploy.yml) triggers on push to the main branch.
Base URL: Configured to accommodate the GitHub Pages repository structure (e.g., /physical-ai-textbook/).
Article II: Content Architecture
Section 2.1: The Hierarchy
The content must strictly follow this directory structure to ensure modularity and clean URL routing:
Module (Broad Topic, e.g., "Kinematics")
Chapter (Specific Concept, e.g., "Forward Kinematics")
Lesson (Actionable Unit, e.g., "Calculating DH Parameters")
Path Example:
/docs/module-01-foundations/chapter-02-actuators/lesson-01-dc-motors
Section 2.2: Frontmatter Metadata
Every MDX file must include the following YAML frontmatter to support future RAG indexing:
code
Yaml
---
id: pid-control-basics
title: "PID Control: The Heartbeat of Robotics"
sidebar_label: "PID Basics"
description: "Implementing Proportional-Integral-Derivative controllers in Python for joint stability."
tags: [control-theory, python, ros2, hardware-agnostic]
difficulty: "Intermediate"
hardware_required: ["Arduino Uno", "DC Motor", "Encoder"]
---
Article III: Pedagogical Guidelines
Section 3.1: The "Hands-On" Decree
No Wall of Text: No paragraph shall exceed 6 lines without a visual break (diagram, code block, or callout).
The 30/70 Rule: 30% Theory, 70% Implementation.
Codeblocks: All code snippets must feature syntax highlighting, line numbers, and a "Copy" button.
Section 3.2: Lesson Structure
Every Lesson must follow this template:
The Goal: 1 sentence on what the user will build.
The Hardware: List of parts needed (or "Simulation Only").
The Theory: Concise mathematical or logic explanation (using LaTeX for math).
The Build/Code: Step-by-step implementation.
The "Gotchas": Common errors (e.g., "Don't reverse polarity on the LiPo battery").
Article IV: Visual & Styling Standards (Tailwind)
Section 4.1: Color Palette
We utilize a specific Tailwind configuration to denote Robotics concepts:
bg-slate-900: Default background (Dark Mode First).
text-cyan-400: Physics/Math variables.
border-rose-500: Hardware Safety Warnings (High Voltage/Pinch Points).
text-emerald-400: Successful compilation/run outputs.
Section 4.2: Custom Components (MDX)
Developers must use these React components (styled with Tailwind) instead of standard Markdown where applicable:
<SimulationViewer src="..." />: For embedding WebGL URDF visualizers.
<MathBlock>: For LaTeX equations.
<TerminalBlock>: For showing bash commands/ROS2 outputs.
Article V: RAG & Chatbot Preparation
Section 5.1: Optimization for Vector Search
To prepare for the FastAPI + Qdrant integration:
Semantic Chunking: Use H2 (##) and H3 (###) headers descriptively. The RAG ingestion script will split chunks based on these headers.
Contextual Clarity: Avoid pronouns like "this" or "it" in the first sentence of a section. Repeat the noun (e.g., "The Inverse Kinematics solver..." instead of "It...").
Section 5.2: The "Hidden" API
The Docusaurus build will include a custom script to export all content to a corpus.json file during the build process.
This JSON file will be the ingestion source for the Qdrant vector database.
Article VI: Curriculum Roadmap (The Modules)
The textbook is divided into three major Eras:
Era 1: The Body (Mechatronics)
Module 1: The Silicon Brain (Microcontrollers, ROS2 Basics).
Module 2: Muscles & Skeletons (Actuators, 3D Printing, URDFs).
Module 3: Power Systems (Batteries, BMS, Safety).
Era 2: The Movement (Control & Physics)
Module 4: Kinematics (FK/IK, DH Parameters).
Module 5: Dynamics & Balance (Inverted Pendulum, ZMP).
Module 6: Perception (LiDAR, Depth Cameras, OpenCV).
Era 3: The Mind (Physical AI)
Module 7: Reinforcement Learning (Isaac Sim/Gym).
Module 8: VLA (Vision-Language-Action) Models.
Module 9: Sim-to-Real Transfer.
Article VII: Contribution Protocol
Section 7.1: Git Flow
Main Branch: Production ready.
Dev Branch: Staging.
Feature Branches: Naming convention feat/module-name or fix/component-name.
Section 7.2: Commits
Must follow Conventional Commits:
content: add lesson on Kalman Filters
style: update tailwind config for dark mode
infra: update qdrant ingestion script
Ratification
Signed into effect for the initialization of the Physical AI Repository.
Target Launch State: Alpha.