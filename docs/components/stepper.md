---
id: stepper
title: Stepper
category: component
importNames:
  - DSStepper
package: "@stihl-design-system/components"
keywords:
  - stepper
  - wizard
  - progress steps
  - multi step
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 26075:10497
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:49:58.500Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-10497
---

# Stepper

## Stepper

- Visualizes a multi-step process (3–6 steps) and shows current, completed, and upcoming steps.
- Guides users through tasks in a defined order with clear progress feedback.
- Best for long forms, onboarding, checkouts, or processes where validation is needed before continuing.
- Avoid using for fewer than 3 steps, non-linear/reorderable flows, or processes with changing step counts.

![Stepper](stepper/stepper-38478-3834.png)

_Figure: Shows step\_1 (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=horizontal); step\_2 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); step\_3 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); step\_4 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); step\_5 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); step\_6 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); step\_1 (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=vertical); step\_2 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical); step\_3 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical); step\_4 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical); step\_5 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical); step\_6 (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical). Text in the figure: "Main Component", "Horizontal", "Vertical", "1", "Label", "Hint opt.", "2", "3", "4", "5", "6"._

![Stepper](stepper/stepper-39102-23480.png)

_Figure: Shows step-inidcator (number=1, status=incomplete); step-inidcator (number=1, status=current); step-inidcator (number=1, status=complete). Text in the figure: "Building Blocks", "Step Indicator", "1", "Steps", "Alignment: horizontal", "Alignment: vertical", "enabled", "hover", "focus", "Label", "Hint opt.", "incomplete", "current", "Min width 128px", "completed"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-notification--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

### Related elements

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

[Input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=1591-2)

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=7251-8)

[Tabs](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=24564-312)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Steps

Steps are the core building blocks of the Stepper. Each step combines visual indicators and descriptive text to communicate progress, provide context, and guide users through the process.

1. **Indicator** Displays the number of steps and visually communicates the status of each step.
1. **Label** A short, descriptive title that identifies the step.
1. **Hint (optional)** Provides additional context or guidance for the step, or summarizes a user’s selection.
1. **Step Line** A visual element that sits above each step, to indicate progress and reflect the status of individual steps.

![Steps](stepper/steps-39030-15018.png)

_Figure: Shows annotation-circle (number=2, type=top, color=blue); annotation-circle (number=1, type=top, color=blue); annotation-circle (number=4, type=right, color=blue); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=vertical); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=4, type=left, color=blue). Callouts 1, 2, 3, 4. Text in the figure: "horizontal", "vertical", "1", "Label", "Hint opt."._

#### Stepper

The stepper serves as the container that groups all individual step elements. It visually connects the steps and communicates progress through their arrangement. Two orientation variants are available:

1. **horizontal**
1. **vertical**

allowing the component to adapt to different viewports and use cases.

![Stepper](stepper/stepper-38478-3914.png)

_Figure: Shows annotation-circle (number=1, type=left, color=blue); stepper (orientation=horizontal); stepper (orientation=vertical). Callouts 1. Text in the figure: "1", "Label", "Hint opt.", "2", "3", "4", "5", "6"._

#### Pattern

The Stepper component doesn’t manage the entire flow on its own.

Each step must include:

1. **Stepper component**
1. **Content Placeholder**
1. **Step Control** (Button Group e.g., “Next” or “Back”)

The step controls handle step progression and validation, and are also an accessibility requirement, ensuring that keyboard and assistive technology users can move through the process.

![Pattern](stepper/pattern-39095-22140.png)

_Figure: Shows stepper (orientation=horizontal); button (button text=Back, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Next, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=left, color=blue); annotation-circle (number=3, type=left, color=blue); annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); stepper (orientation=vertical); button (button text=Button, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Callouts 1, 2, 3. Text in the figure: "horizontal", "1", "Label", "Hint opt.", "2", "3", "❖ Placeholder", "Back", "Next", "vertical", "Button"._

### State & Status

Each step in the Stepper has two distinct layers of visual feedback:

- **Interaction State:** How the step responds to user interactions (e.g., hover).
- **Step Status:** Where the step sits in the overall process (e.g., completed).

These layers work together to provide clear guidance and feedback.

#### Interaction States

Similar to button behavior, each step can display the following interaction states:

1. **Enabled** Default interactive state.
1. **Hover / Pressed** Visual feedback when a user hovers over or clicks the step.
1. **Focus** Indicates the step is currently focused.

> In code, the disabled state is implemented and used for the Incomplete status (see below). In Figma, a disabled state is intentionally omitted to reduce component complexity and prevent redundant property configurations.

![Interaction States](stepper/interaction-states-38478-5049.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); annotation-circle (number=3, type=top, color=blue); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=enabled, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=hover, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=focus, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=enabled, orientation=vertical); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=hover, orientation=vertical); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=focus, orientation=vertical). Callouts 1, 2, 3. Text in the figure: "Label", "Hint opt.", "horizontal", "vertical"._

