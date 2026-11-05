---
id: notification
title: Notification
category: component
importNames:
  - DSNotification
package: "@stihl-design-system/components"
keywords:
  - notification
  - alert
  - inline message
  - system feedback
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 7251:8
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:24:15.197Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7251-8
---

# Notification

## Notification

Overview:

- Use to communicate feedback non-intrusively .
- The four types are success, error, warning, and info.
- The three most common use cases are system feedback, content highlight, and guidance message.
- The component is divided into two sections: content section and action section.
- As the component is primarily a content module, test the copy for optimal length and tone-of-voice.
- Ensure a clear hierarchy of content elements and action buttons.

![Notification](notification/notification-7251-17556.png)

_Figure: Eight notifications in two columns, one per type (success green, error red, warning yellow, info gray) in rows, each with the text "This is a notification message that guides the user.", a close icon, an outline "Button" and a ghost "Button". The left column shows each type with its type icon, the right column without an icon._

> **Figma Slots in this component** This component supports Figma slots, which allow specific areas to be flexibly populated with your own content. You can find more information on how to use and customize slots in the official Figma documentation. [**Go to the Figma guide**](https://help.figma.com/hc/en-us/articles/38231200344599-Create-and-use-slots-to-build-flexible-components-in-Figma-Design)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-notification--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

Decision tree

### Similar components

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

### Related components

[Typography](https://www.figma.com/design/d9wrOp4aCplDsV9AVC87Xn/Typography-%F0%9F%85%B0%EF%B8%8F?m=auto&t=4yiq5f9rjU14BQYJ-6)

[Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=162-126)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

[Tooltip](https://www.figma.com/design/HovZmjHiwxguawTWTO6ibS/DS-1085-Design-%7C-Web-%7C-Tootlip?node-id=36194-1244)

[Popover](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11456)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Icon (optional)** Optional, additional visual indicate what type of notification is used.
1. **Custom content area** Information or guidance for the user
1. **Custom action area (optional)** Place buttons to help the user continue after the feedback is given.
1. **Close icon (optional):** Use to close a notification, in case it is dismissible.

![Anatomy](notification/anatomy-8844-5102.png)

_Figure: Info notification with callouts: 1 points at the icon on the left, 2 at the custom content area with the text "This is a notification message that guides the user.", 3 at the custom action area with an outline "Button" and a ghost "Button", and 4 at the close icon on the right._

#### Variants

1. **Success** Provide positive feedback to reassure the user.
1. **Error** Provide guidance on how to fix the issue or try again.
1. **Warning** Encourage caution without indicating an immediate error.
1. **Info** Convey neutral information that does not require immediate action.

![Variants](notification/variants-13018-4938.png)

_Figure: Four stacked notifications with icon and close icon, each with a bold prefix: 1 Success (green, "All files have been successfully uploaded. Thank you for your patience."), 2 Error (red, "There was an issue uploading your files. Please try again or contact support if the problem persists."), 3 Warning (yellow, "Connection unstable. Unsaved progress might be lost. Please save your work and check your network connection.") and 4 Note (gray info, "Enhance your experience by customizing your preferences in the settings. Visit the Settings page to get started.")._

### Sizing

#### Minimum width

The minimum width is 272px, based on smaller screens

![Minimum width](notification/minimum-width-12194-75679.png)

_Figure: Narrow yellow warning notification with icon, the text "Unsaved progress might be lost.", a close icon and an outline "Continue" button, with a measurement below marking the minimum width as 272 px._

#### Height recommendation: optimize for mobile screens

In case the content is longer, ensure it is optimized for mobile presentation. Avoid exceeding one viewport so that users can read the entire message and retain the context of the page.

The average height of a mobile screen is approximately 800px, excluding navigation elements. Therefore, **stay below a height of 350px for smaller screens.**

![Height recommendation: optimize for mobile screens](notification/height-recommendation-optimize-for-mobile-screens-15570-7486.png)

_Figure: Do example: a mobile screen from stihl.de with a gray info notification titled "Warum fragen wir nach Geometrie, Steigung und Gefälle?" and a medium-length explanatory text about iMOW® mowing robots, kept compact so the notification and the "Zurück" and "Weiter" buttons fit within one viewport._

### Placement

#### Layout Placement

Notifications should appear close to and above the element or action that triggered them. Placement depends on the context and scope of the message. There are three main types:

**1. Global**

- Positioned below the header, spanning the full width of the viewport.
- Used for system-wide or mandatory alerts (e.g., maintenance alerts, recalls).

> **Note:** The current notification uses a hard-coded maximum width. A revised version with adjustable sizing and additional updates will be released in a future iteration.

**2. Page**

- Positioned at the top of the main page content area.
- Used for page-level alerts (e.g., page failed to load, data refresh required).

**3. Group**

- Positioned above a specific module, section, or component.
- Used for context-specific alerts (e.g., product in cart is no longer available).

![Layout Placement](notification/layout-placement-12279-4994.png)

_Figure: Six simplified page wireframes with a STIHL top bar, each with a yellow notification, in two columns (without and with a left side navigation). Callout 1 (Global) shows the notification spanning the full page width below the header, callout 2 (Page) shows it at the top of the main content area above a single content block, and callout 3 shows it above the first of two content blocks._

#### Grid Placement

Notifications should align with the Grid Content Areas:

1. **Global Notifications** appear within the Full content area and span the entire width.
1. **Page** and **Group Notifications** should be placed within the Narrower content area or smaller.

[Content placement guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Grid Placement](notification/grid-placement-12276-2934.png)

_Figure: Two browser page mockups with the STIHL logo, a top bar and a 12-column grid, each containing an orange notification bar. In callout 1 the notification spans the full width of the page between two dashed purple lines (Global Notification in the Full content area); in callout 2 the notification sits above a content block inside a narrower area marked by two dashed lines (Page or Group Notification in the Narrower content area or smaller)._

## Content and Assets

### Custom content area

#### Formatting

A content section is filled with formatted text. E.g heading style **(1)** , bold text **(2)**) and inline links **(3).**

![Formatting](notification/formatting-12194-75566.png)

_Figure: Two grey info notifications with a dark left border. The first has an info icon, an uppercase bold heading "Heading" (callout 1), the text "Lorem ipsum" and a close button; the second is a single line "Note: More information can be found in the patch notes" with the bold "Note:" (callout 2) and the underlined inline link "patch notes" (callout 3)._

#### Hierarchy recommendations

1. Headline S, with or without uppercase.
1. Format the first few words bold, followed with a “:”.
1. Set inline-links, containing a few words.

![Hierarchy recommendations](notification/hierarchy-recommendations-13837-9444.png)

_Figure: Do example with three grey info notifications: one with the uppercase heading "Heading" labelled "Heading S Uppercase" and one with the heading "Heading" labelled "Heading S" (callout 1, Headline S with or without uppercase), and a single-line message labelled "Text M Bold" whose first words "Note:" are bold (callout 2) followed by a short inline link "patch notes" (callout 3)._

#### Hierarchy warnings

1. Heading M is too big, as its bigger than the icon
1. Do not use bold text with a break, it is not semantic (Tip: Heading S is the same size)
1. Use italic formatting in exceptions only
1. Do not place an inline link on the full sentence
1. Do not format the complete message bold, as it does not provide hierarchy and therefore lacking focus.

![Hierarchy warnings](notification/hierarchy-warnings-13860-7009.png)

_Figure: Don't example with four grey info notifications showing wrong hierarchy: an oversized uppercase "Heading" labelled "Heading M Uppercase" that is bigger than the icon (callout 1); a bold "Dolor sit" labelled "Text M Bold" with a line break instead of a semantic heading (callout 2); an italic "Note:" labelled "Text M Italic" (callout 3); an inline link covering the whole sentence "More information can be found in the patch notes" (callout 4); and a completely bold message labelled "Text M Bold" that gives no hierarchy or focus (callout 5)._

#### Content length

Be concise and to the point.

![Content length](notification/content-length-13888-17537.png)

_Figure: Do example: a green success notification with a check icon, the short one-line text "All files have been successfully uploaded." and a close button, showing concise, to-the-point content._

#### One thing at a time

Do not combine two different messages in one alert.

![One thing at a time](notification/one-thing-at-a-time-12209-87296.png)

_Figure: Don't example: one grey info notification with an info icon and close button that combines three separate messages ("Info 1:", "Info 2:", "Info 3:"), each with a bold label and lorem ipsum text across several lines, instead of one message at a time._

#### Do not use images

Do not use illustrations, content icons, photos, etc. in the content section.

Use a popover tip instead.

![Do not use images](notification/do-not-use-images-12279-2833.png)

_Figure: Don't example: a grey notification with a close button whose content section contains a large technical illustration of a chainsaw engine part, followed by the text "You're not allowed to change these restrictions." and an outline "Button" plus a ghost "Button"; images and illustrations should not be used in notifications (use a popover tip instead)._

### Custom action area

#### Actions

- The custom action area is optional.
- It can contain the following elements:
   - a link (that looks like a button)
   - a button
- The maximum is 2 buttons.

For pairing buttons, check out the guidelines:

Button guidelines

[Link guidelines](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26711-8034)

![Actions](notification/actions-12194-75611.png)

_Figure: Two notifications with a custom action area and close button. The yellow warning notification with warning icon reads "Connection with product not possible. Ttry again later. If the problem persists please contact the STIHL Support" and has a link "Helpdesk" with an external-link icon; the green success notification with check icon reads "This is a notification message that guides the user." and has two buttons, an outline "Button" and a ghost "Button"._

#### Use icons with purpose

Not every notification, needs an icon.

**Do**: get rid of the icon, in case of visual clutter and cognitive load.

![Use icons with purpose](notification/use-icons-with-purpose-13837-9479.png)

_Figure: Do example: a yellow warning notification without an icon, reading "A new update is required. It includes essential features and fixes. Please update now to continue using the service." with a close button and an "Update now" action link with a chevron; the icon is left out to avoid visual clutter and cognitive load._

#### Reduce stress

**Don’t:** if the message isn't time-sensitive, the icon could be intrusive to the user.

![Reduce stress](notification/reduce-stress-14312-4110.png)

_Figure: Don't example: a yellow warning notification with a warning icon, reading "A new update is required. It includes essential features and fixes. Please update now to continue using the service." with a close button and an "Update now" action link; for a message that is not time-sensitive the icon can be intrusive and stressful for the user._

#### Hierarchy recommendations

1. **Ghost button + outline button** The most common and recommended hierarchy for button pairing. Icons are optional.
1. **Single outline button** Combine with an inline line if needed. Icon is optional.
1. **Single ghost button** Icon recommended, combine with an inline line if needed.

[More documentation on button pairing](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?m=auto&node-id=1883-9757&t=vvQmgCEnIhnqwZm1-1)

![Hierarchy recommendations](notification/hierarchy-recommendations-14312-3396.png)

_Figure: Do example: three green success notifications with icon, the text "This is a notification message that guides the user." and a close button, each with a different recommended button hierarchy. Callout 1 points at a ghost button next to an outline button ("Button", "Button"), callout 2 at a single outline button below text with an inline link, callout 3 at a single ghost button with an icon._

#### Color and hierarchy warnings

1. **Highlight button + filled button** This color combination is not allowed, due to the background color of the component.
1. **Filled button + outline button** The filled button takes too much attention and is most likely not in balance with the rest of the interface and its primary actions.
1. **Two ghost buttons** With or without icons, the hierarchy is limited and therefore not recommended.

![Color and hierarchy warnings](notification/color-and-hierarchy-warnings-14312-4301.png)

_Figure: Don't example: three green success notifications with the text "This is a notification message that guides the user." and a close button, each showing a discouraged button combination. Callout 1 points at a highlight (orange) button next to a filled (dark) button, not allowed because of the background color; callout 2 at a filled button next to an outline button, which takes too much attention; callout 3 at two ghost buttons with icons, which gives too little hierarchy._

#### Use flush alignment, when buttons are stacked

In case of a longer labels, stack the buttons. Primary action must come first.

Use flush alignment, when ghost buttons are combined with outline buttons.

![Use flush alignment, when buttons are stacked](notification/use-flush-alignment-when-buttons-are-stacked-12194-75703.png)

_Figure: Gray info notification with the text "You're not allowed to change these restrictions. It's either due to the" and a close button, with the buttons stacked below the text: an outline button "Button Lorem Ipsum" first, then a ghost button "Button" with a right chevron. A magenta vertical line shows that the ghost button label is flush-aligned with the left edge of the text and the outline button._

## Behavior

### Trigger

Notifications can be used as static content modules or system feedback.

1. **System feedback** is triggered by human computer interaction.
1. **Content module** is a fixed module within a page lay-out.

![Trigger](notification/trigger-12209-87267.png)

_Figure: Two page examples of notification triggers. Callout 1 points at a yellow warning notification with a close button above a search results table for "MS 180", as system feedback ("Server Maintenance: Downloads are Temporarily disabled."). Callout 2 points at a gray info notification without icon, titled "Warum fragen wir nach Geometrie, Steigung und Gefälle?", placed fixed within the iMOW Berater page layout as a content module._

## Usage Guidelines

### Functionality & Priority

Components are chosen based on their level of urgency:

1. **Dialog** Highest urgency. Requires explicit user action before continuing. → [See Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

1. **Notification / Toast** Draws attention but does not block usage. Useful for immediate or transient feedback. → [See Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7251-8) → [See Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

1. **Banner** Persistent but non-blocking. Ideal for supporting information, promotions, or optional actions. → [See Banner](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7171-9055)

![Functionality & Priority](notification/functionality-priority-40483-1433.png)

_Figure: Stack of components ordered by urgency. Callout 1 points at a dialog with heading "Heading", close button, content placeholder and three buttons (highest urgency, blocks the user). Callout 3 points at both the info notification ("This is a notification message that guides the user." with outline and ghost buttons) with the smaller toast below it ("All files lorem ipsum"), and at the dark promo banner ("Promo Banner Link" with close button), which are lower urgency and non-blocking._

### Use Cases

#### System / Mandatory

- **System feedback (success, error)** → Notification / Toast
- **Cookies / Privacy notices** → Banner (if navigation can continue without consent) → Dialog (if explicit consent is required before continuing)
- **Urgent notifications (downtime, outages, maintenance)** → Notification (when only informing) → Dialog (when user actions are blocked)
- **Critical announcements (recalls, legal or policy changes)** → Notification (when only informing) → Dialog (when user actions are blocked)

![System / Mandatory](notification/system-mandatory-40483-1399.png)

_Figure: Examples of system and mandatory messages: a cookie dialog ("Cookies help us improve your experience." with buttons "Accept all" and "Manage preferences"), a gray info notification about system unavailability on Monday, October 20, from 2:00 PM to 4:00 PM, a green success toast "Settings have been saved.", and a yellow warning notification "Recall notice: Product XY has been recalled." with a link to www.example.com._

#### Marketing / Engagement

- **Sales & promotions** → Banner
- **Seasonal campaigns** → Banner
- **USPs / Value propositions** → Banner (for general positioning) → Notification (when contextually relevant, e.g., delivery info next to cart price)
- **Newsletter sign-up / Loyalty programs / Referrals** → Banner

![Marketing / Engagement](notification/marketing-engagement-40483-4162.png)

_Figure: Three full-width banners for marketing and engagement: a dark default banner "Join our Newsletter" with envelope icon, an orange highlight banner "Up to 40% off all Chainsaw models" with percent icon, and a gray USP banner with "Versandkostenfreie ab 49€", "Lieferung oder Abholung vor Ort" and "30 Tage Rückgaberecht", each with an icon._

#### Informational

- **Product / feature updates (non-critical)** → Banner
- **Tips, nudges, reminders** → Banner

![Informational](notification/informational-40483-4167.png)

_Figure: Gray full-width secondary banner with a bell icon and the text "We’ve just rolled out something new! Check out the latest updates and improvements" followed by a chevron, used for non-critical product or feature updates._

## Examples/Variants

The most common use cases for the notification component are:

### System feedback

Communicate system updates and guides the user in case of interruptions.

Recommended usage:

- dismissible
- icon is recommended
- use conversational language
- triggered by human computer interaction
- message is short and to the point
- explains problem and offers a solution
- action buttons are optional

![System feedback](notification/system-feedback-12279-2453.png)

_Figure: Search results page for "MS 180" (74) in the Documents tab with filter chips and a results table, showing a yellow warning notification with a close button above the results: "Server Maintenance: Downloads are Temporarily disabled. Maintenance should be done around 1pm CEST." It illustrates a dismissible system feedback notification._

### Content highlight

A content module that has the function to highlight the content within.

Recommended usage:

- not dismissible
- icon optional
- longer character count allowed
- place inline links if relevant
- use images in exception
- action buttons are optional

![Content highlight](notification/content-highlight-8844-5147.png)

_Figure: Article page about sawing firewood ("Baumstämme zu Brennholz sägen und nachhaltig bearbeiten") with a list of anchor links and body text, containing a gray inline content-highlight notification without icon or close button and with a left border, headed "Tipp:" and a short highlighted text._

### Guidance message

Highlight microcopy to guide the user in complex processes and aim for a continuous user-flow.

Recommended usage:

- not dismissible
- use the info-icon, icon is optional
- message is short and to the point
- place inline links if relevant
- action buttons are optional

![Guidance message](notification/guidance-message-12279-2458.png)

_Figure: Guidance message (notification type=info, icon=false) in the iMOW Berater web page, step "2. STEIGUNG": below the question "Welche Steigung weist Ihre Rasenfläche auf?" and three radio options, a grey inline notification with a dark left border and no icon explains "Warum fragen wir nach Geometrie, Steigung und Gefälle?" in a short bold heading and a few lines of body text._
