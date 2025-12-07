---
sidebar_position: 3
---

# Capstone Project: The Autonomous Humanoid

This final project integrates every module in the book into a single, cohesive system.

## The Mission

**Scenario**: A humanoid robot stands in a simulated kitchen (Unity/Gazebo).
**Command**: "I'm thirsty. Get me something to drink."

## The Execution Pipeline

1.  **Hearing (Module 4)**: The robot captures your voice command and uses Whisper to transcribe it.
2.  **Thinking (Module 4)**: The LLM analyzes the request ("thirsty" -> needs drink). It queries its memory/map and plans: `Find(Drink) -> Pick(Drink) -> Bring(User)`.
3.  **Seeing (Module 3)**: The robot uses Isaac ROS VSLAM to locate itself and NVBlox to map the room. It activates its object detection model to scan for "bottles" or "cans".
4.  **Moving (Module 3)**: Nav2 plans a path to the fridge, avoiding the kitchen island.
5.  **Actuating (Module 1 & 2)**: The robot's legs walk (simulated physics) to the target. Its arm reaches out (Inverse Kinematics), grasps the bottle (collision detection), and returns to you.

## Success Criteria

The project is considered complete when the robot can autonomously perform this sequence in simulation without human teleoperation, handling dynamic obstacles (e.g., a chair moving) gracefully.
