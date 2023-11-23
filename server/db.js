exports.Repository = class Repository {
    constructor() { }

    async getPasswordForUsr(login) {
        if (login == "lucy") {
            return "pass";
        }
        else {
            return null;
        }
    }
}