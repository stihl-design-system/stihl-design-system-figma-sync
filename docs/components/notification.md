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
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:46:12.509Z
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

_Figure: Shows close-button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=on); button (button text=Button, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=off, flush alignment=on). Text in the figure: "This is a notification message that guides the user.", "Button"._

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

_Figure: Shows notification (action, close button, type=info, icon=True). Callouts 1, 2, 3, 4. Text in the figure: "This is a notification message that guides the user.", "Button"._

#### Variants

1. **Success** Provide positive feedback to reassure the user.
1. **Error** Provide guidance on how to fix the issue or try again.
1. **Warning** Encourage caution without indicating an immediate error.
1. **Info** Convey neutral information that does not require immediate action.

![Variants](notification/variants-13018-4938.png)

_Figure: Shows notification (close button, type=success, icon=True); notification (close button, type=error, icon=True); notification (close button, type=warning, icon=True); notification (close button, type=info, icon=True). Callouts 1, 2, 3, 4. Text in the figure: "Success: All files have been successfully uploaded. Thank you for your patience.", "Error: There was an issue uploading your files. Please try again or contact s...", "Warning: Connection unstable. Unsaved progress might be lost. Please save you...", "Note: Enhance your experience by customizing your preferences in the settings..."._

### Sizing

#### Minimum width

The minimum width is 272px, based on smaller screens

![Minimum width](notification/minimum-width-12194-75679.png)

_Figure: Shows notification (action, close button, type=warning, icon=True). Text in the figure: "Unsaved progress might be lost.", "Continue", "min .272 px"._

#### Height recommendation: optimize for mobile screens

In case the content is longer, ensure it is optimized for mobile presentation. Avoid exceeding one viewport so that users can read the entire message and retain the context of the page.

The average height of a mobile screen is approximately 800px, excluding navigation elements. Therefore, **stay below a height of 350px for smaller screens.**

![Height recommendation: optimize for mobile screens](notification/height-recommendation-optimize-for-mobile-screens-15570-7486.png)

_Figure: Do example. Shows notification (type=info, icon=false); button (button text=Zurück, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Weiter, variant=highlight, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Warum fragen wir nach Geometrie, Steigung und Gefälle? Unsere iMOW® Mährobote...", "Zurück", "Weiter", "Ablauf öffnen"._

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

_Figure: Shows annotation-circle (number=1, type=center, color=blue); top-bar\_logo (internal (do not modify) 🖥️ breakpoint=⛔️ internal (do not modify): m - xl); action-item (label=Contact, state=enabled, stacking=vertical, leading-element=icon, chevron=false, label-weight=regular, indent=false); button-nav (state=enabled, breakpoint=l + xl, icon=right); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3, type=center, color=blue). Callouts 1, 2, 3._

#### Grid Placement

Notifications should align with the Grid Content Areas:

1. **Global Notifications** appear within the Full content area and span the entire width.
1. **Page** and **Group Notifications** should be placed within the Narrower content area or smaller.

[Content placement guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Grid Placement](notification/grid-placement-12276-2934.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); top-bar\_logo (internal (do not modify) 🖥️ breakpoint=⛔️ internal (do not modify): m - xl); action-item (label=Contact, state=enabled, stacking=vertical, leading-element=icon, chevron=false, label-weight=regular, indent=false); button-nav (state=enabled, breakpoint=l + xl, icon=right); annotation-circle (number=2, type=center, color=blue). Callouts 1, 2._

## Content and Assets

### Custom content area

#### Formatting

A content section is filled with formatted text. E.g heading style **(1)** , bold text **(2)**) and inline links **(3).**

![Formatting](notification/formatting-12194-75566.png)

_Figure: Shows notification (close button, type=info, icon=True); notification (type=info, icon=false). Callouts 1, 2, 3. Text in the figure: "Heading Lorem ipusm", "Note: More information can be found in the patch notes"._

#### Hierarchy recommendations

1. Headline S, with or without uppercase.
1. Format the first few words bold, followed with a “:”.
1. Set inline-links, containing a few words.

![Hierarchy recommendations](notification/hierarchy-recommendations-13837-9444.png)

_Figure: Do example. Shows notification (close button, type=info, icon=True); notification (type=info, icon=True). Callouts 1, 2, 3. Text in the figure: "Heading Lorem ipusm", "Heading S Uppercase", "Heading S", "Note: More information can be found in the patch notes", "Text M Bold"._

#### Hierarchy warnings

1. Heading M is too big, as its bigger than the icon
1. Do not use bold text with a break, it is not semantic (Tip: Heading S is the same size)
1. Use italic formatting in exceptions only
1. Do not place an inline link on the full sentence
1. Do not format the complete message bold, as it does not provide hierarchy and therefore lacking focus.

![Hierarchy warnings](notification/hierarchy-warnings-13860-7009.png)

