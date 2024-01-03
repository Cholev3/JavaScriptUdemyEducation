let ivan = {
    firstName: 'Ivan',
    lastName: 'Cholev',
    birthYear: 1996,
    job: 'professional athlete',
    location: 'Bulgaria',
    friends: ['Vladi', 'Toshko', 'Ivan'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${ivan.firstName} is a ${ivan.calcAge()}-year old ${ivan.job}, and he has ${ivan.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

console.log(ivan.getSummary());

let bestFriendIndex = ivan.friends.indexOf('Vladi');

console.log(`${ivan.firstName} has ${ivan.friends.length} friends, and his best friend is called ${ivan.friends[bestFriendIndex]}.`);

