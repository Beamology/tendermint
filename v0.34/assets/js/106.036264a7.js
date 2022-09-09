(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{700:function(e,t,a){"use strict";a.r(t);var l=a(1),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-037-deliver-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-037-deliver-block"}},[e._v("#")]),e._v(" ADR 037: Deliver Block")]),e._v(" "),a("p",[e._v("Author: Daniil Lashin (@danil-lashin)")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("13-03-2019: Initial draft")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Initial conversation: https://github.com/tendermint/tendermint/issues/2901")]),e._v(" "),a("p",[e._v("Some applications can handle transactions in parallel, or at least some\npart of tx processing can be parallelized. Now it is not possible for developer\nto execute txs in parallel because Tendermint delivers them consequentially.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Now Tendermint have "),a("code",[e._v("BeginBlock")]),e._v(", "),a("code",[e._v("EndBlock")]),e._v(", "),a("code",[e._v("Commit")]),e._v(", "),a("code",[e._v("DeliverTx")]),e._v(" steps\nwhile executing block. This doc proposes merging this steps into one "),a("code",[e._v("DeliverBlock")]),e._v("\nstep. It will allow developers of applications to decide how they want to\nexecute transactions (in parallel or consequentially). Also it will simplify and\nspeed up communications between application and Tendermint.")]),e._v(" "),a("p",[e._v("As @jaekwon "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2901#issuecomment-477746128",target:"_blank",rel:"noopener noreferrer"}},[e._v("mentioned"),a("OutboundLink")],1),e._v("\nin discussion not all application will benefit from this solution. In some cases,\nwhen application handles transaction consequentially, it way slow down the blockchain,\nbecause it need to wait until full block is transmitted to application to start\nprocessing it. Also, in the case of complete change of ABCI, we need to force all the apps\nto change their implementation completely. That's why I propose to introduce one more ABCI\ntype.")]),e._v(" "),a("h1",{attrs:{id:"implementation-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-changes"}},[e._v("#")]),e._v(" Implementation Changes")]),e._v(" "),a("p",[e._v("In addition to default application interface which now have this structure")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBsaWNhdGlvbiBpbnRlcmZhY2UgewogICAgLy8gSW5mbyBhbmQgTWVtcG9vbCBtZXRob2RzLi4uCgogICAgLy8gQ29uc2Vuc3VzIENvbm5lY3Rpb24KICAgIEluaXRDaGFpbihSZXF1ZXN0SW5pdENoYWluKSBSZXNwb25zZUluaXRDaGFpbiAgICAvLyBJbml0aWFsaXplIGJsb2NrY2hhaW4gd2l0aCB2YWxpZGF0b3JzIGFuZCBvdGhlciBpbmZvIGZyb20gVGVuZGVybWludENvcmUKICAgIEJlZ2luQmxvY2soUmVxdWVzdEJlZ2luQmxvY2spIFJlc3BvbnNlQmVnaW5CbG9jayAvLyBTaWduYWxzIHRoZSBiZWdpbm5pbmcgb2YgYSBibG9jawogICAgRGVsaXZlclR4KHR4IFtdYnl0ZSkgUmVzcG9uc2VEZWxpdmVyVHggICAgICAgICAgIC8vIERlbGl2ZXIgYSB0eCBmb3IgZnVsbCBwcm9jZXNzaW5nCiAgICBFbmRCbG9jayhSZXF1ZXN0RW5kQmxvY2spIFJlc3BvbnNlRW5kQmxvY2sgICAgICAgLy8gU2lnbmFscyB0aGUgZW5kIG9mIGEgYmxvY2ssIHJldHVybnMgY2hhbmdlcyB0byB0aGUgdmFsaWRhdG9yIHNldAogICAgQ29tbWl0KCkgUmVzcG9uc2VDb21taXQgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1pdCB0aGUgc3RhdGUgYW5kIHJldHVybiB0aGUgYXBwbGljYXRpb24gTWVya2xlIHJvb3QgaGFzaAp9Cg=="}}),e._v(" "),a("p",[e._v("this doc proposes to add one more:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBsaWNhdGlvbiBpbnRlcmZhY2UgewogICAgLy8gSW5mbyBhbmQgTWVtcG9vbCBtZXRob2RzLi4uCgogICAgLy8gQ29uc2Vuc3VzIENvbm5lY3Rpb24KICAgIEluaXRDaGFpbihSZXF1ZXN0SW5pdENoYWluKSBSZXNwb25zZUluaXRDaGFpbiAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBibG9ja2NoYWluIHdpdGggdmFsaWRhdG9ycyBhbmQgb3RoZXIgaW5mbyBmcm9tIFRlbmRlcm1pbnRDb3JlCiAgICBEZWxpdmVyQmxvY2soUmVxdWVzdERlbGl2ZXJCbG9jaykgUmVzcG9uc2VEZWxpdmVyQmxvY2sgIC8vIERlbGl2ZXIgZnVsbCBibG9jawogICAgQ29tbWl0KCkgUmVzcG9uc2VDb21taXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21taXQgdGhlIHN0YXRlIGFuZCByZXR1cm4gdGhlIGFwcGxpY2F0aW9uIE1lcmtsZSByb290IGhhc2gKfQoKdHlwZSBSZXF1ZXN0RGVsaXZlckJsb2NrIHN0cnVjdCB7CiAgICBIYXNoICAgICAgICAgICAgICAgICBbXWJ5dGUKICAgIEhlYWRlciAgICAgICAgICAgICAgIEhlYWRlcgogICAgVHhzICAgICAgICAgICAgICAgICAgVHhzCiAgICBMYXN0Q29tbWl0SW5mbyAgICAgICBMYXN0Q29tbWl0SW5mbwogICAgQnl6YW50aW5lVmFsaWRhdG9ycyAgW11FdmlkZW5jZQp9Cgp0eXBlIFJlc3BvbnNlRGVsaXZlckJsb2NrIHN0cnVjdCB7CiAgICBWYWxpZGF0b3JVcGRhdGVzICAgICAgW11WYWxpZGF0b3JVcGRhdGUKICAgIENvbnNlbnN1c1BhcmFtVXBkYXRlcyAqQ29uc2Vuc3VzUGFyYW1zCiAgICBUYWdzICAgICAgICAgICAgICAgICAgW11rdi5QYWlyCiAgICBUeFJlc3VsdHMgICAgICAgICAgICAgW11SZXNwb25zZURlbGl2ZXJUeAp9Cgo="}}),e._v(" "),a("p",[e._v("Also, we will need to add new config param, which will specify what kind of ABCI application uses.\nFor example, it can be "),a("code",[e._v("abci_type")]),e._v(". Then we will have 2 types:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("advanced")]),e._v(" - current ABCI")]),e._v(" "),a("li",[a("code",[e._v("simple")]),e._v(" - proposed implementation")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("In review")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("much simpler introduction and tutorials for new developers (instead of implementing 5 methods whey\nwill need to implement only 3)")]),e._v(" "),a("li",[e._v("txs can be handled in parallel")]),e._v(" "),a("li",[e._v("simpler interface")]),e._v(" "),a("li",[e._v("faster communications between Tendermint and application")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Tendermint should now support 2 kinds of ABCI")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);