import { add } from "./index";

describe("add", () => {
	it("can add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
