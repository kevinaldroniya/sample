const method1 = (req, res) => {
    res.send("Hello, lets begin our journey!")
}

const method2 = (req, res) => {
    const {name} = req.body;
    res.send(`Welcome to the journey ${name}`);
}

module.exports = {
    method1,
    method2
}