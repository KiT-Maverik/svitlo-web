# Anonymous Teacher Grading

**Status:** Proposed — not implemented by this document.
**Area:** assessment

## Goal

Reduce grading bias by hiding student identities during manual review.

## Intended scope

- Use an opaque assessment-attempt code, QR/barcode if appropriate; teacher sees responses without name.
- Reidentify result only through authorized mapping after grades are finalized.
- Avoid leaking identity in attachments, handwriting metadata or export filenames.
- Create evidence of reviewer changes, release rules and privacy retention.

## Open decisions and constraints

Determine pseudonym lifecycle, threat model, teacher visibility and conflict with age/safety requirements.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.
