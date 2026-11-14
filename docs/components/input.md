---
id: input
title: Input
category: component
importNames:
  - DSInput
  - DSInputPassword
  - DSInputSearch
  - DSInputNumber
  - DSSlider
package: "@stihl-design-system/components"
keywords:
  - input
  - text field
  - password
  - search
  - number
  - slider
  - form
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 1591:2
figmaVersion: "2418704252861676331"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-06T10:45:41Z
syncedAt: 2026-11-14T16:52:10.259Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2
---

# Input

## Input

Overview:

- use for basic text input in forms, messages, or search bars, for longer texts, see [text area](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=4937-4402)
- the label, hint and field are one click area
- leading icons assist the label, reducing cognitive load, with non-interactive secondary content
- tailing icons contain a function, inherits the interaction styles of a [ghost button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-3943)
- helpful information should visible at all times and therefore in the hint

![Input](input/input-2141-6700.png)

_Figure: Building block overview of the input prefix and suffix, titled "Building Block" and "Prefix/Suffix". A grid of boxes labeled "Label" shows a "Prefix" row and a "Suffix" row, each in "Default" and "Disabled" states, each in "medium" and "small" sizes, plus a filled grey variant of each at the right, all enclosed in a dashed purple frame._

![Input](input/input-10637-2731.png)

_Figure: Input main component in "Size Medium" and "Size Small", each showing the states "Default", "Hover", "Focus", "Disabled" and "Read-only", with each "Label", hint text and "Input" field. Default and Focus also exist "is invalid", with a red border and a "System feedback message" under the field; hover has a grey fill, focus a thick dark border, disabled grey text and read-only a light grey fill without border. Below, "Input Variations" show fields for "text, tel, number, email, url", "date" ("DD/MM/YY"), "month", "week" ("Week XX, XXXX"), "time" ("HH:MM") and "datetime" ("DD/MM/YY, HH:MM"), where all but the first have a trailing calendar or clock icon._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input--documentation)

### Related elements

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Label** Describes the required input
1. **Hint (optional)** Short copy that provides guidance and context. Copy is optional and only use if necessary
1. **Field** The area where you can fill in the information
1. **Placeholder text (optional)** Instruction text inside of the field
1. **Info Button (optional)** Can be used to trigger a popover with additional information
1. **Leading icon (optional)** This icon is optional. The icon is not interactive and therefore not clickable
1. **Tailing icon (optional)** This icon is optional. The icon is clickable and connected to an action
1. **User input** Data, entered by the user
1. **System feedback** Error or success message to help the user understand

![Anatomy](input/anatomy-1744-8963.png)

_Figure: Input anatomy with two examples and numbered callouts. In the first, 1 points at the "Label", 2 at the hint text below it, 3 at the field border and 4 at the "Placeholder" text inside it. In the second, which has a red invalid border, 5 points at the info button next to the label, 6 at the leading icon on the left of the field, 7 at the tailing icon on the right and at the "Input" text, and 8 at the "System feedback message" under the field._

#### Input types by browser default

Types of input requested from the user are:

1. text, tel, number, email, url
1. date
1. month
1. week
1. time
1. date and time (local)

**Important notes:**

- behavior depends on the browser and its settings
- placeholder value changes depending on language and country
- the tailing icon can not be overwritten in every browser
- not all html input elements (e.g. color, file) are available as a code component
   - use the dedicated variants for input search, input number and input password, see below
   - use input number, if the number is incremental
   - use input (this component), if a digit can be freely typed in the keyboard (e.g. dates, values, units)

![Input types by browser default](input/input-types-by-browser-default-4874-12225.png)

_Figure: Six input types by browser default, each a medium field with a label and a numbered callout pointing at the field content: 1 "Email" (text, tel, number, email, url type) with no icon, 2 "Date of departure" with placeholder "DD/MM/YY" and a calendar icon, 3 "Month" with a calendar icon, 4 "Calender week" with placeholder "Week XX, XXXX" and a calendar icon, 5 "Departure time" with placeholder "HH:MM" and a clock icon, 6 "Date of departure" with placeholder "DD/MM/YY, HH:MM" and a calendar icon._

### Containing Elements

#### Prefix / Suffix

1. **Prefix** An element in front of the input text that defines a a unit or other input that is given in the input, eg “www.”, “€” or “http”
1. **Suffix:** An element in after of the input text that defines a unit or other input that is given in the input, eg. “.com”, “kg” or “cm”

![Prefix / Suffix](input/prefix-suffix-1898-1232.png)

_Figure: Two input fields with a "Label". Callout 1 points at the "Prefix" element in a separated cell at the start of the first field, before the input text. Callout 2 points at the "Suffix" element in a separated cell at the end of the second field, after the input text._

#### Icons with and without function

1. **Leading icon:**
- leading icons support the label and reduce the cognitive load
- the leading icon has as secondary content color to differentiate it from the function and has no interaction
1. **Tailing icon:**
- a tailing icon has a **function**, e.g. “show password”
- the icon is a **ghost button without a label**

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=162-126)

![Icons with and without function](input/icons-with-and-without-function-2421-4301.png)

_Figure: Three inputs with the label "Label" are stacked. Callout 1 points at a leading image icon on the left of the first input, which is decorative and has no function. Callout 2 points at a lock icon on the right of the second input, a trailing icon with a function; the third input shows the same trailing lock icon as a ghost button with a grey hover background and a pointer cursor._

#### Do

The following combinations of pre- and suffix with leading and tailing are recommended, because of the optimized hierarchy and reduced mental load.

1. Prefix and Suffix
1. Prefix and Function
1. Leading Icons and Suffix
1. Icon and Function

![Do](input/do-4395-15184.png)

_Figure: Do example: four inputs labelled "Label" showing the recommended combinations. Callout 1 is "Prefix" on the left and "Suffix" on the right, callout 2 is "Prefix" on the left and a lock function icon on the right, callout 3 is a leading image icon on the left and "Suffix" on the right, and callout 4 is a leading image icon on the left and a lock function icon on the right._

#### Don’t

In order to keep the component clearly structured and reduce mental load, the combination of Suffix and function **(1)** or Prefix and leading icon **(2)** shouldn’t be use

![Don’t](input/don-t-4395-15192.png)

_Figure: Don't example: two inputs labelled "Label" with combinations that should not be used. Callout 1 shows a lock function icon combined with the "Suffix" on the right side, and callout 2 shows the "Prefix" combined with a leading image icon on the left side._

### Sizing

#### Maximum width

