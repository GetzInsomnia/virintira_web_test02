# Setup Log

This file summarizes the major steps used to enable `next-intl`.
Refer to it when troubleshooting the language system.

- Installed `next-intl` and added i18n configuration in `next.config.ts`.
- Moved app pages under `src/app/[locale]` so the locale prefix appears in the URL.
- Created translation message files in `messages/`.
- Wrapped pages with `NextIntlClientProvider` in `[locale]/layout.tsx`.
- Updated Navbar, UnderConstruction, and NotFound components to use translations.

Add future updates to this file to keep track of changes.
