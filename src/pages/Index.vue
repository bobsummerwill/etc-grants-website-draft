<template>
  <Layout>
    <div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

      <h1>{{ $t("home.welcome") }}</h1>

      <a href="overview"><h3>{{ $t("home.overviewtitle") }}</h3></a>
      <p>
        {{ $t("home.overviewtext") }}
      </p>

      <a href="requirements"><h3>{{ $t("home.requirementstitle") }}</h3></a>
      <p>
        {{ $t("home.requirementstext") }}
      </p>

      <a href="decisionmaking"><h3>{{ $t("home.decisionmakingtitle") }}</h3></a>
      <p>
        {{ $t("home.decisionmakingtext") }}
      </p>

      <a href="round1"><h3>{{ $t("home.round1title") }}</h3></a>
      <p>
        {{ $t("home.round1text") }}
      </p>
      
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
    title: "Home",
  },
};
</script>

<style>
.home-links a {
  @apply mr-2;
}
</style>
