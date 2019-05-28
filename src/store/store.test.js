import { store } from "./";
import { counter } from "./actions"

describe("store", () => {
  describe("counter", () => {
    const initialCount = store.getState().counter.count;

    it("decrement", () => {
      store.dispatch(counter.decrement());
      expect(store.getState().counter.count).toBe(initialCount - 1);
    });

    it("reset", () => {
      store.dispatch(counter.reset());
      expect(store.getState().counter.count).toBe(initialCount);
    });

    it("increment", () => {
      store.dispatch(counter.increment());
      expect(store.getState().counter.count).toBe(initialCount + 1);
    });
  });
});