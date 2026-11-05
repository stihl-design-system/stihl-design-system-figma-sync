---
id: dialog
title: Dialog
category: component
importNames:
  - DSDialog
package: "@stihl-design-system/components"
keywords:
  - dialog
  - modal
  - overlay
  - confirmation
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 14115:4051
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:22:29.488Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051
---

# Dialog

## Dialog

Overview:

- Common use cases are confirmation dialog, form dialog, informational dialog and selection dialog.
- The dialog component is suited for tasks (use cases) that are closely connected to the main flow.
- The dialog size adjusts to the inserted content.
- Content overflow: header area and footer area are sticky, while the content area is scrolls.
- Ensure a clear hierarchy between the headline and content, so that the user can navigate quickly and move on.
- When on mobile 3 or more buttons, use small buttons to leave more space for the content area.
- When the dialog opens, focus should be set to the first actionable element.

### Component

![Component](dialog/component-14272-47797.png)

_Figure: A dialog component with two variants: one for desktop and one for mobile viewports. The desktop variant shows the header-dialog with a heading, close button, and footer-dialog with three buttons in a horizontal layout, both in normal and overflow states. The mobile variant shows the header-dialog with a heading, close button, and footer-dialog with three buttons in a vertical layout. The text "Overflow: false" and "Overflow: true" indicate the states of the dialog when content does not overflow and when it does, respectively._

#### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-dialog--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

Decision tree

#### Similar components

**Component**

**Trigger**

**Placement**

**Content**

**Intention**

**Tooltip**

Hover or focus of an interactive element

In proximity to the triggering element, non-modal

Text only

Provide short, contextual information or clarify unlabeled controls

**Popover**

Click or tap of an interactive element

In proximity to the triggering button, non-modal

Text, icon, image and interactive elements

Provide additional information or quick actions without leaving the current context

**Dialog**

Triggered by the system in response to user interaction

Center of the screen, with backdrop, modal

Text, icon, image and interactive elements

Confirm important actions, guide users through complex tasks, or temporarily block interaction to focus attention

**Toast**

Triggered by the system in response to user interaction

Bottom of the screen, non-modal

Text, icon, and optional dismiss button

Provide brief, lightweight feedback on user actions such as error or success.

**Notification**

Triggered by the system in response to events or interactions

Within the content area of the page, in relation to relevant elements

Text, icon, links and buttons

Deliver important updates or status messages that may require user attention or follow-up

#### Related elements

[Drawer](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=16282-9317)

[Combobox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=2659-3954)

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

[Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=8844-4923)

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=7251-8)

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=162-126)

