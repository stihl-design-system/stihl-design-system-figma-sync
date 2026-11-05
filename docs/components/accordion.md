---
id: accordion
title: Accordion
category: component
importNames:
  - DSAccordion
package: "@stihl-design-system/components"
keywords:
  - accordion
  - disclosure
  - expandable section
  - details
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 17260:166
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:19:23.603Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=17260-166
---

# Accordion

## Accordion single

Overview:

- An accordion component helps to organize content into collapsible sections.
- The header area can be filled with a summary (also known as label or title) and a custom hint.
   - Use the custom hint ares for additional text, icons, badges or tags.
   - Images are not allowed in the custom hint area.
- Avoid placing important information in the content area.
- Ensure its discoverability and usability by testing with users.
- An accordion group should always guarantee an overview, avoid long lists.
- A variation of the single accordion is called ‘expandable section’, place the icon left of the title.

![Accordion single](accordion/accordion-single-17260-2298.png)

_Figure: The Accordion single component in a UI design system, displaying various sizes (medium, small, extra-small) and states (enabled, hover, focus) with different expansion indicators (right or left, flush or not, expanded or not). Each measurement refers to the size of the accordion component. The text "Summary of the accordion content" indicates the area for the summary or title, while "❖ Placeholder" marks the custom hint area for additional text, icons, badges, or tags. The do's and don'ts mention that important information should not be placed in the content area and that images are not allowed in the custom hint area._

