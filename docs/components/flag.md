---
id: flag
title: Flag
category: component
importNames:
  - DSFlag
package: "@stihl-design-system/components"
keywords:
  - flag
  - badge
  - label
  - status marker
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 19511:2443
figmaVersion: "2418673789211182393"
figmaVersionLabel: "Reset Version: 1.2.13 | 14.10.2026 | CW39 Erdbohrer"
figmaVersionCreatedAt: 2026-11-06T08:58:38Z
syncedAt: 2026-11-06T09:42:09.917Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=19511-2443
---

# Flag

## Flag

Overview:

- A Flag is a non-interactive, read-only component used to communicate status, highlight content, or provide supplementary information (such as categories or metadata).
- Flags come in two variants: Status and Promo.
   - Status Flags indicate the state of an item or process, or provide neutral contextual labels.
   - Promo Flags highlight content and are often used alongside buttons.

![Flag](flag/flag-19511-2452.png)

_Figure: Text in the figure: "status:", "Flag", "success", "warning", "error", "info", "promo:", "neutral", "highlight"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-flag--documentation)

### Related elements

[Chip group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=18691-978)

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=7251-8)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

[System feedback](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Pattern-Library-%F0%9F%96%A5-Web-1.0?node-id=14690-32&t=70clRGTOE7xoCl4t-4)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Icon (optional)**
1. **Label**

![Anatomy](flag/anatomy-19655-22.png)

_Figure: Shows flag (icon, label=Flag, color=status: info). Callouts 1, 2. Text in the figure: "Flag"._

#### Variants

Flags have two variants: **Status and Promo**.

1. **Status:** Used to communicate the state of an item or to provide neutral contextual labeling.
   1. **Success**
   1. **Warning**
   1. **Error**
   1. **Info**
1. **Promo:** Used for marketing, highlighting, or drawing attention to specific content.
   1. **Neutral**
   1. **Highlight**

![Variants](flag/variants-52869-26154.png)

_Figure: Shows flag (icon, label=Flag, color=status: success); flag (icon, label=Flag, color=status: warning); flag (icon, label=Flag, color=status: error); flag (icon, label=Flag, color=status: info); flag (icon, label=Flag, color=promo: neutral); flag (icon, label=Flag, color=promo: highlight). Text in the figure: "1a", "Flag", "1b", "1c", "1d", "2a", "2b"._

### Sizing

#### As long as text

The width of the flag adjusts to the label length.

![As long as text](flag/as-long-as-text-19711-50.png)

_Figure: Shows Frame 3465160 (label=Flag Short, color=status: info); flag (label=Flag content with a long text or description, color=status: info). Text in the figure: "content", "Flag Short", "Flag content with a long text or description"._

### Spacing

Multiple flags can be placed together, and the spacing between elements is 8px.

If needed, wrap the items in the group. Vertical spacing is also 8px.

![Spacing](flag/spacing-19711-76.png)

_Figure: Measurements: 8px. Text in the figure: "Tipps", "Gerätepflege", "Arbeitstechnik", "Akku-Pflege", "Lithium-Ionen-Akkus richtig lagern", "ƒ", "Der richtige Umgang mit einem Akku ist entscheidend für eine lange Lebensdaue...", "03.07.2024"._

## Content and Assets

### Labels

#### Do use concise labels

Use short words in simple language. They must be easy to understand. Also, avoid abbreviations for accessibility reasons.

![Do use concise labels](flag/do-use-concise-labels-53310-1856.png)

_Figure: Do example. Shows Frame 3465194 (label=Offer, color=promo: highlight); Frame 3465195 (label=Enrolled, color=status: info); Frame 3465196 (label=Rejected, color=status: error); Frame 3465197 (label=Accepted, color=status: success); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Text in the figure: "Offer", "Enrolled", "Rejected", "Accepted", "New", "In assessment"._

#### Don’t repeat the subject in flag labels.

It creates unnecessary length.

![Don’t repeat the subject in flag labels.](flag/don-t-repeat-the-subject-in-flag-labels-19711-94.png)

_Figure: Don't example. Shows flag (label=Document denied, color=status: error); Frame 3465160 (label=Document pending, color=status: warning). Text in the figure: "Document denied", "Document pending"._

#### Don’t use similar or synonymous terms across flags.

E.g. “Rejected” and “Declined”.

![Don’t use similar or synonymous terms across flags.](flag/don-t-use-similar-or-synonymous-terms-across-flags-53310-1922.png)

_Figure: Don't example. Shows Frame 3465181 (label=Rejected, color=status: error); Frame 3465184 (label=Declined, color=status: error). Text in the figure: "Rejected", "Declined"._

### Icons

#### Icon usage with purpose

Icons are **optional**. Use icons sparingly, as excessive use can create unnecessary cognitive load.

