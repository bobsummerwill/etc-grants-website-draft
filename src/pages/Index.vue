<template>
  <Layout>
    <div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

      <h1>{{ $t("welcome") }}</h1>

      <a href="overview"><h3>Overview</h3></a>
      <p>
        An overview of the Ethereum Classic Grants program, funded by Antpool and ETC Cooperative.
      </p>

      <a href="requirements"><h3>What are the requirements?</h3></a>
      <p>
        What do grant applicants need to know before applying?
      </p>

      <a href="decisionmaking"><h3>Decision Making</h3></a>
      <p>
        How will the decision making work for the grants program?
      </p>

      <a href="round1"><h3>How to apply for Round 1</h3></a>
      <p>
        Details on the first round of grants, launched in November 2022.
      </p>


      <g-image src="~/assets/images/catty.jpg" width="900" />
      
    </div>

    <div>
      <p class="home-links">
        <a
          href="https://t.me/+HFT390x76c4zYWRh"
          target="_blank"
          rel="noopener"
          >Telegram</a
        >
        |
        <a
          href="https://twitter.com/etcgrantsdao"
          target="_blank"
          rel="noopener"
          >Twitter</a
        >
        |
        <a
          href="https://github.com/ETCCooperative/etc-grants-website"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >

      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  @apply mr-2;
}
</style>
