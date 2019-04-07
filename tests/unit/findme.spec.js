import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import FindMe from "@/components/FindMe.vue";

describe("FindMe", () => {
  it("renders", () => {
    const wrapper = shallowMount(FindMe);
    const links = wrapper.findAll("a");
    expect(links.at(0).attributes("href")).to.include("github");
    expect(links.at(1).attributes("href")).to.include("linkedin");
  });
});
