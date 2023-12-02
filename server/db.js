exports.Repository = class Repository {
    constructor() { }

    users = [
        {
            login: "lucy",
            displayname: "Lucy Stilman",
            password: "pass"
        },
        {
            login: "adam",
            displayname: "Adam Erkek",
            password: "abc"
        },
        {
            login: "tina",
            displayname: "Tina T",
            password: "pas"
        },
    ]

    async getPasswordForUsr(usrlogin) {
        let usr = this.users.find(({ login }) => login === usrlogin);
        if (usr) {
            return usr.password;
        }
        else {
            return null;
        }
    }

    async getAccountForUsr(usrlogin) {
        let usr = this.users.find(({ login }) => login === usrlogin);
        if (usr) {
            return { displayname: usr.displayname, login: usr.login };
        }
        else {
            return null;
        }
    }
}