---
id: checkbox
title: Checkbox
category: component
importNames:
  - DSCheckbox
  - DSCheckboxGroup
package: "@stihl-design-system/components"
keywords:
  - checkbox
  - checkbox group
  - multi select
  - form
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 1017:2316
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:21:45.208Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316
---

# Checkbox

## Checkbox

[Overview:](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)

- [a checkbox can be placed by itself (singular) or in a ](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)[checkbox group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=5626-11362)[, see below](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)
- [use single checkbox component for binary choices or toggles in forms or settings interfaces](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)
- [click area: the label must be clickable and trigger the activation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)

![Checkbox](checkbox/checkbox-1017-2373.png)

_Figure: Various states and configurations of a checkbox component in a UI design system. It includes different states such as default, hover/pressed, focus, and disabled, along with conditions like checked true, checked false, indeterminate true, and invalid true. The layout shows how the checkbox appears with and without a label and system feedback message, illustrating the visual representation for each combination of these states and conditions._

> **Figma Slots in this component** This component supports Figma slots, which allow specific areas to be flexibly populated with your own content. You can find more information on how to use and customize slots in the official Figma documentation. [**Go to the Figma guide**](https://help.figma.com/hc/en-us/articles/38231200344599-Create-and-use-slots-to-build-flexible-components-in-Figma-Design)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox--documentation)

Decision tree

### Related elements

[Input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

[Switch](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=513-2)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Construction

1. **Checkbox**
1. **Checkbox label** Copy that describes the item you want to select.

![Construction](checkbox/construction-5802-776.png)

_Figure: A checkbox component with the label "Checkbox Label". Callout 1 points to the checkbox itself, which is in a checked state. Callout 2 points to the label "Checkbox Label", which describes the item to be selected._

#### States

1. **Checkbox unchecked** A checkbox input indicating the appropriate state.
1. **Checkbox checked** Multiple checkboxes can be activated at the same time
1. **Checkbox indeterminate** In case the underlying checkbox group are a mixed checked and unchecked

![States](checkbox/states-1309-3095.png)

_Figure: Three states of a checkbox component labeled "Checkbox Label." Callout 1 points to an unchecked checkbox, callout 2 points to a checked checkbox, and callout 3 points to an indeterminate checkbox. Each checkbox illustrates different states: unchecked, checked, and indeterminate, respectively._

### Alignment

Align the checkbox and text to the top.

![Alignment](checkbox/alignment-1310-9552.png)

_Figure: A checkbox component with the label "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." The checkbox and text are aligned to the top. This example is marked as a "Do" because it correctly aligns the checkbox and its accompanying text to the top, adhering to the design system's guidelines._

Do not align the text to the center.

![Alignment](checkbox/alignment-1310-4331.png)

_Figure: A checkbox component with the label "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." The text is centered next to the checkbox. The example is marked as a "Don't" because it demonstrates incorrect alignment; the text should not be aligned to the center._

### Sizing

#### Maximum width of text container

To ensure good readability the maximum width should not exceed 544px (based on font size: 16px\*34em = 544px).

[Typography →](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515)

![Maximum width of text container](checkbox/maximum-width-of-text-container-5802-3311.png)

_Figure: A checkbox component with a text container that has a maximum width of 544 pixels. The text next to the checkbox reads "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." This maximum width is recommended to ensure good readability, based on a font size calculation of 16px multiplied by 34em. The checkbox is in the default state, unchecked, not indeterminate, and not invalid. The example is marked as a "Do" because it adheres to the recommended maximum width for readability._

Do not exceed 544px, even when the module or grid is wider.

![Maximum width of text container](checkbox/maximum-width-of-text-container-6124-6050.png)

_Figure: A "Don't" example of a Checkbox component within a text container. The text container exceeds 544px in width, which is not recommended even if the module or grid is wider. The text inside the container is a sample "Lorem ipsum" text, and the measurement "greater than 544px" indicates the width of the text container that should not be exceeded._

## Content and Assets

### Single checkbox

A single checkbox can be used for e.g.

- accepting a privacy policy
- newsletter subscription
- remembering login credentials

![Single checkbox](checkbox/single-checkbox-1310-4511.png)

_Figure: A single checkbox component in its default state, which is unchecked, not indeterminate, and not invalid. The checkbox has a label that reads "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." The checkbox can be used for actions such as accepting a privacy policy, subscribing to a newsletter, or remembering login credentials._

### Overflow behaviour

Keep labels concise to minimize text overflow. If overflow does occur, align the chexkbox with the first line of the label text.

![Overflow behaviour](checkbox/overflow-behaviour-36292-38511.png)

_Figure: A checkbox component with a long label text that overflows. The checkbox is aligned with the first line of the label text, which reads "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." The checkbox is in the default state, unchecked, not indeterminate, and not invalid. The text next to the figure advises keeping labels concise to minimize text overflow._

## Behavior

### System feedback

In case of an error message being displayed, the error messages is styled the same as for the input field error message.

The error message should be **aligned with the checkbox.**

![System feedback](checkbox/system-feedback-1319-873.png)

_Figure: A checkbox component with a long label "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." The checkbox is in a default state, unchecked, and not indeterminate, but marked as invalid. An error message labeled "System Feedback Message" is aligned with the checkbox, styled similarly to input field error messages._

### Click behavior

Click area: the label must be clickable and trigger the activation.

![Click behavior](checkbox/click-behavior-1310-5313.png)

_Figure: The click behavior of checkbox components in the STIHL Design System. It shows two checkboxes: one labeled "Checkbox Label" in the checked state and another with a longer label starting with "Lorem ipsum dolor sit amet" in the unchecked state. The figure indicates that the label of each checkbox is clickable and triggers the activation of the checkbox._

## Currently used variations ⚠️ The following examples are not part of the code component

### Product tiles in a list view

The checkbox is always left-aligned in a list view. Due to the images the checkboxes are centered vertically.

### Filter

To filter a results list, the user can select different values. Depending on the use case, selecting a value is activated instantly or is set through an extra button to confirm. E.g. “apply filter” or “show results”.

This examples show a dropdown for desktop and the mobile version in a modal.

[Dialog →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

![Filter](checkbox/filter-1310-7153.png)

_Figure: Two variants of a filter component using checkboxes: one for desktop with a dropdown menu and one for mobile within a modal. The desktop variant is labeled "Select" with a dropdown showing "Category (3)" and several checkbox options including "Air filters", "Carrying rings", "Blow tubes", "Grass hear and and shrubs hear blades", "Lawn mower blades", "Chainsprocktet blades", and "Filter covers". The mobile variant shows the same options in a modal with a "Show results (34)" button at the bottom. The text mentions that selecting values can either be activated instantly or confirmed through a button like "apply filter" or "show results"._

## Checkbox Group

Overview:

- Use checkboxes when multiple items can be selected. Use a[ Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728), when only one item can be selected.
- A checkbox group can be aligned horizontally if there are 3 or less checkboxes, otherwise align vertically.

![Checkbox Group](checkbox/checkbox-group-5596-5885.png)

_Figure: Different layouts and states of a Checkbox Group component. It shows two main layouts: vertical and horizontal, with the vertical layout containing multiple Checkbox Labels stacked vertically and the horizontal layout containing three Checkbox Labels aligned horizontally. The figure also demonstrates the invalid state of the Checkbox Group, where the checkboxes are outlined in red and accompanied by a System Feedback Message._

> **Figma Slots in this component** This component supports Figma slots, which allow specific areas to be flexibly populated with your own content. You can find more information on how to use and customize slots in the official Figma documentation. [**Go to the Figma guide**](https://help.figma.com/hc/en-us/articles/38231200344599-Create-and-use-slots-to-build-flexible-components-in-Figma-Design)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-checkbox-group--documentation)

Decision tree

### Related elements

[Input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

[Switch](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=513-2)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Checkbox group

1. **Checkbox group legend:** groups a set of checkboxes in form of a sentence or a question
1. **Checkbox group hint (optional):** provides guidance or further context or clarity for making a selection.
1. **Info Button (optional):** Can be used to trigger a popover with additional information
1. **System feedback:** error or success message to help the user understand
1. **Checkbox:** recognizable click element

![Checkbox group](checkbox/checkbox-group-5665-767.png)

_Figure: A vertical layout of a Checkbox group component, showcasing various elements and states. Callout 1 points to the Checkbox Group Legend, which groups a set of checkboxes. Callout 2 indicates the Checkbox group hint, providing additional context for making a selection. Callout 3 highlights the optional Info Button, which can trigger a popover with extra information. Callout 4 shows the System feedback message, which helps users understand errors or successes. Callout 5 points to individual Checkboxes, recognizable click elements within the group._

### Direction

#### Horizontal

In case the amount of checkbox is (below) 3 and the copy is short, consider a horizontal direction.

![Horizontal](checkbox/horizontal-5665-780.png)

_Figure: A horizontal layout of a checkbox group component labeled "Checkbox Group Legend." It includes three checkboxes, each with the label "Checkbox Label," arranged horizontally. One of the checkboxes is checked. The layout is recommended for cases where the number of checkboxes is below three and the text is short._

#### Vertical

In case of longer copy, use vertical direction.

![Vertical](checkbox/vertical-5665-788.png)

_Figure: A vertical layout of a checkbox group component. The component includes a legend labeled "Checkbox Group Legend," a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.," and three checkboxes with labels. The checkboxes are aligned vertically to accommodate longer copy._

## Content and Assets

The use of checkbox groups is very versatile, examples are:

- add custom choices
- set interests for news updates
- available time slots

![Content and Assets](checkbox/content-and-assets-5665-1018.png)

_Figure: A vertical checkbox group component labeled "Checkbox Group Legend" with a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." There are five checkboxes, each labeled "Checkbox Label," with two of them checked and three unchecked. The layout is vertical, and the component includes a legend and hint text above the checkboxes._

### Content design

Use uniform styling and formatting for all labels, in order for the user to scan easily through a long list.

E.g. format the first words bold, following by an ‘:’.

![Content design](checkbox/content-design-14930-8871.png)

_Figure: A checkbox-group component with a vertical layout, labeled "Which of the following characteristics do you believe contribute significantly to the creation of your garden?" and a hint "Select all that apply." The labels for each checkbox follow a consistent format where the first words are bold and followed by a colon. The example is marked as a "Do" because it uses uniform styling and formatting for all labels, making it easy for users to scan through the list. The checkboxes include options such as "Plant Diversity," "Design and Layout," "Functional Areas," "Water Features," and "Wildlife Attraction," each with a descriptive phrase._

### Mixed label lengths

Don’t mix long and short checkbox labels.

![Mixed label lengths](checkbox/mixed-label-lengths-14930-8911.png)

_Figure: A checkbox group with the legend "Checkbox Group Legend" and multiple checkboxes with varying label lengths. The example is marked as a "Don't" because it mixes short checkbox labels like "Checkbox Label" with long labels such as "Checkbox Label: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna." This is considered incorrect because it creates inconsistency in the UI design._

### Info Button

A button to trigger a popover can be placed next to input or select labels to provide **additional contextual information.**

Popover content should be **limited to supplementary, non-critical information** — for example, brief explanations, examples, or guidance that supports user understanding without being essential for task completion.

![Info Button](checkbox/info-button-39621-8498.png)

_Figure: A checkbox-group component with a vertical layout and an info-button next to the legend labeled "Product name." The info-button, when hovered over, triggers a popover that contains illustrations and text explaining where to find the product name. The checkbox-group includes options labeled "FSA 45," "FSA 50," "FSA 70," and "FSA 135," with a cursor type of pointer indicating interactivity. The popover content provides supplementary information to aid user understanding._

**Don’t use the popover for critical or required information**, use the hint instead as critical information should net be hidden

For mor Guidance on this topic see the [Popover documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=35223-10505)

![Info Button](checkbox/info-button-39621-8516.png)

_Figure: A "Don't" example of a checkbox group with a popover. The checkbox group has the legend "Product name" and includes options "FSA 45", "FSA 50", "FSA 70", and "FSA 135". The popover is positioned below the info button next to the legend and contains a hint that says "Choose the Name". The example is marked as incorrect because it uses a popover for information that should not be hidden; instead, a hint should be used for critical or required information._

## Behavior

### System feedback

In case of an error message being displayed, the error messages is styled the same as for the input-filed error message.

Feedback often applies to the full list, instead to one single check box.

The error message should be **aligned with the checkbox.**

[Text Input→](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2)

![System feedback](checkbox/system-feedback-5665-1294.png)

_Figure: A checkbox group component with the legend "Checkbox Group Legend" and a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." The checkbox group is in an invalid state, displaying an error message "Choose at least 1 item in the list" aligned with the checkboxes. The layout is vertical, with three checkboxes listed below the error message. Each checkbox has the label "Lorem ipsum dolor sit amet, consectetur adipiscing._

### Radio Button vs. Checkbox

If a user can only select only one option from a list, radio buttons should be used instead of checkboxes.

Checkboxes allow the user to select multiple items in a set, whereas radio buttons allow the user to select only one option. **DO** Use radio buttons when **only one** item can be selected. **DO** Use checkboxes when **multiple** items can be selected

[Radio Buttons→](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

![Radio Button vs. Checkbox](checkbox/radio-button-vs-checkbox-5665-1332.png)

_Figure: A vertical layout of a radio-group component with the legend "Radio Group Legend" and a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." There are four radio buttons labeled "Radio Label," with one selected. This is a "Do" example illustrating the correct use of radio buttons when only one option can be selected from a list. The radio-group is shown with the title not displayed._

![Radio Button vs. Checkbox](checkbox/radio-button-vs-checkbox-5665-1337.png)

_Figure: A checkbox group component with the legend "Checkbox Group Legend" and a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." The checkboxes are arranged vertically, with four checkboxes labeled "Checkbox Label," three of which are checked. The example is marked as a "Do" example, indicating it is a correct implementation._

### Click area

The label must be clickable and trigger the activation.

![Click area](checkbox/click-area-14930-8797.png)

_Figure: A vertical layout of a checkbox group component with the legend "Checkbox Group Legend" and a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." There are four checkboxes, each labeled "Checkbox Label," with one unchecked and three checked. The click area includes the label, which must be clickable to trigger the activation._

## Currently used variations ⚠️ The following example is not part of the code component

### Horizontal + vertical

In case the amount of checkboxes is high and the copy is short, consider a horizontal direction for columns.

![Horizontal + vertical](checkbox/horizontal-vertical-5698-11629.png)

_Figure: A checkbox group component with a horizontal layout. The checkbox group has a legend labeled "Checkbox Group Legend" and a hint text that reads "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." There are nine checkboxes, each with the label "Checkbox Label," showing different states: some are checked, some are unchecked, and one has a system feedback indicator. The layout is organized in a grid with three columns and three rows, demonstrating how checkboxes can be arranged horizontally when there are many checkboxes and short copy._
