drop database if exists cinnamonBliss;
CREATE DATABASE cinnamonBliss;
USE cinnamonBliss;

CREATE TABLE userAdmin (
                           email VARCHAR(100) PRIMARY KEY,
                           password VARCHAR(255) UNIQUE NOT NULL,
                           role VARCHAR(50)  NOT NULL
);

CREATE TABLE employees (
                           employeeID VARCHAR(50) PRIMARY KEY,
                           firstName VARCHAR(100) NOT NULL,
                           lastName VARCHAR(100) NOT NULL,
                           role VARCHAR(100) NOT NULL,
                           gender VARCHAR(10) NOT NULL,
                           joinedDate DATE NOT NULL,
                           dob DATE NOT NULL,
                           addressLine01 VARCHAR(255) NOT NULL,
                           addressLine02 VARCHAR(255),
                           addressLine03 VARCHAR(255),
                           addressLine04 VARCHAR(255),
                           addressLine05 VARCHAR(255),
                           postalCode VARCHAR(20) NOT NULL,
                           contactNo VARCHAR(20) NOT NULL,
                           email VARCHAR(100) NOT NULL
);

CREATE TABLE suppliers (
                           supplierID VARCHAR(50) PRIMARY KEY,
                           firstName VARCHAR(100) NOT NULL,
                           lastName VARCHAR(100) NOT NULL,
                           gender VARCHAR(10) NOT NULL,
                           addressLine01 VARCHAR(255) NOT NULL,
                           postalCode VARCHAR(20) NOT NULL,
                           contactNo VARCHAR(20) NOT NULL,
                           email VARCHAR(100) NOT NULL
);

CREATE TABLE product(
    batchCode VARCHAR(50) PRIMARY KEY ,
    quality VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL ,
    price DECIMAL(10,2) NOT NULL,
    observedImage LONGTEXT NULL
);

CREATE TABLE cinnamonStock (
                               stockID VARCHAR(50) PRIMARY KEY,
                               batchCode VARCHAR(50) NOT NULL,
                               total DECIMAL(10,2) NOT NULL,
                               quantity DECIMAL(10,2) NOT NULL,
                               supplierID VARCHAR(50),
                               receivedDate DATE NOT NULL,
                               FOREIGN KEY (supplierID) REFERENCES suppliers(supplierID),
                                FOREIGN KEY (batchCode) REFERENCES product(batchCode)

);

CREATE TABLE vehicles (
                          vehicleID  VARCHAR(50),
                          licensePlate VARCHAR(20) UNIQUE NOT NULL,
                            available BOOLEAN NOT NULL,
                          model VARCHAR(50),
                          capacity VARCHAR(50),
                          employeeID VARCHAR(50)  NULL,
                          FOREIGN KEY (employeeID) REFERENCES employees(employeeID)
);

CREATE TABLE logs (
                      logID VARCHAR(50) PRIMARY KEY,
                      logImage LONGTEXT NULL,
                      employeeID VARCHAR(50) NULL,
                      batchCode VARCHAR(50) NULL,
                      logsDes VARCHAR(100),
                      logDate DATE NOT NULL,
                      FOREIGN KEY (employeeID) REFERENCES employees(employeeID),
                      FOREIGN KEY (batchCode) REFERENCES product(batchCode)
);

