---
sidebar_position: 2
---

# Isaac ROS: VSLAM & Accelerated Perception

Isaac ROS is a collection of hardware-accelerated packages that bring computer vision and AI perception to ROS 2 developers. It leverages the GPU (specifically NVIDIA Jetson or discrete GPUs) to perform heavy computations that would choke a CPU.

## Visual SLAM (VSLAM)

**Simultaneous Localization and Mapping (SLAM)** is how a robot figures out "Where am I?" and "What does the world look like?".

- **Visual Odometry**: Isaac ROS VSLAM uses stereo cameras to track features in the environment, estimating the robot's motion with high precision.
- **GPU Acceleration**: By running on CUDA cores, Isaac ROS VSLAM enables high-frame-rate tracking with low latency, essential for fast-moving humanoids.

## NVBlox: 3D Reconstruction

NVBlox processes depth images on the GPU to build a 3D voxel grid of the environment in real-time. This allows the robot to see obstacles in 3D (like an overhanging table) that 2D laser scanners would miss.
