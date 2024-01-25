import axios from "axios"



export const handlePayment = async ({ token, payment, type, loading, error, succes}) => {
    switch (type) {
        case 'mp':
            try {
                loading(true)
                let headers = {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                };

                let response = await axios.post("/mercadopago/pagar", { payment }, { headers: headers });
                succes(response.data)
                loading(false)
            }
            catch (err) {
                error(err)
                loading(false)

            }
            break
        case 'efectivo':
            try {
                loading(true)
                let headers = {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                };

                let categoriaId = payment.categoriaId
                let horseId = payment.horseId

                let newPayment = {
                    monto: payment.monto,
                    detallesPago: payment.detallesPago
                }

                let response = await axios.post("/payment/efectivo", { payment }, { headers: headers });
                succes(response.data)
                loading(false)
            }
            
            catch (err) {
                error(err)
                loading(false)

            }
            break
            
        default:
            break

    }
}


