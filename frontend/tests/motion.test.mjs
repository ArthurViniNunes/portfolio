import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";
import test from "node:test";
import { motionScript, resolveMotion } from "../src/content/motion.ts";

test("movimento reduzido prevalece sobre qualquer preferência persistida", () => {
  for (const preference of [null, "full", "paused", "invalid"]) {
    assert.equal(resolveMotion(preference, true), "reduced");
    assert.equal(resolveMotion(preference, false), preference === "paused" ? "paused" : "full");
  }
});

test("bootstrap de movimento respeita pausa e sistema antes da hidratação, mesmo sem storage", () => {
  for (const reduced of [true, false]) {
    for (const preference of [null, "full", "paused", "invalid", "blocked"]) {
      const document = { documentElement: { dataset: {} } };
      runInNewContext(motionScript, {
        document,
        matchMedia: () => ({ matches: reduced }),
        localStorage: { getItem() { if (preference === "blocked") throw new Error("Storage denied"); return preference; } }
      });
      assert.equal(document.documentElement.dataset.motion, resolveMotion(preference, reduced));
    }
  }
});
