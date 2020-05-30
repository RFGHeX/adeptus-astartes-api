module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('regions', [
      { name: 'Bandle City' },
      { name: 'Bilgewater' },
      { name: 'Demacia' },
      { name: 'Ionia' },
      { name: 'Ixtal' },
      { name: 'Noxus' },
      { name: 'Piltover' },
      { name: 'Shadow Isles' },
      { name: 'Shurima' },
      { name: 'targon' },
      { name: 'The Freljord' },
      { name: 'The Void' },
      { name: 'Zaun' },
      { name: 'Runeterra' }
    ])

    await queryInterface.bulkInsert('champions', [
      { name: 'Aatrox', regionId: '14' },
      { name: 'Ahri', regionId: '4' },
      { name: 'Akali', regionId: '4' },
      { name: 'Alistar', regionId: '14' },
      { name: 'Amumu', regionId: '9' },
      { name: 'Anivia', regionId: '11' },
      { name: 'Annie', regionId: '14' },
      { name: 'Aphelios', regionId: '10' },
      { name: 'Ashe', regionId: '11' },
      { name: 'Aurelion Sol', regionId: '10' },
      { name: 'Azir', regionId: '9' },
      { name: 'Bard', regionId: '14' },
      { name: 'Blitzcrank', regionId: '13' },
      { name: 'Brand', regionId: '14' },
      { name: 'Braum', regionId: '11' },
      { name: 'Caitlyn', regionId: '7' },
      { name: 'Camille', regionId: '7' },
      { name: 'Cassiopeia', regionId: '6' },
      { name: 'Cho-Gath', regionId: '12' },
      { name: 'Corki', regionId: '1' },
      { name: 'Darius', regionId: '6' },
      { name: 'Diana', regionId: '10' },
      { name: 'Draven', regionId: '6' },
      { name: 'Dr.Mundo', regionId: '13' },
      { name: 'Ekko', regionId: '13' },
      { name: 'Elise', regionId: '8' },
      { name: 'Evelynn', regionId: '14' },
      { name: 'Ezreal', regionId: '7' },
      { name: 'Fiddlesticks', regionId: '14' },
      { name: 'Fiora', regionId: '3' },
      { name: 'Fizz', regionId: '2' },
      { name: 'Galio', regionId: '3' },
      { name: 'Gangplank', regionId: '2' },
      { name: 'Garen', regionId: '3' },
      { name: 'Gnar', regionId: '11' },
      { name: 'Gragas', regionId: '11' },
      { name: 'Graves', regionId: '2' },
      { name: 'Hecarim', regionId: '8' },
      { name: 'Heimerdinger', regionId: '7' },
      { name: 'Illaoi', regionId: '2' },
      { name: 'Irellia', regionId: '4' },
      { name: 'Ivern', regionId: '4' },
      { name: 'Janna', regionId: '13' },
      { name: 'Jarvan IV', regionId: '3' },
      { name: 'Jax', regionId: '14' },
      { name: 'Jayce', regionId: '7' },
      { name: 'Jhin', regionId: '4' },
      { name: 'Jinx', regionId: '13' },
      { name: 'Kai-Sa', regionId: '12' },
      { name: 'Kalista', regionId: '8' },
      { name: 'Karma', regionId: '4' },
      { name: 'Karthus', regionId: '8' },
      { name: 'Kassadin', regionId: '12' },
      { name: 'Katarina', regionId: '6' },
      { name: 'Kayle', regionId: '3' },
      { name: 'Kayn', regionId: '4' },
      { name: 'Kennen', regionId: '4' },
      { name: 'Kha-Zix', regionId: '12' },
      { name: 'Kindred', regionId: '14' },
      { name: 'Kled', regionId: '6' },
      { name: 'Kog-Maw', regionId: '12' },
      { name: 'LeBlanc', regionId: '6' },
      { name: 'Lee sin', regionId: '4' },
      { name: 'Leona', regionId: '10' },
      { name: 'Lissandra', regionId: '11' },
      { name: 'Lucian', regionId: '3' },
      { name: 'Lulu', regionId: '1' },
      { name: 'Lux', regionId: '3' },
      { name: 'Malphite', regionId: '5' },
      { name: 'Malzahar', regionId: '12' },
      { name: 'Maokai', regionId: '8' },
      { name: 'Master Yi', regionId: '4' },
      { name: 'Miss Fortune', regionId: '2' },
      { name: 'Mordekaiser', regionId: '8' },
      { name: 'Morgana', regionId: '3' },
      { name: 'Nami', regionId: '14' },
      { name: 'Nasus', regionId: '9' },
      { name: 'Nautilus', regionId: '2' },
      { name: 'Neeko', regionId: '5' },
      { name: 'Nidalee', regionId: '5' },
      { name: 'Nocturne', regionId: '14' },
      { name: 'Nunu & Willump', regionId: '11' },
      { name: 'Olaf', regionId: '11' },
      { name: 'Orianna', regionId: '7' },
      { name: 'Orn', regionId: '11' },
      { name: 'Pantheon', regionId: '10' },
      { name: 'Poppy', regionId: '3' },
      { name: 'Pyke', regionId: '2' },
      { name: 'Qiyana', regionId: '5' },
      { name: 'Quinn', regionId: '3' },
      { name: 'Rakan', regionId: '4' },
      { name: 'Rammus', regionId: '9' },
      { name: 'Rek-Sai', regionId: '12' },
      { name: 'Renekton', regionId: '9' },
      { name: 'Rengar', regionId: '5' },
      { name: 'Riven', regionId: '6' },
      { name: 'Rumble', regionId: '1' },
      { name: 'Ryze', regionId: '14' },
      { name: 'Sejuani', regionId: '11' },
      { name: 'Senna', regionId: '14' },
      { name: 'Sett', regionId: '4' },
      { name: 'Shaco', regionId: '14' },
      { name: 'Shen', regionId: '4' },
      { name: 'Shyvana', regionId: '3' },
      { name: 'Singed', regionId: '13' },
      { name: 'Sion', regionId: '6' },
      { name: 'Sivir', regionId: '9' },
      { name: 'Skarner', regionId: '9' },
      { name: 'Sona', regionId: '3' },
      { name: 'Soraka', regionId: '10' },
      { name: 'Swain', regionId: '6' },
      { name: 'Sylas', regionId: '3' },
      { name: 'Syndra', regionId: '4' },
      { name: 'Tahm Kench', regionId: '14' },
      { name: 'Taliyah', regionId: '9' },
      { name: 'Talon', regionId: '6' },
      { name: 'Taric', regionId: '10' },
      { name: 'Teemo', regionId: '1' },
      { name: 'Thresh', regionId: '8' },
      { name: 'Tristana', regionId: '1' },
      { name: 'trundle', regionId: '11' },
      { name: 'Tryndamere', regionId: '11' },
      { name: 'Twisted Fate', regionId: '2' },
      { name: 'Twitch', regionId: '13' },
      { name: 'Udyr', regionId: '11' },
      { name: 'Urgot', regionId: '13' },
      { name: 'Varus', regionId: '4' },
      { name: 'Vayne', regionId: '3' },
      { name: 'veigar', regionId: '1' },
      { name: 'Vel-Koz', regionId: '12' },
      { name: 'Vi', regionId: '7' },
      { name: 'Viktor', regionId: '13' },
      { name: 'Vladimir', regionId: '6' },
      { name: 'Volibear', regionId: '11' },
      { name: 'Warwick', regionId: '13' },
      { name: 'Wukong', regionId: '4' },
      { name: 'Xayah', regionId: '4' },
      { name: 'Xerath', regionId: '9' },
      { name: 'Xin Zhao', regionId: '3' },
      { name: 'Yasuo', regionId: '4' },
      { name: 'Yorick', regionId: '8' },
      { name: 'Yuumi', regionId: '1' },
      { name: 'Zac', regionId: '13' },
      { name: 'Zed', regionId: '4' },
      { name: 'Ziggs', regionId: '13' },
      { name: 'Zilean', regionId: '14' },
      { name: 'Zoe', regionId: '10' },
      { name: 'Zyra', regionId: '5' },
    ])

    await queryInterface.bulkInsert('roles', [
      { role: 'Assassin' },
      { role: 'Fighter' },
      { role: 'Mage' },
      { role: 'Marksman' },
      { role: 'Support' },
      { role: 'Tank' },
    ])

    await queryInterface.bulkInsert('championRoles', [
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ahri\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Akali\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ekko\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Evelynn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fiora\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fizz\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Irellia\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jax\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kassadin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Katarina\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kayn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kha-Zix\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'LeBlanc\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lee Sin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Malzahar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Master Yi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nidalee\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nocturne\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Pantheon\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Pyke\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Qiyana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Quinn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rengar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Riven\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Shaco\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sylas\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Talon\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Teemo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tristana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tryndamere\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Twitch\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vayne\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Xin Zhao\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yasuo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zed\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Assassin\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Aatrox\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Blitzcrank\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Camille\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Darius\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Diana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Dr.Mundo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ekko\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Elise\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fiora\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fizz\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Gangplank\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Garen\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Gnar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Gragas\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Hecarim\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Illaoi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Irellia\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jarvan IV\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jax\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jayce\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kayle\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kayn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kled\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lee Sin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Malphite\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Master Yi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Mordekaiser\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nasus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nautilus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nocturne\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nunu & Willump\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Olaf\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Orn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Pantheon\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Poppy\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Qiyana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rammus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rek-Sai\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Renekton\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rengar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Riven\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rumble\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ryze\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sejuani\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sett\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Shyvana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Singed\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sion\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Skarner\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Swain\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Taric\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Thresh\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Trundle\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tryndamere\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Udyr\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Urgot\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Volibear\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Warwick\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Wukong\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Xin Zhao\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yasuo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yorick\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zac\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Fighter\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ahri\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Amumu\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Anivia\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Annie\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Aurelion Sol\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Azir\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Bard\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Brand\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Cassiopeia\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Cho-Gath\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Diana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Elise\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Evelynn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ezreal\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fiddlesticks\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Galio\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Gragas\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Heimerdinger\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ivern\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Janna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jhin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Karma\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Karthus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kassadin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Katarina\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kennen\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kog-Maw\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'LeBlanc\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lissandra\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lulu\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lux\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Malzahar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Maokai\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Morgana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nami\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Neeko\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nidalee\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Orianna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rumble\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ryze\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sona\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Soraka\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Swain\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sylas\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Syndra\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Taliyah\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Twisted Fate\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Varus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Veigar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vel-Koz\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Viktor\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vladimir\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Xerath\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yuumi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ziggs\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zilean\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zoe\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zyra\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Mage\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Aphelios\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ashe\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Azir\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Caitlyn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Corki\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Draven\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ezreal\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Graves\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jayce\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jhin\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jinx\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kai-Sa\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kalista\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kennen\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kindred\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kog-Maw\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lucian\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Miss Fortune\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Quinn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Senna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sivir\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Teemo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tristana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Twitch\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Varus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Vayne\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Xayah\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Marksman\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Alistar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Anivia\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ashe\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Bard\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Braum\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Fiddlesticks\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Heimerdinger\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Ivern\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Janna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Karma\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kayle\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Leona\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lulu\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Lux\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Morgana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nami\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Neeko\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Orianna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Pyke\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rakan\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Senna\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sona\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Soraka\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Syndra\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tahm Kench\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Taliyah\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Taric\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Thresh\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yuumi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zilean\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zoe\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zyra\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Support\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Aatrox\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Alistar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Amumu\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Blitzcrank\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Braum\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Camille\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Cho-Gath\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Darius\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Dr.Mundo\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Galio\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Garen\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Gnar\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Hecarim\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Illaoi\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Jarvan IV\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Kled\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Leona\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Malphite\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Maokai\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nasus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nautilus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Nunu & Willump\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Olaf\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Orn\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Poppy\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Rammus\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Renekton\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sejuani\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sett\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Shen\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Shyvana\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Singed\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Sion\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Skarner\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Tahm Kench\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Trundle\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Udyr\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Urgot\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Volibear\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Warwick\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Wukong\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Yorick\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      },
      {
        championId: Sequelize.literal('(SELECT id FROM champions WHERE name = \'Zac\')'),
        roleId: Sequelize.literal('(SELECT id FROM roles WHERE role = \'Tank\')')
      }
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('championRoles')

    await queryInterface.bulkDelete('roles')

    await queryInterface.bulkDelete('champions')

    await queryInterface.bulkDelete('regions')
  }
}
