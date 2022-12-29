<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">

      <h1>Decision making for the ETC Grants Program</h1>

      <h2>Who will be making the decisions?</h2>

      <p>
          Decisions on the initial round of grants will be made by a committee
          appointed by Bitmain, Antpool and ETC Cooperative, as the initial donors into this
          grants process.  If further donors join the process, they will be invited
          to participate in the decision making process as well.
        </p>
        <p>
          Voting will be recorded using Snapshot (see <a href="https://snapshot.org/#/etcgrantsdao.eth">etcgrantsdao.eth</a>),
          in a similar manner to the existing Snapshot instance used
          for <a href="https://snapshot.org/#/litecoin-antpool-dao.eth">Litecoin/Antpool voting</a>.
        </p>
        <p>
          Interestingly enough it looks like there <a href="https://snapshot.org/#/?network=61">are a few</a> ETC snapshot polls already,
          so it should be easy enough to add one of our own, with a nested "treasury" entry
          pointing to the ETC Safe multisig.
        </p>
        <p>
          There is no specific plan to open up the decision making progress to the
          broader ETC community at the time of writing.  Longer term it <i>might</i> make
          sense to move, step-by-step, towards an open DAO structure where all ETC
          token holders have the option to participate in the decision making process.
      </p>

      <h2>Standing committee members</h2>
      <ul>
        <li>Bitmain (Xmei, other?)</li>
        <li>Antpool (Leon, Lucien, Rory, Lilian?)</li>
        <li>ETC Cooperative (Bob, Alison?)</li>
        <li>Grayscale (Craig?)</li>
      </ul>

      <h2>Rotating committee members</h2>
      <ul>
        <li>TBD</li>
        <li>TBD</li>
      </ul>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "DecisionMaking",
  },
};
</script>
