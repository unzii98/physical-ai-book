---
sidebar_position: 2
---

# Python Agents and ROS 2 Control with `rclpy`

`rclpy` is the Python client library for ROS 2, enabling Python developers to interface with the ROS 2 ecosystem seamlessly. This is crucial for integrating high-level AI agents, often written in Python, with the low-level robot hardware control provided by ROS 2.

## `rclpy`: The Python-ROS 2 Bridge

`rclpy` provides Python bindings for the core ROS 2 functionalities, allowing you to create nodes, publish/subscribe to topics, call/provide services, and handle parameters, all from Python.

### Creating a Python Node

A typical Python ROS 2 node using `rclpy` involves:

1.  **Importing `rclpy`**: The main library.
2.  **Importing messages**: For communication over topics and services.
3.  **Initializing `rclpy`**: Setting up the ROS 2 context.
4.  **Creating a `Node`**: Instantiating your specific robot agent.
5.  **Spinning the node**: Keeping the node alive and processing callbacks.

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Bridging Python Agents to Robot Controllers

High-level Python AI agents (e.g., path planners, decision-makers, vision systems) need to send commands to and receive data from low-level robot controllers (e.g., motor drivers, joint controllers). `rclpy` facilitates this:

1.  **Agent Perception**: Python agent subscribes to sensor data topics (e.g., `/camera/image_raw`, `/scan`) from robot sensors.
2.  **Agent Decision-Making**: Processes data using AI algorithms.
3.  **Agent Action**: Publishes command messages (e.g., `/cmd_vel` for velocity, joint position commands) to controller topics or calls controller services.

This integration allows complex AI behaviors developed in Python to directly influence the physical actions of a robot within the ROS 2 framework.
