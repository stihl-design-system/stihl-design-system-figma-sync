---
id: link
title: Link
category: component
importNames:
  - DSLink
  - DSLinkButton
package: "@stihl-design-system/components"
keywords:
  - link
  - inline link
  - standalone link
  - link button
  - anchor
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 26711:8034
figmaVersion: "2410599903007017519"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-10-15T14:34:29Z
syncedAt: 2026-10-27T13:34:59.885Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26711-8034
---

# Link

## Link

Use links when you want the users to navigate to another internal or external page

![Link](link/link-168-7255.png)

## Overview

Links are used as navigational elements.

### When to use

Use Standalone links when you want to link to other pages or external resources. They are used on their own or directly next to other content.

### When not to use

Do not use Standalone links within sentences or paragraphs. Use [Inline links](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-6140) instead.

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-links-link--documentation)

## Formatting

### Anatomy

1. **Link Label**
1. **Underline**
1. **Icon (optional)**

![Anatomy](link/anatomy-1943-14768.png)

### Variants

There are two variants for Standalone links:

1. **Highlight:** These should be used per default since their interactivity is indicated by the color.
1. **Neutral:** This variant can be used when they sit within a context that makes it clear that they are an interactive element, i.e. breadcrumbs or footer links.

![Variants](link/variants-1943-15059.png)

### Icon

Standalone link can be feature an icon to clarify an action and to highlight a link. They are always placed left or right of the text label.

![Icon](link/icon-1969-5385.png)

## Content

### Character length Standalone Link

Standalone links can be set to a single word **(1)**, as well, as to full sentences **(2)**.

![Character length Standalone Link](link/character-length-standalone-link-1943-14895.png)

### Overflow

Although its not recommended, overflow **(1)** can occur. The icon **(2)** is aligned centered to the text. The text should not overflow in more than two lines.

![Overflow](link/overflow-1943-14904.png)

## Colour combinations

### Background colours

Inline links should only be used on backgrounds as shown below:

#### Light mode

![Light mode](link/light-mode-1969-5531.png)

#### Dark mode

![Dark mode](link/dark-mode-1969-5558.png)

## Link Button

A button link visually looks like a button but functions as a link

> **Disclaimer: Link CTA in Figma** In Figma, there is no visual distinction between the link-CTA and the [button component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=162-126). When designing, use the button component, but ensure that during the developer handoff, the correct code component is implemented based on its intended function.

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-links-link-button--documentation)

![Link Button](link/link-button-28123-2592.png)

## Overview

A button link visually looks like a button but functions as a link

### When to use

- When the action navigates the user to another page or an external site.
- When the action is non-destructive (if the clicking the link) does not modify data, trigger irreversible changes, or require confirmation.
- When maintaining visual consistency with buttons while keeping standard link behavior.

### When not to use

Links should only used to navigate users to another location, such as a different page, an external site, or a specific section within the same page. So the button style linke should not be used

- For actions that change data, submit forms, or perform in-place updates—use a real button instead.
- When the action does not need the visual weight of a button.

### Alternatives

- Use a text link (inline link) when the action is secondary or part of a sentence.
- Use a standalone link when navigation is important but does notrequire strong visual emphasis

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-links-link-button--documentation)

## Formatting

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Icon

A button link can include an icon to clarify its purpose or add emphasis. Especially when linking to another page or an external website

Icons can be placed before or after the text label, though a left position is preferred for readability.

For general button behavior, refer to the [Button Documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=1881-8244&t=6H7CjP58P7hAE6UF-1)

![Icon](link/icon-28616-1979.png)

## Content

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Maximum character

Unlike standalone links, a button link should not contain full sentences. Instead, keep the text concise:

1. A maximum of **18 characters** without icon
1. A maximum of **16 characters** with icon

![Maximum character](link/maximum-character-28633-2474.png)

### Overflow

Although its not recommended, overflow can occur. [In this case use ghost buttons styling if possible.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-3943) The icon is aligned centered to the text. The text should not overflow in more than two lines.

![Overflow](link/overflow-28633-2485.png)

## Behavior

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Disable

The button linke has the same fcouse behaviour as the button component

![Disable](link/disable-28645-2847.png)

## Inline Link

![Inline Link](link/inline-link-168-6185.png)

## Overview

Links are used as navigational elements.

### When to use

Use Inline links when you want to link to other pages or external resources within a sentence or paragraph.

### When not to use

Do not use Inline links outside of sentences or paragraphs. Use [Standalone links](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-7210) instead.

### Links that look like buttons

There are instances when a link needs to be styled as a button because of its emphasis on the page.

In this case keep in mind that there is no disabled and loading state, since they are links.

### Component vs. style

In code Inline links are set up as a style. For ease of use in Figma we created the Inline link as a component that can be placed on top of sentences and paragraphs by using the “absolute position” function.

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/styles-link-inline--documentation)

## Formatting

### Anatomy

1. **Link label**
1. **Underline**
1. **Icon**

![Anatomy](link/anatomy-1943-12164.png)

### Types

There are three Inline link types:

1. Without icon (default)
1. With arrow out icon (external link)
1. With arrow down icon (anchor link)

**Attention**: In the code component only these three types are enabled.

![Types](link/types-1943-12174.png)

### Variants

Highlight **(1)** or neutral **(2).**

For accessibility reasons the highlight variation is recommended.

![Variants](link/variants-1943-12198.png)

### Font size

For Inline links the font size adapts to the main copy.

![Font size](link/font-size-1943-12187.png)

### Icon size

For Inline links the icon size adapts to the font size:

1. Text M
1. Text S
1. Text XS

![Icon size](link/icon-size-5131-1895.png)

### Spacing

The spacing between text and icon is set to 0.375em in order to allow the spacing to grow depending on the font size.

![Spacing](link/spacing-5131-1971.png)

## Content

### Character length Inline Link

Inline links can be set to a single word, as well, as to full sentences.

![Character length Inline Link](link/character-length-inline-link-1943-12325.png)

### Don’t link multiple sentences

It is not recommended to link multiple sentences or a full paragraph.

![Don’t link multiple sentences](link/don-t-link-multiple-sentences-1943-12336.png)

## Behavior

### Focus edge case – Link over two lines

The edge case when the link expands over two lines

![Focus edge case – Link over two lines](link/focus-edge-case-link-over-two-lines-2036-7384.png)

### Interaction trigger

Users can activate external links (dialogue, new tab or new window) or anchor links (same tab/page).

![Interaction trigger](link/interaction-trigger-1943-12310.png)

## Colour combinations

### Background colours

Inline links should only be used on backgrounds as shown below:

#### Light mode

![Light mode](link/light-mode-1943-12221.png)

#### Dark mode

![Dark mode](link/dark-mode-1943-12260.png)
