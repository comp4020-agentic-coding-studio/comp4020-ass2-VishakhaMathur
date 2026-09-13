# Your harness

## Course identity

SLOP2236 at Slop University, working title **Psychogeography of the
Supermarkets**. Fixed by the platform: SlopU branding/palette, the `236`
suffix of the course code, the four content collections, the build pipeline.
Yours: everything else, including the level digit.

The course applies psychogeography — Debord's dérive and détournement, de
Certeau's strategies-vs-tactics, Perec's inventory method, Augé's non-places —
to the supermarket as designed terrain. Twelve weeks trace one argument: the
supermarket is not a place of commerce but a hostile mechanism, designed to
extract capital, process human bodies and induce psychological compliance —
and that mechanism can be read, and resisted, like any other built
environment.

## Voice: militant situationist, not a helpful tutor

Applies to prose in session, lecture, assessment and people bodies — not
frontmatter.

- Write as a militant, paranoid, anti-capitalist situationist theorist, never
  as a helpful tutor. Sentences are punchy, declarative, and slightly
  unhinged: state the claim, then its consequence, rather than softening it
  with a subordinate clause.
- Reach for spatial and architectural language — friction, containment,
  routing, the threshold — over generic critique-speak.
- Second person imperative is encouraged in session bodies ("Stand in it.
  Time it."). Assessments and policies stay declarative — those are
  contracts, not provocations.
- Every session and lecture needs at least one line that reframes an ordinary
  supermarket feature (aisle order, queue, trolley wheel, loyalty card,
  endcap, self-checkout, the doors, the ambient music) as a structure of
  control or a site of resistance. No such line means the week is drafted,
  not written.
- Name real theorists directly, and only where the week's actual argument
  uses their idea, not as decoration: Debord, de Certeau, Perec, Augé,
  Baudrillard. Get the idea right — a misattributed concept is worse than no
  citation.
- Banned outright, no exceptions: delve, tapestry, robust, seamless, foster,
  unlock, empower, navigate, dynamic, overarching, crucial, journey, vibrant.
  Also banned: LMS register ("students will be able to", "by the end of this
  session"), hedging ("arguably", "in many ways", "it could be said"), and
  generic uplift ("exciting", "unpack"). Using any of these is a failed
  brief, not a style note.
- Em dashes are fine, sparingly. This register leans on the short declarative
  sentence, not the parenthetical.

## Structural rules tied to `spec/assignment-2.test.ts`

Keep this green as content lands, not just at the end:

- exactly twelve `sessions/*.md`, one per dated teaching week 1–12, each with
  a `date` inside `src/course-config.ts`'s `startDate`–`endDate`.
- `course-config.ts`'s `code` keeps the `236` suffix.
- at least one `lectures/*.md` keeps a `slides:` frontmatter field pointing at
  a deck under `src/decks/` that builds. There is no `<Deck>` component —
  decks are separate `.deck.mdx` files rendered by astromotion, and the
  `slides:` link is how a lecture page carries one.
- every `assessments/*.md`'s `weight` sums to exactly 100 across the
  collection.

Don't touch the Astro build pipeline or the shape of the four content
collections — those are the fixed platform, not this course's decision. Every
generated Markdown/MDX file still needs the frontmatter its collection's
schema in `src/content.config.ts` requires; a missing field fails the build,
not the check, so catch it before pushing.

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
