import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the SLOPxxx236 code assigned to this repo", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]236$/);
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = nodesOfType("sessions");
    expect(sessions).toHaveLength(12);
    const weeks = sessions.map((session) => session.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    for (const session of sessions) {
      expect(session.meta?.date, `${session.id} has no date`).toBeTruthy();
    }
  });

  it("has at least one lecture with a linked, built deck", () => {
    const lectures = nodesOfType("lectures");
    const withSlides = lectures.filter((lecture) => typeof lecture.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
    for (const lecture of withSlides) {
      const deckPath = resolve("dist", `${(lecture.meta!.slides as string).replace(/^\//, "")}index.html`);
      expect(existsSync(deckPath), `${lecture.id} links a deck that didn't build: ${deckPath}`).toBe(true);
    }
  });

  it("adds assessment weights up to 100%", () => {
    const assessments = nodesOfType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});
