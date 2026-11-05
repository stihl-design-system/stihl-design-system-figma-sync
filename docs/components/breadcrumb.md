---
id: breadcrumb
title: Breadcrumb
category: component
importNames:
  - DSBreadcrumb
package: "@stihl-design-system/components"
keywords:
  - breadcrumb
  - navigation path
  - hierarchy
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 23527:3393
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:19:50.824Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=23527-3393
---

# Breadcrumb

## Breadcrumb

Overview:

- A breadcrumb provides orientation to users within the structure of a website or application.
- First link (home) is always visible, as well as the last two links. The last link is the current page.
- The truncated links are hidden behind a button, the truncated links appear on click.
- The breadcrumb is superior to the page title and page content and therefore always left aligned.
- In shallow navigation structures a breadcrumb might be obsolete and therefore optional.

![Breadcrumb](breadcrumb/breadcrumb-23527-3837.png)

_Figure: A breadcrumb component with two states: expanded and collapsed. In the expanded state, all navigation levels from "Home" to "Current" are visible, separated by slashes. In the collapsed state, intermediate levels are hidden behind a truncation button labeled with an ellipsis (...), showing only "Home", "Previous level", and "Current". The "home" link is always visible, as is the "current-page" link labeled "Current", which is in an active state. The "previous-page" link labeled "Previous level" is also always visible. The breadcrumb is designed to provide orientation within a website or application, with the layout always left-aligned and superior to the page title and content._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-breadcrumb--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

### Related elements

[Standalone Link](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26711-8034)

