<template>
  <Layout>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <hr/>
    <a id="tldr"/>

    <div> <!-- TL;DR-->
      <h1>{{ $t("tldr.title") }}</h1>
      <p>
        {{ $t("tldr.paragraph1") }}
      </p>
      <p>
        {{ $t("tldr.paragraph2") }}
        <b><a :href="$t('tldr.apply-url')">{{ $t("tldr.apply-text") }}</a></b>
      </p>
    </div> <!-- /TL;DR-->

    <hr/>
    <a id="overview"/>

    <div> <!-- Overview -->
      <h1>
        {{ $t("overview.title") }}
      </h1>
      <h2>
        {{ $t('overview.subheading')}}
      </h2>
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
      <p>
        <i>
          (Data above from 27th December 2022)
        </i>
      </p>
      <p>
        We aim to revitalize the ecosystem by providing "no strings attached"
        funding to promising projects building on Ethereum Classic.
      </p>

      <h2>
        Who is funding this program? How much has been pledged?
      </h2>
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
        The <a href="https://etccooperative.org">ETC Cooperative</a> had $250K USD <a href="https://etccooperative.org/posts/2022-04-12-2021-retrospective-2022-budget-roadmap">budgeted</a> for grants during calendar year
        2022 and will be contributing those funds into the program as well. Additional funds
        will be allocated by the Cooperative each calendar year.
      </p>
    </div> <!-- /Overview -->

    <hr/>
    <a id="categories"/>

    <div> <!-- Categories -->
      <h1>
        Grants Streams
      </h1>

      <h2>
        General grants
      </h2>

      <p>
        General grants are open to all and any teams looking to build their projects on ETC. These grants do not have an open request by the ETC grant committee, but can prove they would provide value to the ETC ecosystem. There are suggested topics and ideas, on the ETC grants website, but without formal requests for proposals.
      </p>

      <p>
        The maximum funding per team for open grants is generally $50,000, unless applying under a community grant (maximum of $10,000) or a premium grant (those over $50,000).
      </p>

      <h2>Targeted grants</h2>

      <p>
        Targeted grants are those that have been selected by the grant selection committee and community as priority items and growth areas and have an open request. These items may or may not change each grant round, as priorities change and teams launch their projects. There may not be any open requests, at the beginning of a new round. In that case, General grants should be selected for the category.
      </p>

      <p>
        The maximum funding per team for targeted grants is generally $50,000, however teams can apply for premium grants which are over $50,000, if they meet the criteria. 
      </p>

      <p>
        As part of the targeted grants, there may also be an open request for critical path items, where the ETC grants team will select the companies or teams to submit their application for a specific and defined piece of work. These projects would be those considered critical to moving ETC forward and would pave the way for future growth. 
      </p>

      <h1>
        Types of grant
      </h1>

      <p>
        <table>
          <tr>
            <th>Type</th>
            <th>Funding Maximum</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Community Grant</td>
            <td>Up to $10,000</td>
            <td>Targeted grant or General</td>
            <td>Grassroots community grants such as hosting presentations, meet-ups, writing articles, starting clubs, translations, supporting aligned non-profits, using ETC within an IRL setting, supporting start-ups in underserved markets, etc.</td>
          </tr>
          <tr>
            <td>Conversion Grant</td>
            <td>$25,000</td>
            <td>General</td>
            <td>A Conversion Grant would be for project teams that have successfully launched a viable product on other blockchains and want to launch the same project on ETC.</td>
          </tr>
          <tr>
            <td>Standard Grant</td>
            <td>Up to $50,000</td>
            <td>Targeted grant or General</td>
            <td>Most grants would fall into this bucket. The team would be expected to be experienced in launching projects, have the relevant technical experience to perform work required, and have a detailed breakdown of the project. These grants can be targeted with an open RFP or open grants.</td>
          </tr>
          <tr>
            <td>Premium Grant</td>
            <td>Over $50,000</td>
            <td>Targeted grant or General</td>
            <td>These grants would only be available to teams with a proven track record of success. The project team would need to provide clear evidence of successful past launches and why funding over the amount of a standard grant, would be needed to meet objectives.  If a team requests this type of grant and the grant committee likes the project, but does not feel it meets the stringent requirements of a premium grant, they may accept the grant under the terms of the Standard grant. The project team would then have the right to accept or decline during the grant approval phase.
            </td>
          </tr>
        </table>     
      </p>

    </div> <!-- /Categories-->

    <a id="requirements"/>
    <div> <!-- Requirements -->
      <hr/>
      <h1>
        What do grant applications need to know?
      </h1>

      <h2>
        English or Chinese
      </h2>
      
      <p>
        The entire ETC Grants DAO process has been built with equal access
        in Chinese and English as a primary requirement.  This website,
        application process, display of proposals and all other elements
        of the process will be visible in both languages.  We really want
        to open up accessibility to Ethereum Classic for the Chinese-speaking
        community, and welcome applications from that demographic, even if
        the outputs of those proposals are only applicable to a Chinese-speaking
        audience.  That is no different than existing projects where the value
        only accrues to English speakers.
      </p>
      <p>
        We will be translating all of the applications from English to Chinese
        and visa-versa so that speakers of either language are able to see
        all of the applications.  The feedback from the Committee on projects
        and final fund assignments will also be available in both languages.
      </p>

      <h2>
        No Retroactive Funding
      </h2>
      
      <p>
        We will <b>not be considering</b> applications seeking to retroactively
        claiming funding for already completed projects, or to compensate
        individuals for prior volunteer work.  This program is intended to
        spur new development, whether from new entrants or existing ecosystem
        participants.
      </p>

      <h2>
        Projects must be permissively licensed open source
      </h2>
      <p>
        All projects must make their "outputs" available using permissive open
        source licensing, with only the following licenses being acceptable:
      </p>
      <p>
        - <a href="https://en.wikipedia.org/wiki/Apache_License">Apache 2.0</a> - good for source code<br/>
        - <a href="https://en.wikipedia.org/wiki/Mozilla_Public_License">Mozilla MPL 2.0</a> - good for source code (Javascript friendly)<br/>
        - <a href="https://en.wikipedia.org/wiki/Creative_Commons_license">Creative Commons (CC-BY-SA)</a> - good for documentation<br/>
      </p>
      <p>
        Funding will not be provided for projects seeking to build proprietary
        solutions.  The copyright will remain with the authors, but licensing
        must be permissive and patents must not be filed on the outputs of
        these projects.  Permissive licensing maximizes the number of ways in
        which the results of the projects can be used while protecting against
        patent trolling and lack of accreditation with these specific licenses
        choices.
      </p>

      <h2>
        Applicants will be subject to KYC
      </h2>
      
      <p>
        For regulatory compliance, applicants for the grants process will
        be subject to KYC (know your customer) checks through a third party
        agency.  None of that information will be held by the parties
        participating in the ETC Grants DAO processes.  Real names or other
        PII (personally identifying information) will not be made public
        unless applications choose to make that information publicly available
        on their application (ie. work history, past projects).
      </p>

      <h2>
        All applications will be publicly visible
      </h2>
      
      <p>
        All applications will be visible to the public on the website, so
        that other applicants can calibrate their own applications and get
        a good idea of the "playing field".  This will become especially
        important in later rounds.
      </p>
      <p>
        Here are the <a href="https://grants.zfnd.org/proposals">ZCash Foundation proposals</a> as
        an example of a desired end-state for the ETC program, though we
        are likely to have something more primitive at first.
      </p>

    </div> <!-- /Requirements -->

    <hr/>
    <a id="grantsprocess"/>

    <div> <!-- Grants process -->

      <h1>
        ETC Grants Process
      </h1>

      <p>
        - Call for proposals<br/>
        - Grant Application submission<br/>
        - Evaluation/Technical review<br/>
        - Grants team approval<br/>
        - Formal agreement & Due diligence (KYC/KYB)<br/>
        - Milestone reviews & payments<br/>
        - Project Launch & Project retrospective analysis.<br/>
      </p>

      <h2>Timeline</h2>

      <p>
        <ul>
          <li>
            Announcement of new grant round - Call for proposals
          </li>
          <li>
            Grant application submissions open (3 months)
          </li>
          <li>
            Evaluation/Technical review, approval and due diligence (1-3 months)
          </li>
          <li>
            Milestone reviews and project launch will be done on a project by project basis.
            It should be outlined in the application, when milestones and deliverables are expected.
            This part of the grant process will run concurrently, with the launch of subsequent grant rounds. (No defined timeline - each project will have a different timeline).
          </li>
        </ul>
      </p>

      <g-image src="~/assets/images/near-diagram.png"/>

      <h2>
        Phases
      </h2>

      <p>
        The 7 step grant process is outlined below:
      </p>

      <h3>
        Step 1: Call for Proposals
      </h3>

      <p>
        At the beginning of each grant round, the ETC grant committee will formally open the round with a call for proposals. The documentation on the grant site and other marketing materials , will outline the exact timeline for each grant round, for the following phases:
      </p>

      <ul>
        <li>The application submission (generally 3 months, subject to change)</li>
        <li>The grant committee review and approval (generally one month, subject to change)</li>
      </ul>

      <p>
        The call for proposals documentation will also identify the open requests for that specific grant round and teams will identify if they are submitting their application, under one of these open requests as well as the type of grant they are applying for. 
      </p>

      <h3>
        Step 2: Grant Application Submission 
      </h3>

      <p>
        Grant applications should be submitted via the site (Airtable). The application will outline all relevant details each team or individual should include. People should enter as much information as possible about their project, providing clear milestones and deliverables. 
      </p>

      <p>
        In the grant application, teams will specify which open request they are applying for or if they are applying under the general grant framework.
      </p>

      <p>
        When submitting the application, you will choose one of the grant types. You will need to ensure that your requested grant funding does not exceed the guidelines for the grant type. To receive a premium grant, a team will be expected to have a clear financial break-down, proven track record of success, and clearly demonstrate the value proposition to the grants committee. 
      </p>

      <h3>
        Step 3: Evaluation/Technical review
      </h3>

      <p>
        Currently, the ETC Grant committee is made up of the following:
      </p>
      <p>
        <ul>
          <li>
            Representative from AntPool
          </li>
          <li>
            Representative from Bitmain Xmei
          </li>
          <li>
            Representative from ETC Coop (Bob Summerwill, Executive Director)
          </li>
        </ul>
      </p>

      <p>
        In the future, once the ecosystem has grown there will be (number xx) of rotating grant committee seats, that will take part in the grant selection process. This will both encourage more diverse ecosystem engagement but also provide an incentive for projects based on their organic growth, to take part in further growing the ecosystem. 
      </p>
      <p>
        During the evaluation and technical review the grant committee will look at all the information submitted by each team and evaluate the application. Please note that the voting for the projects will be done by the members listed above, but the technical evaluation of the projects will be done by various stakeholders, with several members of the ETC Cooperative’s technical staff taking part. This is to ensure that there is sufficient technical review of all applications.
      </p>
      <p>
        For each open request there may be grants awarded to multiple teams, one team, or no teams if none of the submissions meet the standards required. 
      </p>
      <p>
        Your project will have better chances for acceptance if the following are met:
      </p>
      <p>
        <ul>
          <li>
            The team has proven experience and strong technical background.
          </li>
          <li>
            Representative from Bitmain Xmei
          </li>
          <li>
            The team can demonstrate that they have a business model that will sustain the project long term. If the project is an open source public good and thus there are no financial incentives for the team or to sustain the project, the application should be clear on how much annual funding would be required to maintain the project. Funding beyond the initial grant, is not guaranteed and the team would have to apply for grants in subsequent periods. 
          </li>
          <li>
            Your application clearly presents milestones and how to evaluate whether KPI’s have been met or not. 
          </li>
          <li>
            Your project fills an obvious void in the current ecosystem.
          </li>
          <li>
            Your project provides clear value to the ETC ecosystem.
          </li>
        </ul>
      </p>
      <p>
        Reasons a project may be declined:
      </p>
      <p>
        <ul>
          <li>
            Project is not aligned with ETC’s values.
          </li>
          <li>
            Project doesn’t have a way to sustain itself after grant funding has been fully utilized (if it is not an open source public good type grant).
          </li>
          <li>
            Project team does not appear to have requisite expertise to accomplish project goals.
          </li>
          <li>
            The cost/benefit of the project appears negative. 
          </li>
        </ul>
      </p>
      <p>
        During this phase, the grant committee team may reach out for more information regarding your project and conduct an interview. If your project is already at a testing phase, we may schedule a time to demonstrate the project and for the committee members and other involved stakeholders to review and ask questions.
      </p>
      <p>
        As the grant program matures more feedback will be provided on what quantitative and qualitative factors grants will be evaluated against. 
      </p>

      <h3>
        Step 4: Grants team approval
      </h3>

      <p>
        After evaluation of all submitted grants (within the submission timeline), an applicant will be notified about whether their application has been accepted or denied. If an application was denied, the team will receive a notification with some feedback on why. If an application was approved, the team will move into the due diligence phase.  
      </p>

      <h3>
        Step 5: Due diligence and AML/KYC requirements
      </h3>

      <p>
        If your grant application has been accepted, you will go through due diligence and sign your formal agreement, which includes KYC/KYB required information. This information will be obtained by a third party independent (Trulioo) company to comply with all AML and KYC requirements. The final agreement will specify terms of the contract and required milestones to release milestone payments. Agreements would be signed by all relevant parties. 
      </p>

      <p>
        Once all successful applicants have completed the due diligence and rejected projects, the grant committee team will announce that round's grantees. The amount of funding committed in the round will also be disclosed. The plan is to have an active directory tab on the ETC grant website, that will show the status of all applications. This may not be achievable for the first grant round. 
      </p>

      <h3>
        Step 6: Grant progress and Milestone review
      </h3>

      <p>
        During this stage of the process, the grantee would submit milestone/progress reports.  These reports will provide insight to the grant committee and the community, about the progress of the individual grant. It will also be used to assess the efficacy and robustness of the ETC grant-making program and process. These reports will be made public, for transparency. 
      </p>

      <p>
        The documentation will depend on whether it is a larger project, that has clear and differentiated milestones, or a smaller project without discrete pieces of work. If it is the latter, then a grant progress report template will be completed mid-way through the grant period, to assess the progress of the project. 
      </p>

      <p>
        Larger projects, that have specific milestones, would be required to submit a milestone progress report, after completing each milestone. Funding will occur after each milestone has been performed and reviewed.
      </p>

      <p>
        During this phase, project evaluations and KPI’s should be documented, as well as any changes in scope. In order to release milestone payments, it should be clear to the grant committee that these milestones were in fact met and that the project is on track. If at any milestones project review, it is determined that the project will not be able to achieve its final targets or objectives, the team should have formal discussions with the grant committee about whether a change of scope is needed or if the project should be abandoned. 
      </p>

      <p>
        If milestones are not met or do not meet expectations, or continuing the project does not make sense, work will be stopped and a post-mortem analysis will occur at that point. If a project goes to completion, post mortem analysis will commence at the end of the project. 
      </p>

      <h4>
        Payments
      </h4>

      <p>
        Projects are expected to submit their invoice for milestone payments and the grant team, administering the payment, will calculate the ETC to be paid. More information will be provided during the grant acceptance phase. 
      </p>

      <h3>
        Step 7: Project Launch and Retrospective
      </h3>

      <p>
        This phase is the final step in the grant making process and if the project has been successful, will lead to the launch of the final project and/or deliverables, as well as the completion milestone payment. This phase commences with the project retrospective that provides post mortem analysis to determine and analyze elements of the project that were successful or unsuccessful. 
      </p>

      <p>
        Project post-mortems are intended to inform process improvements which mitigate future risks and to promote iterative best practices. Post-mortems are often considered a key component of, and ongoing precursor to, effective risk management. A grant project post mortem will be required on all projects, as this will allow the grant team to tweak the process as the program matures. 
      </p>

      <p>
        As this is a new process, it will be regularly evolving to take into account learnings from each round and to integrate feedback from participants and the community. Please keep in mind that the ETC grant committee and grant admin teams are not as well resourced as many other crypto grant programs. We aim to make the processes as clear and transparent as possible and will adapt as needed.
      </p>

        </p>
    </div> <!-- /Grants process -->

    <hr/>
    <a id="decisionmaking"/>

    <div> <!-- Decision making -->
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
    </div> <!-- /Decision making -->

    <hr/>
    <a id="round1"/>

    <div> <!-- Round 1 -->
      <h1>Round 1 of the ETC Grants Program</h1>
      <h2>What kind of projects are you looking to fund?</h2>
      <p>
        Here are some ideas of projects which are likely to be well received,
        but please just take these as suggestions and feel free to bring your
        own ideas to the table too.
      </p>
      <p>
        - Unique and compelling ETC-only dapps<br/>
        - Novel NFT projects (especially for real-world assets)<br/>
        - Native stablecoins (USDT, USDC, DAI, RAI, RICO, other)<br/>
        - First-class ETC support in key Ethereum projects<br/>
        - Deploying and <b>supporting</b> clones of key Ethereum project on ETC<br/>
        - Privacy solutions<br/>
        - Oracle solutions<br/>
        - Lending protocols<br/>
        - Bridges and interoperability<br/>
        - Atomic swaps<br/>
        - Educational content<br/>
        - Meetups and events<br/>
        - Podcasts<br/>
        - <a href="https://help.gnosis-safe.io/en/articles/4022022-what-are-safe-apps">Safe apps</a><br/>
        - MetaMask snaps<br/>
        - Projects supporting self-custody<br/>
        - Projects supporting running your own node<br/>
      </p>

      <h2>What is the timeline for applications?</h2>
      <p>
        The grants process will be open for applications at some point in
        January 2023.  That application process will remain open through February
        and March 2023.  Decisions on which grants will be funded will be made in April 2023.
      </p>
      <p>
        The final decisions will be announced and initial funds disbursed in May 2023.
      </p>

      <h2>Ready to go?</h2>
      <p>
        Bring your best ideas!
        <b><a :href="$t('tldr.apply-url')">{{ $t("tldr.apply-text") }}</a></b>
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
          href="https://etcgrantsdao.notion.site/Wechat-group-b747ef7d2321459485aecbcbf382c6ab"
          target="_blank"
          rel="noopener"
          >WeChat</a
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
