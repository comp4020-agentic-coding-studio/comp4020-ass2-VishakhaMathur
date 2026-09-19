# Process overview

## What I built

A twelve-week course, *Psychogeography of the Supermarket* (SLOP2236), that
reads the supermarket as a designed mechanism rather than a place of
commerce — one argument (Debord's dérive, de Certeau's tactics, Perec's
inventory, Augé's non-place) carried week to week from the door to the
exit, assessed entirely through fieldwork and counter-mapping rather than
an exam.

## How I got here

"A good university course" was my spine: one argument sustained across
weeks, not a syllabus of loosely related topics, every session earning its
place by reframing something ordinary — a queue, a trolley wheel, an
endcap — as a structure of control, and every assessment testing that
observation in the field rather than in a hall. I encoded the voice half of
that into `CLAUDE.md` rather than leaving it a one-off instruction — the
situationist register and banned-word list, tied explicitly to
`spec/assignment-2.test.ts` so content would land green as it was written,
not on a last-minute pass
([`adc4dd1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/adc4dd16ac9dda60c5f75fbab59037da7e803747)).
The harness wasn't right first time — it assumed a `<Deck>` component this
theme doesn't have — and I had the agent correct its own rule once the
build disagreed with it
([`36ac2c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/36ac2c0974ee2d950597833102e8a97a98138787)).
Course identity and the twelve weeks of sessions, lectures, assessments and
staff bios followed from that spine
([`9194720`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/9194720ef0879f16ffb036cfb8b7beee23ea2e53)),
checked mechanically by
[`29c241b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/29c241b14cf049335e88b604d963c4469d23905c)'s
spec test for the course code, the dated weeks, a built deck and the
assessment weights — coherence of the argument itself I left to my own
read, not a check, same as the build pipeline, the four content
collections' shape, and the theme's styling: the brief asks whether the
site works, not what it looks like.

A second pass tested that spine against its own claims rather than adding
to it, and needed no new rule in `CLAUDE.md` or `spec/` — the existing
checks already recorded what had to stay true. If assessment is fieldwork, not an exam, a
brief can't accept a photograph as evidence for a store that doesn't exist,
and a spec bullet can't read as a suggestion — so I closed the
fictional-store loophole, added required reading naming Debord, Perec and
Augé, and rewrote the counter-map's three spec bullets over three rounds —
replacing two of the agent's own drafts with sharper wording of my own —
until each was a constraint a marker could fail a submission against
([`9668e49`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/9668e4983fa6e481af0069df73a733ce8c99ffc1)).
The same commit fixed a 404 page silently serving a broken hero image — a
green `pnpm check` had missed it, since the theme drops an unresolvable
image path with a console warning instead of failing the build, so the
only way to know it was fixed was to load the page and look. If the site's own title claimed several supermarkets
where the argument reads one, that was wrong, so I retitled it and rewrote
the homepage description and the assessments page's exam-free rationale to
match
([`99c8496`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/99c8496340ddc1a1b33e47c09e506487891fe9ca)).
And if "one argument carried week to week" is the actual claim, it can't
hold with eleven of twelve weeks missing the deck that carries it — so I
had the agent build the other eleven, matching week one's structure and
quoting a theorist only where that week already names one, rather than
invent an attribution `CLAUDE.md` calls worse than none. `pnpm check`
confirmed all twelve decks build, but a schema-valid `slides:` field
doesn't prove the page links to it, so I loaded a couple of weeks myself to
confirm "Open the slides" was really there, and had the lectures and
sessions index pages rewritten to state that pedagogy instead of
describing their own scaffolding
([`9afb5d6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-VishakhaMathur/commit/9afb5d68c9c9cfee0aa2aa1fce9240cd3e2b7b47)).

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