#### Step Status

Each step also reflects its role in the overall flow using one of the following statuses:

1. **Incomplete** The step has not yet been started.
1. **Current** The step the user is currently on.
1. **Completed** The step has been successfully finished.

![Step Status](stepper/step-status-38478-5062.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); annotation-circle (number=3, type=top, color=blue); steps (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=enabled, orientation=horizontal); steps (label=Label, hint=Hint opt., ℹ️ show hint, status=incomplete, state=enabled, orientation=vertical); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=vertical); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=completed, state=enabled, orientation=vertical). Callouts 1, 2, 3. Text in the figure: "1", "Label", "Hint opt.", "horizontal", "vertical"._

### Orientation

The Stepper supports two layout orientations:

1. **Horizontal Orientation** Use a horizontal stepper when conserving vertical space is important. Best suited for shorter processes with fewer steps that can be displayed side by side.
1. **Vertical Orientation** Choose a vertical stepper when vertical space is available. This orientation is ideal for smaller screens, longer labels, or more complex flows with several steps.

> Whenever possible, prefer the vertical layout for improved flexibility and readability.

![Orientation](stepper/orientation-38478-3942.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); stepper (orientation=horizontal); annotation-circle (number=2, type=center, color=blue); stepper (orientation=vertical). Callouts 1, 2. Text in the figure: "1", "Label", "Hint opt.", "2", "3", "4", "5", "6"._

### Sizing

#### Horizontal Orientation

1. **Stepper**
- **Width:** Fixed (aligned to grid)
- **Height:** Hug contents
1. **Step:**
- **Width:** Fill container — min. 128 px
- **Height:** Hug contents — min. 46 px, max. 104 px

![Horizontal Orientation](stepper/horizontal-orientation-38478-5074.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); stepper (orientation=horizontal). Callouts 1, 2. Text in the figure: "Stepper Width: fixed (aligned to Grid)", "Stepper Height: hug contents", "1", "Label", "2", "3", "Step Height: hug contents min. 46px max. 104px", "Step Width: fill container min. 128px"._

#### Vertical Orientation

1. **Stepper**
- **Width:** Fixed (aligned to grid)
- **Height:** Hug contents
1. **Step:**
- **Width:** Fill container — min. 128 px, max. 312 px
- **Height:** Hug contents — min. 52 px, max. 96 px

![Vertical Orientation](stepper/vertical-orientation-38478-5111.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); stepper (orientation=vertical). Callouts 1, 2. Text in the figure: "Stepper Width: fixed (aligned to Grid)", "Stepper Height: hug contents", "1", "Label", "2", "3", "Step Height: hug contents min. 52px max. 96px", "Step Width: fill container min. 128px max. 312px"._

### Spacing

#### Distance

Regardless of orientation, the spacing between individual stepper elements is set to **4 px.**

![Distance](stepper/distance-38864-14420.png)

_Figure: Shows stepper (orientation=horizontal); stepper (orientation=vertical). Measurements: 6px. Text in the figure: "1", "Label", "2", "3", "horizontal", "vertical"._

### Placement

#### Stepper above the Content

Both **Horizontal and Vertical Steppers** can be placed above the content depending on breakpoints.

1. **Horizontal Stepper** for Desktop and Tablet
1. **Vertical Stepper** for Mobile
1. **Vertical Stepper** within an Accordion for Mobile

Placing the stepper above the content follows the natural reading flow and is recommended for flows with fewer than four steps.

![Stepper above the Content](stepper/stepper-above-the-content-38918-14928.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3, type=center, color=blue). Callouts 1, 2, 3._

#### Stepper beside the Content

Only the **Vertical Stepper** can be placed beside the content.

1. **Left side (default):** Place the stepper to the left of the content area to preserve natural reading order and maintain consistency across responsive breakpoints.
1. **Right side:** Use only when layout constraints require the main content or form to occupy the left column.

