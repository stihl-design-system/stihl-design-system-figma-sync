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
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-07T14:22:13.472Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26711-8034
---

# Link

## Link

Use links when you want the users to navigate to another internal or external page

![Link](link/link-168-7255.png)

_Figure: State matrix of the Link Default component in light and dark mode, with columns enabled, hover / pressed, focus and active and rows highlight and neutral. Each cell has three links: no icon, icon left and icon right. Highlight links are blue and neutral links are dark text (white on the black dark-mode panel); hover / pressed adds a grey background, focus adds a dark outline frame around the link and active adds an underline._

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

_Figure: Anatomy of a highlight link with an icon on the left and the label "Link Default": callout 1 points at the link label, callout 2 at the underline beneath the label, and callout 3 at the optional icon._

### Variants

There are two variants for Standalone links:

1. **Highlight:** These should be used per default since their interactivity is indicated by the color.
1. **Neutral:** This variant can be used when they sit within a context that makes it clear that they are an interactive element, i.e. breadcrumbs or footer links.

![Variants](link/variants-1943-15059.png)

_Figure: Two Link Default variants with a left icon, stacked: callout 1 is the blue highlight variant and callout 2 is the dark neutral variant._

### Icon

Standalone link can be feature an icon to clarify an action and to highlight a link. They are always placed left or right of the text label.

![Icon](link/icon-1969-5385.png)

_Figure: Two highlight Link Default links side by side in the enabled state: one with the icon placed left of the label and one with the icon placed right of the label._

## Content

### Character length Standalone Link

Standalone links can be set to a single word **(1)**, as well, as to full sentences **(2)**.

![Character length Standalone Link](link/character-length-standalone-link-1943-14895.png)

_Figure: Two neutral standalone links without icon: callout 1 points at the single-word link "Impressum" and callout 2 at the full-sentence link "Entsorgung von Batterien und Elektrogeräten"._

### Overflow

Although its not recommended, overflow **(1)** can occur. The icon **(2)** is aligned centered to the text. The text should not overflow in more than two lines.

![Overflow](link/overflow-1943-14904.png)

_Figure: Three neutral links in a list: "Rasentrimmer, Motorsensen und Freischneider" with a right icon wraps onto two lines, followed by single-line "Rasenmäher" and "Mulchrasenmäher". Callout 1 points at the wrapped text (overflow, max two lines) and callout 2 at the icon, which is vertically centered to the text._

## Colour combinations

### Background colours

Inline links should only be used on backgrounds as shown below:

#### Light mode

![Light mode](link/light-mode-1969-5531.png)

_Figure: Link Default in light mode on three backgrounds. On "white background" and "grey ultra-light background" both the blue highlight link and the dark neutral link are shown; on "orange background" only a single dark link is shown._

#### Dark mode

![Dark mode](link/dark-mode-1969-5558.png)

_Figure: Link Default in dark mode on two backgrounds. On "grey deep background" a light-blue highlight link and a white neutral link are shown; on "blue dark background" only a single white link is shown._

## Link Button

A button link visually looks like a button but functions as a link

> **Disclaimer: Link CTA in Figma** In Figma, there is no visual distinction between the link-CTA and the [button component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=162-126). When designing, use the button component, but ensure that during the developer handoff, the correct code component is implemented based on its intended function.

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-links-link-button--documentation)

![Link Button](link/link-button-28123-2592.png)

_Figure: Button states used to design a link button, with columns enabled, hover / pressed /active and focus and rows highlight (orange), filled (dark), outline, ghost (default) and ghost (flush). Each row shows medium and small buttons labelled "Button" without icon, with left icon, with right icon and icon only; hover / pressed /active darkens or greys the fill and focus adds a double outline frame._

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

_Figure: Two button links with icons: a filled dark button "See all products" with a right chevron icon, and a ghost button "Anchor Link" with a left downward arrow icon._

## Content

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Maximum character

Unlike standalone links, a button link should not contain full sentences. Instead, keep the text concise:

1. A maximum of **18 characters** without icon
1. A maximum of **16 characters** with icon

![Maximum character](link/maximum-character-28633-2474.png)

_Figure: Two filled medium buttons on a dark fill, each with a numbered callout. Callout 1 marks a button without icon whose label is 18 characters ("mmmmmmmmmmmmmmmmmm"), the maximum without icon. Callout 2 marks a button with an icon on the right whose label is 16 characters ("mmmmmmmmmmmmmmmm"), the maximum with icon._

### Overflow

Although its not recommended, overflow can occur. [In this case use ghost buttons styling if possible.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-3943) The icon is aligned centered to the text. The text should not overflow in more than two lines.

![Overflow](link/overflow-28633-2485.png)

_Figure: Two ghost medium buttons with the label "Example of a button with two lines" wrapped onto two lines. The left one has the chevron icon on the left and the right one has it on the right, in both cases vertically centered to the text._

## Behavior

> Most of the “Formatting and Construction” guidelines from the Tabs in-page component apply, see above.

### Disable

The button linke has the same fcouse behaviour as the button component

![Disable](link/disable-28645-2847.png)

_Figure: Four medium buttons in the focus state, from left to right "Highlight" (orange fill), "Filled" (dark fill), "Outline" (outlined) and "Ghost" (no fill). Each shows the same double focus frame around the button as the button component._

