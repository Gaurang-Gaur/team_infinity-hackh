import mongoose from "mongoose";

const weaponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    manufacturingdate: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    lastupdate: {
      type: Number,
      required: true,
    },
    issuedate: {
      type: Number,
    },
    type: {
      type: String,
    },
    features: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Weapon = mongoose.model("Weapon", weaponSchema);
