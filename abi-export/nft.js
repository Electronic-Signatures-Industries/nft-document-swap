module.exports = {"VERSION":"1.0.0","USDC":{"raw":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event","signature":"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event","signature":"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event","signature":"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa217fddf"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd5391393"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe63ab1e9"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79cc6790"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x248a9ca3"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9010d07c"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xca15c873"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f2ff15d"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x91d14854"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8456cb59"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5c975abb"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x36568abe"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd547741f"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3f4ba83a"}]},"address":{"bsctestnet":"0x6D34c8664EB37955C6D482Fa1bF7E4cD1ab80E3F","development":"0x01A997BAB879Ada19E2Faa8c0799e55F6f5060E3"}},"XDV":{"raw":{"abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5c975abb"},{"inputs":[],"name":"platformOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4df8ccb1"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[],"name":"stablecoin","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe9cbd822"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedMinters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xed1e0085"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"setPlatformOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x54daabc3"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"setWhitelistedMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa466d6f1"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xd0def521"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"}]},"address":{"bsctestnet":"0x6c4261F36437f401638A628BDBf95c0955F81289","development":"0x594c3A140Bb5174c9fcB1785D61Db64186051973"}},"XDVController":{"raw":{"abi":[{"inputs":[{"internalType":"address","name":"stablecoin","type":"address"},{"internalType":"address","name":"xdv","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"string","name":"userDid","type":"string"},{"indexed":false,"internalType":"string","name":"documentURI","type":"string"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"DocumentAnchored","type":"event","signature":"0x0a007e579f0793671747216eab1061026d102ff0f66e876d2edaa6277ad53e66"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"MinterRegistered","type":"event","signature":"0xc3e23a3b0e2f891d627c5255e8f6d7d84b478d704b83bd597bd36d83d43b2404"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"Withdrawn","type":"event","signature":"0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dataProviderMinters","outputs":[{"internalType":"address","name":"minterAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"paymentAddress","type":"address"},{"internalType":"bool","name":"hasUserKyc","type":"bool"},{"internalType":"uint256","name":"feeStructure","type":"uint256"},{"internalType":"uint256","name":"created","type":"uint256"},{"internalType":"uint256","name":"serviceFee","type":"uint256"},{"internalType":"address","name":"factoryAddress","type":"address"},{"internalType":"bool","name":"enabled","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x967426ff"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minterCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x761901bb"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minterDocumentRequestCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2aa222c8"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"minterDocumentRequests","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"userDid","type":"string"},{"internalType":"address","name":"toMinter","type":"address"},{"internalType":"string","name":"toMinterDid","type":"string"},{"internalType":"string","name":"documentURI","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6efaa699"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xfc0c546a"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setProtocolFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x787dce3d"},{"inputs":[],"name":"getProtocolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xa5a41031"},{"inputs":[{"internalType":"address payable","name":"payee","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x51cff8d9"},{"inputs":[{"internalType":"address payable","name":"payee","type":"address"},{"internalType":"address","name":"erc20token","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3aeac4e1"},{"inputs":[{"internalType":"string","name":"minterDid","type":"string"},{"internalType":"address","name":"minterAddress","type":"address"},{"internalType":"string","name":"userDid","type":"string"},{"internalType":"string","name":"documentURI","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"requestDataProviderService","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xf83d360d"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"dataProvider","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0x9acd083e"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256","name":"dataProviderId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x05a10028"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"paymentAddress","type":"address"},{"internalType":"bool","name":"userHasKyc","type":"bool"},{"internalType":"uint256","name":"feeStructure","type":"uint256"}],"name":"registerMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xad8175d7"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06661abd"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"get","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9507d39a"}]},"address":{"bsctestnet":"0xb56B526fc7fA869320C4d44719180f2201736357","development":"0x47EA19E6789fb889757bcea36614E1533Ca91eFd"}}}