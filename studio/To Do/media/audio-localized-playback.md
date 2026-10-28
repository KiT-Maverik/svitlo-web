# Audio Resources: Player, Captions & Language Availability

**Status:** Proposed — not implemented by this document.
**Area:** media

## Goal

Introduce complete accessible audio playback and an explicit partial-locale audio strategy.

## Intended scope

- Build dedicated Audio Resource UI with localized title/description and playback controls; Engine already has AudioResourceConfig title/description/fileLocation but no general-section player.
- Provide synchronized, localized captions/transcripts and optional timed cues (two-second chunks are a candidate, not a rigid fixed interval).
- Audio files may initially exist for fewer locales due to synthesis cost; display the *actual spoken language* and require an intentional user-facing fallback/choice.
- Maintain true text translations, labels, transcripts and scene content for all mandatory locales; audio fallback is never a substitute for missing text translations.
- Account for download/caching, streaming, keyboard, variable playback speed, captions, accessibility, offline availability.

## Open decisions and constraints

Decide cue format (e.g., WebVTT), granularity by speech timing, which locales get voice tracks first, codec/host, and no-audio equivalent.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [internationalization-and-accessibility.md](../../docs/architecture/internationalization-and-accessibility.md); [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
