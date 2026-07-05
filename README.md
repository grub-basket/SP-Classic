# Stashpad Classic

A chat-style, nested-notes workspace for [Obsidian](https://obsidian.md). Type at
the bottom, your notes stack and nest, and you drill in and out of the tree, with
optional **Open Knowledge Format (OKF)** export so your notes can be shared with
LLMs and agents.

> 🧭 **This is the Classic build.** Stashpad Classic is pinned at **0.102.16**, the
> last release that targets **stable (non-insider) Obsidian** (`minAppVersion 1.7.0`).
> Mainline Stashpad moved to `minAppVersion 1.13.0` (insider) from 0.102.19 onward.
> Use this build if you're on a stable Obsidian release.

> ⚠️ **Alpha software.** Stashpad does a lot and is usable daily, but it's young.
> Keep backups of anything important.
>
> The project was designed and directed by its maintainer, but the **code was
> written by an AI assistant** — it is not hand-authored or human-reviewed.

## Install

Stashpad is on the [Obsidian community store](https://community.obsidian.md/plugins/stashpad). Requires Obsidian **1.13.0+** (desktop or mobile).

1. Open **Settings → Community plugins → Browse** and search for **Stashpad** (or use the [store page](https://community.obsidian.md/plugins/stashpad)).
2. Install, then enable **Stashpad**.

**Via BRAT (optional).** You can also install through [BRAT](https://obsidian.md/plugins?id=obsidian42-brat) ([GitHub](https://github.com/TfTHacker/obsidian42-brat)): choose "Add beta plugin" and paste `https://github.com/grub-basket/SP`. BRAT lets you pin a specific version, which is handy for downgrading or grabbing a fix before it reaches the store.

## Quick start

1. Open the command palette and run **"Reveal or open Stashpad"** (or click the
   ribbon icon). The first run creates a `Stashpad` folder.
2. **Type in the composer at the bottom and press Enter** to capture a note. It
   appears in the list above.
3. **Click a note (or press →)** to drill into it; new notes you add now nest under
   it. Press **←** or the back arrow to come back out.
4. Explore from there: search, move/clone, set colors, pin, make tasks, or turn on
   OKF (below) to export.

## What it does

- **Chat-style capture** — type at the bottom, hit Enter; Shift+Enter for newlines,
  with an optional split-on-newlines mode.
- **Outliner** — notes nest under notes, arbitrarily deep; drill in/out, focus any
  note as a temporary root.
- **Search** — fast all-tokens/any-order "Sift" search across one folder or every
  Stashpad in the vault.
- **Organize** — move/merge/clone/outdent, drag-and-drop re-parenting, manual order,
  per-note colors with friendly aliases, pinning, and cross-folder cut/copy/paste of
  whole subtrees (attachments included, fully undoable).
- **Tasks** — turn a note into a to-do, set due dates, get reminders.
- **Tiny mode** — pop Stashpad into a small, pinnable, opacity-adjustable window for
  quick capture while you work elsewhere.
- **Folder panel** — sidebar of your Stashpad folders and pinned notes/folders.
- **Import / export** — `.stash` bundles round-trip notes + attachments; dropped
  files auto-import.
- **Authorship / multiplayer** — stamp notes with your name; shared vaults track
  contributors, with a vault-wide author registry.
- **Johnny.Decimal index** — build a JD-style hierarchy from dotted-prefix titles.

## Open Knowledge Format (OKF)

[OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf) is
Google's open, vendor-neutral spec for packaging curated knowledge as Markdown that
LLMs and agents can read. Stashpad already stores notes as Markdown with frontmatter
and a real hierarchy, so it can produce OKF bundles for you:

- Turn OKF on, then opt **per folder** by assigning the auto-created template.
- Each OKF folder gets complementary `okf*` frontmatter and a generated `index.md`;
  your own fields and links are never renamed or removed.
- **Export as OKF** to `.zip` / `.tar.gz` (portable bundles) or `.stash`. On export,
  the `okf*` fields are mapped to OKF's standard keys (`type` / `title` / etc.) and
  the hierarchy becomes relative-Markdown links, so the bundle is spec-compliant while
  the originals are kept for lossless re-import.

See [`docs/okf-guide.md`](docs/okf-guide.md) for a from-scratch walkthrough.

## Encryption — not included

Stashpad Classic **does not have encryption.** Mainline Stashpad's note/folder
encryption (encrypted `.stashenc` files, archive folders, encrypted trash, shared-key
collaboration) is removed from the Classic build — it relied on newer, insider-only
Obsidian APIs, and dropping it is part of what lets Classic run on stable Obsidian.

## Feedback

Report anything buggy or strange on the [issues](https://github.com/grub-basket/SP-Classic/issues) tab.

## Credits & thanks

Stashpad is a homage to **Stashpad Notes**, a lovely app discontinued in 2024. This
plugin brings its chat-style, jot-it-down feeling into Obsidian. Sincere thanks to
its founders, **Cara and Theo, and the rest of the Stashpad team**, for the original that inspired it.

## License

[MIT](LICENSE) © grub-basket.
