const express = require("express");
const uuid = require("uuid");
const route = express.Router();
const Customers = require("../model/prospect");

//list all prospect set customer
route.get("/", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  } catch (err) {
    res.send("Error: " + err);
  }
});

//get selected customer
route.get("/:id", async (req, res) => {
  try {
    const customer = await Customers.findOne({ id: req.params.id });
    res.json(customer);
  } catch (err) {
    res.send("Error: " + err);
  }
});

//create new customer in prospect set
route.post("/", async (req, res) => {
  const ts = Date.now();
  const currentDate = new Date(ts);

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const fullDate = `${day}-${month}-${year}`;

  const customer = new Customers({
    id: uuid.v4(),
    prospectName: req.body.prospectName,
    demographic: req.body.demographic,
    source: req.body.source,
    addedBy: req.body.addedBy,
    dateAdded: fullDate,
    setType: req.body.setType,
    howMany: req.body.howMany
  });
  try {
    const newCustomer = await customer.save();
    res.json(newCustomer);
  } catch (err) {
    res.send("Error: " + err);
  }
});

//Update  Customer
route.put("/:id", async (req, res) => {
  try {
    const customer = await Customers.findOne({ id: req.params.id });
    if (customer) {
      customer.prospectName = req.body.prospectName
        ? req.body.prospectName
        : customer.prospectName;
      customer.demographic = req.body.demographic
        ? req.body.demographic
        : customer.demographic;
      customer.source = req.body.source ? req.body.source : customer.source;
      customer.addedBy = req.body.addedBy ? req.body.addedBy : customer.addedBy;
      customer.setType = req.body.setType ? req.body.setType : customer.setType;
      customer.howMany = req.body.howMany ? req.body.howMany : customer.howMany;

      const updatedCustomer = await customer.save();
      res.json(updatedCustomer);
    }
  } catch (err) {
    res.json("Error: " + err);
  }
});

//Delete customer
route.delete("/:id", async (req, res) => {
  try {
    await Customers.deleteOne({ id: req.params.id });
    const customers = await Customers.find();
    res.json(customers);
  } catch (err) {
    res.json("Error:" + err);
  }
});

module.exports = route;