## Inline Link

![Inline Link](link/inline-link-168-6185.png)

_Figure: Overview matrix of the inline link "Link Inline" on a light and a dark background, in the variants highlight (blue) and neutral (text colour). Columns are the states enabled, hover / pressed (grey background behind the link) and focus (frame around the link), each in three types (no icon, arrow out icon, arrow down icon) and three text sizes (M, S, XS), all underlined._

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

_Figure: Inline link "Link Inline" with the arrow out icon (highlight, text M, enabled) and three callouts. Callout 1 points at the link label, callout 2 at the underline beneath the label, and callout 3 at the icon after the label._

### Types

There are three Inline link types:

1. Without icon (default)
1. With arrow out icon (external link)
1. With arrow down icon (anchor link)

**Attention**: In the code component only these three types are enabled.

![Types](link/types-1943-12174.png)

_Figure: Three highlight inline links "Link Inline", text M, enabled, each with a numbered callout. Callout 1 marks the default link without icon, callout 2 the link with arrow out icon (external link), and callout 3 the link with arrow down icon (anchor link)._

### Variants

Highlight **(1)** or neutral **(2).**

For accessibility reasons the highlight variation is recommended.

![Variants](link/variants-1943-12198.png)

_Figure: Two lines of body text "Lorem ipsum Link Inline sit amet." with the inline link underlined. Callout 1 marks the highlight variant, where the link is blue, and callout 2 marks the neutral variant, where the link has the same dark colour as the text._

### Font size

For Inline links the font size adapts to the main copy.

![Font size](link/font-size-1943-12187.png)

_Figure: Two paragraphs of Lorem ipsum body text, each containing the underlined highlight inline link "consectetur". The left paragraph uses the larger text M and the right the smaller text S, and the link takes the font size of its surrounding text._

### Icon size

For Inline links the icon size adapts to the font size:

1. Text M
1. Text S
1. Text XS

![Icon size](link/icon-size-5131-1895.png)

_Figure: Three highlight inline links "Link Inline" with the arrow out icon at decreasing sizes. Callout 1 marks Text M, callout 2 Text S and callout 3 Text XS, and the icon shrinks together with the font size._

### Spacing

The spacing between text and icon is set to 0.375em in order to allow the spacing to grow depending on the font size.

![Spacing](link/spacing-5131-1971.png)

_Figure: Two highlight inline links "Link Inline" with the arrow out icon, with dashed purple guides marking the gap between the end of the text and the icon. For the larger text (M) the gap is "0.375em = 6px" and for the smaller text (XS) it is "0.375em = 4.5px"._

## Content

### Character length Inline Link

Inline links can be set to a single word, as well, as to full sentences.

![Character length Inline Link](link/character-length-inline-link-1943-12325.png)

_Figure: Two columns of the same Lorem ipsum paragraph with highlight inline links in the enabled state at text M. In the left column only the single word "consectetur" is linked, in the right column the full sentence "Lorem ipsum dolor sit amet consectetur." is linked, showing that inline links can be a single word or a sentence._

### Don’t link multiple sentences

It is not recommended to link multiple sentences or a full paragraph.

![Don’t link multiple sentences](link/don-t-link-multiple-sentences-1943-12336.png)

_Figure: Don't example with two columns of the same paragraph in which several sentences are linked as highlight inline links. The left column links the first three sentences and leaves the last one plain, the right column links the whole paragraph including "Volutpat leo proin non ut id diam et."; linking multiple sentences or a full paragraph is not recommended._

## Behavior

### Focus edge case – Link over two lines

The edge case when the link expands over two lines

![Focus edge case – Link over two lines](link/focus-edge-case-link-over-two-lines-2036-7384.png)

_Figure: Highlight inline link in the focus state that wraps over two lines inside a paragraph ("Lorem ipsum sit amet consectetur faucibus turpis risus eget urna consequat nec..."). The focus outline follows the text: one outline surrounds "amet consectetur" at the end of the first line and a second outline surrounds "faucibus turpis risus" at the start of the second line._

### Interaction trigger

Users can activate external links (dialogue, new tab or new window) or anchor links (same tab/page).

![Interaction trigger](link/interaction-trigger-1943-12310.png)

_Figure: Two highlight inline links in the enabled state at text M. "Link Inline" is an external link with a trailing arrow-out-of-box icon (opens a dialogue, new tab or new window), and "Anchor Link" is an anchor link with a trailing downward arrow icon (jumps within the same tab/page)._

## Colour combinations

### Background colours

Inline links should only be used on backgrounds as shown below:

#### Light mode

![Light mode](link/light-mode-1943-12221.png)

_Figure: Light mode inline links in the sentence "Lorem ipsum Link Inline sit amet." on three backgrounds. On the white background and on the grey ultra-light background (thin dark border) the link is the blue highlight variant, on the orange background the link is the neutral variant shown in dark text with an underline._

#### Dark mode

![Dark mode](link/dark-mode-1943-12260.png)

_Figure: Dark mode inline links in the sentence "Lorem ipsum Link Inline sit amet." with white text on two backgrounds. On the grey deep background the link is the highlight variant in light blue with underline, on the blue dark background the link is the neutral variant in white with underline._
