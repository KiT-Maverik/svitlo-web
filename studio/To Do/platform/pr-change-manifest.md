# PR Content Change Manifest & Sync Notes

**Status:** Proposed — not implemented by this document.
**Area:** platform

## Goal

Generate machine-readable change summaries for content revisions at PR/build time.

## Intended scope

- Detect added/changed/deleted authored *.data.ts data records, resources, translations, IDs and media from Git diff.
- Emit per-ID and per-version manifest of affected entities and dependencies, rather than only file timestamps.
- Report which offline-downloaded content packages need refreshing.
- Keep generated manifests reproducible from reviewed Git and support schema migration/version checks.

## Open decisions and constraints

Determine manifest schema, transitive dependencies, removal rules, approval timing and CI integration.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md); [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
