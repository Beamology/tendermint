(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{683:function(e,t,o){"use strict";o.r(t);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"application-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-requirements"}},[e._v("#")]),e._v(" Application Requirements")]),e._v(" "),o("p",[e._v("This section specifies what Tendermint expects from the Application. It is structured as a set\nof formal requirement that can be used for testing and verification of the Application's logic.")]),e._v(" "),o("p",[e._v("Let $p$ and $q$ be two different correct proposers in rounds $r_p$ and $r_q$ respectively, in height $h$.\nLet $s_{p,h-1}$ be $p$'s Application's state committed for height $h-1$.\nLet $v_p$ (resp. $v_q$) be the block that $p$'s (resp. $q$'s) Tendermint passes on to the Application\nvia "),o("code",[e._v("RequestPrepareProposal")]),e._v(" as proposer of round $r_p$ (resp $r_q$), height $h$, also known as the\nraw proposal.\nLet $v'_p$ (resp. $v'_q$) the possibly modified block $p$'s (resp. $q$'s) Application returns via\n"),o("code",[e._v("ResponsePrepareProposal")]),e._v(" to Tendermint, also known as the prepared proposal.")]),e._v(" "),o("p",[e._v("Process $p$'s prepared proposal can differ in two different rounds where $p$ is the proposer.")]),e._v(" "),o("ul",[o("li",[e._v("Requirement 1 ["),o("code",[e._v("PrepareProposal")]),e._v(", header-changes] When the blockchain is in same-block execution mode,\n$p$'s Application provides values for the following parameters in "),o("code",[e._v("ResponsePrepareProposal")]),e._v(":\n"),o("em",[e._v("AppHash")]),e._v(", "),o("em",[e._v("TxResults")]),e._v(", "),o("em",[e._v("ConsensusParams")]),e._v(", "),o("em",[e._v("ValidatorUpdates")]),e._v(". Provided values for\n"),o("em",[e._v("ConsensusParams")]),e._v(" and "),o("em",[e._v("ValidatorUpdates")]),e._v(" MAY be empty to denote that the Application\nwishes to keep the current values.")])]),e._v(" "),o("p",[e._v("Parameters "),o("em",[e._v("AppHash")]),e._v(", "),o("em",[e._v("TxResults")]),e._v(", "),o("em",[e._v("ConsensusParams")]),e._v(", and "),o("em",[e._v("ValidatorUpdates")]),e._v(" are used by Tendermint to\ncompute various hashes in the block header that will finally be part of the proposal.")]),e._v(" "),o("ul",[o("li",[e._v("Requirement 2 ["),o("code",[e._v("PrepareProposal")]),e._v(", no-header-changes] When the blockchain is in next-block execution\nmode, $p$'s Application does not provide values for the following parameters in "),o("code",[e._v("ResponsePrepareProposal")]),e._v(":\n"),o("em",[e._v("AppHash")]),e._v(", "),o("em",[e._v("TxResults")]),e._v(", "),o("em",[e._v("ConsensusParams")]),e._v(", "),o("em",[e._v("ValidatorUpdates")]),e._v(".")])]),e._v(" "),o("p",[e._v("In practical terms, Requirements 1 and 2 imply that Tendermint will (a) panic if the Application is in\nsame-block execution mode and "),o("em",[e._v("does")]),e._v(" "),o("em",[e._v("not")]),e._v(" provide values for\n"),o("em",[e._v("AppHash")]),e._v(", "),o("em",[e._v("TxResults")]),e._v(", "),o("em",[e._v("ConsensusParams")]),e._v(", and "),o("em",[e._v("ValidatorUpdates")]),e._v(", or\n(b) log an error if the Application is in next-block execution mode and "),o("em",[e._v("does")]),e._v(" provide values for\n"),o("em",[e._v("AppHash")]),e._v(", "),o("em",[e._v("TxResults")]),e._v(", "),o("em",[e._v("ConsensusParams")]),e._v(", or "),o("em",[e._v("ValidatorUpdates")]),e._v(" (the values provided will be ignored).")]),e._v(" "),o("ul",[o("li",[e._v("Requirement 3 ["),o("code",[e._v("PrepareProposal")]),e._v(", timeliness] If $p$'s Application fully executes prepared blocks in\n"),o("code",[e._v("PrepareProposal")]),e._v(" and the network is in a synchronous period while processes $p$ and $q$ are in $r_p$, then\nthe value of "),o("em",[e._v("TimeoutPropose")]),e._v(" at $q$ must be such that $q$'s propose timer does not time out\n(which would result in $q$ prevoting "),o("em",[e._v("nil")]),e._v(" in $r_p$).")])]),e._v(" "),o("p",[e._v("Full execution of blocks at "),o("code",[e._v("PrepareProposal")]),e._v(" time stands on Tendermint's critical path. Thus,\nRequirement 3 ensures the Application will set a value for "),o("em",[e._v("TimeoutPropose")]),e._v(" such that the time it takes\nto fully execute blocks in "),o("code",[e._v("PrepareProposal")]),e._v(" does not interfere with Tendermint's propose timer.")]),e._v(" "),o("ul",[o("li",[e._v("Requirement 4 ["),o("code",[e._v("PrepareProposal")]),e._v(", "),o("code",[e._v("ProcessProposal")]),e._v(", coherence]: For any two correct processes $p$ and $q$,\nif $q$'s Tendermint calls "),o("code",[e._v("RequestProcessProposal")]),e._v(" on $v'_p$,\n$q$'s Application returns Accept in "),o("code",[e._v("ResponseProcessProposal")]),e._v(".")])]),e._v(" "),o("p",[e._v("Requirement 4 makes sure that blocks proposed by correct processes "),o("em",[e._v("always")]),e._v(" pass the correct receiving process's\n"),o("code",[e._v("ProcessProposal")]),e._v(" check.\nOn the other hand, if there is a deterministic bug in "),o("code",[e._v("PrepareProposal")]),e._v(" or "),o("code",[e._v("ProcessProposal")]),e._v(" (or in both),\nstrictly speaking, this makes all processes that hit the bug byzantine. This is a problem in practice,\nas very often validators are running the Application from the same codebase, so potentially "),o("em",[e._v("all")]),e._v(" would\nlikely hit the bug at the same time. This would result in most (or all) processes prevoting "),o("code",[e._v("nil")]),e._v(", with the\nserious consequences on Tendermint's liveness that this entails. Due to its criticality, Requirement 4 is a\ntarget for extensive testing and automated verification.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Requirement 5 ["),o("code",[e._v("ProcessProposal")]),e._v(", determinism-1]: "),o("code",[e._v("ProcessProposal")]),e._v(" is a (deterministic) function of the current\nstate and the block that is about to be applied. In other words, for any correct process $p$, and any arbitrary block $v'$,\nif $p$'s Tendermint calls "),o("code",[e._v("RequestProcessProposal")]),e._v(" on $v'$ at height $h$,\nthen $p$'s Application's acceptance or rejection "),o("strong",[e._v("exclusively")]),e._v(" depends on $v'$ and $s_{p,h-1}$.")])]),e._v(" "),o("li",[o("p",[e._v("Requirement 6 ["),o("code",[e._v("ProcessProposal")]),e._v(", determinism-2]: For any two correct processes $p$ and $q$, and any arbitrary block $v'$,\nif $p$'s (resp. $q$'s) Tendermint calls "),o("code",[e._v("RequestProcessProposal")]),e._v(" on $v'$ at height $h$,\nthen $p$'s Application accepts $v'$ if and only if $q$'s Application accepts $v'$.\nNote that this requirement follows from Requirement 5 and the Agreement property of consensus.")])])]),e._v(" "),o("p",[e._v("Requirements 5 and 6 ensure that all correct processes will react in the same way to a proposed block, even\nif the proposer is Byzantine. However, "),o("code",[e._v("ProcessProposal")]),e._v(" may contain a bug that renders the\nacceptance or rejection of the block non-deterministic, and therefore prevents processes hitting\nthe bug from fulfilling Requirements 5 or 6 (effectively making those processes Byzantine).\nIn such a scenario, Tendermint's liveness cannot be guaranteed.\nAgain, this is a problem in practice if most validators are running the same software, as they are likely\nto hit the bug at the same point. There is currently no clear solution to help with this situation, so\nthe Application designers/implementors must proceed very carefully with the logic/implementation\nof "),o("code",[e._v("ProcessProposal")]),e._v(". As a general rule "),o("code",[e._v("ProcessProposal")]),e._v(" "),o("em",[e._v("should")]),e._v(" always accept the block.")]),e._v(" "),o("p",[e._v("According to the Tendermint algorithm, a correct process can broadcast at most one precommit message in round $r$, height $h$.\nSince, as stated in the "),o("a",{attrs:{href:"#description"}},[e._v("Description")]),e._v(" section, "),o("code",[e._v("ResponseExtendVote")]),e._v(" is only called when Tendermint\nis about to broadcast a non-"),o("code",[e._v("nil")]),e._v(" precommit message, a correct process can only produce one vote extension in round $r$, height $h$.\nLet $e^r_p$ be the vote extension that the Application of a correct process $p$ returns via "),o("code",[e._v("ResponseExtendVote")]),e._v(" in round $r$, height $h$.\nLet $w^r_p$ be the proposed block that $p$'s Tendermint passes to the Application via "),o("code",[e._v("RequestExtendVote")]),e._v(" in round $r$, height $h$.")]),e._v(" "),o("ul",[o("li",[e._v("Requirement 7 ["),o("code",[e._v("ExtendVote")]),e._v(", "),o("code",[e._v("VerifyVoteExtension")]),e._v(", coherence]: For any two correct processes $p$ and $q$, if $q$ receives $e^r_p$\nfrom $p$ in height $h$, $q$'s Application returns Accept in "),o("code",[e._v("ResponseVerifyVoteExtension")]),e._v(".")])]),e._v(" "),o("p",[e._v("Requirement 7 constrains the creation and handling of vote extensions in a similar way as Requirement 4\ncontrains the creation and handling of proposed blocks.\nRequirement 7 ensures that extensions created by correct processes "),o("em",[e._v("always")]),e._v(" pass the "),o("code",[e._v("VerifyVoteExtension")]),e._v("\nchecks performed by correct processes receiving those extensions.\nHowever, if there is a (deterministic) bug in "),o("code",[e._v("ExtendVote")]),e._v(" or "),o("code",[e._v("VerifyVoteExtension")]),e._v(" (or in both),\nwe will face the same liveness issues as described for Requirement 4, as Precommit messages with invalid vote\nextensions will be discarded.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Requirement 8 ["),o("code",[e._v("VerifyVoteExtension")]),e._v(", determinism-1]: "),o("code",[e._v("VerifyVoteExtension")]),e._v(" is a (deterministic) function of\nthe current state, the vote extension received, and the prepared proposal that the extension refers to.\nIn other words, for any correct process $p$, and any arbitrary vote extension $e$, and any arbitrary\nblock $w$, if $p$'s (resp. $q$'s) Tendermint calls "),o("code",[e._v("RequestVerifyVoteExtension")]),e._v(" on $e$ and $w$ at height $h$,\nthen $p$'s Application's acceptance or rejection "),o("strong",[e._v("exclusively")]),e._v(" depends on $e$, $w$ and $s_{p,h-1}$.")])]),e._v(" "),o("li",[o("p",[e._v("Requirement 9 ["),o("code",[e._v("VerifyVoteExtension")]),e._v(", determinism-2]: For any two correct processes $p$ and $q$,\nand any arbitrary vote extension $e$, and any arbitrary block $w$,\nif $p$'s (resp. $q$'s) Tendermint calls "),o("code",[e._v("RequestVerifyVoteExtension")]),e._v(" on $e$ and $w$ at height $h$,\nthen $p$'s Application accepts $e$ if and only if $q$'s Application accepts $e$.\nNote that this requirement follows from Requirement 8 and the Agreement property of consensus.")])])]),e._v(" "),o("p",[e._v("Requirements 8 and 9 ensure that the validation of vote extensions will be deterministic at all\ncorrect processes.\nRequirements 8 and 9 protect against arbitrary vote extension data from Byzantine processes\nsimilarly to Requirements 5 and 6 and proposed blocks.\nRequirements 8 and 9 can be violated by a bug inducing non-determinism in\n"),o("code",[e._v("VerifyVoteExtension")]),e._v(". In this case liveness can be compromised.\nExtra care should be put in the implementation of "),o("code",[e._v("ExtendVote")]),e._v(" and "),o("code",[e._v("VerifyVoteExtension")]),e._v(" and,\nas a general rule, "),o("code",[e._v("VerifyVoteExtension")]),e._v(" "),o("em",[e._v("should")]),e._v(" always accept the vote extension.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Requirement 10 ["),o("em",[e._v("all")]),e._v(", no-side-effects]: $p$'s calls to "),o("code",[e._v("RequestPrepareProposal")]),e._v(",\n"),o("code",[e._v("RequestProcessProposal")]),e._v(", "),o("code",[e._v("RequestExtendVote")]),e._v(", and "),o("code",[e._v("RequestVerifyVoteExtension")]),e._v(" at height $h$ do\nnot modify $s_{p,h-1}$.")])]),e._v(" "),o("li",[o("p",[e._v("Requirement 11 ["),o("code",[e._v("ExtendVote")]),e._v(", "),o("code",[e._v("FinalizeBlock")]),e._v(", non-dependency]: for any correct process $p$,\nand any vote extension $e$ that $p$ received at height $h$, the computation of\n$s_{p,h}$ does not depend on $e$.")])])]),e._v(" "),o("p",[e._v("The call to correct process $p$'s "),o("code",[e._v("RequestFinalizeBlock")]),e._v(" at height $h$, with block $v_{p,h}$\npassed as parameter, creates state $s_{p,h}$.\nAdditionally,")]),e._v(" "),o("ul",[o("li",[e._v("in next-block execution mode, $p$'s "),o("code",[e._v("FinalizeBlock")]),e._v(" creates a set of transaction results $T_{p,h}$,")]),e._v(" "),o("li",[e._v("in same-block execution mode, $p$'s "),o("code",[e._v("PrepareProposal")]),e._v(" creates a set of transaction results $T_{p,h}$\nif $p$ was the proposer of $v_{p,h}$, otherwise "),o("code",[e._v("FinalizeBlock")]),e._v(" creates $T_{p,h}$.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("TODO")]),e._v(' I have left out all the "events" as they don\'t have any impact in safety or liveness\n(same for consensus params, and validator set)')])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Requirement 12 ["),o("code",[e._v("FinalizeBlock")]),e._v(", determinism-1]: For any correct process $p$,\n$s_{p,h}$ exclusively depends on $s_{p,h-1}$ and $v_{p,h}$.")])]),e._v(" "),o("li",[o("p",[e._v("Requirement 13 ["),o("code",[e._v("FinalizeBlock")]),e._v(", determinism-2]: For any correct process $p$,\nthe contents of $T_{p,h}$ exclusively depend on $s_{p,h-1}$ and $v_{p,h}$.")])])]),e._v(" "),o("p",[e._v("Note that Requirements 12 and 13, combined with Agreement property of consensus ensure\nthe Application state evolves consistently at all correct processes.")]),e._v(" "),o("p",[e._v("Finally, notice that neither "),o("code",[e._v("PrepareProposal")]),e._v(" nor "),o("code",[e._v("ExtendVote")]),e._v(" have determinism-related\nrequirements associated.\nIndeed, "),o("code",[e._v("PrepareProposal")]),e._v(" is not required to be deterministic:")]),e._v(" "),o("ul",[o("li",[e._v("$v'"),o("em",[e._v("p$ may depend on $v_p$ and $s")]),e._v("$, but may also depend on other values or operations.")]),e._v(" "),o("li",[e._v("$v_p = v_q \\nRightarrow v'_p = v'_q$.")])]),e._v(" "),o("p",[e._v("Likewise, "),o("code",[e._v("ExtendVote")]),e._v(" can also be non-deterministic:")]),e._v(" "),o("ul",[o("li",[e._v("$e^r_p$ may depend on $w^r_p$ and $s_{p,h-1}$, but may also depend on other values or operations.")]),e._v(" "),o("li",[e._v("$w^r_p = w^r_q \\nRightarrow e^r_p = e^r_q$")])])])}),[],!1,null,null,null);t.default=s.exports}}]);