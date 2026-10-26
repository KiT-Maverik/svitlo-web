#!/usr/bin/env python3
"""Rename colocated unit fixtures, mocks, and specs; update their references.

Use --dry-run to inspect the changes. Running the script again is safe.
"""

from __future__ import annotations

import argparse
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUFFIXES = {
    ".unit.fx.test": ".unit.fx",
    ".unit.mx.test": ".unit.mx",
    ".unit.spec.test": ".unit.spec",
}
EXTENSIONS = {".ts", ".tsx"}
TEXT_EXTENSIONS = {".ts", ".tsx", ".mts", ".js", ".jsx", ".json", ".md"}
SKIP_DIRS = {".git", ".next", ".test-build", "node_modules", "test-results", "playwright-report", "storybook-static"}


def files():
    for directory, children, names in os.walk(ROOT):
        children[:] = [name for name in children if name not in SKIP_DIRS]
        for name in names:
            yield Path(directory, name)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    paths = list(files())
    moves: dict[Path, Path] = {}
    for path in paths:
        if path.suffix not in EXTENSIONS:
            continue
        stem = path.name.removesuffix(path.suffix)
        for old, new in SUFFIXES.items():
            if stem.endswith(old):
                moves[path] = path.with_name(stem.removesuffix(old) + new + path.suffix)
                break

    for source, target in moves.items():
        if target.exists() and target not in moves:
            raise FileExistsError(f"Cannot rename {source.relative_to(ROOT)}: {target.relative_to(ROOT)} exists")

    if not args.dry_run:
        for source, target in moves.items():
            source.rename(target)

    references = 0
    for path in paths:
        if path.suffix not in TEXT_EXTENSIONS:
            continue
        destination = moves.get(path, path)
        content = path.read_text() if args.dry_run else destination.read_text()
        updated = content
        for old, new in SUFFIXES.items():
            updated = updated.replace(old, new)
        if updated != content:
            references += 1
            if not args.dry_run:
                destination.write_text(updated)

    action = "Would rename" if args.dry_run else "Renamed"
    print(f"{action} {len(moves)} files and update references in {references} files.")


if __name__ == "__main__":
    main()