[Tooltip](https://www.figma.com/design/HovZmjHiwxguawTWTO6ibS/DS-1085-Design-%7C-Web-%7C-Tootlip?node-id=36194-1244)

[Popover](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11456)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Custom header area**
1. **Custom content area (optional)**
1. **Custom footer area (optional)**
1. **Backdrop**

![Anatomy](dialog/anatomy-14272-47816.png)

_Figure: The layout of a Dialog component, highlighting its key areas. The numbered callouts point to the following parts: 1 indicates the Custom header area, 2 points to the Custom content area, 3 refers to the Custom footer area, and 4 indicates the Backdrop. The figure specifies that the content and footer areas are optional._

#### Figma component

Although technically a freely configurable slot, the figma components for **header area (1)** and **footer area (3)** provide a few options for common use case. The content area can be replaced with a **placeholder component (2)** that contain an additional text or image option.

Feel free to swap this with your own placeholder components or modules.

![Figma component](dialog/figma-component-15855-11099.png)

_Figure: A dialog component for desktop view with no overflow, featuring a header area, a content area, and a footer area. Callout 1 points to the header area labeled "Heading", callout 2 points to the content area with a "Placeholder" component, and callout 3 points to the footer area containing buttons labeled "Button". The header and footer areas offer configurable options for common use cases, while the content area can be replaced with custom placeholder components or modules._

### Sizing

#### Minimum width

The dialog adjusts to the width of the inserted content. Minimum size ist based on the smallest viewport size: 272px

![Minimum width](dialog/minimum-width-14272-47931.png)

_Figure: A dialog component in two different viewport sizes, illustrating the minimum width requirement. The measurement "min. 272px" refers to the smallest width that the dialog can adjust to, based on the content inserted and the viewport size. The dialog maintains this minimum width to ensure readability and usability across different devices._

#### Maximum width

The dialog adjusts to the width of the inserted content. It can’t exceed [content narrow area ](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)width.

**Minimum space between browser edge and dialog, left and right:**

- On bigger screens the distance is 40px.
- On smaller screens it is 24px.

![Maximum width](dialog/maximum-width-14741-8360.png)

_Figure: A dialog component in various screen sizes, illustrating its maximum and minimum width constraints. The measurement labeled "max. content narrow" indicates the maximum width of the dialog, which is determined by the width of the inserted content and cannot exceed the content narrow area width. The measurements labeled "min. 40px" and "min. 24px" refer to the minimum space between the browser edge and the dialog on bigger and smaller screens, respectively._

#### Maximum height

The dialog adjusts to the length of the inserted content. Content overflow may occur.

**Minimum space between browser edge and dialog, top and bottom:**

- On bigger screens the distance is 40px.
- On smaller screens it is 24px.

![Maximum height](dialog/maximum-height-15894-7760.png)

_Figure: The layout of a dialog component, showing its maximum height and minimum spacing from the browser edge. On larger screens, the minimum space between the dialog and the browser edge is 40px at the top and bottom. On smaller screens, this minimum space is 24px at the top and bottom._

#### Content overflow

- **The content area is scrollable.**
- Header area and footer area are sticky.
- Both header and footer get a border.

![Content overflow](dialog/content-overflow-16004-5948.png)

_Figure: The dialog component with content overflow, showing both desktop and mobile viewports. The content area is scrollable, while the header area and footer area remain sticky with borders. The desktop variant displays the header-dialog with a heading and close button, followed by scrollable text and an image, and a footer-dialog with three horizontally aligned buttons. The mobile variant shows a similar layout but with the footer-dialog buttons aligned vertically._

#### Placement

The content area can be various lengths and widths.

The dialog moves in from the top and is placed in the center of the viewport.

![Placement](dialog/placement-14272-47938.png)

_Figure: Two variants of a Dialog component in different viewport sizes. Both dialogs are centered within their respective viewports and positioned such that they move in from the top. The content area within each dialog can vary in length and width, maintaining central alignment._

### Motion

[Motion guidelines →](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?m=auto&t=4yiq5f9rjU14BQYJ-6)

#### Enter animation dialog

**Animation type:** move: in from top to center fade: opacity (0-100%) **Duration:** 400ms **Easing:** motion-functional-ease-out

#### Backdrop dimming

**Animation type:** move: in from top to center fade: opacity (0-100%) (color: black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-out

![Backdrop dimming](dialog/backdrop-dimming-14303-49206.png)

_Figure: The "Dialog" component with a focus on the "Backdrop dimming" section. It shows a dialog with a heading, a placeholder, and several buttons, demonstrating the animation of the drawer moving in from the top to the center while fading from 0% to 100% opacity. Additionally, the backdrop fades from 0% to 100% opacity with a color of black at 50%. The animation duration is 400ms with an easing type of motion-functional-ease-out._

#### Exit animation dialog

**Animation type:** move: out from center to top fade: opacity (100-0%) **Duration:** 400ms **Easing:** motion-functional-ease-in

#### Backdrop dimming

**Animation type:** fade: opacity (100-0%) (color black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-in

![Backdrop dimming](dialog/backdrop-dimming-14741-8365.png)

_Figure: A dialog component with backdrop dimming for a desktop viewport. The dialog includes a heading, a placeholder, and three buttons. The backdrop dimming animation fades from 100% to 0% opacity with a color of black 50%, lasting 400 milliseconds with motion-functional-ease-in easing. The drawer moves out from the center to the top while fading from 100% to 0% opacity._

## Content

### Hierachy

In most cases, the user’s task in the dialog disturbs the user-flow.

It is important to ensure a clear hierarchy, so that the user can navigate quickly and move on.

![Hierachy](dialog/hierachy-14884-5996.png)

_Figure: A dialog component with a header-dialog containing a heading "You will read this first," a close button, and a viewport for desktop. Below the heading, there is a placeholder with the text "And then you will read this line next." The footer-dialog includes two buttons labeled "Accept all" and "Cancel," arranged horizontally with the primary button positioned to the left. The layout emphasizes a clear hierarchy to guide the user's navigation through the dialog._

### Custom header area

#### Formatting examples

1. Heading L with topline
1. Uppercase is better suitable for large dialogs.
1. [Title component](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7-19) is better suitable for impactful and emotional headers.
1. Content icon placed left of the heading and subline.

![Formatting examples](dialog/formatting-examples-14272-47976.png)

_Figure: Formatting examples for a dialog component in a UI design system. It includes four numbered callouts: 1 points to a "Topline" with "Heading L," 2 points to "Heading M Uppercase," 3 points to a "Title Component," and 4 points to a "Heading L" with a content icon placed to the left of the heading and a "Subline." The text provides guidelines on when to use each formatting style, such as using uppercase for large dialogs and the title component for impactful headers._

#### Header as a message

Short messages can be placed completely in the header element. It adds visual clarity.

**When using the header as the main copy, the custom content area must remain empty.**

![Header as a message](dialog/header-as-a-message-14684-4630.png)

_Figure: A dialog component with the header as a message. The dialog contains a heading that reads, "Are you sure you want to add the “speech to Text” service to the node-test-app?" with a close button in the top right corner. The footer includes two buttons labeled "Add service" and "Cancel," arranged horizontally with the "Add service" button in the primary position on the left. The layout is shown for a desktop viewport._

### Custom content area

#### Long copy, input fields

Keep copy short, when in combination with a input field component or fieldset container.

[Input guidelines →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=1591-2)

[Fieldset guidelines →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

![Long copy, input fields](dialog/long-copy-input-fields-14515-4626.png)

_Figure: A "Don't" example of a dialog component with long copy and input fields. It includes a header-dialog with the heading "Case access" and a close button, two input fields labeled "Case ID" and "Password," and a footer-dialog with two buttons labeled "View case" and "Cancel." The example is marked as incorrect because it contains excessive text in combination with input fields, which goes against the guideline to keep copy short when used with input field components or fieldset containers._

#### Edge case: large content areas

The dialog follows the size of the content area.

Optimize the content and test edge cases like extra large and small screens.

Especially with images and iframe elements, like maps.

![Edge case: large content areas](dialog/edge-case-large-content-areas-14272-47982.png)

_Figure: A dialog component in an edge case scenario with a large content area, specifically an image of a machine labeled "Machine lorem ipsum." The dialog header includes a heading and a close button, and the viewport is set to desktop. The dialog adjusts its size to fit the content area, demonstrating how it handles large images within the component._

#### Edge case: columns

Add a column lay-out to the custom area if needed.

A few examples of possible layouts:

- 50/50
- 60/40
- 40/60
- 33/33/33

**Note:** In this use case contains a 50/50 column lay-out and the footer is left empty.

![Edge case: columns](dialog/edge-case-columns-15427-8109.png)

_Figure: A dialog component with a 50/50 column layout, featuring a product description on the right and an image on the left. The right column contains the heading "IMOW® 5," the price "1999,00 €," product details, and a button labeled "Zur Produktseite" with an outline variant, enabled state, medium size, and no icon. The header includes the text "Model lorem ipsum" and a close button. The footer is left empty._

### Custom footer area

#### Hierarchie: Button pairing

Consider the order and hierarchy, when pairing button styles. Read the extensive [alignment and pairing guidelines ](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=1883-9858&t=sVQWNMJR5xeiaak3-4)on buttons.

![Hierarchie: Button pairing](dialog/hierarchie-button-pairing-14272-48011.png)

_Figure: Button pairing in a UI design system, showing three buttons with different styles: a Filled button, an Outline button, and a Ghost button. The Filled button is black with white text, the Outline button is white with a black border and black text, and the Ghost button has black text with a right-facing icon. The buttons are arranged to demonstrate hierarchy and order, with the Filled button paired with the Outline button above and the Ghost button below._

#### Number of action buttons

1. If zero, the close icon is mandatory.
1. Ideally, use a close button, additionally to the buttons in the action area.
1. If needed, use more than 2 buttons in max 2 different styles.
1. In case of many buttons, combine inline links in the content area with the buttons in the action area.

![Number of action buttons](dialog/number-of-action-buttons-14272-47905.png)

_Figure: The dialog component with various configurations of action buttons. It shows four different dialog states: a confirmation message, a confirmation prompt with two buttons, a prompt with three buttons, and a detailed prompt with multiple buttons and inline links. Callout 1 points to a dialog with a confirmation message and a close button. Callout 2 points to a dialog with two action buttons: "Add service" and "Cancel." Callout 3 points to a dialog with three action buttons: "Add service," "Read details," and "Cancel." Callout 4 points to a detailed dialog with a heading, descriptive text, inline links..._

#### Button placement recommendation

1. Left aligned, together with the copy. Buttons are faster reached by eye and/or mouse.
1. Right alignment is common for dialogs with actions that proceed (e.g., "Next", "Submit")

![Button placement recommendation](dialog/button-placement-recommendation-15905-5959.png)

_Figure: Two layouts of a Dialog component, illustrating button placement recommendations. Callout 1 points to a dialog with left-aligned buttons together with the copy, while callout 2 points to a dialog with right-aligned buttons. The text explains that left alignment makes buttons faster to reach by eye and/or mouse, whereas right alignment is common for actions like "Next" or "Submit"._

#### Button placement warning

Do not center the button or paired buttons

![Button placement warning](dialog/button-placement-warning-14943-5487.png)

_Figure: A dialog component with a header-dialog containing the heading "Are you sure you want to add the “speech to Text” service to the node-test-app?" and a close button, and a footer-dialog with two horizontally aligned buttons labeled "Add service" and "Cancel." The "Add service" button is positioned to the left as the primary button. This example is marked as a "Don't" because it centers the buttons, which is not recommended according to the STIHL Design System guidelines._

**Exception: slider and pagination.** You may place the pagination in the center of the custom footer area.

![Button placement warning](dialog/button-placement-warning-14943-5481.png)

_Figure: A dialog component with a custom footer area. Within this footer, there is a centered pagination element. The text mentions an exception for slider and pagination, specifying that pagination can be placed in the center of the custom footer area._

**Mobile**

#### Stacked buttons

The buttons in the footer area should be stacked on mobile screens. The primary actions is in most cases at the top.

![Stacked buttons](dialog/stacked-buttons-15905-5964.png)

_Figure: A dialog component with stacked buttons in a mobile viewport. The dialog includes a header with a heading and a close button, a placeholder for text and an image, and a footer with three vertically stacked buttons. The primary action button is positioned at the top, followed by two secondary buttons. The text "Heading" and "Lorem ipsum dolor sit amet consectetur. Imperdiet fringilla aliquam libero he..." are placeholders within the dialog. The buttons are labeled "CTA"._

#### Small buttons

The footer area is sticky and can take up too much height.

**\< 3 buttons** Default button size allowed. Test the viewport in all browsers. otherwise consider the small button size

**3 buttons** Default and small buttons allowed.

**\> 4 buttons** When 4 or more buttons are needed, use small buttons. Also, consider placing inline links and buttons in the content area.

![Small buttons](dialog/small-buttons-15905-6740.png)

_Figure: A dialog component with a sticky footer containing small buttons. It shows three buttons in the footer area: one primary button with the text "CTA" in a filled variant, and two secondary buttons with the text "CTA" in an outline variant, all in a small size and enabled state. The text next to the figure indicates guidelines for using small buttons in the footer based on the number of buttons present._

## Behavior

### User interaction required

In case the user closes **(1)** the dialog, the exit animation is triggered immediately.

Closing the dialog by click on the backdrop **(2)** can be disabled. The default is enabled.

![User interaction required](dialog/user-interaction-required-14836-5570.png)

_Figure: A dialog component with a desktop viewport. It includes a header-dialog with a heading, a close button, and a footer-dialog with three buttons arranged horizontally. The numbered callout 1 points at the close button in the header-dialog. The numbered callout 2 points at the backdrop area outside the dialog. The text indicates that clicking the close button triggers an immediate exit animation, while closing the dialog by clicking on the backdrop can be disabled, but is enabled by default._

### Focus management

When the dialog opens, focus should be set to the first actionable element, typically the primary action button or the first input field **(1)**. It can also be the close icon.

![Focus management](dialog/focus-management-14272-48021.png)

_Figure: A dialog component titled "Case access" with a header-dialog containing the heading "Case access" and a close button, and a footer-dialog with two vertically aligned buttons labeled "View case" and "Cancel." The dialog includes two input fields labeled "Case ID" and "Case password." The numbered callout 1 points to the first input field labeled "Case ID," indicating that focus should be set to this element when the dialog opens._

### Loading state

In case data-heavy tasks are connected to the action, provide visual feedback, such as [the loading spinner within the button.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=1404-8289&t=sVQWNMJR5xeiaak3-4)

The other actions are disabled while submit is ongoing. The dialog does not close, while the submit is pending.

![Loading state](dialog/loading-state-14272-47830.png)

_Figure: A dialog component in the loading state, specifically for editing active time settings. The dialog includes a header with the title "Edit active time" and a close button, a main section with properties such as "Active time Every Thursday," "Start time," "End time," "Mowing zone," "Enable instance," and "Enable series," and a footer with three buttons: a disabled primary button, a "Cancel" button, and a "Delete active time" button. While the submit action is ongoing, the primary button shows a loading spinner, and other actions are disabled to provide visual feedback. The dialog remains open until the submit process is complete. The board is marked as a "Do" example..._

## Usage Guidelines

### Functionality & Priority

Components are chosen based on their level of urgency:

1. **Dialog** Highest urgency. Requires explicit user action before continuing. → [See Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

1. **Notification / Toast** Draws attention but does not block usage. Useful for immediate or transient feedback. → [See Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7251-8) → [See Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

1. **Banner** Persistent but non-blocking. Ideal for supporting information, promotions, or optional actions. → [See Banner](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7171-9055)

![Functionality & Priority](dialog/functionality-priority-40483-6579.png)

_Figure: Three types of UI components: Dialog, Notification/Toast, and Banner, each with different levels of urgency and functionality. The numbered callout 1 points to a Dialog component with a heading, a placeholder area, and three buttons at the bottom. The numbered callout 3 points to a Notification message and a Toast message, followed by a Banner with a promotional link. The Dialog requires explicit user action, the Notification/Toast provides immediate feedback without blocking usage, and the Banner offers persistent but non-blocking information._

### Use Cases

#### System / Mandatory

- **System feedback (success, error)** → Notification / Toast
- **Cookies / Privacy notices** → Banner (if navigation can continue without consent) → Dialog (if explicit consent is required before continuing)
- **Urgent notifications (downtime, outages, maintenance)** → Notification (when only informing) → Dialog (when user actions are blocked)
- **Critical announcements (recalls, legal or policy changes)** → Notification (when only informing) → Dialog (when user actions are blocked)

![System / Mandatory](dialog/system-mandatory-40483-6597.png)

_Figure: Various UI components used for system feedback, privacy notices, and urgent notifications. It includes a header-dialog with a heading and placeholder text, a footer-dialog with buttons in a horizontal layout, and several notification types such as info, success, and warning toasts. The components illustrate how different messages are presented, such as system downtime, saved settings, and product recalls, each with specific icons and text. The banner example shows a cookie consent notice with options to "Accept all" or "Manage preferences._

#### Marketing / Engagement

- **Sales & promotions** → Banner
- **Seasonal campaigns** → Banner
- **USPs / Value propositions** → Banner (for general positioning) → Notification (when contextually relevant, e.g., delivery info next to cart price)
- **Newsletter sign-up / Loyalty programs / Referrals** → Banner

![Marketing / Engagement](dialog/marketing-engagement-40483-6611.png)

_Figure: Two banner components used for marketing and engagement purposes. The first banner is of the default variant with promotional content, and the second banner is of the highlight variant also with promotional content. Both banners are shown in a medium viewport layout without a close button. The text within the banners includes calls to action such as "Join our Newsletter", "Up to 40% off all Chainsaw models", and additional information like "Versandkostenfreie ab 49€", "Lieferung oder Abholung vor Ort", and "30 Tage Rückgaberecht"._

#### Informational

- **Product / feature updates (non-critical)** → Banner
- **Tips, nudges, reminders** → Banner

![Informational](dialog/informational-40483-6619.png)

_Figure: An informational banner component, specifically a variant labeled as secondary, with a viewport size of medium (m), and content type promo. The banner does not include a close button and contains the text "We’ve just rolled out something new! Check out the latest updates and improvements." The banner is used for non-critical product or feature updates._

## Examples/Variants

### Use for tasks in main flows

The dialog component is suited for tasks (use cases) that are closely connected to the main flow.

**Attention**: The user is limited inside a dialog. If a task is multifaceted, consider a link to a new page instead. Explore the efficiency of a complex user flow containing a dialog through usability testing.

![Use for tasks in main flows](dialog/use-for-tasks-in-main-flows-14943-5492.png)

_Figure: A dialog component used for tasks in main flows, shown in a desktop viewport. It includes a header with a heading "New active time" and a close button, a radio button group with options "Not recurring" and "weekly recurring," three input fields labeled "Date," "Start time," and "End time," a select dropdown labeled "Mowing zone," a warning notification, and a footer with two buttons labeled "Add active time" and "Cancel." The dialog is designed to be used for tasks closely connected to the main flow, with a note that users are limited inside the dialog and that multifaceted tasks should consider a link to a new page instead._

### Common use cases

- Confirmation
- Form to add/edit objects
- Information purposes
- Selection purposes

![Common use cases](dialog/common-use-cases-14713-4655.png)

_Figure: A dialog component used for editing active time settings, shown in a desktop viewport. The dialog includes a header with the title "Edit active time" and a close button, a form with fields for "Start time," "End time," "Mowing zone," and checkboxes for "Enable instance" and "Enable series." There is a warning message "2 mowing jobs per week left" and a footer with three buttons labeled "Save," "Cancel," and "Delete active time." The layout is horizontal with the primary button positioned to the left._

### Immediate response

Dialog component is ideal for:

- Immediate response required
- Confirmation for destructive actions
- Quick interactions

![Immediate response](dialog/immediate-response-14272-47847.png)

_Figure: A dialog component designed for immediate response, featuring a header-dialog with a heading "Leave page?", a close button, and a viewport set to desktop. The body contains a text warning that data will not be saved, and the footer-dialog includes two buttons labeled "Leave page" and "Cancel," arranged horizontally with the primary button positioned on the left. The dialog is intended for scenarios requiring immediate response, confirmation for destructive actions, and quick interactions._

### Recommendations for mobile

1. Short copy in forms
1. Optimized and tested content

![Recommendations for mobile](dialog/recommendations-for-mobile-14272-48031.png)

_Figure: A dialog component designed for mobile, featuring a header-dialog with a heading "Update available" and a close button. The viewport is set to desktop, and the layout includes a placeholder with text and an image, followed by a footer-dialog with two buttons: "Update now" and "Remind me later," arranged horizontally with the primary button on the left. This example is marked as a "Do" because it follows recommendations for mobile, including short copy in forms and optimized, tested content._

### Warning for mobile

1. Avoid scrolling, if possible
1. Avoid small touch targets: Inline links that are placed too close together
1. Avoid data-heavy tasks that might slowly load.

![Warning for mobile](dialog/warning-for-mobile-14741-8353.png)

_Figure: A "Warning for mobile" example marked as a "Don't" for a dialog component. It displays a header-dialog with a heading labeled "Heading lorem" and a close button, and a footer-dialog with a button labeled "Button". The dialog contains a scrollable text area and a map image, demonstrating issues such as scrolling, small touch targets, and data-heavy content that might load slowly on mobile devices._

## Building elements

![Building elements](dialog/building-elements-16231-16553.png)

_Figure: The layout and positioning of headers and footers for both desktop and mobile views in a UI design system. It shows different configurations of buttons in the footer, including primary position left and right, with directions either horizontal or vertical. The buttons are displayed in three variants: ghost, filled, and outline, with specific states and sizes indicated. The header contains a heading with a close button, shown for both desktop and mobile views._

![Building elements](dialog/building-elements-16231-16688.png)

_Figure: Various components and their variants for a dialog in a UI design system, specifically the header-dialog and footer-dialog components. It illustrates different states and layouts for these components, including options to toggle on or off elements such as the heading, subline, close button, and buttons in the footer. The figure shows configurations for both desktop and mobile viewports, with directions and primary positions for buttons in the footer-dialog component. Each configuration specifies whether certain elements are shown or hidden, providing a comprehensive view of possible variations._
