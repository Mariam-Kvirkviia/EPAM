import sinon from "sinon";
import request from "supertest";
import { expect } from "chai";
import db from "./db";
describe("call a function", () => {
  it("calls the original function", function () {
    const fakeData = {
      id: "123",
      username: "abc",
      email: "abc@gmail.com",
    };
    const stub = sinon.stub(db, "getUserByUsername").resolves(fakeData);
    stub.restore();
  });
});
