---
id: switch
title: Switch
category: component
importNames:
  - DSSwitch
package: "@stihl-design-system/components"
keywords:
  - switch
  - toggle
  - on off
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 513:2
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:50:14.189Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=513-2
---

# Switch

## Switch

Overview:

- The component has binary states: on or off.
- A switch is a button, not an input element. Use a single checkbox in forms.
- Switches are recommended for mobile use-cases, especially for settings.
- In web use-cases, consider that a state change instantly activates, if data-heavy tasks are connected, the user cannot interact with the page while loading.

![Switch](switch/switch-513-166.png)

_Figure: A Switch component with various states and interactions. It shows the switch in enabled, hover/pressed, focus, disabled, and loading states, both for checked false and checked true conditions. Each variant includes a label and visual representations of the switch in different user interaction scenarios._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-notification--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

Decision tree

### Related elements

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=162-126)

[Checkbox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Structure

1. **Switch** A clickable element indicating the appropriate state.
1. **Label** Copy that describes the current status.
1. **Thumb** Changes to opposite side, when toggled on/off

![Structure](switch/structure-641-161.png)

_Figure: Two variants of a switch component, each with a label "Label Utility M," and shows both the unchecked and checked states. The measurement of 8px refers to the space between the label and the switch, while 16px refers to the vertical space between the two switches. Callout 1 points to the switch in the unchecked state, callout 2 points to the label, and callout 3 points to the switch in the checked state with a visible thumb and checkmark._

### Alignment

#### Label placement

The default is label on the left, due the reading direction.

![Label placement](switch/label-placement-641-181.png)

_Figure: Two variants of a switch component with different label placements. The first switch has the label "Label" placed to the left, and the second switch has the label "Label" placed to the right. Both switches are in the enabled state and are unchecked. The text "Label left" and "Label right" indicate the label placement for each switch. The default label placement is on the left due to reading direction._

#### Use one label at a time

Do not use a label on both sides of the switch.

![Use one label at a time](switch/use-one-label-at-a-time-23696-10175.png)

_Figure: A switch component with the labels "Label left & right", "cm", and "inch". The example is marked as a "Don't" because it incorrectly uses two labels, "cm" and "inch", on both sides of the switch at the same time. The design documentation advises using only one label at a time for a switch._

#### Stretched

Use a stretched alignment **(1)** instead of a default alignment **(2)** in use-cases like settings on small viewports and/or narrow columns.

[Grid styles→](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Stretched](switch/stretched-641-198.png)

_Figure: Two switch components with the Label "Label". The first switch, marked with callout 1, is stretched and aligned horizontally, while the second switch, marked with callout 2, is in the default alignment. The stretched alignment is recommended for use-cases like settings on small viewports and narrow columns._

#### Provide a section title for a group

Offer clear sections, when grouping multiple switches.

![Provide a section title for a group](switch/provide-a-section-title-for-a-group-641-222.png)

_Figure: A group of switches under a section titled "Section Title." There are three switches, each labeled "Label," with the first two switches in the unchecked state and the third switch in the checked state. The third switch is highlighted in orange with a checkmark, indicating it is selected. The layout demonstrates how to group multiple switches clearly under a section title._

## Content and Assets

### Label

Keep it to a minimum, around 2-4 words.

![Label](switch/label-641-261.png)

_Figure: Two switch components, each with a label. The first switch is labeled "Airplane mode" and is in the unchecked state, while the second switch is labeled "Show on home screen" and is in the checked state. Both switches are enabled and follow the guideline to keep the label to a minimum, around 2-4 words._

### Naming a group

Naming a list is important for the user to scan and evaluate the relevance quickly.

![Naming a group](switch/naming-a-group-641-272.png)

_Figure: A group of switches under the heading "General." There are three switches labeled "High contrast mode," "Location awareness," and another "Location awareness." The first two switches are in the enabled state but unchecked, while the third switch is also enabled and checked. The layout shows how switches can be grouped and labeled for quick user evaluation._

### Define a clear aria label

The visible label of a switch can be ambiguous, as the switch influences the status. Make sure to clarify the function through the aria label.

![Define a clear aria label](switch/define-a-clear-aria-label-641-292.png)

_Figure: Three switch components under a "General" heading. Each switch has a label: "High contrast mode" and "Location awareness" are unchecked, while "Photo album" is checked and highlighted with an orange background and a checkmark. The "Photo album" switch includes an aria label that reads "Photo album access," demonstrating how to clarify the function of a switch through an aria label._

## Behavior

### Initial focus

The focus is set on the switch element, excluding the label.

The selected state (true of false) changes by pressing space bar.

![Initial focus](switch/initial-focus-694-1113.png)

_Figure: Two switch components, each labeled "Label". The first switch is in a focus state but unchecked, while the second switch is in a focus state and checked. The focus is set on the switch element itself, not the label, and the selected state can be toggled by pressing the space bar._

### Loading state

If the system cannot process a setting instantly, the loading state is shown. The user can’t interact with the switch meanwhile.

![Loading state](switch/loading-state-694-1126.png)

_Figure: A switch component in its loading state, labeled "Label". The switch is unchecked and cannot be interacted with while in this state. The loading state is indicated by three dots that appear to the right of the label._

### Error handling

Do not combine error messages with the switch.

**In case a switch’s function does not execute, keep it at the former state.**

![Error handling](switch/error-handling-694-1135.png)

_Figure: A "Don't" example of error handling with a switch component. The switch is labeled "High contrast mode" and is in the disabled state, even though the toggle is set to "on." There is an error message "High contrast mode can’t be enabled" above the switch. This example is incorrect because it combines an error message with the switch and does not keep the switch in its former state when its function does not execute._

### Toast notification

It is possible to communicate system feedback to the user through a toast notification.

[Toast notification →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

![Toast notification](switch/toast-notification-694-1151.png)

_Figure: A toast notification component with the text "All files updated" and a success icon, indicating a successful system feedback message. The toast notification is marked as a "Do" example, signifying it is a correct implementation. The layout includes a green checkmark icon, the text message, and a close button on the right side._

## Examples/Variations

### When to use another component

#### Form design: checkbox instead of switch

Use a single checkbox, if designing a form. A switch is not an input element.

[Checkbox →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

![Form design: checkbox instead of switch](switch/form-design-checkbox-instead-of-switch-1430-4323.png)

_Figure: A checkbox component used in a form design, marked as a "Do" example. The text next to the checkbox reads "Hiermit stimme ich den Allgemeinen Geschäftsbedingungen von STIHL Vertriebszentrale AG & Co. KG zu." This example illustrates the correct use of a checkbox instead of a switch in a form, as a switch is not an input element._

#### Add a dialog for bigger changes

Consider asking for confirmation by the user, for bigger tasks that might be hard to undo (e.g. delete all files).

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

![Add a dialog for bigger changes](switch/add-a-dialog-for-bigger-changes-1430-4337.png)

_Figure: A dialog component for desktop viewports, designed to confirm significant changes that require user action. The dialog has a title "Change settings" and a message stating "The setting changes you made require a restart of the app. Do you want to proceed?" with a button labeled "Restart now." This example is marked as a "Do" example, indicating it is a recommended approach for handling major changes that may need confirmation from the user._

### Other common use cases

> The following examples are not part of the code component

#### Switch meant for mobile use

The switch component is initially meant for mobile use cases.

It is allowed to use a switch in a desktop solution, though consider if another component might be a better fit.

![Switch meant for mobile use](switch/switch-meant-for-mobile-use-694-1171.png)

_Figure: A list of settings with switch components meant for mobile use, including labels for Tracking, Darkmode, and Notification. Each switch is enabled but only the Notification switch is checked. The switches are aligned to the right of their respective labels, Settings, Tracking, Darkmode, and Notification._

#### Use of other icons

Consider carefully if a custom icon is needed.

The check-icon is a standard icon for the switch component and will in all situations.

[Iconography →](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

![Use of other icons](switch/use-of-other-icons-641-312.png)

_Figure: A switch component with two states: an inactive state on the left and an active state on the right. Both states feature an unlock icon within the switch. The inactive state is smaller and lighter in color, while the active state is larger and more prominent. The text next to the figure advises careful consideration before using a custom icon, recommending the check-icon as the standard for the switch component._
