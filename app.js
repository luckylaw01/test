const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest =indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event){
    db = event.target.result;
}

dbRequest.onupgradeneeded = function(event){
    db = event.target.result;
    
        const objStore = db.createObjectStore('products', {keyPath: 'id'});
    
        objStore.transaction.onComplete = function(event){
            const productstore = db.transaction('products', 'readwite').objectStore('products');
            productstore.add({id: 'p1', title: 'A First Product', price: 12.99, tags: ['Expensive', 'Luxury']});
        }
    
    
}

dbRequest.onerror = function(event){
    console.log('Error: ' + this.error)
}

storeBtn.addEventListener('click', () => {
    //IndexsdDb is the most complex storage - woking with in-bowser database
    if(!db){
        console.log("ERROR!");
    }
        const productstore = db.transaction('products', 'readwrite').objectStore('products');
        productstore.add({id: 'p2', title: 'A Second Product', price: 122.99, tags: ['Expensive', 'Luxury']});
    
    
});

retrBtn.addEventListener('click', () => {
    const productstore = db.transaction('products', 'readwrite').objStore('products');
    const request = productstore.get('p2');

    request.onsuccess = function(){
        console.log(request.result);
    }
});