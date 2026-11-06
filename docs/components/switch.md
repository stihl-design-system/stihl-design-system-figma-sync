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
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-06T09:44:27.512Z
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

_Figure: Text in the figure: "enabled", "hover/pressed", "focus", "disabled", "loading", "Label", "checked false", "checked true"._

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

_Figure: Shows switch (label links, Label=Label Utility M, state=enabled, checked=false); switch (label links, Label=Label Utility M, state=enabled, checked=true). Measurements: 8px, 16px. Callouts 1, 2, 3. Text in the figure: "Label Utility M"._

### Alignment

#### Label placement

The default is label on the left, due the reading direction.

![Label placement](switch/label-placement-641-181.png)

_Figure: Shows switch (label links, Label=Label, state=enabled, checked=false); switch (label right, Label=Label, state=enabled, checked=false). Text in the figure: "Label left", "Label right", "Label"._

#### Use one label at a time

Do not use a label on both sides of the switch.

![Use one label at a time](switch/use-one-label-at-a-time-23696-10175.png)

_Figure: Don't example. Text in the figure: "Label left & right", "cm", "inch"._

#### Stretched

Use a stretched alignment **(1)** instead of a default alignment **(2)** in use-cases like settings on small viewports and/or narrow columns.

[Grid styles→](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Stretched](switch/stretched-641-198.png)

_Figure: Shows switch (label links, Label=Label, state=enabled, checked=false). Callouts 1, 2. Text in the figure: "Label"._

#### Provide a section title for a group

Offer clear sections, when grouping multiple switches.

![Provide a section title for a group](switch/provide-a-section-title-for-a-group-641-222.png)

_Figure: Shows switch (label links, Label=Label, state=enabled, checked=false); switch (label links, Label=Label, state=enabled, checked=true). Text in the figure: "Section Title", "Label"._

## Content and Assets

### Label

Keep it to a minimum, around 2-4 words.

![Label](switch/label-641-261.png)

_Figure: Shows switch (label links, Label=Airplane mode, state=enabled, checked=false); switch (label links, Label=Show on home screen, state=enabled, checked=true). Text in the figure: "Airplane mode", "Show on home screen"._

### Naming a group

Naming a list is important for the user to scan and evaluate the relevance quickly.

![Naming a group](switch/naming-a-group-641-272.png)

_Figure: Shows switch (label links, Label=High contrast mode, state=enabled, checked=false); switch (label links, Label=Location awareness, state=enabled, checked=false); switch (label links, Label=Location awareness, state=enabled, checked=true). Text in the figure: "General", "High contrast mode", "Location awareness"._

### Define a clear aria label

The visible label of a switch can be ambiguous, as the switch influences the status. Make sure to clarify the function through the aria label.

![Define a clear aria label](switch/define-a-clear-aria-label-641-292.png)

_Figure: Shows switch (label links, Label=High contrast mode, state=enabled, checked=false); switch (label links, Label=Location awareness, state=enabled, checked=false); switch (label links, Label=Photo album, state=enabled, checked=true). Text in the figure: "General", "High contrast mode", "Location awareness", "Photo album", "Label: Photo album access"._

## Behavior

### Initial focus

The focus is set on the switch element, excluding the label.

The selected state (true of false) changes by pressing space bar.

![Initial focus](switch/initial-focus-694-1113.png)

_Figure: Shows switch (label links, Label=Label, state=focus, checked=false); switch (label links, Label=Label, state=focus, checked=true). Text in the figure: "Label"._

### Loading state

If the system cannot process a setting instantly, the loading state is shown. The user can’t interact with the switch meanwhile.

![Loading state](switch/loading-state-694-1126.png)

_Figure: Shows switch (label links, Label=Label, state=loading, checked=false). Text in the figure: "Label"._

### Error handling

Do not combine error messages with the switch.

**In case a switch’s function does not execute, keep it at the former state.**

![Error handling](switch/error-handling-694-1135.png)

_Figure: Don't example. Shows switch (label links, Label=High contrast mode, state=enabled, checked=false). Text in the figure: "High contrast mode can’t be enabled", "High contrast mode"._

### Toast notification

It is possible to communicate system feedback to the user through a toast notification.

[Toast notification →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

![Toast notification](switch/toast-notification-694-1151.png)

_Figure: Do example. Shows toast (text=All files updated, icon, type=success). Text in the figure: "All files updated"._

## Examples/Variations

### When to use another component

#### Form design: checkbox instead of switch

Use a single checkbox, if designing a form. A switch is not an input element.

[Checkbox →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

![Form design: checkbox instead of switch](switch/form-design-checkbox-instead-of-switch-1430-4323.png)

_Figure: Do example. Text in the figure: "Hiermit stimme ich den Allgemeinene Geschäftsbedingngen von STIHL Vertriebsze..."._

#### Add a dialog for bigger changes

Consider asking for confirmation by the user, for bigger tasks that might be hard to undo (e.g. delete all files).

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14115-4051)

![Add a dialog for bigger changes](switch/add-a-dialog-for-bigger-changes-1430-4337.png)

_Figure: Do example. Shows dialog (viewport=desktop, overflow=false). Text in the figure: "Change settings", "The setting changes you made require a restart of the app. Do you want to pro...", "Restart now"._

### Other common use cases

> The following examples are not part of the code component

#### Switch meant for mobile use

The switch component is initially meant for mobile use cases.

It is allowed to use a switch in a desktop solution, though consider if another component might be a better fit.

![Switch meant for mobile use](switch/switch-meant-for-mobile-use-694-1171.png)

_Figure: Shows switch (label links, Label=Tracking, state=enabled, checked=false); switch (label links, Label=Darkmode, state=enabled, checked=false); switch (label links, Label=Notification, state=enabled, checked=true). Text in the figure: "Settings", "Tracking", "Darkmode", "Notification"._

#### Use of other icons

Consider carefully if a custom icon is needed.

The check-icon is a standard icon for the switch component and will in all situations.

[Iconography →](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

![Use of other icons](switch/use-of-other-icons-641-312.png)