When used, icons should support quick visual recognition and help users understand the meaning of the flag at a glance.

![Icon usage with purpose](flag/icon-usage-with-purpose-19819-458.png)

_Figure: Shows Frame 3465191 (icon, label=Approved, color=status: success); Frame 3465193 (icon, label=Plan cancels soon, color=status: warning); Frame 3465190 (icon, label=Rejected, color=status: error); Frame 3465192 (icon, label=In assessment, color=status: info). Text in the figure: "Approved", "Plan cancels soon", "Rejected", "In assessment"._

#### Icon type

1. Use Functional Icons for flags by default.
1. For the Status variants, System Feedback Icons may be used to reinforce meaning and ensure the status stands out visually.

![Icon type](flag/icon-type-52929-21249.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); Frame 3465191 (icon, label=Approved, color=status: success); Frame 3465185 (icon, label=Confirmed, color=status: success); Frame 3465193 (icon, label=Plan cancels soon, color=status: warning); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465190 (icon, label=Rejected, color=status: error); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465192 (icon, label=In review, color=status: info); Frame 3465194 (icon, label=In review, color=status: info); Frame 3465195 (icon, label=Discount, color=promo: highlight); Frame 3465196 (icon, label=Promotion, color=promo: neutral). Callouts 1, 2. Text in the figure: "Approved", "Confirmed", "Plan cancels soon", "In assessment", "Rejected", "In review", "Discount", "Promotion"._

#### Do use icons consistently within each variant

Flags with and without icons can be used together, as long as usage is consistent within each variant.

For example:

1. Status Info flags remain icon-free, while Status Warning flags include icons.
1. Status Info Flags may be icon-free, while Promo flags can use icons for emphasis.

![Do use icons consistently within each variant](flag/do-use-icons-consistently-within-each-variant-52929-20369.png)

_Figure: Do example. Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); footer slot (button group, metadata copy=Jan 13, 2024 MSA 300, MSA 301 S-T, MS 402  + 5 more, flags bottom, alignment=left); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Callouts 1, 2. Text in the figure: "Required", "Product information", "Seasonal", "Battery-Powered Only", "New", "In assessment", "Rejected", "Enrolled"._

#### Don’t mix icon usage within the same variant

Avoid combining flags with and without icons within a single variant, as this creates inconsistency and reduces clarity.

![Don’t mix icon usage within the same variant](flag/don-t-mix-icon-usage-within-the-same-variant-52929-20679.png)

_Figure: Don't example. Shows flag (label=Completed, color=status: success); flag (label=Approved, color=status: success); flag (icon, label=Checked, color=status: success). Text in the figure: "Completed", "Approved", "Checked"._

### Numbers

#### Don’t use flags with numbers only.

Use a number indicator component instead.

![Don’t use flags with numbers only.](flag/don-t-use-flags-with-numbers-only-53360-17021.png)

_Figure: Don't example. Shows Frame 3465192 (label=12, color=status: error). Text in the figure: "12"._

#### Do pair numbers with a label when displaying counts.

Use brackets for secondary counts (e.g. “Comments (3)”).

![Do pair numbers with a label when displaying counts.](flag/do-pair-numbers-with-a-label-when-displaying-counts-53360-16955.png)

_Figure: Do example. Shows Frame 3465190 (label=Rejected (12), color=status: error); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Text in the figure: "Rejected (12)", "New", "In assessment", "Rejected", "Enrolled"._

## Usage

### Variants

#### Status

Used to communicate the state of an item:

1. **Success** Indicates a successful, completed, or approved state.
1. **Warning** Indicates a potential issue or situation that requires attention.
1. **Error** Indicates a failure, critical issue, or negative outcome.

or to provide neutral contextual labeling:

1. **Info** Indicates a neutral or ongoing state (e.g. in progress or under review). Can also be used for non-semantic labels such as categories, tags, or metadata when no status or urgency should be conveyed.

![Status](flag/status-53360-17048.png)

_Figure: Shows flag (icon, label=Flag, color=status: success); flag (icon, label=Flag, color=status: warning); flag (icon, label=Flag, color=status: error); flag (icon, label=Flag). Callouts 1, 2, 3, 4. Text in the figure: "Flag"._

#### Promo

Promo Flags are typically used alongside a button, but can also appear without one. Choose the variant based on context

- Primary button (background-color/primary-inverse) or no Button → use **Highlight Flag**
- Highlight Button (background-color/brand) → use **Neutral Flag**

![Promo](flag/promo-53360-17091.png)

_Figure: Shows flag (icon, label=Flag, color=promo: highlight); flag (icon, label=Flag, color=promo: neutral). Callouts 1, 2. Text in the figure: "Flag"._

### Groupings and combinations

