const express = require("express")

const app = express()

app.use(express.json())

app.post("/v2/payments/:orderId", (req, res) => {
    console.log(`Got request for orderId: ${req.params.orderId}\n${JSON.stringify(req.body)}`)
    res.send("ok")
})

app.listen(8000, () => {
    console.log("app listening at 8000")
})