---
sidebar_position: 3
---

# Simulating Sensors: LiDAR, Depth, and IMU

A digital twin is useless if the robot can't "see" it. We must simulate the data streams that real sensors would produce.

## 1. LiDAR (Light Detection and Ranging)

LiDAR sensors shoot laser beams to measure distance.
- **Simulation**: Modeled as raycasting. The engine fires hundreds of rays in a 360° pattern. Where a ray hits an object, it returns a distance reading.
- **Noise**: Real LiDAR has noise (dust, surfaces that don't reflect well). Good simulations add Gaussian noise to the raycast results to make the data realistic.
- **Output**: `sensor_msgs/LaserScan` (2D) or `sensor_msgs/PointCloud2` (3D).

## 2. Depth Cameras (RGB-D)

Cameras like RealSense or Kinect provide both color (RGB) and per-pixel distance (Depth).
- **Simulation**:
    - **RGB**: The rendering engine captures the scene from the camera's perspective.
    - **Depth**: The Z-buffer (distance from camera to object) is captured and normalized.
- **Challenge**: Simulating optical artifacts like lens flare, motion blur, and lack of texture (which confuses stereo depth algorithms) is advanced but necessary for robust vision.

## 3. IMU (Inertial Measurement Unit)

The IMU is the robot's inner ear, measuring linear acceleration (Accelerometer) and angular velocity (Gyroscope).
- **Simulation**: The physics engine knows the exact acceleration and velocity of the robot's "base_link" at every step.
- **Bias & Drift**: Real IMUs are notorious for "drift" (accumulating error over time). A realistic simulation adds **random walk bias** to the perfect physics data so the localization algorithms learn to filter it out (e.g., using Extended Kalman Filters).

Without noisy sensor simulation, a robot might perform perfectly in the digital twin but fail instantly in the chaos of the real world.
