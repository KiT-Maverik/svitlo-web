# Reduce Casual Exposure of Quiz Answers

**Status:** Proposed — not implemented by this document.
**Area:** security

## Goal

Make answer disclosure less trivial without claiming bank-grade protection.

## Intended scope

- Avoid logging correct answers to console or embedding them in debug logs, diagnostics and plaintext UI state by default.
- Review how correct answers reach client bundles, source maps, preloaded data and public endpoints.
- Assess options such as server-assisted grading for online use and packaging an honest offline mode.
- A fully offline graded client must have enough information to check locally and can be reverse-engineered: obfuscation only raises effort.
- Keep verification and feedback behavior pedagogically correct and accessible.

## Open decisions and constraints

Define accepted threat model, offline trade-off and honest residual risk.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
