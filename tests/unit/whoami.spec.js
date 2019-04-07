import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import WhoAmI from "@/components/WhoAmI.vue";

describe("WhoAmI", () => {
  it("renders", () => {
    const wrapper = shallowMount(WhoAmI);
    expect(wrapper.text()).to.include("Who am I?");
    expect(wrapper.text()).to.include("Nicolas");
  });
});
