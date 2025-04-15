import{TweetNode as e,$isTweetNode as t,$createTweetNode as n}from"../nodes/embeds/tweet-node.js";var r={dependencies:[e],export:function(e){return t(e)?'<tweet id="'.concat(e.getId(),'" />'):null},regExp:/<tweet id="([^"]+?)"\s?\/>\s?$/,replace:function(e,t,r){var o=r[1],d=n(o);e.replace(d)},type:"element"};export{r as TWEET};
//# sourceMappingURL=markdown-tweet-transformer.js.map
