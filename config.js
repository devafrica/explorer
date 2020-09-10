var api = 'http://51.15.120.178:13281';
var donationAddress = "";
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'cpa';
var refreshDelay = 30000;
// pools stats by CPA Coin
//NB do not include / at the end of url
var networkStat = {
 "cpa": [
["pool.cryptopay.org.za", "https://pool.cryptopay.org.za:8119"],
["cpa.thepiratemine.nl", "https://cpa.piratepools.nl:2887"],
["miningcache.com", "https://miningcache.com:8119"],
["cpa.cryptocoins-digging.space", "https://cpa.cryptocoins-digging.space:8119"],
["cpa.thecoinsmining.com", "https://cpa.thecoinsmining.com:8119"],
["cpa.cnhub.de", "http://cpa.cnhub.de:8127"],
["cpa.multiminer.us", "https://cpa.multiminer.us:8119"],
["cpa.cryptomine.cx", "https://cpa.cryptomine.cx:8001"],
["cpa.optimusblue.com","https://cpa.optimusblue.com:8129"],
["cpa.youpool.io","http://cpa.youpool.io:8135"]
 ]
};

var networkStat2 = {
  "cpa": [
    ["cpa.romining.farm", "https://cpa.romining.farm/api"],

  ]
};