#### Combining multiple Flags in one section are allowed.

Ensure each group has a clear and distinguishable purpose.

![Combining multiple Flags in one section are allowed.](flag/combining-multiple-flags-in-one-section-are-allowed-52929-19872.png)

_Figure: Shows action-card-vertical (media slot, padding=medium, content sizing=hug); action-card-vertical (padding=medium, content sizing=hug). Text in the figure: "Seasonal Tune-Up", "Battery Health", "Maintenance", "Seasonal", "Express Available", "RZ Financing Program", "Required", "Product information", "Battery-Powered Only", "Best Seller", "Our most popular service for longer life and reliable power.", "Make an appointment"._

#### Don’t combine too many different Flag variants in one section.

It makes scanning and comprehension more difficult. Use a max. of two Flag types per section.

![Don’t combine too many different Flag variants in one section.](flag/don-t-combine-too-many-different-flag-variants-in-one-sectio-53251-11339.png)

_Figure: Don't example. Shows action-card-vertical (media slot, padding=medium, content sizing=hug). Text in the figure: "Seasonal Tune-Up", "New", "Maintenance", "Seasonal", "Express Available", "Needs check", "Rejected"._

#### Do use separate sections for each Flag variant.

It makes content easier to scan and understand.

![Do use separate sections for each Flag variant.](flag/do-use-separate-sections-for-each-flag-variant-54222-11448.png)

_Figure: Do example. Shows action-card-vertical (media slot, padding=medium, content sizing=hug); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Text in the figure: "New", "Needs check", "Rejected", "Seasonal Tune-Up", "Maintenance", "Seasonal", "Express Available", "In assessment", "Enrolled"._

#### Don’t use multiple Promo Flags within a group.

Promo Flags should stand out and not compete with one another.

![Don’t use multiple Promo Flags within a group.](flag/don-t-use-multiple-promo-flags-within-a-group-53310-12673.png)

_Figure: Don't example. Shows action-card-vertical (padding=medium, content sizing=hug). Text in the figure: "Best Seller", "New", "Maintenance", "Seasonal", "Seasonal Tune-Up", "Our most popular service for longer life and reliable power."._

#### Use a maximum of two Promo Flags per group, ensuring one is highlighted and the other is neutral.

![Use a maximum of two Promo Flags per group, ensuring one is highlighted and the other is neutral.](flag/use-a-maximum-of-two-promo-flags-per-group-ensuring-one-is-h-54222-11619.png)

_Figure: Do example. Shows action-card-vertical (padding=medium, content sizing=hug); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Text in the figure: "Best Seller", "New", "Maintenance", "Seasonal", "Seasonal Tune-Up", "Our most popular service for longer life and reliable power.", "In assessment", "Rejected", "Enrolled"._

### Promo usage

#### Promo Flag Neutral vs. Highlight

The two Promo flag variants are used depending on the level of emphasis and the accompanying conversion element.

1. **Promo Neutral**
   - Used in combination with a Highlight Button. In this case, the button should remain the primary call to action, and the flag acts as a secondary element.
   - This is commonly used in Product cards.
1. **Promo Highlight**
   - Used with other interactive elements that are not the primary Highlight Button. In this case, the flag can take on more visual prominence to attract attention.
   - This is commonly used in Link Cards and Action Cards.

![Promo Flag Neutral vs. Highlight](flag/promo-flag-neutral-vs-highlight-53310-12800.png)

_Figure: Two cards using flags. Callout 1 points at a product card (chainsaw image, "Productname", rating "3.5 (80)", "Categorie", short description, "Available now", price "11.199,00 €" incl. VAT, "Compare" checkbox and an orange add-to-cart button) with a dark "Promo Flag" above the product name, the Promo Neutral variant used with a Highlight Button. Callout 2 points at a vertical link card with a photo, an orange "Brand Flag" on the image, the heading "Charging and energy management in the STIHL AP system", a truncated description and a "Decorative Link"._

### Color usage

#### Additional colors

Additional colors may be introduced **only when necessary** and when required by the product or layout.

These colors should be used exclusively for labeling purposes (e.g. categories) and must not be used to communicate status or promotional emphasis.

Ensure additional colors are visually distinct from the other Status Flags, so they are not confused with semantic states.

