var api = 'https://node.cryptopay.org.za';
var donationAddress = "";
var blockTargetInterval = 90;
var coinUnits = 1000000;
var totalSupply =  850000000000; // enter the total supply in atomic units
var symbol = 'cpa';
var refreshDelay = 30000;
// pools stats by CPA Coin
//NB do not include / at the end of url
var networkStat = {
 "cpa": [
["poolparty.cryptopay.org.za", "https://partystats.cryptopay.org.za"],
["cpa.letshash.online","https://letshash.online:15094/live_stats"],
["cpacoin.my-mining-pool.de", "https://apicpacoin.my-mining-pool.de"],
["newpool.pw/cpa", "https://minenice.newpool.pw:8215/stats"]
//["cpa.cryptocoins-digging.space", "https://cpa.cryptocoins-digging.space:8119"],
//["cpa.thecoinsmining.com", "https://cpa.thecoinsmining.com:8119"],
//["cpa.cnhub.de", "http://cpa.cnhub.de:8127"],
//["cpa.multiminer.us", "https://cpa.multiminer.us:8119"],
//["cpa.cryptomine.cx", "https://cpa.cryptomine.cx:8001"],
//["cpa.optimusblue.com","https://cpa.optimusblue.com:8129"],
//["cpa.youpool.io","http://cpa.youpool.io:8135"]
 ]
};

var networkStat2 = {
  "cpa": [
//["letshash.it/cpa/","https://letshash.it:8273/"],
//["cpacoin.my-mining-pool.de", "https://apicpacoin.my-mining-pool.de/"]

  ]
};

