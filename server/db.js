var users = [
    {
        id: 0,
        displayname: "Lucy Stilman",
        login: "lucy00",
        email: "lucys@mail.com",
        password: "$2a$12$/sAcmjwfy0agTumH9B4MpeVHKunNJenzg51Ph59x4xspdSMpvwMc." // pass
    },
    {
        id: 1,
        displayname: "Adam Erkek",
        login: "adam",
        email: "erad@ben.tr",
        password: "$2a$12$DxLwm3b3ckIGauOk9F/Xp.Jlo145Qxq03Z/uXCkOurlpMmK7J7GLy" // abc
    },
    {
        id: 2,
        displayname: "Tina T",
        login: "tina12",
        email: "tina@mail.com",
        password: "$2a$12$v08dv5EKmtIy4jaTQgJVC.56n4mJ.1FILxPaCnkABAcpCqhk7BoxW" // pas
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
        let usr = users.find(({ login }) => login === usrlogin);
        if (usr) {
            return { id: usr.id, pwdHsh: usr.password };
        }
        else {
            return { id: null, pwdHsh: null };
        }
    }

    async getAccountForUsr(usrid) {
        let usr = users.find(({ id }) => id === usrid);
        if (usr) {
            return { id: usr.id, displayname: usr.displayname, login: usr.login };
        }
        else {
            return null;
        }
    }
}