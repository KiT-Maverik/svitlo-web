# Third-Party SVG/HTML/Media Security Scanning

**Status:** Proposed — not implemented by this document.
**Area:** security

## Goal

Add practical validation and provenance for external snippets and media entering Git.

## Intended scope

- Detect active SVG/HTML scripts, suspicious attributes, third-party network references, trackers, hidden payloads and unexpected behaviors.
- Audit copied code/dependencies for malicious imports, install hooks and prompt-injection instructions.
- Validate copyright, licenses, attribution, resource metadata, metadata privacy and file safety before reuse.
- Document CI/static review and human escalation rules; never execute unknown code to inspect it.

## Open decisions and constraints

Define approved sanitizers, licensing records, scanner false-positive handling and CI enforcement.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md)
