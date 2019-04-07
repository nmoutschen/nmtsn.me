<template>
  <section class="findme">
    <ul class="contact">
      <li v-for="contact in contacts" v-bind:key="contact.link">
        <a v-bind:href="contact.link">
          <i v-bind:class="'fab fa-' + contact.icon"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      contacts: [
        {
          link: "https://github.com/nmoutschen",
          icon: "github"
        },
        {
          link: "https://www.linkedin.com/in/nicolas-moutschen-6906a337/",
          icon: "linkedin"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../common/colors.less";

.contact {
  list-style: none;
  display: block;
  padding: 0px;

  li {
    display: inline-block;
    padding: 0 5px;
  }

  a {
    color: @primary;
    &:hover {
      color: @primary-light;
    }
  }
}

.fab {
  font-size: 1.5em;
}
</style>
