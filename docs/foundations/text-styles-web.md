---
id: text-styles-web
title: "Text Styles: Web"
category: foundation
importNames:
  - DSHeading
  - DSText
  - DSTextUtility
package: "@stihl-design-system/components"
keywords:
  - typography
  - text styles
  - heading
  - text
  - utility
  - web
figmaFile: Typography
figmaProject: 01. Fundamentals
figmaFileKey: d9wrOp4aCplDsV9AVC87Xn
figmaNodeId: 1:132
figmaVersion: "2256555008264774628"
figmaVersionLabel: DS-1117 Design | 34em
figmaVersionCreatedAt: 2025-08-26T11:13:29Z
syncedAt: 2026-10-27T13:32:36.726Z
sourceUrl: https://www.figma.com/design/d9wrOp4aCplDsV9AVC87Xn?node-id=1-132
---

# Text Styles: Web

## Headings

Heading styles are used for primary headlines and section titles, providing clear hierarchy and visual prominence. Ideal for grabbing attention and structuring content. Headings are optimized for different viewports to ensure optimal legibility. Each heading size consists of two options to allow for maximum flexibility when creating hierarchies:

- uppercase
- lowercase

The **uppercase** variations should be given priority - specially for H1 and H2 headlines to convey the STIHL brand. Remember to keep **uppercase** headings short in order to guarantee legibility. For longer headings and to create multiple levels of hierarchy **lowercase** variations can be used.

As a general rule, major page or section headings (approximately H1-H3) should not be smaller than the Heading L size.

> The new STIHL Font Digital has been implemented. Due to rendering issues with Figma, the font appears slightly off-center vertically, leaning towards the top.

### Viewport above Desktop-small (\>=1024px)

**Heading XL UPPERCASE**

**@mixin** ds-heading-x-large-uppercase **font-family:** STIHL Contraface Digital Display Title

