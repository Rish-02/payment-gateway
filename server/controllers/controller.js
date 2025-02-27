import express from "express";
import { instance } from "../server.js";

export const checkout = async (req,res) => {

    const options={
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options)
    console.log(order);
    res.status(200).json({
        success:true,
        order,
    });
}

export const payment = async (req,res) => {
    // const orderId = req.body.orderId; // Retrieve order ID from frontend

    // if (!orderId) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Order ID missing"
    //     });
    // }
    console.log(req.body);
    res.status(200).json({
        success:true,
        // order,
    });
}