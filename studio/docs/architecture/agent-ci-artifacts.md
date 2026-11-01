# Agent CI Artifacts — PR-Scoped Reference Workspace

**Status:** On-demand CI utility for AI agents. No production runtime dependency.

## Boundary

`.agent-ci-artifacts/` is a **temporary Git-tracked reference workspace**, not source content, not an application asset, and not an archival documentation directory. It is intended to live **only on an open feature/agent PR branch**. Do not add it to `.gitignore`. The generated files remain visible to an AI agent using a GitHub connector because they are committed to the PR branch. They must never reach `main`.

Initial folder contract:

```text
.agent-ci-artifacts/
  manifest.json
  taxonomies/
    <textbook-name>/
      <language-key>.md
```

The `manifest.json` identifies the canonical **source commit**, live language roster, selected books, successfully generated documents (including source links, counts) and failures. Each Markdown references actual Code Skills entities, localizes headings and frontend descriptions, and retains canonical English methodological descriptions to support reviews. Generated files are **not** writeback sources.

## Lifecycle

1. **Request (opt-in):** A review-only PR may need a temporary `.agent-ci-artifacts/review-request.md` seed commit to establish a diff against `main`; create it on a new **draft PR** so it is never mistaken for a production edit. Repository owner posts `/agent-artifacts generate` on the relevant PR, or starts **Agent CI Artifacts** manually by selecting the PR number and `generate`. Do **not** generate on every push, PR creation, or build.
2. **Resolve source:** CI validates that the PR is open, in the same repository, and its head branch is not the default branch. All work is pinned to the PR's exact head SHA so concurrent source updates cannot be overwritten.
3. **Generate (read-only):** A low-privilege worker checks out the source SHA and runs `node scripts/generate-translation-review-artifacts.mjs`. This wrapper discovers **all** textbooks with `learningApps/*/data/skills` and **all** supported language keys from `shared/contracts/src/types/languages.ts`. It invokes the established read-only `generate-skills-taxonomy.mjs --stdout` for each combination and writes only under `.agent-ci-artifacts/`. No per-locale/per-book modes.
4. **Publish:** A separate, write-authorized job downloads the produced one-day transport artifact, removes any previous tracked agent reference library, and commits only `.agent-ci-artifacts/` to the same PR head branch. A stale commit push fails rather than overwriting newer work. The agent reads selected documents directly from that branch.
5. **Review or follow-up:** The agent processes only documents needed by its actual task. The corpus exists for reference; canonical edits, if authorized, happen in Code using the relevant editing skill. A new generation can refresh the reference library after code changes.
6. **Cleanup:** After the agent finishes, owner posts `/agent-artifacts cleanup` on that PR, or manually chooses `cleanup` in Actions. For a draft PR targeting `main`, transition to **Ready for review** also triggers cleanup. Cleanup removes all tracked `.agent-ci-artifacts/` content in a new PR commit.
7. **Merge safety:** A dedicated, path-unfiltered **Agent CI Artifacts / clean** check runs on every PR into `main` and fails while this folder exists; FastGate also rejects it when FastGate runs. **Make the dedicated check required in `main` branch protection/rulesets**. The presence of artifacts intentionally blocks merging until cleanup.

## Security and resource controls

The generation worker has read-only repository permissions. Only the trusted publish/cleanup jobs have `contents: write`, do not execute source-branch scripts and write only to the resolved same-repo PR branch. Owner-only commands are recognized; unrecognized comments and comments on issues are ignored. This limits risks from untrusted PR contents.

The generator installs only the parser needed to read TypeScript; no full textbook build is necessary. GitHub Actions isolated runners and the transport archive are disposable (archive retention: **one day**). Git-tracked PR artifacts **do not expire automatically**: cleanup is a deliberate Git commit. Do not equate runner cleanup with PR content cleanup. A merge check is an additional defense and is enforceable only if configured as a required check.

Large all-language taxonomies can create substantial, noisy PR commits. Trigger them sparingly and only when the agent actually needs an external CI workspace; do not use artifacts as permanent documentation. New types of agent reference material require a separately reviewed generator/publisher change within this stable lifecycle. No ephemeral workflow YAML creation/deletion.
