'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      docent_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {model: 'Pessoas', key:'ID'}
      },
      nivel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Niveis', key:'ID'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas');
  }
};