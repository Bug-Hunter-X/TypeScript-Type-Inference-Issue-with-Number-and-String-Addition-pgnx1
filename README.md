# TypeScript Type Inference Issue with Number and String Addition

This repository demonstrates a subtle type inference issue in TypeScript when performing addition between a number and a string.  While TypeScript typically catches type mismatches, there are scenarios where it might fail to infer the correct type, leading to unexpected runtime errors.

## The Bug

The `bug.ts` file contains a simple addition function and a subtraction function.  The addition of two numbers works as expected. However, attempting to add a number and a string leads to a runtime error, which isn't caught at compile time by the TypeScript compiler in all scenarios.

## The Solution

The `bugSolution.ts` file presents a solution to this issue that correctly enforces type safety using explicit type checking or union types.  This ensures that type errors are caught during compilation rather than at runtime. 