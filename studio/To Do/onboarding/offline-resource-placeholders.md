# Offline Resource Unavailability States

**Status:** Proposed — not implemented by this document.
**Area:** onboarding

## Goal

Provide meaningful resource placeholders when media is not currently downloaded or cannot load offline.

## Intended scope

- Differentiate absent package, temporary unavailable media, expired/removed resource, unsupported device and user-declined optional download.
- Display localized title, actual resource type, reason and next actions when connectivity returns.
- Provide accessible equivalent teaching content where possible and preserve positions/IDs in the Lesson.
- Do not imply a missing video has been viewed or skip required instruction silently.

## Open decisions and constraints

Define supported placeholder taxonomy, retry flows and progress rules.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
