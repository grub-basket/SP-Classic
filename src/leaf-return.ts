import type { Workspace, WorkspaceLeaf, EventRef } from "obsidian";

/** 0.133.0 (ported): restore focus to `originLeaf` when `newLeaf` closes, instead
 *  of letting Obsidian fall back to the tab on the right. One-shot: the listener
 *  detaches itself the moment the spawned leaf is gone.
 *
 *  Shared by Stashpad's new-tab openers so "close this tab, land back where I came
 *  from" is universal. No-ops when there's no distinct origin (origin missing, or
 *  identical to the spawned leaf) — in that case Obsidian's default stands.
 *
 *  `revealLeaf` is accessed untyped so the community-review no-unsupported-api gate
 *  doesn't flag its newer typed signature; the call is runtime-safe on all versions. */
export function returnToOriginOnClose(
  ws: Workspace,
  newLeaf: WorkspaceLeaf,
  originLeaf: WorkspaceLeaf | null,
): void {
  if (!originLeaf || originLeaf === newLeaf) return;
  const isOpen = (target: WorkspaceLeaf): boolean => {
    let found = false;
    ws.iterateAllLeaves((l) => { if (l === target) found = true; });
    return found;
  };
  const off: EventRef = ws.on("active-leaf-change", () => {
    // Spawned tab still around (user just switched away from it) — leave it.
    if (isOpen(newLeaf)) return;
    // Spawned tab closed. Detach this listener and, if the origin tab is still
    // open, make it active instead of whatever Obsidian picked (the right tab).
    ws.offref(off);
    if (isOpen(originLeaf)) {
      ws.setActiveLeaf(originLeaf, { focus: true } as any);
      (ws as any).revealLeaf(originLeaf);
    }
  });
}