The width of an input field is determined by the container it is placed in. This should ideally be the “[content area narrow](https://www.figma.com/design/HHM9B6UjMStGLxMf6loNLn/DS-945-Grid-Optimisations-%7C-Design?node-id=1-857&t=FFOFP94g90gl91Ko-4)” defined within the grid layout.

While the input can adjust to fit its container, we recommend not exceeding a maximum width of 544px, matching the [maximum text width](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132), for better scanability and readability. This max width calculated by multiplying the font size with 34. For our default copy styling Text M (16px) that defines a max. width of 544px (16px\*34= 544px). This width should be set on a [fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154) or container itself.

In the Figma component, the maximum width is set to the recommended 544px.

![Maximum width](input/maximum-width-29346-2765.png)

_Figure: Two blue "CONTENT AREA NARROW" containers each hold an input with a "Label", a hint text and an "Input" field. In the upper example the container width equals the input width. In the lower example the container is wider, and the input stays at the "recommended max. width 544px" measured from the left edge while the "Container Width" measurement spans the whole wider container._

Available space does not necessitate that inputs span the full width. Defining an appropriate width enhances usability and contributes to a more structured and visually balanced layout. Especially when the expected input is short (e.g. Zip code) or if 2 inputs are used next too each other.

Additionally, according to Fitts’s Law, increasing the distance to a target (such as an input field) requires more time for the user to reach it, which can impact efficiency and usability.

[Article about Fitt’s Law on the NN Group website →](https://www.nngroup.com/articles/fitts-law/)

![Maximum width](input/maximum-width-4671-10422.png)

_Figure: Don't example: a 12-column grid with a "Label" and "Input" field spanning about 8 columns with an image icon at its right end, and below it three "Label" and "Input" fields of unequal widths in one row. This is wrong because three inputs sit next to each other, while a maximum of two are allowed in a row._

#### Input Grouping

A maximum of 2 input fields can be used next to each other if they are in context to each other.

A common combination is the postal code and city and also the street name and house number.

![Input Grouping](input/input-grouping-1899-2028.png)

_Figure: Two rows of paired empty input fields. The first row has a wide "Street Names" field next to a narrow "Number" field, and the second row has a narrower "Postal Code" field next to a wider "City" field, so at most 2 related fields sit side by side._

#### Grouping on mobile

On mobile devices all fields are stacked vertically.

![Grouping on mobile](input/grouping-on-mobile-1899-2036.png)

_Figure: Mobile layout on a 4-column grid in which all fields are stacked vertically. A "Label" with a hint text and a full-width "Input" comes first, followed by a "Label" with a half-width "Input", and then two further "Label" and full-width "Input" pairs._

## Content and Assets

### Simple text

- Keep labels and hints short and simple.
- It is recommended to avoid abbreviations.
- Test the understandability of the copy in the form at all times.

![Simple text](input/simple-text-3210-14520.png)

_Figure: An empty input with the short label "Machine number" and the short hint "For example: MS 170" above the field, as an example of simple, concise copy._

### Hint length

A hint is optional and should be used if clarity is needed.

Copy in the hint **(1)** should be ideally 1 sentence and 2 sentences maximum.

![Hint length](input/hint-length-4495-6227.png)

_Figure: An input with the label "Label" and a two-sentence hint above the field, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.", wrapped onto two lines. Callout 1 points at the hint, which should be one sentence ideally and two at most._

### Hint tone-of-voice

Be concise and to the point.

Do not use conversational language and avoid words like “Please”.

![Hint tone-of-voice](input/hint-tone-of-voice-14151-2091.png)

_Figure: Do example: an empty input with the label "Telephone number" and the concise hint "Use the following format: +49098765432" on a single line, without conversational wording._

![Hint tone-of-voice](input/hint-tone-of-voice-14151-2131.png)

_Figure: Don't example: an empty input with the label "Telephone number" and the hint "Please enter your phone number in the correct format: +49098765432", which wraps onto two lines. This is wrong because the hint is conversational and uses the word "Please"._

### Do

Helpful information should visible at all times and therefore in the hint.

![Do](input/do-4644-11165.png)

_Figure: Do example: an empty input with the label "Password" and the hint "Must contain at least one special character (e.g. !”%&°^)" shown permanently above the field, so the helpful information stays visible._

### Don’t

Helpful information cannot be in the placeholder, because the text disappears on focus.

![Don’t](input/don-t-4644-11160.png)

_Figure: Don't example: two inputs labelled "Password" without a hint. The first shows the text "Must contain at least one special character (e.g. !”%&°^)" as grey placeholder inside the field, and the second is focused with a text cursor and the placeholder gone. This is wrong because helpful information in the placeholder disappears when the user focuses the field._

### Placeholder text

Placeholder text conveys information on the format of the desired input.

The examples show a field for a credit card number **(1)** and a date **(2).**

![Placeholder text](input/placeholder-text-11105-17997.png)

_Figure: Two inputs with placeholder text that shows the expected format. Callout 1 points at the placeholder "XXXX XXXX XXXX XXXX" in the field labelled "Credit card number". Callout 2 points at the placeholder "DD/MM/YY" in the field labelled "Date", which has a calendar icon at its right end._

### Required and optional indicators

In order to communicate which fields are required to the user an asterisk **(1)** is shown next to the label. When using the code component the asterisk will be shown automatically when input is set to required.

Even when all fields in a form are mandatory, they should still be marked with an asterisk. Users often skip introductory text, so visual indicators like asterisks avoid ambiguity.

Optional fields are marked with the word “(optional)”, after the label **(2)**. In most cases, this has to be added manually in the Content Management System.

**Attention: Reduce the optional fields to a minimum.** Consider carefully, if the users needs to provide this information at this point in the journey.

![Required and optional indicators](input/required-and-optional-indicators-1899-2161.png)

_Figure: Two inputs with an "Input" value. Callout 1 points at the asterisk after the label "Label \*", which marks a required field. Callout 2 points at the word "(optional)" after the label in "Label (optional)", which marks an optional field._

### Use cases for the prefix and suffix

- **most common use cases** include links and units of measurements (e.g. “kg.”) and symbols (e.g. “$”)
- the users input must **include digits only** if the unit type is in the prefix/suffix
- only use common abbreviations (e.g. “hr.”)
- use input field for numbers with large variability, [use input number for values that deviate little from the default.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=7342-2342)

### Copy length for the prefix and suffix

- maximum character count is 5 characters for both the pre- and suffix
- test the input field on all viewports to ensure quality and legibility, especially on shorter input fields

![Copy length for the prefix and suffix](input/copy-length-for-the-prefix-and-suffix-4495-6217.png)

_Figure: Four inputs labelled "Label" showing short prefixes and suffixes of at most 5 characters. The first has the prefix "https://" with the value "stihl.de", the second has the prefix "€" with "120", the third has the value "55,8" with the suffix "kg", and the fourth has "150" with the suffix "inch"._

### Info Button

A popover button can be placed next to input or select labels to provide **additional contextual information.**

Popover content should be **limited to supplementary, non-critical information** — such as brief explanations, examples, or tips that aid understanding without being essential to task completion.

![Info Button](input/info-button-39616-16329.png)

_Figure: An input labelled "9-stellige Maschinennummer" with the hint "Nummer ohne Leerzeichen und Bindestriche eintragen" and an info button next to the label, hovered with a pointer cursor. A white popover with an arrow pointing at the button opens above it, with the text "Bei STIHL FS94 finden Sie die Maschinennummer in der Regel an der in den Abbildungen gezeigten Stelle." and two line drawings of STIHL machines (a petrol trimmer engine unit and a full trimmer), each with a line pointing to an "XXXXXXXXX" placeholder for the machine number._

**Don’t use popovers for critical or required information.**

Use a hint instead, since essential details should never be hidden.

For more guidance, see the [Popover documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=35223-10505).

![Info Button](input/info-button-39616-16400.png)

_Figure: Don't example: clicking the info button next to the "Password" label of an empty input opens a white popover with an arrow pointing at the button, containing "Use at least 8 characters, including one uppercase letter, one number, and one special character." This is wrong because required information like password rules must not be hidden in a popover and should be shown as a hint instead._

## Behavior

### System feedback

System feedback is placed below the input-field.

![System feedback](input/system-feedback-1744-9004.png)

_Figure: Input labelled "Label" with a hint text ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.") above the field, the field showing the placeholder "Input" and an image icon on the right, in the invalid state with a red border. Below the input field, a red warning icon and the text "System feedback message" show that system feedback is placed directly below the field._

### Click behavior

The label, hint and field are one click area.

![Click behavior](input/click-behavior-2421-4351.png)

_Figure: Input with the label "Label", the hint "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." and an empty field, all three highlighted with one shared light orange background and a pointer cursor over the hint text. The shared highlight shows that label, hint and field form a single click area._

### Focus order

If the input field contains an leading icon / function, a screenreader focuses first on the input **(1)**, followed by the function **(2)**.

Navigating back from the content to the field, the input is focused **(3)**, so the user can delete it in one click.

![Focus order](input/focus-order-1898-1220.png)

_Figure: Focus order of an input labeled "Choose a location" with the value "STIHL Headquarter" and a location pin function icon on the right, shown in three steps. Callout 1 marks the focused input field with a thick border, 2 marks the focused function icon button with its own focus outline, and 3 marks the input focused again when navigating back, with the text "STIHL Headquarter" selected so it can be deleted in one click._

### Wizards by browser default

All browsers offer a default wizard to pick a date. Use the browser default, to improve usability and accessibility.

![Wizards by browser default](input/wizards-by-browser-default-4946-2448.png)

_Figure: Medium date input with the label "Date of departure", the placeholder "DD/MM/YY" and a calendar icon on the right, with the browser's native date picker open below it. The picker shows January 2024 with weekday columns M to S, the 24th highlighted as selected, month and year arrows, and "Clear" and "Today" links at the bottom._

### Clear the input field

Some browser automatically show a clear action On click, the entered input from the user disappears.

![Clear the input field](input/clear-the-input-field-4650-7797.png)

_Figure: Medium search input with the label "Label" and the entered text "Input", showing a clear (X) icon at the right end of the field with a hand cursor on it, meaning a click removes the entered text._

## Examples / Variations

### Coupon: input text

Mockup of the shopping cart: a single input text, where the user can enter a coupon code (stihl.de).

For multiple fields together, have a look at the fieldset.

[Fieldset component →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

![Coupon: input text](input/coupon-input-text-1744-9019.png)

_Figure: Mobile shopping cart mockup with a product ("Product name 2Z", ART.-NR. 58289808584, € 469.00 instead of € 469.00 old price, quantity 2, € 890.00 statt € 938.00). Below it a single medium input labelled "Coupon code" holds "CODE 1045", followed by Subtotal € 549.00, Delivery € 29.00, Discount – € 23.50, total € 554.50, "Contains 19% VAT: € 81.27", a highlight (orange) "Buy now" button, "Free delivery" and a legal note about the Privacy Policy, Terms and Cancellation policy._

![Coupon: input text](input/coupon-input-text-2496-5961.png)

_Figure: Overview of the password input in sizes "Size Medium" and "Size Small", each with the states Default, Hover, Focus, Disabled and Read-only. Every field has "Label", a hint text, masked input "\*\*\*\*\*\*\*\*" and an eye icon; Default and Focus also exist in an "is invalid" column with a red border (Default) or a thick dark focus border plus the red "System feedback message". Hover has a grey fill, Disabled has a light grey border and muted text, Read-only has a grey fill without border._

## Input Password

Overview:

- Use for secure text entry, hiding characters, typically in login or registration.
- A password field does not need any indicator, as it always required.

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input-password--documentation)

### Related elements

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Label** Describes the required input
1. **Info Button (optional)** Can be used to trigger a popover with additional information
1. **Hint (optional)** Provides guidance or further context or clarity for making a selection.
1. **Text field** The area where you can fill in the password
1. **Function: show/hide password** The eye icon/eye-closed can be clicked to show/hide the password
1. **Input text** Default password input is shown with asterisks

![Anatomy](input/anatomy-2607-3974.png)

_Figure: Anatomy of the medium password input with six numbered callouts: 1 points at the "Label", 2 at the info button (circled i) next to the label, 3 at the hint text below the label, 4 at the text field, 5 at the eye icon on the right (show/hide password) and 6 at the masked input text "\*\*\*\*\*\*\*\*"._

## Content and Assets

### Password requirements

The live validation of setting a new password is not part of the code component, therefore it is recommended to explain the password requirements in the hint. See [Storybook](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input-password--documentation) for the details according the attributes.

![Password requirements](input/password-requirements-7342-1675.png)

_Figure: Medium password input with the label "Password", a hint reading "Password must contain at least 8 characters with at least one uppercase letter, one number and one special character", masked input "\*\*\*\*\*\*\*\*" and an eye icon, showing that password requirements are explained in the hint._

### Required and optional indicators

A password field does not need any indicator, as it always required.

![Required and optional indicators](input/required-and-optional-indicators-7342-1778.png)

_Figure: Login form with two stacked medium fields: "Username or E-Mail" containing max.mustermann@stihl.com and "Password" with masked input and an eye icon. Neither label carries a required or optional indicator, because the password field is always required._

## Behavior

### System feedback

In case of an error message being displayed, is shown below the Text field.

![System feedback](input/system-feedback-4642-15937.png)

_Figure: Invalid medium password input with the label "Enter Password", masked input "\*\*\*\*\*\*\*\*", an eye icon and a red border. Below the field a red error icon with the message "Password must contain at least 1 number and 1 capital letter" is displayed as system feedback._

### Show and hide password

#### Icon switch

After clicking on the button to reveal the password, the icon will change from “eye” (show password) **(1)** to “eye-closed” (hide password) **(2)**.

Use a tooltip to communicate the function.

![Icon switch](input/icon-switch-4642-15561.png)

_Figure: Two medium password inputs labelled "Label". Callout 1: masked text "\*\*\*\*\*\*\*\*" with the "eye" icon and the tooltip "Show password". Callout 2: after clicking, the revealed text "P4s5W0rd\*" with the "eye-closed" icon and the tooltip "Hide password"._

## Examples / Variations

### Log in to MY STIHL account

The mobile version of the STIHL web shop. Log in input fields mostly do not have a required asterisk.

![Log in to MY STIHL account](input/log-in-to-my-stihl-account-4624-16136.png)

_Figure: Mobile STIHL web shop page "Log in and Sign Up" with a header (icon bar, "MENÜ", STIHL logo). In the "Log in" section are an empty medium "Email" input and an empty "Password" input with an eye icon, both without a required asterisk, then a highlight (orange) "Sign In" button and a ghost "Forgot Password?" button, followed by the start of the "Sign up" section with another "Email" label._

## Content and Assets

### Placeholder text

Placeholder text in a search field is commonly used to give a few examples, what to search for.

If the use-case and the lay-out allows, placing these examples in the hint is recommended, so that they don’t disappear on focus.

![Placeholder text](input/placeholder-text-7342-1822.png)

_Figure: Search field (input-search-medium, enabled, not invalid) with the label "Search", a placeholder giving examples ("Machine number, serial number, parts number...", truncated with an ellipsis) and a magnifying glass submit button on the right._

### Required and optional indicators

A search field does not need any indicator. In case the search command is submitted empty, **guide the user through copy in the empty state / no results state.**

![Required and optional indicators](input/required-and-optional-indicators-7477-6400.png)

_Figure: Don't example: two empty search fields with a magnifying glass submit button, one labelled "Search\*" (required asterisk) and one labelled "Search (optional)". A search field needs no required or optional indicator._

## Behavior

### Clear function

Clear the input on click. The function icon appears after input is entered by the user.

![Clear function](input/clear-function-4650-7669.png)

_Figure: Search field (input-search-medium, enabled) with the label "Label" and the entered text "Input"; the clear button (cross icon) at the right end shows a grey hover background with a hand cursor on it, illustrating that clicking it clears the input._

### Submit function

On click the submit button will trigger the search. Additionally, the submit function should be activated after pressing enter on the keyboard

![Submit function](input/submit-function-4650-7675.png)

_Figure: Search field (input-search-medium, enabled) with the label "Label" and the text "Input"; the submit button (magnifying glass icon) at the right end shows a grey hover background with a hand cursor on it, illustrating that clicking it triggers the search._

### Keyboard navigation

The keyboard navigation jumps from the input **(1)** directly to the submit function **(3)** and skips the clear function **(2)**.

![Keyboard navigation](input/keyboard-navigation-7341-1780.png)

_Figure: Two search fields with the label "Label" and the text "Input", each with a clear button (cross) and a submit button (magnifying glass). In the top one the input (1) has the focus ring; in the bottom one the focus ring sits on the submit button (3), skipping the clear function (2), which has no focus ring._

## Examples / Variations

### Trimmer, cutter and saw advisor in the STIHL web shop

At the beginning of the advisor, the user is asked to search for their machine number.

![Trimmer, cutter and saw advisor in the STIHL web shop](input/trimmer-cutter-and-saw-advisor-in-the-stihl-web-shop-4624-16214.png)

_Figure: Search field (input-search-medium, enabled) from the STIHL web shop advisor with the label "Machine number" followed by an info button, the placeholder "Search" and a magnifying glass submit button on the right, inside a white container._

## Input Search

Overview:

- Use for querying data or filtering content in search interfaces.
- A search field does not need any indicator.

![Input Search](input/input-search-2496-6234.png)

_Figure: Overview of the search input in sizes "Size Medium" and "Size Small", with states Default, Hover, Focus and Disabled and an "is invalid" column. Each field has a "Label", a hint text, the text "Input", a clear (cross) and a submit (magnifying glass) icon; invalid fields have a red border and the "System feedback message" with an error icon, hover has a grey fill, focus a thick dark border, and disabled greyed-out text and icons._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input-search--documentation)

### Related elements

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Section Headline

1. **Label** Describes the required input
1. **Hint (optional)** Provides guidance or further context or clarity for making a selection.
1. **Text field** The area where you can fill in the search query
1. **Clear function (cross icon)** Clears the text in the search field
1. **Submit function (magnifiying glass icon)** Submits the search
1. **Info Button (optional)** Can be used to trigger a popover with additional information
1. **Placeholder text (optional)** Initial text to give further instruction/hint

![Section Headline](input/section-headline-2607-3772.png)

_Figure: Anatomy of the search input with seven numbered callouts: the top field shows (1) Label, (2) Hint (optional), (3) Text field, (4) Clear function (cross icon) and (5) Submit function (magnifying glass icon); the bottom field with the placeholder "Placeholder" shows (6) Info Button (optional) next to the label and (7) Placeholder text (optional)._

## Input Number

Overview:

- Use for numeric input, ideal for smaller numbers, like quantities, measurements, or numerical data entry.

![Input Number](input/input-number-2496-6407.png)

_Figure: Overview of the number input in sizes "Size medium" and "Size small", with states Default, Hover, Focus, Disabled and Read-only and an "is invalid" column. Each has a "Label", a hint text, the value "123" and dark minus and plus buttons beside the field; invalid fields have a red border and the "System feedback message" with an error icon, hover has a grey field fill, focus a thick dark border, disabled has greyed-out text and light grey buttons, and read-only has a light grey field fill with light grey buttons._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input-stepper--documentation)

