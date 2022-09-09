(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{723:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This is a quick start guide. If you have a vague idea about how Tendermint\nworks and want to get started right away, continue.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("h3",{attrs:{id:"quick-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-install"}},[t._v("#")]),t._v(" Quick Install")]),t._v(" "),a("p",[t._v("To quickly get Tendermint installed on a fresh\nUbuntu 16.04 machine, use "),a("a",{attrs:{href:"https://git.io/fFfOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("this script"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("⚠️ Do not copy scripts to run on your machine without knowing what they do.")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtTCBodHRwczovL2dpdC5pby9mRmZPUiB8IGJhc2gKc291cmNlIH4vLnByb2ZpbGUK"}}),t._v(" "),a("p",[t._v("The script is also used to facilitate cluster deployment below.")]),t._v(" "),a("h3",{attrs:{id:"manual-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-install"}},[t._v("#")]),t._v(" Manual Install")]),t._v(" "),a("p",[t._v("For manual installation, see the "),a("RouterLink",{attrs:{to:"/introduction/install.html"}},[t._v("install instructions")])],1),t._v(" "),a("h2",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),a("p",[t._v("Running:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBpbml0Cg=="}}),t._v(" "),a("p",[t._v("will create the required files for a single, local node.")]),t._v(" "),a("p",[t._v("These files are found in "),a("code",[t._v("$HOME/.tendermint")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAkSE9NRS8udGVuZGVybWludAoKY29uZmlnICBkYXRhCgokIGxzICRIT01FLy50ZW5kZXJtaW50L2NvbmZpZy8KCmNvbmZpZy50b21sICBnZW5lc2lzLmpzb24gIG5vZGVfa2V5Lmpzb24gIHByaXZfdmFsaWRhdG9yLmpzb24K"}}),t._v(" "),a("p",[t._v("For a single, local node, no further configuration is required.\nConfiguring a cluster is covered further below.")]),t._v(" "),a("h2",{attrs:{id:"local-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-node"}},[t._v("#")]),t._v(" Local Node")]),t._v(" "),a("p",[t._v("Start Tendermint with a simple in-process application:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBub2RlIC0tcHJveHlfYXBwPWt2c3RvcmUK"}}),t._v(" "),a("blockquote",[a("p",[t._v("Note: "),a("code",[t._v("kvstore")]),t._v(" is a non persistent app, if you would like to run an application with persistence run "),a("code",[t._v("--proxy_app=persistent_kvstore")])])]),t._v(" "),a("p",[t._v("and blocks will start to stream in:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SVswMS0wNnwwMTo0NToxNS41OTJdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MSB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzAxLTA2fDAxOjQ1OjE1LjYyNF0gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD0xIHR4cz0wIGFwcEhhc2g9Cg=="}}),t._v(" "),a("p",[t._v("Check the status with:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyBsb2NhbGhvc3Q6MjY2NTcvc3RhdHVzCg=="}}),t._v(" "),a("h3",{attrs:{id:"sending-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-transactions"}},[t._v("#")]),t._v(" Sending Transactions")]),t._v(" "),a("p",[t._v("With the KVstore app running, we can send transactions:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7YWJjZCZxdW90OycK"}}),t._v(" "),a("p",[t._v("and check that it worked with:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDthYmNkJnF1b3Q7Jwo="}}),t._v(" "),a("p",[t._v("We can send transactions with a key and value too:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7bmFtZT1zYXRvc2hpJnF1b3Q7Jwo="}}),t._v(" "),a("p",[t._v("and query the key:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDtuYW1lJnF1b3Q7Jwo="}}),t._v(" "),a("p",[t._v("where the value is returned in hex.")]),t._v(" "),a("h2",{attrs:{id:"cluster-of-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-of-nodes"}},[t._v("#")]),t._v(" Cluster of Nodes")]),t._v(" "),a("p",[t._v("First create four Ubuntu cloud machines. The following was tested on Digital\nOcean Ubuntu 16.04 x64 (3GB/1CPU, 20GB SSD). We'll refer to their respective IP\naddresses below as IP1, IP2, IP3, IP4.")]),t._v(" "),a("p",[t._v("Then, "),a("code",[t._v("ssh")]),t._v(" into each machine, and execute "),a("a",{attrs:{href:"https://git.io/fFfOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("this script"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtTCBodHRwczovL2dpdC5pby9mRmZPUiB8IGJhc2gKc291cmNlIH4vLnByb2ZpbGUK"}}),t._v(" "),a("p",[t._v("This will install "),a("code",[t._v("go")]),t._v(" and other dependencies, get the Tendermint source code, then compile the "),a("code",[t._v("tendermint")]),t._v(" binary.")]),t._v(" "),a("p",[t._v("Next, use the "),a("code",[t._v("tendermint testnet")]),t._v(" command to create four directories of config files (found in "),a("code",[t._v("./mytestnet")]),t._v(") and copy each directory to the relevant machine in the cloud, so that each machine has "),a("code",[t._v("$HOME/mytestnet/node[0-3]")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("Before you can start the network, you'll need peers identifiers (IPs are not enough and can change). We'll refer to them as ID1, ID2, ID3, ID4.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzaG93X25vZGVfaWQgLS1ob21lIC4vbXl0ZXN0bmV0L25vZGUwCnRlbmRlcm1pbnQgc2hvd19ub2RlX2lkIC0taG9tZSAuL215dGVzdG5ldC9ub2RlMQp0ZW5kZXJtaW50IHNob3dfbm9kZV9pZCAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTIKdGVuZGVybWludCBzaG93X25vZGVfaWQgLS1ob21lIC4vbXl0ZXN0bmV0L25vZGUzCg=="}}),t._v(" "),a("p",[t._v("Finally, from each machine, run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBub2RlIC0taG9tZSAuL215dGVzdG5ldC9ub2RlMCAtLXByb3h5X2FwcD1rdnN0b3JlIC0tcDJwLnBlcnNpc3RlbnRfcGVlcnM9JnF1b3Q7SUQxQElQMToyNjY1NixJRDJASVAyOjI2NjU2LElEM0BJUDM6MjY2NTYsSUQ0QElQNDoyNjY1NiZxdW90Owp0ZW5kZXJtaW50IG5vZGUgLS1ob21lIC4vbXl0ZXN0bmV0L25vZGUxIC0tcHJveHlfYXBwPWt2c3RvcmUgLS1wMnAucGVyc2lzdGVudF9wZWVycz0mcXVvdDtJRDFASVAxOjI2NjU2LElEMkBJUDI6MjY2NTYsSUQzQElQMzoyNjY1NixJRDRASVA0OjI2NjU2JnF1b3Q7CnRlbmRlcm1pbnQgbm9kZSAtLWhvbWUgLi9teXRlc3RuZXQvbm9kZTIgLS1wcm94eV9hcHA9a3ZzdG9yZSAtLXAycC5wZXJzaXN0ZW50X3BlZXJzPSZxdW90O0lEMUBJUDE6MjY2NTYsSUQyQElQMjoyNjY1NixJRDNASVAzOjI2NjU2LElENEBJUDQ6MjY2NTYmcXVvdDsKdGVuZGVybWludCBub2RlIC0taG9tZSAuL215dGVzdG5ldC9ub2RlMyAtLXByb3h5X2FwcD1rdnN0b3JlIC0tcDJwLnBlcnNpc3RlbnRfcGVlcnM9JnF1b3Q7SUQxQElQMToyNjY1NixJRDJASVAyOjI2NjU2LElEM0BJUDM6MjY2NTYsSUQ0QElQNDoyNjY1NiZxdW90Owo="}}),t._v(" "),a("p",[t._v("Note that after the third node is started, blocks will start to stream in\nbecause >2/3 of validators (defined in the "),a("code",[t._v("genesis.json")]),t._v(") have come online.\nPersistent peers can also be specified in the "),a("code",[t._v("config.toml")]),t._v(". See "),a("RouterLink",{attrs:{to:"/tendermint-core/configuration.html"}},[t._v("here")]),t._v(" for more information about configuration options.")],1),t._v(" "),a("p",[t._v("Transactions can then be sent as covered in the single, local node example above.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);