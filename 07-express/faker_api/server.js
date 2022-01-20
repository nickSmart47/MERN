const express = require("express");
const app = express();
const faker = require("@faker-js/faker");

const server = app.listen(8000, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});



app.get('/api/users/new', (req, res) => {
    let randomFakeUser = new User
    res.json(randomFakeUser);
});

app.get('/api/companies/new', (req, res) => {
    let randomFakeCompany = new Company
    res.json(randomFakeCompany);
});

app.get('/api/user/company', (req, res) => {
    let randomFakeUser = new User
    let randomFakeCompany = new Company
    res.json({randomFakeUser,
        randomFakeCompany});
});