// Just paste this into the console and you're good!
// FYI- Don't paste random people's scripts in consoles
// if you don't understand them! Totally not hypocritical
// in the least!

/**
 * Sleep function so cloudflare doesn't molest you
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Call the function which gives you all the data you need!
 */
var q = Array.from(document.getElementsByClassName("item")).map(el => {
    return {
        text: el.dataset.itemText,
        itemId: Number(el.dataset.itemId),
        element: el
    };
});
var fail = false;
});
// If you start blowing up your computer, just 
// type in fail = true and it should stop!
while (!fail) {
    for (var i = 0; i < q.length; ++i) {
        for (var j = i; j < q.length; ++j) {
            // you can do j = i because the craft function
            // actually sorts it for you. I found this one
            // out through the dev panel.
            if (!fail) break;
            //I'm not lying!!!
            await window.IC.craft(q[i], q[j]);
            // behold, my magic, the hidden game functions
            // which i spent quite a long 5 minutes brute forcing
            // out of the document because i was too lazy to 
            // hijack the the javascript at load time
            await sleep(50);
            // pls cloudflare... there's no need for another 429
            // i swear i put the await there this time ... (you 
            // can also just use their own cloudflare WARP vpn  
            // to bypass the wait time for the 429 try again later)
            window.IC.clearInstances()
            // clear the old instances so ur computer doesn't blow up
            // oh, performance also is affected if u don't
        }
    }
    q = Array.from(document.getElementsByClassName("item")).map(el => {
        return {
            text: el.dataset.itemText,
            itemId: Number(el.dataset.itemId),
            element: el
        };
});
}