### Related elements

[Checkbox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Label** Describes the required input
1. **Info Button (optional)** Can be used to trigger a popover with additional information
1. **Hint (optional)** Provides guidance or further context or clarity for making a selection.
1. **Text field** The area where you can fill in the information
1. **Placeholder text (optional)** Initial text to give further instruction/hint
1. **Button** Add or subtract amount of increments

![Anatomy](input/anatomy-2502-3815.png)

_Figure: Anatomy of the number input with six numbered callouts: (1) Label, (2) Info Button (optional) beside the label, (3) Hint (optional) below it, (4) Text field showing "123", (5) the value text inside the field, and (6) Button, the dark minus and plus buttons to the right of the field._

#### Prefix / Suffix

1. **Prefix** An element in front of the input text that defines a a unit or other input that is given in the input, eg “www.”, “€” or “http”
1. **Suffix:** An element in after of the input text that defines a a unit or other input that is given in the input, eg. “.com”, “kg” or “cm”

![Prefix / Suffix](input/prefix-suffix-7477-7127.png)

_Figure: Do example: two medium Input Number fields in the enabled state, each with a "Label" above, an input and dark minus and plus buttons to the right. Callout 1 points at the "Prefix" cell at the start of the first input, callout 2 points at the "Suffix" cell at the end of the second input; each field uses only one of the two._

**Don’t**

It is not recommended to combine a prefix and suffix.

![Prefix / Suffix](input/prefix-suffix-7477-6846.png)

_Figure: Don't example: a single medium Input Number with a "Label" that has both a "Prefix" cell and a "Suffix" cell around the input, followed by minus and plus buttons. Combining a prefix and a suffix in one field is not recommended._

## Content and Assets

### Use cases for the prefix and suffix

- **most common use cases** include units of measurements (e.g. “kg.”) and symbols (e.g. “$”)
- the users input must **include digits only** if the unit type is in the prefix/suffix
- only use common abbreviations (e.g. “hr.”)
- [use input field for numbers with large variability](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=4617-14548), use Input Number for values that deviate little from the default

![Use cases for the prefix and suffix](input/use-cases-for-the-prefix-and-suffix-7342-2433.png)

_Figure: Three medium Input Number fields in the enabled state, each with minus and plus buttons: "Price" with prefix "€" and value "120", "Amount" with value "55,8" and suffix "kg", and "Maximum Length" with value "150" and suffix "inch". They illustrate a currency symbol as prefix and units of measurement as suffix._

## Behavior

### Lowest and highest value

Disable the button, if the lowest or highest value is set, to communicate to the user that the maximum has been reached.

![Lowest and highest value](input/lowest-and-highest-value-7342-2188.png)

_Figure: A small Input Number labelled "Hours" under the question "How many hours do you use the machine every day?", holding the value "0,5". The minus button is disabled (light grey) because the lowest value is reached, while the plus button stays enabled (dark)._

### Keyboard navigation focus order

The keyboard navigations follows the order of the elements semantically.

**Note:** both buttons are on the same side. In order to jump between the both buttons and to decrease/increase the value easily.

![Keyboard navigation focus order](input/keyboard-navigation-focus-order-7342-2206.png)

_Figure: Three medium Input Number fields, each with a "Label" and minus and plus buttons, showing the keyboard focus order. Callout 1 marks focus on the input field, callout 2 marks focus on the minus button, and callout 3 marks focus on the plus button._

## Examples / Variations

### iMOW advisor in the web shop

The advisor uses the small Input Number, to reduce height in the layout of the product listing.

![iMOW advisor in the web shop](input/imow-advisor-in-the-web-shop-4672-7111.png)

_Figure: Mobile web shop page "iMOW BERATER" in the section "INSTALLATIONSMATERIAL", listing the product "Installations-Kit S" at 104,00 € with a checkbox and an image. A small Input Number labelled "Menge" with value 1 and minus and plus buttons keeps the product listing compact; a "ZURÜCK" link and an "ABLAUF ÖFFNEN" button sit at the bottom._

## Input Slider (horizontal single-point)

Overview:

- A horizontal track with predefined values (tick marks/increments) users can easily snap, or a minimal, continuous design trail.
- Enables users to select a value or range by dragging a handle.
- Enable both click and drag movements for a smooth and intuitive user experience.
- Enable keyboard navigation to allow users to use the arrow keys to changes the value.
- Offers intuitive and exploratory control for numeric adjustments.
- Use labels to indicate a minimum and maximum value on the slider’s range.
- Indicate the current value. The value is updated as the user slides over the track.
- Sliders offer less precision than direct numeric [input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=1744-7211&t=pmGr8sT6vxYtgt0A-1), but encourage exploration and quick adjustments.
- Evaluate whether sliders are the best input method for your use cases:
   - Use a [radio group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=860-2729&t=pmGr8sT6vxYtgt0A-1) instead of a slider for fewer options.
   - Do not use slider as a progress bar, [stepper](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=26075-10498&t=pmGr8sT6vxYtgt0A-1) (coming soon)

![Input Slider (horizontal single-point)](input/input-slider-horizontal-single-point-29536-27475.png)

_Figure: Overview of the horizontal single-point Input Slider in three types as columns, "default (with input)", "minimal" and "steps", and four states as rows, "enabled", "hover", "focus" and "disabled". Each has a "Label", hint text, a track from 0 to 100 with an orange filled part and a round thumb at 50. The default type adds an input field with value 50 and suffix "xyz", minimal and steps show a "50" tooltip on hover and focus, steps has tick marks on the track, and the disabled state is greyed out._

![Input Slider (horizontal single-point)](input/input-slider-horizontal-single-point-29536-27484.png)

_Figure: Building blocks of the Input Slider: "thumb" in enabled, hover, focus and disabled states; "tooltip" in dark and disabled light variants showing "000"; "track" with increments at 0%, 50% and 100% (tooltip showing 0, 50 and 100 above the thumb, orange fill growing with the value); and "input frame" variants in medium and small size, with and without the "xyz" suffix, for 3-digit ("000") and 4-digit ("0000") values._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-slider--documentation)

### Related elements

[Input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=1591-2)

[Stepper](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26075-10497)

[Tooltip](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26075-11658)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Label** Text that outlines the necessary input requirements.
1. **Hint (optional)** A brief copy that provides guidance and context. This copy is optional and used only when necessary.
1. **Slider´s scale (track colour)** Visual, horizontal bar reflecting the range of options.
1. **Slider (tint colour)** Shows the selected value or range as visual feedback. The track's segment between the minimum value and the thumb is filled with colour.
1. **Thumb (handle)** The round element is used to drag/move the slider left and right across the slider's scale. Should be accessible via keyboard and touch input.
1. **Tooltip** Labelling the current value.
1. **Range Indicator (sliders directions)** Displays the minimum and maximum value of the input.
1. **Ticks (segments)** Breaking down the entire range into a set of equidistant segments. Predefined values users can easily snap/jump to.
1. **Number input** Displays current value (synchronized with the thumb position) and can be used to enter a value manually.
1. **Info Button (optional)** Can be used to trigger a popover with additional information

![Anatomy](input/anatomy-29536-27528.png)

_Figure: Anatomy of the Input Slider shown with three variants with numbered callouts. In the default variant: 1 "Label", 2 hint text, 3 grey slider scale (track), 4 orange tint showing the selected value, 5 round thumb (handle) and 9 the input field with value 50 and suffix "xyz". In the minimal variant: 6 the value tooltip "50" above the thumb and 7 the maximum value label "100". In the steps variant: 8 the step tick marks on the track and 10 the info button next to the "Label"._

### 3 slider types

1. **Type “Default”** A slider variant that includes both, the slider and an input field (synchronised).
1. **Type “Minimal”** A slider variant without an input field. The current value is displayed when users hover over the slider, drags the thumb (with mouse or on touch screens) or focuses the component.
1. **Type “Steps”** Slider variants that come with predefined steps.

For detailed instructions on how to use these variants, visit the following page.

![3 slider types](input/3-slider-types-29536-27548.png)

_Figure: The three Input Slider types stacked, each with a "Label", hint text and a track from 0 to 100 with the thumb at 50. Callout 1 marks type "Default" with a synchronised input field (50, "xyz"), callout 2 marks type "Minimal" without input field and with a "50" tooltip above the thumb, and callout 3 marks type "Steps" with predefined step marks along the track._

### Component Handling

#### Nested components

In Figma, the input component is nested within the default slider variant. Because of this, all input component parameters remain accessible when manually selecting the input.

However, only use the limited input options available in the **input-frame building block (1), NOT those options from the nested input component (2)**. The scope of input parameters has been intentionally reduced within the slider to maintain consistency and prevent unintended modifications.

![Nested components](input/nested-components-29536-27561.png)

_Figure: Figma properties panels of the input slider. Callout 1 points at the input-slider panel (type default, state enabled, hint on) and its input-frame section with size medium, width min and suffix on, which are the options to use. Callout 2 points at the nested input-medium panel (state enabled, invalid, leading icon, prefix, suffix on, function, input on, placeholder), whose options should NOT be used._

### Sizing

#### Maximum width

