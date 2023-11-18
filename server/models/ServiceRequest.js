import { Schema, model } from "mongoose";

const serviceRequestSchema = new Schema({
    type: {
        type: String,    
    },
    description : {
        type: String,    
    },
    address: {
        type: String,    
    },
    mobile: {
        type: Number,    
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },

      status: {
        default: 'pending'
      },

      charges: {
        type: Number,
      },

      provide: {
        type: String,
        default: [ ]
      }
   
}, {
    timestamps: true 
});

const ServiceRequest = model("ServiceRequest", serviceRequestSchema);

export default ServiceRequest;
