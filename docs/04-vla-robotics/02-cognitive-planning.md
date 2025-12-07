---
sidebar_position: 2
---

# Cognitive Planning with LLMs

Large Language Models (LLMs) like GPT-4, Llama 3, or specialized VLA models act as the "Prefrontal Cortex" of the robot. They bridge the gap between high-level abstract goals and low-level control primitives.

## The "Clean the Room" Problem

A classic robotics challenge is the command: "Clean the room." No single ROS node knows how to "clean." It requires a sequence of actions.

## LLM as a Planner

We prompt the LLM with a list of available **ROS 2 Actions** (primitives) it can call:
- `navigate_to(location)`
- `detect_objects()`
- `pick_up(object)`
- `place(object, location)`

**Input**: "Clean the room."
**LLM Output (Plan)**:
1.  `detect_objects()` -> Found: [sock, book, trash]
2.  `pick_up(sock)`
3.  `navigate_to(laundry_basket)`
4.  `place(sock, laundry_basket)`
5.  `pick_up(book)`
6.  `navigate_to(shelf)`
7.  `place(book, shelf)`

This generated plan is parsed by a Python agent, which executes the corresponding ROS 2 actions sequentially, checking for success or failure at each step (Closed-Loop Planning).