The width of an input slider is determined by the container it is placed in. This should ideally be the “[content area narrow](https://www.figma.com/design/HHM9B6UjMStGLxMf6loNLn/DS-945-Grid-Optimisations-%7C-Design?node-id=1-857&t=FFOFP94g90gl91Ko-4)” defined within the grid layout.

While the input can adjust to fit its container, we recommend not exceeding a maximum width of 544px, matching the [maximum text width](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132), for better scanability and readability. This max width calculated by multiplying the font size with 34. For our default copy styling Text M (16px) that defines a max. width of 544px (16px\*34= 544px).

In the Figma component, the maximum width is set to the recommended 544px. ([Link to calculation](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?m=auto&node-id=1-857&t=p2GU3oXS9Ao4MbV0-1))

If multiple sliders are used within the same form or fieldset, they should all maintain the same size for consistency.

![Maximum width](input/maximum-width-30568-8744.png)

_Figure: Two input sliders (label, range 0 to 100, orange filled track, thumb at 50) inside light blue "Content area Narrow" containers. In the upper one the slider fills the container width (Container Width). In the lower, wider container the slider stops at a recommended max. width of 544px, narrower than the Container Width._

#### Minimum width

The minimum width of 256px, applicable to both smaller and larger viewports.

![Minimum width](input/minimum-width-29536-27572.png)

_Figure: Minimal input slider with label, range values 0 and 100 and thumb at the middle, with a dimension line below the track marking a minimum width of 256px._

#### Input Sizes

The input field within the slider component offers two size options: medium and small, which are inherited from the [input component.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=1744-7384&t=lggFrDltF9gmXjof-1) This ensures consistency across the design system and allows for flexible usage depending on the context.

![Input Sizes](input/input-sizes-29536-27591.png)

_Figure: Two input sliders with label "Lorem Ipsum", value 50 and range 0 to 100, side by side. The left one, "Input medium", has a larger input field; the right one, "Input small", has a smaller input field._

#### Input Width

Additionally, the input field has predefined minimum and maximum widths to ensure usability within the component. These constraints depend on the number of digits displayed:

- 1–3 digits → Minimum version
- 3+ digits → Maximum version Both variations are available with or without a suffix and in both input sizes.

The defined width constraints also account for the label and hint text, which are positioned next to the input field. This ensures that:

- Labels and hint text remain readable.
- Text does not break into too many lines.
- The overall layout maintains clarity and usability.

Further examples in the Content Section

![Input Width](input/input-width-29536-27600.png)

_Figure: Grid of four input sliders with label "Thickness in mm", hint text, value 50 and range 0 to 100. The top row shows "Minimum Width" and the bottom row "Maximum Width" of the input field; the left column has "Suffix: false" and the right column "Suffix: true" (unit "mm" inside the input). The maximum width fields are wider, and the hint text wraps to fewer lines next to them._

### Alignment

#### Alignment of different elements

1. **Range values** The range values are centred on the first and last tick on the track, which also positions them at the start and end points of the thumb.
1. **Tooltip** The tooltip is always centred on the thumb and remains centred as the thumb moves.
1. **Thumb** The start and end positions of the thumb align with the ends of the track, the label, and the input.

![Alignment of different elements](input/alignment-of-different-elements-29536-27619.png)

_Figure: Input sliders with vertical guide lines showing alignment. Callout 1 points at the range value "0", centred on the first tick at the start of the track. Callout 2 points at the tooltip (50), centred on the thumb. Callout 3 points at the thumb at the track start, aligned with the track end, the label and the input field (value 50, suffix mm) on the same edge._

#### Edge-Case alignment large range values

Although large range values should be avoided (see content guidelines), values exceeding three digits (e.g., 10,000) align to the right or left of the slider. This prevents numbers from extending beyond the grid, ensuring readability, especially on mobile devices.

![Edge-Case alignment large range values](input/edge-case-alignment-large-range-values-29536-27636.png)

_Figure: Slider with label "Length in m" and thumb at the start, with large range values "20000" and "100000". The values are aligned to the left and right edges of the track, marked by vertical guide lines, so they do not extend beyond the slider._

### Animation

#### Thumb hover

**Animation type:** fade: color **Duration:** 100ms **Easing:** motion-functional-ease-in-and-out

![Thumb hover](input/thumb-hover-29536-27671.png)

_Figure: Slider with label "Length in m", range 0 to 100 and thumb at 50 in hover state: a pointer cursor sits on the thumb, the thumb is shaded and a dark tooltip with 50 appears above it._

#### Tooltip

The tooltip animation is triggered by hovering or focusing.

**Animation type:** fade: opacity 0\>100% **Duration:** 100ms **Easing:** motion-functional-ease-in-and-out

![Tooltip](input/tooltip-29536-27679.png)

_Figure: Two transitions of a slider (label "Length in m", range 0 to 100, thumb at 50). Top: without tooltip to hovered thumb with tooltip 50, labelled "Appear fade: 0 \> 100% Opacity". Bottom: hovered thumb with tooltip to enabled state without tooltip, labelled "Disapear fade: 0 \> 100% Opacity"._

## Types

Further recommendations on their usage can be found in the content section.

### Type “Default”

#### Wide ranges

The default slider with the input is designed with a fluid behaviour, offering users the flexibility to continuously select any value within the given range, without being constrained by fixed steps or values.

If the value range is large, as a slider alone may lack precision.

#### Choose this option when precision is important.

The default slider, complemented by a text input field, not only displays the current value but also empowers users to make precise adjustments by manually entering a value.

This is particularly useful when exact values need to be selected or when small increments are important.

#### Accessibility

The input in the slider component, a reduced version of the input, inherits sizes, states, and suffix properties. It's worth noting that all slider variants meet WCAG accessibility AA standards by 01.01.2025, but this version is particularly beneficial for users with accessibility needs, providing an alternative method for inputting the value.

A text field helps users who struggle with fine motor control.

![Accessibility](input/accessibility-29536-27708.png)

_Figure: Three input sliders labelled "Thickness", each with an input field and suffix "mm" above the track and range 0 to 100. The values are 0 (thumb at start, no fill), 50 (thumb in the middle, half filled orange) and 100 (thumb at end, fully filled), showing the input as an alternative way to enter the value._

#### The slider as a mandatory form field

Using slider inputs for form fields can pose accessibility challenges, so their implementation should be carefully considered. Presenting other common options first and using a standard input field instead is advisable. Sliders are best suited for exploratory adjustments rather than precise value selection.

![The slider as a mandatory form field](input/the-slider-as-a-mandatory-form-field-29536-27716.png)

_Figure: Minimal slider in the enabled state with the label "Length in m\*" (asterisk marks it as mandatory), range end labels "0" and "100", an orange filled track up to a white round thumb at the middle, and a blue "Accessibility" badge with an info icon at the lower left that flags the accessibility concern of sliders as mandatory fields._

### Type “Minimal”

The minimal version of the slider operates with the same fluid behaviour as the default version, but it does not include an input field for manually entering a value.

In the default behaviour of the minimal slider variant, the current value is displayed when users hover over or focus on the thumb. This design allows for a smooth and continuous transition along the track.

#### Choose this type for quick adjustments & exploration

The minimal slider is designed for quick and intuitive adjustments, making it ideal for tasks that don’t require precise values, such as volume or brightness control. By allowing smooth, continuous changes rather than fixed increments, it provides a more natural and user-friendly experience. This simplicity ensures that users can make effortless adjustments without distraction, focusing on the overall effect rather than specific values.

#### Use this slider preferably for small Ranges

The minimal slider is best suited for situations where the user needs to select a value from a small range, typically less than 100. For larger ranges, the precision of the default slider might be more beneficial.

![Use this slider preferably for small Ranges](input/use-this-slider-preferably-for-small-ranges-29536-27735.png)

_Figure: Two minimal sliders labelled "Volume in %" with range "0" to "100": the upper one is enabled with the thumb at the middle, the lower one is in the hover state with a pointer cursor on the thumb and a dark tooltip above it showing the current value "50"._

#### Don’t use

- If exact values matter (e.g., price range, scientific input).
- If users struggle to land on an exact number
- If the range is too large
- if Accessibility is a key consideration, especially for users with motor impairments or those requiring assistive technologies
- if mobile-first focus is essential for the application, as precise touch control may be limited with the minimal slider design.

![Don’t use](input/don-t-use-29536-27743.png)

_Figure: Don't example: a slider labelled "Area in square meters (m2)" with a very precise range from "10000" to "45000" and a value tooltip "1752" above the thumb, which is unsuitable because users cannot easily land on an exact number in such a range; a red "Don't" badge marks it._

### Type “Steps”

#### Choose this type for greater controll over the results.

Discrete sliders, with their predefined values, give users a sense of control. They can easily snap to the tick marks, enhancing their navigation within the slider. Even if users don't tap on these ticks, the visual cues serve as a guide, helping them feel more in control of their selection.

The spacing between tick marks is designed to be user-friendly, eliminating the need for excessive precision. This design choice instils confidence in the user's ability to navigate the slider.

By default, the current value is only displayed when hovering over the thumb, dragging the thumb (e.g. touch-screens) or focusing on the slider.

![Choose this type for greater controll over the results.](input/choose-this-type-for-greater-controll-over-the-results-29536-27781.png)

_Figure: Two discrete sliders with white tick dots on the track and a value tooltip "50" above a hovered thumb with pointer cursor: "Length in m" from "0" to "100" with five ticks, and "Cutting line strength in mm" from "1,4" to "3,3" with six ticks, showing predefined steps the thumb can snap to._

#### Don’t use

- If users need precise numerical input
- If the range is vast
- If there are more than five steps
- If smooth, continuous control is needed

Then, the considerations above will limit the number of critical tick marks (essential points on the slider) in your slider scale. You'd be able to accommodate at most five items comfortably.

![Don’t use](input/don-t-use-29536-27790.png)

_Figure: Don't example: a slider labelled "Distance in km" with a vast range from "0" to "5000000", a value tooltip "250000" above the thumb, and many more than five tick marks along the track, which is too dense and imprecise for a discrete slider; a red "Don't" badge marks it._

#### Number of ticks & steps

The number of steps should be a **minimum of 3** and a **maximum of 11**. The exact maximum step count is determined by the size of the device, allowing for flexibility in design. This is to ensure users can select the ticks easily on mobile devices.

While a desktop-only design with extensive mouse interaction may allow for more steps, it's essential to always consider the potential usability and accessibility constraints.

For more steps, choose alternatives: [Select](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=8139-4888) if many fixed choices are needed, [Number inputs ](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=1591-2) for exact precision, and [Checkboxes](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=1017-2316) or [Radio Buttons /Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=860-2728) for use-cases where high accessibility is required but only limited options are selectable.

![Number of ticks & steps](input/number-of-ticks-steps-29536-27832.png)

_Figure: Two discrete steps sliders labelled "Amount of items", one from "1" to "5" with four tick dots and a value tooltip "50", the other from "2" to "18" with nine tick dots and a value tooltip "10", illustrating the number of ticks and steps._

## Content and Assets

### General

#### Use a predictable label

A slider only labelled with the "min" and "max" values can lead to confusion, so use transparent and predictable labels.

Keep labels and hints concise and straightforward. The first time you mention a measurement, write it in full before using the abbreviation or use the hint text.

Continuously test the clarity of the copy in the form.

![Use a predictable label](input/use-a-predictable-label-29536-27941.png)

_Figure: Minimal slider in the enabled state with the clear, predictable label "Length in meters (m)", range end labels "0" and "100", and the thumb at the middle of the orange filled track, showing the unit written out in full before its abbreviation._

#### Hint length

A hint is optional. Use it if clarity is needed.

Copy in the hint should be one line and 2/3 lines maximum.

![Hint length](input/hint-length-29536-27949.png)

_Figure: Two sliders with hint text: a minimal slider labelled "Length in m" with a two-line hint of placeholder text and range "0" to "100", and a default slider labelled "Length in milimeters (mm)" with a three-line hint beside a number input showing "50" with suffix "mm" above the track, illustrating that hints stay at one to three lines._

#### Handling Space Constraints

Since the input field is placed next to the label and hint text, its maximum width is affected by the input size. This is especially important for smaller screen sizes, where space limitations can become problematic.

When space is tight, consider the following options:

1. **Remove the hint text** if it is not essential and **shorten the label** while maintaining clarity.
1. **Use the small input size** to save space.
1. **If precise input is not required, opt for the minimal slider version.**
1. **Evaluate whether a slider is the best input method** for the intended use case.

These adjustments help maintain usability and ensure a clean, readable layout.

![Handling Space Constraints](input/handling-space-constraints-29536-27959.png)

_Figure: Don't example: a default slider with the label "Label Lorem ipsum dolor sit" and a long hint squeezed into a narrow column of seven short lines beside a number input "50" with suffix "mm", above a track from "0" to "100"; the input leaves too little width for the hint, which is marked by a red "Don't" badge._

![Handling Space Constraints](input/handling-space-constraints-29536-27964.png)

_Figure: Do example showing four space-saving options for the label "Lorem augue": callout 1 points at a default slider with a number input "50" and suffix "cm" on the label row and no hint, callout 2 at a slider with a short hint "Vivamus id erat eget leo eget." and a compact input "0000" with suffix "cm", callout 3 at a minimal slider with the hint and range "0" to "100" but no input, and callout 4 at a plain text input with the hint and suffix "cm" instead of a slider; a green "Do" badge marks it._

#### Communicate the measurements within the label.

If using the minimal or step version of the component, it is essential to include the unit of measurement in the label to indicate clearly what the slider´s scale value represents.

![Communicate the measurements within the label.](input/communicate-the-measurements-within-the-label-29536-27982.png)

_Figure: Do example: two sliders without a numeric input, a minimal slider labelled "Length in m" and a steps slider labelled "Thickness in mm", both ranging from 0 to 100 with the thumb at the middle. The unit of measurement is part of each label, so it is clear what the scale values represent._

#### Range values

The slider variant and use case may vary. Find the most frequent range and ensure your maximum and minimum value has no more than six characters.

![Range values](input/range-values-29536-27993.png)

_Figure: Don't example: a minimal slider labelled "Area in square meters (m2)" with a scale from 10000 to 500000. The minimum and maximum values have more than six characters, which is too long for the slider scale._

![Range values](input/range-values-29536-27998.png)

_Figure: Do example: a minimal slider labelled "Area in hectare (ha)" with a short scale from 1 to 50. A more suitable unit keeps the minimum and maximum values to no more than six characters._

#### Don't use the slider as a stepper or progress bar.

The slider is an interactive element and should not be used to show progress. Use a progress bar or [stepper](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26075-10497) instead.

![Don't use the slider as a stepper or progress bar.](input/don-t-use-the-slider-as-a-stepper-or-progress-bar-29536-28007.png)

_Figure: Don't example: two minimal sliders used to show status, one labelled "Progress" with the scale "Start" to "Finish" and one labelled "Battery Status" with the scale 0% to 100%, both with the thumb at the middle. The slider is an interactive input and must not be used as a progress bar or stepper._

#### Don't use on orange background.

As the slider is a input element it should , like other inputs, only on white or grey background.

![Don't use on orange background.](input/don-t-use-on-orange-background-29536-28017.png)

_Figure: Don't example: a minimal slider labelled "Progress" with the scale "Start" to "Finish", placed on an orange background panel. The slider is an input element and should only be used on white or grey backgrounds._

## Behavior

### Enable click, drag, jump and arrow movements.

Users can adjust the value of the slider by moving the thumb. **(1)** Alternatively, they can click on the track, causing the thumb to jump to the clicked position and its corresponding value. **(2)** In the steps variant of the slider, when users drag the thumb, it will snap to the nearest defined step.

Once the user tabs through the page and hits the handle, they should be able to edit the numeric value and use left and right arrows to increment or decrement the value. The slider should provide auditory feedback to screen reader users.

![Enable click, drag, jump and arrow movements.](input/enable-click-drag-jump-and-arrow-movements-29536-27869.png)

_Figure: Three minimal sliders labelled "Length in m" with a scale from 0 to 100. Callout 1 marks the thumb being dragged with a pointer in the hover state while the tooltip shows 50. Callout 2 marks a click on the track near 100, after which the thumb jumps to that position and the tooltip shows 100 (arrow between before and after). The bottom slider in the focus state with a hint text shows the left and right arrow keys decrementing or incrementing the value 50._

### Focus

In the default slider, the first element focuses on the input **(1)**, while the second is the thumb **(2)**.

In the minimal and stepper version, the focus goes directly to the thumb.

Users can adjust the value when the thumb is focused by using the arrow keys to increment or decrement the value.

![Focus](input/focus-29536-27891.png)

_Figure: Focus order of the sliders. In the default slider with label, hint text and scale 0 to 100, callout 1 marks the numeric input field (value 50, unit "xyz") that is focused first and callout 2 marks the thumb that is focused second. The minimal slider labelled "Length in m" below has no input, so focus goes directly to the thumb, which shows a tooltip with 50, and the left and right arrow keys change the value._

### Tooltip for the current value

The tooltip is only visible when hovering, focusing or dragging (on touch-screens) on the minimal and stepper slider versions.

You can overwrite this default property to display the tooltip permanently. We recommend doing so because when users perform a task, it implies less cognitive load than hovering to see the current value.

The boundaries by themselves are not sufficiently meaningful.

![Tooltip for the current value](input/tooltip-for-the-current-value-29536-27906.png)

_Figure: Minimal slider labelled "Length in m" with a scale from 0 to 100 in the hover state, with a pointer cursor on the thumb. A dark tooltip above the thumb shows the current value 50._

### Default values

Set the default value in the middle to avoid empty results when using the slider as a filter element and ensure a negative value is possible.

![Default values](input/default-values-29536-27913.png)

_Figure: Two default sliders, each with a numeric input field and unit, with the thumb in the middle of the track. "Thickness in mm" has the value 50 mm on a scale from 0 to 100, and "Choose a emperature" has the value 20 °C on a scale from -10 to 30, so the default is centred and negative values are possible._

### Automatic correction to minimum and maximum

When a user manually inputs an invalid value, the system automatically adjusts it to prevent errors.

- If the entered value exceeds the maximum limit, the system will change it to the maximum allowed value.
- On the other hand, if the value falls below the minimum limit, it will be set to the minimum allowed value.

![Automatic correction to minimum and maximum](input/automatic-correction-to-minimum-and-maximum-29536-27920.png)

_Figure: Two before and after examples (arrows) of automatic correction for the default slider labelled "Area in m2". Top: with a scale of 20 to 200, a typed value of 15 is below the minimum and is corrected to 20. Bottom: with a scale of 20 to 1000, a typed value of 5600 exceeds the maximum and is corrected to 1000, with the thumb at the right end._

## Examples / Variations

### Filter

If a slider is intended to function as a filter, it can be placed in drawers or toolbars.

Sliders can also be positioned alongside other filtering options, as they typically do not require much space.

![Filter](input/filter-29536-28033.png)

_Figure: A drawer titled "Filter" with a close button, in which the expanded "Length" section holds a slider with its value 50 in an input field with the suffix "cm" labelled "Length in centimetres (cm)", and a range from 0 to 100 with the thumb at the middle. Below are collapsed sections "Drive link gauge", "Saw chain pitch", "Guide Bars" and "Saw Chains", and a dark "Show results (34)" button at the bottom._

### Provide text fields for price filter values

Do not use a slider to define price ranges in filters. In these cases, a set of checkboxes (for filtering) or mutually exclusive radio buttons (for selecting one size, as on a product page) might work better.

Offer both predefined ranges and text fields for numeric filters. This supports users' exact filtering needs while helping them understand the range of prices available. ([Baymard](https://baymard.com/premium/guideline-collections/p8s4px/416))

![Provide text fields for price filter values](input/provide-text-fields-for-price-filter-values-29536-28109.png)

_Figure: Don't example: a price filter that uses only a slider labelled "Preis (€)" with an input field showing 1250 and the suffix "€", a range from 0 to 2500 and the thumb at the middle. A slider alone is wrong for price ranges because users cannot set exact values or see which price ranges are available._

![Provide text fields for price filter values](input/provide-text-fields-for-price-filter-values-29536-28115.png)

_Figure: Do example: a price filter titled "Preis" with two text fields "Minimum" (0, suffix "€") and "Maximum" (2.379, suffix "€") separated by "bis" and followed by a confirm button, plus checkboxes for the predefined ranges "0 - 499 € (25)", "500 - 999 € (29)" and "ab 1.000 € (29)". Offering both predefined ranges and text fields supports exact filtering and shows the available price range._

### Show current value in forms

Sliders are an unusual and potentially confusing choice in form fields; **see accessibility constraints.**

**When using sliders, it's crucial always to display the current value to the user.** A visible current value ensures that the user, who may not immediately see the results of their slider behaviour, can be confident that they have entered the correct value when submitting the form.

In this design case example, you can switch on the tooltip visibility permanently.

![Show current value in forms](input/show-current-value-in-forms-29536-28124.png)

_Figure: A form card titled "Mowing Settings" in which the slider "Cutting height in mm" (range 20 to 60, step markers) permanently shows a tooltip with its current value 50 above the thumb. The form also contains the selects "Wire over drive" ("Not close to the wire") and "rain sensor sensitivity" with hint "Allowed mowing weather" ("Any Weather"), a divider, the text field "Mowing duration" (00:15) and the switch "Ignore rain sensors" turned on._

### Precise input and efficiency

Currently, multiple slider designs are still in use (e.g., iMow App **(1)**). When adopting the new slider component, there are different approaches to implementing the design.

Introducing a minimal slider variant **(2)** can significantly enhance usability if a more exploratory approach is needed. If precise input—such as the exact placement of commas—is essential, use the default slider with input fields **(3)**. This approach allows users to enter data more efficiently, making it faster than estimating positions with a thumb.

If you're unsure which solution best fits your use case, we recommend conducting a usability test to evaluate thumb interaction with both slider options and their alternatives.

![Precise input and efficiency](input/precise-input-and-efficiency-29536-28142.png)

_Figure: Three slider designs compared: (1) the existing iMow app "MOWING SETTINGS" screen with a stepped "Cutting height" slider showing 37.5mm, (2) the minimal slider "Cutting Height (in mm)" from 20 to 60 with a tooltip showing 50 above the thumb, and (3) the default slider with the same label and range plus an input field with the suffix "mm" showing 37,5 for precise entry._

## Input File

**Purpose:**

The input file component allows users to select and upload files, such as images, documents, or videos. It ensures a clear, accessible, and user-friendly way to manage file uploads.

**Overview:**

- **Flexible Upload Methods:** uploading a single file (e.g., a picture or document), multiple files sequentially, or multiple files at once — either by selecting them together or using drag-and-drop, offering flexibility for different user preferences and devices.
- **Real-Time Feedback:** Files added to an upload queue, are displayed in a list with real-time status indicators: uploading, success, or error.
- **Error Handling:** Clear and actionable system feedback is shown per file in case of an upload error – including guidance on how to resolve the issue.
- **File Management:** Users can remove files from the upload queue or retry if an upload fails.
- Fully **keyboard-navigable** with structured focus order.
- **Handling Long File Names:** Long file names wrap across multiple lines for full readability.
- **Format icons** and optional **file previews** are included to support faster recognition.
- **Component variants** are available for: Simple form uploads, Complex multi-file upload, uploading profile pictures or attachments to a gallery.

![Input File](input/input-file-32314-6496.png)

_Figure: Main component overview of Input File: an upload field with a dashed dropzone ("Label", "Drag and drop files here or", "Browse files", "Max file size: 7 MB. Supported file types: .jpg and .png") above a list of five files "Filename.png" (1.5 MB) with remove buttons. Beside it, the Figma-only variant "Input File - Gallery" shows "Upload" tiles in sizes medium and small for the states enabled, hover/drag-over, focus, disabled and invalid, with a warning note that this variant is currently out of scope but planned for a future release._

![Input File](input/input-file-32314-6508.png)

_Figure: Building blocks of Input File. The upload field appears as a plain "Upload files" button (dropzone: false) or as a dashed dropzone with "Drag and drop files here or" and "Browse files" (dropzone: true, with hint-in-dropzone true or false), each in the states enabled, hover, drag-over, focus, disabled and invalid (invalid shows a "System feedback message"). Further blocks are Preview (icon, image), Progress Indicator (type bar and text; determinate, error and indeterminate with "Upload status 50%" and "Uploading..."), Upload Item (states uploading, error, success and indeterminate, with layout variants preview list and upload queue) and File List (preview list and upload queue)._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-inputs-input-file--documentation)

### Related elements

[Input](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=1591-2)

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=165-151&t=KY1LumorDnAjQJYI-1)

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=7251-17511&t=KY1LumorDnAjQJYI-1)