[Iconography](https://www.figma.com/file/U218NNP4OsipaHOtv5flns/Iconography-%F0%9F%9B%91?type=design)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Standalone links** List of all levels prior
1. **Truncation button** Shows all levels after click
1. **Divider symbol**
1. **Active standalone link** Current page

![Anatomy](breadcrumb/anatomy-23527-3856.png)

_Figure: Two variants of the breadcrumb component, illustrating different states and layouts. The first breadcrumb shows a truncated list with a truncation button, while the second breadcrumb shows an expanded list of all levels. Callout 1 points to a standalone link labeled "Home," callout 2 points to the truncation button labeled "...", callout 3 points to a standalone link labeled "Previous level," and callout 4 points to the active standalone link labeled "Current." The breadcrumb components include dividers represented by "/", and various levels labeled "Level 2," "Level 3," "Level 4," "Level 5," and "Level 6._

#### Exception: truncation button

**Attention:** The Truncation Button is a **small ghost button** Paddings have been adjusted in this instance to match the links and avoid layout shifts. The button retains all the states and properties of a button, e.g. **hover (1)** and **focus (2).**

[Button guidelines](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=162-126)

![Exception: truncation button](breadcrumb/exception-truncation-button-24917-50541.png)

_Figure: A breadcrumb component with a truncation button variant, showing how it handles truncation when there are many levels. The truncation button is a small ghost button with adjusted paddings to match the links and avoid layout shifts. Callout 1 points to the truncation button in a hover state, and callout 2 points to the truncation button in a focus state. The breadcrumb levels shown are "Home", "...", "Previous level", and "Current"._

#### Show all links

1. The truncated links are hidden behind a button with a label containing three dots: “...”.
1. The truncated links appear on click.
1. It is not possible for the user to hide the levels that appeared.

![Show all links](breadcrumb/show-all-links-23532-364.png)

_Figure: A breadcrumb component with two states: truncated and expanded. Callout 1 points to the truncated state where links are hidden behind a button labeled with three dots "...", and callout 2 points to the expanded state where all links are shown. The breadcrumb shows levels labeled "Home", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Previous level", and "Current", with the expanded state revealing all levels on click._

#### Amount of links shown

**Level 1** No breadcrumb needed.

**Level 2-4** All 4 levels are shown.

**Level 5 and above** The first and last two levels are shown.

![Amount of links shown](breadcrumb/amount-of-links-shown-23532-310.png)

_Figure: Two breadcrumb components. The first breadcrumb is at level 2, showing "Home / Level 2 / Previous level / Current" with all levels visible. The second breadcrumb is at level 6 and above, showing "Home / ... / Previous level / Current" with only the first and last two levels visible, and intermediate levels replaced by an ellipsis._

### Alignment

#### Left alignment

The breadcrumb is superior to the page title and page content and therefore left aligned.

The breadcrumb is always placed in the top left corner, below the main navigation. Follow this mental model to reduce cognitive load.

Note: This guidelines assumes a left-to-right reading direction.

![Left alignment](breadcrumb/left-alignment-23532-409.png)

_Figure: A breadcrumb component with left alignment. The breadcrumb is positioned in the top left corner, below an implied main navigation, and above the page title and content. This layout is marked as a "Do" example because it follows the guideline of left alignment to reduce cognitive load, assuming a left-to-right reading direction._

#### Center alignment

A breadcrumb cannot be centered, as it is uncommon and goes against the mental model of a breadcrumb.

![Center alignment](breadcrumb/center-alignment-24496-177.png)

_Figure: A breadcrumb component with center alignment. This is marked as a "Don't" example because centering a breadcrumb is uncommon and does not align with the typical mental model of a breadcrumb. The text "/ " is shown to represent the breadcrumb items._

## Content and Assets

### First and last link in the list

- First is always home
- Last link is the current page (active state)

![First and last link in the list](breadcrumb/first-and-last-link-in-the-list-23532-427.png)

_Figure: A breadcrumb component at level 6, shown in an expanded state. The breadcrumb includes the following text elements: "Home", "/", "About STIHL", "International production and distribution", and "STIHL in Brazil". The text next to the figure warns that using full page titles as link labels in breadcrumbs can make them hard to comprehend._

### Ideal length

- Keep each link label to 1 or 2 words.
- Maximum 2-3 words.

![Ideal length](breadcrumb/ideal-length-23527-3887.png)

_Figure: A breadcrumb component in an expanded state. It shows a sequence of links labeled "Home", "Sustainability", and "Environmental protection", separated by slashes. The ideal length for each link label is specified as 1 or 2 words, with a maximum of 2-3 words. The last link, "Environmental protection", is underlined, indicating it is the current page._

### Length warning

Full page titles as a link label might lead to breadcrumbs that are hard to comprehend.

![Length warning](breadcrumb/length-warning-23532-445.png)

_Figure: A breadcrumb component at level 6, shown in an expanded state. The breadcrumb includes the following text elements: "Home", "/", "About STIHL", "International production and distribution", and "STIHL in Brazil". The text next to the figure warns that using full page titles as link labels in breadcrumbs can make them hard to comprehend._

### Always call home ‘Home’

Do not use marketing language in the breadcrumb. E.g. “The STIHL World” instead of “Home”.

![Always call home ‘Home’](breadcrumb/always-call-home-home-23711-3742.png)

_Figure: A breadcrumb component in an expanded state with three items: "The STIHL World", "Sustainability", and "Environmental protection". The example is marked as a "Don't" because it uses marketing language "The STIHL World" instead of "Home". The design documentation advises against using marketing language in the breadcrumb._

### Use of icons

- Icons are allowed, when used with a label.
- Icon must be leading (in front of the label).
- Use of icons takes space, therefore use in simple hierarchal structures only.

![Use of icons](breadcrumb/use-of-icons-23722-315.png)

_Figure: A breadcrumb component in an expanded state with a simple hierarchical structure. It includes an icon leading the label "Home," followed by text labels "Level 2" and "Current," separated by slashes. The text explains that icons are permitted when paired with a label, must be placed before the label, and should only be used in simple hierarchical structures to avoid taking up too much space._

### Longer link lists

#### 1 line on bigger screens

Ideally, the initial state of the breadcrumb navigation does not exceed 1 line.

In some middle sized screens, it may be two lines.

![1 line on bigger screens](breadcrumb/1-line-on-bigger-screens-24995-651.png)

_Figure: A breadcrumb component in its initial state on a bigger screen, ideally fitting within one line. The breadcrumb includes six levels of navigation, with the title "Title Component" shown in a large size. The text "Example with \>5 levels" indicates that the breadcrumb can handle more than five levels..._

#### 2-3 lines on small devices

Ideally, the initial state of the breadcrumb navigation does not exceed two lines.

- Three lines is allowed.
- Four lines must be avoided.

![2-3 lines on small devices](breadcrumb/2-3-lines-on-small-devices-23711-3749.png)

_Figure: Two variants of the breadcrumb component in the STIHL Design System. The first example shows a breadcrumb with more than five levels, including "Startseite", "...", "Gartenpflege", and "Rasenpflege", demonstrating a state where the breadcrumb navigation exceeds two lines. The second example shows a breadcrumb with four levels, including "Startseite", "STIHL Technologie", "STIHL Akku-Technologie", and "STIHL Akku AP-System", illustrating a state where the breadcrumb navigation is expanded. The text indicates that ideally, the breadcrumb navigation should not exceed two lines, three lines are allowed, but four lines should be avoided._

## Behavior

### Browser default tooltip

The browser tooltip explains the action to the user. This explanation is also provided by the screenreader.

![Browser default tooltip](breadcrumb/browser-default-tooltip-23532-213.png)

_Figure: A breadcrumb component with levels labeled "Home", "Chainsaws", and "MS 211", with an ellipsis indicating additional hidden links. The cursor is shown as a pointer over the ellipsis, triggering a browser default tooltip that says "Show all links". The tooltip explains the action to the user and is also accessible via screenreader. The breadcrumb is in a collapsed state with expanded set to false._

## Examples/Variants

### Complex navigation

A breadcrumb link list serves as a secondary navigation, helping users access nearby content within the complex hierarchical structure.

Example: The longest expanded breadcrumb in the stihl.de advisory has six levels.

![Complex navigation](breadcrumb/complex-navigation-23527-3897.png)

_Figure: A breadcrumb component in a complex navigation structure with six levels, shown in both desktop and mobile viewports. The breadcrumb levels are expanded, and the title component is labeled "Title Component" with size xl. The text "Cashback sichern mit dem Code “Cashback2024”" is present in both views, along with navigation items such as "Produkte," "Ratgeber und Projekte," "Services und Events," and "Lösungen für Profis." The breadcrumb levels include "Startseite," "Gartenpflege," "Heckenpflege," "Buchsbaum-Formschnitt," and "Wie Sie einen Buchsbaum zur Spirale schneiden._

### Simple navigation

In shallow navigation structures a breadcrumb might be obsolete and therefore optional.

In some cases it can still enhance navigation efficiency and offer context.

![Simple navigation](breadcrumb/simple-navigation-23532-440.png)

_Figure: A breadcrumb component in a simple navigation layout. The breadcrumb trail includes the labels "Home", "Saw chain finder", and "Search results", with "Search results" highlighted to indicate the current page. The text next to the figure explains that in shallow navigation structures, a breadcrumb might be optional but can still improve navigation efficiency and provide context._
