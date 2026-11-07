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
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-07T14:22:19.922Z
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

_Figure: Pagination component in two layouts: "stacked: false" shows the page size selector "Items per page:" (100), the range indicator "10 — 50 of 1000 items" and the page navigation (1, ..., 5, 6, 7 active, 8, 9, ..., 50 with previous and next buttons) in one row, while "stacked: true" places the page size and range indicator above the page navigation._

![Alternative Loading Patterns](pagination/alternative-loading-patterns-47220-5991.png)

_Figure: Building elements of Pagination. Left: page navigation variants with 5, 7 and 9 page items, each shown for active page first, first third, middle, last third and last, with the previous button disabled on the first page and the next button disabled on the last page. Right: page number item in enabled and active states (default, hover / pressed, focus), the page navigation items ellipsis and divider element, and the optional pagination controls with "Items per page:" select (values 10, 25, 50, 100) and the range text "10 — 50 of 1000 items"._

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

_Figure: Anatomy of Pagination: callout 1 points at the Page Navigation on the right (previous button, pages 1, ..., 5, 6, 7 active, 8, 9, ..., 50, next button), callout 2 points at the optional Pagination Controls on the left ("Items per page:" select set to 100 and the range "10 — 50 of 1000 items")._

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

_Figure: Anatomy of Page Navigation shown twice with 9 page items and page 7 active: in the top row callout 1 points at the previous link, callout 2 at the next link and callout 3 at the group of page numbers with ellipsis; in the bottom row callout 4 points at the first page link (1), callout 5 at the last page link (50), callout 6 at a page number item (5), callout 7 at the current page (7, underlined in orange), callout 8 at an ellipsis and callout 9 at a divider between items._

#### Pagination controls (optional)

1. **Page Size** Allows users to define how many items are displayed per page.
   1. **Label**
   1. **Selector (Dropdown / Select)**
1. **Range Indicator** Displays the range of items currently visible on the page.
   1. **Item Range**
   1. **Total Item Count**

![Pagination controls (optional)](pagination/pagination-controls-optional-47559-8662.png)

_Figure: Anatomy of the optional Pagination controls: callout 1 is the Page Size, made of 1a the label "Items per page:" and 1b the select showing 100; callout 2 is the Range Indicator "10 — 50 of 1000 items", made of 2a the item range (10 — 50) and 2b the total item count (1000 items)._

### Placement

1. Pagination is typically placed below the content it controls.
1. For tables or large datasets, an additional Pagination component may be placed at the top to improve usability by reducing the need for excessive scrolling. However, pagination at the bottom remains mandatory.

![Placement](pagination/placement-47272-11342.png)

_Figure: Two schematic pages with STIHL header and a grey content block. Callout 1: pagination placed right-aligned below the content it controls. Callout 2: an additional pagination placed above a tall content block (for tables or large datasets) in addition to the mandatory one below it._

### Alignment

1. **Right alignment is the default**, as pagination typically functions as a control within a broader set of actions (e.g. filtering or sorting), making it more predictable when grouped on the right.
1. **Center alignment may be used** when pagination is part of a content consumption flow, where users expect the “next” step to appear at the end of the content. This applies only to Page Navigation without additional controls.

![Alignment](pagination/alignment-50857-43334.png)

_Figure: Schematic pages showing pagination alignment. Callout 1 (default): Page Navigation + Pagination Controls, the stacked variant of it, and Page Navigation alone are all right-aligned to the content edge, marked by a dotted line. Callout 2: Page Navigation without additional controls is centered below the content, with the dotted line through the middle._

## Behavior

### Responsive Behavior

The pagination component adapts to available screen width.

- Pagination controls and page navigation may **wrap or stack** vertically when space is limited.
- On smaller screens, emphasis shifts to previous and next navigation, while page number items are being reduced to **a minimum of three visible pages** (first, current, last).
- Page size and range indicators remain accessible but may reposition or stack to preserve readability.

![Responsive Behavior](pagination/responsive-behavior-47578-12673.png)

_Figure: Pagination at five widths, each below a grey content block: breakpoint XL-M with 9 page items and controls and navigation in one row; breakpoint M with 9 page items and controls stacked above the navigation from 976px screen width; breakpoint S with 7 page items (1, ..., 6, 7, 8, ..., 50) from 518px; breakpoint S with 5 page items (1, ..., 7, ..., 50) from 428px; and breakpoint S with 5 page items where the page size select and the range indicator also stack on separate lines from 341px screen width._

