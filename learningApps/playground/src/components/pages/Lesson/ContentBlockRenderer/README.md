# Content Block Renderer (new lesson architecture)

Import from `@/components/pages/Lesson/ContentBlockRenderer/ContentBlockRenderer`.

```tsx
import {
  ContentBlockRenderer,
  ContentBlockCatalogRenderer,
  type ContentBlockReference,
  type SceneRegistry,
} from '@/components/pages/Lesson/ContentBlockRenderer/ContentBlockRenderer';

// For one response block (type-grouped catalog):
<ContentBlockRenderer type="text" response={section.content.text!.intro} />

// For an entire section, pass the explicit mixed-type presentation order.
// This is intentionally NOT inferred from Record/object insertion order.
<ContentBlockCatalogRenderer
  catalog={section.content}
  order={section.contentOrder}
  sceneRegistry={sceneRegistry}
/>
```

## Important integration constraints

- The dispatcher consumes `ContentBlock_Catalog<'response'>` and does not import definitions or authored data.
- `order` currently must be provided by the caller as an array of `{ type, key }` references. Agent 3 must add and populate the authoritative sequence in the Section response. Duplicates, unknown keys, and omissions throw.
- Every nested block (checkpoint answers and question prompts/options/explanations) must be serialized with a **`type`** discriminator. The present contracts omit it; the dispatcher throws for missing/unknown types. Agent 3 owns the contract update. This is not a legacy `blockType` adapter.
- Scenes use `sceneRegistry`, an injected map of response `id` to React components accepting `{locale}`. The registry is authored in React/TypeScript; component references never enter JSON. A serializable stable scene key in response would be better than the UUID; Agent 3 owns that.
- The native code renderer fetches same-origin published `fileLocation` resources. It deliberately rejects nonempty `codeParams` because the selector transform semantics are unspecified.
- The quiz renderer currently supports rendering tagged rich-content prompts/options, one-choice selection, completion score and retries. Full feedback policies, navigation, timing, grading/end screens, and localized action labels still need a dedicated quiz controller; this is not a replacement for that work.
- Video responses contain no subtitle/caption tracks. Proper caption support requires contract data. The `diff` string in `ContentBlock_Type` has no catalog or response type yet.

## Testing

`npm run test:components --workspace @svitlo/playground -- ContentBlockRenderer`

Tests live alongside the renderer in `ContentBlockRenderer.unit.spec.tsx`; the repository's Vitest config includes `src/**/*.unit.spec.tsx`.
