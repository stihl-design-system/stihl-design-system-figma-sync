---
id: chip-group
title: Chip Group
category: component
importNames:
  - DSChipGroup
  - DSChip
package: "@stihl-design-system/components"
keywords:
  - chip
  - chip group
  - filter chip
  - tag
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 18691:978
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-06T09:41:09.444Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=18691-978
---

# Chip Group

## Chip Group

Overview:

- The chip group is an interactive element.
   - Check out the flag component, for the read-only component.
- There are three types of chip group implementations:
   - Single select: primarily for a single selection, similar to the radio group component.
   - Multi select: all chips can be selected, similar to the checkbox group component.
   - Removable: primarily for refining content by applying filters.
- The chip itself is binary: selected or unselected
- For different use cases and viewports, the chip comes in two sizes and densities. There are no limitations when to use which.
- Use icons sparingly, as too many icons in an interface might impose unnecessary cognitive load.
- Chips from different groups cannot be listed under the same group label.
- Place selectable chips close to the filtered list.
- A suggestion chip is technically a link and not a chip. Use a [small outline button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=165-346&t=RKNZaDb3abSpUHQX-4) instead.

![Chip Group](chip-group/chip-group-18693-1144.png)

_Figure: Text in the figure: "Chip", "enabled", "hover/pressed", "focus", "disabled", "Selectable", "selected: false", "selected: true", "Removable"._

![Chip Group](chip-group/chip-group-19505-3523.png)

_Figure: Shows chip (label=Chip, leading icon, type=selectable, state=enabled, size=medium, selected=false); chip (leading icon, label=Chip, type=selectable, state=enabled, size=small, selected=false); chip (leading icon, label=Chip, type=removable, state=enabled, size=medium, selected=false); chip (leading icon, label=Chip, type=removable, state=enabled, size=small, selected=false). Text in the figure: "Chip group", "medium", "small", "Label", "Chip", "selectable", "removable"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-chip-group--documentation)

Decision tree

### Related elements

[Checkbox Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=1017-2316)

[Flag](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=19511-2443)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=860-2728)

[Switch](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=513-2)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

[Combobox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=2659-3954)

[Select](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=8139-4888)

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=162-126)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Chip group

1. **Chip group label (optional)**
1. **Icon (optional)**
1. **Chip label**
1. **Close icon (optional)**

![Chip group](chip-group/chip-group-18693-1163.png)

_Figure: Shows chip-group (lable, type=removable, size=medium). Callouts 1, 2, 3, 4. Text in the figure: "Label", "Chip"._

#### Selectable chip

Use primarily for a binary selection, similar to checkbox. The unselected chips are initially visible in the interface.

The chip has 2 states that are different in color: selected or unselected.

1. **Icon (optional)**
1. **Chip label**

![Selectable chip](chip-group/selectable-chip-19250-136.png)

_Figure: Shows chip (label=Chip, leading icon, type=selectable, state=enabled, size=medium, selected=false); chip (leading icon, label=Chip, type=selectable, state=enabled, size=medium, selected=true). Callouts 1, 2. Text in the figure: "Chip", "unselected", "selected"._

#### Removable chip

Use primarily for refining lists by applying filters. The chips will appear in the interface, after the attribute is activated.

The chip has 2 states that are different in perceptivity: visible and not visible.

1. **Icon (optional)**
1. **Chip label**
1. **Close icon**

![Removable chip](chip-group/removable-chip-19250-117.png)

_Figure: Shows chip (leading icon, label=Chip, type=removable, state=enabled, size=medium, selected=false). Callouts 1, 2, 3. Text in the figure: "Chip", "selected"._

#### Size and density

For different use cases and viewports, the chip comes in two sizes. Only the padding is different:

1. **Medium size**
1. **Small size**

![Size and density](chip-group/size-and-density-19250-193.png)

_Figure: Shows chip (label=Chip, type=selectable, state=enabled, size=medium, selected=false); chip (label=Chip, type=selectable, state=enabled, size=small, selected=false). Callouts 1, 2. Text in the figure: "Chip"._

