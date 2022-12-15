<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">

    <h1>{{ $t("overview.title") }}</h1>
    <h2>{{ $t('overview.subheading')}}</h2>
    <p>
      The ETC Grants program was launched in November 2022 to support the growth
      of the <a href="https://ethereumclassic.org">Ethereum Classic</a> ecosystem.
    </p>
    <p>
      ETC has the largest market cap for any proof-of-work smart
      contract platform, but its application ecosystem does not yet reflect
      that value proposition.  It is listed on <a href="https://coinmarketcap.com/currencies/ethereum-classic/markets/">every major exchange</a> and
      hundreds of millions of dollars of $ETC are traded daily but there
      are very <a href="https://ethereumclassic.org/services/apps">few decentralized applications</a> using the platform and only
      a very small amount of <a href="https://defillama.com/chain/EthereumClassic">TVL</a> in its Defi ecosystem
      and only a <a href="https://etcplanets.com/">few NFT projects</a>.
    </p>
    <p>
      <img src="https://deploy-preview-118--jocular-bienenstitch-b37dca.netlify.app/table-of-top-pow-chains.png"/>
    </p>
    <p>
      We aim to revitalize the ecosystem by providing "no strings attached"
      funding to promising projects building on Ethereum Classic.
    </p>

    <h2>Who is funding this program? How much has been pledged?</h2>
    <p>
      In July 2022, Antpool <a href="https://www.coindesk.com/business/2022/07/26/antpool-supports-ethereum-classic-ecosystem-with-10m-investment/">announced</a> that they
      were committing $10M USD for funding of the Ethereum Classic ecosystem
      in July 2022.
      Half of that amount is being held as Tether (USTD) in a
      Safe multisig (<a href="https://app.safe.global/eth:0xA208013A926718B43A6609e29691783833dcE8D6/home">0xA208...E8D6</a>) on
      the Ethereum mainnet and the other half was used to purchase $ETC
      in November 2022, which is being held in a Safe multisig (<a href="https://multisig.etccooperative.org/app/ETC:0x3db3D728B8783656b83c3cB8eDc1481eC3c62f82/home">0x3db3...2f82</a>) on ETC mainnet.
    </p>
    <p>
      The ETC Cooperative had $250K USD <a href="https://etccooperative.org/posts/2022-04-12-2021-retrospective-2022-budget-roadmap">budgeted</a> for grants during calendar year
      2022 and will be contributing those funds into the program as well.
    </p>

    <h2>How is it going to work?</h2>

    <p>
      The grants process will be open for proposals once every quarter.
      A timetable will be published for each round showing:
    </p>
    <p>
      - When the process is open for applications.<br/>
      - Total maximum funding assigned to this round.<br/>
      - What kind of projects will be welcomed in that round.<br/>
      - How to apply for a grant and what kind of information you must provide.<br/>
      - Expectations on likely USD amounts for particular proposals.<br/>
      - Timelines for applications, for assessments, for payout and for progress reporting.<br/>
    </p>

    <p>
      Everything will be happening via this website and on the various channels.
      Grant recipients will funded in $ETC, to aligh incentives with the network.
    </p>
      
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Overview",
  },
};
</script>