Placing the stepper beside the content works well when a persistent overview of all steps is needed, especially in desktop layouts with ample horizontal space or more than four steps.

![Stepper beside the Content](stepper/stepper-beside-the-content-39026-14604.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue). Callouts 1, 2._

#### Placement of Stepper within the Grid

Both stepper variants — **Horizontal (1) and Vertical (2)** — can be placed freely within the grid and span the number of columns required by the layout.

Choose the number of columns carefully — ensure lthe Stepper has sufficient space to remain clear, well-structured, and easy to scan.

![Placement of Stepper within the Grid](stepper/placement-of-stepper-within-the-grid-39207-17402.png)

_Figure: Text in the figure: "1a", "1b", "2a", "2b"._

#### Placement of Step Controls (Button Group)

The step controls are always placed below the content, with the **Next button on the right** and the **Back button on the left**.

This serves as the recommended guideline but may be adjusted as needed to suit specific layouts.

![Placement of Step Controls (Button Group)](stepper/placement-of-step-controls-button-group-39207-17653.png)

_Figure: Text in the figure: "Back", "Next"._

### Alignment

#### Aligned Left

When placed above, the content should always be aliged left with the content

![Aligned Left](stepper/aligned-left-38918-13809.png)

## Behavior & Usage

### Buttons

Steps in the Stepper are implemented as buttons (using variants of the action item). They are intended to transition between steps without leaving the current context and should **not**:

- Link to a different page
- Trigger a change in the URL

The Stepper is designed to guide users through a process within the same interface, keeping the user experience focused, seamless, and consistent.

![Buttons](stepper/buttons-38478-5320.png)

_Figure: Shows steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=horizontal); steps (hint=Hint opt., label=Label, ℹ️ show hint, status=current, state=enabled, orientation=vertical). Text in the figure: "1", "Label", "Hint opt."._

### Process

#### Linear Flow

The Stepper supports a linear process, guiding users through steps in a defined order.

1. **Following steps** are locked until the current step is completed, ensuring users progress forward as intended.
1. The **Next button** allows users to proceed to the next step once all requirements of the current step are fulfilled.
1. **Previous steps** remain accessible, allowing users to navigate back and make changes if necessary — including skipping to an earlier step if needed.
1. The **Back button** enables users to return one step at a time.

This approach ensures a controlled forward progression while maintaining the flexibility to return to earlier steps for review or correction.

![Linear Flow](stepper/linear-flow-38478-5344.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=3, type=top, color=blue); stepper (orientation=horizontal); cursor (type=not-allowed); cursor (type=pointer); button (button text=Next, variant=filled, state=hover / pressed, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Back, variant=outline, state=hover / pressed, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Next, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); annotation-circle (number=2, type=bottom, color=blue); annotation-circle (number=4, type=bottom, color=blue). Callouts 1, 2, 3, 4. Text in the figure: "1", "Current step", "2", "Following Step", "3", "Previous Step", "❖ Placeholder", "Next", "Back"._

#### Initial State

When the Stepper is first displayed, the first step should be set to **“current”** by default.

This clearly indicates the starting point and provides a consistent entry for user navigation.

![Initial State](stepper/initial-state-39065-16884.png)

_Figure: Shows stepper (orientation=horizontal). Text in the figure: "1", "Current step", "2", "Following Step", "3"._

**Validation**

#### Current Step Validation

Validation occurs when the user selects the Next button to move to the following step. If errors are detected in the current step — such as missing or invalid input — the step cannot be marked as complete. All validation and error handling take place within the corresponding fieldset or form.

![Current Step Validation](stepper/current-step-validation-39066-14525.png)