#### Do not combine medium and small

The different sized may not be combined in the same list.

![Do not combine medium and small](chip-group/do-not-combine-medium-and-small-19448-119.png)

_Figure: Don't example. Shows chip-group (lable, type=selectable, size=small). Text in the figure: "Easy start mechanisms:", "Smart start technology", "Primer bulb", "decompression mechanism", "Automatic choke", "Inertia-activated chain brake"._

#### Overflow of the label

The chip label can not be two lines.

Tip: test the length of the label in all viewports.

![Overflow of the label](chip-group/overflow-of-the-label-19250-232.png)

_Figure: Don't example. Shows chip-group (lable, type=selectable, size=small). Text in the figure: "Easy start mechanisms:", "Smart start technology", "decompression mechanism", "Inertia-activated chain brake", "Automatic choke", "Primer bulb"._

### Group

#### Single select or multi select

The selectable chips are always in a group. For different use cases, the chip group can be...

1. **Single select** (similar to a [radio group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728))
1. **Multi select** (similar to a [checkbox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316) group)

![Single select or multi select](chip-group/single-select-or-multi-select-19230-76.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium); chip-group (type=selectable, size=small). Callouts 1, 2. Text in the figure: "Diameter of your machine:", "230 mm", "300 mm", "250 mm", "400 mm", "What cutting wheel diameters are you interested in?"._

#### Stack all chips in the group

In a chip, the container width is automatically adjusted according to the content length.

This option is available when there are two or more items.

![Stack all chips in the group](chip-group/stack-all-chips-in-the-group-20229-3219.png)

_Figure: Shows chip-group (lable, type=selectable, size=small). Text in the figure: "content", "Label:", "Chip"._

#### Group width

Follow the width of the [content grid “narrow”.](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Group width](chip-group/group-width-19250-155.png)

_Figure: Shows chip (label=Chip, type=selectable, state=enabled, size=small, selected=false). Text in the figure: "Label:", "Chip"._

## Content and Assets

### Concise labels

Use short words in simple language. They must be easy to understand. Also, avoid abbreviations for accessibility reasons.

![Concise labels](chip-group/concise-labels-18693-1194.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium). Text in the figure: "Safety classes:", "Class 0", "Class 1", "Class 2"._

### Length

Around 3-40 characters, depending on the viewport, as the labels are not allowed to truncate.

The length of all labels chips in a group can be of diverse length.

![Length](chip-group/length-19230-87.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium). Text in the figure: "Type of propulsion:", "Battery", "Fuel", "Corded electric"._

### Icon usage

Use icons sparingly, as too many icons in an interface might impose unnecessary cognitive load.

**Preferred**: use icons from the library. **Custom icons** can also be used:

- Size & format: Square SVG, transparent background, rendered in a fixed 16×16px box. See [Iconography Guidelines](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?node-id=9857-3242) for details.
- Theme & state: Custom icons do not adapt to theme, selected, or disabled state. Design them with sufficient contrast on light and inverse (dark) backgrounds, and on unselected and selected backgrounds.
- Accessibility: When using custom icons, keep color contrast (WCAG AA 3:1) in mind so the icon stays legible across all backgrounds and states.
- Disabled chips: Prefer library icons here; a custom icon keeps full contrast even when disabled, which can misleadingly look "active."

![Icon usage](chip-group/icon-usage-19250-264.png)

_Figure: Shows chip-group (type=selectable, size=medium). Text in the figure: "Library Icons", "Battery", "Fuel", "Corded electric", "Custom Icons", "Team X", "Team Y", "Team Z"._

### Group label

#### Use “:”

In some cases the group has a label. For the chip group it is recommended to use an “:” after the label.

![Use “:”](chip-group/use-19608-834.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium). Text in the figure: "Safety classes:", "Class 0", "Class 1", "Class 2"._

#### Activate the user

In some cases it is wise to use the verb “select” in the group label, to inform the user about the action needed.

In most cases a colon is recommended.

![Activate the user](chip-group/activate-the-user-19690-1627.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium). Text in the figure: "Select a safety class:", "Class 0", "Class 1", "Class 2"._

