const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
            console.log(resolve);
        }, 2000);
    });
};

export default helloWorld;
