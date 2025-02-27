---
image: /generated/articles-docs-layout-utils-measure-text.png
title: measureText()
crumb: "@remotion/layout-utils"
---

_Part of the [`@remotion/layout-utils`](/docs/layout-utils) package._

Calculates the width and height of specified text to be used for layout calculations. Only works in the browser, not in Node.js or Bun.

## Example

```tsx twoslash
import { measureText } from "@remotion/layout-utils";

const text = "remotion";
const fontFamily = "Arial";
const fontWeight = "500";
const fontSize = 12;
const letterSpacing = "1px";

measureText({
  text,
  fontFamily,
  fontWeight,
  fontSize,
  letterSpacing,
}); // { height: 14, width: 20 }
```

## API

This function has a cache. If there are two duplicate arguments inputs, the second one will return the first result without repeating the calculation.

The function takes the following options:

### `text`

_Required_ _string_

Any string.

### `fontFamily`

_Required_ _string_

Same as CSS style `font-family`

### `fontSize`

_Required_ _number_ / _string_

Same as CSS style `font-size`. Since v4.0.125, strings are allowed too, before only numbers.

### `fontWeight`

_string_

Same as CSS style `font-weight`

### `letterSpacing`

_string_

Same as CSS style `font-spacing`.

### `fontVariantNumeric`<AvailableFrom v="4.0.57"/>

_string_

Same as CSS style `font-variant-numeric`.

### `validateFontIsLoaded?`<AvailableFrom v="4.0.136"/>

_boolean_

If set to `true`, will take a second measurement with the fallback font and if it produces the same measurements, it assumes the fallback font was used and will throw an error.

## Return value

An object with `height` and `width`

## Important considerations

See [Best practices](/docs/layout-utils/best-practices) to ensure you get correct measurements.

## See also

- [Source code for this function](https://github.com/remotion-dev/remotion/blob/main/packages/layout-utils/src/layouts/measure-text.ts)
- [`@remotion/layout-utils`](/docs/layout-utils)
