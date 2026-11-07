---
id: drawer
title: Drawer
category: component
importNames:
  - DSDrawer
package: "@stihl-design-system/components"
keywords:
  - drawer
  - side panel
  - off-canvas
  - sheet
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 16282:9317
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-07T04:29:19.407Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=16282-9317
---

# Drawer

## Drawer

Overview:

- Common use cases are: main or secondary navigation (especially mobile).
- The drawer component is suited for secondary tasks in the user-flows (e.g. log-in, additional filter or additional information).
- The drawer width adjusts to the inserted content. The height is always 100%
- Consider placing the button close to the content, in case the custom content area is half filled.
- Content overflow: header area and footer area are sticky, while the content area is scrolls.
- Ensure a clear hierarchy between the headline and content, so that the user can navigate quickly and move on.
- When on mobile 4 or more buttons, use small buttons to leave more space for the content area.
- When the drawer opens, focus should be set to the first actionable element.

![Drawer](drawer/drawer-14303-48965.png)

_Figure: Shows header-drawer (heading, back button, close button, viewport=desktop, style=heading); footer-drawer (first button, second button, third button, viewport=desktop, direction=horizontal, primary position=left); header-dialog (heading, close button, viewport=mobile); footer-drawer (first button, second button, third button, viewport=mobile, direction=vertical, primary position=left). Text in the figure: "Placement: left", "Placement: right", "Viewport: Desktop", "Overflow: false", "Overflow: true", "Viewport: Mobile", "Heading", "❖ Placeholder", "Button"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-drawer--documentation)

### Related elements

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Custom areas

1. **Custom header area (optional)**
1. **Custom content area**
1. **Custom footer area (optional)**
1. **Backdrop**

![Custom areas](drawer/custom-areas-14303-48984.png)

_Figure: Callouts 1, 2, 3, 4. Text in the figure: "❖ Header", "❖ Content", "❖ Footer"._

#### Figma component

Although technically a freely configurable slot, the figma components for **header area (1)** and **footer area (3)** provides a few options for common use case. The content area can be replaced with a **placeholder component (2)** that contain an additional text or image option.

Feel free to swap this with your own placeholder components or modules.

![Figma component](drawer/figma-component-15875-5717.png)

