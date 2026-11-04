---
id: pagination
title: Pagination
category: component
importNames:
  - DSPagination
package: "@stihl-design-system/components"
keywords:
  - pagination
  - pager
  - page navigation
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 26075:11456
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:46:36.920Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11456
---

# Pagination

## Pagination

**Pagination** is a navigation component that divides large data sets into discrete pages and allows users to move between them in a controlled way.

It can improve performance and reduces cognitive load by limiting the amount of information displayed at once.

As a structured data navigation pattern, Pagination provides clear orientation within large collections of content and enables efficient access to specific segments.

**When to use**

Use pagination when working with large amounts of structured or repeated data,, such as:

- Tables
- Lists and list views (e.g. search results)
- Card grids (e.g. product listings)

Pagination is especially useful when users need control, orientation, or the ability to access specific pages.

**When not to use**

Pagination should not be used as a default for continuous or media-driven experiences.

Avoid using pagination for:

- Image or video sliders
- Carousels or media galleries

These patterns support storytelling and exploration and are based on sequential browsing rather than structured navigation.

**Use cases**

- Data tables
- Search results
- Product lists
- Card-based content grids

### Alternative Loading Patterns

**Component**

**Description**

**Pagination**

- For Structured navigation with clear orientation within large data sets
- Direct access to specific pages
- Reduces cognitive load through segmentation

**Load More Button**

- Good for exploratory UIs
- Less control, but a smoother feel
- Alternative for lists and visual grids

**Infinite Scroll**

- For consumer experiences (feeds, social media)
- Not recommended for enterprise workflows

![Alternative Loading Patterns](pagination/alternative-loading-patterns-47201-10046.png)

_Figure: Shows page size (label=Items per page:); range indicator (unit=items, releation=of, item count - total=1000, item range - end=50, item range - start=10); page navigation (page items=9, active page=middle). Text in the figure: "Pagination", "Items per page:", "100", "10", "—", "50", "of", "1000", "items", "1", "...", "5", "6", "7", "8", "9", "stacked: false", "stacked: true"._

![Alternative Loading Patterns](pagination/alternative-loading-patterns-47220-5991.png)

_Figure: Shows button (button text=Button, variant=filled, state=disabled, size=small, icon position=none, hide label=on, flush alignment=off); page number item (type=active, state=default); pagination navigation items (variant=divider element); page number item (type=enabled, state=default); pagination navigation items (variant=ellipsis); helper-next-link (state=enabled); button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); page navigation items (variant=divider element); page navigation items (variant=ellipsis); helper-next-link (state=disabled); button (button text=10, variant=ghost, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=10, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Building Elements Pagination", "page navigation", "1", "2", "3", "...", "50", "7", "48", "49", "4", "5", "6", "8", "46", "47", "9", "44", "45", "page number item", "page items: 5", "active page: first", "enabled", "active"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-pagination--documentation)

### Related elements

[Table](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11792)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Pagination

The Pagination consists of a Page Navigation and optional Pagination Controls:

1. **Page Navigation** Allows users to move between pages
1. **Pagination Controls (optional)** Provide additional context and configuration for pagination.

![Pagination](pagination/pagination-47220-5154.png)

_Figure: Shows annotation-circle (number=2, type=top, color=blue); annotation-circle (number=1, type=top, color=blue); pagination (pagination controls, page size, stacked=false). Callouts 1, 2. Text in the figure: "Items per page:", "100", "10", "—", "50", "of", "1000", "items", "1", "...", "5", "6", "7", "8", "9"._

#### Page Navigation

1. **Previous link** Navigates to the previous page in the sequence.
1. **Next link** Navigates to the next page in the sequence.
1. **Page numbers** A centered group of Page number items and ellipsis.
1. **First page link** Navigates directly to the first page.
1. **Last page link** Navigates directly to the last page.
1. **Page number item** Navigates to a specific page within the sequence.
1. **Current page** Indicates the currently active page.
1. **Ellipsis** Indicates that additional pages exist outside the visible range.
1. **Divider** Separates navigation elements.

![Page Navigation](pagination/page-navigation-50759-37703.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); page navigation (page items=9, active page=middle); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=4, type=top, color=blue); annotation-circle (number=6, type=top, color=blue); annotation-circle (number=7, type=top, color=blue); annotation-circle (number=8, type=top, color=blue); annotation-circle (number=5, type=top, color=blue); annotation-circle (number=9, type=bottom, color=blue). Callouts 1, 2, 3, 4, 5, 6, 7, 8, 9. Text in the figure: "1", "...", "5", "6", "7", "8", "9", "50"._

#### Pagination controls (optional)

1. **Page Size** Allows users to define how many items are displayed per page.
   1. **Label**
   1. **Selector (Dropdown / Select)**
1. **Range Indicator** Displays the range of items currently visible on the page.
   1. **Item Range**
   1. **Total Item Count**

![Pagination controls (optional)](pagination/pagination-controls-optional-47559-8662.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); pagination (pagination controls, page size, stacked=true); annotation-circle (number=1a, type=bottom, color=blue); annotation-circle (number=1b, type=bottom, color=blue); annotation-circle (number=2a, type=bottom, color=blue); annotation-circle (number=2b, type=bottom, color=blue). Callouts 1, 2. Text in the figure: "Items per page:", "100", "10", "—", "50", "of", "1000", "items", "1a", "1b", "2a", "2b"._

### Placement

1. Pagination is typically placed below the content it controls.
1. For tables or large datasets, an additional Pagination component may be placed at the top to improve usability by reducing the need for excessive scrolling. However, pagination at the bottom remains mandatory.

