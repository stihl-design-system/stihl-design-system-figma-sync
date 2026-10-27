---
id: tabs
title: Tabs
category: component
importNames:
  - DSTabs
  - DSNavigationTabs
package: "@stihl-design-system/components"
keywords:
  - tabs
  - in-page tabs
  - navigation tabs
  - tab bar
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 24564:312
figmaVersion: "2410599903007017519"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-10-15T14:34:29Z
syncedAt: 2026-10-27T13:35:17.231Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=24564-312
---

# Tabs

## Tabs in-page

Overview:

- The components main function is to switch the visible pane on the same page.
   - In case the resting tabs contain a link, use the tabs navigation component (see below)
- The tabs in-page must be positioned within the grid, the tab list can be left- or center- aligned.
- A clear headline gives guidance and context to the tab list.
- Avoid long lists in tabs, tabs that are initially hidden are less discoverable and therefore compromises usability.

> Tabs in-page and tabs navigation are stored together as a single component in Figma.

![Tabs in-page](tabs/tabs-in-page-24686-11442.png)

![Tabs in-page](tabs/tabs-in-page-24564-326.png)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-tabs--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

Decision tree

### Related elements

[Tabs Navigation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=24564-335)

[Accordion](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=17260-166)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Selected tab item**
1. **Unselected tab item(s)**
1. **Icon (optional)**
1. **Label**
1. **Number indicator (optional)**
1. **Overflow button (optional)**
1. **Content pane**

![Anatomy](tabs/anatomy-24564-364.png)

### Overflow

#### A tab overflow must be indicated with a button

The width of tab items adjusts dynamically to their content. If the total number of tabs exceeds the available width, an overflow occurs.

![A tab overflow must be indicated with a button](tabs/a-tab-overflow-must-be-indicated-with-a-button-25085-15198.png)

#### A tab list cannot wrap

The tab list cannot span two rows, as it disrupts the overview and hierarchy.

![A tab list cannot wrap](tabs/a-tab-list-cannot-wrap-25085-15221.png)

#### The tab item label cannot wrap

The label of the tab item cannot span two lines, as it disturbs the legibility.

![The tab item label cannot wrap](tabs/the-tab-item-label-cannot-wrap-25085-15244.png)

### Spacings

#### Dynamic spacings

The dynamic spacings adjust based on the breakpoint, providing a more compact layout on smaller devices and a more spacious one on larger screens.

> The Figma components default is ‘Breakpoint s’ and must be manually changed when used for larger breakpoints.

![Dynamic spacings](tabs/dynamic-spacings-25114-15885.png)

### Placement

#### Within the grid

The tab in-page must be positioned within the grid and can span either the full width of the main content area **(1)** or the narrow content area **(2)**.

![Within the grid](tabs/within-the-grid-24564-381.png)

#### Warning: nesting tabs in tabs

Nested tabs are hard to find and may compromise discoverability and usability.

If a use case requires nested tabs, make sure to test it with real users.

![Warning: nesting tabs in tabs](tabs/warning-nesting-tabs-in-tabs-25085-15615.png)

### Alignment

#### Align the tab list to the left or to the center

The tab list can be aligned to either the left **(1)** or the center **(2)**.

The choice depends on the overall layout, as each option provides enhanced visibility and is better suited to accommodate various types of content.

In most cases, left alignment preferred, as it aligns with typical user reading behavior, also known as the ‘F-pattern’.

![Align the tab list to the left or to the center](tabs/align-the-tab-list-to-the-left-or-to-the-center-25085-15702.png)

#### Align the tab list with the tab pane

The tabs in-page, run as wide as the content pane.

![Align the tab list with the tab pane](tabs/align-the-tab-list-with-the-tab-pane-25290-6413.png)

#### On smaller screens align the tabs to the left

To make more labels visible, left-align the tab list on smaller screens.

![On smaller screens align the tabs to the left](tabs/on-smaller-screens-align-the-tabs-to-the-left-24564-396.png)

### Motion

#### Selected tab indicator: horizontal movement of active border

**Animation type:** move to next tab (either left or right) **Duration:** 250ms **Easing:** motion-functional-ease-out