### Semantic structure

#### Do not combine selectable and removable in the same list

It is not allowed to combine both **(1)** removable chips and **(2)** input selectable in the same list.

![Do not combine selectable and removable in the same list](chip-group/do-not-combine-selectable-and-removable-in-the-same-list-19250-275.png)

_Figure: Don't example. Shows chip-group (lable, type=selectable, size=small). Callouts 1, 2. Text in the figure: "Easy start mechanisms:", "Smart start technology", "decompression mechanism", "Inertia-activated chain brake", "Automatic choke", "Primer bulb", "AP System"._

#### Don’t mix chips with a different purpose

Chips with a different function and therefore purpose cant be in one group.

![Don’t mix chips with a different purpose](chip-group/don-t-mix-chips-with-a-different-purpose-19230-81.png)

_Figure: Don't example. Shows chip-group (type=selectable, size=small). Text in the figure: "Recommended for you", "Cutting tools (2)", "operating materials (5)", "Sharpening tools (1)", "Workwear (4)"._

## Behavior

### Browser default tooltip

The screenreader explains the action, examples are:

- Selectable chip: Deactivate property **(1)**
   - e.g. machine status
- Removable chip: Remove filter **(2)**
   - e.g. product category

![Browser default tooltip](chip-group/browser-default-tooltip-19250-250.png)

_Figure: Shows chip (leading icon, label=Chip, type=selectable, state=hover/pressed, size=medium, selected=true); chip (leading icon, label=Chip, type=removable, state=hover/pressed, size=medium, selected=false). Callouts 1, 2. Text in the figure: "Chip", "Deactivate property", "Remove filter"._

### Chips that appear by user interactions

Removable chips are initially not part of the interface. The user must use a (filter) function to select properties.

The chips will appear in the interface. Ideally, close to the filtered list.

![Chips that appear by user interactions](chip-group/chips-that-appear-by-user-interactions-18693-1177.png)

_Figure: Do example. Shows select (label, input, state=enabled, invalid=false, size=medium); chip-group (lable, type=removable, size=small). Text in the figure: "Are of expertise", "IT & Digital", "Location", "Ludwigsburg, Waiblin...", "Level of experience", "Senior level", "Results for:", "Ludwigsburg", "Waiblingen", "Senior Level"._

### Select chips to reveal the group label

The group label appears only together with a chip, e.g. after the the first chip is selected.

When all chips are deselected, the group label disappears again.

![Select chips to reveal the group label](chip-group/select-chips-to-reveal-the-group-label-20673-1831.png)

_Figure: Shows select (label, input, state=enabled, invalid=false, size=medium). Text in the figure: "Are of expertise", "Select...", "Location", "Level of experience"._

## Examples/Variants

### Filter horizontal

- Removable chips are ideal to display immediately below the horizontal filter.
- The label of the chip group is optional, as the context is clear, due to the proximity.

![Filter horizontal](chip-group/filter-horizontal-18693-1204.png)