> **Figma Slots in this component** This component supports Figma slots, which allow specific areas to be flexibly populated with your own content. You can find more information on how to use and customize slots in the official Figma documentation. [**Go to the Figma guide**](https://help.figma.com/hc/en-us/articles/38231200344599-Create-and-use-slots-to-build-flexible-components-in-Figma-Design)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-accordion--documentation)

### Related elements

[Drawer](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=16282-9317)

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

[Typography](https://www.figma.com/design/d9wrOp4aCplDsV9AVC87Xn/Typography-%F0%9F%85%B0%EF%B8%8F?m=auto&t=ENDkSmRI4RwAfDs4-6)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Accordion Group

![Accordion Group](accordion/accordion-group-18841-16422.png)

_Figure: Various configurations of the accordion-single component within an accordion group, showcasing different sizes, expansion indicators, and flush settings. Each column represents a different size: Medium, Small, and Extra-small. Each row demonstrates a different combination of expansion indicator positions (right or left) and flush settings (true or false). The text "Summary of the accordion content" is used consistently across all accordion items to illustrate the content summary._

## Formatting and Construction

### Anatomy

#### Accordion item

1. **Header**
   1. **Summary**
   1. **Hint**
   1. **Expansion Indicator** depending on the use-case chevron or caret
   1. **Number Indicator** minimized or used to displaying a number
1. **Content**

![Accordion item](accordion/accordion-item-17351-6880.png)

_Figure: An accordion component with two accordion items, both in the enabled state and medium size. The first accordion item is expanded and includes a header with the text "Summary of the accordion content," a hint with a subtitle "Hint with a subtitle," and an expansion indicator shown as a caret on the right. The second accordion item also includes a header with the same text, an expansion indicator shown as a caret on the right, and a number indicator "123." Callout 1 points to the expansion indicator, and callout 2 points to the content area labeled "Placeholder." The annotations "a," "b," "c," and "d" indicate specific parts of the accordion items, with "d" marking the number indicator._

#### Custom hint area

If you want to display a unique element, use the hint as a custom element. **(1)**

It is meant for icons, badges and flags. **(2)**

![Custom hint area](accordion/custom-hint-area-17351-12519.png)

_Figure: An accordion component with a custom hint area, showing two accordion items. The first callout points at a content-placeholder within the accordion, indicating where icons, badges, and flags can be placed. The second callout highlights a system-feedback element labeled "Connected." The text "Title of accordion" is used for both accordion headers, and the first accordion contains a placeholder text "❖ Placeholder - Replace this content._

#### Accordion group

1. **Accordion item**
1. **Divider (border)**

**Note:** This is a Figma only component.

![Accordion group](accordion/accordion-group-17301-2507.png)

_Figure: An accordion group component with five accordion items, each separated by a divider border. The first callout points at the expansion indicator located to the right of the "Summary of the accordion content" text. The second callout points at the number "2" indicating the second accordion item. The component is of medium size, not flush, and has the expansion indicator positioned to the right._

#### Chevron vs. Caret Usage

Use indicators consistently to signal expand/collapse behavior. The position and purpose of the element determine whether a chevron or caret should be used.

1. **Chevron** Use a chevron icon when the indicator is placed on the right side of the element. Best suited for progressive disclosure in content-heavy layouts. Use when:
   - You’re revealing additional content inside a grouped accordion
   - Accordion items are part of a content group
   - You want to minimize visual overload and guide users step-by-step
1. **Caret** Use a caret icon when the indicator is placed on the left side of the element. Ideal for navigational structures and single expandable sections. Use when:
   - You’re expanding navigation levels (e.g., sidebar menus)
   - It’s an expandable section (standalone accordion item)

![Chevron vs. Caret Usage](accordion/chevron-vs-caret-usage-17260-2423.png)

_Figure: Two accordion components, both in the medium size and with flush set to false. The first accordion, labeled with callout 1, is an accordion-single with the expansion indicator on the right, shown in an expanded state. The second accordion, labeled with callout 2, is also an accordion-single with the expansion indicator on the left, also shown in an expanded state. Both accordions have a summary text "Summary of the accordion content" and a placeholder content area. The figure illustrates the usage of chevron and caret indicators to signal expand/collapse behavior, with the chevron used on the right and the caret on the left._

#### Size Variants

Three sizes are available, to fit any lay-out and use case.

All variants can be used mobile and desktop.

![Size Variants](accordion/size-variants-18814-10559.png)

_Figure: Three size variants of an accordion component: medium, small, and extra-small. Each variant is shown with a flush value of false and an expansion indicator on the right. The text "Summary of the accordion content" is used to represent the content summary for each accordion item in all three sizes._

### Sizing

#### Maximum width

The maximum width follows the size of [content grid narrow](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132) , for both smaller and bigger viewports.

![Maximum width](accordion/maximum-width-17260-2428.png)

_Figure: An accordion-group component with the size set to medium and flush set to false, featuring an expansion indicator on the right. The accordion is shown within a "Narrow" content grid, indicating the maximum width it can occupy. The accordion contains four sections, each labeled "Summary of the accordion content" with downward-pointing arrows to indicate expandable sections. The maximum width of the accordion follows the size of the content grid narrow, applicable to both smaller and larger viewports._

#### Minimum width

The minimum size, based on the [documented breakpoints and content placement](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132):

- **on viewports greater than or equal to 1024px (1)**
   - “first quarter”
   - use case: filter on a product overview page on a desktop or big tablet.
- **on viewports smaller than 1024px (2)**
   - “first third”
   - use case: content list on a mobile phone, tablet or in a split screen.

![Minimum width](accordion/minimum-width-18428-22228.png)

_Figure: The minimum width requirements for the accordion component in the STIHL Design System. Callout 1 points to an accordion labeled "first quarter," which is used on viewports 1024px or larger, such as on a desktop or large tablet. Callout 2 points to an accordion labeled "first third," which is used on viewports smaller than 1024px, such as on a mobile phone, tablet, or in a split screen. Each accordion contains multiple "Accordion summary" items with expansion indicators on the right._

### Alignment

#### Flush alignment

When designing for smaller spaces on a page, such as side drawers, panels or sidebars, use flush alignment to ensure better text alignment with other content elements.

![Flush alignment](accordion/flush-alignment-17351-11042.png)

_Figure: An accordion component with flush alignment, used in a filter panel. The panel includes an accordion-group with items such as "Length", "Drive link gauge", "Saw chain pitch", and "Guide Bars". There are two buttons: a primary button labeled "Show results (34)" and a secondary button labeled "Clear selection". The primary button is enabled and filled, while the secondary button is disabled and outlined. The layout is designed for smaller spaces like side drawers or sidebars, ensuring better text alignment with other content elements._

### Status

#### Default is closed

By default the accordion is closed.

More than one accordion can be open at the same time.

![Default is closed](accordion/default-is-closed-17993-7543.png)

_Figure: An accordion component in its default closed state. Each accordion item has the text "Summary of the accordion content" and an expansion indicator on the right. The accordion-group is of medium size, not flush, and allows more than one accordion to be open simultaneously._

### Motion

[→ Motion Styles](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

#### Hover animation

**Animation type:** fade: background color opacity (0-100%) (color: transparent-hover) **Duration:** 100ms **Easing:** linear

![Hover animation](accordion/hover-animation-17645-7620.png)

_Figure: Two instances of an accordion component in the medium size, with the expansion indicator on the right. The first accordion is in the enabled state, while the second is in the hover state, both are not expanded and not flush. The hover animation for the accordion involves a fade effect, changing the background color opacity from transparent to hover over 100 milliseconds with linear easing. The text "Summary of the accordion content" is shown on both accordion components._

#### Opening animation

**Animation type:** expand: height (0-100%) fade: opacity content in content area (0-100%) rotation: chevron 0°-180° (counter-clockwise) **Duration:** 250ms **Easing:** motion-functional-ease-out **Note:** easing and duration also applies to the icon rotation

![Opening animation](accordion/opening-animation-17268-2455.png)

_Figure: The opening animation of an accordion component in the STIHL Design System. It shows two states of an accordion-single component, one collapsed and one expanded, both in the enabled and medium size with the expansion indicator on the right. The animation involves expanding the height of the content area from 0 to 100%, fading the opacity of the content in the content area from 0 to 100%, and rotating the chevron from 0° to 180° counter-clockwise. The duration of the animation is 250ms with an easing type of motion-functional-ease-out, which also applies to the icon rotation._

#### Closing animation

**Animation type:** expand: height (100-0%) fade: opacity content in content area (100-0%) rotation: chevron 180°-0° (clockwise) **Duration:** 250ms **Easing:** motion-functional-ease-in

**Note:** easing and duration also applies to the icon rotation

![Closing animation](accordion/closing-animation-17351-12563.png)

_Figure: The closing animation of an accordion component in the STIHL Design System. The accordion-single component, in a medium size with the expansion indicator on the right, transitions from an expanded to a collapsed state. The animation involves three key actions: the content area height reduces from 100% to 0%, the opacity of the content within the content area fades from 100% to 0%, and the chevron icon rotates clockwise from 180° to 0°. The duration of this animation is 250ms with an easing function labeled motion-functional-ease-in._

## Content and Assets

### Accessible copy

- Keep summaries and hint short and simple.
- It is recommended to avoid abbreviations.
- Test the understandability of the copy in the header area at all times.

![Accessible copy](accordion/accessible-copy-17268-2465.png)

_Figure: An accordion component in the enabled state, medium size, with the expansion indicator positioned to the right, and it is not expanded or flush. The text "Summary of features and fixes" is shown as an example of accessible copy for the accordion header. The accessible copy guidelines recommend keeping summaries and hints short and simple, avoiding abbreviations, and ensuring the header text is understandable._

### Accordion title

#### Header recommendations

You can customize the title using various text heading styles, with or without a subtitle.

**Formatting examples:**

1. Text M with subtitle in regular, do guarantee a clear hierarchy.
1. Text M bold, use with maximum 2 lines.
1. Heading L, keep the title as short as possible

![Header recommendations](accordion/header-recommendations-18443-19280.png)

_Figure: An accordion component with three header recommendations, each demonstrating different text styles and layouts. Callout 1 points to "Text M Bold" with a subtitle "Hint with a subtitle," showing a medium-sized accordion with a subtitle and an enabled state. Callout 2 points to "Text M Bold long accordion title that breaks in to two lines," illustrating a bold text title that spans two lines, also in a medium-sized, enabled state. Callout 3 points to "Heading L," which is a large heading kept short, in a medium-sized, enabled state. The recommendations suggest using "Text M" with a subtitle for clear hierarchy, "Text M bold" for titles with a maximum of two lines..._

#### Header warnings

You can customize the header using various text heading styles, with or without a subtitle

**Formatting examples:**

1. Text M with subtitle/hint in bold, does not guarantee a clear hierarchy.
1. Uppercase isn’t as legible for all users.
1. Heading L can’t be long and covering two lines.

![Header warnings](accordion/header-warnings-18443-6348.png)

_Figure: An accordion component with three headers, each demonstrating different text heading styles. The numbered callouts point to the following: 1 points to "Text M Bold" with a subtitle "Hint with a subtitle," 2 points to "HEADING M UPPERCASE," and 3 points to "Heading lorem ipsum dolor sit amet." The text explains that using "Text M" with a subtitle in bold does not guarantee a clear hierarchy, uppercase text may not be legible for all users, and "Heading L" should not be too long to avoid covering two lines. Each accordion header is in an enabled state, medium size, with the expansion indicator on the right and not expanded._

#### Maximum Text width

Please make sure the Header summary and text elements inside the accordion do not exeed **the maximum text width to 34em**, based on the font sized used

[Typography →](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515)

![Maximum Text width](accordion/maximum-text-width-36292-38568.png)

_Figure: The layout of an accordion component, highlighting the recommended maximum text width. The measurement "font size x 34em" refers to the maximum width for text elements within the accordion to ensure proper formatting. The text "Summary of features and fixes Lorem ipsum dolor sit amet consectetur." is shown within the accordion to demonstrate the text width constraint, and "accordion width" indicates the overall width of the accordion component._

### Custom hint area

#### Hint

Populate the hint area with content or functions, referencing the content in the accordion or as the subtitle.

Additionally, it can function as a status display, for example, reflecting the filter set or sorting rules.

![Hint](accordion/hint-17993-7605.png)

_Figure: An accordion component with a medium size, non-flush layout, and expansion indicators positioned to the right. It includes four sections labeled "Length", "Drive link gauge", "Saw chain pitch", and "Guide bars", each with a dropdown arrow, and the "Length" section shows a value of "120cm". The hint area can be used to provide additional content or functions related to the accordion's sections, or to display status information such as filter settings or sorting rules._

#### Icons, status and more

Use the custom hint area for additional information.

Maximum 2 icons in the header area, keep it simple to reduce visual clutter.

![Icons, status and more](accordion/icons-status-and-more-18443-6402.png)

_Figure: An accordion component with the variant "accordion-single" in an enabled state, medium size, and right expansion indicator. It is not expanded and is not flush. The header area includes two icons: one for system feedback of type error and another indicating a connected status. The accordion contains sections labeled "Smart connector", "Details", "Documents", "My dealer", and "Technical informations", with additional information such as "SN: 9834657865" and "Connected" under "Smart connector". The design guideline suggests using the custom hint area for additional information and limiting the header area to a maximum of two icons to keep it simple and reduce visual clutter._

#### Do not use images

Photos and content icons in the custom hint area are not allowed.

![Do not use images](accordion/do-not-use-images-18842-10884.png)

_Figure: An accordion component in a medium size with the expansion indicator on the right, currently not expanded, and not flush with its container. It includes sections labeled "Smart Connector", "Details", "Documents", "My Dealer", and "Technical informations". The board is marked as a "Don't" example because it contains images, specifically photos and content icons, which are not allowed in the custom hint area according to the design documentation._

#### Number Indicator

Use case: Filter lists. The number indicator shows how many filter items are selected.

The number indicator is placed on the left to the chevron icon.

A number indicator signals dynamic or countable content.

Only use the number indicator when necessary to keep the visual load low. Avoid using it for content elements.

[→ Number Indicator](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=24240-47126&t=kmFbhfUplK9oMbc8-1)

![Number Indicator](accordion/number-indicator-26774-5677.png)

_Figure: An accordion component in a medium size, with the expansion indicator positioned to the right and in a non-expanded state. It includes four filter list items labeled "Category", "Price", "User Groups", and "Area of usage", with "Category" showing "5" and "Area of usage" showing "10" as number indicators. The number indicators show how many filter items are selected within each category._

#### Minimized number Indicator

Although the minimal selection indicator is **technically supported** in the component, its use is **not recommended**. The indicator uses an **orange highlight**, which is primarily reserved for important notifications or alerts. Using it in this context can reduce its visual impact and make the layout feel overly busy. **Do not combine** it with a **number indicator** in the same section.

![Minimized number Indicator](accordion/minimized-number-indicator-35782-2824.png)

_Figure: An accordion component in its minimized state, with four sections labeled "Category", "Price", "User Groups", and "Area of usage". The accordion is of medium size, has the expansion indicator on the right, is not expanded, and is not flush with its surroundings. The text mentions that using an orange highlight as a minimal selection indicator is not recommended because it is typically reserved for important notifications or alerts, and combining it with a number indicator in the same section should be avoided._

#### Don't combine the number indicator and hint.

Avoid overcrowding the component and keep the visual load low.

Decide to use either a hint or a number indicator.

When applying a filter as an accordion, only use the number indicator since it provides information about the count of filters the user sets.

**Avoid displaying all active filter statuses in the hint area.**

![Don't combine the number indicator and hint.](accordion/don-t-combine-the-number-indicator-and-hint-26774-5692.png)

_Figure: An accordion component with two variants, both in the enabled state and medium size, with the expansion indicator on the right and not expanded. The first variant includes a subtitle or hint and a number indicator, while the second variant only includes the number indicator. The example demonstrates a "Don't" by combining the number indicator and hint, which is advised against to avoid overcrowding the component and keeping the visual load low. The text labels include "Category", "5", "Hint with a subtitle", "Price", "User Groups", and "Area of usage"._

#### Don't use number indicator for content accordions.

Avoid using a number indicator if the accordion content is static or cannot be quantified. It becomes irrelevant if users cannot change actionable content.

**Static Content:** When accordion content remains the same and does not involve quantities or states (e.g., text-only information).

**Unquantifiable Content:** The content within the accordion cannot logically be represented as a countable or dynamic value (e.g., descriptive text or general information).

![Don't use number indicator for content accordions.](accordion/don-t-use-number-indicator-for-content-accordions-26774-5710.png)

_Figure: An accordion component with a number indicator, in an enabled state, medium size, and right-aligned expansion indicator. The accordion is not expanded and is not flush with its container. The number indicator is marked as a "Don't" example because the content is static and cannot be quantified. The callouts point to static text instructions for a task, specifically "01. Teile ölen" and subsequent steps, which do not involve quantities or dynamic values._

### Custom content area

#### Layout and elements

You can display any layout within the content area.

Insert data tables, images and forms inside an accordion if needed.

**Attention:** Ensure the content is easily findable and usable.

![Layout and elements](accordion/layout-and-elements-17260-2348.png)

_Figure: An Accordion component with three sections, each in an open state. Each section contains a header with a dropdown arrow and a content area that can include various layouts such as single large items, two smaller items side by side, or three smaller items in a row. The text mentions that any layout can be used within the content area, including data tables, images, and forms, and emphasizes the importance of ensuring the content is easily findable and usable._

### Accordion group

#### Tip: open first accordion

On content pages, it is common to have the first accordion of a group open and the rest closed.

It immediately gives users a sense of what information is available in the accordion group. It improves clarity, encourages interaction, and aligns with user expectations.

![Tip: open first accordion](accordion/tip-open-first-accordion-17993-7590.png)

_Figure: An accordion component with three sections, where the first section is open and the others are closed. The open section is labeled "01. Teile ölen" and contains text instructions. The other sections are labeled "02. Seitenteile zusammenschrauben" and "03. Rahmen verschrauben". The accordion is in the medium size, has the expansion indicator on the right, is not flush, and is in the enabled state. The open first accordion provides users with an immediate sense of the available information, improving clarity and encouraging interaction._

#### Amount of accordion elements

Make sure the overview of the list is given, especially on mobile. Avoid long lists that exceed a viewport (in closed status).

Users must easily navigate through open and closed accordions as content switches.

![Amount of accordion elements](accordion/amount-of-accordion-elements-17993-7585.png)

_Figure: An accordion component in a vertical layout on a mobile viewport. It shows multiple accordion elements in a closed state, demonstrating how they appear in a list. The text emphasizes keeping the list overview clear on mobile, avoiding long lists that exceed the viewport when closed, and ensuring easy navigation between open and closed accordions._

#### Don’t combine sizes.

Don't combine small and medium accordions in the same group.

Ideally, it is not even within the same viewport or page.

![Don’t combine sizes.](accordion/don-t-combine-sizes-18428-22293.png)

_Figure: An accordion-group with a combination of medium and small accordion elements, labeled "Accordion Element M" and "Accordion Element S" respectively. The accordion elements are laid out vertically with expansion indicators on the right. The example is marked as a "Don't" because it combines small and medium accordions in the same group, which is not recommended._

#### Don’t nest accordions

Nesting accordions within other accordions is not allowed.

![Don’t nest accordions](accordion/don-t-nest-accordions-18428-22298.png)

_Figure: An example of nested accordions, which is marked as a "Don't" example. It includes two accordion-single components, one with the expansion-indicator on the right and the other on the left. The first accordion is not expanded and contains another accordion within its content, demonstrating improper nesting. The text "Don't nest accordions" indicates that nesting accordions within other accordions is not allowed._

#### Layout type: content-heavy

Incorporating at least three accordions.

Add a compelling headline above to convey the purpose of the accordion group.

![Layout type: content-heavy](accordion/layout-type-content-heavy-17462-2282.png)

_Figure: An example of the Accordion component in the content-heavy layout type, marked as a "Do" example. It includes at least three accordions with a headline above them. This layout is recommended for conveying the purpose of the accordion group effectively._

### Accordion single

#### Expandable section

A variation of the single accordion is called an 'expandable section'; place the icon on the left of the title.

Mainly, use it when you have an extended content area but the title is very short.

![Expandable section](accordion/expandable-section-18722-8816.png)

_Figure: An "expandable section," a variant of the single accordion component. The accordion is in an enabled state, medium size, with the expansion indicator positioned to the left of the title and is not expanded. The title is short, and the content area is extended. The example is marked as a "Do" because it correctly places the icon on the left of the title for an expandable section with a short title and extended content area. The text "Technical details" is shown as the title of the accordion._

#### Layout type: content-heavy

Avoid using a single accordion in a text-heavy layout. It is crucial to ensure that this design choice is not overlooked.

![Layout type: content-heavy](accordion/layout-type-content-heavy-18842-13688.png)

_Figure: An example labeled "Don't" for the Accordion component in a content-heavy layout type. It illustrates a single accordion in a text-heavy layout, which is advised against. The text next to the figure emphasizes avoiding this design choice to prevent overlooking crucial information._

#### Edge case: notification

Use with care.

Especially with warnings or errors, as information can be crucial.

![Edge case: notification](accordion/edge-case-notification-18443-9645.png)

_Figure: An edge case of an accordion component in a notification layout. It includes a close-button of variant ghost, state enabled, size small, with no icon and hidden label, aligned flush. The accordion-single is of state enabled, size medium, with the expansion indicator on the left, not expanded, and flush alignment. There are two buttons: one labeled "Update now" of variant outline, state enabled, size small, and not flush aligned, and another labeled "Update later" of variant ghost, state enabled, size small, and not flush aligned. The notification text mentions that a new update is required, including essential features and fixes, with options to view a summary of features and fixes..._

### Navigation

#### Sidebar Navigation

A single accordion can be used in the sidebar to expand and reveal the next level of navigation.

![Sidebar Navigation](accordion/sidebar-navigation-35782-5263.png)

_Figure: A sidebar navigation component with an accordion in two states: expanded and collapsed. The accordion is labeled "Fleet Management" and contains items such as "Equipment," "Connected Hub," and "Energy Evaluation." When expanded, the "Equipment" section reveals "Filtered lists" with options "List 1," "List 2," "List 3," and an "Add filtered list" button. The collapsed state shows a condensed view of these items. The numbers indicate the count of filtered lists._

## Behavior

### Avoid system feedback

Avoid system feedback above or inside the accordion element that corresponds to elements in the content area.

![Avoid system feedback](accordion/avoid-system-feedback-18443-16974.png)

_Figure: An accordion component in a medium size, with the expansion indicator on the left, not expanded, and not flush. The accordion displays a warning message "Some required fields are left empty" above the accordion summary titled "Summary of the accordion content". This is marked as a "Don't" example because it shows system feedback above the accordion element, which is advised against in the design system guidelines._

### Focus management

Elements within the header are not focusable. The whole header has one focus.

![Focus management](accordion/focus-management-18443-9584.png)

_Figure: An accordion component in a focused state, with the header entirely focusable and no individual elements within the header being focusable. The accordion is expanded, has a subtitle or hint, and the expansion indicator is positioned to the right. The text within the accordion reads "Summary of the accordion content" as the title, "Hint with a subtitle" as the hint, and a lorem ipsum paragraph as the content. The accordion is of medium size and is not flush with its surroundings._

### The user is in control

The user must click/tap proactively to change the state. The system or system settings can’t trigger the status.

![The user is in control](accordion/the-user-is-in-control-17260-2438.png)

_Figure: An accordion component in the "hover" state, medium size, with the expansion indicator positioned to the right. The accordion is not expanded and is not flush with its surroundings. The text "Summary of the accordion content" is visible, indicating the summary of the content that will be revealed when the accordion is expanded. A cursor icon is shown hovering over the text, demonstrating that the user must click or tap to change the state of the accordion._

## Examples/Variants

### SaaS (Software as a Service)

Accordions in portals and platforms are great to reduce the visual clutter. The user controls what part of the interface is visible.

![SaaS (Software as a Service)](accordion/saas-software-as-a-service-18443-9640.png)

_Figure: An Accordion component in a SaaS (Software as a Service) layout. It shows multiple collapsible sections with visible and hidden content, controlled by the user to manage interface visibility. The accordion includes expand and collapse indicators, with some sections expanded and others collapsed to reduce visual clutter._

### Content articles

Use accordions for step-by-step guides and other lists with additional details.

![Content articles](accordion/content-articles-17993-7600.png)

_Figure: An accordion component in a medium size, with the expansion indicator on the right, and it is not expanded or flush. The accordion is used in a content article for a step-by-step guide titled "Content articles: Use accordions for step-by-step guides and other lists with additional details." Each numbered callout points to a step in the guide: "01. Bretter zurechtsägen," "02. Teile ölen," "03. Seitenteile zusammenschrauben," "04. Rahmen verschrauben," "05. Aussteifungen anbringen," "06. Latten anschrauben," "07. Erste Seitenwand festschrauben," "08. Bodenleiste festschrauben," "09. Zweite Seitenwand festschrauben." The text next to "02. Teile ölen" reads..._

### Filter

A common use case for accordions is group filters in a [drawer component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=16282-9317).

![Filter](accordion/filter-17993-7595.png)

_Figure: An accordion component used for filtering options within a drawer. It includes various buttons with different variants, states, and sizes, such as a ghost button, a filled button labeled "Show results (34)", an outline button labeled "Clear selection", and a number-indicator. The layout features a search bar at the top, a list of filter categories like "Length", "Drive link gauge", "Saw chain pitch", and "Guide bars", along with navigation links and product information for the MS 180 chain saw. The number-indicator "34" next to "Show results" indicates the count of filtered results. The "Clear selection" button is disabled, suggesting no filters have been applied yet._

### Extra spacing for drawers

Ensure enough room for the click area. The user can skim and read the titles faster.

Use extra spacing on the top and bottom. In this example, use the medium accordion.

[→ Spacing Styles](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-1253)

![Extra spacing for drawers](accordion/extra-spacing-for-drawers-17611-7090.png)

_Figure: An accordion component in the STIHL Design System, specifically the medium variant. It illustrates extra spacing for drawers, showing measurements for the top and bottom spacing to ensure a sufficient click area. The layout includes a list of filter and sort options on the right side, with each option having ample space around it. The example demonstrates proper spacing to enhance readability and usability, ensuring users can skim and read the titles faster._