[Tooltip](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26075-11658)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?m=auto&node-id=8-2322&t=6bajOIIvvUmhlM0J-1)

Progress Indicator (coming soon)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

**The file input consists of two main parts, each with its own structure and possible variants:**

1. **Upload field** (without and with a dropzone) This can be a standalone button or a drop area combined with a button. It is typically accompanied by labels and hint texts that guide users to select the correct file formats and sizes.
1. **File list** Displays a preview or list of the selected files. This includes file names, thumbnails or icons, file size, and actions like remove.

![Anatomy](input/anatomy-32314-6578.png)

_Figure: Anatomy of Input File with two parts: (1) the upload field, shown without dropzone ("Label", hint "Max file size: 7 MB. Supported file types: .jpg and .png", "Upload files" button) and with dropzone ("Label", "Drag and drop files here or", "Browse files", hint), and (2) the file list below each field with image thumbnails, "Filename.png", "1.5 MB" and a remove button per row._

### Upload Field Elements

The Upload Field is available in three layout variants to support different use cases and screen sizes:

#### Upload Field without dropzone

**Recommended for:**

- Single file uploads
- Mobile interfaces where space is limited

**Anatomy:**

1. **Label** Describes the expected input (e.g., "Upload document").
1. **Hint Text** A short, optional text providing additional guidance, such as allowed formats or file size limits.
1. **Button** Opens the native file selection dialog and typically initiates the file selection process. Alternatively, users can drag and drop files onto the button to open the file selection dialog.
1. **Info Button (optional)** Can be used to trigger a popover with additional information