_Figure: Shows select (label, input, state=enabled, invalid=false, size=medium); chip-group (type=removable, size=small); button (button text=Delete all filters, variant=ghost, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Area of expertise", "IT & Digital", "Location", "Ludwigsburg, Waiblin...", "Level of experience", "Senior level", "Ludwigsburg", "Waiblingen", "Delete all filters"._

### Filter mobile

- The filter opens in a drawer.
- Removable chips are ideal to display immediately below the button.
- The label of the chip group is optional, as the context is clear, due to the proximity.

![Filter mobile](chip-group/filter-mobile-19901-1638.png)

_Figure: Shows button (button text=Filter, variant=filled, state=enabled, size=medium, icon position=left, hide label=off, flush alignment=off); chip-group (type=removable, size=small); button (button text=Delete all filters, variant=ghost, state=enabled, size=small, icon position=none, hide label=off, flush alignment=on). Text in the figure: "Filter", "IT & Digital", "Ludwigsburg", "Waiblingen", "Senior level", "Delete all filters"._

### Filter sidebar

- Use the removable chips.
- The chips may be placed further away from the filter.
- A group label helps to understand the grouped list.

![Filter sidebar](chip-group/filter-sidebar-19250-100.png)

_Figure: Do example._

### Do not use selectable chips in complex filters

Do not use selectable chips inside a complex filter, e.g. located in a sidebar, as lists will increase visual clutter and therefore impose unnecessary cognitive load.

![Do not use selectable chips in complex filters](chip-group/do-not-use-selectable-chips-in-complex-filters-19250-74.png)

_Figure: Don't example._

### Filter simple

- A simple filter has around 5 attributes.
- Use the selectable chips, if the interface is spacious enough

![Filter simple](chip-group/filter-simple-19250-105.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium). Text in the figure: "Type of propulsion:", "Battery", "Fuel", "Corded electric"._

### Suggestion links

A common variation of the chip is the **suggestion chip**. These suggestions are technically links and not chips.

Use a [small outline button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=165-346&t=RKNZaDb3abSpUHQX-4) instead.

![Suggestion links](chip-group/suggestion-links-19250-285.png)

_Figure: Shows button (button text=Sharpen chainsaw chain, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Chainsaw spare parts, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Chainsaw oil, variant=outline, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Popular searches:", "Sharpen chainsaw chain", "Chainsaw spare parts", "Chainsaw oil"._

### Do not use selectable chips in a combobox component

In a combobox component, as scrolling must be avoided.

**Recommendation:** The [checkbox group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=5626-11362&t=RKNZaDb3abSpUHQX-4) is compact and easy to read, as the checkboxes are all aligned.

![Do not use selectable chips in a combobox component](chip-group/do-not-use-selectable-chips-in-a-combobox-component-19690-1656.png)

_Figure: Don't example. Shows combobox (dropdown, state=active/focus, invalid=false); chip (label=Lawn Care, type=selectable, state=enabled, size=small, selected=false); chip (label=Pruning and Trimming, type=selectable, state=enabled, size=small, selected=false); chip (label=Weed Control, type=selectable, state=enabled, size=small, selected=false); chip (label=Soil and Mulching, type=selectable, state=enabled, size=small, selected=false); chip (label=Hardscape Maintenance, type=selectable, state=enabled, size=small, selected=false). Text in the figure: "Garden maintenance", "|", "Lawn Care", "Pruning and Trimming", "Weed Control", "Soil and Mulching", "Hardscape Maintenance"._

### Checkbox group, switch button or chip group?

**Warning:** The chip group takes up a lot of space and the list is harder to read.

**Warning:** The [switch component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=513-121&t=RKNZaDb3abSpUHQX-4) is not an input element, don’t use it in filters.

**Recommendation:** The [checkbox group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=5626-11362&t=RKNZaDb3abSpUHQX-4) is compact and easy to read, as the checkboxes are all aligned.

![Checkbox group, switch button or chip group?](chip-group/checkbox-group-switch-button-or-chip-group-19448-125.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium); switch (label links, Label=Battery-powered machines, state=enabled, checked=true); checkbox-group (legend=Type of propulsion:, hint=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget., legend, direction=vertical). Text in the figure: "Chip Group", "Type of propulsion:", "Battery", "Fuel", "Switch", "Battery-powered machines", "Checkbox Group"._

### Chip group or radio group?

**Warning:** The chip group takes up a lot of space and the list is harder to read.

**Recommendation:** The [radio group component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=860-2729&t=oWORc7O39VJU5gMH-4) is compact and easy to read, as the radios are all aligned.

![Chip group or radio group?](chip-group/chip-group-or-radio-group-20227-2976.png)

_Figure: Shows chip-group (lable, type=selectable, size=medium); radio-group (item 5, legend, item 3, legend=Cutting wheel diameter:, item 4, hint=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget., orientation=vertical, show title=false). Text in the figure: "Chip Group", "Diameter of your cutting wheel:", "230 mm", "300 mm", "250 mm", "400 mm", "Radio Group", "Cutting wheel diameter:", "350 mm"._