**font-size:** 30px **line-height:** 1.25 (38px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading XL**

**@mixin** ds-heading-x-large **font-family:** STIHL Contraface Digital Text Bold

**font-size:** 30px **line-height:** 1.25 (38px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading L UPPERCASE**

**@mixin** ds-heading-large-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 26px **line-height:** 1.2 (32px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading L**

**@mixin** ds-heading-large **font-family:** STIHL Contraface Digital Text Bold **font-size:** 26px **line-height:** 1.2 (32px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading M UPPERCASE**

**@mixin** ds-heading-medium-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 20px **line-height:** 1.2 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading M**

**@mixin** ds-heading-medium **font-family:** STIHL Contraface Digital Text Bold **font-size:** 20px **line-height:** 1.2 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading S UPPERCASE**

**@mixin** ds-heading-small-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 16 px **line-height:** 1.5 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading S**

**@mixin** ds-heading-small **font-family:** STIHL Contraface Digital Text Bold **font-size:** 16 px **line-height:** 1.5 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

### Viewport below Desktop-small (\<1024px)

**Heading XL UPPERCASE**

**@mixin** ds-heading-x-large-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 26px **line-height:** 1.2 (32px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading XL**

**@mixin** ds-heading-x-large **font-family:** STIHL Contraface Digital Text Bold **font-size:** 26px **line-height:** 1.2 (32px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading L UPPERCASE**

**@mixin** ds-heading-large-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 22px **line-height:** 1.25 (28px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading L**

**@mixin** ds-heading-large **font-family:** STIHL Contraface Digital Text Bold **font-size:** 22px **line-height:** 1.25 (28px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading M UPPERCASE**

**@mixin** ds-heading-medium-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 20px **line-height:** 1.2 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading M**

**@mixin** ds-heading-medium **font-family:** STIHL Contraface Digital Text Bold **font-size:** 20px **line-height:** 1.2 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading S UPPERCASE**

**@mixin** ds-heading-small-uppercase **font-family:** STIHL Contraface Digital Display Title **font-size:** 16 px **line-height:** 1.5 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Heading S**

**@mixin** ds-heading-small **font-family:** STIHL Contraface Digital Text Bold **font-size:** 16 px **line-height:** 1.5 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Translation to Dev Mode

> **Attention!** Figma Dev mode misrepresents typography styles! Displayed font-family and font-weight in Figma inspector is wrong! font-weight should always be set to "normal" to avoid faux bold.

Examples:

**The correct description is visible on the right-hand side of the example:**

Example

**Heading M**

**@mixin** ds-heading-medium **font-family:** STIHL Contraface Text Bold **font-size:** 20px **line-height:** 1.2 (24px)

**font-weight:** normal

## Text

Text styles are primarily designed for body text and short text in various formats, maintaining a consistent size across different viewports.

The minimum size for body text should not be smaller than Text M. Sizes smaller than Text M are best reserved for brief text elements, such as footnotes and hints.

> The new STIHL Font Digital has been implemented. Due to rendering issues with Figma, the font appears slightly off-center vertically, leaning towards the top.

**Text L**

**@mixin** ds-text-large

**font-family:** STIHL Contraface Digital Text Regular **font-size:** 20px **line-height:** 1.6 (32px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Text L Bold**

**@mixin** ds-text-large-bold

**font-family:** STIHL Contraface Digital Text Bold **font-size:** 20px **line-height:** 1.6 (32px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Text M**

**@mixin** ds-text-medium

**font-family:** STIHL Contraface Digital Text Regular **font-size:** 16px **line-height:** 1.5 (24px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Text M Bold**

**@mixin** ds-text-medium-bold **font-family:** STIHL Contraface Digital Text Bold **font-size:** 16px **line-height:** 1.5 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Text S**

**@mixin** ds-text-small **font-family:** STIHL Contraface Digital Text Regular **font-size:** 14px **line-height:** 1.14 (16px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Text S Bold**

**@mixin** ds-text-small-bold **font-family:** STIHL Contraface Digital Text Bold **font-size:** 14px **line-height:** 1.14 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Text XS**

**@mixin** ds-text-x-small **font-family:** STIHL Contraface Digital Text Regular **font-size:** 12px **line-height:** 1.33 (16px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Text XS Bold**

**@mixin** ds-text-x-small-bold **font-family:** STIHL Contraface Digital Text Bold **font-size:** 12px **line-height:** 1.33 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Text XXS**

**@mixin** ds-text-xx-small

**font-family:** STIHL Contraface Digital Text Regular **font-size:** 10px **line-height:** 1.6 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Utility

Utility styles are intended for text elements that require a smaller line height, as they are typically limited to a single line and should remain compact. These styles are ideal for labels on interactive elements and similar concise text content.

> The new STIHL Font Digital has been implemented. Due to rendering issues with Figma, the font appears slightly off-center vertically, leaning towards the top.

**Utility L**

**@mixin** ds-utility-large

**font-family:** STIHL Contraface Digital Text Regular **font-size:** 18px **line-height:** 1.33 (24px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Utility L Bold**

**@mixin** ds-utility-large-bold

**font-family:** STIHL Contraface Digital Text Bold **font-size:** 18px **line-height:** 1.33 (24px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Utility M**

**@mixin** ds-utility-medium

**font-family:** STIHL Contraface Digital Text Regular **font-size:** 16px **line-height:** 1.25 (20px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Utility M Bold**

**@mixin** ds-utility-medium-bold

**font-family:** STIHL Contraface Digital Text Bold **font-size:** 16px **line-height:** 1.25 (20px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Utility S**

**@mixin** ds-utility-small **font-family:** STIHL Contraface Digital Text Regular **font-size:** 14px **line-height:** 1.14 (16px)

**font-weight:** normal

The quick brown fox jumps over the lazy dog

**Utility S Demi**

**@mixin** ds-utility-small-demi **font-family:** STIHL Contraface Digital Text Demi **font-size:** 14px **line-height:** 1.14 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Utility S Bold**

**@mixin** ds-utility-small-bold **font-family:** STIHL Contraface Digital Text Bold **font-size:** 14px **line-height:** 1.14 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

**Utility XS Demi**

**@mixin** ds-utility-x-small-demi **font-family:** STIHL Contraface Digital Text Demi **font-size:** 12px **line-height:** 1.33 (16px)

**font-weight:** normal

**The quick brown fox jumps over the lazy dog**

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).
