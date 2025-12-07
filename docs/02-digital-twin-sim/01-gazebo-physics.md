---
sidebar_position: 1
---

# Physics, Gravity, and Collisions in Gazebo

Gazebo is a standard-bearer in robotics simulation, offering a robust physics engine that calculates rigid body dynamics, collision detection, and environmental forces like gravity and friction.

## The Physics Engine

At the heart of Gazebo lies the physics engine (defaulting to ODE, but supporting Bullet, Simbody, and DART). This engine solves the equations of motion for every object in the scene at every time step.

### Rigid Body Dynamics

Robots in Gazebo are modeled as collections of rigid bodies (Links) connected by joints. The physics engine calculates:
- **Forces & Torques**: Applied by motors (joints) or external interactions.
- **Velocity & Acceleration**: How links move in response to forces.
- **Constraints**: How joints limit motion (e.g., a hinge only rotates around one axis).

## Handling Collisions

Collision detection is computationally expensive but vital. Gazebo optimizes this by distinguishing between:
1.  **Visual Geometry**: High-poly meshes for rendering (what you see).
2.  **Collision Geometry**: Simplified shapes (boxes, cylinders, convex hulls) for physics calculations (what the engine "feels").

Properly defining collision bitmasks allows you to ignore collisions between specific parts of the robot (e.g., preventing the thigh from colliding with the shin at the joint).

## Gravity and Friction

- **Gravity**: A global force vector (usually `[0, 0, -9.81]` m/s²) applied to all objects with mass.
- **Friction**: Defined at contact points. Coefficients of friction (`mu`, `mu2`) determine how slippery surfaces are. High friction is needed for a humanoid foot to grip the ground and walk; low friction mimics ice.

Simulating these forces accurately is the difference between a robot that walks and one that instantly falls over.
