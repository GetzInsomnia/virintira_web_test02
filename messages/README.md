# Translation messages

Each JSON file in this folder corresponds to a locale code (e.g. `en`, `th`).
Keys are organized by feature areas. To add a new language:

1. Copy `en.json` to `<locale>.json` (for example `fr.json`).
2. Translate the string values inside the new file.
3. Add the locale code to the `locales` array in `next.config.ts`.

Next.js will automatically serve pages under the new locale path (e.g. `/fr`).
