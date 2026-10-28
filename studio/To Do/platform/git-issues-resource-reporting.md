# Resource & Answer Error Reporting via GitHub Issues

**Status:** Proposed — not implemented by this document.
**Area:** platform

## Goal

Send learner reports about the exact resource/question from UI through a protected Next.js API.

## Intended scope

- Require a meaningful issue description, stable resource/question ID, locale, package/lesson/section context and source-file mapping.
- Route via Next.js server API to GitHub Issue creation with server-side authenticated token/secret, never in browser bundle or public Git.
- Map the resource to an accurate owned source path and include non-sensitive reproduction context.
- Add abuse controls, size/rate limits, sanitization and prevent user text from becoming privileged instructions.
- Make reporting available from questions/answers, Scenes and other resources; minimize child/student personal data.

## Open decisions and constraints

Decide author permissions, triage labels, duplicate detection and whether offline reports queue locally until online.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md)
