---
id: grid-app
title: "Grid Styles: App"
category: foundation
keywords:
  - grid
  - layout
  - columns
  - app
  - mobile
figmaFile: Grid & Spacing
figmaProject: 01. Fundamentals
figmaFileKey: JyyYtoCYbtJrzqHs38OXSQ
figmaNodeId: 56:73
figmaVersion: "2315997626726619921"
figmaVersionLabel: DS-1185 Docu | Global | Add Connected Contact to the disclaimer of Sidebar Grid
figmaVersionCreatedAt: 2026-02-02T16:02:45Z
syncedAt: 2026-11-04T14:13:38.973Z
sourceUrl: https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ?node-id=56-73
---

# Grid Styles: App

## Grid App

Overview:

- The grid width always grows with the respective viewport size
- The content areas define how content and modules can be placed within the grid.
- The max. text width must be defined within each module.

![Grid App](grid-app/grid-app-2692-5279.png)

_Figure: A grid layout for an app, showing 8 columns with a gutter of 16px and a margin of 16px. The most used screen size is 360px. The grid width adjusts with the viewport size, and content areas within the grid define placement for content and modules._

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Margins** Margins separate the grid from the left and right edges. Their widths change depending on the viewport.
1. **Columns** Columns define the areas where the content will be placed. The column widths change with the size of the grid.
1. **Gutters** Gutters are fixed spaces between columns which help to separate the content. Their widths are fixed.

![Anatomy](grid-app/anatomy-2692-6350.png)

_Figure: The layout of a grid system used in a UI design. Callout 1 points to the Margins, which are the spaces separating the grid from the left and right edges and vary with the viewport size. Callout 2 points to the Columns, which are the areas designated for content placement and adjust based on the grid size. Callout 3 points to the Gutters, which are the fixed spaces between the columns that help separate the content and have consistent widths._

## Content placement (Grid App)

### Content areas

These areas define how content and modules can be placed within the grid:

1. **Full** Spans the entire screen width. Commonly used for top bars, footers, or full-bleed sections.
1. **Main** Aligns with the central grid columns, excluding outer margins. Used for most contents.
1. **Halves** Divides the grid into two proportional segments, allowing for flexible layouts of content like teasers.

![Content areas](grid-app/content-areas-2692-5902.png)

_Figure: Different content areas within a grid layout for a UI design system. The grid includes four labeled areas: "Full" spans the entire screen width, "Main" aligns with the central grid columns, and "First half" and "Sercond half" divide the grid into two proportional segments. These areas define how content and modules can be placed within the grid for various layout needs._

### Text width for body text

To maintain optimal readability, body text should not exceed 80 characters per line. It is recommended to set **the maximum text width to 34em**, which corresponds to 34 times the base font size.

For example, with the Text M size of 16px, this results in a maximum width of 544px (16px × 34 = 544px).

This maximum width should be defined within each module. Headlines should inherit the same width as the body text to ensure visual consistency.

[Further reading on Baymard Insitute →](https://baymard.com/blog/line-length-readability)

![Text width for body text](grid-app/text-width-for-body-text-2692-6260.png)

_Figure: The recommended text width for body text in the STIHL Design System. It shows a text block with a maximum width of 544 pixels, which is derived from a base font size of 16 pixels multiplied by 34. This width ensures that body text does not exceed 80 characters per line, maintaining optimal readability. Headlines should match this width for visual consistency._
