---
sidebar_position: 3
---

# Nav2: Path Planning for Humanoids

**Nav2 (ROS 2 Navigation Stack)** is the industry standard for moving robots from Point A to Point B safely. While traditionally used for wheeled robots, it is adaptable for bipeds.

## The Navigation Pipeline

1.  **Global Planner**: Calculates the optimal path across the entire map (e.g., A* or Dijkstra algorithm). "I need to get from the kitchen to the living room."
2.  **Local Planner (Controller)**: Calculates the immediate velocity commands (`cmd_vel`) to follow the global path while avoiding dynamic obstacles (people, pets). "Turn left slightly to avoid the chair."
3.  **Costmaps**: 2D or 3D grids representing safe and unsafe areas.

## Humanoid Challenges

Navigating a biped is harder than a wheeled robot:
- **Footstep Planning**: Instead of smooth velocity, a humanoid needs discrete footsteps. Specialized plugins for Nav2 can generate footstep placements.
- **Balance**: The planner must ensure the center of mass stays stable.
- **3D Obstacles**: Humanoids are tall. Nav2 must use 3D voxel layers (from NVBlox) to avoid hitting its head or tripping over low obstacles.