_Figure: Shows top-bar (grid variant=full, breakpoint=xl, brand add-on=false, number areas=1); stepper (orientation=horizontal); notification (type=error, icon=True); building-element-radio (label=Mr., label, type=label, state=enabled, checked=true, invalid=false); building-element-radio (label=Mrs., label, type=label, state=enabled, checked=false, invalid=false); building-element-radio (label=other, label, type=label, state=enabled, checked=false, invalid=false); input (hint=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget., label=Name\*, system feedback, input, size=medium, state=enabled, invalid=true); input (system feedback, hint=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget., label=Phone number (optional), input, size=medium, state=enabled, invalid=false); button (button text=Back, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Next, variant=filled, state=disabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Secure Checkout-Process", "1", "Details", "2", "Payment", "3", "Confirmation", "Please fill in all mandatory information", "Title\*", "Mr.", "Mrs.", "other", "Name\*", "System feedback message", "Phone number (optional)", "Back", "Next"._

### Responsive behavior

#### Stepper above content

The horizontal Stepper adapts to available screen space and adjusts its layout based on breakpoints:

1. **Breakpoints XL & L (Desktop):** The Stepper is displayed horizontally and positioned above the content area.
1. **Breakpoint M (Tablet):** The Stepper remains horizontal and is positioned above the content. If all steps do not fit within the available width, overflow buttons appear to allow horizontal scrolling.
1. **Breakpoint S (Mobile):** The Stepper switches to a stacked layout and remains above the content. It may appear as a **standard vertical Stepper (a)** or be placed **inside a sticky accordion (b)** (see below for details).

![Stepper above content](stepper/stepper-above-content-39065-17223.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3a, type=center, color=blue); annotation-circle (number=3b, type=center, color=blue). Callouts 1, 2. Text in the figure: "3a", "3b"._

#### Stepper beside content

The vertical Stepper maintains a consistent orientation but adjusts its placement based on screen size:

1. **Breakpoints XL & L (Desktop):** The Stepper is displayed vertically and placed beside the content area — either to the left or right, depending on the layout.
1. **Breakpoint M (Tablet):** The Stepper remains vertical but is repositioned above the content to conserve horizontal space.
1. **Breakpoint S (Mobile):** The Stepper stays vertical and is placed above the content, ensuring all steps remain visible and accessible. As with the horizontal layout, it can appear as a **standard vertical Stepper (a)** or be nested **within a sticky accordion (b)** (see below).

![Stepper beside content](stepper/stepper-beside-content-39066-16793.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3a, type=center, color=blue); annotation-circle (number=3b, type=center, color=blue). Callouts 1, 2. Text in the figure: "3a", "3b"._

#### Stepper in an Accordion

On smaller breakpoints, where the vertical Stepper is placed above the content, embedding the Stepper inside a sticky Accordion component can help conserve space while keeping the steps easily accessible.

**This pattern is useful when:**

- The page is long, and users would otherwise need to scroll back up to access the Stepper.
- The steps should remain visible as users progress (sticky behavior).

**In this configuration:**

- The Accordion can be expanded by the user to view and navigate between steps.
- The Accordion summary should display the current step label.
- The Accordion hint should communicate progress, such as: “Step 2 of 5”.

This approach ensures that the Stepper remains accessible without taking up excessive screen space.

> **Note:** This is not a standalone Stepper variant. It is a composite pattern and is not provided as a coded component.

![Stepper in an Accordion](stepper/stepper-in-an-accordion-38478-5325.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=s, brand add-on=false, number areas=1); accordion-single (hint=\[object Object\], children=\[object Object\], hint, state=enabled, size=medium, expansion-indicator=right, expanded=false, flush=false); steps (hint=Hint opt., label=Fläche, status=completed, state=enabled, orientation=vertical); steps (hint=Hint opt., label=Steigung, status=current, state=enabled, orientation=vertical); steps (label=Hindernisse, hint=Hint opt.); steps (label=Bedienung, hint=Hint opt.); steps (label=Empfehlung, hint=Hint opt.); steps (label=Installation, hint=Hint opt.). Text in the figure: "Label", "2. Steigung", "Schritt 2 von 6", "Bild zu klein - mobile", "Warum fragen wir nach der Maximalfläche?", "Die iMOW® Mähroboter-Modelle sind für unterschiedliche Flächenleistungen ausg...", "Fläche", "2", "Steigung", "3", "Hindernisse", "4", "Bedienung", "5", "Empfehlung", "6", "Installation", "¡Mow® Berater ƒ", "1.", "0 - 250 m²", "250 - 500 m²", "500 - 750 m²", "750 - 1000 m²", "1000 - 1500 m²"._

## Accessiblity

### Focus order

When the Stepper is opened via keyboard interaction, focus is automatically placed on the **first focusable element.**

Focus then moves in a logical sequence:

- **Left to right** for horizontal orientation **(1-4)**
- **Top to bottom** for vertical orientation **(1-4)**

This ensures a predictable and accessible navigation experience for keyboard users.

![Focus order](stepper/focus-order-38488-8220.png)

_Figure: Shows stepper (orientation=horizontal); stepper (orientation=vertical); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=1, type=bottom, color=blue); annotation-circle (number=2, type=bottom, color=blue); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=4, type=bottom, color=blue); annotation-circle (number=2, type=left, color=blue); annotation-circle (number=3, type=left, color=blue); annotation-circle (number=4, type=left, color=blue). Callouts 1, 2, 3, 4. Text in the figure: "horizontal", "vertical", "Label", "Hint opt.", "4", "5", "6"._

