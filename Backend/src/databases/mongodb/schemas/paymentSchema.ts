import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const paymentSchema = new mongoose.Schema(
    {
      creadoPor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      categorias: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Pruebas',
        },
      ],
        costoEvento: {
          type: Number,
          
        },
        comision: {
          type: Number,
          
        },
        totalPagar: {
          type: Number,
          
        },
        estadoPago: {
          type: String,
          enum: ['pendiente', 'completado', 'rechazado'],
          default: 'pendiente',
        },
           
        detallesPago: {
            type: String,
            
        },  

        metodoPago: {
            type: String,
            enum: ['efectivo', 'mercadoPago', 'Stripe', 'transferencia'],
            default: 'efectivo',
        },

        codigoPagoEfectivo: {
          type: String,
          
      },  
          
        },
      {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        },
      }
    );
  
    paymentSchema.plugin(toJSON);
  //purchageSchema.plugin(paginate);
  
  const Payment = mongoose.model('Payment', paymentSchema);

  export default Payment;