(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{761:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pbts-protocol-specification-first-draft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-protocol-specification-first-draft"}},[e._v("#")]),e._v(" PBTS: Protocol Specification (first draft)")]),e._v(" "),s("p",[e._v("This specification is "),s("strong",[e._v("OUTDATED")]),e._v(". Please refer to the "),s("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/pbts-algorithm_002_draft.html"}},[e._v("new version")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"updated-consensus-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated-consensus-algorithm"}},[e._v("#")]),e._v(" Updated Consensus Algorithm")]),e._v(" "),s("h3",{attrs:{id:"outline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),s("p",[e._v("The algorithm in the "),s("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),s("OutboundLink")],1),e._v(" evaluates rules of the received messages without making explicit how these messages are received. In our solution, we will make some message filtering explicit. We will assume that there are message reception steps (where messages are received and possibly stored locally for later evaluation of rules) and processing steps (the latter roughly as described in a way similar to the pseudo code of the arXiv paper).")]),e._v(" "),s("p",[e._v("In contrast to the original algorithm the field "),s("code",[e._v("proposal")]),e._v(" in the "),s("code",[e._v("PROPOSE")]),e._v(" message is a pair "),s("code",[e._v("(v, time)")]),e._v(", of the proposed consensus value "),s("code",[e._v("v")]),e._v(" and the proposed time "),s("code",[e._v("time")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"pbts-reception-step-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-reception-step-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-RECEPTION-STEP.0]")])]),e._v(" "),s("p",[e._v("In the reception step at process "),s("code",[e._v("p")]),e._v(" at local time "),s("code",[e._v("now_p")]),e._v(", upon receiving a message "),s("code",[e._v("m")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("if the message "),s("code",[e._v("m")]),e._v(" is of type "),s("code",[e._v("PROPOSE")]),e._v(" and satisfies "),s("code",[e._v("now_p - PRECISION < m.time < now_p + PRECISION + MSGDELAY")]),e._v(", then mark the message as "),s("code",[e._v("timely")])])]),e._v(" "),s("blockquote",[s("p",[e._v("if "),s("code",[e._v("m")]),e._v(" does not satisfy the constraint consider it "),s("code",[e._v("untimely")])])]),e._v(" "),s("h4",{attrs:{id:"pbts-processing-step-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-processing-step-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-PROCESSING-STEP.0]")])]),e._v(" "),s("p",[e._v("In the processing step, based on the messages stored, the rules of the algorithms are\nexecuted. Note that the processing step only operates on messages\nfor the current height. The consensus algorithm rules are defined by the following updates to arXiv paper.")]),e._v(" "),s("h4",{attrs:{id:"new-startround"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-startround"}},[e._v("#")]),e._v(" New "),s("code",[e._v("StartRound")])]),e._v(" "),s("p",[e._v("There are two additions")]),e._v(" "),s("ul",[s("li",[e._v("in case the proposer's local time is smaller than the time of the previous block, the proposer waits until this is not the case anymore (to ensure the block time is monotonically increasing)")]),e._v(" "),s("li",[e._v("the proposer sends its time "),s("code",[e._v("now_p")]),e._v(" as part of its proposal")])]),e._v(" "),s("p",[e._v("We update the timeout for the "),s("code",[e._v("PROPOSE")]),e._v(" step according to the following reasoning:")]),e._v(" "),s("ul",[s("li",[e._v("If a correct proposer needs to wait to make sure its proposed time is larger than the "),s("code",[e._v("blockTime")]),e._v(" of the previous block, then it sends by realtime "),s("code",[e._v("blockTime + ACCURACY")]),e._v(" (By this time, its local clock must exceed "),s("code",[e._v("blockTime")]),e._v(")")]),e._v(" "),s("li",[e._v("the receiver will receive a "),s("code",[e._v("PROPOSE")]),e._v(" message by "),s("code",[e._v("blockTime + ACCURACY + MSGDELAY")])]),e._v(" "),s("li",[e._v("the receiver's local clock will be "),s("code",[e._v("<= blockTime + 2 * ACCURACY + MSGDELAY")])]),e._v(" "),s("li",[e._v("thus when the receiver "),s("code",[e._v("p")]),e._v(" enters this round it can set its timeout to a value "),s("code",[e._v("waitingTime => blockTime + 2 * ACCURACY + MSGDELAY - now_p")])])]),e._v(" "),s("p",[e._v("So we should set the timeout to "),s("code",[e._v("max(timeoutPropose(round_p), waitingTime)")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("If, in the future, a block delay parameter "),s("code",[e._v("BLOCKDELAY")]),e._v(" is introduced, this means\nthat the proposer should wait for "),s("code",[e._v("now_p > blockTime + BLOCKDELAY")]),e._v(" before sending a "),s("code",[e._v("PROPOSE")]),e._v(" message.\nAlso, "),s("code",[e._v("BLOCKDELAY")]),e._v(" needs to be added to "),s("code",[e._v("waitingTime")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"pbts-alg-startround-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-startround-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-ALG-STARTROUND.0]")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gU3RhcnRSb3VuZChyb3VuZCkgewogIGJsb2NrVGltZSDihpAgYmxvY2sgdGltZSBvZiBibG9jayBoX3AgLSAxCiAgd2FpdGluZ1RpbWUg4oaQIGJsb2NrVGltZSArIDIgKiBBQ0NVUkFDWSArIE1TR0RFTEFZIC0gbm93X3AKICByb3VuZF9wIOKGkCByb3VuZAogIHN0ZXBfcCDihpAgcHJvcG9zZQogIGlmIHByb3Bvc2VyKGhfcCwgcm91bmRfcCkgPSBwIHsKICAgIHdhaXQgdW50aWwgbm93X3AgJmd0OyBibG9ja1RpbWUgLy8gbmV3IHdhaXQgY29uZGl0aW9uCiAgICBpZiB2YWxpZFZhbHVlX3AgIT0gbmlsIHsKICAgICAgcHJvcG9zYWwg4oaQICh2YWxpZFZhbHVlX3AsIG5vd19wKSAvLyBhZGRlZCAmcXVvdDtub3dfcCZxdW90OwogICAgfQogICAgZWxzZSB7CiAgICAgIHByb3Bvc2FsIOKGkCAoZ2V0VmFsdWUoKSwgbm93X3ApICAgLy8gYWRkZWQgJnF1b3Q7bm93X3AmcXVvdDsKICAgIH0KICAgIGJyb2FkY2FzdCDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCBwcm9wb3NhbCwgdmFsaWRSb3VuZF9w4p+pCiAgfQogIGVsc2UgewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJvcG9zZShoX3Ascm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgbWF4KHRpbWVvdXRQcm9wb3NlKHJvdW5kX3ApLCB3YWl0aW5nVGltZSkKICB9Cn0K"}}),e._v(" "),s("h4",{attrs:{id:"new-rule-replacing-lines-22-27"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-rule-replacing-lines-22-27"}},[e._v("#")]),e._v(" New Rule Replacing Lines 22 - 27")]),e._v(" "),s("ul",[s("li",[e._v("a validator prevotes for the consensus value "),s("code",[e._v("v")]),e._v(" "),s("strong",[e._v("and")]),e._v(" the time "),s("code",[e._v("t")])]),e._v(" "),s("li",[e._v("the code changes as the "),s("code",[e._v("PROPOSAL")]),e._v(" message carries time (while "),s("code",[e._v("lockedValue")]),e._v(" does not)")])]),e._v(" "),s("h4",{attrs:{id:"pbts-alg-upon-prop-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-upon-prop-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-ALG-UPON-PROP.0]")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgKHYsdCksIOKIkjHin6kpIGZyb20gcHJvcG9zZXIoaF9wLCByb3VuZF9wKSB3aGlsZSBzdGVwX3AgPSBwcm9wb3NlIGRvIHsKICBpZiB2YWxpZCh2KSDiiKcgKGxvY2tlZFJvdW5kX3AgPSDiiJIxIOKIqCBsb2NrZWRWYWx1ZV9wID0gdikgewogICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgaWQodix0KeKfqSAKICB9CiAgZWxzZSB7CiAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgfQogIHN0ZXBfcCDihpAgcHJldm90ZQp9Cg=="}}),e._v(" "),s("h4",{attrs:{id:"new-rule-replacing-lines-28-33"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-rule-replacing-lines-28-33"}},[e._v("#")]),e._v(" New Rule Replacing Lines 28 - 33")]),e._v(" "),s("p",[e._v("In case consensus is not reached in round 1, in "),s("code",[e._v("StartRound")]),e._v(" the proposer of future rounds may propose the same value but with a different time.\nThus, the time "),s("code",[e._v("tprop")]),e._v(" in the "),s("code",[e._v("PROPOSAL")]),e._v(" message need not match the time "),s("code",[e._v("tvote")]),e._v(" in the (old) "),s("code",[e._v("PREVOTE")]),e._v(" messages.\nA validator may send "),s("code",[e._v("PREVOTE")]),e._v(" for the current round as long as the value "),s("code",[e._v("v")]),e._v(" matches.\nThis gives the following rule:")]),e._v(" "),s("h4",{attrs:{id:"pbts-alg-old-prevote-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-old-prevote-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-ALG-OLD-PREVOTE.0]")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgKHYsIHRwcm9wKSwgdnLin6kpIGZyb20gcHJvcG9zZXIoaF9wLCByb3VuZF9wKSBBTkQgMmYgKyAxIOKfqFBSRVZPVEUsIGhfcCwgdnIsIGlkKCh2LCB0dm90ZSnin6kgCndoaWxlIHN0ZXBfcCA9IHByb3Bvc2Ug4oinICh2ciDiiaUgMCDiiKcgdnIgJmx0OyByb3VuZF9wKSBkbyB7CiAgaWYgdmFsaWQodikg4oinIChsb2NrZWRSb3VuZF9wIOKJpCB2ciDiiKggbG9ja2VkVmFsdWVfcCA9IHYpIHsKICAgIGJyb2FkY2FzdCDin6hQUkVWT1RFLCBoX3AsIHJvdW5kcCwgaWQodiwgdHByb3Ap4p+pCiAgfQogIGVsc2UgewogICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhwLCByb3VuZHAsIG5pbOKfqQogIH0KICBzdGVwX3Ag4oaQIHByZXZvdGUKfQo="}}),e._v(" "),s("h4",{attrs:{id:"new-rule-replacing-lines-36-43"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-rule-replacing-lines-36-43"}},[e._v("#")]),e._v(" New Rule Replacing Lines 36 - 43")]),e._v(" "),s("ul",[s("li",[e._v("As above, in the following "),s("code",[e._v("(v,t)")]),e._v(" is part of the message rather than "),s("code",[e._v("v")])]),e._v(" "),s("li",[e._v("the stored values (i.e., "),s("code",[e._v("lockedValue")]),e._v(", "),s("code",[e._v("validValue")]),e._v(") do not contain the time")])]),e._v(" "),s("h4",{attrs:{id:"pbts-alg-new-prevote-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-new-prevote-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-ALG-NEW-PREVOTE.0]")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgKHYsdCksIOKIl+KfqSkgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApIEFORCAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBpZCh2LHQp4p+pIHdoaWxlIHZhbGlkKHYpIOKIpyBzdGVwX3Ag4omlIHByZXZvdGUgZm9yIHRoZSBmaXJzdCB0aW1lIGRvIHsKICBpZiBzdGVwX3AgPSBwcmV2b3RlIHsKICAgIGxvY2tlZFZhbHVlX3Ag4oaQIHYKICAgIGxvY2tlZFJvdW5kX3Ag4oaQIHJvdW5kX3AKICAgIGJyb2FkY2FzdCDin6hQUkVDT01NSVQsIGhfcCwgcm91bmRfcCwgaWQodix0KSnin6kgCiAgICBzdGVwX3Ag4oaQIHByZWNvbW1pdAogIH0KICB2YWxpZFZhbHVlX3Ag4oaQIHYgCiAgdmFsaWRSb3VuZF9wIOKGkCByb3VuZF9wCn0K"}}),e._v(" "),s("h4",{attrs:{id:"new-rule-replacing-lines-49-54"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-rule-replacing-lines-49-54"}},[e._v("#")]),e._v(" New Rule Replacing Lines 49 - 54")]),e._v(" "),s("ul",[s("li",[e._v("we decide on "),s("code",[e._v("v")]),e._v(" as well as on the time from the proposal message")]),e._v(" "),s("li",[e._v("here we do not care whether the proposal was received timely.")])]),e._v(" "),s("blockquote",[s("p",[e._v("In particular we need to take care of the case where the proposer is untimely to one correct validator only. We need to ensure that this validator decides if all decide.")])]),e._v(" "),s("h4",{attrs:{id:"pbts-alg-decide-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-decide-0"}},[e._v("#")]),e._v(" "),s("strong",[e._v("[PBTS-ALG-DECIDE.0]")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCAodix0KSwg4oiX4p+pIGZyb20gcHJvcG9zZXIoaF9wLCByKSBBTkQgMmYgKyAxIOKfqFBSRUNPTU1JVCwgaF9wLCByLCBpZCh2LHQp4p+pIHdoaWxlIGRlY2lzaW9ucFtoX3BdID0gbmlsIGRvIHsKICBpZiB2YWxpZCh2KSB7CiAgICBkZWNpc2lvbl9wIFtoX3BdID0gKHYsdCkgLy8gZGVjaWRlIG9uIHRpbWUgdG9vCiAgICBoX3Ag4oaQIGhfcCArIDEKICAgIHJlc2V0IGxvY2tlZFJvdW5kX3AgLCBsb2NrZWRWYWx1ZV9wLCB2YWxpZFJvdW5kX3AgYW5kIHZhbGlkVmFsdWVfcCB0byBpbml0aWFsIHZhbHVlcyBhbmQgZW1wdHkgbWVzc2FnZSBsb2cgCiAgICBTdGFydFJvdW5kKDApCiAgfQp9Cg=="}}),e._v(" "),s("p",[s("strong",[e._v("All other rules remains unchanged.")])]),e._v(" "),s("p",[e._v("Back to "),s("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts_001_draft.html"}},[e._v("main document")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);