_Figure: Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); primary (button text=Primary CTA, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Secondary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Tertiary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Callouts 1, 2, 3. Text in the figure: "Heading", "❖ Placeholder - Replace this content", "Primary CTA", "Secondary CTA", "Tertiary CTA"._

### Sizing

#### Minimum width

The drawer adjusts to the width of the inserted content. Minimum size ist based on the smallest viewport size: 272px

![Minimum width](drawer/minimum-width-16004-6078.png)

_Figure: Text in the figure: "min. 272px"._

#### Maximum width

The drawer adjusts to the width of the inserted content. It can’t exceed the size of 1730px.

**Minimum space between browser edge and drawer, left or right:**

- On bigger screens (breakpoint m-xl) the distance is 80px.
- On smaller screens (breakpoint s) it is 32px.

![Maximum width](drawer/maximum-width-16004-6113.png)

_Figure: Text in the figure: "max. 1730px", "min. 80px", "min.32px"._

#### Width is dynamic, while opened

The width of the drawer does change to fit the content, in case more or less content becomes visible.

![Width is dynamic, while opened](drawer/width-is-dynamic-while-opened-14943-5604.png)

_Figure: Text in the figure: "Content 1", "Content 2", "content in drawer changes"._

#### Aim for a consistent width, through content changes

By showing fewer transitions to the user, the user is less distracting.

Show deeper levels of the navigation in the same container of the drawer.

![Aim for a consistent width, through content changes](drawer/aim-for-a-consistent-width-through-content-changes-16690-2337.png)

_Figure: Do example. Text in the figure: "Level 1", "Level 2", "Level 3"._

#### Drawers cover the full height of the screen

All sizes are cover the full height of the screen (100%)

![Drawers cover the full height of the screen](drawer/drawers-cover-the-full-height-of-the-screen-14911-5437.png)

_Figure: Measurements: 100%._

#### Content overflow

The content is scrollable, in case it exceeds the content area.

The header and footer area are fixed and sticky and gain an outline bottom/top

![Content overflow](drawer/content-overflow-14911-5432.png)

_Figure: Shows header-drawer (heading, back button, close button, viewport=desktop, style=heading); placeholder: text + image; footer-dialog (first button, second button, third button, viewport=desktop, direction=horizontal, primary position=left); header-drawer (heading, back button, close button, viewport=mobile, style=heading); footer-dialog (first button, second button, third button, viewport=mobile, direction=vertical, primary position=left). Text in the figure: "Heading", "Lorem ipsum dolor sit amet consectetur. Imperdiet fringilla aliquam libero he...", "Button"._

#### New page instead of a full-screen drawer

The drawer component cannot be full-screen. Place the content on it’s on page instead.

![New page instead of a full-screen drawer](drawer/new-page-instead-of-a-full-screen-drawer-15420-6080.png)

_Figure: Don't example. Measurements: 100%._

#### One drawer at a time

Don’t open multiple layers on top of each other

![One drawer at a time](drawer/one-drawer-at-a-time-15747-6156.png)

_Figure: Don't example. Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); placeholder: text + image. Text in the figure: "Impressum", "STIHL Infos", "Kontaktformular", "Rechtliche Unterlagen", "App-Informationen", "App-Version", "Verwendete Bibiliotheken", "IMpressum", "Diensteanbieter: STIHL Tirol GmbH Hans Peter Stihl-Str. 5 A-6336 Langkampfen..."._

### Placement

#### Action and drawer relatedness

Depending on the position of the action, it feels more intuitive for the drawer to slide in from either the left or right side.

This is consistent with the real world and helps users predict the behavior of the interface, reducing the effort needed to understand interactions.

This follows the [heuristic from NN Group](https://www.nngroup.com/articles/match-system-real-world/) ‘Match Between the System & the Real World‘

![Action and drawer relatedness](drawer/action-and-drawer-relatedness-14303-49011.png)

#### More than one drawer

If more than one drawer can be triggered in an interface, consider if they slide in from the same or from different sides.

- Same side: if the context of the task is connected.
- Different sides: clear distinction between the two task-flows.

**Note:** Though multiple drawers can be triggered in an interface, they are never opened at the same time.

![More than one drawer](drawer/more-than-one-drawer-14912-5442.png)

_Figure: Text in the figure: "Menu", "Filter"._

### Motion

#### Enter animation drawer

**Animation type:** move: from left or right **Duration:** 400ms **Easing:** motion-functional-ease-out

#### Backdrop dimming

**Animation type:** fade: opacity 0\>100% (color: black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-out

![Backdrop dimming](drawer/backdrop-dimming-16195-9078.png)

_Figure: Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); primary (button text=Primary CTA, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Secondary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Tertiary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Heading", "❖ Placeholder", "Primary CTA", "Secondary CTA", "Tertiary CTA", "Drawer move: from left or right", "Backdrop fade: 0 \> 100% Opacity (color: black 50%)"._

#### Exit animation drawer

**Animation type:** move: out to left or right **Duration:** 400ms **Easing:** motion-functional-ease-in

#### Backdrop dimming

**Animation type:** fade: opacity, 100\>0% (color black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-in

![Backdrop dimming](drawer/backdrop-dimming-15950-5784.png)

_Figure: Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); primary (button text=Primary CTA, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Secondary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Tertiary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Heading", "❖ Placeholder", "Primary CTA", "Secondary CTA", "Tertiary CTA", "Drawer move: out to left or right", "Backdrop fade: 100 \> 0% Opacity (color: black 50%)"._

## Content

### Hierachy

In most cases the user-task in the drawer disturbs the user-flow. It is important to ensure a clear hierarchy, so that the user can navigate quickly and move on.

![Hierachy](drawer/hierachy-14741-8402.png)

_Figure: Shows header-drawer (heading, close button, viewport=desktop, style=heading); placeholder: text + image; footer-dialog (first button, second button, viewport=desktop, direction=horizontal, primary position=left). Text in the figure: "You will read this first", "And then you will read this line next.", "Close", "Cancel"._

### Custom header area

#### Formatting examples

1. Heading L and topline, combined with a back button
1. Heading L, combined with a back button
1. [Title component ](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7-19)is better suitable for impactful and emotional headers.

![Formatting examples](drawer/formatting-examples-16452-6447.png)

_Figure: Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); placeholder: text + image; primary (button text=Primary CTA, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Secondary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Tertiary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Callouts 1, 2, 3. Text in the figure: "Topline", "Heading L", "Lorem ipsum dolor sit amet consectetur. Imperdiet fringilla aliquam libero he...", "Primary CTA", "Secondary CTA", "Tertiary CTA", "Heading L Uppercase", "Title Component", "ƒ"._

#### Formatting warning

Do not write full sentences in the header area.

![Formatting warning](drawer/formatting-warning-16452-6536.png)

_Figure: Don't example. Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); slot component: text/horizontal (image); primary (button text=Primary CTA, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Secondary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Tertiary CTA, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Are you sure you want to add the “speech to Text” service to the node-test-app?", "Lorem ipsum dolor sit amet consectetur. Imperdiet fringilla aliquam libero he...", "Primary CTA", "Secondary CTA", "Tertiary CTA"._

#### Topline conveys purpose

The topline explicitly references the page, feature title, or object to clearly convey the drawers purpose.

![Topline conveys purpose](drawer/topline-conveys-purpose-14928-5454.png)

_Figure: Don't example. Shows Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "Hallo!", "Maxime Doe"._

#### Header with ‘back’-link

Close icon on the right is preferred in both left and right placement.

![Header with ‘back’-link](drawer/header-with-back-link-17861-2451.png)

_Figure: Shows header-drawer (heading, back button, close button, viewport=desktop, style=heading). Text in the figure: "Heading"._

#### Close icon placement

Close Icon on the right **(1)** is preferred in both left and right placement.

Close icon on the left **(2)** isn’t ideal, though acceptable.

![Close icon placement](drawer/close-icon-placement-16208-7843.png)

_Figure: Callouts 1, 2._

### Custom content area

#### Short content

Consider placing the button close to the content, in case the custom content area is half filled.

**Important:** Leave the footer area empty.

![Short content](drawer/short-content-14741-8397.png)

### Custom footer area

#### Footer area is optional

1. In some cases a close icon is sufficient.
1. In some cases the content is very short, place the button(s) closer to the content.

![Footer area is optional](drawer/footer-area-is-optional-14875-5361.png)

_Figure: Callouts 1, 2._

#### Button placement

Button placement recommendations depend on the use case, as well as the side the drawer appears from.

Check out the examples and variations on the last frame for some common use cases.

![Button placement](drawer/button-placement-15875-5688.png)

## Behavior

### Dismissed by the user

In case the user closes **(1)** the drawer, the exit animation is triggered immediately.

Closing the drawer by click on the dimmed backdrop **(2)** can be disabled, default is enabled.

![Dismissed by the user](drawer/dismissed-by-the-user-16282-7040.png)

_Figure: Shows header-drawer (heading, close button, viewport=desktop, style=heading); link-default (label=Rated Voltage, variant=highlight, state=enabled, icon position=none); link-default (label=Weight, variant=highlight, state=enabled, icon position=none); link-default (label=Sound Pressure Level, variant=highlight, state=enabled, icon position=none); link-default (label=Sound Power Level, variant=highlight, state=enabled, icon position=none); link-default (label=Vibration Value Left/Right, variant=highlight, state=enabled, icon position=none); link-default (label=Total Length, variant=highlight, state=enabled, icon position=none); link-default (label=Cutting Circle Diameter, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 10, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 20, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 30, variant=highlight, state=enabled, icon position=none); link-default (label=Tool Battery Runtime 1, variant=highlight, state=enabled, icon position=none). Callouts 1, 2. Text in the figure: "Technical details", "Rated Voltage", "Weight", "Sound Pressure Level", "Sound Power Level", "Vibration Value Left/Right", "Total Length", "Cutting Circle Diameter", "Battery Runtime with AK 10", "Battery Runtime with AK 20", "Battery Runtime with AK 30", "Tool Battery Runtime 1", "Tool Battery Runtime 2", "IP Protection Class", "36 V", "3.1 kg", "77 dB(A)", "91 dB(A)", "3.7/2 m/s²", "168 cm", "350 mm", "up to 13 min", "up to 30 min", "up to 38 min"._

### Focus management

When the drawer opens, focus should be set to the first actionable element, typically the primary action button or the first input field.

![Focus management](drawer/focus-management-14741-8407.png)

_Figure: Callouts 1._

## Examples/Variants

### Navigation drill down

A drill down pattern is used, as the drawer maintains a specific width. This pattern works the same on mobile and desktop screens, therefore a common pattern that is easily learned by the user.

A drill down navigation allows users to progressively click through layers of information, starting broad and moving to specific content.

![Navigation drill down](drawer/navigation-drill-down-14303-49141.png)

_Figure: Navigation drill down: a web page with a STIHL header, search field, "Meta Item" and "Menu" button is shown on the left. An arrow from the highlighted "Menu" button leads to the same page dimmed behind an open drawer on the right, titled "Main navigation level 1" with a close icon, a list of ten "Menu Item Level 2" entries (nine with a right chevron for drilling deeper, the last with an external link icon) and a footer area with four "Meta item" entries (two with chevrons, one with an external link icon, one plain)._

### Secondary flow

Use the drawer component for actions that are secondary to the user’s main task.

Examples are:

- Log-in (or any other type of identification)
- Additional filters
- Additional information

**Attention**: The user is limited inside a drawer. If a task is multifaceted, consider a link to a new page instead. Explore the efficiency of a complex user flow containing a drawer through usability testing.

![Secondary flow](drawer/secondary-flow-14928-5460.png)

_Figure: Shows header-drawer (heading, close button, viewport=desktop, style=heading); link-default (label=Rated Voltage, variant=highlight, state=enabled, icon position=none); link-default (label=Weight, variant=highlight, state=enabled, icon position=none); link-default (label=Sound Pressure Level, variant=highlight, state=enabled, icon position=none); link-default (label=Sound Power Level, variant=highlight, state=enabled, icon position=none); link-default (label=Vibration Value Left/Right, variant=highlight, state=enabled, icon position=none); link-default (label=Total Length, variant=highlight, state=enabled, icon position=none); link-default (label=Cutting Circle Diameter, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 10, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 20, variant=highlight, state=enabled, icon position=none); link-default (label=Battery Runtime with AK 30, variant=highlight, state=enabled, icon position=none); link-default (label=Tool Battery Runtime 1, variant=highlight, state=enabled, icon position=none). Text in the figure: "Technical details", "Rated Voltage", "Weight", "Sound Pressure Level", "Sound Power Level", "Vibration Value Left/Right", "Total Length", "Cutting Circle Diameter", "Battery Runtime with AK 10", "Battery Runtime with AK 20", "Battery Runtime with AK 30", "Tool Battery Runtime 1", "Tool Battery Runtime 2", "IP Protection Class", "36 V", "3.1 kg", "77 dB(A)", "91 dB(A)", "3.7/2 m/s²", "168 cm", "350 mm", "up to 13 min", "up to 30 min", "up to 38 min"._

### Stepper navigation

A stepper navigation guides users through multi-step processes, showing progress with visual indicators, ensuring a user-friendly experience.

**Tip:** In order to visually distinguish the secondary navigation component, position the drawer to slide in from a different side than the main navigation.

**Note:** in this case the restart action is placed in the content area. Also, the header area is left empty.

![Stepper navigation](drawer/stepper-navigation-14875-5892.png)

### Do not use for...

The drawer component is less suited for the use cases that are primary tasks.

- Creating objects
- Editing objects

Instead use a new page or [the dialog component.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

![Do not use for...](drawer/do-not-use-for-16208-7823.png)

_Figure: Don't example. Shows header-drawer (heading, back button, close button, viewport=desktop, style=heading); example\_component\_dialog (Property 1=Default); footer-drawer (first button, second button, viewport=desktop, direction=horizontal, primary position=left). Text in the figure: "New active time", "Active Time Every Thursday", "Start Time", "15:00", "End Time", "Mowing Zone", "Automatic", "Enable instance", "Enable series", "2 mowing jobs per week left", "Save", "Cancel"._

## Building elements

![Building elements](drawer/building-elements-16231-16772.png)

_Figure: Shows Button (button text=Button, variant=highlight, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); Button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=left, hide label=off, flush alignment=on); primary (button text=Button, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); secondary (button text=Button, variant=outline, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Header", "Style Heading", "Style Button", "Heading", "Button", "Desktop", "Mobile", "Footer", "Primary Position left", "Direction: horizontal", "Direction: vertical", "Primary Position right"._

![Building elements](drawer/building-elements-16231-16827.png)

_Figure: Shows header-drawer (heading, back button, subline, close button, viewport=desktop, style=heading); header-drawer (heading, back button, close button, viewport=desktop, style=heading); header-drawer (back button, close button, viewport=desktop, style=heading); header-drawer (heading, back button, subline, close button, viewport=mobile, style=heading); header-drawer (heading, back button, close button, viewport=mobile, style=heading); header-drawer (back button, close button, viewport=mobile, style=heading); header-dialog (close button, viewport=mobile); footer-drawer (first button, second button, third button, viewport=desktop, direction=horizontal, primary position=left); footer-drawer (first button, second button, third button, viewport=desktop, direction=vertical, primary position=left); footer-drawer (first button, second button, third button, viewport=mobile, direction=vertical, primary position=left); footer-drawer (first button, second button, viewport=desktop, direction=horizontal, primary position=left); footer-drawer (first button, second button, viewport=desktop, direction=vertical, primary position=left). Text in the figure: "Variants and Elements to toggle on/off", "Header", "Desktop", "show heading: true show subline: true Show close: true show leading icon/func...", "Heading", "Subline", "show heading: true show sublin:false Show close: true show leading icon/funct...", "show heading: true show subline:false Show close: true show leading icon/func...", "show heading: false show subline:false Show close: true show leading icon/fun...", "Mobile", "Footer", "Primary Position left", "direction: horizontal show first button: true show second button: true show t...", "direction: vertical show first button: true show second button: true show thi...", "direction: - show first button: true show second button: true show third: true", "Button", "direction: - show first button: true show second button: true show third: false", "direction: horizontal show first button: true show second button: false show...", "direction: vertical show first button: true show second button: false show th...", "direction: - show first button: true show second button: false show third: false", "Primary Position Right", "direction: - show first button: true show second button: false show third: true"._