All color combinations must meet [WCAG AA contrast requirements](https://accessibleweb.com/color-contrast-checker/): **AA (minimum): 4.5:1 for normal text, 3:1 for large text and UI components**

The text label color must remain grey-ultra-deep (token: content-color/primary).

When introducing new colors, ensure they are accessible and behave consistently in dark mode.

![Additional colors](flag/additional-colors-52929-20005.png)

_Figure: Shows flag (label=Status Info, color=status: info); flag (label=Status Info Custom, color=status: info). Text in the figure: "Status Info", "Status Info Custom"._

#### Don’t use custom-colored Flags for the STIHL battery systems.

![Don’t use custom-colored Flags for the STIHL battery systems.](flag/don-t-use-custom-colored-flags-for-the-stihl-battery-systems-19713-126.png)

_Figure: Don't example. Shows flag (label=AI-System, color=promo: highlight); Frame 3465192 (label=AK-System, color=status: warning); Frame 3465189 (label=AP-System, color=status: info); Frame 3465191 (label=AS-System, color=status: success). Text in the figure: "AI-System", "AK-System", "AP-System", "AS-System"._

#### Do use the dedicated STIHL battery system logos .

Refer to the [STIHL brand portal](https://brandportal.stihl.com/de/basic-elements/layout-prinziples/drive-cordless-system-module) for details.

![Do use the dedicated STIHL battery system logos .](flag/do-use-the-dedicated-stihl-battery-system-logos-54222-11737.png)

_Figure: Do example. Shows logo 4 (variant=ai); logo 2 (variant=ak-system); logo 1 (variant=ap-system); logo 3 (variant=as-system); Frame 3465185 (label=New, color=status: success); Frame 3465188 (icon, label=In assessment, color=status: warning); Frame 3465186 (icon, label=Rejected, color=status: error); Frame 3465187 (icon, label=Enrolled, color=status: info). Text in the figure: "New", "In assessment", "Rejected", "Enrolled"._

### Related components

#### Status Flag vs. System Feedback vs. Notification

These components serve different purposes and should not be used interchangeably.

1. **Status Flag** Communicates the state of an object or process:
   - Associated with a specific item (e.g. in a database)
   - Appears as part of the layout (e.g. within a Card or Table)
   - Can change, be replaced, or disappear as the state updates
1. **System Feedback** Guides the user in response to an interaction:
   - Triggered by user input or actions
   - Appears close to the relevant UI element (e.g. Input)
   - Helps users understand and resolve issues (e.g. errors, validation)
   - Typically disappears once the issue is resolved [System Feedback building block →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=14690-32)
1. **Notification** Informs the user about system events or updates:
   - Triggered by system logic, not direct user interaction
   - Appears within a flow or as an overlay
   - May require user attention or action
   - Can be dismissed by the user [Notification component →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7251-8)
1. **Toast** Provides temporary, non-blocking feedback about an action or event:
   - Often triggered by user actions (e.g. “Saved successfully”)
   - Appears briefly as an overlay (e.g. bottom or top of screen)
   - Does not interrupt the user’s flow
   - Disappears automatically after a short duration [Toast component →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

![Status Flag vs. System Feedback vs. Notification](flag/status-flag-vs-system-feedback-vs-notification-19819-198.png)

_Figure: Shows Frame 3465161 (icon, label=Confirmed, color=status: success); Frame 3465162 (icon, label=Needs review, color=status: warning); Frame 3465172 (icon, label=Rejected, color=status: error); Frame 3465173 (icon, label=In review, color=status: info); system-feedback (type=success); system-feedback (type=warning); system-feedback (type=error); notification (close button, type=success, icon=True); notification (close button, type=warning, icon=True); notification (close button, type=error, icon=True); notification (close button, type=info, icon=True); toast (text=All files updated, icon, type=success). Callouts 1, 2, 3, 4. Text in the figure: "Confirmed", "Needs review", "Rejected", "In review", "Connector linked successfully", "Connector not found", "Connector unknown", "Success: All files have been successfully uploaded. Thank you for your patience.", "Warning: Connection unstable. Unsaved progress might be lost. Please save you...", "Error: There was an issue uploading your files. Please try again or contact s...", "Note: Enhance your experience by customizing your preferences in the settings...", "All files updated", "You have unsaved changes", "A new update is available"._

## Examples

### STIHL Service Communication (SSC)

- Table with multiple functions
- Use of Status Flags

![STIHL Service Communication (SSC)](flag/stihl-service-communication-ssc-19836-286.png)

### Timbersports Article

- Multiple Flags in articles to show categories

![Timbersports Article](flag/timbersports-article-20082-317.png)

_Figure: Text in the figure: "Home", "/", "News", "World Trophy 2023 in Rotterdam", "Nachrichten", "Ergebnis", "Mit Weltrekord: Neuseeländer Jack Jordan verteidigt härtesten Sportholzfäller...", "ƒ", "10. Jun 2023Niederlande · Global"._

### Corporate STIHL Journal

- Multiple Flags in Link Cards to show categories

![Corporate STIHL Journal](flag/corporate-stihl-journal-19713-120.png)

### Product Overview Page

- Proudct Card with a Promo Flag

![Product Overview Page](flag/product-overview-page-53360-15528.png)
