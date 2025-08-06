require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel} = require("./models/HoldingsModel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], 
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", require("./routes/AuthRoute"));

// app.get('/addHoldings',async(req,res)=>{
//     let tempHoldings=[
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//           },
//           {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//           },
//           {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//           },
//           {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//           },
//           {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//           },
//           {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//           },
//           {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//           },
//           {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//           },
//           {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//           },
//           {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//           },
//           {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//           },
//           {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//           },
//           {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//           },
//     ]

//     tempHoldings.forEach((item)=>{
//         let newHoldings = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHoldings.save();
//     });
//     res.send("Done!");
// });

// app.get('/addPositions', async(req,res)=>{
//     let tempPositions=[
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ]

//     tempPositions.forEach((item)=>{
//         let newPositions  = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPositions.save();
//     });
//     res.send("Done!");
// });

app.get("/allHoldings", async(req, res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get("/allPositions", async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});
app.get("/newOrders", async(req, res)=>{
    let newOrders = await OrdersModel.find({});
    res.json(newOrders);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // Simulate LTP with ±5% variation
    const ltp = Number((price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2));
    const netChange = (ltp - price) * qty;
    const isLoss = netChange < 0;
    const netStr = (netChange >= 0 ? "+" : "") + netChange.toFixed(2);

    // Simulate day change between -2.5% to +2.5%
    const dayChange = (ltp * ((Math.random() - 0.5) * 0.05)).toFixed(2);
    const dayStr = (dayChange >= 0 ? "+" : "") + dayChange;
    
    if (mode === "BUY") {
      const newHolding = new HoldingsModel({
        name,
        qty,
        price: ltp,
        avg: price,
        net: netStr,
        day: dayStr,
        isLoss,
      });
      await newHolding.save();
    }

    else if (mode === "SELL") {
      const existing = await HoldingsModel.findOne({ name });
      if (!existing) {
        return res.status(400).send("Sell failed: Stock not in holdings.");
      }

      if (existing.qty < qty) {
        return res
          .status(400)
          .send(`Sell failed: Not enough quantity. You have ${existing.qty}.`);
      }

      existing.qty -= qty;

      if (existing.qty === 0) {
        await HoldingsModel.deleteOne({ _id: existing._id });
      } else {
        existing.price = ltp;
        existing.net = netStr;
        existing.day = dayStr;
        existing.isLoss = isLoss;
        await existing.save();
      }
    }

    res.status(200).send("Order and holdings updated.");
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).send("Something went wrong.");
  }
});

app.listen(PORT, ()=>{
    console.log("app is running on port 3002");
    mongoose.connect(uri);
    console.log("connected to database");
})