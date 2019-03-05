const loki = require("lokijs");
const lfsa = require('lokijs/src/loki-fs-structured-adapter.js');
const adapter = new lfsa();
const Cache = new loki("cachedb/cache",{
    adapter : adapter,
    autosave: true, 
    autosaveInterval: 4000
});

export default Cache;