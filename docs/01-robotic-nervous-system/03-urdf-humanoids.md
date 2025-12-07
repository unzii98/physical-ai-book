---
sidebar_position: 3
---

# Understanding URDF for Humanoids

The **Unified Robot Description Format (URDF)** is an XML format for describing all aspects of a robot model. It is a fundamental building block in ROS 2 for representing a robot's kinematic and dynamic properties, visual appearance, and collision geometry.

While URDF can describe any robot, it's particularly vital for complex morphologies like humanoids, where precise joint definitions, link relationships, and inertial properties are crucial for realistic simulation and control.

## Key Elements of a URDF File

A URDF file is composed of two primary elements:

1.  **`<link>`**: Represents a rigid body of the robot. This could be a segment of an arm, a leg, the torso, or the head. Each link has:
    *   **Inertial Properties**: Mass, center of mass, and inertia tensor, critical for physics simulation.
    *   **Visual Properties**: Describes how the link looks (e.g., color, mesh files for 3D models).
    *   **Collision Properties**: Defines the simplified geometry used for collision detection, which can be different from the visual mesh to optimize computation.

2.  **`<joint>`**: Defines the kinematic and dynamic properties of a connection between two links. Joints specify how links move relative to each other.
    *   **Parent and Child Links**: Each joint connects a `parent` link to a `child` link.
    *   **Type**: Specifies the type of motion (e.g., `revolute` for rotation, `prismatic` for linear motion, `fixed` for no relative motion).
    *   **Axis**: The axis of motion for revolute and prismatic joints.
    *   **Origin**: The relative position and orientation of the joint's frame with respect to the parent link's frame.
    *   **Limits**: Define the joint's movement range (upper/lower bounds) and velocity/effort limits.

## URDF for Humanoids

For humanoids, URDF becomes quite intricate due to the large number of degrees of freedom (DOF) and the need for detailed representation of body segments, hands, and feet.

-   **Kinematic Chains**: A humanoid URDF will define long kinematic chains for arms, legs, and the spine, connecting many links via various joints.
-   **Self-Collision**: Careful definition of collision geometries is paramount to prevent the robot from self-colliding in simulation.
-   **Visual Fidelity**: High-fidelity meshes are often used for visual properties to make humanoid simulations realistic.
-   **Multi-DOF Joints**: Humanoid shoulders and hips often use complex joint setups (e.g., multiple revolute joints acting together) to mimic human-like motion.

URDF is often complemented by **Gazebo plugins** for sensor simulation and advanced control, and **SRDF (Semantic Robot Description Format)** for defining planning groups and avoiding specific collision pairs, especially important for humanoids.