_Figure: Don't example. Shows notification (close button, type=info, icon=True); notification (type=info, icon=True). Callouts 1, 2, 3, 4, 5. Text in the figure: "Heading Lorem ipusm", "Heading M Uppercase", "Dolor sit Lorem ipusm", "Text M Bold", "↲", "Note: More information can be found in the patch notes", "Text M Italic", "More information can be found in the patch notes"._

#### Content length

Be concise and to the point.

![Content length](notification/content-length-13888-17537.png)

_Figure: Do example. Shows notification (close button, type=success, icon=True). Text in the figure: "All files have been successfully uploaded."._

#### One thing at a time

Do not combine two different messages in one alert.

![One thing at a time](notification/one-thing-at-a-time-12209-87296.png)

_Figure: Don't example. Shows notification (close button, type=info, icon=True). Text in the figure: "Info 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ligula s..."._

#### Do not use images

Do not use illustrations, content icons, photos, etc. in the content section.

Use a popover tip instead.

![Do not use images](notification/do-not-use-images-12279-2833.png)

_Figure: Don't example. Shows close-button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off). Text in the figure: "You're not allowed to change these restrictions.", "Button"._

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

_Figure: Shows notification (action, close button, type=warning, icon=True); notification (action, close button, type=success, icon=True). Text in the figure: "Connection with product not possible. Ttry again later. If the problem persis...", "Helpdesk", "This is a notification message that guides the user.", "Button"._

#### Use icons with purpose

Not every notification, needs an icon.

**Do**: get rid of the icon, in case of visual clutter and cognitive load.

![Use icons with purpose](notification/use-icons-with-purpose-13837-9479.png)

_Figure: Do example. Shows notification (action, close button, type=warning, icon=false). Text in the figure: "A new update is required. It includes essential features and fixes. Please up...", "Update now"._

#### Reduce stress

**Don’t:** if the message isn't time-sensitive, the icon could be intrusive to the user.

![Reduce stress](notification/reduce-stress-14312-4110.png)

_Figure: Don't example. Shows notification (action, close button, type=warning, icon=True). Text in the figure: "A new update is required. It includes essential features and fixes. Please up...", "Update now"._

#### Hierarchy recommendations

1. **Ghost button + outline button** The most common and recommended hierarchy for button pairing. Icons are optional.
1. **Single outline button** Combine with an inline line if needed. Icon is optional.
1. **Single ghost button** Icon recommended, combine with an inline line if needed.

[More documentation on button pairing](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?m=auto&node-id=1883-9757&t=vvQmgCEnIhnqwZm1-1)

![Hierarchy recommendations](notification/hierarchy-recommendations-14312-3396.png)

_Figure: Do example. Shows notification (action, close button, type=success, icon=True). Callouts 1, 2, 3. Text in the figure: "This is a notification message that guides the user.", "Button"._

#### Color and hierarchy warnings

1. **Highlight button + filled button** This color combination is not allowed, due to the background color of the component.
1. **Filled button + outline button** The filled button takes too much attention and is most likely not in balance with the rest of the interface and its primary actions.
1. **Two ghost buttons** With or without icons, the hierarchy is limited and therefore not recommended.

![Color and hierarchy warnings](notification/color-and-hierarchy-warnings-14312-4301.png)

_Figure: Don't example. Shows notification (action, close button, type=success, icon=True). Callouts 1, 2, 3. Text in the figure: "This is a notification message that guides the user.", "Button"._

#### Use flush alignment, when buttons are stacked

In case of a longer labels, stack the buttons. Primary action must come first.

Use flush alignment, when ghost buttons are combined with outline buttons.

![Use flush alignment, when buttons are stacked](notification/use-flush-alignment-when-buttons-are-stacked-12194-75703.png)

_Figure: Shows close-button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button Lorem Ipsum, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=right, hide label=off, flush alignment=on). Text in the figure: "You're not allowed to change these restrictions. It's either due to the", "Button Lorem Ipsum", "Button"._

## Behavior

### Trigger

Notifications can be used as static content modules or system feedback.

1. **System feedback** is triggered by human computer interaction.
1. **Content module** is a fixed module within a page lay-out.

![Trigger](notification/trigger-12209-87267.png)

_Figure: Shows notification (type=info, icon=false). Callouts 1, 2. Text in the figure: "Warum fragen wir nach Geometrie, Steigung und Gefälle? Unsere iMOW® Mährobote..."._

## Usage Guidelines

### Functionality & Priority

Components are chosen based on their level of urgency:

