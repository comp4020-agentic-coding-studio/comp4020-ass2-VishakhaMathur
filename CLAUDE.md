# Your harness

## Course identity

SLOP*236 at Slop University, working title **Psychogeography of the
Supermarket**. Fixed by the platform: SlopU branding/palette, the `236` suffix
of the course code, the four content collections, the build pipeline. Yours:
everything else, including the level digit.

The course applies psychogeography — Debord's dérive and détournement, de
Certeau's strategies-vs-tactics, Perec's inventory method, Augé's non-places —
to the supermarket as designed terrain. Twelve weeks trace one argument: that
the supermarket produces a specific way of moving, looking and choosing, and
that this can be read, and resisted, like any other built environment.

## Voice: situationist manifesto register

Applies to prose in session, lecture, assessment and people bodies — not
frontmatter.

- Short declarative sentences. State the claim, then its consequence, rather
  than softening it with a subordinate clause.
- Second person imperative is encouraged in session bodies ("Stand in it. Time
  it."). Assessments and policies stay declarative — those are contracts, not
  provocations.
- Every session and lecture needs at least one line that reframes an ordinary
  supermarket feature (aisle order, queue, trolley wheel, loyalty card, endcap,
  self-checkout) as a structure of control or a site of resistance. No such
  line means the week is drafted, not written.
- Name real theorists directly, and only where the week's actual argument uses
  their idea, not as decoration: Debord, de Certeau, Perec, Augé, Baudrillard.
  Get the idea right — a misattributed concept is worse than no citation.
- Banned: LMS register ("students will be able to", "by the end of this
  session"), hedging ("arguably", "in many ways", "it could be said"), and
  generic uplift ("exciting", "journey", "unpack"). These are the tells of the
  brief's "AI slop".
- Em dashes are fine, sparingly. This register leans on the short declarative
  sentence, not the parenthetical.

## Structural rules tied to `spec/assignment-2.test.ts`

Keep this green as content lands, not just at the end:

- all twelve `sessions/*.md` present, one per week 1–12, each with a `date`
  inside `src/course-config.ts`'s `startDate`–`endDate`.
- `course-config.ts`'s `code` keeps the `236` suffix.
- at least one `lectures/*.md` keeps a `slides:` field pointing at a deck under
  `src/decks/` that builds.
- every `assessments/*.md`'s `weight` sums to exactly 100 across the
  collection.

Also: remove a file's `STARTER_CONTENT` comment the moment its placeholder is
replaced — `pnpm check:evidence` fails on any left behind. Resolve `related:`
refs on whichever side is convenient rather than duplicating the explanation
on both pages.

## Deliberately not encoded here

- No rule requires restyling the theme — the artefact criterion asks whether
  the site works, not what it looks like.
- No rule fixes the twelve concepts week-to-week beyond the one-line test
  above; that mapping is a course-design decision, argued in `PROCESS.md`, not
  a harness rule.
