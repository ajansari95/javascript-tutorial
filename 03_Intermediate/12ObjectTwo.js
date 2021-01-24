var iphoneSpecs = {
    model : "6s plus",
    processor : "A9",
    gpu : "M9",
    os : "iOS 14.3",
    camera : "12MP + 2MP",
    screenRes: "1080p",
    battery: "2718mAh",
    appList : [],
    buyApp: function(appName){
        this.appList.push(appName);
    },
    getAppCount: function(){
        return `${this.model} has total of ${this.appList.length} apps`;
    }
}



console.log(iphoneSpecs.model);
console.log(iphoneSpecs.getAppCount());
console.log(iphoneSpecs.buyApp("Facebook"));
console.log(iphoneSpecs.appList);
console.log(iphoneSpecs.getAppCount());