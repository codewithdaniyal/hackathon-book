1. Directory Structure
Adheres to Article II, Section 2.1
code
Text
/docs
  └── 01-introduction-physical-ai/           # Module 1
      ├── _category_.json                    # Docusaurus sidebar config
      └── 01-foundations/                    # Chapter 1
          ├── _category_.json
          ├── 01-what-is-physical-ai.mdx     # Lesson 1.1
          ├── 02-agents-vs-robots.mdx        # Lesson 1.2
          └── 03-setup-dev-environment.mdx   # Lesson 1.3
2. Lesson Specifications
Lesson 1.1: What is Physical AI?
File: docs/01-introduction-physical-ai/01-foundations/01-what-is-physical-ai.mdx
Frontmatter (Metadata)
code
Yaml
---
id: what-is-physical-ai
title: "Defining Physical AI: The Embodied Mind"
sidebar_label: "1.1 What is Physical AI?"
description: "Understanding the convergence of Large Language Models, Computer Vision, and Actuation."
tags: [concepts, embodiment, intro]
difficulty: "Beginner"
hardware_required: ["None"]
---
Content Skeleton
The Goal: Define Physical AI not as "smart code," but as code that deals with the chaos of the real world (gravity, friction, inertia).
The Theory:
Contrast "Narrow AI" (ChatGPT) with "Embodied AI" (Figure 01, Tesla Optimus).
Diagram Idea: A Venn diagram intersection of Computer Vision, LLMs, and Control Theory.
The Code (Conceptual):
Concept: Show the difference between an API call and a motor command.
code
Python
# Abstract AI (The Brain)
def ask_llm(prompt):
    return "I picked up the apple."

# Physical AI (The Body)
# The complexity lies in the physics, not just the logic
def pickup_apple(coordinates):
    inverse_kinematics = solve_ik(coordinates)
    if check_collision(inverse_kinematics):
        apply_torque(joints, force_nm=2.5)
        verify_grip_pressure(sensor_data)
    else:
        emergency_stop()
Lesson 1.2: The Shift from Software to Hardware
File: docs/01-introduction-physical-ai/01-foundations/02-agents-vs-robots.mdx
Frontmatter (Metadata)
code
Yaml
---
id: agents-vs-robots
title: "Software Agents vs. Physical Robots"
sidebar_label: "1.2 Agents vs. Robots"
description: "Why real-world physics breaks standard software logic and how to handle sensor noise."
tags: [simulation, noise, physics]
difficulty: "Beginner"
hardware_required: ["Python Environment"]
---
Content Skeleton
The Goal: Demonstrate why move_forward(10_meters) rarely results in moving exactly 10 meters in the real world.
The Theory:
Introduction to Stochastic Environments (Real World) vs. Deterministic Environments (Software).
Brief intro to "Sensor Noise."
The Build (Simulation):
Action: Write a Python script that simulates a "Perfect Robot" vs. a "Noisy Robot."
code
Python
import random

def perfect_move(distance):
    return distance

def noisy_move(distance):
    # Adding Gaussian noise to simulate wheel slippage
    real_distance = distance + random.gauss(0, 0.5)
    return real_distance

print(f"Commanded: 10m | Actual: {noisy_move(10):.2f}m")
The Gotcha: Relying on open-loop control (blindly moving) vs. closed-loop control (checking sensors).
Lesson 1.3: Setting up the Development Environment
File: docs/01-introduction-physical-ai/01-foundations/03-setup-dev-environment.mdx
Frontmatter (Metadata)
code
Yaml
---
id: setup-dev-environment
title: "Forging the Tools: ROS2 & Python Setup"
sidebar_label: "1.3 Dev Environment"
description: "Installing ROS2, VS Code, and configuring the workspace for robotic development."
tags: [ros2, installation, linux, python]
difficulty: "Intermediate"
hardware_required: ["Ubuntu 22.04 or Docker"]
---
Content Skeleton
The Goal: Configure a workstation capable of compiling robot code and running simulations.
The Hardware: Standard Laptop (Linux preferred) or Windows with WSL2.
The Build:
Step 1: Install ROS2 (Robot Operating System).
Step 2: Setup Colcon (Build tool).
Step 3: Create the first workspace.
Component: Use the <TerminalBlock> component for these commands.
code
Bash
# <TerminalBlock>
sudo apt update && sudo apt install ros-humble-desktop
source /opt/ros/humble/setup.bash
mkdir -p ~/robot_ws/src
colcon build
# </TerminalBlock>
The Code (Hello World):
Create a simple Python script to test the installation.
code
Python
# minimal_publisher.py
import rclpy
from rclpy.node import Node

class PhysicalAI(Node):
    def __init__(self):
        super().__init__('intro_node')
        self.get_logger().info('Physical AI Systems: ONLINE')

def main(args=None):
    rclpy.init(args=args)
    node = PhysicalAI()
    rclpy.spin(node)
    rclpy.shutdown()
The Gotcha: Forgetting to source the ROS setup file in the .bashrc.
3. UI/UX Considerations (Tailwind)
Adheres to Article IV
For Lesson 1.3, specifically regarding the installation commands, use the bg-slate-900 class for the code containers to ensure high contrast, and outline the container in border-emerald-400 if the command is a "verification" step (like checking the version).
Example MDX implementation concept:
code
Jsx
<div className="p-4 bg-slate-900 border-l-4 border-emerald-400 rounded-md my-4">
  <h3 className="text-emerald-400 font-bold m-0">Verification</h3>
  <p className="text-white">Run this to verify your ROS2 installation:</p>
  <pre><code>printenv | grep ROS</code></pre>
</div>