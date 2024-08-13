---
title: Formatting dates
description: Formatting dates with SuperWeb Barebones.
tableOfContents: false
---

Use the `formatDate` function in `/src/lib/utils.ts` to format dates. The default locale is set to `en-US`.

```js
import { formatDate } from "@/lib/util";

// Returns "8/8/2024" in "en-US" locale.
formatDate(new Date());

// Returns "2024-08-02" in "en-CA" locale.
formatDate(entry.data.publicationDate, {}, "en-CA");

// Returns "August 8, 2024" in "en-US" locale.
formatDate(new Date(), {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Returns "8/2/24" in "en-US" locale.
formatDate(entry.data.publicationDate, {
  year: "2-digit",
});
```
