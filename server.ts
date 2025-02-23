import express from "express";
import employeeRoutes  from "./routes/employee-routes";
import supplierRoutes from "./routes/supplier-routes";
import userAdminRoutes from "./routes/userAdmin-routes";
import cinnamonStockRoutes from "./routes/cinnamonStock-routes";
import vehicleRoutes from "./routes/vehicle-routes";
import dotenv from "dotenv";
import cors from 'cors';

import logRoutes from "./routes/log-routes";
import productRoutes from "./routes/product-routes";
const app = express();

app.use(express.json());// })

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
dotenv.config();

//
// app.use('/auth', userAdminRoutes);
// app.use(authenticateToken);


app.use('/employees', employeeRoutes);

app.use('/suppliers',supplierRoutes);

app.use('/userAdmin',userAdminRoutes);

app.use('/cinnamonStock',cinnamonStockRoutes);

app.use('/products',productRoutes);

app.use('/log',logRoutes);

app.use('/vehicle',vehicleRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});