#### Upload Field with dropzone (hint inside)

**Recommended for:**

- Uploading multiple files
- Desktop interfaces with larger screen space, where elements can be visually separated.
- When hint text should remain close to the action button.

**Anatomy:**

1. **Label**
1. **Hint Text** – Positioned inside the dropzone
1. **Button**
1. **Info Button (optional)**
1. **Drop Zone** A drag-and-drop area enables users to drag files directly into the component. Additionally also supports click-to-select behavior.
1. **Icon** An optional visual cue (e.g., upload icon) to reinforce the purpose of the component.
1. **Supporting text**

#### Upload Field with dropzone (hint above)

**Recommended when:**

- The hint text is long and might clutter the dropzone area
- You want to provide more detailed guidance before the user selects a file

**Anatomy:** Same elements as the “Upload Field with Dropzone (Hint Inside)” variant, **but with the hint text positioned above the dropzone.**

![Upload Field with dropzone (hint above)](input/upload-field-with-dropzone-hint-above-32314-6605.png)

_Figure: Anatomy of the upload field in three variants (without dropzone, with dropzone hint inside, with dropzone hint above) with callouts: 1 Label, 2 hint text about file size and types (inside the dropzone in one variant, above the dropzone in the last variant, where it reads "Upload up to 5 files in .jpg, .png, .pdf, or .docx format..."), 3 button ("Upload files" or "Browse files"), 4 info icon next to the label, 5 dashed dropzone area, 6 upload icon, 7 "Drag and drop files here or" text._

### File List Elements

#### Anatomy Preview List Item

As the name suggests, the **Preview List Item** displays a **preview of the files selected by the user** through the upload field. At this point, no upload has been triggered yet.

**It contains the following elements:**

1. **File Preview** Shows a thumbnail (for images) or a file type icon (for other file types). For sensitive data, a preview is recommended to provide users with visual confirmation of their selection, allowing them to correct mistakes before initiating the upload.
1. **File name**
1. **File size**
1. **System feedback**
1. **Remove button** Allows users to manually remove the file from the preview list.

![Anatomy Preview List Item](input/anatomy-preview-list-item-32314-6635.png)

_Figure: Anatomy of the Preview List Item shown twice: a normal row with a file icon, and an error row with an image thumbnail and the message "System Feedback Message" under a red divider. Callouts: 1 file preview (icon or thumbnail), 2 file name "Filename.png", 3 file size "1.5 MB", 4 system feedback message, 5 remove button._

#### Anatomy Upload Queue Item

The **Upload Queue Item** appears once the **file has been selected for upload**.

**It contains the following elements:**

1. **File Preview** Same as in the preview state
   1. **icon**
   1. or **thumbnail providing** visual feedback of the file type.
1. **File name**
1. **File size**
1. **Progress indicator** Visual feedback showing the upload status. Currently available in two versions:
   1. **Minimal text only version**
   1. **Loading Bar (+ percentage label)**

More on accessibility requirements for progress indicators can be found in the WCAG Compliance Section

1. **System feedback** Provides users with clear status feedback, informing them if an error occurred during the upload or confirming success.
1. **Retry button** If an upload fails, a Retry button is positioned next to the file name, allowing the user to attempt the upload again.
1. **Loading Spinner**
1. **Info text**
1. **Remove button** Allows users to manually remove the file from the upload queue.

![Anatomy Upload Queue Item](input/anatomy-upload-queue-item-32314-6654.png)

_Figure: Six Upload Queue Item states stacked vertically, each with Filename.png and a close (X) button: uploading with text-only status "Upload status 50%" and a document icon (1a, 2 file name, 3 file size 1.5 MB, 4a status text); uploading with an image thumbnail (1b) and a blue loading bar with "50%" (4b); error with a red loading bar at 50%, a red error icon with "System Feedback Message" (5) and a retry button (6) next to the close button; success with a green check icon and "System Feedback Message" (5); an indeterminate loading bar (4b) with "Uploading..." (8); and a spinner icon (7) with "Uploading..." (8), where 9 points at the close button._

### Sizing

#### Maximum width

The maximum width of the input file component should align with the recommended [maximum text width](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132) of 544px. This guideline is based on established readability principles: a width of 544px has proven to be optimal for scanning and effectively processing text and form elements.

**Why 544px?** This value is calculated by multiplying the base font size by 34 (16px × 34 = 544px). It represents the ideal line length.

