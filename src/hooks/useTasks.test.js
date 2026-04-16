import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTasks } from "./useTasks";

describe("useTasks", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("agrega una nueva tarea", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Estudiar React");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toMatchObject({
      name: "Estudiar React",
      done: false,
    });
  });
});