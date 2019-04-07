<template>
  <section class="findme">
    <ul class="contact">
      <li v-for="contact in contacts" v-bind:key="contact.link">
        <a v-bind:href="contact.link">
          <font-awesome-icon v-bind:icon="['fab', contact.icon]" />
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
    color: @primary-dark;
    &:hover {
      color: @primary;
    }
  }
}

.svg-inline--fa {
  font-size: 1.5em;
}
</style>
