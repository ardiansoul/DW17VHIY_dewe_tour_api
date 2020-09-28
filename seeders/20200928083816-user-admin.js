"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", [
      {
        id: 1,
        fullName: "ardiyana",
        email: "yanaardi523@gmail.com",
        password:
          "$2a$10$b.ri7S6GtPj8RvFS/bNiKewsoC9SZBfPo2qmLEwZYnYnrPKR6aYBG",
        phone: 0895369569314,
        address: "Jalan Panjang untuk kita berdua",
        role: "admin",
        image: NULL,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};