1. **Dialog** Highest urgency. Requires explicit user action before continuing. → [See Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

1. **Notification / Toast** Draws attention but does not block usage. Useful for immediate or transient feedback. → [See Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7251-8) → [See Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

1. **Banner** Persistent but non-blocking. Ideal for supporting information, promotions, or optional actions. → [See Banner](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7171-9055)

![Functionality & Priority](notification/functionality-priority-40483-1433.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); header-dialog (heading, close button, viewport=desktop); footer-dialog (first button, second button, third button, viewport=desktop, direction=horizontal, primary position=left); annotation-circle (number=3, type=center, color=blue); notification (action, close button, type=info, icon=True); toast (text=All files lorem ipsum, icon, type=info); banner (variant=default, viewport=m, content=promo, close-button=true). Callouts 1, 3. Text in the figure: "Heading", "❖ Placeholder", "Button", "This is a notification message that guides the user.", "All files lorem ipsum", "Promo Banner Link"._

### Use Cases

#### System / Mandatory

- **System feedback (success, error)** → Notification / Toast
- **Cookies / Privacy notices** → Banner (if navigation can continue without consent) → Dialog (if explicit consent is required before continuing)
- **Urgent notifications (downtime, outages, maintenance)** → Notification (when only informing) → Dialog (when user actions are blocked)
- **Critical announcements (recalls, legal or policy changes)** → Notification (when only informing) → Dialog (when user actions are blocked)

![System / Mandatory](notification/system-mandatory-40483-1399.png)

_Figure: Shows header-dialog (heading, viewport=desktop); placeholder: text + image; footer-dialog (first button, third button, viewport=desktop, direction=horizontal, primary position=left); notification (close button, type=info, icon=True); toast (text=Settings have been saved., icon, type=success); notification (type=warning, icon=True). Text in the figure: "Cookies help us improve your experience.", "By clicking “Accept all,” you agree to the use of cookies as described in our...", "Accept all", "Manage preferences", "The system will be unavailable on Monday, October 20, from 2:00 PM to 4:00 PM.", "Settings have been saved.", "Recall notice: Product XY has been recalled. Please visit www.example.com for..."._

#### Marketing / Engagement

- **Sales & promotions** → Banner
- **Seasonal campaigns** → Banner
- **USPs / Value propositions** → Banner (for general positioning) → Notification (when contextually relevant, e.g., delivery info next to cart price)
- **Newsletter sign-up / Loyalty programs / Referrals** → Banner

![Marketing / Engagement](notification/marketing-engagement-40483-4162.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=false); banner (variant=highlight, viewport=m, content=promo, close-button=false). Text in the figure: "Join our Newsletter", "Up to 40% off all Chainsaw models", "Versandkostenfreie ab 49€", "Lieferung oder Abholung vor Ort", "30 Tage Rückgaberecht"._

#### Informational

- **Product / feature updates (non-critical)** → Banner
- **Tips, nudges, reminders** → Banner

![Informational](notification/informational-40483-4167.png)

_Figure: Shows banner (variant=secondary, viewport=m, content=promo, close-button=false). Text in the figure: "We’ve just rolled out something new! Check out the latest updates and improve..."._

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

_Figure: Shows notification (type=info, icon=false). Text in the figure: "Startseite", "/", "Ratgeber", "Aktuelles", "BRENNHOLZ SÄGEN – SO GEHT'S", "Brennholz selbst zu sägen macht mehr Spaß, ist kostengünstiger und nachhaltig...", "30.11.2021", "Einen Stamm Ablängen", "Meterholz Spalten", "Äste und Holzspalten verarbeiten", "Videoanleitung: Brennholz Sägen aud dem Sägebock", "Welche Motorsäge eignet sich für Brennholz?", "Die richtige Schutzausrüstung zum BrennholzSägen", "10 Fragen zum Thema Brennholz sägen", "Baumstämme zu Brennholz Sägen und Nachhaltig bearbeiten", "Ob im Winter für das Kaminfeuer oder im Sommer für die Feuerschale im Garten:...", "Tipp: At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kas...", "Als ersten Arbeitsschritt empfehlen wir, Baumstämme, Stammteile und Äste zu h...", "EINEN STAMM SELBST ABLÄNGEN – SCHRITT FÜR SCHRITT", "Zunächst zeigen wir Ihnen, wie Sie im ersten Schritt einen Stamm auf handlich...", "Label Headline 3", "Subheadline (Optional)", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...", "VIDEO-ANLEITUNG: BRENNHOLZ SÄGEN AUF DEM SÄGEBOCK"._

### Guidance message

Highlight microcopy to guide the user in complex processes and aim for a continuous user-flow.

Recommended usage:

- not dismissible
- use the info-icon, icon is optional
- message is short and to the point
- place inline links if relevant
- action buttons are optional

![Guidance message](notification/guidance-message-12279-2458.png)

_Figure: Shows notification (type=info, icon=false). Text in the figure: "Warum fragen wir nach Geometrie, Steigung und Gefälle? Unsere iMOW® Mährobote..."._
