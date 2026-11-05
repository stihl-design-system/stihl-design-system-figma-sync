---
id: motion
title: Motion
category: foundation
keywords:
  - motion
  - animation
  - easing
  - duration
figmaFile: Styles
figmaProject: 01. Fundamentals
figmaFileKey: UYHZEckQObDvLuuRoMP8ps
figmaNodeId: 1:148
figmaVersion: "2402427732341939128"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-09-23T14:01:21Z
syncedAt: 2026-11-05T21:31:53.073Z
sourceUrl: https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps?node-id=1-148
---

# Motion

## Motion basics

Basic motion buildings blocks and tokens. Motion is divided in functional motion and expressive motion. In the context of digital design, the terms "transition" and "animation" are related but have distinct meanings:

- Transitions are typically linked to changes between states triggered by user interactions.
- Animations are broader, more complex sequences that may or may not depend on user inputs.

▶️️ **View** [**prototype**](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3818&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed)[ ](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3818&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed)[**mode**](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3818&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed) for animation examples

### Animation types

![Animation types](motion/animation-types-3-3827.png)

_Figure: Table of five animation types with the columns Type, Description, Purpose, Usage examples and Example (each Example cell is an empty grey square placeholder). fade changes color or opacity to hide or show an element, to make changes appear natural, used by Buttons and links, Checkbox, Radio button, Inputs, Toast (exit), Select, Dialog, Popover tip and Tooltip. move changes an element's position, to draw attention to changes or interactions, used by Notification, Toast (entrance), Carrousel, Slider, Switch and Sheet. expand increases or decreases an element in size, to emphasize content changes, used by Accordions, Expandable sections, Combobox and Dropdown. rotate turns an element clockwise or counter-clockwise from its center, to emphasize dynamic visual interest, used by the Loading spinner. zoom is a zoom-in, zoom-out effect that shifts attention or creates visual interest by emphasizing focus, used by Cards and Images._

### Duration

![Duration](motion/duration-3-3871.png)

_Figure: Table of six duration tokens with the columns Name, Purpose, Usage examples, Value and Example (each Example cell is an empty grey circle placeholder). duration-100 (100ms) is subtle and instant, for small utility transitions such as Buttons and links, Checkbox, combobox, Input, Radio button, Select, Switch, Textarea and Tooltip Slider. duration-250 (250ms) is balanced and responsive, for medium elements such as Accordion, Expandable section, Dialog (small), Popover tip and Tooltip. duration-400 (400ms) is clear and dramatic, for large elements such as Carousel, Dialog, Drawer (Sheet), Notification, Slider, Sidebar, Screen dimming and Toast. duration-700 (700ms) is fluid and sustained, for moving content across a larger distance such as Carousel sliding. duration-1100 (1100ms) is steady and ambient, for looping animations such as the Loading spinner. duration-1600 (1600ms) is slow and rhythmic, for ambient placeholder animations such as the Skeleton shimmer._

#### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Functional motion

Functional motion is used to create responsiveness (reactivity), while remaining subtle. Utilize for micro interactions.

▶️️ **View** [**prototype**](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3907&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed)[ ](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3907&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed)[**mode**](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A148&node-id=3-3907&viewport=4013%2C3997%2C1&t=9PoCNdMVFd6ZOzz8-1&scaling=min-zoom&content-scaling=fixed) for animation examples

### Easing

![Easing](motion/easing-3-3916.png)

_Figure: Table of four easing tokens with the columns Type, Description, Purpose, Usage examples, Value and Example (each Example cell is an empty grey circle placeholder). motion-functional-linear has the value linear: uniform speed, a system-like engineered effect, for short functional changes in Button an links, Checkbox, Combobox, Input, Radio button, Select, Switch and Text area. motion-functional-ease-in has the value cubic-bezier (0.5, 0, 1, 1): smoothly accelerates, a natural launching effect, for exiting, closing or blending out elements such as Accordion, Expandable section, Toast, Dialog, Drawer, Popover tip, Tooltip, Slider, Carousel and Sidebar. motion-functional-ease-out has the value cubic-bezier (0, 0, 0.5, 1): smoothly decelerates, a natural settling effect, for entering, opening or blending in the same elements. motion-functional-ease-in-out has the value cubic-bezier (0.5, 0, 0.5, 1): starts slowly, accelerates through the middle and decelerates at the end, a natural seamless effect, for Radio group with expandable section and Hover Slider/Tooltip Slider._

#### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Expressive motion

Expressive motion creates lively and highly visible movement. Utilize for significant moments and to reinforce brand expression.

### 🗓️

### Coming soon

> The current **roadmap** is shared during **sprint reviews** and included in the design system **release notes**, which are emailed after each sprint. If you have any questions or would like to be added to the sprint review meetings or release notes distribution list, please reach out to [design.system@stihl.de](mailto:design.system@stihl.de).

## Test Page

[**▶️ See klickdummy**](https://www.figma.com/proto/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?page-id=1%3A9616&node-id=7-8464&viewport=785%2C348%2C0.25&t=PBKzcVMiqqaHxxVD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A8464)

## Next Step

The current focus is on **functional animation**, though some UI elements could be refined to better reflect the STIHL brand identity. Future Steps include:

- Defining an overall (UI)Motion concept for STIHL Products (align with brand-team)(2025)
- Defining an expressive Animation style (potential elements like. Buttons, Cards, Onboarding Journey,... (end 2025) (\>\> Definitions of other Product Teams working on something similar can be added to our current specs)
- Defining choreography (= process and order of animations playing together \>\> relevant for bigger and more complex modules)
- Define transition guidelines

Potential elements that can profit from a more expressive Animation to convey the brand or the define the brands animation look/feel:

> The current **roadmap** is shared during **sprint reviews** and included in the design system **release notes**, which are emailed after each sprint. If you have any questions or would like to be added to the sprint review meetings or release notes distribution list, please reach out to [design.system@stihl.de](mailto:design.system@stihl.de).

### Buttons

### Cards

### Onboarding screens

### Example STIHL Codes

### Loading and Transitions

Loading spinners and skeleton loading

### Guided Selling / Product Guide (Advisor)

Explanations + Immersion

### Pages

Motion for STIHL expression \> strategic for Brand Experience \> Landing Pages \> Campaign pages

\> Timbesports

\> Collection

ect.
