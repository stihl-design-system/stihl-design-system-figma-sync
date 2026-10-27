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
figmaVersion: "2410599903007017519"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-10-15T14:34:29Z
syncedAt: 2026-10-27T12:52:19.544Z
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

#### Figma component

Although technically a freely configurable slot, the figma components for **header area (1)** and **footer area (3)** provides a few options for common use case. The content area can be replaced with a **placeholder component (2)** that contain an additional text or image option.

Feel free to swap this with your own placeholder components or modules.

![Figma component](drawer/figma-component-15875-5717.png)

### Sizing

#### Minimum width

The drawer adjusts to the width of the inserted content. Minimum size ist based on the smallest viewport size: 272px

![Minimum width](drawer/minimum-width-16004-6078.png)

#### Maximum width

The drawer adjusts to the width of the inserted content. It can’t exceed the size of 1730px.

**Minimum space between browser edge and drawer, left or right:**

- On bigger screens (breakpoint m-xl) the distance is 80px.
- On smaller screens (breakpoint s) it is 32px.

![Maximum width](drawer/maximum-width-16004-6113.png)

#### Width is dynamic, while opened

The width of the drawer does change to fit the content, in case more or less content becomes visible.

![Width is dynamic, while opened](drawer/width-is-dynamic-while-opened-14943-5604.png)

#### Aim for a consistent width, through content changes

By showing fewer transitions to the user, the user is less distracting.

Show deeper levels of the navigation in the same container of the drawer.

![Aim for a consistent width, through content changes](drawer/aim-for-a-consistent-width-through-content-changes-16690-2337.png)

#### Drawers cover the full height of the screen

All sizes are cover the full height of the screen (100%)

![Drawers cover the full height of the screen](drawer/drawers-cover-the-full-height-of-the-screen-14911-5437.png)

#### Content overflow

The content is scrollable, in case it exceeds the content area.

The header and footer area are fixed and sticky and gain an outline bottom/top

![Content overflow](drawer/content-overflow-14911-5432.png)

#### New page instead of a full-screen drawer

The drawer component cannot be full-screen. Place the content on it’s on page instead.

![New page instead of a full-screen drawer](drawer/new-page-instead-of-a-full-screen-drawer-15420-6080.png)

#### One drawer at a time

Don’t open multiple layers on top of each other

![One drawer at a time](drawer/one-drawer-at-a-time-15747-6156.png)

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

### Motion

#### Enter animation drawer

**Animation type:** move: from left or right **Duration:** 400ms **Easing:** motion-functional-ease-out

#### Backdrop dimming

**Animation type:** fade: opacity 0\>100% (color: black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-out

![Backdrop dimming](drawer/backdrop-dimming-16195-9078.png)

#### Exit animation drawer

**Animation type:** move: out to left or right **Duration:** 400ms **Easing:** motion-functional-ease-in

#### Backdrop dimming

**Animation type:** fade: opacity, 100\>0% (color black 50%) **Duration:** 400ms **Easing:** motion-functional-ease-in

![Backdrop dimming](drawer/backdrop-dimming-15950-5784.png)

## Content

### Hierachy

In most cases the user-task in the drawer disturbs the user-flow. It is important to ensure a clear hierarchy, so that the user can navigate quickly and move on.

![Hierachy](drawer/hierachy-14741-8402.png)

### Custom header area

#### Formatting examples

1. Heading L and topline, combined with a back button
1. Heading L, combined with a back button
1. [Title component ](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7-19)is better suitable for impactful and emotional headers.

![Formatting examples](drawer/formatting-examples-16452-6447.png)

#### Formatting warning

Do not write full sentences in the header area.

![Formatting warning](drawer/formatting-warning-16452-6536.png)

#### Topline conveys purpose

The topline explicitly references the page, feature title, or object to clearly convey the drawers purpose.

![Topline conveys purpose](drawer/topline-conveys-purpose-14928-5454.png)

#### Header with ‘back’-link

Close icon on the right is preferred in both left and right placement.

![Header with ‘back’-link](drawer/header-with-back-link-17861-2451.png)

#### Close icon placement

Close Icon on the right **(1)** is preferred in both left and right placement.

Close icon on the left **(2)** isn’t ideal, though acceptable.

![Close icon placement](drawer/close-icon-placement-16208-7843.png)

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

#### Button placement

Button placement recommendations depend on the use case, as well as the side the drawer appears from.

Check out the examples and variations on the last frame for some common use cases.

![Button placement](drawer/button-placement-15875-5688.png)

## Behavior

### Dismissed by the user

In case the user closes **(1)** the drawer, the exit animation is triggered immediately.

Closing the drawer by click on the dimmed backdrop **(2)** can be disabled, default is enabled.

![Dismissed by the user](drawer/dismissed-by-the-user-16282-7040.png)

### Focus management

When the drawer opens, focus should be set to the first actionable element, typically the primary action button or the first input field.

![Focus management](drawer/focus-management-14741-8407.png)

## Examples/Variants

### Navigation drill down

A drill down pattern is used, as the drawer maintains a specific width. This pattern works the same on mobile and desktop screens, therefore a common pattern that is easily learned by the user.

A drill down navigation allows users to progressively click through layers of information, starting broad and moving to specific content.

![Navigation drill down](drawer/navigation-drill-down-14303-49141.png)

### Secondary flow

Use the drawer component for actions that are secondary to the user’s main task.

Examples are:

- Log-in (or any other type of identification)
- Additional filters
- Additional information

**Attention**: The user is limited inside a drawer. If a task is multifaceted, consider a link to a new page instead. Explore the efficiency of a complex user flow containing a drawer through usability testing.

![Secondary flow](drawer/secondary-flow-14928-5460.png)

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

## Building elements

![Building elements](drawer/building-elements-16231-16772.png)

![Building elements](drawer/building-elements-16231-16827.png)
