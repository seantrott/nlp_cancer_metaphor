
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"112",
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(a instanceof HTMLElement){for(var d=[];a.nodeType===Node.ELEMENT_NODE;){var c=a.nodeName;if(a.id)c+=\"#\"+a.id;else{var b=a;for(c=[];null!==b\u0026\u0026b.nodeType===Node.ELEMENT_NODE;)b:if(c.unshift(b.nodeName),\"undefined\"!==b.previousElementSibling)b=b.previousElementSibling;else{for(;b=b.previousSibling;)if(1===b.nodeType)break b;b=void 0}\"HTML\"!==c[0]\u0026\u0026(c[0]+=\":first-child\");c=c.join(\" + \")}d.unshift(c);a=a.parentNode}a=d.join(\" \\x3e \")}else a=!1;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(a instanceof Element){for(var c=[];a.nodeType===Node.ELEMENT_NODE;){var b=a.nodeName.toLowerCase();if(a.id){b+=\"#\"+a.id;c.unshift(b);break}else{for(var d=a,e=1;d=d.previousElementSibling;)d.nodeName.toLowerCase()==b\u0026\u0026e++;1!=e\u0026\u0026(b+=\":nth-of-type(\"+e+\")\")}c.unshift(b);a=a.parentNode}a=c.join(\" \\x3e \")}else a=void 0;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=\"_ga\\x3d\",d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"CID not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__k",
      "vtp_name":"passport3",
      "vtp_decodeCookie":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",8],7],"\";return a=a?\"loggedIn\":\"loggedOut\"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",10],7],"\",c=\"",["escape",["macro",11],7],"\",b=\"",["escape",["macro",12],7],"\";return a=b.match(\/.*by.* \\- GoFundMe\/ig)?\"campaign-detail\":a.match(\/.*donate$\/ig)\u0026\u0026\"GoFundMe\"==b?\"campaign-donate\":a.match(\/\\\/($|\\?.*)\/ig)?\"homepage\":c.match(\/\\\/thankyou\\?d=.*\/i)?\"donation-complete\":\"ungrouped\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",17],7],"\",purchase:{actionField:{id:\"",["escape",["macro",18],7],"\",revenue:\"",["escape",["macro",19],7],"\"},products:[{name:\"",["escape",["macro",20],7],"\",id:\"",["escape",["macro",18],7],"\",price:\"",["escape",["macro",21],7],"\",brand:\"GoFundMe\",category:\"Undefined\",variant:\"Undefined\",quantity:\"1\"}]}}};return a})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"tm"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".replace(\/(.*paid_code\";s:\\d+:\")([^\"]+)(\".*)$\/,\"$2\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Object.keys(",["escape",["macro",25],8,16],");a.forEach(function(a){switch(a){case \"impressions\":return!0;case \"detail\":return!0;case \"checkout\":return!0;case \"purchase\":return!1;default:return!1}});return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"gofundme.com"
    },{
      "function":"__c",
      "vtp_value":"63072000"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.userId"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__ctv"
    },{
      "function":"__cid"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sessionDetails.sessionId"
    },{
      "function":"__k",
      "vtp_name":"flow",
      "vtp_decodeCookie":true
    },{
      "function":"__j",
      "vtp_name":"performance.navigation.redirectCount"
    },{
      "function":"__j",
      "vtp_name":"performance.navigation.type"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.usedJSHeapSize"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.totalJSHeapSize"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.jsHeapSizeLimit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundId"
    },{
      "function":"__j",
      "vtp_name":"GFM.analytics.data.viewid"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-4"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.time\u003Espan:nth-child(1)"
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.time\u003Espan:nth-child(2)"
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundAmountRaised"
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.raised\u003Espan.goal"
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.fundphoto\u003Ea\u003Ediv.fave-sp"
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.headbar\u003Ea.loc"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.headbar\u003Ea.cat"
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__d",
      "vtp_attributeName":"data-total_shares",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__d",
      "vtp_attributeName":"data-facebook_count",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__d",
      "vtp_attributeName":"data-twitter_count",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"true",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePath"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__k",
      "vtp_name":"latestDonationAmount",
      "vtp_decodeCookie":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1",
      "vtp_name":"accountCreated"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"_gaA2.0"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__smm",
      "vtp_input":["macro",13],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key","campaign-detail","value","div.a\u003Ediv.pagetitle"],["map","key","campaign-donate","value","div.headbar\u003Ediv.camptitle"],["map","key","donation-complete","value","div.headbar\u003Ediv.camptitle"]]
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-11"
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1",
      "vtp_name":"customizeComplete"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":["macro",28],
      "vtp_useHashAutoLink":["macro",29],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",13]]],
      "vtp_autoLinkDomains":["macro",5],
      "vtp_decorateFormsAutoLink":["macro",30],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",31]],["map","fieldName","cookieDomain","value",["macro",32]],["map","fieldName","cookieExpires","value",["macro",33]],["map","fieldName","legacyHistoryImport","value",["macro",34]],["map","fieldName","userId","value",["macro",35]]],
      "vtp_enableLinkId":["macro",36],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",37]],["map","index","2","dimension",["macro",38]],["map","index","3","dimension",["macro",39]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",6]],["map","index","6","dimension",["macro",41]],["map","index","7","dimension",["macro",7]],["map","index","8","dimension",["macro",35]],["map","index","9","dimension",["macro",9]],["map","index","10","dimension",["macro",16]],["map","index","11","dimension",["macro",15]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension","pageview"],["map","index","28","dimension",["template","Rdrs:",["macro",43],",Nav:",["macro",44],",HeapUsed:",["macro",45],",HeapTotal:",["macro",46],",HeapMax:",["macro",47]]],["map","index","32","dimension",["macro",24]],["map","index","33","dimension",["macro",18]],["map","index","14","dimension",["macro",48]],["map","index","15","dimension",["macro",20]],["map","index","34","dimension",["macro",49]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",28],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"transaction",
      "vtp_eventLabel":["template","Campaign: ",["macro",20]],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",22],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",31]],["map","fieldName","cookieDomain","value",["macro",32]],["map","fieldName","cookieExpires","value",["macro",33]],["map","fieldName","legacyHistoryImport","value",["macro",34]],["map","fieldName","userId","value",["macro",35]]],
      "vtp_enableLinkId":["macro",36],
      "vtp_dimension":["list",["map","index",["macro",51],"dimension",["macro",37]],["map","index",["macro",52],"dimension",["macro",38]],["map","index",["macro",53],"dimension",["macro",39]],["map","index",["macro",54],"dimension",["macro",40]],["map","index",["macro",55],"dimension",["macro",6]],["map","index",["macro",56],"dimension",["macro",41]],["map","index",["macro",57],"dimension",["macro",7]],["map","index",["macro",58],"dimension",["macro",35]],["map","index",["macro",59],"dimension",["macro",9]],["map","index",["macro",60],"dimension","Donor"],["map","index",["macro",61],"dimension",["macro",15]],["map","index",["macro",62],"dimension",["macro",63]],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",48]],["map","index",["macro",67],"dimension",["macro",20]],["map","index",["macro",68],"dimension",["macro",42]],["map","index",["macro",69],"dimension","event"],["map","index",["macro",70],"dimension",["macro",71]],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",77]],["map","index",["macro",78],"dimension",["macro",79]],["map","index",["macro",80],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",83]],["map","index",["macro",84],"dimension",["macro",85]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",31]],["map","fieldName","cookieDomain","value",["macro",32]],["map","fieldName","cookieExpires","value",["macro",33]],["map","fieldName","legacyHistoryImport","value",["macro",34]],["map","fieldName","userId","value",["macro",35]]],
      "vtp_eventCategory":"Donation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Raised One Dollar",
      "vtp_eventLabel":["macro",48],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",86],
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",87],
      "vtp_useDebugVersion":["macro",28],
      "vtp_eventCategory":["macro",88],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["macro",90],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_eventValue":["macro",91],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",31]],["map","fieldName","cookieDomain","value",["macro",32]],["map","fieldName","cookieExpires","value",["macro",33]],["map","fieldName","legacyHistoryImport","value",["macro",34]],["map","fieldName","userId","value",["macro",35]]],
      "vtp_enableLinkId":["macro",36],
      "vtp_dimension":["list",["map","index",["macro",51],"dimension",["macro",37]],["map","index",["macro",52],"dimension",["macro",38]],["map","index",["macro",53],"dimension",["macro",39]],["map","index",["macro",54],"dimension",["macro",40]],["map","index",["macro",55],"dimension",["macro",6]],["map","index",["macro",56],"dimension",["macro",41]],["map","index",["macro",57],"dimension",["macro",7]],["map","index",["macro",58],"dimension",["macro",35]],["map","index",["macro",59],"dimension",["macro",9]],["map","index",["macro",60],"dimension","Donor"],["map","index",["macro",61],"dimension",["macro",15]],["map","index",["macro",62],"dimension",["macro",63]],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",48]],["map","index",["macro",67],"dimension",["macro",20]],["map","index",["macro",68],"dimension",["macro",42]],["map","index",["macro",69],"dimension","event"],["map","index",["macro",70],"dimension",["macro",71]],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",77]],["map","index",["macro",78],"dimension",["macro",79]],["map","index",["macro",80],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",83]],["map","index",["macro",84],"dimension",["macro",85]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"egQVCJLermUQgIHmxwM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",92]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":42
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"i54ZCLre9G4QgIHmxwM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":45
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"jPwDCL3e9G4QgIHmxwM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":46
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"01e0CKeq3nAQgIHmxwM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GTM",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"AccountCreated",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GTM",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"CustomizeComplete",
      "vtp_dimension":["list",["map","index",["macro",51],"dimension",["macro",37]],["map","index",["macro",52],"dimension",["macro",38]],["map","index",["macro",53],"dimension",["macro",39]],["map","index",["macro",54],"dimension",["macro",40]],["map","index",["macro",55],"dimension",["macro",6]],["map","index",["macro",56],"dimension",["macro",41]],["map","index",["macro",57],"dimension",["macro",7]],["map","index",["macro",58],"dimension",["macro",35]],["map","index",["macro",59],"dimension",["macro",9]],["map","index",["macro",66],"dimension",["macro",48]],["map","index",["macro",67],"dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":56
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Signup",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":57
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"CompleteRegistration",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":58
    },{
      "function":"__baut",
      "setup_tags":["list",["tag",36,0]],
      "once_per_event":true,
      "vtp_eventCategory":"GTM",
      "vtp_tagId":"5152667",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"AccountCreated",
      "tag_id":59
    },{
      "function":"__baut",
      "setup_tags":["list",["tag",36,0]],
      "once_per_event":true,
      "vtp_eventCategory":"GTM",
      "vtp_tagId":"5152667",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"CustomizeComplete",
      "tag_id":60
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"812505927",
      "vtp_conversionLabel":"C8PwCODpz4ABEMe2t4MD",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":61
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"812505927",
      "vtp_conversionLabel":"CjnuCKu-1IABEMe2t4MD",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"812505927",
      "vtp_conversionLabel":"J8zNCNW-1IABEMe2t4MD",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":63
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"812505927",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",86],
      "tag_id":64
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":66
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"1200",
      "vtp_uniqueTriggerId":"995711_44",
      "tag_id":71
    },{
      "function":"__cl",
      "tag_id":72
    },{
      "function":"__cl",
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"init\",\"819737484732040\"),fbq(\"track\",\"PageView\"));\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=819737484732040\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar donationAmountStash=$(\"#input_amount\").val();document.cookie=\"latestDonationAmount\\x3d\"+donationAmountStash;\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_airpr=\"478382\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"px.airpr.com\/airpr.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E0!=",["escape",["macro",71],8,16],"-",["escape",["macro",94],8,16],"\u0026\u00260!=",["escape",["macro",71],8,16],"\u0026\u0026\"undefined\"!==typeof ",["escape",["macro",71],8,16],"||dataLayer.push({event:\"raisedOneDollar\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nulgi\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nulgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nulgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{type:\"Account Created\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{type:\"Customize Complete\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"b47f9a72695942f395af96b599ffe4df\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/b47f9a72695942f395af96b599ffe4df\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "setup_tags":["list",["tag",32,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"GenerateLead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5152667\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5152667\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*\/thankyou\\?d=.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"raisedOneDollar"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/Medical-Illness-Healing"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/Sports-Teams-Clubs"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/Funerals-Memorials-Tributes"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/Education-Schools-Learning"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"https:\/\/www.gofundme.com"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"trigger-ga-event"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*\/thankyou"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"trigger-page-view"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"accountCreated"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"customizeComplete"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/dashboard\/create"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/mobile\/user\/signup"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"create?signup"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"create?confirm_new"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":".*"
    },{
      "function":"_css",
      "arg0":["macro",93],
      "arg1":"a.form_submit"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"^\/[a-z0-9]+\/donate$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"\/create\/"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"\/share\/"
    },{
      "function":"_cn",
      "arg0":["macro",95],
      "arg1":"link"
    }],
  "rules":[
    [["if",0],["add",0,3,12,27,23,24]],
    [["if",1,2],["add",1]],
    [["if",3],["add",2]],
    [["if",0,4],["add",3,20]],
    [["if",0,5],["add",3,20]],
    [["if",0,6],["add",3,20]],
    [["if",0,7],["add",3,20]],
    [["if",0,8],["add",3,20]],
    [["if",9],["add",4]],
    [["if",0,10],["add",5,19,28,29]],
    [["if",11],["add",6]],
    [["if",12],["add",7,10,13,15,17,30]],
    [["if",13],["add",8,11,14,16,18,31]],
    [["if",0,14],["add",9]],
    [["if",0,15],["add",9]],
    [["if",0,18],["add",20,21,25,32]],
    [["if",0,19],["add",22]],
    [["if",20,21,22],["add",26]],
    [["if",0,23],["add",33]],
    [["if",0,24],["add",34]],
    [["if",0,25],["add",35]],
    [["if",0,16],["block",9]],
    [["if",0,17],["block",9]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var Ia={},Ka=function(a,b){Ia[a]=Ia[a]||[];Ia[a][b]=!0},La=function(a){for(var b=[],c=Ia[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var f=window,u=document,Ma=navigator,Na=u.currentScript&&u.currentScript.src,Oa=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Pa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qa=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pa(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ra=function(){if(Na){var a=Na.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Sa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Pa(c,b);void 0!==a&&(c.src=a);return c},Ta=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ua=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Va=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Xa=function(a){var b=
u.getElementById(a);if(b&&Wa(b,"id")!=a){Ka("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Wa(document.all[a][c],"id")==a)return document.all[a][c]}return b},Wa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Za=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$a=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ab=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},hb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var rb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return sb.test(document.location.hostname)||"/"===b&&rb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};tb[7]=function(a){return String(a).replace(Ab,Cb)};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.sc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.lf(d,k))}catch(v){b.Md&&b.Md(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.ob);d.push(p)}return Wb&&m?Wb.qf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Rf(a))return Wb.$f(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={yd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),qa:a("function"),Ce:a("instance_name"),De:a("live_only"),Ee:a("malware_disabled"),Fe:a("metadata"),Eg:a("original_vendor_template_id"),Ge:a("once_per_event"),od:a("once_per_load"),pd:a("setup_tags"),qd:a("tag_id"),rd:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.m="GTM-TDTFTZ";yc.sb="5f2";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.m+"&cv=112",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Ra(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Tf()||0>=Wc--?(Ka("GTM",1),Uc[Rc]=!0):(Vc.ig(),Ta(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=La("GTM"),c=La("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.sb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Tf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},ig:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=c+String(b[dc.qa]||"").replace(/_/g,
"");Tc=Tc?Tc+"."+d:"&tr="+d;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new pa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new pa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&Ka("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&Ka("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&Ka("GTM",3);
d?Ka("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&Ka("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){Ka("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ka("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScript"))||c&&-1!==la(c,"sandboxedScript")||(w=qa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={lf:function(a,b){b[dc.Wc]&&"string"===typeof a&&(a=1==b[dc.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.Yc)&&null===a&&(a=b[dc.Yc]);b.hasOwnProperty(dc.$c)&&void 0===a&&(a=b[dc.$c]);b.hasOwnProperty(dc.Zc)&&!0===a&&(a=b[dc.Zc]);b.hasOwnProperty(dc.Xc)&&!1===a&&(a=b[dc.Xc]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)z(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;!e&&d(yc.m)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return z(function(){var c=!1;!c&&b(yc.m)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Ue:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ka("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.pd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{J:g,O:1===k.yd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.Ee])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.qd]),v[dc.Fe]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var A=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){A(C)}}}
var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.sc(g))return null;var m=$b(g[dc.rd],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{J:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.yd?l:p}if(g[dc.od]||g[dc.Ge]){var t=g[dc.od]?Tb:c.sg,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.J;k=w.O}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{J:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ra[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{J:g,O:g,terminate:g},a,d);h?c.push({$d:d,b:bc(e),yf:h}):(qe(d,a),g())}catch(l){g()}}b.Ue();c.sort(re);for(var k=0;k<c.length;k++)c[k].yf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.$d,k=b.$d;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.sc(Sb[d])?"3":"4",g=$b(Sb[d][dc.pd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.rd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event");td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,sc:Ad(c),Ra:[],sg:[],Md:function(p){Ka("GTM",6);je(p)}};h.Ra=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Sb[m];if(n&&!l[n[dc.qa]])return!0}return!1};var G={Pb:"event_callback",Rb:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,Ae=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=Ae(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Pb]&&(c.eventCallback=b[G.Pb]),b[G.Rb]&&(c.eventTimeout=b[G.Rb]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Ue=function(a){if(Te(a))return a;this.xg=a};Ue.prototype.Ef=function(){return this.xg};var Te=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};Ue.prototype.getUntrustedUpdateValue=Ue.prototype.Ef;var Ve=!1,We=[];function Xe(){if(!Ve){Ve=!0;for(var a=0;a<We.length;a++)z(We[a])}}var Ye=function(a){Ve?z(a):We.push(a)};var Ze=[],$e=!1,af=function(a){return f["dataLayer"].push(a)},bf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},df=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});if(!Dc){Dc=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=
cf(a);Fc=null;return e};function cf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.m,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var ef=function(){for(var a=!1;!$e&&0<Ze.length;){$e=!0;delete hd.eventModel;kd();var b=Ze.shift();if(null!=b){var c=Te(b);if(c){var d=b;b=Te(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){$e=!1;continue}}a=df(b)||a}}finally{c&&kd(!0)}}$e=!1}
return!a},ff=function(){var a=ef();try{var b=yc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},gf=function(){var a=Oa("dataLayer",[]),b=Oa("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ye(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ue(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ze.push.apply(Ze,d);if(300<this.length)for(Ka("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ef()&&h};Ze.push.apply(Ze,a.slice(0));z(ff)};var jf=function(a){return hf?u.querySelectorAll(a):null},kf=function(a,b){if(!hf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lf=!1;if(u.querySelectorAll)try{var mf=u.querySelectorAll(":root");mf&&1==mf.length&&mf[0]==u.documentElement&&(lf=!0)}catch(a){}var hf=lf;var nf;var Jf={};Jf.ob=new String("undefined");
var Kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Jf.ob?b:a[d]);return c.join("")}};Kf.prototype.toString=function(){return this.resolve("undefined")};Kf.prototype.valueOf=Kf.prototype.toString;Jf.He=Kf;Jf.ac={};Jf.qf=function(a){return new Kf(a)};var Lf={};Jf.jg=function(a,b){var c=Jc();Lf[c]=[a,b];return c};Jf.wd=function(a){var b=a?0:1;return function(c){var d=Lf[c];if(d&&"function"===typeof d[b])d[b]();Lf[c]=void 0}};Jf.Rf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Jf.$f=function(a){if(a===Jf.ob)return a;var b=Jc();Jf.ac[b]=a;return'google_tag_manager["'+yc.m+'"].macro('+b+")"};Jf.Uf=function(a,b,c){a instanceof Jf.He&&(a=a.resolve(Jf.jg(b,c)),b=fa);return{oc:a,J:b}};var Mf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Wa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Nf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Of=function(a,b,c){Nf(a)[b]=c},Pf=function(a,b,c,d){var e=Nf(a),g=xa(e,b,d);e[b]=c(g)},Qf=function(a,b,c){var d=Nf(a);return xa(d,b,c)};var Rf=function(){for(var a=Ma.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Uf=function(a,b,c,d){var e=Sf(b);return lb(a,e,Tf(c),d)},Sf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Tf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Vf(a,b){var c=""+Sf(a),d=Tf(b);1<d&&(c+="-"+d);return c};var Wf=["1"],Xf={},ag=function(a,b,c,d){var e=Yf(a);Xf[e]||Zf(e,b,c)||($f(e,Rf(),b,c,d),Zf(e,b,c))};function $f(a,b,c,d,e){var g;g=["1",Vf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Zf(a,b,c){var d=Uf(a,b,c,Wf);d&&(Xf[a]=d);return d}function Yf(a){return(a||"_gcl")+"_au"};var bg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Oc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Oc]||(g[a[h].Oc]=[]),g[a[h].Oc].push({timestamp:k[1],Bf:k[2]}))}return g};function cg(){for(var a=dg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function eg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var dg,fg,gg=function(a){dg=dg||eg();fg=fg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(dg[l],dg[m],dg[n],dg[p])}return b.join("")},hg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=fg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}dg=dg||eg();fg=fg||
cg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ig;function jg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var kg=function(){var a=Oa("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var lg=/(.*?)\*(.*?)\*(.*)/,mg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ng=/^(?:www\.|m\.|amp\.)+/,og=/([^?#]+)(\?[^#]*)?(#.*)?/,pg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,rg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(gg(String(d))))}var e=b.join("*");return["1",qg(e),e].join("*")},qg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ig)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}ig=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ig[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},tg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=sg(d)||{};var e=gb(b,"fragment").match(pg);a.fragment=sg(e&&e[3]||
"")||{}}},sg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=lg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===qg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=hg(t[q+1]);return p}}}}catch(r){}};
function ug(a,b,c){function d(m){var n=m,p=pg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=og.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function vg(a,b,c){for(var d={},e={},g=kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&jg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=rg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=ug(l,a.action);bb.test(w)&&(a.action=w)}}}else wg(l,a,!1)}if(!c&&Aa(e)){var v=rg(e);wg(v,a,!0)}}function wg(a,b,c){if(b.href){var d=ug(a,b.href,void 0===c?!1:c);bb.test(d)&&(b.href=d)}}
var xg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||vg(e,e.hostname,!1)}}catch(h){}},yg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=gb(hb(b.action),"host");vg(b,c,!0)}}catch(d){}},zg=function(a,b,c,d){var e=kg();e.init||(Ua(u,"mousedown",xg),Ua(u,"keyup",xg),Ua(u,"submit",yg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};kg().decorators.push(g)},Ag=function(){var a=u.location.hostname,b=mg.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(ng,"")===e.replace(ng,"")},Bg=function(a,b){return!1===a?!1:a||b||Ag()};var Cg={};var Dg=/^\w+$/,Eg=/^[\w-]+$/,Fg=/^~?[\w-]+$/,Gg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Hg(a){return a&&"string"==typeof a&&a.match(Dg)?a:"_gcl"}var Jg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Ig(b,c,d)};
function Ig(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Eg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Cg.gtm_3pds?0:Cg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Kg(a,b,c){function d(p,t){var q=Lg(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Hg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Nd?7776E3:b.Nd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Lg=function(a,b){var c=Gg[a];if(void 0!==c)return b+c},Mg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Ng(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Og=function(a,b,c,d,e){if(ka(b)){var g=Hg(e);zg(function(){for(var h={},k=0;k<a.length;++k){var l=Lg(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Pg=function(a){return a.filter(function(b){return Fg.test(b)})},Qg=function(a){for(var b=["aw","dc"],c=Hg(a&&a.prefix),d={},e=0;e<b.length;e++)Gg[b[e]]&&(d[b[e]]=Gg[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Mg(l),n={};n[g]=[Ng(l)];Kg(n,a,m)}})};var Rg=/^\d+\.fls\.doubleclick\.net$/;function Sg(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Rg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Tg(a,b){if("aw"==a||"dc"==a){var c=Sg("gcl"+a);if(c)return c.split(".")}var d=Hg(b);if("_gcl"==d){var e;e=Jg()[a]||[];if(0<e.length)return e}var g=Lg(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ng(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Pg(k)}else h=k}else h=k}else h=[];return h}
var Ug=function(){var a=Sg("gac");if(a)return decodeURIComponent(a);var b=bg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bf);g=Pg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Vg=function(a,b,c,d,e){ag(b,c,d,e);var g=Xf[Yf(b)],h=Jg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ma.sendBeacon&&Ma.sendBeacon(t)||Ta(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Yf(b),r=Xf[q];r&&$f(q,r,c,d,e)}};var Wg;if(3===yc.sb.length)Wg="g";else{var Xg="G";Wg=Xg}
var Yg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Wg},Zg=function(a){var b=yc.m.split("-"),c=b[0].toUpperCase(),d=Yg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===yc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+yc.sb+
e};var fh=!!f.MutationObserver,gh=void 0,hh=function(a){if(!gh){var b=function(){var c=u.body;if(c)if(fh)(new MutationObserver(function(){for(var e=0;e<gh.length;e++)z(gh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ua(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<gh.length;e++)z(gh[e])}))})}};gh=[];u.body?b():z(b)}gh.push(a)};var zh=f.clearTimeout,Ah=f.setTimeout,H=function(a,b,c){if(Oe()){b&&z(b)}else return Qa(a,b,c)},Bh=function(){return new Date},Ch=function(){return f.location.href},Dh=function(a){return gb(hb(a),"fragment")},Eh=function(a){return fb(hb(a))},Fh=null;
var Gh=function(a,b){return ld(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return af(a)},Ih=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Jh=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Nd:d},g=Jg();Kg(g,e);Qg(e)},Lh=function(a,b,c,d,e){var g=tg(),h=kg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Hg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Gg[p]){var t=Lg(p,m),q=k[t];if(q){var r=Math.min(Mg(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Mg(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Kg(Ig(k.gclid,k.gclsrc),A);},Mh=function(a,b,c,d,e){Og(a,b,c,d,e);},
Nh=function(a,b){if(Oe()){b&&z(b)}else Sa(a,b)},Oh=function(a){return!!Qf(a,"init",!1)},Ph=function(a){Of(a,"init",!0)},Qh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))};

var Sh=Jf.Uf;
var Th=new pa,Uh=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Vh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Th.get(q);r||(r=new RegExp(c,t),Th.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Uh(b,c)}return!1};var Xh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Yh={},Zh=encodeURI,M=encodeURIComponent,$h=Ta;var ai=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var bi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Yh.Sf=function(){var a=!1;return a};var ci=function(){var a=!1;return a};var Mi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ni=function(){this.c=1;this.e=[];this.p=null};function Oi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Ni}var Pi=function(a,b){Oi(a).p=b},Qi=function(a){var b=Oi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Si=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var gj=window,hj=document,ij=function(a){var b=gj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===gj["ga-disable-"+a])return!0;try{var c=gj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",hj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return hj.getElementById("__gaOptOutExtension")?!0:!1};var pj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,void 0));Qi(a)},qj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,!0))},oj=function(a){if(1===Oi(a).c){Oi(a).c=2;var b=encodeURIComponent(a);Qa(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},sj=function(a,b){},rj=function(a,b){};var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.b=0})(function(){return"112"})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Sd();H("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=bi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Zg()})||b()}else b()},b)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=jf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=Xa(a.vtp_elementId);b&&(c=d?Wa(b,d):Za(b));return va(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Mf(c,"gtm.click");Hh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Oh("cl")){var c=K("document");Ua(c,"click",a,!0);Ph("cl")}z(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return na(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Ch();var d=b[a("vtp_component")];if(!d||"URL"==d)return Eh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(bi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(m.vtp_contentGroup,"index","group"),g);Ha(bi(m.vtp_dimension,"index","dimension"),h);Ha(bi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(bi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(c.vtp_contentGroup,
"index","group"),g);Ha(bi(c.vtp_dimension,"index","dimension"),h);Ha(bi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(T){var L=[].slice.call(arguments,0);L[0]=t+L[0];p.apply(window,L)},y=function(T,L){return void 0===L?L:T(L)},x=function(T,L){if(L)for(var Z in L)L.hasOwnProperty(Z)&&v("set",T+Z,L[Z])},A=function(){
var T=function(Db,qb,sc){if(!Ga(qb))return!1;for(var tc=xa(Object(qb),sc,[]),ze=0;tc&&ze<tc.length;ze++)v(Db,tc[ze]);return!!tc&&0<tc.length},L;if(c.vtp_useEcommerceDataLayer){var Z=!1;Z||(L=Gh("ecommerce",1))}else c.vtp_ecommerceMacroData&&(L=c.vtp_ecommerceMacroData.ecommerce);if(!Ga(L))return;L=Object(L);var oa=xa(e,"currencyCode",L.currencyCode);
void 0!==oa&&v("set","&cu",oa);T("ec:addImpression",L,"impressions");if(T("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){v("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Ja=0;Ja<Ba.length;Ja++){var Ya=L[Ba[Ja]];if(Ya){T("ec:addProduct",Ya,"products");v("ec:setAction",Ba[Ja],Ya.actionField);break}}},
B=function(T,L,Z){var oa=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);L[Ba]=Ja;oa++}return oa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",Zg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(T,L){void 0!==
c[L]&&v("set",T,c[L])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var T=e&&e.hitCallback;ha(T)&&T();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");c.vtp_autoLinkDomains&&$d(t,c.vtp_autoLinkDomains,!!c.vtp_useHashAutoLink,!!c.vtp_decorateFormsAutoLink);}if(!a){var U=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(U="internal/"+U);a=!0;var da=D("https:","http:",
"//www.google-analytics.com/"+U,e&&e.forceSSL);H(da,function(){var T=Xd();T&&T.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();




Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.b=0})(function(){return yc.m})}();

Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Ag())&&
Lh(a,h,k,l));Kh(e,c,d);Vg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Mh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.aev=["google"],function(){function a(l,m){var n=!1,p;n||(p=Gh("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(Ch());ka(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!ai(l,p)}function d(l){e.test(l)||(l="http://"+l);return gb(hb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){Y.__aev=l;Y.__aev.g=
"aev";Y.__aev.h=!0;Y.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q;if(ia(g[m]))q=g[m];else{var r=a(m,"element");if(r&&(q=Za(r),g[m]=q,h.push(m),25<h.length)){var w=h.shift();delete g[w]}}return q||n;case "URL":var v;a:{var y=String(a(m,"elementUrl")||n||""),x=hb(y),A=String(l.vtp_component||"URL");switch(A){case "URL":v=y;break a;case "IS_OUTBOUND":v=c(y,l.vtp_affiliatedDomains);
break a;default:v=gb(x,A,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return v;case "ATTRIBUTE":var B;if(void 0===l.vtp_attribute)B=b(m,p,n);else{var C=l.vtp_attribute,E=a(m,"element");B=E&&Wa(E,C)||n||""}return B;default:return b(m,p,n)}})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Sd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Zg()},m=function(p){return function(t,q,r){var w="DATA_LAYER"==p?Gh(r):k[q];w&&(l[t]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,H("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=K(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{H("//bat.bing.com/bat.js",function(){var h=Xh(K("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=bi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();


Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.g="hid";Y.__hid.h=!0;Y.__hid.b=0})(function(){return Jf.ob})}();
Y.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.g="twitter_website_tag";Y.__twitter_website_tag.h=!0;Y.__twitter_website_tag.b=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],H("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=bi(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");
b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);z(a.vtp_gtmOnSuccess)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pa(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,$a(h),k,e)()}else Ah(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.g="dbg";Y.__dbg.h=!0;Y.__dbg.b=0})(function(){return!1})}();


Y.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=ab(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Qf("lcl",k?"nv.mwt":"mwt",0),m;m=k?Qf("lcl","nv.ids",[]):Qf("lcl","ids",[]);if(m.length){var n=Mf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((h.target||"_self").substring(1)),t=!0;if(Hh(n,bf(function(){t&&p&&(p.location.href=h.href)}),
l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Hh(n,function(){},l||2E3);return!0}}};Ua(c,"click",e,!1);Ua(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=Eh(d.href),l=Eh(e.location);return k!==l}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Pf("lcl","mwt",k,0);e||Pf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Pf("lcl","ids",l,[]);e||Pf("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));z(c.vtp_gtmOnSuccess)})}();

var tj={};tj.macro=function(a){if(Jf.ac.hasOwnProperty(a))return Jf.ac[a]},tj.onHtmlSuccess=Jf.wd(!0),tj.onHtmlFailure=Jf.wd(!1);tj.dataLayer=md;tj.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};tj.Ze=function(){zc[yc.m]=tj;za(Ic,Y.a);Wb=Wb||Jf;Xb=Bd};
tj.Nf=function(){zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.m]){var a=zc.zones;a&&a.unregisterChild(yc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=Vh;tj.Ze();gf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ua(u,"DOMContentLoaded",Hd);Ua(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ua(f,"load",Hd)}Ve=!1;"complete"===u.readyState?Xe():
Ua(f,"load",Xe);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,tj.Nf)();

})()