Although the upload field adjusts to its container - e.g., within a layout like “[content area narrow](https://www.figma.com/design/HHM9B6UjMStGLxMf6loNLn/DS-945-Grid-Optimisations-%7C-Design?node-id=1-857&t=FFOFP94g90gl91Ko-4)”, it is recommended not to exceed this width.

![Maximum width](input/maximum-width-32314-6676.png)

_Figure: The Input File drop zone (label, upload icon, "Drag and drop files here or", a "Browse files" button, and the hint "Max file size: 7 MB. Supported file types: .jpg and .png") placed on the grid inside the "Content area Narrow" at viewport 1024px and viewport 1440px. At 1024px it fills the full container width; at 1440px the container is wider but the field stays at the recommended max. width 544px._

### Input File Gallery

The **Input File Gallery** component is a specialized extension of the upload field, tailored for uploading images in a gallery-style layout.

> **Component variant “ Input File - Gallery” only available in Figma:** This component variant is currently out of scope, but planned for a future release.

**Available Variants** The component is currently available in two sizes:

**Medium variant** includes:

1. **Clickable Drop Zone**
1. **Icon**
1. **Label**

**Small Variant (label omitted)** includes:

1. **Clickable Drop Zone**
1. **Icon**

Both variants support the following states: Enabled, Hover/Drag-over, Focus, Disabled, and Invalid. They are included within the component.

![Input File Gallery](input/input-file-gallery-32314-6739.png)

_Figure: Two enabled Input File Gallery variants with a dashed drop zone: medium contains an upload icon (2) and the label "Upload" (3), small contains only the upload icon (2). Callout 1 points at the clickable drop zone in both variants._

> **Please note:** This screen demonstrates the **positioning** of the Input Upload component variant used within a gallery template. **Hint text, error messages, upload logic, and status feedback** of this component variant are currently **out of scope**, but planned for a future release. These aspects must be handled by development teams based on project-specific requirements.

![Input File Gallery](input/input-file-gallery-32314-6756.png)

_Figure: Product detail page of a STIHL chainsaw (Breeze Ben, MS 261 C-M) with product data, an "Edit product data" and a "Delete product" button, and a thumbnail row below the large product photo. The medium Input File Gallery tile labelled "Upload" sits as the first item in the thumbnail row, followed by the uploaded chainsaw thumbnail._

## Content and Assets

### General

#### Label & Hint Text

The following guidelines apply to **all Input File variants**:

1. **Label** Clearly describe what the user is expected to upload (e.g., “Upload Image”)
1. **Hint Text**
- Keep it short and relevant
- Add helpful info like allowed file types or maximum file size
- Hint text should not exceed **three lines** based on a mobile screen width

![Label & Hint Text](input/label-hint-text-32314-8796.png)

_Figure: Input File with the label "Upload Document" (1) above the hint text "Max file size: 7 MB. Supported file types: .pdf, .doc and .docx" (2) and an outlined "Upload file" button with an upload icon below._

#### Required and Optional Indicators

To ensure clarity on field requirements:

- **Required Fields:** An asterisk \* **(1)** is shown next to the label to indicate that the field is mandatory. In code implementations, the asterisk is automatically displayed when the input is marked as required.
- **Optional fields:** These are labeled with the word “(optional)” after the field name **(2)**. In most cases, this needs to be manually added via the Content Management System.

![Required and Optional Indicators](input/required-and-optional-indicators-32314-8804.png)

_Figure: Two Input File examples with an "Upload file" button and the hint "Max file size: 7 MB. Supported file types: .pdf, .doc and .docx": the required field has the label "Upload Document \*" with an asterisk (1), and the optional field has the label "Upload Document (optional)" with the added word "(optional)" (2)._

### File instructions

#### Supported File Types

The upload component currently supports common file formats, such as:

1. **Image Formats (preview as image thumbnail or icon)** for example: .jpg, .jpeg, .gif, .tiff, .tif
1. **Video Formats (preview as icon)** for example: .mp4, .mov
1. **Portable Document Format (preview as icon)** for example: .pdf
1. **Documents (preview as icon)** for example: .doc, .docx
1. **Compressed Files (preview as icon)** for example: .zip, .rar
1. **General Files (preview as icon)** for example: .xls, .xlsx

Icons are provided through the [Iconography Library](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto&t=TMdqNNDP7ylygeyF-6)

![Supported File Types](input/supported-file-types-32314-8817.png)

_Figure: Row of file type previews, each numbered: an image thumbnail placeholder (1, purple tile), an image icon (1), a video camera icon (2), a PDF document icon (3), a DOC document icon (4), a ZIP document icon (5) and a generic file icon (6)._

#### File Size & Number of Uploads

**File Size Limits**

- The recommended maximum file size is **7 MB**
- This limit is **customizable** based on project or stakeholder requirements.
- **Recommendation:** Always display the maximum file size near the upload field (e.g., in hint text)

**Number limits**

- Although there is **no system limit on the number of files** that can be uploaded, it is **recommended to set a limit for users** to maintain performance.
- **This number is project-dependent** (e.g., “Max. 3 files”).

![File Size & Number of Uploads](input/file-size-number-of-uploads-32314-8851.png)

_Figure: Input File with the label "Label", the hint "Max file size: 7 MB. Supported file types: .jpg and .png" and an outlined "Upload files" button with an upload icon, showing the maximum file size placed in the hint text next to the upload field._

### Button

The **Input File component** is most commonly used within forms that include additional input fields or appear in multi-step processes. In these scenarios, the call-to-action to browse or select files is typically styled as a **secondary (outline) button** to preserve visual hierarchy and avoid drawing attention away from the primary form submission. However, if the upload action stands alone—meaning it is not part of a form and represents **the primary interaction on the page — a filled button** **(1)** should be used to clearly emphasize its importance.

**Choose button style based on context:**

- **Outline:** when part of a larger form
- **Filled:** when the upload is the main or only action on the page

![Button](input/button-32314-8860.png)

_Figure: Two Input File variants where the call-to-action is a filled dark button (1): a standalone field with label "Label", hint text and a filled "Upload file" button with upload icon, and a dashed drop zone with upload icon, "Drag and drop files here or", a filled "Browse files" button and the hint "Max file size: 7 MB. Supported file types: .jpg and .png"._

#### Info Button

A popover button can be placed next to input or select labels to provide **additional contextual information.**

Popover content should be **limited to supplementary, non-critical information** — for example, brief explanations, examples, or guidance that supports user understanding without being essential for task completion.

![Info Button](input/info-button-39634-11170.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); upload-field (ℹ️ info-button, dropzone=true, state=enabled, is invalid=false, hint-in-drop-zone=true); cursor (type=pointer). Text in the figure: "For best results, upload high-resolution images (at least 1200×800 px)", "Label", "Drag and drop files here or", "Browse files", "Max file size: 7 MB. Supported file types: .jpg and .png"._

**Don’t use the popover for critical or required information**, use the hint instead. Critical information should not be hidden.

For mor Guidance on this topic see the [Popover documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=35223-10505)

![Info Button](input/info-button-39634-11188.png)

_Figure: Don't example: an Input File with the label "Label" and a dark "Upload file" button, where the pointer hovers the info button next to the label and opens a white popover (arrow below, centered) reading "Max file size: 7 MB. Supported file types: .jpg and .png". This is wrong because such critical or required information is hidden in a popover instead of being shown as a hint._

## Behaviour

To illustrate the complex behavior of the upload process, **two different example flows** are provided on the “Examples and Variations” page.

### Upload field – States

#### Hover States

1. **Input File (without drop zone)** The hover effect is applied **only to the upload button**, as it is the sole interactive element in this variant.
1. **Input File (with drop zone)** While the entire drop zone is clickable, the hover effect appears **only when hovering over the button**.
1. **Input File Gallery** The **entire component receives a hover effect** to clearly indicate that the area is interactive.

> **Component variant “ Input File - Gallery” only available in Figma:** This component variant is currently out of scope, but planned for a future release.

![Hover States](input/hover-states-32314-6794.png)

_Figure: Hover states of three file upload variants. Callout 1 marks the "Upload files" button of "Input File (without drop zone)", the only element that gets the hover effect; callout 2 marks the "Browse files" button inside "Input File (with drop zone)", which is the only part that shows hover although the whole drop zone is clickable; callout 3 marks the square "Input File Gallery" with an "Upload" icon, which is filled grey on hover as a whole._

#### Drag-Over States

1. **Input File (without drop zone)** In addition to clicking, users can also drag files onto this component. In such cases, the **drag-over effect is applied to the upload button only.**
1. **Input File (with drop zone)** When files are dragged over the component, the **entire drop zone is highlighted** with a background color to indicate it as an active target.
1. **Input File Gallery** The **entire component is highlighted** with a background color when files are dragged over it, reinforcing the area as a valid drop target.

![Drag-Over States](input/drag-over-states-32314-6815.png)

_Figure: Drag-over states of three file upload variants with dragged files "Icons-Files.zip" and "Image-Files.zip" shown at the cursor. Callout 1 marks the "Upload files" button of "Input File (without drop zone)", the only part highlighted; callout 2 marks the whole drop zone of "Input File (with drop zone)", filled with a background color; callout 3 marks the whole "Input File Gallery" tile, also filled with a background color._

#### Focus States

1. **Input File (without drop zone)** Only the “Upload files” button is focusable via keyboard navigation.
1. **Input File (with drop zone)** Keyboard users can only focus the “Browse Files” button; the drop-zone area itself is not keyboard-navigable.
1. **Input File Gallery** The entire component is focusable and displays a focus border, signaling that its contents are interactive via keyboard navigation.

![Focus States](input/focus-states-32314-6875.png)

_Figure: Focus states of three file upload variants. Callout 1 marks the focus ring around the "Upload files" button of "Input File (without drop zone)"; callout 2 marks the focus ring around only the "Browse files" button in "Input File (with drop zone)", while the drop zone itself shows no focus; callout 3 marks the "Input File Gallery" tile, where the entire component has a solid focus border._

### Upload Queue – States

#### Uploading

- This state is active while the file is uploading (0–99%). If the upload takes longer than 5 seconds, progress **must** be visually indicated using one of the following methods:
   1. **A simple text indicator** (e.g., "Upload status 50%")
   1. **A determinate** **progress bar and a text indicator** with the percentage (find the prototype [here](https://www.figma.com/proto/qXldpLO6gxHJNLdcXIPxYt/branch/CukNdS9kle00AQ2O7tUbaS/Core-Components-%F0%9F%92%A0?page-id=1591%3A2&node-id=44694-7185&viewport=-1397%2C-5230%2C0.24&t=OGQYgACtKxAkg1t4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44694%3A7185))
- The **“X” button** functions as a **remove action** during this state. The button’s title and aria-label must clearly communicate this (e.g. “Remove file from upload list” or shorter “Remove file”).

#### Indeterminate Uploading

- Use this state when the upload is in progress but the upload progress cannot be determined, or the remaining wait time cannot be calculated.
- In this state, use one of the following indicators, depending on your chosen uploading-state display method, before (**a. text indicator** or **b. progress bar**): **a.** A **simple text indicator + loading spinner** combined with clear system feedback. **b.** An **indeterminate progress bar and a text indicator** with a clear system feedback (find the prototype [here](https://www.figma.com/proto/qXldpLO6gxHJNLdcXIPxYt/branch/CukNdS9kle00AQ2O7tUbaS/Core-Components-%F0%9F%92%A0?page-id=1591%3A2&node-id=44694-7185&viewport=-1397%2C-5230%2C0.24&t=OGQYgACtKxAkg1t4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44694%3A7185)).
- No percentage and file size is shown in this state.

#### Error

- If adding a file to the upload queue fails, a **system feedback message** is shown. The message must clearly explain the issue and, if possible, how to resolve it.
- A **Retry button** is provided to allow users to attempt the upload again.
- Depending on your chosen uploading-state display method, use one of the following error visualization types to maintain visual consistency:
   - **a. A simple text indicator with error message:** Displays the system feedback message along with a text indicator showing the percentage at which the upload stopped. This option should also be used when the upload has not started, even if the upload state includes a progress bar (e.g., showing “0%”). **b. A stopped progress bar with error message:** Displays an error message alongside the same visual progress bar and percentage that was shown during the upload.

#### Success

- Once the file upload reaches 100%, **a success message** is displayed automatically (e.g. “Upload complete”).
- The **progress indicator is removed,** as the upload process is considered complete.
- The **“X” button** functions as a **remove action** during this state. The button’s title and aria-label must clearly communicate this (e.g. “Remove file from upload list”or shorter “Remove file”).

![Success](input/success-32314-6900.png)

_Figure: Upload queue items in the states Uploading, Indeterminate Uploading, Error and Success, each showing a file icon, "Filename.png", "1.5 MB" and an "X" button. Callout a marks the variant without progress bar (text "Upload status 50%", spinner with "Uploading...", or only a status message) and callout b the variant with progress bar (50% blue bar, or an indeterminate bar); Error adds a retry button and a red "System Feedback Message", while Success shows no progress indicator and a green check with "System Feedback Message"._

### Focus Order

#### Recommended focus order:

1. **Upload Field Elements**
   - **“Browse files” button** inside drop zone (initial interaction point).
   - The drop zone is clickable but intentionally does not receive focus, as it is primarily designed for drag-and-drop interactions, while keyboard and screen reader users are guided to use the dedicated upload button.
   - After **closing the native file picker** (finder/explorer) the **"Browse files" button is focused** again.
1. **Preview List Elements** - if files are selected
   - **Remove button** for each selected file
   - **Selecting new files (native behavior):** Selecting files again overwrites the previously selected files instead of appending them.

![Recommended focus order:](input/recommended-focus-order-32314-6927.png)

_Figure: Input File with drop zone ("Label", "Drag and drop files here or", "Browse files", "Max file size: 7 MB. Supported file types: .jpg and .png") above a preview list of two "Filename.png" (1.5 MB) entries. Callout 1 marks the focused "Browse files" button as the first focus target; callout 2 marks the remove ("X") button of a list entry, which is focused next._

### Edge Case: Long File Names

#### Overflow – Long File Names

Currently, long file names are handled by **wrapping text onto multiple lines.** This ensures the full file name remains visible, allowing users to clearly identify the file.

![Overflow – Long File Names](input/overflow-long-file-names-32314-6941.png)

_Figure: Preview list item with a file icon, a very long file name "Quarterly\_Financial\_Report\_Q1\_2024\_Updated\_Version\_Final\_Reviewed\_April\_2\_With\_Annotations.pdf" wrapped onto two lines so it stays fully visible, followed by "1.5 MB" and an "X" button, with a divider line below._

#### Figma Component Handling

In the current Figma setup, the text box displaying the file name is set to **“Hug Content”** by default. If the file name exceeds the component boundary, the layout must be **manually adjusted** by switching the text box to **“Fill Container”** to allow for proper overflow handling.

![Figma Component Handling](input/figma-component-handling-32314-6951.png)

_Figure: Two preview list items compared with Figma layout settings above each. Left: width set to "Hug", showing "Filename.png" with "1.5 MB" and an "X" button on one line. Right: width set to "Fill", where the long file name "Quarterly\_Financial\_Report\_Q1\_2024\_Updated\_Version\_Final\_Reviewed\_April\_2\_With\_Annotations.pdf" wraps over several lines within the container._

### Overall Status Indicator

#### Usability Recommendation:

When uploading more than 5 to 10 files, it is recommended to:

1. **Display an overall status indicator (1)** to help users track progress during the upload process. (e.g. " 1 of 10 files uploaded."
1. **Collapse the upload list by default** and provide the user with an option to expand it. This helps structure the information, avoids overwhelming the interface, and improves readability—especially when handling a large number of files.

> **Please note the “Overall Status Indicator” is not available in Figma:** This functionality is not currently available. The reason is that the **Figma** **accordion component** currently only supports text, and additional functionality is required to enable this feature. It will be implemented once the accordion component is extended.

> **The “Overall Status Indicator” is not supported in the code component:** The implementation is planned for a future stage.

![Usability Recommendation:](input/usability-recommendation-32314-6986.png)

_Figure: Input File with drop zone shown twice. "Collapsed Loading List" has a chevron-down toggle, a spinner and the overall status "1 of 15 files uploaded" below the drop zone; "Expanded Loading List - on click" has a chevron-up toggle with the same status and a list of "Filename.png" 1.5 MB items, the first with a green success "System Feedback Message" and the others uploading at 50%. Callout 1 marks the overall status indicator._

## Motion Design – progress bar

A progress bar provides visual feedback about the duration and progression of a process such as a download, file upload, or installation, indicating how long a user is expected to wait.

A progress bar can either be determinate or indeterminate.

### Determinate progress bar

The determinate variant is visualized as a track that fills from left to right, representing the progress.

**Use a determinate progress bar when accurate progress information is available. It conveys exact and quantitative feedback.**

**Determinate progress bars fill from 0 to 99%.** (at 100% the success status is shown)

**motion:** linear, 1100ms [Open prototype](https://www.figma.com/proto/qXldpLO6gxHJNLdcXIPxYt/branch/CukNdS9kle00AQ2O7tUbaS/Core-Components-%F0%9F%92%A0?page-id=1591%3A2&node-id=44694-7185&viewport=-12642%2C-30462%2C1.36&t=5I7D3uY0pxtp7eIa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44694%3A7185)

![Determinate progress bar](input/determinate-progress-bar-44694-7199.png)

_Figure: Static frame of the determinate progress bar animation (prototype): an upload item with a file icon, "Filename.png", an "X" button and an empty grey progress track with "50%" at its right end._

### Indeterminate progress bar

The indeterminate variant is visualized as a bar moving along a fixed track at a constant speed, repeating over time.

**Use indeterminate progress bars when progress cannot be measured precisely. The animation continues until the process is complete.**

**motion:** ease in: 400ms, ease out: 400ms [Open prototype](https://www.figma.com/proto/qXldpLO6gxHJNLdcXIPxYt/branch/CukNdS9kle00AQ2O7tUbaS/Core-Components-%F0%9F%92%A0?page-id=1591%3A2&node-id=44694-7185&viewport=-12642%2C-30462%2C1.36&t=5I7D3uY0pxtp7eIa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44694%3A7185)

![Indeterminate progress bar](input/indeterminate-progress-bar-44710-6749.png)

_Figure: Prototype frame labelled "Indeterminate progress bar animation (click “Open prototype” on the left)" showing an upload item with a file icon, the file name "Filename.png", a ghost close button on the right, and a thin grey track with a short blue segment near its start, with the status text "Uploading..." underneath._

![Indeterminate progress bar](input/indeterminate-progress-bar-45308-6831.png)

_Figure: Motion design board "Motion Design Progress Bar" with a warning note that the two animation components only illustrate movement and are not meant for UI layouts. The "indeterminate" example shows four animation steps of a blue segment moving along a fixed track (ease in: 400ms, ease out: 400ms) and moving continually until the process is complete, while the "determinate" example shows a bar filling from 0% to 100% (linear: 1100ms)._

## WCAG Compliance

### Relevant WCAG Success Criteria:

**Non-text Content:** Provide meaningful text alternatives for icons, buttons, and other non-text controls. **Keyboard:** Ensure all functionality is operable through a keyboard interface. **Error Identification:** Clearly indicate input errors and describe them in text. **Labels or Instructions:** Ensure form elements, including file inputs, have descriptive labels and instructions.

By meeting these standards, file upload components become more usable, understandable, and operable for a diverse range of users.

### Clear error messages

#### Validation for error and success messages

1. **File too large (native input):**
- Specify the maximum allowed size.
- If possible: Suggest an alternative file (e.g., compress).
1. **Invalid file format (native input).**
- Clearly state the allowed file types in the hint text (e.g. “The file type .pdf is not supported. Please upload a .png or .jpg file.”).
1. **Required fields where no file was selected (native input):**
- The error should appear immediately after clicking "Submit”.
1. **One file only (specific to the drag & drop field):**
- If multiple files are dropped and only one can be uploaded.

![Validation for error and success messages](input/validation-for-error-and-success-messages-32314-7035.png)

_Figure: File input labelled "Upload Document\*" with a red dashed drop zone ("Drag and drop files here or", a "Browse files" button, "Max file size: 7 MB. Supported file types: .jpg and .png") and a red error "System feedback message" directly below it, pointed at by callouts 2, 3 and 4. Below it, an item "Filename.png" (1.5 MB) with a close button shows its own red "System feedback message" pointed at by callout 1._

#### The following error and success message validations must be implemented by your development team:

**Please note:** While the Figma component provides the visual design and structure for the following error messages, the technical implementation is the responsibility of the individual teams.

1. **Upload failed (technical issue):**
- Specify the reason for the error if possible. (e.g. “Upload failed. Please check your internet connection and try again.”)
1. **Success message**
- Visual and Screenreader feedback when the upload is complete (e.g. “Upload complete”)

![The following error and success message validations must be implemented by your development team:](input/the-following-error-and-success-message-validations-must-be--32314-7056.png)

_Figure: File input labelled "Upload Document\*" with a grey dashed drop zone ("Drag and drop files here or", "Browse files", "Max file size: 7 MB. Supported file types: .jpg and .png") above two uploaded items "Filename.png" (1.5 MB). The first item shows "Upload status 50%" with a red error "System Feedback Message", retry and close buttons, and callout 1; the second shows a green success "System Feedback Message" with callout 3._

### Progess indicator

If a progress indicator is missing for uploads that take longer than 5 seconds, **screen reader users** receive no feedback about whether the upload is active, and **sighted users** may assume nothing is happening.

**Users must always know:**

- Whether the upload is in progress
- Approximately how long it will take (if possible)
- Whether the upload was successful or failed

[Further Accessibility guidelines](https://www.figma.com/design/QK21tdy8qGwluWsg7cab6A/Accessibility-Introduction?node-id=1228-440&t=2pXVb43vpePUJKSw-1)

#### Progress Indicator – Minimal Version

- **Percentage display** as a simple number
- No visual progress bar, but with **screen reader announcements:**
   - **Mandatory:** Announce start (e.g. “Upload started”), completion (e.g. “Upload complete!”), and error states.
   - **Optional:** Announce at key milestones (e.g., 25%, 50%, 75%) to give users more granular feedback without overwhelming them.

![Progress Indicator – Minimal Version](input/progress-indicator-minimal-version-32314-7071.png)

_Figure: Minimal progress version of the upload list with three items "Filename.png" (1.5 MB), each with a close button: the first shows a green success "System Feedback Message", the other two show only the text "Upload status 50%" and no progress bar._

#### Progress Indicator – Best Practice

For actions that take more than 10 seconds, use a combination of:

- **Visual progress bar** for sighted users
- Screen reader-compatible **percentage indicator** for accessibility
- The progress indicator should also **include screen reader announcements**, ensuring that non-sighted users are informed about the upload status.

![Progress Indicator – Best Practice](input/progress-indicator-best-practice-32314-7087.png)

_Figure: Best-practice progress version of the upload list with three items "Filename.png" (1.5 MB), each with a close button: the first shows a green success "System Feedback Message", the other two each show a blue progress bar filled to half its track with the percentage "50%" at the right end._

## Examples and Variations

### Common use cases

#### Submitting documents in forms

A typical scenario for file uploads where users need to upload documents (e.g., PDFs, images, or other file types) as part of a form submission. The file upload can be part of a multi-step process and should include clear status updates for the user.

![Submitting documents in forms](input/submitting-documents-in-forms-32314-7110.png)

_Figure: Two states of an "Upload Form" on desktop and mobile. "Empty": a Title select ("Choose your title"), Name and Surname inputs, "Upload your Document" with the hint "Max file size: 7 MB. Supported file types: .jpg and .png", an "Upload file" button and a filled "Submit form" button. "Preview of Selected Files": the same form with two "Filename.png" (1.5 MB) items, each with a close button, listed between the upload button and "Submit form"._

#### Input File Flow Example – With Temporary Server Storage

In many cases, it is more **user-friendly to start the upload immediately** after file selection — without requiring an additional confirmation step. **Real-time visual status updates** ensure users remain informed throughout the process. By uploading to temporary server storage, you reduce friction, decouple the file transfer from the rest of the form submission and enable background tasks before finalizing. This works especially well for non-critical uploads. A clear progress indicator ensures users stay informed throughout the process, helping them understand that their files are being uploaded and how long it might take.

On mobile devices, the component variant without the drag-and-drop field is used. (the flow remains the same) Flow Example on the right.

**Please note:** The components for the flow are only available in Figma.

![Input File Flow Example – With Temporary Server Storage](input/input-file-flow-example-with-temporary-server-storage-32314-7217.png)

_Figure: Flow diagram of a file upload form with temporary server storage: "Empty" form (Surname field and drag and drop upload area) leads, when the user selects a file (no extra confirmation is needed) and upload begins, to "Upload queue of selected files" with progress bars. From there, files uploaded successfully lead to "Upload completed", and then "User submits form" leads to "Confirmation" ("Form was successfully submitted"). Branches lead to "Error: Upload in Progress" when Submit is clicked while files are still uploading, and to "Error: File Upload Failed" when there is an error while uploading, both showing red error messages. Measurements in the figure: 32px, 50%._

#### Input File Flow Example – With Preview List

In certain contexts, it is recommended to include an **explicit confirmation step before starting the upload**. This helps prevent accidental uploads —especially when dealing with sensitive or irreversible data submissions. On mobile devices, the component variant without the drag-and-drop field is used. (the flow remains the same) Flow Example on the right.

**Please note:** The components for the full flow — including the upload process — are only available in Figma. The coded component supports the flow up to the preview status only.

![Input File Flow Example – With Preview List](input/input-file-flow-example-with-preview-list-32314-8059.png)

_Figure: Flow diagram of a file upload form with a preview list: "Empty" form leads, when the user selects files, to "Preview" (files selected and listed but not yet uploaded). Clicking "Submit" starts "Upload" with progress bars, which leads on form submission to "Confirmation" ("Files are uploaded & form was successfully submitted") or, on an error while uploading, to "Error: upload in progress". Selecting a wrong file format from the preview leads to "Error: validation file format" with a red message on the file item. Measurements in the figure: 32px, 50%._

#### Uploading profile pictures or attachments into a gallery

This variant is **specifically designed** for uploading visual content like **profile pictures or gallery images**. Users can click or drag and drop an image, which is instantly uploaded.

**Please note:** Since the full upload process is embedded in an application-specific pattern, this flow is currently out of scope for detailed documentation. Therefore, only the initial screen is shown. However, the core component is available for teams to use in both Figma and code. A more detailed implementation is planned for a future stage.

![Uploading profile pictures or attachments into a gallery](input/uploading-profile-pictures-or-attachments-into-a-gallery-32314-8749.png)

_Figure: "Empty" state of a product detail page for a chainsaw ("BREEZE BEN", MS 261 C-M, with serial number, article number and dates plus "Edit product data" and "Delete product" buttons) on desktop and mobile. A grey placeholder image has a small dashed gallery upload button below it, labelled "Upload" on desktop and showing only an upload icon on mobile._
