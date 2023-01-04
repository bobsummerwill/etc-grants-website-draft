<template>
  <Layout>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div> <!-- TL;DR-->
      <h1>Apply for an ETC grant</h1>
      <p>
        Do you have what it takes to contribute to the growth of the ETC ecosystem and need funding?
        <b><a href="https://airtable.com/shr3VMqyLd1HX5ws4">Apply here!</a></b>
      </p>
    </div> <!-- /TL;DR-->

    <div> <!-- Overview section-->
      <hr/>
      <h1>{{ $t("overview.title") }}</h1>
      <h2>{{ $t('overview.subheading')}}</h2>
      <p>
        The ETC Grants program was announced in November 2022 to support the growth
        of the <a href="https://ethereumclassic.org">Ethereum Classic</a> ecosystem.
      </p>
      <p>
        ETC has the largest market cap for any proof-of-work smart
        contract platform, but its application ecosystem does not yet reflect
        that value proposition.  It is listed on <a href="https://coinmarketcap.com/currencies/ethereum-classic/markets/">every major exchange</a> and
        hundreds of millions of dollars of $ETC are traded daily but there
        are very <a href="https://ethereumclassic.org/services/apps">few decentralized applications</a> using the platform,
        only a very small amount of <a href="https://defillama.com/chain/EthereumClassic">TVL</a> in its Defi ecosystem
        and <a href="https://etcplanets.com/">few NFT projects</a>.
      </p>
      <p>
        <img src="/images/table-of-top-pow-chains.png"/>
      </p>
      <i>(Data above from 27th December 2022)</i>
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
        Safe multisig (<a href="https://app.safe.global/eth:0xA208013A926718B43A6609e29691783833dcE8D6/balances">0xA208...E8D6</a>) on
        the Ethereum mainnet and the other half was used to purchase $ETC
        in November 2022, which is being held in a Safe multisig (<a href="https://multisig.etccooperative.org/app/ETC:0x3db3D728B8783656b83c3cB8eDc1481eC3c62f82/balances">0x3db3...2f82</a>) on ETC mainnet.
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

    <a id="Requirements"/>
    <div> <!-- Requirements -->
      <hr/>
      <h1>What do grant applications need to know?</h1>

      <h2>No Retroactive Funding</h2>
      <p>
        We will <b>not be considering</b> applications seeking to retroactively
        claiming funding for already completed projects, or to compensate
        individuals for prior volunteer work.  This program is intended to
        spur new development, whether from new entrants or existing ecosystem
        participants.
      </p>

      <h2>Projects must be open source</h2>
      <p>
        All projects must make their "outputs" available using permissive open
        source licensing (Apache 2, Mozilla MPL 2 or Creative Commons).
        Funding will not be provided for projects seeking to build proprietary
        solutions.  The copyright will remain with the authors, but licensing
        must be permissive and patents must not be filed on the outputs of
        these projects.
      </p>

      <h2>Progress Reports</h2>
      <p>
        Applicants are obliged to provide two status reports.
        The first report will be mid-project and the second report is due at
        the completion of the project, or when work towards its stated goals
        comes to an end for whatever reason.
      </p>
      <p>
        These reports will all be made public, as will the proposals themselves,
        together with feedback and rationale from the committee on each of the
        proposals explaining how their merits were assessed and how that
        assessment informed the decision-making process for allocation of funds.
      </p>
      <p>
        The first status report will be due 6 weeks after the funds are released,
        so around the end of January.  The final status reports will be due
        mid-February.  The intention for the program is for everything to be
        completely transparent so that applicants can see which proposals are
        having success, likely "market rates" for proposals and so on.
      </p>
    </div> <!-- /Requirements -->

    <div> <!-- Decision making -->
      <hr/>
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
          There is no specific plan to open up the decision making progress to the
          broader ETC community at the time of writing.  Longer term it <i>might</i> make
          sense to move, step-by-step, towards an open DAO structure where all ETC
          token holders have the option to participate in the decision making process.
      </p>

      <h2>Committee members - round 1</h2>
      <ul>
        <li>Bitmain (Xmei?)</li>
        <li>Antpool (Lilian?)</li>
        <li>ETC Cooperative (Bob?)</li>
      </ul>
    </div> <!-- /Decision making -->

    <hr/>
    <div> <!-- Round 1 -->
      <h1>Round 1 of the ETC Grants Program</h1>
      <p>
        We are seeking interesting and innovative dapps, along with
        foundational projects for enriching the ETC Defi ecosystem.  We also
        welcome proposals related to events, education and other communication
        of ETC's unique value propositions.
      </p>

      <h2>What is the timeline for applications?</h2>
      <p>
        The grants process will be open for applications at some point in
        January 2023.  That application process will remain open through February,
        March and April.  Decisions on which grants will be funded will be made in May.
        Those decisions will be made public and funds disbursed in June.
      </p>

      <h2>How much funding is available?</h2>
      <p>
        Up to $1M USD worth of ETC is available for successful applicants in
        this first round of grants, which was funded by Antpool ($750K)
        and ETC Coop ($250K).  Individual grant proposals cannot exceed
        $50K USD per round.
      </p>

      <h2>What kind of projects are you looking to fund?</h2>
      <p>
        Here are some ideas of projects which are likely to be well received.
        If you have a proposal which does not quite fit then that is fine too.
      </p>
      <p>
        - Native stablecoins (DAI, RAI, RICO, other)<br/>
        - Bringing first-class support for key Ethereum projects to ETC<br/>
        - Supporting key Ethereum project deployments on ETC<br/>
        - Privacy solutions<br/>
        - Oracle solutions<br/>
        - Lending protocols<br/>
        - Bridges and interoperability<br/>
        - Atomic swaps<br/>
        - Educational content<br/>
        - Meetups and events<br/>
        - Podcasts<br/>
        - Safe apps<br/>
        - MetaMask snaps<br/>
        - Projects supporting self-custody<br/>
        - Projects supporting running your own node<br/>
      </p>
      <br/>
    </div> <!-- /Round 1 -->

    <!-- Commented out original template for the home page, with localization support.
         For now I've just cut-and-pasted all the English text from the specific pages
         directly in here with no translation.  That single-page format is what we are
         going to end up with on the new website anyway - though without the "index"
         hyperlinks on the left-hand side navigation bar.
    <div> 
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
        <b><a href="https://airtable.com/shr3VMqyLd1HX5ws4">Apply for a grant</a></b>
        <br/>
        {{ $t("home.round1text") }}
      </p>
    </div> -->

    <div> <!-- Footer -->
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
    </div> <!-- /Footer -->

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
