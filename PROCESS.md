# Process overview

## What I built

A twelve-week course, *Psychogeography of the Supermarkets* (SLOP2236),
that reads the supermarket as a designed mechanism rather than a place of
commerce — one argument (Debord's dérive, de Certeau's tactics, Perec's
inventory, Augé's non-place) carried week to week from the door to the
exit, not twelve unrelated topics wearing the same template.

## How I got here

"A good university course" was my spine: one argument sustained across
weeks, not a syllabus of loosely related topics, and every session earning
its place by reframing something ordinary — a queue, a trolley wheel, an
endcap — as a structure of control. That's what I asked the agent to bake
into `CLAUDE.md` rather than leave as a one-off instruction:
[`adc4dd1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/adc4dd16ac9dda60c5f75fbab59037da7e803747)
encodes the situationist voice and the banned-word list, tied explicitly to
`spec/assignment-2.test.ts` so content would land green as it was written,
not as a last-minute pass. The harness wasn't right first time: it assumed
a `<Deck>` component that doesn't exist in this theme, and I had the agent
correct its own rule once the build disagreed with it —
[`36ac2c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/36ac2c0974ee2d950597833102e8a97a98138787).
Course identity
([`9194720`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/9194720ef0879f16ffb036cfb8b7beee23ea2e53))
and the twelve weeks of sessions, lectures, assessments and staff bios
([`43de2b3...18c5a91`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/compare/43de2b370226b9dab16d634e3d8db1601e3aefc0...18c5a91cd9d3862509887c7ff5efc410f5d55c8a))
followed from that spine, checked mechanically by
[`29c241b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/29c241b14cf049335e88b604d963c4469d23905c)'s
`spec/assignment-2.test.ts` for the course code, the dated weeks, the built
deck and the assessment weights — coherence of the argument itself I left
to my own read, not a check.

The part last time's feedback pushed me to show is *how* I directed the
agent, not just what it produced. The starter's placeholder art was left
in place deliberately at that first content pass, marked `STARTER_CONTENT`
rather than guessed at, so I closed each one out as a separate, reviewed
decision instead of letting the agent invent art for people and a hero
scene it had never seen. For the hero, I supplied the artwork myself and
gave a direct instruction —

> Can you replace the hero-home.avif with the hero.jpg in the assets?

— which the agent carried out and verified against the build
([`08e4a92`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/08e4a925f2f377c16440b87ca783e986677c77b9)).
For the social card, I asked what the target size and style should be
*before* supplying anything, so the art I sourced would already fit the
Open Graph slot; when I then handed over the trolley image and said "its
the image of a trolley," the agent caught that the file was JPEG data
saved with a `.png` extension and, once I said "rename it," fixed the
extension and updated the one reference to it in `site-config.ts` rather
than leaving a silently mislabelled file
([`f8fd983`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/f8fd983bcf33e273e4dd9b5ff056a2a8cf498dfd)).
For the two staff portraits I gave no mapping at all — just "I have added
professor's and tutor's image in the people's section" — and the agent
matched each photo to Idris Fenn or Marisol Quaye by cross-checking their
bios' roles (tutor vs. founding convenor) against what was actually drawn
in each image, then rewrote the alt text to describe that image rather
than reuse the starter's generic description
([`9a80d6c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/9a80d6c6e0e3e74c9f13869d959eaec699224cb4)).

What I left alone: the Astro build pipeline, the shape of the four content
collections, and any restyling of the theme — the brief asks whether the
site works, not what it looks like, so I spent no effort there.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
