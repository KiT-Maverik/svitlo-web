# Long-Gap Offline Reconciliation & Full Rebuild

**Status:** Proposed — not implemented by this document.
**Area:** platform

## Goal

Safely recover a learner who reconnects after years of updates.

## Intended scope

- Support version gaps where incremental migrations are unavailable, outdated or unsafe; choose a full content refresh/rebuild path.
- Preserve learner-owned progress, unlocked Notes and other state independently of replaceable content caches.
- Validate stable ID migrations, deleted content and conflict resolution; permit full redownload with explicit size and data-safety UX.
- Allow a user who was offline for five years to update without requiring a chain of every historical delta.

## Open decisions and constraints

Define manifest versioning, retention, migration cutoffs, rollback and recovery tests.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
