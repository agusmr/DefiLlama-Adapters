const { sumTokensExport } = require("../helper/unwrapLPs");
const tokens = {
  "WBNB": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  "ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  "BTCB": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  "DAI": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "USDC": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  "USDT": "0x55d398326f99059fF775485246999027B3197955",
  "BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
};
const POOL_DIAMOND_CONTRACT = "0xeA6d51c82a551ea66Bd5D0DE71C19356179DdaaE";

async function calAlperpTvl(chain, block) {
  return sumTokensExport({
    owner: POOL_DIAMOND_CONTRACT,
    tokens: Object.values(tokens),
    chain: chain,
  })
}

module.exports = {
  calAlperpTvl,
};
