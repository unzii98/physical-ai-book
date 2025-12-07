---
sidebar_position: 1
---

# NVIDIA Isaac Sim: Photorealism & Synthetic Data

NVIDIA Isaac Sim is a scalable robotics simulation application and synthetic data generation tool that powers photorealistic, physically accurate virtual environments to develop, test, and manage AI-based robots.

## Built on Omniverse

Isaac Sim is built on NVIDIA Omniverse, enabling:
- **RTX Rendering**: Real-time ray tracing for photorealistic visual fidelity, crucial for training vision-based AI.
- **USD (Universal Scene Description)**: A robust file format for assembling complex stages and robots.
- **Python Scripting**: Full control over the simulation environment via Python API.

## Synthetic Data Generation (SDG)

Training AI models requires massive amounts of labeled data. collecting this in the real world is slow and expensive. Isaac Sim solves this with **Replicator**.

- **Domain Randomization**: Automatically vary texture, lighting, camera position, and object pose in every frame.
- **Auto-Labeling**: Since the simulator knows exactly what it is rendering, it generates perfect "ground truth" labels (bounding boxes, segmentation masks, depth maps) instantly.

This allows you to train a neural network on millions of synthetic images before it ever sees the real world.
