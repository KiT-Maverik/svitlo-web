# Offline-First & Device Compatibility

**Status:** **complete offline learning and installable PWA delivery are required target capabilities**, not a claim of currently implemented service-worker, cache, download, install or sync flows. Existing local storage controllers do not by themselves establish a complete offline application.

## Product invariant: complete educational content, online and offline

Svitlo is a web application designed to be **installable/downloadable as a Progressive Web App**. A learner should be able to **download the selected educational package/lesson and then study it fully offline**, including all **necessary instructional resources**, interactive behavior, locally available exercises/feedback and access to previously unlocked review materials. Online availability must not be required simply to load a previously downloaded lesson.

- **Offline must be designed across the complete dependency graph**: application shell, selected locales, text/Markdown, images/fonts, audio/video needed for the selected package, Scene code and assets, exercise data, models and any computation required by the chosen lesson.
- If a learning experience truly requires an online service (live collaboration, remote AI inference, externally embedded video or cloud-backed grading), it **cannot be represented as fully offline without a defined local alternative**. Disclose the gap and seek an architectural decision; do not mislabel an online-only activity as fully available offline.
- Download/install UX should make package availability, sizes, updates, offline readiness and optional large media transparent. **Do not silently exclude a required video, model, locale or exercise** to save space. A user may explicitly choose packages/locales, but the content they select must be internally complete for the stated offline experience.
- Reproducible bundles/package manifests from reviewed Git sources and stable IDs should support future independent textbook extraction and offline delivery. Their precise formats, lifecycle and update policies remain open.

## Persistence responsibilities

- **Git:** canonical authored educational content and media source, as documented in [Git-First Content](./git-first-typed-content.md).
- **Local repository / IndexedDB (planned direction with existing partial code):** versioned educational entity metadata and learner-related activity/progress/notes that must survive reloads and offline use. Keep data models normalized and keyed by stable IDs where appropriate.
- **Service Worker / Cache API (planned):** caching the app shell, static bundles, downloaded content assets and especially large media. Do not automatically store every video/blob in IndexedDB.
- **Sync layer / remote database (planned):** optional multi-device progress/account sync and conflict resolution when online. Do not put sync side effects inside every read method. **Offline availability must not be contingent on a cloud account or round-trip**.
- Local browser data can be evicted or cleared; offline guarantee needs documented storage quotas, readiness checks, update/retry behavior and a recovery strategy. Do not promise permanent preservation that browser storage cannot guarantee.

**Implementation maturity:** inspect the target app for a working PWA manifest, Service Worker registration, precache/download flow, cache invalidation, offline router, asset bundling, IndexedDB persistence and actual offline test **before** claiming offline readiness. These capabilities are separate from having `LessonState` types or a local DB controller.

## Weak devices: preserve learning, not just animations

A textbook should **work as well as possible on low-powered or older devices** and constrained networks: minimize JS and asset payloads, avoid unnecessary client hydration, lazily load large scenes, reuse lightweight 2D representations where equally effective, honor reduced-motion preferences, constrain CPU/GPU/memory use and avoid unbounded timers or expensive background effects.

**Hard trade-off boundary:** We **must not sacrifice existing learning material, factual coverage, core interaction or learning functionality silently** to improve device compatibility. Degrading the learning goal to a non-equivalent “lite lesson” is not an acceptable automatic solution.

If a feature cannot feasibly run on a particular device while preserving the equivalent educational experience:

1. Measure/describe the bottleneck and supported/unsupported capabilities.
2. Investigate **semantically equivalent** lighter implementations: simpler rendering of the same model, accessible tables, lower visual fidelity, fewer simultaneously displayed objects, nonessential effects off, cached/precomputed data, variable frame rates.
3. If equality is genuinely impossible, **escalate the trade-off explicitly**. The editor/architect determines the scope, minimum supported devices, alternative presentation and whether the limitation may be disclosed.
4. Preserve the full canonical content and source definition. A future **compatibility flag or runtime capability indication** may expose that a given interactive format is unsupported on a low-performance device, but the **flagging capability is planned, not already in code**, and is not permission to drop content.
5. Report the unsupported user experience and the proposed remedy. **Never silently omit a Section, Scene, resource, answer, audio/video or educational fact** or pretend an alternative has the same learning value when it does not.

**Performance and offline support are independent dimensions:** an offline scene may still exhaust GPU memory; a low-memory scene may still depend on an online API. Review both, plus accessibility and full localization.

## Acceptance and future work

A complete offline-capable textbook will ultimately need **installation, package-download management, locale-aware caching, media strategies, offline-local progress, optional sync, storage-eviction resilience and real airplane-mode E2E testing**. All are requirements/gates for later implementation, not software that this document creates.

**Related:** [Localization & Accessibility](./internationalization-and-accessibility.md), [Learning Philosophy](./learning-experience-philosophy.md), [Notes](./lesson-notes.md), [System Boundaries](./system-boundaries.md).
