const { default: db } = require("../models");

const Accounts = db.Accounts;

export const getAccounts = async(req,res)=>
{
    const accounts = req.body;
    try{
        const response = await Accounts.findAll();
        if (!response)
        {
            return res.status(404).json({message:"No Accounts found"});
        }
        res.status(200).json(response);
    }
    catch(e){
        res.status(400).json({message:"Internal Server Error",e});
    }
}