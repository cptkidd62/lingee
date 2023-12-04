var users = [
    {
        displayname: "Lucy Stilman",
        login: "lucy00",
        email: "lucys@mail.com",
        password: "pass"
    },
    {
        displayname: "Adam Erkek",
        login: "adam",
        email: "erad@ben.tr",
        password: "abc"
    },
    {
        displayname: "Tina T",
        login: "tina12",
        email: "tina@mail.com",
        password: "pas"
    },
]

exports.Repository = class Repository {
    constructor() { }

    async addUsr(usr) {
        users.push(usr);
        console.log(users);
    }

    async loginExists(usrlogin) {
        let res = users.find(({ login }) => login === usrlogin);
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    async emailExists(usremail) {
        let res = users.find(({ email }) => email === usremail);
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    async getPasswordForUsr(usrlogin) {
        console.log(users);
        let usr = users.find(({ login }) => login === usrlogin);
        if (usr) {
            return usr.password;
        }
        else {
            return null;
        }
    }

    async getAccountForUsr(usrlogin) {
        console.log(users);
        let usr = users.find(({ login }) => login === usrlogin);
        if (usr) {
            return { displayname: usr.displayname, login: usr.login };
        }
        else {
            return null;
        }
    }
}