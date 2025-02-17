import express from "express";
import employeeRoutes  from "./routes/employee-routes";
import supplierRoutes from "./routes/supplier-routes";
import userAdminRoutes from "./routes/userAdmin-routes";
import cinnamonStockRoutes from "./routes/cinnamonStock-routes";
import logRoutes from "./routes/log-routes";
import vehicleRoutes from "./routes/vehicle-routes";

const app = express();

app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use(express.json());

app.use('/employees', employeeRoutes);

app.use('/suppliers',supplierRoutes);

app.use('/userAdmin',userAdminRoutes);

app.use('/cinnamonStock',cinnamonStockRoutes);

app.use('/log',logRoutes);

app.use('/vehicle',vehicleRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});