import mongoose, { Schema, model, models } from "mongoose";

const leadsSchema = new Schema(
    {
        companyname: { type: String, required: false },
        name: { type: String, required: true },
        contact: { type: String, required: true, unique: true },
        address: { type: String, required: false },
        area: { type: String, required: true },
        city: { type: String, default: "Indore" }, 
        country: { type: String, default: "India" },
        cat: { type: String, required: true },
        quality: { type: String, required: true },
        desc: { type: String, required: false },
        author: { type: String, required: true },
    },
    { timestamps: true }
);

const Lead = models.Lead || model("Lead", leadsSchema);

export { Lead };
