module.exports = {"VERSION":"1.0.0","TestDAI":{"raw":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event","signature":"0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event","signature":"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event","signature":"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa217fddf"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd5391393"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe63ab1e9"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79cc6790"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x248a9ca3"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9010d07c"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xca15c873"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f2ff15d"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x91d14854"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8456cb59"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5c975abb"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x36568abe"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd547741f"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3f4ba83a"}]},"address":{"development":"0x7Cdcd618ed5b00302D52Ea8d33d9fF246ab70e33"}},"DocumentAnchoring":{"raw":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"tokenURI","type":"string"},{"indexed":false,"internalType":"uint256","name":"anchorId","type":"uint256"}],"name":"RequestMinting","type":"event","signature":"0xa80c7d6d2d07f8bb5eec657b8d7c4b324f0858cbdd14cea252619ab61afe3a92"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"tokenURI","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"SelfMinted","type":"event","signature":"0x2fba0a5a0542aa8564b567a38d6232d6e463eae72ffb8004484a0f4b036296b9"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minterDocumentRequestCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2aa222c8"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minterDocumentRequests","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"userDid","type":"string"},{"internalType":"address","name":"toMinter","type":"address"},{"internalType":"string","name":"toMinterDid","type":"string"},{"internalType":"string","name":"documentURI","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18030e7d"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"string","name":"minterDid","type":"string"},{"internalType":"string","name":"userDid","type":"string"},{"internalType":"bool","name":"selfMint","type":"bool"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"requestMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa0599ace"}]},"address":{"development":"0xb338946779DF4bfce35A1513B53862a289e1C3c1"}},"NFTFactory":{"raw":{"abi":[{"inputs":[{"internalType":"address","name":"dai","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"string","name":"name","type":"string"},{"indexed":true,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"address","name":"paymentAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"feeStructure","type":"uint256"}],"name":"MinterCreated","type":"event","signature":"0x2deb9df066602edaaf1bb754f4c77c4f0d3bbfa18f2dfbfda2a12f0879f37079"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"}],"name":"MinterRemoved","type":"event","signature":"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"Withdrawn","type":"event","signature":"0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5"},{"inputs":[],"name":"daiToken","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xbe22f546"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setProtocolFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x787dce3d"},{"inputs":[],"name":"getProtocolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xa5a41031"},{"inputs":[{"internalType":"address payable","name":"payee","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x51cff8d9"},{"inputs":[{"internalType":"address payable","name":"payee","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3aeac4e1"},{"inputs":[{"internalType":"bytes","name":"name","type":"bytes"},{"internalType":"bytes","name":"symbol","type":"bytes"},{"internalType":"address","name":"paymentAddress","type":"address"},{"internalType":"uint256","name":"feeStructure","type":"uint256"}],"name":"createMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x479a1c93"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06661abd"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"get","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9507d39a"}]},"address":{"development":"0x8f9C05b16B6693F3235446D1d9F3F32d4e146a58"}}}