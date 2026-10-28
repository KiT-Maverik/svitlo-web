# PR Content Change Manifest & Sync Notes

**Status:** Open architecture proposal — not validated or approved for implementation. This document records a requirement to evaluate, not a selected sync design.
**Area:** platform

## Goal

Generate machine-readable change summaries for content revisions at PR/build time.

## Intended scope

- Detect added/changed/deleted authored `*.data.ts` data records, resources, translations, IDs and media from Git diff.
- **Investigate change dates and timestamps** (Git author/commit times and/or content modification information, where reliable) as potential manifest inputs so offline clients can determine what changed since the last sync. Verify which timestamps are trustworthy, reproducible, and meaningful across rebases, cherry-picks, renames and generated files; do not assume file-system mtimes are authoritative.
- Emit per-ID and per-version manifest of affected entities and dependencies, rather than only file timestamps.
- Report which offline-downloaded content packages need refreshing.
- Keep generated manifests reproducible from reviewed Git and support schema migration/version checks.

## Open decisions and constraints

**Architecture remains undecided:** separately validate whether change detection should use content hashes, resource IDs and versions, commit references, dates/timestamps or a combination. Determine manifest schema, transitive dependencies, removal rules, approval timing, long-offline recovery, and CI integration. Date-based sync must not be adopted on its own without proving it can detect all required changes.

**Implementation note:** This is an unvalidated architectural candidate, not approval to build a manifest/sync system or claim its design is settled.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md); [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