[Motion guidelines →](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

![Selected tab indicator: horizontal movement of active border](tabs/selected-tab-indicator-horizontal-movement-of-active-border-25085-15191.png)

## Content and Assets

### Consistent and plain language

- Long labels take up a lot of space.
- A tab label ideally is around 1-2 words.
- Favor nouns over verbs

![Consistent and plain language](tabs/consistent-and-plain-language-24564-456.png)

### Context on the page

This tabs component is **in-page** and therefore always below the page title or another headline

A clear headline gives guidance and context to the tab list.

![Context on the page](tabs/context-on-the-page-25111-2008.png)

### 3 or more words in a tab label

Long labels are hard to recognize as a clickable area, especially mobile.

![3 or more words in a tab label](tabs/3-or-more-words-in-a-tab-label-24564-461.png)

### Be aware of duplicate words

In some cases, the title appears directly above the tab list. To enhance clarity, avoid duplicating words in the title and short tab lists. For longer tab lists, duplication may be necessary to ensure context.

![Be aware of duplicate words](tabs/be-aware-of-duplicate-words-25123-2048.png)

### Don’t: truncate a tab label

Copy inside a tab label does not truncate, because it harms accessibility.

![Don’t: truncate a tab label](tabs/don-t-truncate-a-tab-label-25123-2097.png)

### Icon usage

- Use icons to guide users, not for decoration, to prevent unnecessary clutter in the interface.
- On smaller screens, icons can occupy more space and limit the number of visible tabs.
- If icons are used, they must appear on all tab items.
   - **Exception:** If the first tab displays “all items”, while the other tabs provide filtered subsets of the same list, the icon can be omitted in the first tab.

![Icon usage](tabs/icon-usage-24564-471.png)

### Integrated number indicator

- On the right side of the label, an integrated number indicator can be placed.
- If number indicators are used, most likely they appear on all tabs in the list.

[Number indicator guidelines →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=24240-47126)

![Integrated number indicator](tabs/integrated-number-indicator-24867-1314.png)

### Icon and number indicator

Be aware of visual clutter and harming the cognitive load of the user, when both icon and the number indicator are visible.

![Icon and number indicator](tabs/icon-and-number-indicator-25128-2101.png)

### Amount of tabs

#### Minimum is two tabs

- A tab can never be alone.
- Two tabs is the minimum amount.
- There is no maximum amount defined.

![Minimum is two tabs](tabs/minimum-is-two-tabs-24564-477.png)

#### Discoverability problem: high amount of tabs

Tabs that are initially hidden are less discoverable, as the user must scroll/navigate the arrows in order to see them.

![Discoverability problem: high amount of tabs](tabs/discoverability-problem-high-amount-of-tabs-24564-482.png)

#### Order the tabs by importance and/or relevance

- Place the most relevant tabs in the beginning of the list. E.g.
   - Most relevant for business.
   - Most relevant for the user.
- Consider what data sources you have to decide what tabs are most important.

![Order the tabs by importance and/or relevance](tabs/order-the-tabs-by-importance-and-or-relevance-24564-487.png)

#### On smaller screens, most tabs may extend beyond the visible area

Short copy is even more essential on mobile devices to display more tabs.

![On smaller screens, most tabs may extend beyond the visible area](tabs/on-smaller-screens-most-tabs-may-extend-beyond-the-visible-a-24564-492.png)

## Behavior

### Don’t: system feedback

Do not place any elements that needs system verification in a tab component. System feedback will be hidden or hard to find.

![Don’t: system feedback](tabs/don-t-system-feedback-25295-5709.png)

### Overflow behaviour

1. **Cursor navigation:** horizontal movement only by clicking buttons.
1. **Touch navigation**: horizontal movement by tapping button or dragging.

![Overflow behaviour](tabs/overflow-behaviour-25123-2131.png)

### Content pane

#### First tab label is selected by default

The first tab is the selected tab and the content pane is visible.

No trigger is needed to display the first pane.

![First tab label is selected by default](tabs/first-tab-label-is-selected-by-default-24564-431.png)

#### One content pane is visible

It is not possible to have more panes open at the same time:

- only 1 tab is selected at a time.
- only 1 content pane is visible at a time.

The user has full control over the content that is visible.

![One content pane is visible](tabs/one-content-pane-is-visible-24564-436.png)

## Examples/Variants

### Common use cases

#### Tab in-page vs. tab navigation

1. **Tabs in-page:** allow to view different content panes on a page.
   - Most likely below the page title.
1. **Tabs navigation:** offer links to other pages in the same level.
   - Most likely above the page title.

[Tab navigation component →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=24564-335)

![Tab in-page vs. tab navigation](tabs/tab-in-page-vs-tab-navigation-24564-503.png)

#### Tabs to hide and show content

Structure content into bitable sizes, in order to reduce the cognitive load.

Optimize for the use case that is most likely to be the most relevant.

Example: Most people that visit the website are private consumers and not an authorized STIHL dealer.

![Tabs to hide and show content](tabs/tabs-to-hide-and-show-content-25128-4363.png)

#### Tabs to filter cards

In some cases a tab list helps users to filter cards. Use up to 5-7 tab items in the tab list.

![Tabs to filter cards](tabs/tabs-to-filter-cards-25128-9628.png)

#### Filter: tabs in-page, checkbox group or chip group?

1. **Tabs:**
   1. A content component to switch the visible pane.
   1. Tabs organize content, not filter content.
   1. Use for short lists.
   1. If items in the list can overlap, tabs might be confusing.
1. **Checkbox group:**
   1. A selection component for characteristics.
   1. Combine with a button to set the filter.
   1. Use for long lists, as it is easy to scan.
   1. Use for complex filters with multiple grouped categories.
1. **Chip group:**
   1. A selection component for characteristics.
   1. Filter is instantly set.
   1. Use for short lists.
   1. If filters can overlap, choose the multi-select variant.

![Filter: tabs in-page, checkbox group or chip group?](tabs/filter-tabs-in-page-checkbox-group-or-chip-group-24564-513.png)

### STIHL use cases

#### STIHL dealer search

In the STIHL dealer search web app the tabs are placed on top of a map. The tabs are combined with a search and filter functionality.

![STIHL dealer search](tabs/stihl-dealer-search-25128-4532.png)

## Tabs navigation

Overview:

- The components main function is to navigate to another page url.
   - In case the other tabs activate a content pane to switch, use the tabs in-page (see above)
- Tabs navigation can be extended beyond the grid to span the full width of the full content area.
- Left alignment is default and preferred option, as it aligns with typical user reading behavior, also known as the ‘F-pattern’.
- The tabs navigation component is a link list and often used as secondary navigation.

> Tabs in-page and tabs navigation are stored together as a single component in Figma.

![Tabs navigation](tabs/tabs-navigation-25290-6868.png)

![Tabs navigation](tabs/tabs-navigation-25290-7285.png)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-navigation-tabs--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

Decision tree

### Related elements

[Chip group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=18691-978)

[Skip Link](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=16333-2371)

[Checkbox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=1017-2316)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Anatomy

1. **Selected tab**
1. **Unselected tab(s)**
1. **Icon (optional)**
1. **Label**
1. **Number indicator (optional)**
1. **Overflow button (optional)**

![Anatomy](tabs/anatomy-25128-2867.png)

### Placement

#### Horizontal placement: grid

The tab navigation can either be placed within the grid, spanning the main content area’s full width **(1)**, or extend beyond the grid to span the full content area **(2)**.

![Horizontal placement: grid](tabs/horizontal-placement-grid-25295-5735.png)

#### Horizontal placement: grid sidebar

For use cases with 1 or 2 sidebars the tab navigation must extend beyond the grid to span the full content area.

[Full content area guideline →](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Horizontal placement: grid sidebar](tabs/horizontal-placement-grid-sidebar-25299-14151.png)

#### Vertical placement

Tabs navigation that extends beyond the grid can be placed below **(1)** or above **(2)** the page title.

can help to distinguish the page areas.

background-color-secondary

![Vertical placement](tabs/vertical-placement-25290-7373.png)

### Alignment

#### Align the tab list to the left or to the center

The tab list can be aligned to the left **(1)** or to the center **(2)**.

Left alignment is default and preferred option, as it aligns with typical user reading behavior, also known as the ‘F-pattern’.

Center alignment can be used in for some use cases, if it enhances the discoverability of the tab list.

![Align the tab list to the left or to the center](tabs/align-the-tab-list-to-the-left-or-to-the-center-25299-18430.png)

#### Align the tab items with the content

Even if the tab component extends beyond the grid, the tab items themselves must always align with content below and cannot run wider.

![Align the tab items with the content](tabs/align-the-tab-items-with-the-content-25299-18469.png)

## Behavior

> Most of the “Behaviour” guidelines from the Tabs in-page component apply, see above.

### Tab contains a link

- Every tab contains a link target with an url.
- On click, a reload is triggered.
- For a content pane switch, use the Tabs in-page component (see above).

![Tab contains a link](tabs/tab-contains-a-link-25227-3342.png)

## Examples/Variants

> Most of the “Examples/Variants” guidelines from the Tabs in-page component apply, see above.

### Common use cases

#### Tab in-page vs. tab navigation

1. **Tabs navigation:** offer links to other pages in the same level.
   - Most likely above the page title.
1. **Tabs in-page:** allow to view different content panels in a page.
   - Most likely below the page title.

[Tab in-page component →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=24564-313)

![Tab in-page vs. tab navigation](tabs/tab-in-page-vs-tab-navigation-25227-2827.png)

#### Navigation as a main purpose

The tabs navigation component is a link list and often used a secondary navigation (used for secondary tasks).

It can be combined with a main navigation, e.g. a

1. **Sidebar**
1. **Top bar**

![Navigation as a main purpose](tabs/navigation-as-a-main-purpose-25327-3481.png)

### STIHL use cases

#### Category pages in the stihl webshop

Some product category overview pages in the web shop contain a tab list to categorize specific product categories.

The tabs are combined with a more complex filter.

![Category pages in the stihl webshop](tabs/category-pages-in-the-stihl-webshop-25227-3009.png)

#### STIHL Service Center (SSC)

The portal offers a search function of which search results are categorized into: ‘Product variants’, ‘Parts’, ‘Documents’ and ‘Support news’ results.

![STIHL Service Center (SSC)](tabs/stihl-service-center-ssc-25227-3273.png)
