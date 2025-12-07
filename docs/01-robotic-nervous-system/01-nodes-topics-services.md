---
sidebar_position: 1
---

# ROS 2 Nodes, Topics, and Services

ROS 2 (Robot Operating System 2) provides a flexible framework for writing robot software. Its core components—Nodes, Topics, and Services—enable modular and distributed development.

## Nodes: The Workers

A **Node** is an executable process that performs computation. For instance, one node might control a motor, another might process camera data, and a third might localize the robot. Nodes are isolated processes, making the system robust to failures.

## Topics: The Data Pipelines

**Topics** are named buses over which nodes exchange messages. A node can publish messages to a topic or subscribe to a topic to receive messages. This publish/subscribe model is asynchronous and allows for loose coupling between nodes.

- **Publisher**: A node that sends messages to a topic.
- **Subscriber**: A node that receives messages from a topic.

**Example**: A camera node publishes images to an `/image_raw` topic, and an image processing node subscribes to it.

## Services: The Request/Response Mechanism

**Services** are a synchronous request/response communication mechanism in ROS 2. When a node requires a specific task to be performed immediately and expects a direct response, it can call a service offered by another node.

- **Service Server**: A node that provides a service and responds to requests.
- **Service Client**: A node that sends a request to a service server and waits for a response.

**Example**: A navigation node might call a `/move_to_goal` service on a motion control node, waiting for confirmation that the goal was reached.

## Key Differences

| Feature     | Topics                                 | Services                               |
|-------------|----------------------------------------|----------------------------------------|
| Communication | Asynchronous (pub/sub)                 | Synchronous (request/response)         |
| Use Case    | Continuous data streams                | Single, immediate requests             |
| Decoupling  | High (sender doesn't know receiver)    | Lower (client expects specific server) |