### Keyboard Navigation

#### Keyboard Navigation

Users can interact with the Stepper using the following keyboard actions:

- **Open** the Step by pressing **“Space”** or **“Enter”**.
- **Navigate forward** to the next focusable element with **“Tab”**.
- **Navigate backward** to the previous focusable element with “**Shift + Tab”**

![Keyboard Navigation](stepper/keyboard-navigation-38488-8250.png)

_Figure: Shows stepper (orientation=horizontal). Text in the figure: "Space", "Enter", "Open Step with:", "or", "Label", "Hint opt.", "4", "5", "6", "Tab", "Move to next focusable element:", "Shift", "Move to previous focusable element:", "+"._

### Step Controls (Button Group)

**The Stepper should not be the only way to navigate through a multi-step process.** To ensure accessibility and usability.

Provide **additional Step Controls** within the content area, **such as a Button Group.**

This ensures that all users, including those relying on screen readers or keyboard navigation, can move through the process without relying solely on the stepper.

![Step Controls (Button Group)](stepper/step-controls-button-group-38488-8706.png)

_Figure: Shows stepper (orientation=vertical); button (button text=Back, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Next, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "1", "Label", "Hint opt.", "2", "3", "❖ Placeholder", "Back", "Next"._

## Examples

### Checkout Process

Example of the new version of the stepper guides users through the checkout flow, making each stage— such as shipping, payment, and confirmation — clear and trackable.

![Checkout Process](stepper/checkout-process-38478-4252.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=l, brand add-on=false, number areas=1); stepper (orientation=horizontal); local/page header (Viewport=desktop); Local/address form (state=default, version=desktop); local/button bar (button grouping=step 1). Text in the figure: "Secure Checkout-Process", "1", "Address", "2", "Payment", "3", "Confirmation", "Address information", "ƒ", "Billing Address", "I am a business customer.", "Title (optional)", "Mr.", "Mrs.", "Other", "Not specified", "First name\*", "Last name\*", "Country\*", "Postal code\*", "City\*", "Street and house number\*", "Please enter a valid street name with a maximum of 35 characters. Please note...", "Addition to address (optional)"._

### Product Advisors

Example how the stepper could be adapted in product advisor tools, helping users progress through a guided sequence of questions and recommendations while showing how many steps remain.

![Product Advisors](stepper/product-advisors-38478-4262.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); breadcrumb (expanded=true); steps (hint=250 - 500 m², label=Area, ℹ️ show hint, status=current, state=enabled, orientation=vertical); steps (label=Slope, hint=Hint option.); steps (label=Obstacles, hint=Hint option.); steps (label=Operation, hint=Hint option.); steps (label=Recommendation, hint=Hint option.); steps (label=Installation, hint=Hint option.); buttons (Property 1=text + icon right); radio (state=off); radio (state=on). Text in the figure: "Search Site", "Contact", "Dealer", "Wishlist", "3", "Cart", "STIHL World", "Login", "Products", "Accessories", "Professionals", "Advice", "Support", "Home", "/", "Product Advisors", "iMow Advisor", "1", "Area", "250 - 500 m²", "2", "Slope", "Obstacles", "4"._

## Content and Assets

### Number of steps

A Stepper should contain

- **a minimum of 3 steps** Fewer than three steps do not require a Stepper, as the process is too short.
- **a maximum of 6 steps** More than six steps can overwhelm users and should be divided into smaller processes or grouped into sections.

![Number of steps](stepper/number-of-steps-38478-5386.png)

_Figure: Shows stepper (orientation=horizontal). Text in the figure: "1", "Label", "Hint opt.", "2", "3", "4", "5", "6"._

### Label Wording

Keep step labels short, clear, and action-oriented — **ideally one to two words.**

Labels should describe the step’s purpose at a glance (e.g., Details, Payment, Confirmation).

Avoid long phrases, punctuation, or unnecessary verbs to maintain readability and visual balance.

![Label Wording](stepper/label-wording-39030-15170.png)

_Figure: Shows stepper (orientation=horizontal). Text in the figure: "1", "Details", "2", "Payment Methods", "3", "Confirmation"._

### Maximum Character Count

1. **Step labels** should not exceed 25 characters and should fit within two lines maximum.
1. **Hints** should not exceed 48 characters (or equivalent short text) and should also be limited to two lines.

> Keeping text concise helps maintain alignment and prevents layout inconsistencies across breakpoints.

![Maximum Character Count](stepper/maximum-character-count-38478-4239.png)

_Figure: Shows stepper (orientation=horizontal). Text in the figure: "1", "Label with a max. 25 char.", "Hint with a maximum of 48 characters", "2", "Label", "Hint opt.", "3"._

### Overflow Behavior

When the number of steps exceeds the available horizontal space, the Scroller component is used to navigate between steps.

There is no overflow behavior in the vertical orientation.

![Overflow Behavior](stepper/overflow-behavior-38488-5564.png)

_Figure: Shows stepper (overflow-right, orientation=horizontal). Text in the figure: "1", "Label", "2", "3", "4", "5", "6"._

### Don’t truncate labels

Labels — especially in critical user flows such as transactions, deliveries, payments, or returns — should never be truncated.

Truncated text reduces clarity and can hinder understanding of the current step.

Whenever possible, allow labels to wrap to a second line rather than cutting off important information.

![Don’t truncate labels](stepper/don-t-truncate-labels-39030-15199.png)

_Figure: Don't example. Shows stepper (orientation=horizontal). Text in the figure: "1", "Lieferoptionen", "2", "Adressen", "3", "Zahlungsmethode", "4", "Überprüfen & Bezahlen"._

### Don’t use substeps

Do not nest or layer sub-steps within a Stepper.

Each step should represent a single, clear stage in the overall process.

![Don’t use substeps](stepper/don-t-use-substeps-38864-15842.png)

_Figure: Don't example. Shows stepper (orientation=vertical); steps (hint=Hint opt., label=2.1 Label, status=current, state=enabled, orientation=vertical); steps (label=2.2 Label, hint=Hint opt.); steps (label=2.3Label, hint=Hint opt.). Text in the figure: "Label", "2", "2.1 Label", "2.2 Label", "2.3Label", "3"._

### Don’t mix variants (with and without hint)

All steps within a Stepper should follow a consistent pattern — either all include hints, or none do.

If only one step requires additional explanation, place that information directly within the step’s content area instead of the Stepper itself.

> Edgecase: In certain flows (i.e. [product advisors](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=38478-4243)), hints may be used progressively to display a summary of user selections once a step is completed.

![Don’t mix variants (with and without hint)](stepper/don-t-mix-variants-with-and-without-hint-38882-14651.png)

_Figure: Don't example. Shows stepper (orientation=horizontal). Text in the figure: "1", "Label", "2", "Hint opt.", "3"._

### Don’t use redundant labels

Do not use redundant labels such as “Step 1”, “Step 2”, etc.

The Stepper’s visual structure already communicates order — labels should instead focus on **descriptive** names that clarify the purpose of each step (e.g Details, Payment Method and Condirmation

![Don’t use redundant labels](stepper/don-t-use-redundant-labels-39421-15638.png)

_Figure: Don't example. Shows stepper (orientation=horizontal). Text in the figure: "1", "Step 1", "2", "Step 2", "3", "Step 3"._

## Stepper: Pattern

- Patterns are provided for the Stepper component, designed to support a variety of use cases. These ready-to-use frames includes three key elements:
   - Stepper
   - Content Placeholder
   - Button Group (coming soon)
- These pattern promote consistency across implementations while allowing for easy customization and flexibility to suit specific needs.

![Stepper: Pattern](stepper/stepper-pattern-38918-14104.png)

_Figure: Shows stepper (orientation=horizontal); button (button text=Button, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); stepper (orientation=vertical); accordion-single (hint=\[object Object\], children=\[object Object\], hint, state=enabled, size=medium, expansion-indicator=right, expanded=true, flush=false). Text in the figure: "Above content / horizontal", "Above content / vertical", "Above content / Accordion", "1", "Label", "Hint opt.", "2", "3", "4", "5", "6", "❖ Placeholder", "Button", "Steps", "Step 1 of 6", "Beside content / vertical"._
