 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //criar, alterar tabelas, colunas
   await
    await queryInterface.createTable('recipes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      message: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
  //apagar, excluir, deletar tabelas, colunas
    await queryInterface.dropTable('recipes');

  }
};

//esse monte de numeros no nome desse arquivo é o timestamp do seu SO, é melhor não apagar esse nome
//sempre busque criar essa pasta database/migration por comando e não na mão

// Referencias
//  https://sequelize.org/v3/docs/migrations/