### Page Navigation Behaviour

The visible page range adapts dynamically based on the **current page:**

1. At the beginning, the pagination shows the first pages in sequence followed by an ellipsis and the last page.
1. As the user navigates forward, the current page moves into the center and the range shifts to show surrounding pages.
1. In the middle, the pagination displays previous, current, and next pages, with ellipses on both sides.
1. Near the end, the range expands toward the last pages, keeping the last pages visible in sequence.

The first and last pages remain accessible at all times. Previous and next controls are disabled at the boundaries.

A maximum of 5–7 visible page links should be used; too many numbers are overwhelming and unscannable.

![Page Navigation Behaviour](pagination/page-navigation-behaviour-47291-2806.png)

_Figure: Page Navigation with 7 page items at four stages: callout 1 active page first (1 active, 2, 3, 4, 5, ..., 50, previous button disabled); callout 2 active page first third (2 active, 1, 3, 4, 5, ..., 50); callout 3 active page middle (1, ..., 6, 7 active, 8, ..., 50); callout 4 active page last (1, ..., 46, 47, 48, 49, 50 active, next button disabled). First and last pages stay visible in every stage._

### Page Size Behaviour

Provide a small, predefined set of page size options (typically 3–5 values), for example: 10, 25, 50, and 100.

![Page Size Behaviour](pagination/page-size-behaviour-53245-7423.png)

_Figure: Four page size select fields stacked vertically, each preceded by a monospace annotation: "value: 10" with the select showing "10", "value: 25" showing "25", "value: 50" showing "50" and "value: 100" showing "100", each with a chevron-down icon._

## Accessibility

### Focus management

Focus must remain stable when navigating between pages.

After a page change, focus should stay on the triggered pagination control to preserve context and ensure continuous keyboard navigation.

![Focus management](pagination/focus-management-50869-34574.png)

_Figure: Two pagination bars with page items "1", "...", "5", "6", "7", "8", "9", "...", "50" and dark previous and next arrow buttons, linked by a purple arrow from top to bottom. In the top bar page 7 is the active page (bold, orange underline) and page 8 is focused with a dark outline; in the bottom bar page 8 is now active and keeps the focus outline, so focus stays on the triggered control after the page change._

### Scroll behavior

**Do maintain the user’s current scroll position** when navigating between pages to preserve context and support accessibility.

![Scroll behavior](pagination/scroll-behavior-53356-6093.png)

_Figure: Do example: two schematic page wireframes side by side, each with an image area, a text bar and a pagination bar at the bottom, linked by a purple arrow. The active page changes from the second to the fifth item while both pages show the same scroll position (the dashed purple viewport frames are aligned), so the user's scroll position is kept when switching pages._

**Don’t automatically scroll to the top of the page** when switching pages, as it can disrupt context and confuse users, especially those using screen readers.

![Scroll behavior](pagination/scroll-behavior-53356-6154.png)

_Figure: Don't example: two schematic page wireframes linked by a purple arrow. The first page shows the pagination bar in the viewport, but after switching pages the second page is scrolled to its top (title bar and heading visible, pagination pushed to the bottom edge), which is wrong because the automatic scroll to the top disrupts context._

## Examples

### Search Result Page: Documents

![Search Result Page: Documents](pagination/search-result-page-documents-47624-20552.png)

_Figure: STIHL Service Communication support news page in desktop (stacked=false) and mobile (stacked=true) layouts, showing a grid of news cards. Below the cards, the desktop layout has "32 — 40 of 56 items" followed by pagination controls "1" to "7" with page 4 active, and the mobile layout shows the same item range above pagination "1", "2", "3" (active), "...", "7"._

### (SSC) Search Result Page: Documents

![(SSC) Search Result Page: Documents](pagination/ssc-search-result-page-documents-47272-11475.png)

_Figure: STIHL Service Communication bookmarks page with a parts table in desktop (stacked=false) and mobile (stacked=true) layouts. Below the content, "Rows per page:" with a select set to "10", "70 — 80 of 568 rows" and pagination controls "1", "...", "5", "6", "7" (active), "8", "9", "...", "50" on desktop, and the same elements stacked with "1", "...", "7" (active), "...", "50" on mobile._
