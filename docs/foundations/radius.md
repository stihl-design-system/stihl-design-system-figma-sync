---
id: radius
title: Radius
category: foundation
keywords:
  - radius
  - border radius
  - corner
  - tokens
figmaFile: Styles
figmaProject: 01. Fundamentals
figmaFileKey: UYHZEckQObDvLuuRoMP8ps
figmaNodeId: 59:2801
figmaVersion: "2402427732341939128"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-09-23T14:01:21Z
syncedAt: 2026-10-27T13:34:15.580Z
sourceUrl: https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps?node-id=59-2801
---

# Radius

## Radius

Radius tokens define the degree of rounding of UI elements and ensure a consistent appearance across all components. Instead of defining individual pixel values ​​for each component, semantic radius tokens are used, which uniquely describe recurring shapes. The design system distinguishes between functional radii (e.g., no rounding, slight rounding) and conceptual radii (e.g., fully rounded).

Radius

button, input field

No unit needed

- Button Nav (hover & focus)
- Action item (hover & focus state)
- Popover
- Tooltip
- Combobox menu & option
- Stepper progress bar (hover & focus)

Decorative micro-rounding. Scaling with text zoom provides no accessibility benefit.

- container cards

- Subtle card corner rounding

- segmented control

- Subtle card corner rounding

- chips (small & default)
- pills
- ProgressIndicator (InputFile) track start (left) & end (right)
- Slider track end (right) & Slider track start (left)
- NumberIndicator

circle

- ButtonRound
- FloatingActionButton
- Radio Button
- Slider thumb
- Stepper step dot
- Switch knob
- Switch track & label

- round shapes rectangle (flexible width)
- circle (width = heigth)

> **Note: radius-circle (code-only)** The codebase additionally includes radius-circle (50%) for elements that must be guaranteed circular. Not representable in Figma (no percentage-based radius variables) — circles are achieved in Figma via radius-full on square elements.

- ButtonRound
- Radio Button
- Slider thumb
- Stepper step dot
- Switch knob

**Code-only:**

guarantees a circular shape regardless of dimensions. No Figma equivalent — achieved in Figma via \`radius-full\` on square elements.

**Primary**