![Placement](pagination/placement-47272-11342.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); top-bar\_logo (internal (do not modify) 🖥️ breakpoint=⛔️ internal (do not modify): m - xl); action-item (label=Contact, state=enabled, stacking=vertical, leading-element=icon, chevron=false, label-weight=regular, indent=false); button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off). Callouts 1, 2._

### Alignment

1. **Right alignment is the default**, as pagination typically functions as a control within a broader set of actions (e.g. filtering or sorting), making it more predictable when grouped on the right.
1. **Center alignment may be used** when pagination is part of a content consumption flow, where users expect the “next” step to appear at the end of the content. This applies only to Page Navigation without additional controls.

![Alignment](pagination/alignment-50857-43334.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); top-bar\_logo (internal (do not modify) 🖥️ breakpoint=⛔️ internal (do not modify): m - xl); action-item (label=Contact, state=enabled, stacking=vertical, leading-element=icon, chevron=false, label-weight=regular, indent=false); button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); annotation-circle (number=2, type=center, color=blue). Callouts 1, 2. Text in the figure: "Page Navigation + Pagination Controls", "Page Navigation + Pagination Controls - stacked", "Page Navigation"._

## Behavior

### Responsive Behavior

The pagination component adapts to available screen width.

- Pagination controls and page navigation may **wrap or stack** vertically when space is limited.
- On smaller screens, emphasis shifts to previous and next navigation, while page number items are being reduced to **a minimum of three visible pages** (first, current, last).
- Page size and range indicators remain accessible but may reposition or stack to preserve readability.

![Responsive Behavior](pagination/responsive-behavior-47578-12673.png)

_Figure: Shows pagination (pagination controls, page size, stacked=false); pagination (pagination controls, page size, stacked=true). Text in the figure: "breakpoint: XL-M page items: 9", "Items per page:", "100", "10", "—", "50", "of", "1000", "items", "1", "...", "5", "6", "7", "8", "9", "breakpoint: M page items: 9 stack from 976px screen width", "breakpoint: S page items: 7, from 518px screen width", "breakpoint: S page items: 5, from 428px screen width", "breakpoint: S page items: 5 pagination controls stack from 341px screen width"._

### Page Navigation Behaviour

The visible page range adapts dynamically based on the **current page:**

1. At the beginning, the pagination shows the first pages in sequence followed by an ellipsis and the last page.
1. As the user navigates forward, the current page moves into the center and the range shifts to show surrounding pages.
1. In the middle, the pagination displays previous, current, and next pages, with ellipses on both sides.
1. Near the end, the range expands toward the last pages, keeping the last pages visible in sequence.

The first and last pages remain accessible at all times. Previous and next controls are disabled at the boundaries.

A maximum of 5–7 visible page links should be used; too many numbers are overwhelming and unscannable.

![Page Navigation Behaviour](pagination/page-navigation-behaviour-47291-2806.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); page navigation (page items=7, active page=first); annotation-circle (number=2, type=center, color=blue); page navigation (page items=7, active page=first third); annotation-circle (number=3, type=center, color=blue); page navigation (page items=7, active page=middle); annotation-circle (number=4, type=center, color=blue); page navigation (page items=7, active page=last). Callouts 1, 2, 3, 4. Text in the figure: "1", "2", "3", "4", "5", "...", "50", "6", "7", "8", "46", "47", "48", "49"._

### Page Size Behaviour

Provide a small, predefined set of page size options (typically 3–5 values), for example: 10, 25, 50, and 100.

![Page Size Behaviour](pagination/page-size-behaviour-53245-7423.png)

_Figure: Shows helper select items (value=10); helper select items (value=25); helper select items (value=50); helper select items (value=100). Text in the figure: "value: 10", "value: 25", "value: 50", "value: 100", "10", "25", "50", "100"._

## Accessibility

### Focus management

Focus must remain stable when navigating between pages.

After a page change, focus should stay on the triggered pagination control to preserve context and ensure continuous keyboard navigation.

![Focus management](pagination/focus-management-50869-34574.png)

_Figure: Shows page navigation (page items=9, active page=middle). Text in the figure: "1", "...", "5", "6", "7", "8", "9", "50"._

### Scroll behavior

**Do maintain the user’s current scroll position** when navigating between pages to preserve context and support accessibility.

![Scroll behavior](pagination/scroll-behavior-53356-6093.png)

_Figure: Do example. Shows button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off)._

**Don’t automatically scroll to the top of the page** when switching pages, as it can disrupt context and confuse users, especially those using screen readers.

![Scroll behavior](pagination/scroll-behavior-53356-6154.png)

_Figure: Don't example. Shows button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off)._

## Examples

### Search Result Page: Documents

![Search Result Page: Documents](pagination/search-result-page-documents-47624-20552.png)

_Figure: Shows pagination (pagination controls, stacked=false); pagination (pagination controls, stacked=true). Text in the figure: "32", "—", "40", "of", "56", "items", "1", "2", "3", "4", "5", "6", "7", "..."._

### (SSC) Search Result Page: Documents

![(SSC) Search Result Page: Documents](pagination/ssc-search-result-page-documents-47272-11475.png)

_Figure: Shows pagination (pagination controls, page size, stacked=false); pagination (pagination controls, page size, stacked=true). Text in the figure: "Rows per page:", "10", "70", "—", "80", "of", "568", "rows", "1", "...", "5", "6", "7", "8", "9", "50"._
