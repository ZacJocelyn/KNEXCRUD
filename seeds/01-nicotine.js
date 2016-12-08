exports.seed = function(knex, Promise) {
  return knex('nicotine').del()
    .then(function () {
      const nicotines = [{
        type: 'cigarette',
        mg: 16
      },{
        type: 'E-cig',
        mg: 3
      },{
        type: 'chew',
        mg: 24
      }
    ]

      return knex('nicotine').insert(nicotines);
    });
};
