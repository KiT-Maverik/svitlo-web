# Heavy Asset Hosting & Source Ownership

**Status:** Proposed — not implemented by this document.
**Area:** media

## Goal

Plan scalable storage/delivery for large audiovisual and interactive resources.

## Intended scope

- Keep authoritative authored assets/manifests/licensing and provenance reviewable via Git where feasible.
- Store large derived files in a future asset store/CDN (AWS is a candidate, not a committed vendor).
- Preserve checksums, stable resource IDs, content versions, language and quality variants, signed access if needed.
- Support offline package download/cache so cloud hosting is a delivery origin, not an always-online requirement.

## Open decisions and constraints

Select provider, cost, rights, versioning, revocation, integrity and ownership model.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md); [offline-first-and-device-compatibility.md](../../docs/architecture/offline-first-and-device-compatibility.md)
