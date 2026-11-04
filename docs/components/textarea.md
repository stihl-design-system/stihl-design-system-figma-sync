---
id: textarea
title: Textarea
category: component
importNames:
  - DSTextarea
package: "@stihl-design-system/components"
keywords:
  - textarea
  - multiline input
  - form
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 4937:4402
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:51:25.639Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=4937-4402
---

# Textarea

## Textarea

Overview:

- Use for multi-line text input, suitable for longer responses, comments, or descriptions.

![Textarea](textarea/textarea-5145-19065.png)

_Figure: Shows system-feedback (type=error). Text in the figure: "Size Medium", "is invalid", "Label", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauri...", "Input", "0/100", "System Feedback Message", "Default", "Hover", "Focus", "Disabled", "Read-only", "Size Small"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-textarea--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

### Related elements

[Input Text](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Label** Communicate to the user, what input is needed.
1. **Text area** The area where the user enters the input.
1. **User input text** Data, entered by the user
1. **Character count/limit (optional)** Counter that shows current character count an the character limit for the text area
1. **Hint (optional)** Short copy that provides guidance and context.
1. **Info Button (optional)** Can be used to trigger a popover with additional information
1. **System feedback** Error message to help the user understand

![Anatomy](textarea/anatomy-8859-463.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); textarea (input, resize handle, counter, size=medium, state=enabled, invalid=false); annotation-circle (number=3, type=left, color=blue); annotation-circle (number=2, type=right, color=blue); annotation-circle (number=4, type=right, color=blue); textarea (input, resize handle, ℹ️ info-button, counter, hint, size=medium, state=enabled, invalid=false); annotation-circle (number=6, type=right, color=blue); annotation-circle (number=5, type=left, color=blue); textarea (resize handle, input, counter, size=medium, state=enabled, invalid=true); annotation-circle (number=7, type=left, color=blue). Callouts 1, 2, 3, 4, 5, 6, 7. Text in the figure: "Label", "Input", "0/100", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauri...", "System Feedback Message"._

### Sizing

#### Minimum height and width

- Minimum height: 96px
- Minimum width: 288px

![Minimum height and width](textarea/minimum-height-and-width-8859-479.png)

_Figure: Shows textarea (input, resize handle, counter, size=medium, state=enabled, invalid=false). Measurements: 96px, 288px. Text in the figure: "Label", "Input", "0/100"._

#### Maximum width

The width of a text area field is determined by the container it is placed in. This should ideally be the “[content area narrow](https://www.figma.com/design/HHM9B6UjMStGLxMf6loNLn/DS-945-Grid-Optimisations-%7C-Design?node-id=1-857&t=FFOFP94g90gl91Ko-4)” defined within the grid layout.

While the text area can adjust to fit its container, we recommend not exceeding a maximum width of 544px (matching the [maximum text width](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515)) for better scanability and readability. This width should be set on a [fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154) or container itself.

In the Figma component, the maximum width is set to the recommended 544px. ([Link to calculation](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515))

![Maximum width](textarea/maximum-width-30568-8898.png)

_Figure: Shows textarea (input, resize handle, counter, size=medium, state=enabled, invalid=false). Text in the figure: "Content area Narrow", "Label", "Input", "0/100", "Container Width", "recommended max. width 544px"._

![Maximum width](textarea/maximum-width-8859-525.png)

_Figure: Don't example. Shows textarea (input, resize handle, counter, size=medium, state=enabled, invalid=false). Text in the figure: "Label", "Input", "0/100"._

## Content and Assets

### Required and optional indicators

In order to communicate which fields are required to the user an asterisk **(1)** is shown next to the label. When using the code component the asterisk will be shown automatically when input is set to required.

Optional areas are marked with the word “(optional)”, after the label **(2)**. In most cases, this has to be added manually in the Content Management System.

![Required and optional indicators](textarea/required-and-optional-indicators-8859-2884.png)

_Figure: Shows text-area-medium (input, resize handle, counter, size=medium, state=enabled, invalid=false). Callouts 1, 2. Text in the figure: "Label \*", "Input", "0/100", "Label (optional)"._

### Info Button

A button to trigger a popover can be placed next to input or select labels to provide **additional contextual information.**

Popover content should be **limited to supplementary, non-critical information** — for example, brief explanations, examples, or guidance that supports user understanding without being essential for task completion.

![Info Button](textarea/info-button-40251-50514.png)

_Figure: Shows textarea (input, resize handle, ℹ️ info-button, counter, size=medium, state=enabled, invalid=false); cursor (type=pointer). Text in the figure: "You will usually find the Machine Number in the location shown in the illustr...", "Label", "Input", "0/100"._

**Don’t use the popover for critical or required information**, use the hint instead as critical information should net be hidden

For mor Guidance on this topic see the [Popover documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=35223-10505)

![Info Button](textarea/info-button-40251-50533.png)

_Figure: Don't example. Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); textarea (input, resize handle, ℹ️ info-button, counter, size=medium, state=enabled, invalid=false); cursor (type=pointer). Text in the figure: "xxxx", "Label", "Input", "0/100"._

## Behavior

### Character count

Some text areas need a character limit. These indicators are displayed at the bottom right. When typing, the indicator counts the amount of character that are being used. **(1)** When reaching the maximum amount of usable characters you won’t be able to introduce any further characters. **(2)** When the user is above the limit the text area switches to the error mode **(3)**

![Character count](textarea/character-count-5145-19986.png)

_Figure: Do example. Shows text-area-medium (resize handle, input, counter, size=medium, state=enabled, invalid=true). Text in the figure: "Label", "Input", "System Feedback Message", "100/100"._

### Scaling the area

The text area can have a fixed hight or can be used dynamically and scale with the content or user input.

1. automatic
1. manual

![Scaling the area](textarea/scaling-the-area-8300-14366.png)

_Figure: Shows text-area-medium (input, counter, size=medium, state=enabled, invalid=false); text-area-medium (input, resize handle, counter, size=medium, state=enabled, invalid=false). Callouts 1, 2. Text in the figure: "Label", "Input", "0/100"._

**Automatic**

The text area grows automatically in height when entering the input. If the area grows the initial state should be at least the minimum height. The text area should stop growing when reaching the maximum size.

![Scaling the area](textarea/scaling-the-area-8861-678.png)

_Figure: Shows text-area-medium (input, counter, size=medium, state=enabled, invalid=false). Text in the figure: "Label", "Lorem ipsum dolor sit, consectetur adipiscing elit. Lacus vel etiam|", "67/200", "Lorem ipsum dolor sit, consectetur adipiscing elit. Lacus vel etiam adipiscin...", "200/200"._

### Overflow

More characters than max height requires a (native) scroll bar to be shown in the text area

![Overflow](textarea/overflow-8861-740.png)

_Figure: Shows text-area-medium (input, resize handle, counter, size=medium, state=enabled, invalid=false). Text in the figure: "Label", "Lorem ipsum dolor sit, consectetur adipiscing elit. Lacus vel etiam adipiscin...", "67/200"._
