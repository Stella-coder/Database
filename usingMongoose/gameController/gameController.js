const express = require("express")
const mongoose = require("mongoose")
const gameModel = require("../gameModel")

const newGamer = async (req,res)=>{
    try{
        const gamer = gameModel.create({
            name:req.body.name,
            game:req.body.game,
            date: Date.now()
        })
        res.status(200).json({gamer})

    } catch (error){
        res.status(404).json({message:error.message})
    }
}


const allGamers = async (req,res)=>{
    try{
        const allGamer = gameModel.find()
        res.status(200).json({allGamer})

    } catch (error){
        res.status(400).json({message:error.message})

    }
}

module.exports = {
    newGamer, allGamers
}