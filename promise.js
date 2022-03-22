const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (msg === "Hello World") {
                return reject("Something went wrong")
            }
            return resolve(msg);
        }, 1000);
    });
};

showMessageLater("Hello").then( (result) => {
    console.log(result);
    showMessageLater("Hello again").then( (result) => {
        console.log(result);
        showMessageLater("Hello Bello").then( (result) => {
            console.log(result);
        })
    });
}).catch( (error) => {
    console.log(error);
});

