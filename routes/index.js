var express = require('express');
var router = express.Router();


const list = [{
  name: 'admin',
  password: '1234',
  password2: '1234',
  mail: 'local',
}]

const list2 = [{
  name: 'Renault Clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
},
{
  name: 'Renault Espace',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
},
{
  name: 'Renault Kadjar',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}]

const list3 = [{
  name: 'bmwt clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}, {
  name: 'bmwt clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
},
{
  name: 'bmwt clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}]


const list4 = [{
  name: 'mercedes clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}, {
  name: 'mercedes clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
},
{
  name: 'mercedes clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}]


const list5 = [{
  name: 'citroen clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}, {
  name: 'citroen clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
},
{
  name: 'citroen clio',
  date_debut: '1906-11-04',
  date_fin: '1996-07-02',
  description: 'vive babar',
}]


/* GET home page. */
router.get('/public/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})


router.get('/list', (req, res) => {
  res.json(list)
}),
router.get('/list2', (req, res) => {
  res.json(list2)
})

router.get('/list3', (req, res) => {
  res.json(list3)
});
router.get('/list4', (req, res) => {
  res.json(list4)
})
router.get('/list5', (req, res) => {
  res.json(list5)
})



router.post('/list', (req, res) => {
  list.push({
    name: req.body.name,
    password: req.body.password,
    password2: req.body.password2,
    mail: req.body.mail,

  })
  res.send('OK')
});

router.post('/list2', (req, res) => {
  list2.push({
    name: req.body.name,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    description: req.body.description,

  })
  res.send('OK')
});

router.post('/list3', (req, res) => {
  list3.push({
    name: req.body.name,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    description: req.body.description,

  })
  res.send('OK')
});

router.post('/list4', (req, res) => {
  list4.push({
    name: req.body.name,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    description: req.body.description,

  })
  res.send('OK')
});
router.post('/list5', (req, res) => {
  list5.push({
    name: req.body.name,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    description: req.body.description,

  })
  res.send('OK')
});

router.post('/list2', (req, res) => {
  list2.unset({
    myList: req.body.myList
  })

});







module.exports = router;
