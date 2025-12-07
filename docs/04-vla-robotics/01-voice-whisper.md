---
sidebar_position: 1
---

# Voice-to-Action with Whisper

The interface between humans and robots is shifting from code to conversation. **OpenAI Whisper** provides the auditory cortex for this new interaction paradigm.

## The Voice Pipeline

1.  **Audio Capture**: The robot's microphone array captures raw audio.
2.  **Transcription**: The audio stream is sent to the Whisper model (running locally on an NVIDIA Jetson or in the cloud). Whisper is robust to accents, background noise, and technical jargon.
3.  **Text Output**: The model outputs a text string, e.g., "Robot, please pick up the red apple."

## From Text to Intent

Transcribed text is just a string. To make it actionable, we need to extract **Intent** and **Slots**.
- **Input**: "Pick up the red apple."
- **Intent**: `PICK_UP_OBJECT`
- **Slot (Object)**: `apple`
- **Slot (Attribute)**: `red`

This structured data is then passed to the cognitive planner (LLM) or a state machine to trigger the appropriate ROS 2 action.
